export type ViewName = "overview" | "logs" | "map" | "profile";

export interface CrewProfile {
  fullName: string;
  staffId: string;
  rank: string;
}

export interface FlightLog {
  id: string;
  date: string;
  flightNo: string;
  origin: string;
  destination: string;
  aircraftType: string;
  dutyHours: string;
}
