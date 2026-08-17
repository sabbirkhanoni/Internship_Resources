import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const clueSchema = {
  type: "object",
  properties: {
    clues: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          label: {
            type: "string",
          },
          confirmed: {
            type: "boolean",
          },
        },
        required: ["id", "label", "confirmed"],
      },
    },
  },
  required: ["clues"],
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          error: "Message is required",
        },
        {
          status: 400,
        },
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",

      contents: `
You are a location investigation assistant.

Analyze the user's memory and extract useful geographical clues.

User memory:
"${message}"

Rules:
- Extract only useful location-related clues.
- Do not invent information.
- Use short human-readable labels.
- If the user clearly states something, confirmed should be true.
- Return only the structured JSON response.
      `,

      config: {
        responseMimeType: "application/json",
        responseSchema: clueSchema,
      },
    });

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    const result = JSON.parse(text);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      {
        error: "Failed to analyze the message.",
      },
      {
        status: 500,
      },
    );
  }
}
