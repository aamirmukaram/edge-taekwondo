import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appTimeoutRemoveClass]',
})
export class TimeoutRemoveClassDirective implements OnInit, OnDestroy {
  @Input() timeout = 0;
  @Input() removeClass = '';
  private el: HTMLElement;
  private removeClassTimeout;

  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  public ngOnInit() {
    this.removeClassTimeout = setTimeout(() => {
      clearTimeout(this.removeClassTimeout);
      this.el.classList.remove(this.removeClass);
    }, this.timeout);
  }

  public ngOnDestroy() {
    clearTimeout(this.removeClassTimeout);
  }
}
