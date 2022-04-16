import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Student } from 'src/app/class/student';
import { Courses } from 'src/app/class/courses';
import { CreateStudentDialogComponent } from '../create-student-dialog/create-student-dialog.component';

import { StudentsService } from 'src/app/services/students.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit, OnDestroy {
  createStudentForm!: FormGroup;
  suscriberStudent: any;
  suscriberCourses: any;
  studentList$!: Student[];
  coursesList$!: Courses[];

  constructor(
    public studentAddForm: FormBuilder,
    public dialog: MatDialog,
    private studentService: StudentsService,
    private courseService: CoursesService
  ) {
    this.createStudentForm = this.studentAddForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        // this.noDuplicateIdValidator,
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

  ngOnInit(): void {
    this.suscriberStudent = this.studentService
      .getStudentList()
      .subscribe((data) => {
        this.studentList$ = data;
        console.log(this.studentList$);
      });

    this.suscriberCourses = this.courseService
      .getCoursesList()
      .subscribe((data) => {
        this.coursesList$ = data;
        console.log(this.coursesList$);
      });
  }
  noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  // TODO PREGUNTAR POR QUE NO FUNCIONA EL VALIDATOR
  // noDuplicateIdValidator(control: FormControl) {
  //   let isDuplicate = this.studentService.alreadyStudent(
  //     parseInt(control.value)
  //   );
  //   let isValid = !isDuplicate;
  //   return isValid ? null : { duplicate: true };
  // }

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

  saveStudent(): void {
    let studentToAdd = this.createStudent();
    this.studentService.addStudent(studentToAdd);
    this.openDialog(studentToAdd);
    this.createStudentForm.reset();
  }

  createStudent(): Student {
    let id: number = parseInt(this.getValueFromForm('id'));
    let name: string = this.getValueFromForm('name');
    let lastName: string = this.getValueFromForm('lastName');
    let email: string = this.getValueFromForm('email');
    let password: string =
      this.getValueFromForm('lastName') + this.getValueFromForm('id');
    let course: string = this.getValueFromForm('course').name;
    return new Student(id, name, lastName, email, password, course);
  }

  getValueFromForm(value: string) {
    return this.createStudentForm.get(value)!.value;
  }
  ngOnDestroy(): void {
    this.suscriberStudent.unsubscribe();
    this.suscriberCourses.unsubscribe();
  }
}
