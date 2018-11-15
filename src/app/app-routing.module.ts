import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';




const routes: Routes = [
  {path:'',loadChildren:'./employee/employee.module#EmployeeModule',data:{preload:true},
canLoad:[DashboardModule]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
