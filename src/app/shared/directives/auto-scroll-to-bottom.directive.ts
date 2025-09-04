import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appAutoScrollToBottom]',
  standalone: true,
})
export class AutoScrollToBottomDirective implements AfterViewInit {
  @Input() scrollDelay: number = 100; // Configurable delay in milliseconds

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToBottom();
    }, this.scrollDelay);
  }

  private scrollToBottom() {
    const element = this.elementRef.nativeElement;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }
}
