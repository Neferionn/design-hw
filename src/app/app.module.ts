import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/header/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderInfoComponent } from './components/header/header-info/header-info.component';
import { ImgsComponent } from './components/imgs/imgs.component';
import { MainImgComponent } from './components/imgs/main-img/main-img.component';
import { ProfileImgComponent } from './components/imgs/profile-img/profile-img.component';
import { ProcessComponent } from './components/imgs/process/process.component';
import { QuizComponent } from './components/imgs/quiz/quiz.component';
import { QuestionComponent } from './components/imgs/question/question.component';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { WhiteContainComponent } from './components/white-contain/white-contain.component';
import { MainMessageComponent } from './components/white-contain/main-message/main-message.component';
import { CardsComponent } from './components/white-contain/cards/cards.component';
import { FooterComponent } from './components/white-contain/footer/footer.component';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { MobileComponent } from './components/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    HeaderInfoComponent,
    ImgsComponent,
    MainImgComponent,
    ProfileImgComponent,
    ProcessComponent,
    QuizComponent,
    QuestionComponent,
    WhiteContainComponent,
    MainMessageComponent,
    CardsComponent,
    FooterComponent,
    ParallaxDirective,
    MobileComponent,
  ],
  imports: [BrowserModule, ScrollSpyModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
