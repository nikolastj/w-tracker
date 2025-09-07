import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-HRP3JQHP.js";
import {
  ExerciseTypesService,
  LoaderComponent,
  WorkoutsService,
  _MatInternalFormField
} from "./chunk-DDBAPVIU.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormControl,
  FormControlDirective,
  FormGroup,
  MatDialog,
  MatDialogModule,
  MatError,
  MatFormField,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators
} from "./chunk-ZGZQONXF.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-YRE5AERI.js";
import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-I2RYTFIL.js";
import {
  Directionality,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatMiniFabButton,
  MatRipple,
  MatRippleModule,
  Platform,
  RippleState,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  hasModifierKey
} from "./chunk-72WFIQJ2.js";
import {
  ActivatedRoute,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  Router,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  debounceTime,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinjectAttribute,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-A6P2MOB3.js";

// node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c0 = ["body"];
var _c1 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 2);
    \u0275\u0275domElement(2, "path", 3);
    \u0275\u0275domElementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs
var _c02 = ["content"];
var _c12 = ["scroll"];
var _c22 = ["padding"];
var _c32 = ["*"];
var _c42 = (a0) => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c42, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c42, ctx_r0.filterValue));
  }
}
var _c52 = ["searchInput"];
var _c6 = ["clearButton"];
var _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
var _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
var _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.placeholderTemplate || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unselect(item_r5));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-value-disabled", item_r5.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabelTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, \u0275\u0275componentInstance().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearButtonTemplate);
  }
}
function NgSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27, 4);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_9_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleClearClick($event));
    });
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.clearAllText));
    \u0275\u0275attribute("tabindex", ctx_r1.tabFocusOnClear() ? 0 : -1);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NgSelectComponent_Conditional_9_Conditional_0_Template, 1, 1, "ng-container", 19)(1, NgSelectComponent_Conditional_9_Conditional_1_Template, 4, 3, "span", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.clearButtonTemplate ? 0 : 1);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngItemLabel", item_r12.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r12));
    })("mouseover", function NgSelectComponent_Conditional_12_For_3_Template_div_mouseover_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemHover(item_r12));
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_For_3_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_For_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const defaultOptionTemplate_r13 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-disabled", item_r12.disabled)("ng-option-selected", item_r12.selected)("ng-optgroup", item_r12.children)("ng-option", !item_r12.children)("ng-option-child", !!item_r12.parent)("ng-option-marked", item_r12 === ctx_r1.itemsList.markedItem);
    \u0275\u0275attribute("role", item_r12.children ? "group" : "option")("aria-selected", item_r12.selected)("id", item_r12 == null ? null : item_r12.htmlId)("aria-setsize", ctx_r1.itemsList.filteredItems.length)("aria-posinset", item_r12.index + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", item_r12.children ? ctx_r1.optgroupTemplate || defaultOptionTemplate_r13 : ctx_r1.optionTemplate || defaultOptionTemplate_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction4(19, _c9, item_r12.value, item_r12, item_r12.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.addTagText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r1.searchTerm, '"');
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("mouseover", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_mouseover_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTag());
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTagTemplate_r15 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-marked", !ctx_r1.itemsList.markedItem);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tagTemplate || defaultTagTemplate_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c42, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r16 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.notFoundTemplate || defaultNotFoundTemplate_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c42, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r17 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.typeToSearchTemplate || defaultTypeToSearchTemplate_r17);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r18 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingTextTemplate || defaultLoadingTextTemplate_r18)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c42, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ng-dropdown-panel", 29);
    \u0275\u0275listener("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275repeaterCreate(2, NgSelectComponent_Conditional_12_For_3_Template, 4, 24, "div", 30, \u0275\u0275componentInstance().trackByOption, true);
    \u0275\u0275conditionalCreate(4, NgSelectComponent_Conditional_12_Conditional_4_Template, 4, 6, "div", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275conditionalCreate(5, NgSelectComponent_Conditional_12_Conditional_5_Template, 3, 4);
    \u0275\u0275conditionalCreate(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 1);
    \u0275\u0275conditionalCreate(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ng-select-multiple", ctx_r1.multiple);
    \u0275\u0275property("virtualScroll", ctx_r1.virtualScroll)("bufferAmount", ctx_r1.bufferAmount)("appendTo", ctx_r1.appendTo)("position", ctx_r1.dropdownPosition)("headerTemplate", ctx_r1.headerTemplate)("footerTemplate", ctx_r1.footerTemplate)("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("ngClass", ctx_r1.appendTo ? ctx_r1.ngClass ? ctx_r1.ngClass : ctx_r1.classes : null)("id", ctx_r1.dropdownId);
    \u0275\u0275ariaProperty("ariaLabelDropdown", ctx_r1.ariaLabelDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.viewPortItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showAddTag ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNoItemsFound() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTypeToSearch() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading && ctx_r1.itemsList.filteredItems.length === 0 ? 7 : -1);
  }
}
function NgSelectComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notFoundText, " ");
  }
}
var unescapedHTMLExp = /[&<>"']/g;
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, (chr) => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isObject(value) {
  return typeof value === "object" && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
var _NgItemLabelDirective = class _NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
};
_NgItemLabelDirective.\u0275fac = function NgItemLabelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgItemLabelDirective)(\u0275\u0275directiveInject(ElementRef));
};
_NgItemLabelDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    ngItemLabel: "ngItemLabel",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
var NgItemLabelDirective = _NgItemLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgItemLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngItemLabel]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    ngItemLabel: [{
      type: Input
    }],
    escape: [{
      type: Input
    }]
  });
})();
var _NgOptionTemplateDirective = class _NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgOptionTemplateDirective.\u0275fac = function NgOptionTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptionTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgOptionTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});
var NgOptionTemplateDirective = _NgOptionTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-option-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgOptgroupTemplateDirective = class _NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgOptgroupTemplateDirective.\u0275fac = function NgOptgroupTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptgroupTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgOptgroupTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
var NgOptgroupTemplateDirective = _NgOptgroupTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptgroupTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-optgroup-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgLabelTemplateDirective = class _NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgLabelTemplateDirective.\u0275fac = function NgLabelTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLabelTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgLabelTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});
var NgLabelTemplateDirective = _NgLabelTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-label-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgMultiLabelTemplateDirective = class _NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgMultiLabelTemplateDirective.\u0275fac = function NgMultiLabelTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgMultiLabelTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgMultiLabelTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
var NgMultiLabelTemplateDirective = _NgMultiLabelTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgMultiLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-multi-label-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgHeaderTemplateDirective = class _NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgHeaderTemplateDirective.\u0275fac = function NgHeaderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgHeaderTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgHeaderTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});
var NgHeaderTemplateDirective = _NgHeaderTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-header-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgFooterTemplateDirective = class _NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgFooterTemplateDirective.\u0275fac = function NgFooterTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgFooterTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgFooterTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});
var NgFooterTemplateDirective = _NgFooterTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFooterTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-footer-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgNotFoundTemplateDirective = class _NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgNotFoundTemplateDirective.\u0275fac = function NgNotFoundTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgNotFoundTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgNotFoundTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});
var NgNotFoundTemplateDirective = _NgNotFoundTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgNotFoundTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-notfound-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgPlaceholderTemplateDirective = class _NgPlaceholderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgPlaceholderTemplateDirective.\u0275fac = function NgPlaceholderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgPlaceholderTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgPlaceholderTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgPlaceholderTemplateDirective,
  selectors: [["", "ng-placeholder-tmp", ""]]
});
var NgPlaceholderTemplateDirective = _NgPlaceholderTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlaceholderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-placeholder-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgTypeToSearchTemplateDirective = class _NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgTypeToSearchTemplateDirective.\u0275fac = function NgTypeToSearchTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgTypeToSearchTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgTypeToSearchTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
var NgTypeToSearchTemplateDirective = _NgTypeToSearchTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTypeToSearchTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-typetosearch-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgLoadingTextTemplateDirective = class _NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgLoadingTextTemplateDirective.\u0275fac = function NgLoadingTextTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLoadingTextTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgLoadingTextTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
var NgLoadingTextTemplateDirective = _NgLoadingTextTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingTextTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingtext-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgTagTemplateDirective = class _NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgTagTemplateDirective.\u0275fac = function NgTagTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgTagTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgTagTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});
var NgTagTemplateDirective = _NgTagTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTagTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-tag-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgLoadingSpinnerTemplateDirective = class _NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgLoadingSpinnerTemplateDirective.\u0275fac = function NgLoadingSpinnerTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLoadingSpinnerTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgLoadingSpinnerTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
var NgLoadingSpinnerTemplateDirective = _NgLoadingSpinnerTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingSpinnerTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingspinner-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NgClearButtonTemplateDirective = class _NgClearButtonTemplateDirective {
  constructor(template) {
    this.template = template;
  }
};
_NgClearButtonTemplateDirective.\u0275fac = function NgClearButtonTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgClearButtonTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
};
_NgClearButtonTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgClearButtonTemplateDirective,
  selectors: [["", "ng-clearbutton-tmp", ""]]
});
var NgClearButtonTemplateDirective = _NgClearButtonTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClearButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ng-clearbutton-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function newId() {
  return "axxxxxxxxxxx".replace(/[x]/g, () => {
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
var diacritics = {
  "\u24B6": "A",
  "\uFF21": "A",
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\u1EA6": "A",
  "\u1EA4": "A",
  "\u1EAA": "A",
  "\u1EA8": "A",
  "\xC3": "A",
  "\u0100": "A",
  "\u0102": "A",
  "\u1EB0": "A",
  "\u1EAE": "A",
  "\u1EB4": "A",
  "\u1EB2": "A",
  "\u0226": "A",
  "\u01E0": "A",
  "\xC4": "A",
  "\u01DE": "A",
  "\u1EA2": "A",
  "\xC5": "A",
  "\u01FA": "A",
  "\u01CD": "A",
  "\u0200": "A",
  "\u0202": "A",
  "\u1EA0": "A",
  "\u1EAC": "A",
  "\u1EB6": "A",
  "\u1E00": "A",
  "\u0104": "A",
  "\u023A": "A",
  "\u2C6F": "A",
  "\uA732": "AA",
  "\xC6": "AE",
  "\u01FC": "AE",
  "\u01E2": "AE",
  "\uA734": "AO",
  "\uA736": "AU",
  "\uA738": "AV",
  "\uA73A": "AV",
  "\uA73C": "AY",
  "\u24B7": "B",
  "\uFF22": "B",
  "\u1E02": "B",
  "\u1E04": "B",
  "\u1E06": "B",
  "\u0243": "B",
  "\u0182": "B",
  "\u0181": "B",
  "\u24B8": "C",
  "\uFF23": "C",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\xC7": "C",
  "\u1E08": "C",
  "\u0187": "C",
  "\u023B": "C",
  "\uA73E": "C",
  "\u24B9": "D",
  "\uFF24": "D",
  "\u1E0A": "D",
  "\u010E": "D",
  "\u1E0C": "D",
  "\u1E10": "D",
  "\u1E12": "D",
  "\u1E0E": "D",
  "\u0110": "D",
  "\u018B": "D",
  "\u018A": "D",
  "\u0189": "D",
  "\uA779": "D",
  "\u01F1": "DZ",
  "\u01C4": "DZ",
  "\u01F2": "Dz",
  "\u01C5": "Dz",
  "\u24BA": "E",
  "\uFF25": "E",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\u1EC0": "E",
  "\u1EBE": "E",
  "\u1EC4": "E",
  "\u1EC2": "E",
  "\u1EBC": "E",
  "\u0112": "E",
  "\u1E14": "E",
  "\u1E16": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\xCB": "E",
  "\u1EBA": "E",
  "\u011A": "E",
  "\u0204": "E",
  "\u0206": "E",
  "\u1EB8": "E",
  "\u1EC6": "E",
  "\u0228": "E",
  "\u1E1C": "E",
  "\u0118": "E",
  "\u1E18": "E",
  "\u1E1A": "E",
  "\u0190": "E",
  "\u018E": "E",
  "\u24BB": "F",
  "\uFF26": "F",
  "\u1E1E": "F",
  "\u0191": "F",
  "\uA77B": "F",
  "\u24BC": "G",
  "\uFF27": "G",
  "\u01F4": "G",
  "\u011C": "G",
  "\u1E20": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u01E6": "G",
  "\u0122": "G",
  "\u01E4": "G",
  "\u0193": "G",
  "\uA7A0": "G",
  "\uA77D": "G",
  "\uA77E": "G",
  "\u24BD": "H",
  "\uFF28": "H",
  "\u0124": "H",
  "\u1E22": "H",
  "\u1E26": "H",
  "\u021E": "H",
  "\u1E24": "H",
  "\u1E28": "H",
  "\u1E2A": "H",
  "\u0126": "H",
  "\u2C67": "H",
  "\u2C75": "H",
  "\uA78D": "H",
  "\u24BE": "I",
  "\uFF29": "I",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u0130": "I",
  "\xCF": "I",
  "\u1E2E": "I",
  "\u1EC8": "I",
  "\u01CF": "I",
  "\u0208": "I",
  "\u020A": "I",
  "\u1ECA": "I",
  "\u012E": "I",
  "\u1E2C": "I",
  "\u0197": "I",
  "\u24BF": "J",
  "\uFF2A": "J",
  "\u0134": "J",
  "\u0248": "J",
  "\u24C0": "K",
  "\uFF2B": "K",
  "\u1E30": "K",
  "\u01E8": "K",
  "\u1E32": "K",
  "\u0136": "K",
  "\u1E34": "K",
  "\u0198": "K",
  "\u2C69": "K",
  "\uA740": "K",
  "\uA742": "K",
  "\uA744": "K",
  "\uA7A2": "K",
  "\u24C1": "L",
  "\uFF2C": "L",
  "\u013F": "L",
  "\u0139": "L",
  "\u013D": "L",
  "\u1E36": "L",
  "\u1E38": "L",
  "\u013B": "L",
  "\u1E3C": "L",
  "\u1E3A": "L",
  "\u0141": "L",
  "\u023D": "L",
  "\u2C62": "L",
  "\u2C60": "L",
  "\uA748": "L",
  "\uA746": "L",
  "\uA780": "L",
  "\u01C7": "LJ",
  "\u01C8": "Lj",
  "\u24C2": "M",
  "\uFF2D": "M",
  "\u1E3E": "M",
  "\u1E40": "M",
  "\u1E42": "M",
  "\u2C6E": "M",
  "\u019C": "M",
  "\u24C3": "N",
  "\uFF2E": "N",
  "\u01F8": "N",
  "\u0143": "N",
  "\xD1": "N",
  "\u1E44": "N",
  "\u0147": "N",
  "\u1E46": "N",
  "\u0145": "N",
  "\u1E4A": "N",
  "\u1E48": "N",
  "\u0220": "N",
  "\u019D": "N",
  "\uA790": "N",
  "\uA7A4": "N",
  "\u01CA": "NJ",
  "\u01CB": "Nj",
  "\u24C4": "O",
  "\uFF2F": "O",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\u1ED2": "O",
  "\u1ED0": "O",
  "\u1ED6": "O",
  "\u1ED4": "O",
  "\xD5": "O",
  "\u1E4C": "O",
  "\u022C": "O",
  "\u1E4E": "O",
  "\u014C": "O",
  "\u1E50": "O",
  "\u1E52": "O",
  "\u014E": "O",
  "\u022E": "O",
  "\u0230": "O",
  "\xD6": "O",
  "\u022A": "O",
  "\u1ECE": "O",
  "\u0150": "O",
  "\u01D1": "O",
  "\u020C": "O",
  "\u020E": "O",
  "\u01A0": "O",
  "\u1EDC": "O",
  "\u1EDA": "O",
  "\u1EE0": "O",
  "\u1EDE": "O",
  "\u1EE2": "O",
  "\u1ECC": "O",
  "\u1ED8": "O",
  "\u01EA": "O",
  "\u01EC": "O",
  "\xD8": "O",
  "\u01FE": "O",
  "\u0186": "O",
  "\u019F": "O",
  "\uA74A": "O",
  "\uA74C": "O",
  "\u01A2": "OI",
  "\uA74E": "OO",
  "\u0222": "OU",
  "\u24C5": "P",
  "\uFF30": "P",
  "\u1E54": "P",
  "\u1E56": "P",
  "\u01A4": "P",
  "\u2C63": "P",
  "\uA750": "P",
  "\uA752": "P",
  "\uA754": "P",
  "\u24C6": "Q",
  "\uFF31": "Q",
  "\uA756": "Q",
  "\uA758": "Q",
  "\u024A": "Q",
  "\u24C7": "R",
  "\uFF32": "R",
  "\u0154": "R",
  "\u1E58": "R",
  "\u0158": "R",
  "\u0210": "R",
  "\u0212": "R",
  "\u1E5A": "R",
  "\u1E5C": "R",
  "\u0156": "R",
  "\u1E5E": "R",
  "\u024C": "R",
  "\u2C64": "R",
  "\uA75A": "R",
  "\uA7A6": "R",
  "\uA782": "R",
  "\u24C8": "S",
  "\uFF33": "S",
  "\u1E9E": "S",
  "\u015A": "S",
  "\u1E64": "S",
  "\u015C": "S",
  "\u1E60": "S",
  "\u0160": "S",
  "\u1E66": "S",
  "\u1E62": "S",
  "\u1E68": "S",
  "\u0218": "S",
  "\u015E": "S",
  "\u2C7E": "S",
  "\uA7A8": "S",
  "\uA784": "S",
  "\u24C9": "T",
  "\uFF34": "T",
  "\u1E6A": "T",
  "\u0164": "T",
  "\u1E6C": "T",
  "\u021A": "T",
  "\u0162": "T",
  "\u1E70": "T",
  "\u1E6E": "T",
  "\u0166": "T",
  "\u01AC": "T",
  "\u01AE": "T",
  "\u023E": "T",
  "\uA786": "T",
  "\uA728": "TZ",
  "\u24CA": "U",
  "\uFF35": "U",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\u0168": "U",
  "\u1E78": "U",
  "\u016A": "U",
  "\u1E7A": "U",
  "\u016C": "U",
  "\xDC": "U",
  "\u01DB": "U",
  "\u01D7": "U",
  "\u01D5": "U",
  "\u01D9": "U",
  "\u1EE6": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u01D3": "U",
  "\u0214": "U",
  "\u0216": "U",
  "\u01AF": "U",
  "\u1EEA": "U",
  "\u1EE8": "U",
  "\u1EEE": "U",
  "\u1EEC": "U",
  "\u1EF0": "U",
  "\u1EE4": "U",
  "\u1E72": "U",
  "\u0172": "U",
  "\u1E76": "U",
  "\u1E74": "U",
  "\u0244": "U",
  "\u24CB": "V",
  "\uFF36": "V",
  "\u1E7C": "V",
  "\u1E7E": "V",
  "\u01B2": "V",
  "\uA75E": "V",
  "\u0245": "V",
  "\uA760": "VY",
  "\u24CC": "W",
  "\uFF37": "W",
  "\u1E80": "W",
  "\u1E82": "W",
  "\u0174": "W",
  "\u1E86": "W",
  "\u1E84": "W",
  "\u1E88": "W",
  "\u2C72": "W",
  "\u24CD": "X",
  "\uFF38": "X",
  "\u1E8A": "X",
  "\u1E8C": "X",
  "\u24CE": "Y",
  "\uFF39": "Y",
  "\u1EF2": "Y",
  "\xDD": "Y",
  "\u0176": "Y",
  "\u1EF8": "Y",
  "\u0232": "Y",
  "\u1E8E": "Y",
  "\u0178": "Y",
  "\u1EF6": "Y",
  "\u1EF4": "Y",
  "\u01B3": "Y",
  "\u024E": "Y",
  "\u1EFE": "Y",
  "\u24CF": "Z",
  "\uFF3A": "Z",
  "\u0179": "Z",
  "\u1E90": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u1E92": "Z",
  "\u1E94": "Z",
  "\u01B5": "Z",
  "\u0224": "Z",
  "\u2C7F": "Z",
  "\u2C6B": "Z",
  "\uA762": "Z",
  "\u24D0": "a",
  "\uFF41": "a",
  "\u1E9A": "a",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\u1EA7": "a",
  "\u1EA5": "a",
  "\u1EAB": "a",
  "\u1EA9": "a",
  "\xE3": "a",
  "\u0101": "a",
  "\u0103": "a",
  "\u1EB1": "a",
  "\u1EAF": "a",
  "\u1EB5": "a",
  "\u1EB3": "a",
  "\u0227": "a",
  "\u01E1": "a",
  "\xE4": "a",
  "\u01DF": "a",
  "\u1EA3": "a",
  "\xE5": "a",
  "\u01FB": "a",
  "\u01CE": "a",
  "\u0201": "a",
  "\u0203": "a",
  "\u1EA1": "a",
  "\u1EAD": "a",
  "\u1EB7": "a",
  "\u1E01": "a",
  "\u0105": "a",
  "\u2C65": "a",
  "\u0250": "a",
  "\uA733": "aa",
  "\xE6": "ae",
  "\u01FD": "ae",
  "\u01E3": "ae",
  "\uA735": "ao",
  "\uA737": "au",
  "\uA739": "av",
  "\uA73B": "av",
  "\uA73D": "ay",
  "\u24D1": "b",
  "\uFF42": "b",
  "\u1E03": "b",
  "\u1E05": "b",
  "\u1E07": "b",
  "\u0180": "b",
  "\u0183": "b",
  "\u0253": "b",
  "\u24D2": "c",
  "\uFF43": "c",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\xE7": "c",
  "\u1E09": "c",
  "\u0188": "c",
  "\u023C": "c",
  "\uA73F": "c",
  "\u2184": "c",
  "\u24D3": "d",
  "\uFF44": "d",
  "\u1E0B": "d",
  "\u010F": "d",
  "\u1E0D": "d",
  "\u1E11": "d",
  "\u1E13": "d",
  "\u1E0F": "d",
  "\u0111": "d",
  "\u018C": "d",
  "\u0256": "d",
  "\u0257": "d",
  "\uA77A": "d",
  "\u01F3": "dz",
  "\u01C6": "dz",
  "\u24D4": "e",
  "\uFF45": "e",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\u1EC1": "e",
  "\u1EBF": "e",
  "\u1EC5": "e",
  "\u1EC3": "e",
  "\u1EBD": "e",
  "\u0113": "e",
  "\u1E15": "e",
  "\u1E17": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\xEB": "e",
  "\u1EBB": "e",
  "\u011B": "e",
  "\u0205": "e",
  "\u0207": "e",
  "\u1EB9": "e",
  "\u1EC7": "e",
  "\u0229": "e",
  "\u1E1D": "e",
  "\u0119": "e",
  "\u1E19": "e",
  "\u1E1B": "e",
  "\u0247": "e",
  "\u025B": "e",
  "\u01DD": "e",
  "\u24D5": "f",
  "\uFF46": "f",
  "\u1E1F": "f",
  "\u0192": "f",
  "\uA77C": "f",
  "\u24D6": "g",
  "\uFF47": "g",
  "\u01F5": "g",
  "\u011D": "g",
  "\u1E21": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u01E7": "g",
  "\u0123": "g",
  "\u01E5": "g",
  "\u0260": "g",
  "\uA7A1": "g",
  "\u1D79": "g",
  "\uA77F": "g",
  "\u24D7": "h",
  "\uFF48": "h",
  "\u0125": "h",
  "\u1E23": "h",
  "\u1E27": "h",
  "\u021F": "h",
  "\u1E25": "h",
  "\u1E29": "h",
  "\u1E2B": "h",
  "\u1E96": "h",
  "\u0127": "h",
  "\u2C68": "h",
  "\u2C76": "h",
  "\u0265": "h",
  "\u0195": "hv",
  "\u24D8": "i",
  "\uFF49": "i",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\xEF": "i",
  "\u1E2F": "i",
  "\u1EC9": "i",
  "\u01D0": "i",
  "\u0209": "i",
  "\u020B": "i",
  "\u1ECB": "i",
  "\u012F": "i",
  "\u1E2D": "i",
  "\u0268": "i",
  "\u0131": "i",
  "\u24D9": "j",
  "\uFF4A": "j",
  "\u0135": "j",
  "\u01F0": "j",
  "\u0249": "j",
  "\u24DA": "k",
  "\uFF4B": "k",
  "\u1E31": "k",
  "\u01E9": "k",
  "\u1E33": "k",
  "\u0137": "k",
  "\u1E35": "k",
  "\u0199": "k",
  "\u2C6A": "k",
  "\uA741": "k",
  "\uA743": "k",
  "\uA745": "k",
  "\uA7A3": "k",
  "\u24DB": "l",
  "\uFF4C": "l",
  "\u0140": "l",
  "\u013A": "l",
  "\u013E": "l",
  "\u1E37": "l",
  "\u1E39": "l",
  "\u013C": "l",
  "\u1E3D": "l",
  "\u1E3B": "l",
  "\u017F": "l",
  "\u0142": "l",
  "\u019A": "l",
  "\u026B": "l",
  "\u2C61": "l",
  "\uA749": "l",
  "\uA781": "l",
  "\uA747": "l",
  "\u01C9": "lj",
  "\u24DC": "m",
  "\uFF4D": "m",
  "\u1E3F": "m",
  "\u1E41": "m",
  "\u1E43": "m",
  "\u0271": "m",
  "\u026F": "m",
  "\u24DD": "n",
  "\uFF4E": "n",
  "\u01F9": "n",
  "\u0144": "n",
  "\xF1": "n",
  "\u1E45": "n",
  "\u0148": "n",
  "\u1E47": "n",
  "\u0146": "n",
  "\u1E4B": "n",
  "\u1E49": "n",
  "\u019E": "n",
  "\u0272": "n",
  "\u0149": "n",
  "\uA791": "n",
  "\uA7A5": "n",
  "\u01CC": "nj",
  "\u24DE": "o",
  "\uFF4F": "o",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\u1ED3": "o",
  "\u1ED1": "o",
  "\u1ED7": "o",
  "\u1ED5": "o",
  "\xF5": "o",
  "\u1E4D": "o",
  "\u022D": "o",
  "\u1E4F": "o",
  "\u014D": "o",
  "\u1E51": "o",
  "\u1E53": "o",
  "\u014F": "o",
  "\u022F": "o",
  "\u0231": "o",
  "\xF6": "o",
  "\u022B": "o",
  "\u1ECF": "o",
  "\u0151": "o",
  "\u01D2": "o",
  "\u020D": "o",
  "\u020F": "o",
  "\u01A1": "o",
  "\u1EDD": "o",
  "\u1EDB": "o",
  "\u1EE1": "o",
  "\u1EDF": "o",
  "\u1EE3": "o",
  "\u1ECD": "o",
  "\u1ED9": "o",
  "\u01EB": "o",
  "\u01ED": "o",
  "\xF8": "o",
  "\u01FF": "o",
  "\u0254": "o",
  "\uA74B": "o",
  "\uA74D": "o",
  "\u0275": "o",
  "\u01A3": "oi",
  "\u0223": "ou",
  "\uA74F": "oo",
  "\u24DF": "p",
  "\uFF50": "p",
  "\u1E55": "p",
  "\u1E57": "p",
  "\u01A5": "p",
  "\u1D7D": "p",
  "\uA751": "p",
  "\uA753": "p",
  "\uA755": "p",
  "\u24E0": "q",
  "\uFF51": "q",
  "\u024B": "q",
  "\uA757": "q",
  "\uA759": "q",
  "\u24E1": "r",
  "\uFF52": "r",
  "\u0155": "r",
  "\u1E59": "r",
  "\u0159": "r",
  "\u0211": "r",
  "\u0213": "r",
  "\u1E5B": "r",
  "\u1E5D": "r",
  "\u0157": "r",
  "\u1E5F": "r",
  "\u024D": "r",
  "\u027D": "r",
  "\uA75B": "r",
  "\uA7A7": "r",
  "\uA783": "r",
  "\u24E2": "s",
  "\uFF53": "s",
  "\xDF": "s",
  "\u015B": "s",
  "\u1E65": "s",
  "\u015D": "s",
  "\u1E61": "s",
  "\u0161": "s",
  "\u1E67": "s",
  "\u1E63": "s",
  "\u1E69": "s",
  "\u0219": "s",
  "\u015F": "s",
  "\u023F": "s",
  "\uA7A9": "s",
  "\uA785": "s",
  "\u1E9B": "s",
  "\u24E3": "t",
  "\uFF54": "t",
  "\u1E6B": "t",
  "\u1E97": "t",
  "\u0165": "t",
  "\u1E6D": "t",
  "\u021B": "t",
  "\u0163": "t",
  "\u1E71": "t",
  "\u1E6F": "t",
  "\u0167": "t",
  "\u01AD": "t",
  "\u0288": "t",
  "\u2C66": "t",
  "\uA787": "t",
  "\uA729": "tz",
  "\u24E4": "u",
  "\uFF55": "u",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\u0169": "u",
  "\u1E79": "u",
  "\u016B": "u",
  "\u1E7B": "u",
  "\u016D": "u",
  "\xFC": "u",
  "\u01DC": "u",
  "\u01D8": "u",
  "\u01D6": "u",
  "\u01DA": "u",
  "\u1EE7": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u01D4": "u",
  "\u0215": "u",
  "\u0217": "u",
  "\u01B0": "u",
  "\u1EEB": "u",
  "\u1EE9": "u",
  "\u1EEF": "u",
  "\u1EED": "u",
  "\u1EF1": "u",
  "\u1EE5": "u",
  "\u1E73": "u",
  "\u0173": "u",
  "\u1E77": "u",
  "\u1E75": "u",
  "\u0289": "u",
  "\u24E5": "v",
  "\uFF56": "v",
  "\u1E7D": "v",
  "\u1E7F": "v",
  "\u028B": "v",
  "\uA75F": "v",
  "\u028C": "v",
  "\uA761": "vy",
  "\u24E6": "w",
  "\uFF57": "w",
  "\u1E81": "w",
  "\u1E83": "w",
  "\u0175": "w",
  "\u1E87": "w",
  "\u1E85": "w",
  "\u1E98": "w",
  "\u1E89": "w",
  "\u2C73": "w",
  "\u24E7": "x",
  "\uFF58": "x",
  "\u1E8B": "x",
  "\u1E8D": "x",
  "\u24E8": "y",
  "\uFF59": "y",
  "\u1EF3": "y",
  "\xFD": "y",
  "\u0177": "y",
  "\u1EF9": "y",
  "\u0233": "y",
  "\u1E8F": "y",
  "\xFF": "y",
  "\u1EF7": "y",
  "\u1E99": "y",
  "\u1EF5": "y",
  "\u01B4": "y",
  "\u024F": "y",
  "\u1EFF": "y",
  "\u24E9": "z",
  "\uFF5A": "z",
  "\u017A": "z",
  "\u1E91": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u1E93": "z",
  "\u1E95": "z",
  "\u01B6": "z",
  "\u0225": "z",
  "\u0240": "z",
  "\u2C6C": "z",
  "\uA763": "z",
  "\u0386": "\u0391",
  "\u0388": "\u0395",
  "\u0389": "\u0397",
  "\u038A": "\u0399",
  "\u03AA": "\u0399",
  "\u038C": "\u039F",
  "\u038E": "\u03A5",
  "\u03AB": "\u03A5",
  "\u038F": "\u03A9",
  "\u03AC": "\u03B1",
  "\u03AD": "\u03B5",
  "\u03AE": "\u03B7",
  "\u03AF": "\u03B9",
  "\u03CA": "\u03B9",
  "\u0390": "\u03B9",
  "\u03CC": "\u03BF",
  "\u03CD": "\u03C5",
  "\u03CB": "\u03C5",
  "\u03B0": "\u03C5",
  "\u03C9": "\u03C9",
  "\u03C2": "\u03C3"
};
function stripSpecialChars(text) {
  const match = (a) => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
var ItemsList = class {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = /* @__PURE__ */ new Map();
      this._groups.set(void 0, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = (item) => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = (item) => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = (item) => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find((item) => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach((item) => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find((item) => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find((x) => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter((x) => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex((x) => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf(".") === -1) {
      return option[key];
    } else {
      const keys = key.split(".");
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : "",
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      let item = null;
      if (this._ngSelect.compareWith) {
        item = this._items.find((item2) => this._ngSelect.compareWith(item2.value, selected.value));
      } else {
        const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
        item = isDefined(value) ? this.findItem(value) : null;
      }
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter((x) => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find((x) => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter((x) => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every((x) => x.selected)) {
        this._filteredItems = this._filteredItems.filter((x) => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter((x) => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every((x) => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === void 0) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = /* @__PURE__ */ new Map();
    if (items.length === 0) {
      return groups;
    }
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = (item) => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : void 0;
    };
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === void 0) {
        const withoutGroup = groups.get(void 0) || [];
        items.push(...withoutGroup.map((x) => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? "" : String(key),
        children: void 0,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map((x) => {
        x.parent = parent;
        x.children = void 0;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map((x) => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
};
var _NgDropdownPanelService = class _NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
};
_NgDropdownPanelService.\u0275fac = function NgDropdownPanelService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDropdownPanelService)();
};
_NgDropdownPanelService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgDropdownPanelService,
  factory: _NgDropdownPanelService.\u0275fac
});
var NgDropdownPanelService = _NgDropdownPanelService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelService, [{
    type: Injectable
  }], null, null);
})();
var CSS_POSITIONS = ["top", "right", "bottom", "left"];
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var _NgDropdownPanelComponent = class _NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = "auto";
    this.virtualScroll = false;
    this.filterValue = null;
    this.ariaLabelDropdown = input(null);
    this.update = new EventEmitter();
    this.scroll = new EventEmitter();
    this.scrollToEnd = new EventEmitter();
    this.outsideClick = new EventEmitter();
    this._destroy$ = new Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass("bottom");
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = "1";
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach((position) => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this.scrollElementRef.nativeElement, "scroll").pipe(takeUntil(this._destroy$), auditTime(0, SCROLL_SCHEDULER)).subscribe((e) => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      merge(fromEvent(this._document, "touchstart", {
        capture: true
      }), fromEvent(this._document, "click", {
        capture: true
      })).pipe(takeUntil(this._destroy$)).subscribe(($event) => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== "auto") {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return "top";
    } else {
      return "bottom";
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = this._dropdown.shadowRoot ? this._dropdown.shadowRoot.querySelector(this.appendTo) : document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + "px";
    this._dropdown.style.width = select.width + "px";
    this._dropdown.style.minWidth = select.width + "px";
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === "top") {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + "px";
      this._dropdown.style.top = "auto";
    } else if (this._currentPosition === "bottom") {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + "px";
      this._dropdown.style.bottom = "auto";
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this._dropdown, "mousedown").pipe(takeUntil(this._destroy$)).subscribe((event) => {
        const target = event.target;
        if (target.tagName === "INPUT") {
          return;
        }
        event.preventDefault();
      });
    });
  }
};
_NgDropdownPanelComponent.\u0275fac = function NgDropdownPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDropdownPanelComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NgDropdownPanelService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT, 8));
};
_NgDropdownPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7, ElementRef);
      \u0275\u0275viewQuery(_c12, 7, ElementRef);
      \u0275\u0275viewQuery(_c22, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentElementRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollElementRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paddingElementRef = _t.first);
    }
  },
  inputs: {
    items: "items",
    markedItem: "markedItem",
    position: "position",
    appendTo: "appendTo",
    bufferAmount: "bufferAmount",
    virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
    headerTemplate: "headerTemplate",
    footerTemplate: "footerTemplate",
    filterValue: "filterValue",
    ariaLabelDropdown: [1, "ariaLabelDropdown"]
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c32,
  decls: 9,
  vars: 7,
  consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
      \u0275\u0275elementStart(1, "div", 4, 0);
      \u0275\u0275element(3, "div", null, 1);
      \u0275\u0275elementStart(5, "div", null, 2);
      \u0275\u0275projection(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.headerTemplate ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.ariaLabelDropdown());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("total-padding", ctx.virtualScroll);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("scrollable-content", ctx.virtualScroll && ctx.items.length);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.footerTemplate ? 8 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NgDropdownPanelComponent = _NgDropdownPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "ng-dropdown-panel",
      template: `
		@if (headerTemplate) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host" [attr.aria-label]="ariaLabelDropdown()">
			<div #padding [class.total-padding]="virtualScroll"></div>
			<div #content [class.scrollable-content]="virtualScroll && items.length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
	`,
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: NgDropdownPanelService
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    items: [{
      type: Input
    }],
    markedItem: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    bufferAmount: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    update: [{
      type: Output
    }],
    scroll: [{
      type: Output
    }],
    scrollToEnd: [{
      type: Output
    }],
    outsideClick: [{
      type: Output
    }],
    contentElementRef: [{
      type: ViewChild,
      args: ["content", {
        read: ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: ViewChild,
      args: ["scroll", {
        read: ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: ViewChild,
      args: ["padding", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var _NgOptionComponent = class _NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.stateChange$ = new Subject();
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || "").trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
};
_NgOptionComponent.\u0275fac = function NgOptionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptionComponent)(\u0275\u0275directiveInject(ElementRef));
};
_NgOptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    value: "value",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c32,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NgOptionComponent = _NgOptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionComponent, [{
    type: Component,
    args: [{
      selector: "ng-option",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [{
    type: ElementRef
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var KeyCode;
(function(KeyCode2) {
  KeyCode2["Tab"] = "Tab";
  KeyCode2["Enter"] = "Enter";
  KeyCode2["Esc"] = "Escape";
  KeyCode2["Space"] = " ";
  KeyCode2["ArrowUp"] = "ArrowUp";
  KeyCode2["ArrowDown"] = "ArrowDown";
  KeyCode2["Backspace"] = "Backspace";
})(KeyCode || (KeyCode = {}));
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
var DefaultSelectionModel = class {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter((x) => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter((x) => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter((x) => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter((x) => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter((x) => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter((x) => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter((x) => x.parent !== parent), ...parent.children.filter((x) => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter((x) => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every((x) => !x.disabled || x.selected);
  }
};
var _NgSelectConfig = class _NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = true;
    this.notFoundText = "No items found";
    this.typeToSearchText = "Type to search";
    this.addTagText = "Add item";
    this.loadingText = "Loading...";
    this.clearAllText = "Clear all";
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = "underline";
    this.tabFocusOnClear = true;
  }
};
_NgSelectConfig.\u0275fac = function NgSelectConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectConfig)();
};
_NgSelectConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgSelectConfig,
  factory: _NgSelectConfig.\u0275fac,
  providedIn: "root"
});
var NgSelectConfig = _NgSelectConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConsoleService = class _ConsoleService {
  warn(message) {
    console.warn(message);
  }
};
_ConsoleService.\u0275fac = function ConsoleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsoleService)();
};
_ConsoleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConsoleService,
  factory: _ConsoleService.\u0275fac,
  providedIn: "root"
});
var ConsoleService = _ConsoleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SELECTION_MODEL_FACTORY = new InjectionToken("ng-select-selection-model");
var _NgSelectComponent = class _NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.ariaLabelDropdown = "Options List";
    this.markFirst = true;
    this.fixedPlaceholder = true;
    this.preventToggleOnRightClick = false;
    this.dropdownPosition = "auto";
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.tabFocusOnClearButton = input();
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.ngClass = null;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.changeEvent = new EventEmitter();
    this.openEvent = new EventEmitter();
    this.closeEvent = new EventEmitter();
    this.searchEvent = new EventEmitter();
    this.clearEvent = new EventEmitter();
    this.addEvent = new EventEmitter();
    this.removeEvent = new EventEmitter();
    this.scroll = new EventEmitter();
    this.scrollToEnd = new EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this.tabFocusOnClear = signal(true);
    this._defaultLabel = "label";
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new Subject();
    this._keyPress$ = new Subject();
    this._items = [];
    this.keyDownFn = (_) => true;
    this.clearItem = (item) => {
      const option = this.selectedItems.find((x) => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._itemsAreUsed = true;
    this._items = value ?? [];
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== void 0 && fn !== null && !isFunction(fn)) {
      throw Error("`compareWith` must be a function.");
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get deselectOnClick() {
    if (isDefined(this._deselectOnClick)) {
      return this._deselectOnClick;
    } else if (isDefined(this.config.deselectOnClick)) {
      return this.config.deselectOnClick;
    }
    return this.multiple;
  }
  set deselectOnClick(value) {
    this._deselectOnClick = value;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map((x) => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return void 0;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some((x) => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some((x) => x.label.toLowerCase() === term)) && !this.loading;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm?.trim();
    return term && term.length >= this.minTermLength;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
    if (changes.groupBy) {
      if (!changes.items) {
        this._setItems([...this.items]);
      }
    }
    if (changes.inputAttrs) {
      this._setInputAttributes();
    }
    this._setTabFocusOnClear();
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyName = $event.key;
    if (Object.values(KeyCode).includes(keyName)) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if (keyName && keyName.length === 1) {
      this._keyPress$.next(keyName.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton && this.clearButton.nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.key) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.key) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.preventToggleOnRightClick && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== "INPUT") {
      $event.preventDefault();
    }
    if (target.classList.contains("ng-clear-wrapper")) {
      return;
    }
    if (target.classList.contains("ng-arrow-wrapper")) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains("ng-value-icon")) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick(_event) {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.deselectOnClick && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput.nativeElement.focus();
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then((item) => this.select(handleTag(item))).catch(() => {
      });
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton) {
      this.clearButton.nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map((x) => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add("ng-select-focused");
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove("ng-select-focused");
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems?.[0];
    this.searchTerm = selected?.label ?? null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = (options) => {
      this.items = options.map((option) => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
      merge(...this.ngOptions.map((option) => option.stateChange$)).pipe(takeUntil(changedOrDestroyed)).subscribe((option) => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe(startWith(this.ngOptions), takeUntil(this._destroy$)).subscribe((options) => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === "" || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = (item) => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn("Multiple select ngModel should be array.");
        return false;
      }
      return value.every((item) => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = (val) => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach((item) => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe(takeUntil(this._destroy$), tap((letter) => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join(""))).subscribe((term) => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input2 = this.searchInput.nativeElement;
    const attributes = __spreadValues({
      type: "text",
      autocorrect: "off",
      autocapitalize: "off",
      autocomplete: "off",
      "aria-controls": this.dropdownId
    }, this.inputAttrs);
    for (const key of Object.keys(attributes)) {
      input2.setAttribute(key, attributes[key]);
    }
  }
  _setTabFocusOnClear() {
    this.tabFocusOnClear.set(isDefined(this.tabFocusOnClearButton()) ? !!this.tabFocusOnClearButton() : this.config.tabFocusOnClear);
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map((x) => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.deselectOnClick && this.appendTo) {
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false) {
      if (this.showClear() && !$event.shiftKey && this.tabFocusOnClear()) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag) {
        return;
      }
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.fixedPlaceholder = this.fixedPlaceholder || config.fixedPlaceholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = this.getVirtualScroll(config);
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
    this._setTabFocusOnClear();
  }
  /**
   * Gets virtual scroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if virtual scroll is enabled, `false` otherwise
   */
  getVirtualScroll(config) {
    return isDefined(this.virtualScroll) ? this.virtualScroll : this.isVirtualScrollDisabled(config);
  }
  /**
   * Gets disableVirtualScroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if disableVirtualScroll is enabled, `false` otherwise
   */
  isVirtualScrollDisabled(config) {
    return isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
  }
};
_NgSelectComponent.\u0275fac = function NgSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectComponent)(\u0275\u0275injectAttribute("class"), \u0275\u0275injectAttribute("autofocus"), \u0275\u0275directiveInject(NgSelectConfig), \u0275\u0275directiveInject(SELECTION_MODEL_FACTORY, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ConsoleService));
};
_NgSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgOptionTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgOptgroupTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgLabelTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgMultiLabelTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgHeaderTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgFooterTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgNotFoundTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgPlaceholderTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgTypeToSearchTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgLoadingTextTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgTagTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgLoadingSpinnerTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgClearButtonTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, NgOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optgroupTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.labelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiLabelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.notFoundTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.placeholderTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.typeToSearchTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTextTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tagTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingSpinnerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearButtonTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ngOptions = _t);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(NgDropdownPanelComponent, 5);
      \u0275\u0275viewQuery(_c52, 7);
      \u0275\u0275viewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownPanel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearButton = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single)("ng-select-disabled", ctx.disabled);
    }
  },
  inputs: {
    ariaLabelDropdown: "ariaLabelDropdown",
    bindLabel: "bindLabel",
    bindValue: "bindValue",
    ariaLabel: "ariaLabel",
    markFirst: [2, "markFirst", "markFirst", booleanAttribute],
    placeholder: "placeholder",
    fixedPlaceholder: "fixedPlaceholder",
    notFoundText: "notFoundText",
    typeToSearchText: "typeToSearchText",
    preventToggleOnRightClick: "preventToggleOnRightClick",
    addTagText: "addTagText",
    loadingText: "loadingText",
    clearAllText: "clearAllText",
    appearance: "appearance",
    dropdownPosition: "dropdownPosition",
    appendTo: "appendTo",
    loading: [2, "loading", "loading", booleanAttribute],
    closeOnSelect: [2, "closeOnSelect", "closeOnSelect", booleanAttribute],
    hideSelected: [2, "hideSelected", "hideSelected", booleanAttribute],
    selectOnTab: [2, "selectOnTab", "selectOnTab", booleanAttribute],
    openOnEnter: [2, "openOnEnter", "openOnEnter", booleanAttribute],
    maxSelectedItems: [2, "maxSelectedItems", "maxSelectedItems", numberAttribute],
    groupBy: "groupBy",
    groupValue: "groupValue",
    bufferAmount: [2, "bufferAmount", "bufferAmount", numberAttribute],
    virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
    selectableGroup: [2, "selectableGroup", "selectableGroup", booleanAttribute],
    selectableGroupAsModel: [2, "selectableGroupAsModel", "selectableGroupAsModel", booleanAttribute],
    searchFn: "searchFn",
    trackByFn: "trackByFn",
    clearOnBackspace: [2, "clearOnBackspace", "clearOnBackspace", booleanAttribute],
    labelForId: "labelForId",
    inputAttrs: "inputAttrs",
    tabIndex: [2, "tabIndex", "tabIndex", numberAttribute],
    tabFocusOnClearButton: [1, "tabFocusOnClearButton"],
    readonly: [2, "readonly", "readonly", booleanAttribute],
    searchWhileComposing: [2, "searchWhileComposing", "searchWhileComposing", booleanAttribute],
    minTermLength: [2, "minTermLength", "minTermLength", numberAttribute],
    editableSearchTerm: [2, "editableSearchTerm", "editableSearchTerm", booleanAttribute],
    ngClass: "ngClass",
    typeahead: "typeahead",
    multiple: [2, "multiple", "multiple", booleanAttribute],
    addTag: "addTag",
    searchable: [2, "searchable", "searchable", booleanAttribute],
    clearable: [2, "clearable", "clearable", booleanAttribute],
    isOpen: "isOpen",
    items: "items",
    compareWith: "compareWith",
    clearSearchOnAdd: "clearSearchOnAdd",
    deselectOnClick: "deselectOnClick",
    keyDownFn: "keyDownFn"
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NgSelectComponent),
    multi: true
  }, NgDropdownPanelService]), \u0275\u0275NgOnChangesFeature],
  decls: 15,
  vars: 20,
  consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "ariaLabelDropdown"], ["aria-atomic", "true", "aria-live", "polite", "role", "status", 1, "ng-visually-hidden"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "click", "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "ariaLabelDropdown"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 10);
      \u0275\u0275listener("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleMousedown($event));
      });
      \u0275\u0275elementStart(1, "div", 11);
      \u0275\u0275conditionalCreate(2, NgSelectComponent_Conditional_2_Template, 3, 1);
      \u0275\u0275conditionalCreate(3, NgSelectComponent_Conditional_3_Template, 2, 0);
      \u0275\u0275conditionalCreate(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
      \u0275\u0275elementStart(5, "div", 13)(6, "input", 14, 0);
      \u0275\u0275listener("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputBlur($event));
      })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r7 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(ctx.onCompositionEnd(searchInput_r7.value));
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCompositionStart());
      })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputFocus($event));
      })("input", function NgSelectComponent_Template_input_input_6_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r7 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(ctx.filter(searchInput_r7.value));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, NgSelectComponent_Conditional_8_Template, 3, 1);
      \u0275\u0275conditionalCreate(9, NgSelectComponent_Conditional_9_Template, 2, 1);
      \u0275\u0275elementStart(10, "span", 15);
      \u0275\u0275element(11, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, NgSelectComponent_Conditional_12_Template, 8, 18, "ng-dropdown-panel", 17);
      \u0275\u0275elementStart(13, "div", 18);
      \u0275\u0275conditionalCreate(14, NgSelectComponent_Conditional_14_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedItems.length === 0 && !ctx.searchTerm || ctx.fixedPlaceholder ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0 ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disabled)("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("value", ctx.searchTerm ?? "");
      \u0275\u0275attribute("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen)("aria-label", ctx.ariaLabel)("id", ctx.labelForId)("tabindex", ctx.tabIndex);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showClear() ? 9 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isOpen ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isOpen && ctx.showNoItemsFound() ? 14 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, NgClass],
  styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var NgSelectComponent = _NgSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectComponent, [{
    type: Component,
    args: [{
      selector: "ng-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, NgClass],
      template: `<div
	(mousedown)="handleMousedown($event)"
	[class.ng-appearance-outline]="appearance === 'outline'"
	[class.ng-has-value]="hasValue"
	class="ng-select-container">
	<div class="ng-value-container">
		@if ((selectedItems.length === 0 && !searchTerm) || fixedPlaceholder) {
			<ng-template #defaultPlaceholderTemplate>
				<div class="ng-placeholder">{{ placeholder }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="placeholderTemplate || defaultPlaceholderTemplate"> </ng-template>
		}

		@if ((!multiLabelTemplate || !multiple) && selectedItems.length > 0) {
			@for (item of selectedItems; track trackByOption($index, item)) {
				<div [class.ng-value-disabled]="item.disabled" class="ng-value">
					<ng-template #defaultLabelTemplate>
						<span class="ng-value-icon left" (click)="unselect(item)" aria-hidden="true">\xD7</span>
						<span class="ng-value-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="labelTemplate || defaultLabelTemplate"
						[ngTemplateOutletContext]="{ item: item.value, clear: clearItem, label: item.label }">
					</ng-template>
				</div>
			}
		}

		@if (multiple && multiLabelTemplate && selectedValues.length > 0) {
			<ng-template [ngTemplateOutlet]="multiLabelTemplate" [ngTemplateOutletContext]="{ items: selectedValues, clear: clearItem }">
			</ng-template>
		}

		<div class="ng-input">
			<input
				#searchInput
				(blur)="onInputBlur($event)"
				(change)="$event.stopPropagation()"
				(compositionend)="onCompositionEnd(searchInput.value)"
				(compositionstart)="onCompositionStart()"
				(focus)="onInputFocus($event)"
				(input)="filter(searchInput.value)"
				[attr.aria-activedescendant]="isOpen ? itemsList?.markedItem?.htmlId : null"
				[attr.aria-controls]="isOpen ? dropdownId : null"
				[attr.aria-expanded]="isOpen"
				[attr.aria-label]="ariaLabel"
				[attr.id]="labelForId"
				[attr.tabindex]="tabIndex"
				[disabled]="disabled"
				[readOnly]="!searchable || itemsList.maxItemsSelected"
				[value]="searchTerm ?? ''"
				aria-autocomplete="list"
				role="combobox" />
		</div>
	</div>

	@if (loading) {
		<ng-template #defaultLoadingSpinnerTemplate>
			<div class="ng-spinner-loader"></div>
		</ng-template>
		<ng-template [ngTemplateOutlet]="loadingSpinnerTemplate || defaultLoadingSpinnerTemplate"></ng-template>
	}

	@if (showClear()) {
		@if (clearButtonTemplate) {
			<ng-container [ngTemplateOutlet]="clearButtonTemplate"></ng-container>
		} @else {
			<span
				class="ng-clear-wrapper"
				role="button"
				tabindex="0"
				[attr.tabindex]="tabFocusOnClear() ? 0 : -1"
				title="{{ clearAllText }}"
				#clearButton
				(click)="handleClearClick($event)">
				<span class="ng-clear" aria-hidden="true">\xD7</span>
			</span>
		}
	}

	<span class="ng-arrow-wrapper">
		<span class="ng-arrow"></span>
	</span>
</div>

@if (isOpen) {
	<ng-dropdown-panel
		class="ng-dropdown-panel"
		[virtualScroll]="virtualScroll"
		[bufferAmount]="bufferAmount"
		[appendTo]="appendTo"
		[position]="dropdownPosition"
		[headerTemplate]="headerTemplate"
		[footerTemplate]="footerTemplate"
		[filterValue]="searchTerm"
		[items]="itemsList.filteredItems"
		[markedItem]="itemsList.markedItem"
		(update)="viewPortItems = $event"
		(scroll)="scroll.emit($event)"
		(scrollToEnd)="scrollToEnd.emit($event)"
		(outsideClick)="close()"
		[class.ng-select-multiple]="multiple"
		[ngClass]="appendTo ? (ngClass ? ngClass : classes) : null"
		[id]="dropdownId"
		[ariaLabelDropdown]="ariaLabelDropdown">
		<ng-container>
			@for (item of viewPortItems; track trackByOption($index, item)) {
				<div
					class="ng-option"
					[attr.role]="item.children ? 'group' : 'option'"
					(click)="toggleItem(item)"
					(mouseover)="onItemHover(item)"
					[class.ng-option-disabled]="item.disabled"
					[class.ng-option-selected]="item.selected"
					[class.ng-optgroup]="item.children"
					[class.ng-option]="!item.children"
					[class.ng-option-child]="!!item.parent"
					[class.ng-option-marked]="item === itemsList.markedItem"
					[attr.aria-selected]="item.selected"
					[attr.id]="item?.htmlId"
					[attr.aria-setsize]="itemsList.filteredItems.length"
					[attr.aria-posinset]="item.index + 1">
					<ng-template #defaultOptionTemplate>
						<span class="ng-option-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="
							item.children ? optgroupTemplate || defaultOptionTemplate : optionTemplate || defaultOptionTemplate
						"
						[ngTemplateOutletContext]="{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
			@if (showAddTag) {
				<div
					class="ng-option"
					[class.ng-option-marked]="!itemsList.markedItem"
					(mouseover)="itemsList.unmarkItem()"
					role="option"
					(click)="selectTag()">
					<ng-template #defaultTagTemplate>
						<span
							><span class="ng-tag-label">{{ addTagText }}</span
							>"{{ searchTerm }}"</span
						>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="tagTemplate || defaultTagTemplate"
						[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
		</ng-container>
		@if (showNoItemsFound()) {
			<ng-template #defaultNotFoundTemplate>
				<div class="ng-option ng-option-disabled">{{ notFoundText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="notFoundTemplate || defaultNotFoundTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
		@if (showTypeToSearch()) {
			<ng-template #defaultTypeToSearchTemplate>
				<div class="ng-option ng-option-disabled">{{ typeToSearchText }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="typeToSearchTemplate || defaultTypeToSearchTemplate"></ng-template>
		}
		@if (loading && itemsList.filteredItems.length === 0) {
			<ng-template #defaultLoadingTextTemplate>
				<div class="ng-option ng-option-disabled">{{ loadingText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="loadingTextTemplate || defaultLoadingTextTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
	</ng-dropdown-panel>
}

<!-- Always present aria-live region -->
<div aria-atomic="true" aria-live="polite" class="ng-visually-hidden" role="status">
	@if (isOpen && showNoItemsFound()) {
		{{ notFoundText }}
	}
</div>
`,
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["class"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["autofocus"]
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SELECTION_MODEL_FACTORY]
    }, {
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ConsoleService
  }], {
    ariaLabelDropdown: [{
      type: Input
    }],
    bindLabel: [{
      type: Input
    }],
    bindValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    markFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    fixedPlaceholder: [{
      type: Input
    }],
    notFoundText: [{
      type: Input
    }],
    typeToSearchText: [{
      type: Input
    }],
    preventToggleOnRightClick: [{
      type: Input
    }],
    addTagText: [{
      type: Input
    }],
    loadingText: [{
      type: Input
    }],
    clearAllText: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    dropdownPosition: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openOnEnter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxSelectedItems: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    groupBy: [{
      type: Input
    }],
    groupValue: [{
      type: Input
    }],
    bufferAmount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectableGroup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectableGroupAsModel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchFn: [{
      type: Input
    }],
    trackByFn: [{
      type: Input
    }],
    clearOnBackspace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelForId: [{
      type: Input
    }],
    inputAttrs: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchWhileComposing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minTermLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    editableSearchTerm: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ngClass: [{
      type: Input
    }],
    typeahead: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-typeahead"]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-multiple"]
    }],
    addTag: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-taggable"]
    }],
    searchable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-searchable"]
    }],
    clearable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-clearable"]
    }],
    isOpen: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-opened"]
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    openEvent: [{
      type: Output,
      args: ["open"]
    }],
    closeEvent: [{
      type: Output,
      args: ["close"]
    }],
    searchEvent: [{
      type: Output,
      args: ["search"]
    }],
    clearEvent: [{
      type: Output,
      args: ["clear"]
    }],
    addEvent: [{
      type: Output,
      args: ["add"]
    }],
    removeEvent: [{
      type: Output,
      args: ["remove"]
    }],
    scroll: [{
      type: Output,
      args: ["scroll"]
    }],
    scrollToEnd: [{
      type: Output,
      args: ["scrollToEnd"]
    }],
    optionTemplate: [{
      type: ContentChild,
      args: [NgOptionTemplateDirective, {
        read: TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: TemplateRef
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [NgLabelTemplateDirective, {
        read: TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: TemplateRef
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: TemplateRef
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [NgFooterTemplateDirective, {
        read: TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: TemplateRef
      }]
    }],
    placeholderTemplate: [{
      type: ContentChild,
      args: [NgPlaceholderTemplateDirective, {
        read: TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: TemplateRef
      }]
    }],
    tagTemplate: [{
      type: ContentChild,
      args: [NgTagTemplateDirective, {
        read: TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: TemplateRef
      }]
    }],
    clearButtonTemplate: [{
      type: ContentChild,
      args: [NgClearButtonTemplateDirective, {
        read: TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: ViewChild,
      args: [forwardRef(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: ViewChild,
      args: ["searchInput", {
        static: true
      }]
    }],
    clearButton: [{
      type: ViewChild,
      args: ["clearButton"]
    }],
    ngOptions: [{
      type: ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: HostBinding,
      args: ["class.ng-select"]
    }],
    filtered: [{
      type: HostBinding,
      args: ["class.ng-select-filtered"]
    }],
    single: [{
      type: HostBinding,
      args: ["class.ng-select-single"]
    }],
    items: [{
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.ng-select-disabled"]
    }],
    compareWith: [{
      type: Input
    }],
    clearSearchOnAdd: [{
      type: Input
    }],
    deselectOnClick: [{
      type: Input
    }],
    keyDownFn: [{
      type: Input
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _NgSelectModule = class _NgSelectModule {
};
_NgSelectModule.\u0275fac = function NgSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectModule)();
};
_NgSelectModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgSelectModule,
  imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
  exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective]
});
_NgSelectModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: DefaultSelectionModelFactory
  }]
});
var NgSelectModule = _NgSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c03 = ["knob"];
var _c13 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c23 = ["trackActive"];
var _c33 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  discrete;
  /** Indicates which slider thumb this input corresponds to. */
  thumbPosition;
  /** The display value of the slider thumb. */
  valueIndicatorText;
  /** The MatRipple for this slider thumb. */
  _ripple;
  /** The slider thumb knob. */
  _knob;
  /** The slider thumb value indicator container. */
  _valueIndicatorContainer;
  /** The slider input corresponding to this slider thumb. */
  _sliderInput;
  /** The native html element of the slider input corresponding to this thumb. */
  _sliderInputEl;
  /** The RippleRef for the slider thumbs hover state. */
  _hoverRippleRef;
  /** The RippleRef for the slider thumbs focus state. */
  _focusRippleRef;
  /** The RippleRef for the slider thumbs active state. */
  _activeRippleRef;
  /** Whether the slider thumb is currently being hovered. */
  _isHovered = false;
  /** Whether the slider thumb is currently being pressed. */
  _isActive = false;
  /** Whether the value indicator tooltip is visible. */
  _isValueIndicatorVisible = false;
  /** The host native HTML input element. */
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  constructor() {
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input2 = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input2, "pointermove", this._onPointerMove), renderer.listen(input2, "pointerdown", this._onDragStart), renderer.listen(input2, "pointerup", this._onDragEnd), renderer.listen(input2, "pointerleave", this._onMouseLeave), renderer.listen(input2, "focus", this._onFocus), renderer.listen(input2, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5);
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"]
    }]
  }], () => [], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  /** The active portion of the slider track. */
  _trackActive;
  /** The slider thumb(s). */
  _thumbs;
  /** The sliders hidden range input(s). */
  _input;
  /** The sliders hidden range input(s). */
  _inputs;
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  /** Whether the slider displays tick marks along the slider track. */
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  /**
   * Theme color of the slider. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slider/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether ripples are disabled in the slider. */
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.min = min;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.max = max;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.step = this._step;
      if (this._platform.SAFARI) {
        input2.value = input2.value;
      }
      input2._updateThumbUIByValue();
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  displayWith = (value) => `${value}`;
  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  _tickMarks;
  /** Whether animations have been disabled. */
  _noopAnimations = _animationsDisabled();
  /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
  _dirChangeSubscription;
  /** Observer used to monitor size changes in the slider. */
  _resizeObserver;
  // Stored dimensions to avoid calling getBoundingClientRect redundantly.
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  // The value indicator tooltip text for the visual slider thumb(s).
  /** @docs-private */
  startValueIndicatorText = "";
  /** @docs-private */
  endValueIndicatorText = "";
  // Used to control the translateX of the visual slider thumb(s).
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  /** Whether the slider is rtl. */
  _isRtl = false;
  _hasViewInitialized = false;
  /**
   * The width of the tick mark track.
   * The tick mark track width is different from full track width
   */
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
      this._isRtl = this._dir.value === "rtl";
    }
  }
  /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir?.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    input2._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input2 = this._getInput(thumbPosition);
    if (!input2) {
      return this.min;
    }
    return input2.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Whether or not the slider thumbs overlap. */
  _thumbsOverlap = false;
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c23, 5);
        \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c33,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:bottom;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:bottom;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /** Event emitted when the `value` is changed. */
  valueChange = new EventEmitter();
  /** Event emitted when the slider thumb starts being dragged. */
  dragStart = new EventEmitter();
  /** Event emitted when the slider thumb stops being dragged. */
  dragEnd = new EventEmitter();
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  /**
   * Indicates whether this thumb is the start or end thumb.
   * @docs-private
   */
  thumbPosition = _MatThumb.END;
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** The host native HTML input element. */
  _hostElement = this._elementRef.nativeElement;
  /** The aria-valuetext string representation of the input's value. */
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  /** The radius of a native html slider's knob. */
  _knobRadius = 8;
  /** The distance in px from the start of the slider track to the first tick mark. */
  _tickMarkOffset = 3;
  /** Whether user's cursor is currently in a mouse down state on the input. */
  _isActive = false;
  /** Whether the input is currently focused (either by tab or after clicking). */
  _isFocused = false;
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  /**
   * Whether the initial value has been set.
   * This exists because the initial value cannot be immediately set because the min and max
   * must first be relayed from the parent MatSlider component, which can only happen later
   * in the component lifecycle.
   */
  _hasSetInitialValue = false;
  /** The stored initial value. */
  _initialValue;
  /** Defined when a user is using a form control to manage slider value & validation. */
  _formControl;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /**
   * Indicates whether UI updates should be skipped.
   *
   * This flag is used to avoid flickering
   * when correcting values on pointer up/down.
   */
  _skipUIUpdate = false;
  /** Callback called when the slider input value changes. */
  _onChangeFn;
  /** Callback called when the slider input has been touched. */
  _onTouchedFn = () => {
  };
  /**
   * Whether the NgModel has been initialized.
   *
   * This flag is used to ignore ghost null calls to
   * writeValue which can break slider initialization.
   *
   * See https://github.com/angular/angular/issues/14988.
   */
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  /** Whether this slider corresponds to the input on the left hand side. */
  _isLeftThumb;
  /** Whether this slider corresponds to the input with greater value. */
  _isEndThumb;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/features/workout-administration/models/exercise-set.form.ts
