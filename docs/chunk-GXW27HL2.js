import {
  PublicHeaderComponent
} from "./chunk-H3TPSBW7.js";
import {
  CommonModule,
  Component,
  RouterOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-A6P2MOB3.js";

// src/app/shared/components/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  static \u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 4, vars: 0, consts: [[1, "auth-background", "flex", "h-screen", "flex-col"], [1, "flex", "flex-1", "items-center", "justify-center", "overflow-y-auto", "px-4", "py-12", "sm:px-6", "lg:px-8"]], template: function PublicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-public-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterOutlet, PublicHeaderComponent], styles: ["\n\n@media (max-width: 768px) {\n  app-header[_ngcontent-%COMP%], \n   app-public-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    height: 0;\n  }\n  .flex-1[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=shared-layout.component-RM6EXWAG.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-public-layout", standalone: true, imports: [CommonModule, RouterOutlet, PublicHeaderComponent], template: `
    <div class="auth-background flex h-screen flex-col">
      <app-public-header></app-public-header>
      <div
        class="flex flex-1 items-center justify-center overflow-y-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <router-outlet></router-outlet>
      </div>
    </div>
  `, styles: ["/* src/app/shared/components/shared-layout.component.scss */\n@media (max-width: 768px) {\n  app-header,\n  app-public-header {\n    flex-shrink: 0;\n    height: 0;\n  }\n  .flex-1 {\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=shared-layout.component-RM6EXWAG.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src/app/shared/components/public-layout.component.ts", lineNumber: 23 });
})();

export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-GXW27HL2.js.map
