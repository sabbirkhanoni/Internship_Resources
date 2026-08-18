"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Candidate } from "@/types/investigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

function createMarkerIcon() {
  return L.divIcon({
    className: "",
    html: renderToStaticMarkup(
      <FaMapMarkerAlt size={32} color="#ef4444" />
    ),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

function MapPanel({ candidates } : { candidates: Candidate[] }) {

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
            icon={createMarkerIcon()}
          >
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
    </section>
  );
}

export default MapPanel;