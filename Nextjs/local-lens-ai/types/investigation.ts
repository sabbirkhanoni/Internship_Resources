export interface Clue {
  id: string;
  label: string;
  confirmed: boolean;
}

export interface Candidate {
  id: string;
  rank: number;
  name: string;
  location: string;
  position: [number, number];
  match: number;
  clues: string[];
  featured: boolean;
}

export interface InvestigationState {
  clues: Clue[];
  candidates: Candidate[];
}