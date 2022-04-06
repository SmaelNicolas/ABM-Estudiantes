import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinal';

  showCreateStudent: boolean = true;
  showDeleteStudent: boolean = false;
  showModifyStudent: boolean = false;
  showListStudents: boolean = false;
  showListCourses: boolean = false;
  showLogin: boolean = false;

  constructor() {}

  ngOnInit() {}
}
