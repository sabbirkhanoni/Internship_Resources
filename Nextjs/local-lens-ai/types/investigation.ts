export interface Clue {
  id: string;
  label: string;
  confirmed: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  location: string;
  position: [number, number];
  clues: string[];
  rank?: number;
  match?: number;
  featured?: boolean;
}

export interface InvestigationState {
  clues: Clue[];
  candidates: Candidate[];
}