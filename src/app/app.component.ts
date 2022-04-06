import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProyectoFinal';

  showCreateStudent: boolean = false;
  showDeleteStudent: boolean = false;
  showModifyStudent: boolean = false;
  showListStudents: boolean = false;
  showListCourses: boolean = false;
  showLogin: boolean = false;

  constructor() {}

  showCreateStudentHandler() {
    this.showCreateStudent = true;
    this.showDeleteStudent = false;
    this.showModifyStudent = false;
    this.showListStudents = false;
    this.showListCourses = false;
    this.showLogin = false;
    console.log('LLAMA');
  }
  showDeleteStudentHandler() {
    this.showCreateStudent = false;
    this.showDeleteStudent = true;
    this.showModifyStudent = false;
    this.showListStudents = false;
    this.showListCourses = false;
    this.showLogin = false;
  }
  showModifyStudentHandler() {
    this.showCreateStudent = false;
    this.showDeleteStudent = false;
    this.showModifyStudent = true;
    this.showListStudents = false;
    this.showListCourses = false;
    this.showLogin = false;
  }
  showListStudentsHandler() {
    this.showCreateStudent = false;
    this.showDeleteStudent = false;
    this.showModifyStudent = false;
    this.showListStudents = true;
    this.showListCourses = false;
    this.showLogin = false;
  }
  showListCoursesHandler() {
    this.showCreateStudent = false;
    this.showDeleteStudent = false;
    this.showModifyStudent = false;
    this.showListStudents = false;
    this.showListCourses = true;
    this.showLogin = false;
  }
  showLoginHandler() {
    this.showCreateStudent = false;
    this.showDeleteStudent = false;
    this.showModifyStudent = false;
    this.showListStudents = false;
    this.showListCourses = false;
    this.showLogin = true;
  }
}
