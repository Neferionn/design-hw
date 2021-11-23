import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('ratio') ratio: number = 1;
  initialTop: number = 0;

  constructor(private elRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.elRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.ratio + 'px';
  }
}
