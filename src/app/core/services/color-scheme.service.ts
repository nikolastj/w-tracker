import { Injectable, Renderer2, RendererFactory2, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService implements OnDestroy {
  private renderer: Renderer2;
  private darkModeMediaQuery: MediaQueryList;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Create media query to detect dark mode preference
    this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize color scheme based on browser preference
    this.initializeColorScheme();

    // Listen for changes in color scheme preference
    this.addColorSchemeListener();
  }

  private initializeColorScheme(): void {
    const prefersDark = this.darkModeMediaQuery.matches;
    this.applyColorScheme(prefersDark ? 'dark' : 'light');
  }

  private addColorSchemeListener(): void {
    // Use the modern addEventListener if available, otherwise fallback to addListener
    if (this.darkModeMediaQuery.addEventListener) {
      this.darkModeMediaQuery.addEventListener('change', this.handleColorSchemeChange.bind(this));
    } else {
      // Fallback for older browsers
      this.darkModeMediaQuery.addListener(this.handleColorSchemeChange.bind(this));
    }
  }

  private handleColorSchemeChange(event: MediaQueryListEvent): void {
    const prefersDark = event.matches;
    this.applyColorScheme(prefersDark ? 'dark' : 'light');
  }

  private applyColorScheme(scheme: 'light' | 'dark'): void {
    const bodyElement = document.body;

    if (bodyElement) {
      this.renderer.setStyle(bodyElement, 'color-scheme', scheme);
      console.log(`Color scheme applied: ${scheme}`);
    }
  }

  getCurrentColorScheme(): 'light' | 'dark' {
    return this.darkModeMediaQuery.matches ? 'dark' : 'light';
  }

  prefersDarkMode(): boolean {
    return this.darkModeMediaQuery.matches;
  }

  ngOnDestroy(): void {
    if (this.darkModeMediaQuery.removeEventListener) {
      this.darkModeMediaQuery.removeEventListener(
        'change',
        this.handleColorSchemeChange.bind(this),
      );
    } else {
      this.darkModeMediaQuery.removeListener(this.handleColorSchemeChange.bind(this));
    }
  }
}
