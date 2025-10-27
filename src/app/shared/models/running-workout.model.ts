export enum RunningWorkoutType {
  NORWEGIAN_4X4 = 'norwegian_4x4',
  MARATHON_TRAINING = 'marathon_training',
  JOG = 'jog',
  INTERVAL_TRAINING = 'interval_training',
  TEMPO_RUN = 'tempo_run',
  LONG_RUN = 'long_run',
  RECOVERY_RUN = 'recovery_run',
  FARTLEK = 'fartlek',
}

export interface RunningWorkout {
  id: number;
  dateCreated: string;
  runDuration: number; // in minutes
  runDistance: number | null; // in kilometers
  runWorkoutType: RunningWorkoutType;
  comment: string | null;
}

export type CreateRunningWorkout = Omit<RunningWorkout, 'id'> & {
  id?: number;
};

export const RUNNING_WORKOUT_TYPE_LABELS: Record<RunningWorkoutType, string> = {
  [RunningWorkoutType.NORWEGIAN_4X4]: 'Norwegian 4x4',
  [RunningWorkoutType.MARATHON_TRAINING]: 'Marathon Training',
  [RunningWorkoutType.JOG]: 'Jog',
  [RunningWorkoutType.INTERVAL_TRAINING]: 'Interval Training',
  [RunningWorkoutType.TEMPO_RUN]: 'Tempo Run',
  [RunningWorkoutType.LONG_RUN]: 'Long Run',
  [RunningWorkoutType.RECOVERY_RUN]: 'Recovery Run',
  [RunningWorkoutType.FARTLEK]: 'Fartlek',
};
