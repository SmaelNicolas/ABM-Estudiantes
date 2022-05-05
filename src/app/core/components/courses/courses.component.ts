import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  show!: boolean;
  constructor(private adminService: AutenticacionService) {}

  ngOnInit(): void {
    this.show = this.adminService.getUserIn().rol === 'admin';
  }
}
