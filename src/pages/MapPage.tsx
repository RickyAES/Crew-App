import type { FlightLog } from "../types";

export default function MapPage({ flights }: { flights: FlightLog[] }) {
  const routes = Array.from(new Set(flights.map((f) => `${f.origin} → ${f.destination}`)));
  return (
    <section className="content">
      <div className="section-title"><div><p>GEOGRAPHIC HUD</p><h2>Network Map</h2></div></div>
      <div className="map-placeholder">
        <div className="radar"></div>
        <strong>Map module foundation ready</strong>
        <p>Leaflet route plotting will be added in the next phase.</p>
        <small>{routes.length} unique route{routes.length === 1 ? "" : "s"} detected</small>
      </div>
    </section>
  );
}
