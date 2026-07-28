import type { FlightLog } from "../types";

function minutes(value: string): number {
  const [h, m] = value.split(":").map(Number);
  return (Number.isFinite(h) ? h : 0) * 60 + (Number.isFinite(m) ? m : 0);
}

function format(total: number): string {
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

export default function OverviewPage({ flights }: { flights: FlightLog[] }) {
  const totalMinutes = flights.reduce((sum, f) => sum + minutes(f.dutyHours), 0);
  const cities = new Set(flights.flatMap((f) => [f.origin, f.destination]).filter(Boolean));
  const topAircraft = Object.entries(
    flights.reduce<Record<string, number>>((acc, f) => {
      acc[f.aircraftType] = (acc[f.aircraftType] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  return (
    <section className="content">
      <div className="hero">
        <p>FLIGHT OPERATIONS RECORD</p>
        <h2>Your flying history, in one place.</h2>
      </div>

      <div className="stats">
        <article><span>Total flights</span><strong>{flights.length}</strong><small>ALL TIME LOGGED</small></article>
        <article><span>Total duty hours</span><strong>{format(totalMinutes)}</strong><small>TOTAL DUTY TIME</small></article>
        <article><span>Unique cities</span><strong>{cities.size}</strong><small>DESTINATIONS REACHED</small></article>
        <article><span>Top A/C type</span><strong>{topAircraft}</strong><small>MOST FREQUENT</small></article>
      </div>

      <div className="panel">
        <h3>Recent flights</h3>
        {flights.length === 0 ? (
          <p className="muted">No flight records yet. Open Flight Log to add your first entry.</p>
        ) : (
          <div className="recent-list">
            {flights.slice(0, 5).map((f) => (
              <div key={f.id}>
                <strong>{f.flightNo}</strong>
                <span>{f.origin} → {f.destination}</span>
                <small>{f.date} · {f.dutyHours}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
