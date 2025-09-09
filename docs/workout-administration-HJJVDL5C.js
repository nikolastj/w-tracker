import {
  ExerciseInstanceForm,
  ExerciseInstanceFormComponent,
  ExerciseSetForm,
  ExerciseSetFormComponent,
  SetInfoComponent,
  SetInfoContainerComponent,
  WorkoutCreateComponent,
  WorkoutForm
} from "./chunk-ZLCJWBZK.js";
import "./chunk-RDXPNGMW.js";
import "./chunk-UGFWTRIG.js";
import {
  CanDeactivateGuard
} from "./chunk-FWJQQGCN.js";
import "./chunk-4PVVSHJ5.js";
import "./chunk-I2RYTFIL.js";
import "./chunk-72WFIQJ2.js";
import "./chunk-A6P2MOB3.js";

// src/app/features/workout-administration/workout-administration.routes.ts
var workoutAdministrationRoutes = [
  {
    path: "create",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-BEELGVFP.js").then((m) => m.WorkoutCreateComponent)
  },
  {
    path: "edit/:id",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-BEELGVFP.js").then((m) => m.WorkoutCreateComponent)
  }
];
export {
  ExerciseInstanceForm,
  ExerciseInstanceFormComponent,
  ExerciseSetForm,
  ExerciseSetFormComponent,
  SetInfoComponent,
  SetInfoContainerComponent,
  WorkoutCreateComponent,
  WorkoutForm,
  workoutAdministrationRoutes
};
//# sourceMappingURL=workout-administration-HJJVDL5C.js.map
