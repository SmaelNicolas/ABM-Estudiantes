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
import { CoursesApiService } from 'src/app/services/courses-api.service';
import { StudentApiService } from 'src/app/services/students-api.service';
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

  student!: Student;

  courseSuscriber: any;

  constructor(
    public studentCheckForm: FormBuilder,
    public studentModifyForm: FormBuilder,
    public newCoursesModifyForm: FormBuilder,
    public dialog: MatDialog,
    private studentAPIService: StudentApiService,
    private courseAPIService: CoursesApiService
  ) {
    this.checkStudentForm = this.studentCheckForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
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
      dni: new FormControl('', [
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  ngOnInit(): void {
    this.courseSuscriber = this.courseAPIService
      .getCourses()
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

  getStudentFromAPI(): void {
    this.studentAPIService.getStudent(this.getIdFromForm()).subscribe(
      (student) => {
        this.student = student;
        this.modify = true;
        this.createNewFormCourses(this.student);
      },
      () => {
        this.validStudent = false;
        setTimeout(() => {
          this.validStudent = true;
        }, 2000);
      }
    );
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
    if (this.student !== undefined) {
      this.createStudentFromModifyForm();
      this.studentAPIService
        .updateStudent(this.student, this.student.id)
        .subscribe();
      this.openDialog(this.student);
      this.checkStudentForm.reset();
      this.modify = false;
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 2000);
    }
  }

  createStudentFromModifyForm(): void {
    this.student.name =
      this.modifyStudentForm.get('name')!.value !== undefined &&
      this.modifyStudentForm.get('name')!.value !== ''
        ? this.modifyStudentForm.get('name')!.value
        : this.student.name;
    this.student.lastName =
      this.modifyStudentForm.get('lastName')!.value !== undefined &&
      this.modifyStudentForm.get('lastName')!.value !== ''
        ? this.modifyStudentForm.get('lastName')!.value
        : this.student.lastName;
    this.student.dni =
      this.modifyStudentForm.get('dni')!.value !== undefined &&
      this.modifyStudentForm.get('dni')!.value !== ''
        ? this.modifyStudentForm.get('dni')!.value
        : this.student.dni;
    this.student.email =
      this.modifyStudentForm.get('email')!.value !== undefined &&
      this.modifyStudentForm.get('email')!.value !== ''
        ? this.modifyStudentForm.get('email')!.value
        : this.student.email;
    this.student.courses = this.createNewArrayCourses();
  }

  ngOnDestroy(): void {
    this.courseSuscriber.unsubscribe();
  }
}
