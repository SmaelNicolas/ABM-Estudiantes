import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModulesModule } from './material/material-modules.module';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteStudentDialogComponent } from './components/delete-student-dialog/delete-student-dialog.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { ModifyStudentDialogComponent } from './components/modify-student-dialog/modify-student-dialog.component';
import { CreateStudentDialogComponent } from './components/create-student-dialog/create-student-dialog.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { ModifyCourseDialogComponent } from './components/modify-course-dialog/modify-course-dialog.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateStudentComponent,
    DeleteStudentComponent,
    ListStudentsComponent,
    ListCoursesComponent,
    LoginComponent,
    DeleteStudentDialogComponent,
    ModifyStudentComponent,
    ModifyStudentDialogComponent,
    CreateStudentDialogComponent,
    ModifyCourseComponent,
    ModifyCourseDialogComponent,
    LoadingScreenComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppRoutingModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
