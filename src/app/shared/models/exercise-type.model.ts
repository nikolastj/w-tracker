import { Muscle } from './muscle.model';

export class ExerciseType {
  id: number;
  name: string;
  description: string | null;
  requisiteUsed: string | null;
  primaryMuscleTargeted: Muscle;
  secondaryMusclesTargeted: Muscle[];
  usesNegativeWeight: boolean;
  variationOfExercise: ExerciseType | null;
  isCore: boolean;

  constructor(
    id: number,
    name: string,
    description: string | null,
    requisiteUsed: string | null,
    primaryMuscleTargeted: Muscle,
    secondaryMusclesTargeted: Muscle[],
    usesNegativeWeight: boolean,
    variationOfExercise: ExerciseType | null,
    isCore: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.requisiteUsed = requisiteUsed;
    this.primaryMuscleTargeted = primaryMuscleTargeted;
    this.secondaryMusclesTargeted = secondaryMusclesTargeted;
    this.usesNegativeWeight = usesNegativeWeight;
    this.variationOfExercise = variationOfExercise;
    this.isCore = isCore;
  }
}
