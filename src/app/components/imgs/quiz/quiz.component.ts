import { AfterViewInit, Component } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements AfterViewInit {
  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit(): void {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      console.log('ScrollSpy::test: ', e);
    });
  }
}
