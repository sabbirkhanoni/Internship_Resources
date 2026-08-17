"use client";

import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Candidate } from "@/types/investigation";

interface MapPanelProps {
  candidates: Candidate[];
}

function createMarkerIcon(
  match: number,
  active: boolean
) {
  return L.divIcon({
    className: "",
    html: `
      <div
        style="
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          background: ${active ? "#18181b" : "#71717a"
      };
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          font-weight: 700;
        "
      >
        ${match}%
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
  });
}

function MapPanel({
  candidates,
}: {
  candidates: Candidate[];
}) {
  const dhaka: [number, number] = [
    23.8103,
    90.4125,
  ];

  return (
    <section className="relative h-full min-h-[450px] overflow-hidden">
      <MapContainer
        center={dhaka}
        zoom={12}
        scrollWheelZoom
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {candidates.map((candidate) => (
          <Marker
            key={candidate.id}
            position={candidate.position}
            icon={createMarkerIcon(
              candidate.match,
              candidate.featured
            )}
          >
            <Popup>
              <div className="min-w-[150px]">
                <p className="font-semibold text-zinc-900">
                  {candidate.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  AI Match: {candidate.match}%
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Investigation Area */}
      <div className="pointer-events-none absolute left-5 top-5 z-[1000]">
        <div className="rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Investigation Area
          </p>

          <p className="mt-1 text-sm font-semibold">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Possible Locations */}
      <div className="pointer-events-none absolute bottom-5 left-5 z-[1000]">
        <div className="rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <p className="text-[11px] text-zinc-400">
            Possible locations
          </p>

          <p className="mt-0.5 text-sm font-semibold">
            {candidates.length} candidates found
          </p>
        </div>
      </div>

      {/* Locate Button */}
      <div className="absolute bottom-5 right-5 z-[1000]">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white text-lg shadow-md transition hover:bg-zinc-50"
        >
          ⊙
        </button>
      </div>
    </section>
  );
}

export default MapPanel;