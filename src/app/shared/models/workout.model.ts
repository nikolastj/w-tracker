export interface ExerciseSet {
  id: number;
  order: number;
  reps: number;
  weight: number;
  isWarmupSet: boolean;
  isDropSet: boolean;
}

export interface ExerciseTypeSimple {
  id: number;
  name: string;
  description: string;
  requisiteUsed: string;
  usesNegativeWeight: boolean;
  isCore: boolean;
}

export interface ExerciseInstance {
  id: number;
  sets: ExerciseSet[];
  exerciseType: ExerciseTypeSimple;
  comment: string | null;
  energyLevel: number | null;
}

export interface Workout {
  id: number;
  dateCreated: string;
  exercises: ExerciseInstance[];
  comment: string | null;
  energyLevel: number | null;
}
