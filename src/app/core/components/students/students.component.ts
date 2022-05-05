import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  show!: boolean;

  constructor(private adminService: AutenticacionService) {}

  ngOnInit(): void {
    this.show = this.adminService.getUserIn().rol === 'admin';
  }
}
