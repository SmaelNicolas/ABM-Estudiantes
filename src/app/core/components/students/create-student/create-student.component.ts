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

import { StudentApiService } from 'src/app/services/students-api.service';
import { CoursesApiService } from 'src/app/services/courses-api.service';

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
  coursesAvailablesList$!: Courses[];

  constructor(
    public studentAddForm: FormBuilder,
    public dialog: MatDialog,
    private studentAPIService: StudentApiService,
    private courseAPIService: CoursesApiService
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
    this.suscriberStudent = this.studentAPIService
      .getStudents()
      .subscribe((data) => {
        this.studentList$ = data;
      });

    this.suscriberCourses = this.courseAPIService
      .getCourses()
      .subscribe((data) => {
        this.coursesList$ = data;
        this.coursesAvailablesList$ = data.filter(
          (course) => course.isAvailable === true
        );
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
    let studentToAdd: Student = this.createStudent();
    this.studentAPIService
      .saveStudent({
        id: undefined,
        courses: studentToAdd.courses,
        rol: studentToAdd.rol,
        name: studentToAdd.name,
        lastName: studentToAdd.lastName,
        email: studentToAdd.email,
        password: studentToAdd.password,
        dni: studentToAdd.id,
      })
      .subscribe();
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
    let courses: string = this.getValueFromForm('course').name;
    let dni: number = parseInt(this.getValueFromForm('id'));

    return new Student(dni, name, lastName, email, password, courses, dni);
  }

  getValueFromForm(value: string) {
    return this.createStudentForm.get(value)!.value;
  }
  ngOnDestroy(): void {
    this.suscriberStudent.unsubscribe();
    this.suscriberCourses.unsubscribe();
  }
}
