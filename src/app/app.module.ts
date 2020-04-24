import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// for data binding (sending value from html to ts, from ts to html)
import {FormsModule} from '@angular/forms';

// Angular API - how to communicate from client to server (from angular to backend i.e. php, java, python, nodejs)
import {HttpClientModule} from '@angular/common/http';

// for form validation
import {ReactiveFormsModule} from '@angular/forms';

import {FreelancerModule} from './freelancer/freelancer.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './freelancer/dashboard/dashboard.component';
import { ExpertiseComponent } from './freelancer/expertise/expertise.component';
import { ElevelComponent } from './freelancer/elevel/elevel.component';
import { EducationComponent } from './freelancer/education/education.component';
import { EmploymentComponent } from './freelancer/employment/employment.component';
import { LanguageComponent } from './freelancer/language/language.component';
import { HrateComponent } from './freelancer/hrate/hrate.component';
import { TitleComponent } from './freelancer/title/title.component';
import { PhotoComponent } from './freelancer/photo/photo.component';
import { LocationComponent } from './freelancer/location/location.component';
import { PhoneComponent } from './freelancer/phone/phone.component';

const pagearray: Routes = [
                            {path: 'dashboard', component: DashboardComponent, children: [
                              {path: 'expertise', component: ExpertiseComponent},
                              {path: 'elevel', component: ElevelComponent},
                              {path: 'education', component: EducationComponent},
                              {path: 'employment', component: EmploymentComponent},
                              {path: 'language', component: LanguageComponent},
                              {path: 'hrate', component: HrateComponent},
                              {path: 'title', component: TitleComponent},
                              {path: 'photo', component: PhotoComponent},
                              {path: 'location', component: LocationComponent},
                              {path: 'phone', component: PhoneComponent}
                            ]},
                            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
                          ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pagearray, {useHash: true}),
    FormsModule, HttpClientModule, ReactiveFormsModule, FreelancerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
