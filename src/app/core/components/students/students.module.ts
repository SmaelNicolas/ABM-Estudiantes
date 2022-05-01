import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ModifyStudentComponent } from './modify-student/modify-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { CreateStudentDialogComponent } from './create-student-dialog/create-student-dialog.component';
import { DeleteStudentDialogComponent } from './delete-student-dialog/delete-student-dialog.component';
import { MaterialModulesModule } from '../../material/material-modules.module';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [
    ListStudentsComponent,
    ModifyStudentComponent,
    CreateStudentComponent,
    DeleteStudentComponent,
    CreateStudentDialogComponent,
    DeleteStudentDialogComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
  ],
})
export class StudentsModule {}
