import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css'],
})
export class NavbarLateralComponent implements OnInit {
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