var ExerciseSetForm = class extends FormGroup {
  constructor(exerciseSet) {
    super({
      id: new FormControl(exerciseSet?.id || null),
      order: new FormControl(exerciseSet?.order || 1, [
        Validators.required,
        Validators.min(1)
      ]),
      reps: new FormControl(exerciseSet?.reps || null, [
        Validators.required,
        Validators.min(1)
      ]),
      weight: new FormControl(exerciseSet?.weight || 0, [
        Validators.required,
        Validators.min(0)
      ]),
      isWarmupSet: new FormControl(exerciseSet?.isWarmupSet || false),
      isDropSet: new FormControl(exerciseSet?.isDropSet || false)
    });
  }
  getSubmitValue() {
    const formValue = this.value;
    return {
      id: formValue.id || void 0,
      order: formValue.order || 1,
      reps: formValue.reps || 0,
      weight: formValue.weight || 0,
      isWarmupSet: formValue.isWarmupSet || false,
      isDropSet: formValue.isDropSet || false
    };
  }
};

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c04 = ["input"];
var _c14 = ["label"];
var _c24 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  /** The source checkbox of the event. */
  source;
  /** The new `checked` value of the checkbox. */
  checked;
};
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** CSS classes to add when transitioning between the different checkbox states. */
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel = "";
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /**
   * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
   */
  ariaExpanded;
  /**
   * Users can specify the `aria-controls` attribute which will be forwarded to the input element
   */
  ariaControls;
  /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
  ariaOwns;
  _uniqueId;
  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  id;
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  required;
  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  labelPosition = "after";
  /** Name value will be applied to the input element if present */
  name = null;
  /** Event emitted when the checkbox's `checked` value changes. */
  change = new EventEmitter();
  /** Event emitted when the checkbox's `indeterminate` value changes. */
  indeterminateChange = new EventEmitter();
  /** The value attribute of the native input element */
  value;
  /** Whether the checkbox has a ripple. */
  disableRipple;
  /** The native `<input type="checkbox">` element */
  _inputElement;
  /** The native `<label>` element */
  _labelElement;
  /** Tabindex for the checkbox. */
  tabIndex;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the checkbox. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the checkbox should remain interactive when it is disabled. */
  disabledInteractive;
  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c24,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
        });
        \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onTouchTargetClick());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onBlur());
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInputClick());
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInteractionEvent($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox, MatCommonModule],
    exports: [MatCheckbox, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/features/workout-administration/components/exercise-set-form/exercise-set-form.component.ts
function ExerciseSetFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ExerciseSetFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Min: 1");
    \u0275\u0275elementEnd();
  }
}
function ExerciseSetFormComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ExerciseSetFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Min: 0");
    \u0275\u0275elementEnd();
  }
}
var ExerciseSetFormComponent = class _ExerciseSetFormComponent {
  setForm;
  showRemoveButton = true;
  isEditMode = false;
  hasSelectedSet = false;
  removeSet = new EventEmitter();
  addSet = new EventEmitter();
  get isSetValid() {
    return this.setForm.valid;
  }
  /**
   * Get the button text based on edit mode
   */
  get addButtonText() {
    if (this.isEditMode) {
      return "Update Set";
    }
    return "Add Set";
  }
  /**
   * Get the button icon based on edit mode
   */
  get addButtonIcon() {
    if (this.isEditMode) {
      return "save";
    }
    return "add";
  }
  adjustReps(delta) {
    const currentValue = this.setForm.controls.reps.value || 0;
    const newValue = Math.max(1, currentValue + delta);
    this.setForm.controls.reps.setValue(newValue);
  }
  adjustWeight(delta) {
    const currentValue = this.setForm.controls.weight.value || 0;
    const newValue = Math.max(0, currentValue + delta);
    this.setForm.controls.weight.setValue(newValue);
  }
  onWarmupChange(event) {
    if (event.checked) {
      this.setForm.controls.isDropSet.setValue(false);
    }
  }
  onDropSetChange(event) {
    if (event.checked) {
      this.setForm.controls.isWarmupSet.setValue(false);
    }
  }
  onRemove() {
    this.removeSet.emit();
  }
  onAddSet() {
    if (this.isSetValid) {
      this.addSet.emit(this.setForm);
    }
  }
  static \u0275fac = function ExerciseSetFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExerciseSetFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExerciseSetFormComponent, selectors: [["app-exercise-set-form"]], inputs: { setForm: "setForm", showRemoveButton: "showRemoveButton", isEditMode: "isEditMode", hasSelectedSet: "hasSelectedSet" }, outputs: { removeSet: "removeSet", addSet: "addSet" }, decls: 56, vars: 11, consts: [[1, "flex", "flex-col", "gap-2", "rounded-lg", "border", "p-2"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1"], [1, "mb-1", "text-xs"], [1, "flex", "items-center", "gap-1"], ["appearance", "outline", 1, "min-w-0", "max-w-20", "flex-1"], ["matInput", "", "type", "number", "min", "1", "placeholder", "0", 1, "text-center", "text-sm", 3, "formControl"], [1, "flex", "flex-col", "gap-1"], ["mat-mini-fab", "", 1, "", 3, "click"], [1, "material-icons"], ["matInput", "", "type", "number", "min", "0", "step", "0.5", "placeholder", "0", 1, "text-center", "text-sm", 3, "formControl"], [1, "flex", "items-center", "justify-between", "gap-4"], ["mat-raised-button", "", "color", "primary", 1, "px-4", 3, "click", "disabled"], [1, "mr-1"], [1, "flex", "items-center", "gap-2", "pr-2"], [1, "text-xs", 3, "change", "formControl"]], template: function ExerciseSetFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Reps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "mat-form-field", 5);
      \u0275\u0275element(7, "input", 6);
      \u0275\u0275conditionalCreate(8, ExerciseSetFormComponent_Conditional_8_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(9, ExerciseSetFormComponent_Conditional_9_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_11_listener() {
        return ctx.adjustReps(1);
      });
      \u0275\u0275elementStart(12, "i", 9);
      \u0275\u0275text(13, "keyboard_arrow_up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_14_listener() {
        return ctx.adjustReps(-1);
      });
      \u0275\u0275elementStart(15, "i", 9);
      \u0275\u0275text(16, "keyboard_arrow_down");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 7)(18, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_18_listener() {
        return ctx.adjustReps(10);
      });
      \u0275\u0275elementStart(19, "i", 9);
      \u0275\u0275text(20, "keyboard_double_arrow_up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_21_listener() {
        return ctx.adjustReps(-10);
      });
      \u0275\u0275elementStart(22, "i", 9);
      \u0275\u0275text(23, "keyboard_double_arrow_down");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 2)(25, "div", 3);
      \u0275\u0275text(26, "Weight (kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 4)(28, "mat-form-field", 5);
      \u0275\u0275element(29, "input", 10);
      \u0275\u0275conditionalCreate(30, ExerciseSetFormComponent_Conditional_30_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(31, ExerciseSetFormComponent_Conditional_31_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7)(33, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_33_listener() {
        return ctx.adjustWeight(1);
      });
      \u0275\u0275elementStart(34, "i", 9);
      \u0275\u0275text(35, "keyboard_arrow_up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_36_listener() {
        return ctx.adjustWeight(-1);
      });
      \u0275\u0275elementStart(37, "i", 9);
      \u0275\u0275text(38, "keyboard_arrow_down");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 7)(40, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_40_listener() {
        return ctx.adjustWeight(10);
      });
      \u0275\u0275elementStart(41, "i", 9);
      \u0275\u0275text(42, "keyboard_double_arrow_up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 8);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_43_listener() {
        return ctx.adjustWeight(-10);
      });
      \u0275\u0275elementStart(44, "i", 9);
      \u0275\u0275text(45, "keyboard_double_arrow_down");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "div", 11)(47, "button", 12);
      \u0275\u0275listener("click", function ExerciseSetFormComponent_Template_button_click_47_listener() {
        return ctx.onAddSet();
      });
      \u0275\u0275elementStart(48, "mat-icon", 13);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 14)(52, "mat-checkbox", 15);
      \u0275\u0275listener("change", function ExerciseSetFormComponent_Template_mat_checkbox_change_52_listener($event) {
        return ctx.onWarmupChange($event);
      });
      \u0275\u0275text(53, " Warmup ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-checkbox", 15);
      \u0275\u0275listener("change", function ExerciseSetFormComponent_Template_mat_checkbox_change_54_listener($event) {
        return ctx.onDropSetChange($event);
      });
      \u0275\u0275text(55, " Drop ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("formControl", ctx.setForm.controls.reps);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.reps.touched && ctx.setForm.controls.reps.hasError("required") ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.reps.touched && ctx.setForm.controls.reps.hasError("min") ? 9 : -1);
      \u0275\u0275advance(20);
      \u0275\u0275property("formControl", ctx.setForm.controls.weight);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.weight.touched && ctx.setForm.controls.weight.hasError("required") ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.weight.touched && ctx.setForm.controls.weight.hasError("min") ? 31 : -1);
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", !ctx.isSetValid || ctx.isEditMode && !ctx.hasSelectedSet);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.addButtonIcon);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.addButtonText, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.setForm.controls.isWarmupSet);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.setForm.controls.isDropSet);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    MinValidator,
    FormControlDirective,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatCheckboxModule,
    MatCheckbox,
    MatButtonModule,
    MatButton,
    MatMiniFabButton,
    MatIconModule,
    MatIcon
  ], styles: ["\n\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  height: 84px;\n}\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-form-field-infix {\n  padding-block: 4px;\n  min-height: 40px;\n  top: 24px;\n}\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element {\n  font-size: 28px;\n}\n[_nghost-%COMP%]     button.mat-mdc-mini-fab {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=exercise-set-form.component-YFTCKOAW.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExerciseSetFormComponent, [{
    type: Component,
    args: [{ selector: "app-exercise-set-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule
    ], template: `
    <div class="flex flex-col gap-2 rounded-lg border p-2">
      <!-- Top row: Set Number, Reps, Weight, Remove Button -->
      <div class="flex items-center gap-2">
        <!-- Reps with increment buttons -->
        <div class="min-w-0 flex-1">
          <div class="mb-1 text-xs">Reps</div>
          <div class="flex items-center gap-1">
            <mat-form-field appearance="outline" class="min-w-0 max-w-20 flex-1">
              <input
                matInput
                type="number"
                min="1"
                placeholder="0"
                [formControl]="setForm.controls.reps"
                class="text-center text-sm"
              />
              @if (setForm.controls.reps.touched && setForm.controls.reps.hasError('required')) {
                <mat-error>Required</mat-error>
              }
              @if (setForm.controls.reps.touched && setForm.controls.reps.hasError('min')) {
                <mat-error>Min: 1</mat-error>
              }
            </mat-form-field>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustReps(1)" class=" ">
                <i class="material-icons">keyboard_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustReps(-1)" class=" ">
                <i class="material-icons">keyboard_arrow_down</i>
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustReps(10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustReps(-10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_down</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Weight with increment buttons -->
        <div class="min-w-0 flex-1">
          <div class="mb-1 text-xs">Weight (kg)</div>
          <div class="flex items-center gap-1">
            <mat-form-field appearance="outline" class="min-w-0 max-w-20 flex-1">
              <input
                matInput
                type="number"
                min="0"
                step="0.5"
                placeholder="0"
                [formControl]="setForm.controls.weight"
                class="text-center text-sm"
              />
              @if (
                setForm.controls.weight.touched && setForm.controls.weight.hasError('required')
              ) {
                <mat-error>Required</mat-error>
              }
              @if (setForm.controls.weight.touched && setForm.controls.weight.hasError('min')) {
                <mat-error>Min: 0</mat-error>
              }
            </mat-form-field>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustWeight(1)" class=" ">
                <i class="material-icons">keyboard_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustWeight(-1)" class=" ">
                <i class="material-icons">keyboard_arrow_down</i>
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustWeight(10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustWeight(-10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_down</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Remove Button -->
        <!-- @if (showRemoveButton) {
          <button
            mat-icon-button
            (click)="onRemove()"
            class="!h-8 !w-8 flex-shrink-0"
            matTooltip="Remove this set"
          >
            <mat-icon class="!text-lg">delete_outline</mat-icon>
          </button>
        } -->
      </div>

      <!-- Bottom row: Add Set Button and Checkboxes -->
      <div class="flex items-center justify-between gap-4">
        <button
          mat-raised-button
          color="primary"
          (click)="onAddSet()"
          [disabled]="!isSetValid || (isEditMode && !hasSelectedSet)"
          class="px-4"
        >
          <mat-icon class="mr-1">{{ addButtonIcon }}</mat-icon>
          {{ addButtonText }}
        </button>

        <div class="flex items-center gap-2 pr-2">
          <mat-checkbox
            [formControl]="setForm.controls.isWarmupSet"
            (change)="onWarmupChange($event)"
            class="text-xs"
          >
            Warmup
          </mat-checkbox>
          <mat-checkbox
            [formControl]="setForm.controls.isDropSet"
            (change)="onDropSetChange($event)"
            class="text-xs"
          >
            Drop
          </mat-checkbox>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/features/workout-administration/components/exercise-set-form/exercise-set-form.component.scss */\n:host ::ng-deep .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  height: 84px;\n}\n:host ::ng-deep .mat-mdc-form-field .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-form-field-infix {\n  padding-block: 4px;\n  min-height: 40px;\n  top: 24px;\n}\n:host ::ng-deep .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n:host ::ng-deep .mat-mdc-form-field .mat-mdc-input-element {\n  font-size: 28px;\n}\n:host ::ng-deep button.mat-mdc-mini-fab {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=exercise-set-form.component-YFTCKOAW.css.map */\n"] }]
  }], null, { setForm: [{
    type: Input,
    args: [{ required: true }]
  }], showRemoveButton: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], hasSelectedSet: [{
    type: Input
  }], removeSet: [{
    type: Output
  }], addSet: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExerciseSetFormComponent, { className: "ExerciseSetFormComponent", filePath: "src/app/features/workout-administration/components/exercise-set-form/exercise-set-form.component.ts", lineNumber: 155 });
})();

// src/app/features/workout-administration/components/set-info/set-info.component.ts
function SetInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 1);
    \u0275\u0275text(1, "local_fire_department");
    \u0275\u0275elementEnd();
  }
}
function SetInfoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "trending_down");
    \u0275\u0275elementEnd();
  }
}
var SetInfoComponent = class _SetInfoComponent {
  setForm;
  hasDropAfter = false;
  isClickable = false;
  isSelected = false;
  get displayText() {
    const reps = this.setForm.controls.reps.value || 0;
    const weight = this.setForm.controls.weight.value || 0;
    return `${reps} \xD7 ${weight}kg`;
  }
  get pillClasses() {
    const isWarmup = this.setForm.controls.isWarmupSet.value;
    const isDrop = this.setForm.controls.isDropSet.value;
    let classes = "";
    if (isWarmup) {
      classes = "pill-warmup";
    } else if (isDrop) {
      classes = "pill-drop";
    } else {
      classes = "pill-default";
    }
    if (this.hasDropAfter) {
      classes += " has-drop-after";
    }
    if (this.isClickable) {
      classes += " hover:opacity-80 transition-opacity";
    }
    if (this.isSelected) {
      classes += " ring-offset-2";
    }
    return classes;
  }
  static \u0275fac = function SetInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetInfoComponent, selectors: [["app-set-info"]], inputs: { setForm: "setForm", hasDropAfter: "hasDropAfter", isClickable: "isClickable", isSelected: "isSelected" }, decls: 5, vars: 10, consts: [[1, "set-pill", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-primary", "px-3", "py-1", "text-sm", "font-medium", "text-textOnPrimary", 3, "ngClass"], [1, "opacity-50"]], template: function SetInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, SetInfoComponent_Conditional_1_Template, 2, 0, "mat-icon", 1);
      \u0275\u0275conditionalCreate(2, SetInfoComponent_Conditional_2_Template, 2, 0, "mat-icon");
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("cursor-pointer", ctx.isClickable)("ring-2", ctx.isSelected)("ring-blue-400", ctx.isSelected);
      \u0275\u0275property("ngClass", ctx.pillClasses);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.isWarmupSet.value ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.setForm.controls.isDropSet.value ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.displayText, " ");
    }
  }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon], styles: ["\n\n.pill-drop[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary),\n      var(--color-secondary)) !important;\n}\n.set-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary),\n      var(--color-primary)) !important;\n}\n.set-pill[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.set-pill.has-drop-after[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=set-info-264OAXMO.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetInfoComponent, [{
    type: Component,
    args: [{ selector: "app-set-info", standalone: true, imports: [CommonModule, MatIconModule], template: `
    <div
      class="set-pill inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-textOnPrimary"
      [ngClass]="pillClasses"
      [class.cursor-pointer]="isClickable"
      [class.ring-2]="isSelected"
      [class.ring-blue-400]="isSelected"
    >
      <!-- Warmup icon -->
      @if (setForm.controls.isWarmupSet.value) {
        <mat-icon class="opacity-50">local_fire_department</mat-icon>
      }

      <!-- Drop set icon -->
      @if (setForm.controls.isDropSet.value) {
        <mat-icon>trending_down</mat-icon>
      }

      <!-- Reps x Weight display -->
      <span>
        {{ displayText }}
      </span>
    </div>
  `, styles: ["/* src/app/features/workout-administration/components/set-info/set-info.scss */\n.pill-drop {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary),\n      var(--color-secondary)) !important;\n}\n.set-pill {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary),\n      var(--color-primary)) !important;\n}\n.set-pill {\n  min-height: 32px;\n}\n.set-pill.has-drop-after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=set-info-264OAXMO.css.map */\n"] }]
  }], null, { setForm: [{
    type: Input,
    args: [{ required: true }]
  }], hasDropAfter: [{
    type: Input
  }], isClickable: [{
    type: Input
  }], isSelected: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetInfoComponent, { className: "SetInfoComponent", filePath: "src/app/features/workout-administration/components/set-info/set-info.component.ts", lineNumber: 36 });
})();

// src/app/features/workout-administration/components/set-info/set-info-container.component.ts
function SetInfoContainerComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-set-info", 4);
    \u0275\u0275listener("click", function SetInfoContainerComponent_For_5_Template_app_set_info_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSetClick($index_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const setForm_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("setForm", setForm_r4)("hasDropAfter", ctx_r2.hasDropSetAfter($index_r2))("isClickable", ctx_r2.isEditMode)("isSelected", ctx_r2.selectedSetIndex === $index_r2);
  }
}
var SetInfoContainerComponent = class _SetInfoContainerComponent {
  setsArray;
  isEditMode = false;
  selectedSetIndex = null;
  setSelected = new EventEmitter();
  hasDropSetAfter(index) {
    const nextIndex = index + 1;
    if (nextIndex >= this.setsArray.controls.length) {
      return false;
    }
    const nextSet = this.setsArray.controls[nextIndex];
    return nextSet.controls.isDropSet.value === true;
  }
  onSetClick(index) {
    if (this.isEditMode) {
      this.setSelected.emit(index);
    }
  }
  static \u0275fac = function SetInfoContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetInfoContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetInfoContainerComponent, selectors: [["app-set-info-container"]], inputs: { setsArray: "setsArray", isEditMode: "isEditMode", selectedSetIndex: "selectedSetIndex" }, outputs: { setSelected: "setSelected" }, decls: 6, vars: 1, consts: [[1, "flex", "flex-col", "gap-1"], [1, "m-0", "text-sm", "font-medium"], [1, "flex", "flex-wrap", "gap-2"], [3, "setForm", "hasDropAfter", "isClickable", "isSelected"], [3, "click", "setForm", "hasDropAfter", "isClickable", "isSelected"]], template: function SetInfoContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, SetInfoContainerComponent_For_5_Template, 1, 4, "app-set-info", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Sets (", ctx.setsArray.controls.length, ")");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.setsArray.controls);
    }
  }, dependencies: [CommonModule, SetInfoComponent], styles: ["\n\n.pill-drop[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary),\n      var(--color-secondary)) !important;\n}\n.set-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary),\n      var(--color-primary)) !important;\n}\n.set-pill[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.set-pill.has-drop-after[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=set-info-264OAXMO.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetInfoContainerComponent, [{
    type: Component,
    args: [{ selector: "app-set-info-container", standalone: true, imports: [CommonModule, SetInfoComponent], template: `
    <div class="flex flex-col gap-1">
      <h3 class="m-0 text-sm font-medium">Sets ({{ setsArray.controls.length }})</h3>
      <div class="flex flex-wrap gap-2">
        @for (setForm of setsArray.controls; track $index) {
          <app-set-info
            [setForm]="setForm"
            [hasDropAfter]="hasDropSetAfter($index)"
            [isClickable]="isEditMode"
            [isSelected]="selectedSetIndex === $index"
            (click)="onSetClick($index)"
          />
        }
      </div>
    </div>
  `, styles: ["/* src/app/features/workout-administration/components/set-info/set-info.scss */\n.pill-drop {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary),\n      var(--color-secondary)) !important;\n}\n.set-pill {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary),\n      var(--color-primary)) !important;\n}\n.set-pill {\n  min-height: 32px;\n}\n.set-pill.has-drop-after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=set-info-264OAXMO.css.map */\n"] }]
  }], null, { setsArray: [{
    type: Input,
    args: [{ required: true }]
  }], isEditMode: [{
    type: Input
  }], selectedSetIndex: [{
    type: Input
  }], setSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetInfoContainerComponent, { className: "SetInfoContainerComponent", filePath: "src/app/features/workout-administration/components/set-info/set-info-container.component.ts", lineNumber: 29 });
})();

// src/app/features/workout-administration/components/exercise-instance-form/exercise-instance-form.component.ts
function ExerciseInstanceFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-set-info-container", 9);
    \u0275\u0275listener("setSelected", function ExerciseInstanceFormComponent_Conditional_4_Template_app_set_info_container_setSelected_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSetSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("setsArray", ctx_r1.exerciseForm.setsArray)("isEditMode", ctx_r1.isEditMode)("selectedSetIndex", ctx_r1.selectedSetIndex);
  }
}
function ExerciseInstanceFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ExerciseInstanceFormComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditAction());
    });
    \u0275\u0275elementStart(1, "mat-icon", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editButtonText, " ");
  }
}
var ExerciseInstanceFormComponent = class _ExerciseInstanceFormComponent {
  exerciseForm;
  removeExercise = new EventEmitter();
  newSetForm = new ExerciseSetForm();
  isEditMode = false;
  selectedSetIndex = null;
  ngOnInit() {
    this.initializeNewSetForm();
  }
  ngOnChanges(changes) {
    if (changes["exerciseForm"]) {
      this.initializeNewSetForm();
    }
  }
  /**
   * Initialize the new set form with values from the last non-drop set
   */
  initializeNewSetForm() {
    const lastNonDropSet = this.getLastNonDropSet();
    if (lastNonDropSet) {
      this.newSetForm = new ExerciseSetForm();
      this.newSetForm.patchValue({
        reps: lastNonDropSet.reps,
        weight: lastNonDropSet.weight
      });
    } else {
      this.newSetForm = new ExerciseSetForm();
    }
  }
  /**
   * Get the last set that is not a drop set
   */
  getLastNonDropSet() {
    const sets = this.exerciseForm.setsArray.controls;
    if (sets.length === 0) {
      return null;
    }
    for (let i = sets.length - 1; i >= 0; i--) {
      const setForm = sets[i];
      const isDropSet = setForm.controls.isDropSet.value;
      if (!isDropSet) {
        return {
          reps: setForm.controls.reps.value,
          weight: setForm.controls.weight.value
        };
      }
    }
    return null;
  }
  addSet(formToAdd) {
    if (formToAdd.valid) {
      if (this.isEditMode && this.selectedSetIndex !== null) {
        this.updateSelectedSet(formToAdd);
      } else {
        this.addNewSet(formToAdd);
      }
    }
  }
  /**
   * Add a new set to the exercise
   */
  addNewSet(formToAdd) {
    const newSetData = formToAdd.getSubmitValue();
    const currentSets = this.exerciseForm.setsArray.value;
    const nextOrder = currentSets.length > 0 ? Math.max(...currentSets.map((s) => s.order || 0)) + 1 : 1;
    const setForm = new ExerciseSetForm();
    setForm.patchValue(__spreadProps(__spreadValues({}, newSetData), {
      order: nextOrder
    }));
    this.exerciseForm.setsArray.push(setForm);
    this.exerciseForm.markAsDirty();
    this.initializeNewSetForm();
  }
  /**
   * Update the currently selected set
   */
  updateSelectedSet(formToAdd) {
    if (this.selectedSetIndex !== null) {
      const selectedSetForm = this.exerciseForm.setsArray.at(this.selectedSetIndex);
      if (selectedSetForm) {
        const updateData = formToAdd.getSubmitValue();
        selectedSetForm.patchValue({
          reps: updateData.reps,
          weight: updateData.weight,
          isWarmupSet: updateData.isWarmupSet,
          isDropSet: updateData.isDropSet
        });
        this.exerciseForm.markAsDirty();
        this.exitEditMode();
      }
    }
  }
  /**
   * Get the text for the remove button based on edit mode and sets
   */
  get removeButtonText() {
    if (this.exerciseForm.setsArray.length === 0) {
      return "Remove Exercise";
    }
    return this.isEditMode ? "Remove Current Set" : "Remove Last Set";
  }
  /**
   * Get the icon for the remove button based on edit mode and sets
   */
  get removeButtonIcon() {
    if (this.exerciseForm.setsArray.length === 0) {
      return "delete";
    }
    return this.isEditMode ? "delete_outline" : "remove_circle_outline";
  }
  /**
   * Get the text for the edit button based on edit mode
   */
  get editButtonText() {
    return this.isEditMode ? "Unselect" : "Edit Sets";
  }
  /**
   * Get the icon for the edit button based on edit mode
   */
  get editButtonIcon() {
    return this.isEditMode ? "close" : "edit";
  }
  /**
   * Check if the remove button should be disabled
   */
  get isRemoveButtonDisabled() {
    return this.isEditMode && this.selectedSetIndex === null && this.exerciseForm.setsArray.length > 0;
  }
  /**
   * Handle remove button click - behavior depends on edit mode and sets
   */
  onRemoveAction() {
    if (this.exerciseForm.setsArray.length === 0) {
      this.onRemoveExercise();
    } else if (this.isEditMode && this.selectedSetIndex !== null) {
      this.removeCurrentSet();
    } else {
      this.removeLastSet();
    }
  }
  /**
   * Remove the last set from the exercise
   */
  removeLastSet() {
    const lastIndex = this.exerciseForm.setsArray.length - 1;
    if (lastIndex >= 0) {
      this.exerciseForm.removeSet(lastIndex);
      this.initializeNewSetForm();
    }
  }
  /**
   * Remove the currently selected set (in edit mode)
   */
  removeCurrentSet() {
    if (this.selectedSetIndex !== null && this.selectedSetIndex >= 0) {
      this.exerciseForm.removeSet(this.selectedSetIndex);
      this.exitEditMode();
    }
  }
  /**
   * Handle edit/deselect button click
   */
  onEditAction() {
    if (this.isEditMode) {
      this.exitEditMode();
    } else {
      this.enterEditMode();
    }
  }
  /**
   * Enter edit mode
   */
  enterEditMode() {
    this.isEditMode = true;
  }
  /**
   * Exit edit mode without saving
   */
  exitEditMode() {
    this.isEditMode = false;
    this.selectedSetIndex = null;
    this.initializeNewSetForm();
  }
  /**
   * Handle set selection from set info container
   */
  onSetSelected(index) {
    if (this.isEditMode) {
      this.selectedSetIndex = index;
      this.loadSetForEditing(index);
    }
  }
  /**
   * Load selected set data into the form for editing
   */
  loadSetForEditing(index) {
    const setForm = this.exerciseForm.setsArray.at(index);
    if (setForm) {
      this.newSetForm = new ExerciseSetForm();
      this.newSetForm.patchValue({
        reps: setForm.controls.reps.value,
        weight: setForm.controls.weight.value,
        isWarmupSet: setForm.controls.isWarmupSet.value,
        isDropSet: setForm.controls.isDropSet.value
      });
    }
  }
  /**
   * Emit event to remove the entire exercise
   */
  onRemoveExercise() {
    this.removeExercise.emit();
  }
  static \u0275fac = function ExerciseInstanceFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExerciseInstanceFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExerciseInstanceFormComponent, selectors: [["app-exercise-instance-form"]], inputs: { exerciseForm: "exerciseForm" }, outputs: { removeExercise: "removeExercise" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 9, consts: [[1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "flex-col", "gap-2"], [3, "addSet", "setForm", "showRemoveButton", "isEditMode", "hasSelectedSet"], [3, "setsArray", "isEditMode", "selectedSetIndex"], [1, "flex", "justify-between"], ["mat-stroked-button", "", "color", "primary", 1, "px-4"], ["mat-stroked-button", "", "color", "warn", 1, "px-4", 3, "click", "disabled"], [1, "mr-1"], [3, "setSelected", "setsArray", "isEditMode", "selectedSetIndex"], ["mat-stroked-button", "", "color", "primary", 1, "px-4", 3, "click"]], template: function ExerciseInstanceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-exercise-set-form", 3);
      \u0275\u0275listener("addSet", function ExerciseInstanceFormComponent_Template_app_exercise_set_form_addSet_3_listener($event) {
        return ctx.addSet($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, ExerciseInstanceFormComponent_Conditional_4_Template, 1, 3, "app-set-info-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275conditionalCreate(6, ExerciseInstanceFormComponent_Conditional_6_Template, 4, 2, "button", 6);
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function ExerciseInstanceFormComponent_Template_button_click_7_listener() {
        return ctx.onRemoveAction();
      });
      \u0275\u0275elementStart(8, "mat-icon", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("setForm", ctx.newSetForm)("showRemoveButton", false)("isEditMode", ctx.isEditMode)("hasSelectedSet", ctx.selectedSetIndex !== null);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exerciseForm.setsArray.controls.length > 0 ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.exerciseForm.setsArray.controls.length > 0 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isRemoveButtonDisabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.removeButtonIcon);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.removeButtonText, " ");
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatSliderModule,
    MatCardModule,
    ExerciseSetFormComponent,
    SetInfoContainerComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExerciseInstanceFormComponent, [{
    type: Component,
    args: [{ selector: "app-exercise-instance-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSliderModule,
      MatCardModule,
      ExerciseSetFormComponent,
      SetInfoContainerComponent
    ], template: '<div class="flex flex-col gap-4">\n  <!-- Exercise Info Card -->\n\n  <!-- Sets Section -->\n  <div class="flex flex-col gap-1">\n    <!-- Add Set Form -->\n    <div class="flex flex-col gap-2">\n      <app-exercise-set-form\n        [setForm]="newSetForm"\n        [showRemoveButton]="false"\n        [isEditMode]="isEditMode"\n        [hasSelectedSet]="selectedSetIndex !== null"\n        (addSet)="addSet($event)"\n      />\n    </div>\n\n    <!-- Existing Sets Pills -->\n    @if (exerciseForm.setsArray.controls.length > 0) {\n      <app-set-info-container\n        [setsArray]="exerciseForm.setsArray"\n        [isEditMode]="isEditMode"\n        [selectedSetIndex]="selectedSetIndex"\n        (setSelected)="onSetSelected($event)"\n      />\n    }\n  </div>\n\n  <!-- Exercise Comments -->\n  <!-- <div class="flex flex-col gap-4">\n    <h3 class="text-lg font-medium">Comments & Notes</h3>\n    <mat-form-field appearance="outline" class="w-full">\n      <mat-label>Exercise Comments</mat-label>\n      <textarea\n        matInput\n        rows="3"\n        placeholder="Add any notes about this exercise..."\n        [formControl]="exerciseForm.controls.comment"\n      ></textarea>\n    </mat-form-field>\n  </div> -->\n\n  <!-- Energy Level -->\n  <!-- <div class="flex flex-col gap-4">\n    <h3 class="text-lg font-medium">Energy Level</h3>\n    <div class="px-4">\n      <mat-slider\n        [min]="1"\n        [max]="10"\n        [step]="1"\n        [discrete]="true"\n        [showTickMarks]="true"\n        class="w-full"\n      >\n        <input matSliderThumb [formControl]="exerciseForm.controls.energyLevel" />\n      </mat-slider>\n      <div class="mt-1 flex justify-between text-xs text-gray-500">\n        <span>Low Energy (1)</span>\n        <span>High Energy (10)</span>\n      </div>\n      @if (exerciseForm.controls.energyLevel.value) {\n        <div class="mt-2 text-center">\n          <span class="text-sm font-medium">\n            Energy Level: {{ exerciseForm.controls.energyLevel.value }}\n          </span>\n        </div>\n      }\n    </div>\n  </div> -->\n\n  <!-- Action Buttons -->\n  <div class="flex justify-between">\n    <!-- Edit/Unselect Button (visible only when there are sets) -->\n    @if (exerciseForm.setsArray.controls.length > 0) {\n      <button mat-stroked-button color="primary" (click)="onEditAction()" class="px-4">\n        <mat-icon class="mr-1">{{ editButtonIcon }}</mat-icon>\n        {{ editButtonText }}\n      </button>\n    }\n\n    <!-- Remove Button (Dynamic) -->\n    <button\n      mat-stroked-button\n      color="warn"\n      (click)="onRemoveAction()"\n      [disabled]="isRemoveButtonDisabled"\n      class="px-4"\n    >\n      <mat-icon class="mr-1">{{ removeButtonIcon }}</mat-icon>\n      {{ removeButtonText }}\n    </button>\n  </div>\n</div>\n' }]
  }], null, { exerciseForm: [{
    type: Input,
    args: [{ required: true }]
  }], removeExercise: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExerciseInstanceFormComponent, { className: "ExerciseInstanceFormComponent", filePath: "src/app/features/workout-administration/components/exercise-instance-form/exercise-instance-form.component.ts", lineNumber: 40 });
})();

// src/app/features/workout-administration/models/exercise-instance.form.ts
var ExerciseInstanceForm = class _ExerciseInstanceForm extends FormGroup {
  constructor(exerciseInstance) {
    super({
      id: new FormControl(exerciseInstance?.id || null),
      order: new FormControl(exerciseInstance?.order || null),
      sets: new FormArray(exerciseInstance?.sets?.sort((a, b) => a.order - b.order).map((set) => new ExerciseSetForm(set)) || [], [_ExerciseInstanceForm.atLeastOneSetValidator]),
      exerciseType: new FormControl(exerciseInstance?.exerciseType || null, Validators.required),
      comment: new FormControl(exerciseInstance?.comment || ""),
      energyLevel: new FormControl(exerciseInstance?.energyLevel || null, [
        Validators.min(1),
        Validators.max(10)
      ])
    });
  }
  get setsArray() {
    return this.controls.sets;
  }
  addSet() {
    const currentSets = this.setsArray.value;
    const nextOrder = currentSets.length > 0 ? Math.max(...currentSets.map((s) => s.order || 0)) + 1 : 1;
    const newSet = new ExerciseSetForm();
    newSet.patchValue({ order: nextOrder });
    this.setsArray.push(newSet);
    this.markAsDirty();
  }
  removeSet(index) {
    this.setsArray.removeAt(index);
    this.reorderSets();
    this.markAsDirty();
  }
  reorderSets() {
    this.setsArray.controls.forEach((setForm, index) => {
      setForm.patchValue({ order: index + 1 });
    });
  }
  getSubmitValue() {
    const formValue = this.value;
    return {
      id: formValue.id || void 0,
      order: formValue.order || 1,
      sets: this.setsArray.controls.map((setForm) => setForm.getSubmitValue()),
      exerciseType: formValue.exerciseType,
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null
    };
  }
  static atLeastOneSetValidator = (control) => {
    const formArray = control;
    return formArray.length > 0 ? null : { atLeastOneSet: true };
  };
};

// src/app/features/workout-administration/models/workout.form.ts
var WorkoutForm = class _WorkoutForm extends FormGroup {
  constructor(workout) {
    super({
      id: new FormControl(workout?.id || null),
      dateCreated: new FormControl(workout?.dateCreated || (/* @__PURE__ */ new Date()).toISOString(), Validators.required),
      exercises: new FormArray(workout?.exercises?.sort((a, b) => a.order - b.order).map((exercise) => new ExerciseInstanceForm(exercise)) || [], [_WorkoutForm.atLeastOneExerciseValidator]),
      comment: new FormControl(workout?.comment || ""),
      energyLevel: new FormControl(workout?.energyLevel || null, [
        Validators.min(1),
        Validators.max(10)
      ])
    });
  }
  get exercisesArray() {
    return this.controls.exercises;
  }
  addExercise() {
    const currentExercises = this.exercisesArray.value;
    const nextOrder = currentExercises.length > 0 ? Math.max(...currentExercises.map((e) => e.order || 0)) + 1 : 1;
    const newExercise = new ExerciseInstanceForm();
    newExercise.patchValue({ order: nextOrder });
    this.exercisesArray.push(newExercise);
    this.markAsDirty();
  }
  removeExercise(index) {
    this.exercisesArray.removeAt(index);
    this.reorderExercises();
    this.markAsDirty();
  }
  reorderExercises() {
    this.exercisesArray.controls.forEach((exerciseForm, index) => {
      exerciseForm.patchValue({ order: index + 1 });
    });
  }
  getSubmitValue() {
    const formValue = this.value;
    return {
      id: formValue.id || void 0,
      dateCreated: formValue.dateCreated || (/* @__PURE__ */ new Date()).toISOString(),
      exercises: this.exercisesArray.controls.map((exerciseForm) => exerciseForm.getSubmitValue()),
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null
    };
  }
  static atLeastOneExerciseValidator = (control) => {
    const formArray = control;
    return formArray.length > 0 ? null : { atLeastOneExercise: true };
  };
};

// src/app/features/workout-administration/workout-create.component.ts
function WorkoutCreateComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-loader", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("opacity", 80);
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function WorkoutCreateComponent_Conditional_12_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAddExerciseDropdown());
    });
    \u0275\u0275elementStart(1, "mat-icon", 18);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New Exercise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.areAllExercisesValid);
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_5_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().item;
    \u0275\u0275textInterpolate1(" | ", item_r5.requisiteUsed, " ");
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, WorkoutCreateComponent_Conditional_12_Conditional_5_ng_template_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r5.name, "\xA0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" | ", item_r5.primaryMuscleTargeted.group, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.requisiteUsed ? 5 : -1);
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "ng-select", 21);
    \u0275\u0275listener("change", function WorkoutCreateComponent_Conditional_12_Conditional_5_Template_ng_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExerciseTypeSelected($event));
    });
    \u0275\u0275template(2, WorkoutCreateComponent_Conditional_12_Conditional_5_ng_template_2_Template, 6, 3, "ng-template", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function WorkoutCreateComponent_Conditional_12_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelExerciseSelection());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.availableExerciseTypes)("loading", ctx_r2.isLoading)("isOpen", true);
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exercise_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", exercise_r8.controls.exerciseType.value == null ? null : exercise_r8.controls.exerciseType.value.requisiteUsed, ") ");
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-expansion-panel", 27);
    \u0275\u0275listener("expandedChange", function WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Template_mat_expansion_panel_expandedChange_0_listener($event) {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPanelExpandedChange($index_r7, $event));
    });
    \u0275\u0275elementStart(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Conditional_4_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-exercise-instance-form", 29);
    \u0275\u0275listener("removeExercise", function WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Template_app_exercise_instance_form_removeExercise_5_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeExercise($index_r7));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exercise_r8 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("expanded", ctx_r2.expandedPanelIndex === $index_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (exercise_r8.controls.exerciseType.value == null ? null : exercise_r8.controls.exerciseType.value.name) || "New Exercise", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasExerciseVariation(exercise_r8) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("exerciseForm", exercise_r8);
  }
}
function WorkoutCreateComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-accordion", 15);
    \u0275\u0275repeaterCreate(1, WorkoutCreateComponent_Conditional_12_Conditional_6_For_2_Template, 6, 4, "mat-expansion-panel", 26, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.workoutForm.exercisesArray.controls);
  }
}
function WorkoutCreateComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275conditionalCreate(4, WorkoutCreateComponent_Conditional_12_Conditional_4_Template, 4, 1, "button", 13);
    \u0275\u0275conditionalCreate(5, WorkoutCreateComponent_Conditional_12_Conditional_5_Template, 6, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, WorkoutCreateComponent_Conditional_12_Conditional_6_Template, 3, 0, "mat-accordion", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "button", 17);
    \u0275\u0275listener("click", function WorkoutCreateComponent_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.discardWorkout());
    });
    \u0275\u0275elementStart(9, "mat-icon", 18);
    \u0275\u0275text(10, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Discard Workout ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function WorkoutCreateComponent_Conditional_12_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveWorkout());
    });
    \u0275\u0275elementStart(13, "mat-icon", 18);
    \u0275\u0275text(14, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.showExerciseSelect ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showExerciseSelect ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.workoutForm.exercisesArray.controls.length > 0 ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.workoutForm.valid || ctx_r2.isApiLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditMode ? "Update Workout" : "Save Workout", " ");
  }
}
var WorkoutCreateComponent = class _WorkoutCreateComponent {
  router;
  route;
  exerciseTypesService;
  workoutsService;
  dialog;
  exerciseTypes = [];
  isLoading = false;
  isApiLoading = signal(false, ...ngDevMode ? [{ debugName: "isApiLoading" }] : []);
  workoutForm = new WorkoutForm();
  showExerciseSelect = false;
  expandedPanelIndex = null;
  isEditMode = false;
  constructor(router, route, exerciseTypesService, workoutsService, dialog) {
    this.router = router;
    this.route = route;
    this.exerciseTypesService = exerciseTypesService;
    this.workoutsService = workoutsService;
    this.dialog = dialog;
  }
  ngOnInit() {
    this.isEditMode = !!this.workoutForm.value.id;
    this.loadExerciseTypes();
    const workoutId = this.route.snapshot.paramMap.get("id");
    if (workoutId) {
      this.loadWorkoutById(+workoutId);
    } else {
      this.loadTodaysWorkouts();
    }
  }
  /**
   * Returns exercise types that are NOT already selected in the workout
   */
  get availableExerciseTypes() {
    const selectedExerciseTypeIds = this.workoutForm.exercisesArray.controls.map((exercise) => exercise.controls.exerciseType.value?.id).filter((id) => id !== null && id !== void 0);
    return this.exerciseTypes.filter((exerciseType) => !selectedExerciseTypeIds.includes(exerciseType.id));
  }
  get areAllExercisesValid() {
    return this.workoutForm.exercisesArray.controls.every((exerciseForm) => exerciseForm.valid);
  }
  showAddExerciseDropdown() {
    this.showExerciseSelect = true;
  }
  onExerciseTypeSelected(exerciseType) {
    if (exerciseType) {
      this.workoutForm.addExercise();
      const newExerciseIndex = this.workoutForm.exercisesArray.length - 1;
      const newExerciseForm = this.workoutForm.exercisesArray.at(newExerciseIndex);
      newExerciseForm.patchValue({
        exerciseType
      });
      this.expandedPanelIndex = newExerciseIndex;
      this.showExerciseSelect = false;
    }
  }
  cancelExerciseSelection() {
    this.showExerciseSelect = false;
  }
  onPanelExpandedChange(index, expanded) {
    if (expanded) {
      this.expandedPanelIndex = index;
    } else if (this.expandedPanelIndex === index) {
      this.expandedPanelIndex = null;
    }
  }
  removeExercise(index) {
    this.workoutForm.removeExercise(index);
    if (this.expandedPanelIndex !== null) {
      if (this.expandedPanelIndex === index) {
        this.expandedPanelIndex = null;
      } else if (this.expandedPanelIndex > index) {
        this.expandedPanelIndex--;
      }
    }
  }
  loadExerciseTypes() {
    this.isLoading = true;
    this.exerciseTypesService.getExerciseTypes().pipe(finalize(() => this.isLoading = false)).subscribe({
      next: (exerciseTypes) => {
        this.exerciseTypes = exerciseTypes;
      }
    });
  }
  loadTodaysWorkouts() {
    this.isApiLoading.set(true);
    this.workoutsService.getTodaysWorkout().subscribe({
      next: (todaysWorkout) => {
        if (todaysWorkout) {
          const workoutToClone = __spreadProps(__spreadValues({}, todaysWorkout), {
            id: 0,
            // Clear ID so it creates a new workout
            dateCreated: (/* @__PURE__ */ new Date()).toISOString()
            // Set to current time
          });
          this.workoutForm = new WorkoutForm(workoutToClone);
          this.isEditMode = true;
          this.isApiLoading.set(false);
        } else {
          this.isEditMode = false;
          this.isApiLoading.set(false);
        }
      },
      error: (error) => {
        console.error("Failed to load today's workout:", error);
        this.isEditMode = !!this.workoutForm.value.id;
        this.isApiLoading.set(false);
      }
    });
  }
  loadWorkoutById(id) {
    this.isApiLoading.set(true);
    this.workoutsService.getWorkoutById(id).subscribe({
      next: (workout) => {
        this.workoutForm = new WorkoutForm(workout);
        this.isEditMode = true;
        this.isApiLoading.set(false);
      },
      error: (error) => {
        console.error("Failed to load workout:", error);
        this.isEditMode = false;
        this.isApiLoading.set(false);
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  discardWorkout() {
    this.router.navigate(["/dashboard"]);
  }
  canDeactivate() {
    return {
      canDeactivate: !this.workoutForm.dirty,
      modalData: {
        title: "Discard Workout?",
        message: "You have unsaved changes to your workout.",
        confirmText: "Discard",
        cancelText: "Cancel"
      }
    };
  }
  hasExerciseVariation(exerciseInstanceControl) {
    const exerciseTypeSimple = exerciseInstanceControl.controls.exerciseType.value;
    if (!exerciseTypeSimple?.id) {
      return false;
    }
    const fullExerciseType = this.exerciseTypes.find((et) => et.id === exerciseTypeSimple.id);
    return !!fullExerciseType?.variationOfExercise;
  }
  saveWorkout() {
    if (!this.workoutForm.valid) {
      return;
    }
    this.isApiLoading.set(true);
    const workoutData = this.workoutForm.getSubmitValue();
    const workoutId = workoutData.id;
    const saveOperation = workoutId ? this.workoutsService.updateWorkout(workoutId, workoutData) : this.workoutsService.createWorkout(workoutData);
    saveOperation.pipe(finalize(() => this.isApiLoading.set(false))).subscribe({
      next: (savedWorkout) => {
        this.workoutForm.markAsPristine();
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  static \u0275fac = function WorkoutCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkoutCreateComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ExerciseTypesService), \u0275\u0275directiveInject(WorkoutsService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkoutCreateComponent, selectors: [["app-workout-create"]], decls: 13, vars: 4, consts: [[1, "container", "relative", "mx-auto", "h-full", "max-w-4xl", "md:p-6"], [1, "absolute", "inset-0", "z-50", "h-screen", "w-screen"], [1, "mb-8", "hidden", "md:block"], [1, "mb-4", "flex", "items-center", "gap-4"], ["mat-icon-button", "", 3, "click"], [1, "text-3xl", "font-bold"], [1, "opacity-70"], [1, "grid", "h-full", "gap-6"], [1, "flex", "h-full", "flex-col", "p-3", "md:p-6"], [1, "flex", "h-full", "w-full", 3, "opacity"], [1, "flex-1"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-4"], ["mat-raised-button", "", "color", "primary", 1, "px-6", 3, "disabled"], [1, "flex", "w-full", "max-w-md", "items-center", "gap-2"], ["multi", "false"], [1, "mt-6", "flex", "justify-between", "pt-4"], ["mat-stroked-button", "", "color", "warn", 1, "px-6", 3, "click"], [1, "mr-2"], ["mat-stroked-button", "", "color", "accent", 1, "px-6", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 1, "px-6", 3, "click", "disabled"], ["bindLabel", "name", "placeholder", "Select an exercise type...", 1, "flex-1", 3, "change", "items", "loading", "isOpen"], ["ng-option-tmp", ""], [1, "flex"], [1, "font-medium"], [1, "text-sm", "opacity-70"], [3, "expanded"], [3, "expandedChange", "expanded"], [1, "ml-2", "opacity-70"], [3, "removeExercise", "exerciseForm"]], template: function WorkoutCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, WorkoutCreateComponent_Conditional_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function WorkoutCreateComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, WorkoutCreateComponent_Conditional_12_Template, 16, 5, "mat-card", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isApiLoading() ? 1 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Workout" : "Create New Workout");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Modify your existing workout routine" : "Design and create your custom workout routine", " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.workoutForm ? 12 : -1);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatCardModule,
    MatCard,
    MatExpansionModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatDialogModule,
    NgSelectModule,
    NgSelectComponent,
    NgOptionTemplateDirective,
    ExerciseInstanceFormComponent,
    LoaderComponent
  ], styles: ["\n\n[_nghost-%COMP%]     .mat-expansion-panel-spacing {\n  margin: 0 0;\n}\n[_nghost-%COMP%]     .mat-accordion .mat-expansion-panel:not(:first-of-type):not(:last-of-type) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[_nghost-%COMP%]     .mat-accordion .mat-expansion-panel:last-of-type {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n[_nghost-%COMP%]     .mat-accordion .mat-expansion-panel:first-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-body {\n  padding: 0 8px 10px;\n}\n/*# sourceMappingURL=workout-create.component-CVRDD3WZ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkoutCreateComponent, [{
    type: Component,
    args: [{ selector: "app-workout-create", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatExpansionModule,
      MatDialogModule,
      NgSelectModule,
      ExerciseInstanceFormComponent,
      LoaderComponent
    ], template: `<div class="container relative mx-auto h-full max-w-4xl md:p-6">
  <!-- Loader Overlay -->
  @if (isApiLoading()) {
    <div class="absolute inset-0 z-50 h-screen w-screen">
      <app-loader class="flex h-full w-full" [opacity]="80"></app-loader>
    </div>
  }

  <!-- Header -->
  <div class="mb-8 hidden md:block">
    <div class="mb-4 flex items-center gap-4">
      <button mat-icon-button (click)="goBack()">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <h1 class="text-3xl font-bold">{{ isEditMode ? 'Edit Workout' : 'Create New Workout' }}</h1>
    </div>
    <p class="opacity-70">
      {{
        isEditMode
          ? 'Modify your existing workout routine'
          : 'Design and create your custom workout routine'
      }}
    </p>
  </div>

  <!-- Main Content Area -->
  <div class="grid h-full gap-6">
    <!-- Workout Form -->
    @if (workoutForm) {
      <mat-card class="flex h-full flex-col p-3 md:p-6">
        <div class="flex-1">
          <!-- <h2 class="mb-4 text-xl font-semibold">Exercises</h2> -->

          <!-- Exercise List -->
          <div class="flex flex-col gap-2">
            <!-- Add Exercise Section -->
            <div class="flex items-center gap-4">
              <!-- Add Exercise Button -->
              @if (!showExerciseSelect) {
                <button
                  mat-raised-button
                  color="primary"
                  (click)="showAddExerciseDropdown()"
                  [disabled]="!areAllExercisesValid"
                  class="px-6"
                >
                  <mat-icon class="mr-2">add</mat-icon>
                  Add New Exercise
                </button>
              }

              <!-- Exercise Type Selector -->
              @if (showExerciseSelect) {
                <div class="flex w-full max-w-md items-center gap-2">
                  <ng-select
                    [items]="availableExerciseTypes"
                    bindLabel="name"
                    placeholder="Select an exercise type..."
                    (change)="onExerciseTypeSelected($event)"
                    [loading]="isLoading"
                    [isOpen]="true"
                    class="flex-1"
                  >
                    <ng-template ng-option-tmp let-item="item">
                      <div class="flex">
                        <span class="font-medium">{{ item.name }}&nbsp;</span>
                        <span class="text-sm opacity-70">
                          | {{ item.primaryMuscleTargeted.group }}
                          @if (item.requisiteUsed) {
                            | {{ item.requisiteUsed }}
                          }
                        </span>
                      </div>
                    </ng-template>
                  </ng-select>
                  <button mat-icon-button (click)="cancelExerciseSelection()">
                    <mat-icon>close</mat-icon>
                  </button>
                </div>
              }
            </div>

            <!-- Exercise expansion panels -->
            @if (workoutForm.exercisesArray.controls.length > 0) {
              <mat-accordion multi="false">
                @for (exercise of workoutForm.exercisesArray.controls; track $index) {
                  <mat-expansion-panel
                    [expanded]="expandedPanelIndex === $index"
                    (expandedChange)="onPanelExpandedChange($index, $event)"
                  >
                    <mat-expansion-panel-header>
                      <mat-panel-title>
                        {{ exercise.controls.exerciseType.value?.name || 'New Exercise' }}
                        @if (hasExerciseVariation(exercise)) {
                          <span class="ml-2 opacity-70">
                            ({{ exercise.controls.exerciseType.value?.requisiteUsed }})
                          </span>
                        }
                      </mat-panel-title>
                    </mat-expansion-panel-header>

                    <app-exercise-instance-form
                      [exerciseForm]="exercise"
                      (removeExercise)="removeExercise($index)"
                    />
                  </mat-expansion-panel>
                }
              </mat-accordion>
            }
          </div>
        </div>

        <!-- Action Buttons - Sticky to bottom -->
        <div class="mt-6 flex justify-between pt-4">
          <button mat-stroked-button color="warn" (click)="discardWorkout()" class="px-6">
            <mat-icon class="mr-2">delete_outline</mat-icon>
            Discard Workout
          </button>

          <button
            mat-stroked-button
            color="accent"
            [disabled]="!workoutForm.valid || isApiLoading()"
            (click)="saveWorkout()"
            class="px-6"
          >
            <mat-icon class="mr-2">save</mat-icon>
            {{ isEditMode ? 'Update Workout' : 'Save Workout' }}
          </button>
        </div>
      </mat-card>
    }
  </div>
</div>
`, styles: ["/* src/app/features/workout-administration/workout-create.component.scss */\n:host ::ng-deep .mat-expansion-panel-spacing {\n  margin: 0 0;\n}\n:host ::ng-deep .mat-accordion .mat-expansion-panel:not(:first-of-type):not(:last-of-type) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n:host ::ng-deep .mat-accordion .mat-expansion-panel:last-of-type {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n:host ::ng-deep .mat-accordion .mat-expansion-panel:first-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n:host ::ng-deep .mat-expansion-panel-body {\n  padding: 0 8px 10px;\n}\n/*# sourceMappingURL=workout-create.component-CVRDD3WZ.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: ExerciseTypesService }, { type: WorkoutsService }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkoutCreateComponent, { className: "WorkoutCreateComponent", filePath: "src/app/features/workout-administration/workout-create.component.ts", lineNumber: 44 });
})();

export {
  ExerciseSetForm,
  ExerciseSetFormComponent,
  SetInfoComponent,
  SetInfoContainerComponent,
  ExerciseInstanceFormComponent,
  ExerciseInstanceForm,
  WorkoutForm,
  WorkoutCreateComponent
};
//# sourceMappingURL=chunk-HZMTIIKR.js.map
