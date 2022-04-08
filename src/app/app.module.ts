import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './material/material-modules.module';
import { NavbarLateralComponent } from './components/navbar-lateral/navbar-lateral.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteStudentDialogComponent } from './components/delete-student-dialog/delete-student-dialog.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { ModifyStudentDialogComponent } from './components/modify-student-dialog/modify-student-dialog.component';
import { CreateStudentDialogComponent } from './components/create-student-dialog/create-student-dialog.component';
import { TitleFontSizeDirective } from './directives/title-font-size.directive';
import { NameStudentDirective } from './directives/name-student.directive';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { ModifyCourseDialogComponent } from './components/modify-course-dialog/modify-course-dialog.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLateralComponent,
    ToolbarComponent,
    CreateStudentComponent,
    DeleteStudentComponent,
    ListStudentsComponent,
    ListCoursesComponent,
    LoginComponent,
    DeleteStudentDialogComponent,
    ModifyStudentComponent,
    ModifyStudentDialogComponent,
    CreateStudentDialogComponent,
    TitleFontSizeDirective,
    NameStudentDirective,
    ModifyCourseComponent,
    ModifyCourseDialogComponent,
    LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
