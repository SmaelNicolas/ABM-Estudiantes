import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';
import { AdminGuard } from 'src/app/auth/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: 'lista', component: ListCoursesComponent },
      {
        path: 'modificar',
        canActivate: [AdminGuard],
        component: ModifyCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}