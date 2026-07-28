import { useState } from "react";
import Logo from "../components/Logo";
import type { CrewProfile } from "../types";

interface LoginPageProps {
  onLogin: (profile: CrewProfile) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [fullName, setFullName] = useState("Ricky Law");
  const [staffId, setStaffId] = useState("00230747");
  const [rank, setRank] = useState("FS");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!fullName.trim() || !staffId.trim() || !/^\d{6}$/.test(pin)) {
      setError("Enter your name, staff ID and a 6-digit PIN.");
      return;
    }
    onLogin({ fullName: fullName.trim(), staffId: staffId.trim(), rank });
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={submit}>
        <Logo />
        <h1>Crew Portal</h1>
        <p className="muted">SECURE LOCAL SIGN-IN</p>

        <label>
          Full name
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>

        <div className="form-grid">
          <label>
            Staff ID
            <input value={staffId} onChange={(e) => setStaffId(e.target.value)} />
          </label>
          <label>
            Rank
            <select value={rank} onChange={(e) => setRank(e.target.value)}>
              {["CAPT","SFO","FO","SO","IFM","CS","CSS","LS","LSS","FS","FSS"].map((x) =>
                <option key={x}>{x}</option>
              )}
            </select>
          </label>
        </div>

        <label>
          6-digit PIN
          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            inputMode="numeric"
            type="password"
            maxLength={6}
            placeholder="••••••"
          />
        </label>

        {error && <p className="error">{error}</p>}
        <button className="primary" type="submit">Authenticate</button>
        <p className="notice">This Phase 1 version stores information only in this browser.</p>
      </form>
    </main>
  );
}
