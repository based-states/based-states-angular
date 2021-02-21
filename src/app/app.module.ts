import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NationBrowserComponent } from './components/nation-browser/nation-browser.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NationInfoService } from './services/nation-info.service';
import { NationSummaryComponent } from './components/nation-summary/nation-summary.component';
import { PoliticalSummaryComponent } from './components/nation-summary/political-summary/political-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NationBrowserComponent,
    NavbarComponent,
    NationSummaryComponent,
    PoliticalSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NationInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
