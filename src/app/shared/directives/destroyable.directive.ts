import { Directive, OnDestroy } from '@angular/core';
import { Subject, MonoTypeOperatorFunction, takeUntil } from 'rxjs';

@Directive({
  standalone: true,
})
export class DestroyableDirective implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  protected get takeUntilDestroyed(): MonoTypeOperatorFunction<any> {
    return takeUntil(this.destroy$);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
