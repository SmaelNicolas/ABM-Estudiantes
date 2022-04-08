import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css'],
})
export class NavbarLateralComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  start: boolean = true;

  @Input() showCreateStudent: any;
  @Input() showDeleteStudent: any;
  @Input() showModifyStudent: any;
  @Input() showModifyCourses: any;
  @Input() showListStudents: any;
  @Input() showListCourses: any;
  @Input() showLogin: any;
  @Input() showLoading: any;

  @Output()
  showCreateStudentChange = new EventEmitter<any>();
  @Output()
  showDeleteStudentChange = new EventEmitter<any>();
  @Output()
  showModifyStudentChange = new EventEmitter<any>();
  @Output()
  showModifyCoursesChange = new EventEmitter<any>();
  @Output()
  showListStudentsChange = new EventEmitter<any>();
  @Output()
  showListCoursesChange = new EventEmitter<any>();
  @Output()
  showLoginChange = new EventEmitter<any>();
  @Output()
  showLoadingChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }

  showCreateStudentHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(true);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(false);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(false);
  }

  showDeleteStudentHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(true);
    this.showModifyStudentChange.emit(false);
    this.showModifyCoursesChange.emit(false);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(false);
  }
  showModifyStudentHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(true);
    this.showModifyCoursesChange.emit(false);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(false);
  }
  showModifyCoursesHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(false);
    this.showModifyCoursesChange.emit(true);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(false);
  }
  showListStudentsHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(false);
    this.showModifyCoursesChange.emit(false);
    this.showListStudentsChange.emit(true);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(false);
  }
  showListCoursesHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(false);
    this.showModifyCoursesChange.emit(false);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(true);
    this.showLoginChange.emit(false);
  }
  showLoginHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.showCreateStudentChange.emit(false);
    this.showDeleteStudentChange.emit(false);
    this.showModifyStudentChange.emit(false);
    this.showModifyCoursesChange.emit(false);
    this.showListStudentsChange.emit(false);
    this.showListCoursesChange.emit(false);
    this.showLoginChange.emit(true);
    this.start = false;
  }
}
