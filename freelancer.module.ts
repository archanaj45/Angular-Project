import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ExpertiseComponent } from './expertise/expertise.component';
import { ElevelComponent } from './elevel/elevel.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { LanguageComponent } from './language/language.component';
import { HrateComponent } from './hrate/hrate.component';
import { TitleComponent } from './title/title.component';
import { PhotoComponent } from './photo/photo.component';
import { LocationComponent } from './location/location.component';
import { PhoneComponent } from './phone/phone.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [ExpertiseComponent,
    ElevelComponent, EducationComponent, EmploymentComponent,
    LanguageComponent, HrateComponent, TitleComponent, PhotoComponent,
    LocationComponent, PhoneComponent, DashboardComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class FreelancerModule { }
