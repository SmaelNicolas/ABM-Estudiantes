import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModulesModule } from '../../material/material-modules.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';
import { ModifyCourseDialogComponent } from './modify-course-dialog/modify-course-dialog.component';

@NgModule({
  declarations: [
    CoursesComponent,
    ListCoursesComponent,
    ModifyCourseComponent,
    ModifyCourseDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    CoursesRoutingModule,
  ],
})
export class CoursesModule {}
