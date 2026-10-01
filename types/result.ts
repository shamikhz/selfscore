export interface ScoreTier {
  id: string;
  label: string;
  minScore: number;
  maxScore: number;
  summary: string;
  color: string;
}

export interface AssessmentResult {
  assessmentId: string;
  score: number; // normalized 0–100
  rawScore?: number;
  tier: ScoreTier;
  dimensions: Record<string, number>;
  answers: Record<string, number>;
  completedAt: string; // ISO 8601 string
  version: number;
  insights?: string[];
  strengths?: string[];
  growthAreas?: string[];
  actionSteps?: string[];
}
