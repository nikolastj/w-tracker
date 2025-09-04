import { Directive, ElementRef, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollToTopDetector]',
  standalone: true,
})
export class ScrollToTopDetectorDirective implements OnInit {
  @Output() scrolledToTop = new EventEmitter<void>();

  private isInitialized = false;
  private initDelay = 500; // Delay to avoid triggering during auto-scroll initialization

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Set a delay before we start detecting scroll-to-top events
    // This prevents triggering during initialization when auto-scroll-to-bottom runs
    setTimeout(() => {
      this.isInitialized = true;
    }, this.initDelay);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    if (!this.isInitialized) {
      return; // Don't trigger during initialization
    }

    const element = event.target as HTMLElement;
    if (element && element.scrollTop === 0) {
      this.scrolledToTop.emit();
    }
  }
}
