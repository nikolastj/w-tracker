import {
  ExerciseInstanceForm,
  ExerciseInstanceFormComponent,
  ExerciseSetForm,
  ExerciseSetFormComponent,
  SetInfoComponent,
  SetInfoContainerComponent,
  WorkoutCreateComponent,
  WorkoutForm
} from "./chunk-6OYBDDSY.js";
import "./chunk-I6GS4522.js";
import "./chunk-3NMSYGKW.js";
import {
  CanDeactivateGuard
} from "./chunk-X7YEJBQC.js";
import "./chunk-4PVVSHJ5.js";
import "./chunk-I2RYTFIL.js";
import "./chunk-72WFIQJ2.js";
import "./chunk-A6P2MOB3.js";

// src/app/features/workout-administration/workout-administration.routes.ts
var workoutAdministrationRoutes = [
  {
    path: "create",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-M3DKVOVH.js").then((m) => m.WorkoutCreateComponent)
  },
  {
    path: "edit/:id",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-M3DKVOVH.js").then((m) => m.WorkoutCreateComponent)
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
//# sourceMappingURL=workout-administration-XL2WCKQO.js.map
