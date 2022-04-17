import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Courses } from 'src/app/class/courses';
import { Student } from 'src/app/class/student';
import { CoursesService } from 'src/app/services/courses.service';
import { StudentsService } from 'src/app/services/students.service';
import { ModifyStudentDialogComponent } from '../modify-student-dialog/modify-student-dialog.component';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css'],
})
export class ModifyStudentComponent implements OnInit, OnDestroy {
  checkStudentForm!: FormGroup;
  modifyStudentForm!: FormGroup;
  newFormCourses!: FormGroup;
  validStudent: boolean = true;
  modify: boolean = false;
  courses!: Courses[];

  courseSuscriber: any;

  constructor(
    public studentCheckForm: FormBuilder,
    public studentModifyForm: FormBuilder,
    public newCoursesModifyForm: FormBuilder,
    public dialog: MatDialog,
    private studentService: StudentsService,
    private coursesService: CoursesService
  ) {
    this.checkStudentForm = this.studentCheckForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern('[0-9]*'),
      ]),
    });

    this.modifyStudentForm = this.studentModifyForm.group({
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      lastName: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  ngOnInit(): void {
    this.courseSuscriber = this.coursesService
      .getCoursesList()
      .subscribe((courses) => {
        this.courses = courses;
      });
  }

  openDialog(s: Student) {
    this.dialog.open(ModifyStudentDialogComponent, {
      data: {
        name: s.name,
        lastName: s.lastName,
        email: s.email,
        id: s.id,
        course: s.courses,
      },
    });
  }

  createNewFormCourses(student: Student): void {
    this.newFormCourses = this.newCoursesModifyForm.group({
      angular: this.isInscribedInCourse('angular', student),
      javascript: this.isInscribedInCourse('javascript', student),
      react: this.isInscribedInCourse('react', student),
      node: this.isInscribedInCourse('node', student),
      python: this.isInscribedInCourse('python', student),
    });
  }

  isInscribedInCourse(course: string, student: Student): boolean {
    return student.courses.includes(course);
  }

  getIdFromForm(): number {
    return parseInt(this.checkStudentForm.get('id')!.value);
  }

  getStudentFromForm(): Student {
    let stud!: Student;
    this.studentService
      .getStudent(this.getIdFromForm())
      .subscribe((student) => {
        stud = student;
      });
    return stud;
  }

  canModify(): void {
    let student: Student = this.getStudentFromForm();

    if (student !== undefined) {
      this.modify = true;
      this.createNewFormCourses(student);
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 2000);
    }
  }

  createNewArrayCourses(): string[] {
    let newArrayCourses: string[] = [];
    for (let course in this.newFormCourses.value) {
      if (this.newFormCourses.value[course]) {
        newArrayCourses.push(course);
      }
    }
    return newArrayCourses;
  }

  updateStudent(): void {
    let student: Student = this.getStudentFromForm();
    if (student !== undefined) {
      this.createStudentFromModifyForm(student);
      this.studentService.replaceStudent(student);
      this.openDialog(student);
      this.checkStudentForm.reset();
      this.modify = false;
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 2000);
    }
  }

  createStudentFromModifyForm(student: Student): void {
    student.name =
      this.modifyStudentForm.get('name')!.value !== undefined &&
      this.modifyStudentForm.get('name')!.value !== ''
        ? this.modifyStudentForm.get('name')!.value
        : student.name;
    student.lastName =
      this.modifyStudentForm.get('lastName')!.value !== undefined &&
      this.modifyStudentForm.get('lastName')!.value !== ''
        ? this.modifyStudentForm.get('lastName')!.value
        : student.lastName;
    student.email =
      this.modifyStudentForm.get('email')!.value !== undefined &&
      this.modifyStudentForm.get('email')!.value !== ''
        ? this.modifyStudentForm.get('email')!.value
        : student.email;
    student.courses = this.createNewArrayCourses();
  }

  ngOnDestroy(): void {
    this.courseSuscriber.unsubscribe();
  }
}
