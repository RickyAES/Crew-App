import type { CrewProfile, FlightLog } from "../types";

const PROFILE_KEY = "crew-profile-v2";
const FLIGHTS_KEY = "crew-flights-v2";

export function loadProfile(): CrewProfile | null {
  try {
    const value = localStorage.getItem(PROFILE_KEY);
    return value ? (JSON.parse(value) as CrewProfile) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: CrewProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function clearProfile(): void {
  localStorage.removeItem(PROFILE_KEY);
}

export function loadFlights(): FlightLog[] {
  try {
    const value = localStorage.getItem(FLIGHTS_KEY);
    return value ? (JSON.parse(value) as FlightLog[]) : [];
  } catch {
    return [];
  }
}

export function saveFlights(flights: FlightLog[]): void {
  localStorage.setItem(FLIGHTS_KEY, JSON.stringify(flights));
}
