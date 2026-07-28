import type { ViewName } from "../types";

interface BottomNavProps {
  current: ViewName;
  onChange: (view: ViewName) => void;
}

const items: Array<{ id: ViewName; label: string; icon: string }> = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "logs", label: "Flight Log", icon: "✈" },
  { id: "map", label: "HUD", icon: "◎" },
  { id: "profile", label: "Profile", icon: "●" },
];

export default function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={current === item.id ? "active" : ""}
          onClick={() => onChange(item.id)}
        >
          <strong>{item.icon}</strong>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
