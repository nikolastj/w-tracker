import { Injectable, Renderer2, RendererFactory2, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService implements OnDestroy {
  private renderer: Renderer2;
  private darkModeMediaQuery: MediaQueryList;
  private currentTheme$ = new BehaviorSubject<'light' | 'dark'>('light');
  private userPreference: 'light' | 'dark' | 'auto' = 'auto';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Create media query to detect dark mode preference
    this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Load user preference from localStorage
    this.loadUserPreference();

    // Initialize color scheme based on user preference or browser preference
    this.initializeColorScheme();

    // Listen for changes in color scheme preference only if user hasn't set a manual preference
    if (this.userPreference === 'auto') {
      this.addColorSchemeListener();
    }
  }

  private loadUserPreference(): void {
    const saved = localStorage.getItem('color-scheme-preference');
    if (saved && ['light', 'dark', 'auto'].includes(saved)) {
      this.userPreference = saved as 'light' | 'dark' | 'auto';
    }
  }

  private saveUserPreference(preference: 'light' | 'dark' | 'auto'): void {
    localStorage.setItem('color-scheme-preference', preference);
    this.userPreference = preference;
  }

  private initializeColorScheme(): void {
    let themeToApply: 'light' | 'dark';

    if (this.userPreference === 'auto') {
      themeToApply = this.darkModeMediaQuery.matches ? 'dark' : 'light';
    } else {
      themeToApply = this.userPreference;
    }

    this.applyColorScheme(themeToApply);
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
      this.currentTheme$.next(scheme);
      console.log(`Color scheme applied: ${scheme}`);
    }
  }

  getCurrentColorScheme(): 'light' | 'dark' {
    return this.currentTheme$.value;
  }

  getCurrentTheme$(): Observable<'light' | 'dark'> {
    return this.currentTheme$.asObservable();
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentColorScheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.saveUserPreference(theme);

    // Remove existing listener if switching from auto
    if (this.userPreference === 'auto') {
      this.removeColorSchemeListener();
    }

    let themeToApply: 'light' | 'dark';

    if (theme === 'auto') {
      themeToApply = this.darkModeMediaQuery.matches ? 'dark' : 'light';
      this.addColorSchemeListener();
    } else {
      themeToApply = theme;
    }

    this.applyColorScheme(themeToApply);
  }

  prefersDarkMode(): boolean {
    return this.darkModeMediaQuery.matches;
  }

  getUserPreference(): 'light' | 'dark' | 'auto' {
    return this.userPreference;
  }

  private removeColorSchemeListener(): void {
    if (this.darkModeMediaQuery.removeEventListener) {
      this.darkModeMediaQuery.removeEventListener(
        'change',
        this.handleColorSchemeChange.bind(this),
      );
    } else {
      this.darkModeMediaQuery.removeListener(this.handleColorSchemeChange.bind(this));
    }
  }

  ngOnDestroy(): void {
    this.removeColorSchemeListener();
  }
}
