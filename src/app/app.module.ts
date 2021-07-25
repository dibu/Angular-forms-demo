import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { NestedDropdownComponent } from './components/nested-dropdown/nested-dropdown.component';
import { ChechboxAssignRoleComponent } from './components/chechbox-assign-role/chechbox-assign-role.component';
import { BindChartDropdownComponent } from './components/bind-chart-dropdown/bind-chart-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeNewComponent,
    UserTableComponent,
    NestedDropdownComponent,
    ChechboxAssignRoleComponent,
    BindChartDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
