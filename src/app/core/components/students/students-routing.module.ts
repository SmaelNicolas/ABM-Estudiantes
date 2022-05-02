import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ModifyStudentComponent } from './modify-student/modify-student.component';
import { StudentsComponent } from './students.component';
import { AdminGuard } from 'src/app/auth/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: 'alta',
        canActivate: [AdminGuard],
        component: CreateStudentComponent,
      },
      {
        path: 'baja',
        canActivate: [AdminGuard],
        component: DeleteStudentComponent,
      },
      {
        path: 'modificar',
        canActivate: [AdminGuard],
        component: ModifyStudentComponent,
      },
      { path: 'lista', component: ListStudentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
