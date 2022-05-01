import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './material/material-modules.module';
import { LoginComponent } from './components/login/login.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsModule } from './components/students/students.module';
import { CoursesModule } from './components/courses/courses.module';

@NgModule({
  declarations: [LoginComponent, LoadingScreenComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsModule,
    CoursesModule,
  ],
  exports: [MaterialModulesModule, FormsModule, ReactiveFormsModule],
})
export class CoreModule {}
