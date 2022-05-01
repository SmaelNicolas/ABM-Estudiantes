import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ModifyStudentComponent } from './modify-student/modify-student.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: 'alta', component: CreateStudentComponent },
      { path: 'baja', component: DeleteStudentComponent },
      { path: 'modificar', component: ModifyStudentComponent },
      { path: 'lista', component: ListStudentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
