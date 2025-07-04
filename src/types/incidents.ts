export type IncidentType =
  | "Pandemic"
  | "Natural Disaster"
  | "Cyberattack"
  | "Political Unrest"
  | "Infrastructure Failure"
  | "War Event"
  | "Geopolitical Conflict"
  | "Security Breach"
  | "Environmental Crisis";

export interface Incident {
  id: string;
  title: string;
  type: IncidentType;
  country: string;
  location: string;
  lat: number;
  lng: number;
  severity: "Low" | "Medium" | "High";
  date: string;
  imgUrl?: string;
  description: string;
}
