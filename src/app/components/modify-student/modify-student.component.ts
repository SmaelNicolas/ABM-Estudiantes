import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Courses } from 'src/app/class/courses';
import { DataPeople } from 'src/app/class/data';
import { Student } from 'src/app/class/student';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css'],
})
export class ModifyStudentComponent implements OnInit {
  checkStudentForm!: FormGroup;
  modifyStudentForm!: FormGroup;
  newFormCourses!: FormGroup;
  validStudent: boolean = true;
  modify: boolean = false;
  courses: Courses[] = DataPeople.getCoursesList();

  constructor(
    public studentCheckForm: FormBuilder,
    public studentModifyForm: FormBuilder,
    public newCoursesModifyForm: FormBuilder
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
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  isInscribedInCourse(course: string, student: Student) {
    return student.courses.includes(course);
  }

  modifyStudent() {
    let id: number = parseInt(this.checkStudentForm.get('id')!.value);
    let student: Student | undefined = DataPeople.getStudent(id);
    // let newStudent: Student = new Student(
    if (student !== undefined) {
      DataPeople.modifyStudent(student);
      this.checkStudentForm.reset();
    } else {
      this.validStudent = false;
    }
  }

  canModify() {
    let id: number = parseInt(this.checkStudentForm.get('id')!.value);
    let student: Student | undefined = DataPeople.getStudent(id);
    if (student !== undefined) {
      this.modify = true;
      this.newFormCourses = this.newCoursesModifyForm.group({
        angular: this.isInscribedInCourse('angular', student),
        javascript: this.isInscribedInCourse('javascript', student),
        react: this.isInscribedInCourse('react', student),
        node: this.isInscribedInCourse('node', student),
        python: this.isInscribedInCourse('python', student),
      });
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 2000);
    }
  }

  createNewArrayCourses() {
    let newArrayCourses: string[] = [];
    for (let course in this.newFormCourses.value) {
      if (this.newFormCourses.value[course]) {
        newArrayCourses.push(course);
      }
    }
    return newArrayCourses;
  }

  updateStudent() {
    let id: number = parseInt(this.checkStudentForm.get('id')!.value);
    let student: Student | undefined = DataPeople.getStudent(id);
    if (student !== undefined) {
      student.name = this.modifyStudentForm.get('name')!.value;
      student.lastName = this.modifyStudentForm.get('lastName')!.value;
      student.email = this.modifyStudentForm.get('email')!.value;
      student.courses = this.createNewArrayCourses();
      DataPeople.modifyStudent(student);
      this.checkStudentForm.reset();
      this.modify = false;
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 2000);
    }
  }
}
