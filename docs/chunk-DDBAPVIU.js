import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  NotificationService,
  environment,
  handleNotifications
} from "./chunk-ZGZQONXF.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  Input,
  ViewEncapsulation,
  delay,
  of,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp
} from "./chunk-A6P2MOB3.js";

// src/app/shared/components/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  opacity = 70;
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { opacity: "opacity" }, decls: 2, vars: 2, consts: [[1, "loader-background", "flex", "h-full", "w-full", "items-center", "justify-center"], ["diameter", "50", "color", "primary"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "mat-spinner", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("opacity", ctx.opacity / 100);
    }
  }, dependencies: [CommonModule, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.loader-background[_ngcontent-%COMP%] {\n  background-color: light-dark(rgba(255, 255, 255, 0.8), rgba(17, 24, 39, 0.8));\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  position: relative;\n  z-index: 1000;\n}\n/*# sourceMappingURL=loader.component-27RFTW3K.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, imports: [CommonModule, MatProgressSpinnerModule], template: `
    <div
      class="loader-background flex h-full w-full items-center justify-center"
      [style.opacity]="opacity / 100"
    >
      <mat-spinner diameter="50" color="primary"></mat-spinner>
    </div>
  `, styles: ["/* src/app/shared/components/loader.component.scss */\n:host {\n  display: block;\n}\n.loader-background {\n  background-color: light-dark(rgba(255, 255, 255, 0.8), rgba(17, 24, 39, 0.8));\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  position: relative;\n  z-index: 1000;\n}\n/*# sourceMappingURL=loader.component-27RFTW3K.css.map */\n"] }]
  }], null, { opacity: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/components/loader.component.ts", lineNumber: 19 });
})();

// src/app/shared/services/cache-response.service.ts
var CacheResponseService = class {
  cache = /* @__PURE__ */ new Map();
  createCacheKey(key, filter) {
    const filterStr = JSON.stringify(filter, Object.keys(filter).sort());
    return `${key}:${filterStr}`;
  }
  getCachedResponse(key, filter) {
    const cacheKey = this.createCacheKey(key, filter);
    return this.cache.get(cacheKey);
  }
  fetchAndCache(key, filter, fetchFn) {
    const cacheKey = this.createCacheKey(key, filter);
    return fetchFn().pipe(tap((response) => this.cache.set(cacheKey, response)));
  }
  getWithCache(key, filter, fetchFn) {
    const cachedResponse = this.getCachedResponse(key, filter);
    return cachedResponse ? of(cachedResponse).pipe(delay(100)) : this.fetchAndCache(key, filter, fetchFn);
  }
  clearCache(key, filter) {
    if (key && filter !== void 0) {
      const cacheKey = this.createCacheKey(key, filter);
      this.cache.delete(cacheKey);
    } else if (key) {
      const keysToDelete = Array.from(this.cache.keys()).filter((cacheKey) => cacheKey.startsWith(`${key}:`));
      keysToDelete.forEach((cacheKey) => this.cache.delete(cacheKey));
    } else {
      this.cache.clear();
    }
  }
};

// src/app/shared/services/exercise-types.service.ts
var ExerciseTypesService = class _ExerciseTypesService extends CacheResponseService {
  http;
  notificationService;
  API_URL = environment.apiUrl;
  constructor(http, notificationService) {
    super();
    this.http = http;
    this.notificationService = notificationService;
  }
  getExerciseTypes() {
    return this.getWithCache("exercise-types", {}, () => this.http.get(`${this.API_URL}/exercise-types`).pipe(handleNotifications({
      errorMessage: "Failed to load exercise types. Please try again.",
      notificationService: this.notificationService
    })));
  }
  static \u0275fac = function ExerciseTypesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExerciseTypesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExerciseTypesService, factory: _ExerciseTypesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExerciseTypesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: NotificationService }], null);
})();

// src/app/shared/services/workouts.service.ts
var WorkoutsService = class _WorkoutsService {
  http;
  notificationService;
  API_URL = environment.apiUrl;
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
  }
  getPaginatedWorkouts(pageRequest) {
    return this.http.post(`${this.API_URL}/workouts/paginated`, pageRequest).pipe(handleNotifications({
      errorMessage: "Failed to load workouts. Please try again.",
      notificationService: this.notificationService
    }));
  }
  createWorkout(workout) {
    return this.http.post(`${this.API_URL}/workouts`, workout).pipe(handleNotifications({
      successMessage: "Workout saved successfully!",
      errorMessage: "Failed to save workout. Please try again.",
      notificationService: this.notificationService
    }));
  }
  updateWorkout(id, workout) {
    return this.http.put(`${this.API_URL}/workouts/${id}`, workout).pipe(handleNotifications({
      successMessage: "Workout updated successfully!",
      errorMessage: "Failed to update workout. Please try again.",
      notificationService: this.notificationService
    }));
  }
  getTodaysWorkout() {
    return this.http.get(`${this.API_URL}/workouts/todays-workout`).pipe(handleNotifications({
      errorMessage: "Failed to load today's workout. Please try again.",
      notificationService: this.notificationService
    }));
  }
  getWorkoutById(id) {
    return this.http.get(`${this.API_URL}/workouts/${id}`).pipe(handleNotifications({
      errorMessage: "Failed to load workout. Please try again.",
      notificationService: this.notificationService
    }));
  }
  static \u0275fac = function WorkoutsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkoutsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkoutsService, factory: _WorkoutsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkoutsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: NotificationService }], null);
})();

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
  static \u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __MatInternalFormField,
    selectors: [["div", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

export {
  _MatInternalFormField,
  LoaderComponent,
  CacheResponseService,
  ExerciseTypesService,
  WorkoutsService
};
//# sourceMappingURL=chunk-DDBAPVIU.js.map
