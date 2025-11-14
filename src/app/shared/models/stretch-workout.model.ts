export enum StretchWorkoutIntensity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface StretchWorkout {
  id: number;
  dateCreated: string;
  duration: number; // in minutes
  intensity: StretchWorkoutIntensity;
  comment: string | null;
}

export type CreateStretchWorkout = Omit<StretchWorkout, 'id'> & {
  id?: number;
};

export const STRETCH_WORKOUT_INTENSITY_LABELS: Record<StretchWorkoutIntensity, string> = {
  [StretchWorkoutIntensity.LOW]: 'Low Intensity',
  [StretchWorkoutIntensity.MEDIUM]: 'Medium Intensity',
  [StretchWorkoutIntensity.HIGH]: 'High Intensity',
};
