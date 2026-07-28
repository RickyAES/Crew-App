import { useState } from "react";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import FlightLogPage from "./pages/FlightLogPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import OverviewPage from "./pages/OverviewPage";
import ProfilePage from "./pages/ProfilePage";
import { clearProfile, loadFlights, loadProfile, saveFlights, saveProfile } from "./services/storage";
import type { CrewProfile, FlightLog, ViewName } from "./types";

export default function App() {
  const [profile, setProfile] = useState<CrewProfile | null>(() => loadProfile());
  const [flights, setFlights] = useState<FlightLog[]>(() => loadFlights());
  const [view, setView] = useState<ViewName>("overview");

  function login(next: CrewProfile) {
    saveProfile(next);
    setProfile(next);
  }

  function logout() {
    clearProfile();
    setProfile(null);
    setView("overview");
  }

  function addFlight(flight: FlightLog) {
    const next = [flight, ...flights];
    setFlights(next);
    saveFlights(next);
  }

  function deleteFlight(id: string) {
    const next = flights.filter((f) => f.id !== id);
    setFlights(next);
    saveFlights(next);
  }

  if (!profile) return <LoginPage onLogin={login} />;

  return (
    <div className="app-shell">
      <Header profile={profile} onLogout={logout} />
      {view === "overview" && <OverviewPage flights={flights} />}
      {view === "logs" && <FlightLogPage flights={flights} onAdd={addFlight} onDelete={deleteFlight} />}
      {view === "map" && <MapPage flights={flights} />}
      {view === "profile" && <ProfilePage profile={profile} />}
      <BottomNav current={view} onChange={setView} />
    </div>
  );
}
