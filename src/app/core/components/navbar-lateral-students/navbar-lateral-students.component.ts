import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral-students',
  templateUrl: './navbar-lateral-students.component.html',
  styleUrls: ['./navbar-lateral-students.component.css'],
})
export class NavbarLateralStudentsComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  start: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }

  firstRender() {
    this.start = false;
  }
}
