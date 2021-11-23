import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @ViewChild('face') mouth!: ElementRef<any>;
  constructor(private elem: ElementRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.moveFace(e);
  }

  moveFace(event: any): void {
    let x =
      this.mouth.nativeElement.getBoundingClientRect().left +
      this.mouth.nativeElement.clientWidth / 2;
    let y =
      this.mouth.nativeElement.getBoundingClientRect().top +
      this.mouth.nativeElement.clientHeight / 2;
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let radian = Math.atan2(mouseX - x, mouseY - y);
    let degree = radian * (180 / Math.PI);
    this.mouth.nativeElement.style.transform = `rotate(${degree}deg)`;
  }
}
