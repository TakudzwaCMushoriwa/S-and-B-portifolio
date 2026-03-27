import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() animationDelay = 0;
  @HostBinding('class.fade-in-on-scroll') readonly fadeClass = true;
  @HostBinding('class.is-visible') isVisible = false;
  @HostBinding('style.transition-delay') get delay(): string {
    return `${this.animationDelay}ms`;
  }

  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
