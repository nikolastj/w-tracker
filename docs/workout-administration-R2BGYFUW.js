import {
  ExerciseInstanceForm,
  ExerciseInstanceFormComponent,
  ExerciseSetForm,
  ExerciseSetFormComponent,
  SetInfoComponent,
  SetInfoContainerComponent,
  WorkoutCreateComponent,
  WorkoutForm
} from "./chunk-HZMTIIKR.js";
import "./chunk-HRP3JQHP.js";
import "./chunk-DDBAPVIU.js";
import {
  CanDeactivateGuard
} from "./chunk-ZGZQONXF.js";
import "./chunk-YRE5AERI.js";
import "./chunk-I2RYTFIL.js";
import "./chunk-72WFIQJ2.js";
import "./chunk-A6P2MOB3.js";

// src/app/features/workout-administration/workout-administration.routes.ts
var workoutAdministrationRoutes = [
  {
    path: "create",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-QVQQSLWC.js").then((m) => m.WorkoutCreateComponent)
  },
  {
    path: "edit/:id",
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import("./workout-create.component-QVQQSLWC.js").then((m) => m.WorkoutCreateComponent)
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
//# sourceMappingURL=workout-administration-R2BGYFUW.js.map
