import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NationBrowserComponent } from './components/nation-browser/nation-browser.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'nations', component: NationBrowserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
