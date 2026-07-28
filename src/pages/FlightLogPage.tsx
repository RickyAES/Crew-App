import { useMemo, useState } from "react";
import type { FlightLog } from "../types";

interface Props {
  flights: FlightLog[];
  onAdd: (flight: FlightLog) => void;
  onDelete: (id: string) => void;
}

const empty = {
  date: "",
  flightNo: "",
  origin: "SIN",
  destination: "",
  aircraftType: "",
  dutyHours: "",
};

export default function FlightLogPage({ flights, onAdd, onDelete }: Props) {
  const [form, setForm] = useState(empty);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return q
      ? flights.filter((f) => Object.values(f).some((v) => String(v).toLowerCase().includes(q)))
      : flights;
  }, [flights, search]);

  function update(name: keyof typeof empty, value: string) {
    setForm((old) => ({ ...old, [name]: value.toUpperCase() }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.date || !form.flightNo || !form.origin || !form.destination || !form.dutyHours) return;
    onAdd({ ...form, id: crypto.randomUUID() });
    setForm(empty);
  }

  return (
    <section className="content">
      <div className="section-title">
        <div><p>CREW RECORDS</p><h2>Flight Logbook</h2></div>
        <input className="search" placeholder="Search flights…" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <form className="panel flight-form" onSubmit={submit}>
        <label>Date<input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} /></label>
        <label>Flight No<input placeholder="SQ322" value={form.flightNo} onChange={(e) => update("flightNo", e.target.value)} /></label>
        <label>Origin<input maxLength={3} value={form.origin} onChange={(e) => update("origin", e.target.value)} /></label>
        <label>Destination<input maxLength={3} placeholder="LHR" value={form.destination} onChange={(e) => update("destination", e.target.value)} /></label>
        <label>A/C Type<input placeholder="A350" value={form.aircraftType} onChange={(e) => update("aircraftType", e.target.value)} /></label>
        <label>Duty Hours<input placeholder="12:30" value={form.dutyHours} onChange={(e) => update("dutyHours", e.target.value)} /></label>
        <button className="primary" type="submit">Add Flight</button>
      </form>

      <div className="panel table-wrap">
        <table>
          <thead><tr><th>Date</th><th>Flight</th><th>Route</th><th>A/C</th><th>Duty</th><th></th></tr></thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td>{f.date}</td><td>{f.flightNo}</td><td>{f.origin} → {f.destination}</td>
                <td>{f.aircraftType || "-"}</td><td>{f.dutyHours}</td>
                <td><button className="text-button danger" onClick={() => onDelete(f.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="muted empty">No matching records.</p>}
      </div>
    </section>
  );
}
