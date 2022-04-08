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
  showModifyCourses: boolean = false;
  showListStudents: boolean = false;
  showListCourses: boolean = false;
  showLogin: boolean = false;
  showLoading: boolean = true;

  constructor() {}
  ngOnInit() {}
}
