import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnderFooterComponent } from './components/under-footer/under-footer.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UnderFooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
