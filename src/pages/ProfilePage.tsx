import type { CrewProfile } from "../types";

export default function ProfilePage({ profile }: { profile: CrewProfile }) {
  return (
    <section className="content">
      <div className="section-title"><div><p>CREW IDENTITY</p><h2>Profile</h2></div></div>
      <div className="panel profile-card">
        <div className="avatar">{profile.fullName.charAt(0)}</div>
        <div>
          <h3>{profile.fullName}</h3>
          <p>{profile.rank} · Staff ID {profile.staffId}</p>
          <span className="online">● Active local account</span>
        </div>
      </div>
      <div className="panel">
        <h3>Phase 1 security note</h3>
        <p className="muted">The sign-in is a local browser prototype. A real multi-user deployment needs Firebase, Supabase, or another authenticated backend.</p>
      </div>
    </section>
  );
}
