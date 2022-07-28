import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './login/login.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { SelectComponent } from './select/select.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'select', component: SelectComponent },
  { path: 'update/:id', component: UsersEditComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'users-detail/:id', component: UsersDetailComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
