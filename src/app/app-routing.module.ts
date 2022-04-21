import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { LoginComponent } from './components/login/login.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'modificarCursos', component: ModifyCourseComponent },
  { path: 'modificarEstudiante', component: ModifyStudentComponent },
  { path: 'bajaEstudiante', component: DeleteStudentComponent },
  { path: 'cursos', component: ListCoursesComponent },
  { path: 'altaEstudiante', component: CreateStudentComponent },
  { path: 'estudiantes', component: ListStudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
