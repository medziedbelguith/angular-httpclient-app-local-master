import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './login/login.component';
import { OrderByPipe } from './order-by.pipe';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    UsersListComponent,
    UsersEditComponent,
    UsersDetailComponent,
    LoginComponent,
    OrderByPipe,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
