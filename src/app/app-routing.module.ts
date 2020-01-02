import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'employee/:empid',
    component:EmployeeComponent
  }, {
    path:'employees',
    component:EmployeeListComponent
  }, {
    path:'',
    redirectTo:'employees',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
