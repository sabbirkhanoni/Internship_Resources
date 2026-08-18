import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const clueSchema = {
  type: "object",
  properties: {
    reply: {
      type: "string",
    },

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

    candidates: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },

          name: {
            type: "string",
          },

          location: {
            type: "string",
          },

          position: {
            type: "array",
            items: {
              type: "number",
            },
            minItems: 2,
            maxItems: 2,
          },

          clues: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },

        required: ["id", "name", "location", "position", "clues"],
      },
    },
  },

  required: ["reply", "clues", "candidates"],
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

Analyze the user's message and extract only
explicit geographical clues that may help identify
a real-world location.

Then suggest up to five famous places in Bangladesh
that best fit the clues. Use only real well-known
places in Bangladesh. Do not include any place outside
Bangladesh. Do not invent coordinates.

Do not treat greetings, casual conversation,
or irrelevant information as clues.

Never invent or assume clues.

If there is no useful location information,
return an empty clues array.

If there is no useful place suggestion, return an
empty candidates array.

If the user is uncertain, confirmed should be false.
If the user clearly states something, confirmed should be true.

Do not provide ranking scores or explanations.
Return at most five candidates.

Return a natural reply and structured JSON.

User message:
"${message}"
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
