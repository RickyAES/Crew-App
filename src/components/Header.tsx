import Logo from "./Logo";
import type { CrewProfile } from "../types";

interface HeaderProps {
  profile: CrewProfile;
  onLogout: () => void;
}

export default function Header({ profile, onLogout }: HeaderProps) {
  return (
    <header className="header">
      <div className="brand">
        <Logo />
        <div>
          <h1>Crew Dashboard</h1>
          <p>{profile.rank} {profile.fullName} · {profile.staffId}</p>
          <span className="online">● System online</span>
        </div>
      </div>
      <button className="ghost danger" onClick={onLogout}>Logout</button>
    </header>
  );
}
