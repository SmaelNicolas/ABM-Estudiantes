import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from '../core/components/list-courses/list-courses.component';
import { ListStudentsComponent } from '../core/components/list-students/list-students.component';
import { LoginComponent } from '../core/components/login/login.component';
import { ModifyCourseComponent } from '../core/components/modify-course/modify-course.component';
import { ModifyStudentComponent } from '../core/components/modify-student/modify-student.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cursos/modificarCursos', component: ModifyCourseComponent },
  {
    path: 'estudiantes/modificarEstudiante',
    component: ModifyStudentComponent,
  },
  { path: 'estudiantes/bajaEstudiante', component: DeleteStudentComponent },
  { path: 'cursos', component: ListCoursesComponent },
  { path: 'estudiantes/altaEstudiante', component: CreateStudentComponent },
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
