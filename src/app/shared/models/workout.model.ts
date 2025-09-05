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

// Create types (with optional id properties for create/edit scenarios)
export type CreateExerciseSet = Omit<ExerciseSet, 'id'> & {
  id?: number;
};

export type CreateExerciseInstance = Omit<ExerciseInstance, 'id' | 'sets'> & {
  id?: number;
  sets: CreateExerciseSet[];
};

export type CreateWorkout = Omit<Workout, 'id' | 'exercises'> & {
  id?: number;
  exercises: CreateExerciseInstance[];
};
