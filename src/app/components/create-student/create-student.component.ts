import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/class/student';
import { DataPeople } from 'src/app/class/data';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  createStudentForm!: FormGroup;
  coursesList: string[] = ['Angular', 'Javascript', 'ReactJs'];

  constructor(public studentAddForm: FormBuilder) {
    this.createStudentForm = this.studentAddForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(3),
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
      course: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  saveStudent() {
    let id: number = this.createStudentForm.get('id')!.value;
    let name: string = this.createStudentForm.get('name')!.value;
    let lastName: string = this.createStudentForm.get('lastName')!.value;
    let email: string = this.createStudentForm.get('email')!.value;
    let password: string =
      this.createStudentForm.get('lastName')!.value +
      this.createStudentForm.get('course')!.value;
    let course: string = this.createStudentForm.get('course')!.value;
    let studentToAdd: Student = new Student(
      id,
      name,
      lastName,
      email,
      password,
      course
    );
    console.log(DataPeople.studentList);
    DataPeople.addStudent(studentToAdd);
    this.createStudentForm.reset();
    console.log(DataPeople.studentList);
  }
}
