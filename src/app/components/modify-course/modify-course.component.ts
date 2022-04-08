import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Courses } from 'src/app/class/courses';
import { DataCourses } from 'src/app/class/dataCourses';
import { ModifyCourseDialogComponent } from '../modify-course-dialog/modify-course-dialog.component';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css'],
})
export class ModifyCourseComponent implements OnInit {
  courseList: Courses[] = DataCourses.getCoursesList();
  createNewCourseForm!: FormGroup;

  constructor(public courseAddForm: FormBuilder, public dialog: MatDialog) {
    this.createNewCourseForm = this.courseAddForm.group({
      name: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      description: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(12),
      ]),
      isAvailable: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  openDialog(title: string, course: string, action: string): void {
    this.dialog.open(ModifyCourseDialogComponent, {
      data: {
        title: title,
        course: course,
        action: action,
      },
    });
  }

  deleteCourse(course: string) {
    if (this.canDeleteCourse(course)) {
      DataCourses.deleteCourse(course);
      this.courseList = DataCourses.getCoursesList();
      this.openDialog('Curso Eliminado Correctamente', course, 'delete');
    } else {
      this.openDialog('No es posible eliminar el curso', course, 'noDelete');
    }
  }
  changeAvailability(course: string): void {
    DataCourses.changeAvailability(course);
    this.courseList = DataCourses.getCoursesList();
    this.openDialog(
      'Se ha modificado la disponibilidad del curso',
      course,
      'availability'
    );
  }

  canDeleteCourse(course: string): boolean {
    return DataCourses.canDeleteCourse(course);
  }

  addNewCourse() {
    let newCourse: Courses = this.createNewCourse();
    DataCourses.addCourse(newCourse);
    this.courseList = DataCourses.getCoursesList();
  }

  createNewCourse(): Courses {
    return new Courses(
      this.createNewCourseForm.get('name')!.value,
      this.createNewCourseForm.get('description')!.value,
      this.createNewCourseForm.get('imageUrl')!.value,
      this.createNewCourseForm.get('isAvailable')!.value
    );
  }
}
