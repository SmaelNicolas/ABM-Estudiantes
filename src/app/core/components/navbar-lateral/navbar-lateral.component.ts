import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css'],
})
export class NavbarLateralComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  start: boolean = true;
  show!: boolean;

  constructor(private adminService: AutenticacionService) {}

  ngOnInit(): void {
    this.show = this.adminService.getUserIn().rol === 'admin';
  }

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
