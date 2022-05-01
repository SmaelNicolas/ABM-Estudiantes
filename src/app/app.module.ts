import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLateralComponent } from './core/components/navbar-lateral/navbar-lateral.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { StudentsService } from './services/students.service';
import { CoursesService } from './services/courses.service';
import { AdminsService } from './services/admins.service';
import { AppService } from './services/app.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { StudentsModule } from './core/components/students/students.module';
import { CoursesModule } from './core/components/courses/courses.module';
import { MaterialModulesModule } from './core/material/material-modules.module';
@NgModule({
  declarations: [AppComponent, NavbarLateralComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    AppRoutingModule,
  ],
  providers: [StudentsService, CoursesService, AdminsService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
