export interface Workout {
  id: number;
  dateCreated: string;
  comment?: string;
  energyLevel?: number;
  exercises: ExerciseInstance[];
}

export interface ExerciseInstance {
  id: number;
  sets: ExerciseSet[];
  comment?: string;
  energyLevel?: number;
  exercise: Exercise;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  requisiteUsed?: string;
  usesNegativeWeight: boolean;
  isCore: boolean;
}

export interface ExerciseSet {
  id: number;
  order: number;
  reps: number;
  weight: number;
  isWarmupSet: boolean;
  isDropSet: boolean;
}
