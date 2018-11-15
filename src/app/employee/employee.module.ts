import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [HomeComponent, DetailsComponent]
})
export class EmployeeModule { }
