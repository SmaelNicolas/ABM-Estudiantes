import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLateralComponent } from './core/components/navbar-lateral/navbar-lateral.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { StudentsService } from './services/students.service';
import { CoursesService } from './services/courses.service';
import { AppService } from './services/app.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModulesModule } from './core/material/material-modules.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [AppComponent, NavbarLateralComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    AppRoutingModule,
    SweetAlert2Module,
  ],
  providers: [StudentsService, CoursesService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
