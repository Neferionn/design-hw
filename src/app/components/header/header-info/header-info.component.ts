import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CircleOptions } from 'src/app/shared/models/circle';
import '../../../../../src/shadermoon.js';
@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements AfterViewInit {
  sticky: boolean = false;
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  elementPosition: any;
  selectedOption: CircleOptions | null | undefined = null;
  circleOptions: CircleOptions[] = [
    {
      id: 1,
      name: 'Development',
      img: '../../../../assets/header/circles/code.svg',
    },
    {
      id: 2,
      name: 'Analysis',
      img: '../../../../assets/header/circles/graph.svg',
    },
    {
      id: 3,
      name: 'Architecture',
      img: '../../../../assets/header/circles/building.svg',
    },
    {
      id: 4,
      name: 'Testing',
      img: '../../../../assets/header/circles/monitor-mobbile.svg',
    },
    {
      id: 5,
      name: 'Project management',
      img: '../../../../assets/header/circles/device-message.svg',
    },
  ];

  ngAfterViewInit(): void {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 450) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  getOption(id: number): void {
    this.selectedOption = this.circleOptions.find((option) => option.id === id);
  }
}
