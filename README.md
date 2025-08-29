# WTracker

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## 🎨 Styling Framework

This project combines the best of both worlds with **Angular Material** and **Tailwind CSS**:

### 🔴 Angular Material (Angular-First Theme)

- **Material Design 3** components with Angular's signature red/blue color palette
- **Complete component library** (buttons, cards, toolbars, icons, etc.)
- **Built-in animations** and responsive design
- **Accessibility features** built-in

### 🎯 Tailwind CSS v3.4

- **Utility-first CSS** for custom layouts and spacing
- **Prettier plugin** for automatic class sorting
- **VS Code intellisense** support for autocompletion
- **Typography plugin** for beautiful prose styling
- **Configured to work seamlessly** with Angular Material

### Using Both Together

**Angular Material Components:**

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Material Card</mat-card-title>
  </mat-card-header>
  <mat-card-content>Content here</mat-card-content>
</mat-card>
```

**Tailwind Utilities:**

```html
<div class="rounded-lg bg-blue-500 p-4 text-white">Custom styling</div>
```

**Combined Approach:**

```html
<mat-card class="mb-6 transform transition hover:scale-105">
  <mat-card-content class="text-center"> Best of both worlds! </mat-card-content>
</mat-card>
```

The project uses Tailwind with `preflight: false` to avoid conflicts with Material's base styles.

### 📦 Available Material Components

The following Material modules are ready to use:

- `MatButtonModule` - Buttons (raised, stroked, fab, icon)
- `MatCardModule` - Cards with headers, content, actions
- `MatIconModule` - Material icons from Google Fonts
- `MatToolbarModule` - Navigation toolbars

To add more components, import the needed modules in your component:

```typescript
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// Add to component imports array
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
