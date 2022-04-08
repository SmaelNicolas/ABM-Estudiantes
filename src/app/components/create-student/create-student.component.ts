import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Student } from 'src/app/class/student';
import { DataStudent } from 'src/app/class/dataStudents';
import { Courses } from 'src/app/class/courses';
import { CreateStudentDialogComponent } from '../create-student-dialog/create-student-dialog.component';
import { DataCourses } from 'src/app/class/dataCourses';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  createStudentForm!: FormGroup;
  coursesList: Courses[] = DataCourses.getCoursesListAvailable();

  constructor(public studentAddForm: FormBuilder, public dialog: MatDialog) {
    this.createStudentForm = this.studentAddForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        this.noDuplicateIdValidator,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern('[0-9]*'),
      ]),
      name: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
      course: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public noDuplicateIdValidator(control: FormControl) {
    let isDuplicate = DataStudent.alreadyStudent(parseInt(control.value));
    let isValid = !isDuplicate;
    return isValid ? null : { duplicate: true };
  }

  openDialog(s: Student) {
    this.dialog.open(CreateStudentDialogComponent, {
      data: {
        name: s.name,
        lastName: s.lastName,
        email: s.email,
        id: s.id,
        course: s.courses[0],
      },
    });
  }

  saveStudent() {
    let id: number = parseInt(this.createStudentForm.get('id')!.value);
    let name: string = this.createStudentForm.get('name')!.value;
    let lastName: string = this.createStudentForm.get('lastName')!.value;
    let email: string = this.createStudentForm.get('email')!.value;
    let password: string =
      this.createStudentForm.get('lastName')!.value +
      this.createStudentForm.get('course')!.value;
    let course: string = this.createStudentForm.get('course')!.value.name;
    let studentToAdd: Student = new Student(
      id,
      name,
      lastName,
      email,
      password,
      course
    );
    DataStudent.addStudent(studentToAdd);
    this.openDialog(studentToAdd);
    this.createStudentForm.reset();
  }
}
