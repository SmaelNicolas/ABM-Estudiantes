import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinal';

  showCreateStudent: boolean = false;
  showDeleteStudent: boolean = false;
  showModifyStudent: boolean = false;
  showListStudents: boolean = false;
  showListCourses: boolean = false;
  showLogin: boolean = false;

  constructor() {}

  ngOnInit() {
    this.showCreateStudent = false;
    this.showDeleteStudent = false;
    this.showModifyStudent = false;
    this.showListStudents = false;
    this.showListCourses = false;
    this.showLogin = false;
  }
}
