import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  pageSizeMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 500) {
      this.pageSizeMobile = true;
    } else {
      this.pageSizeMobile = false;
    }
    //console.log('mobile', this.pageSizeMobile);
  }
}
