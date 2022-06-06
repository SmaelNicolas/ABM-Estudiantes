import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutenticacionService } from 'src/app/services/admin.service';
import { CoursesApiService } from 'src/app/services/courses-api.service';
import {
  loadedCourses,
  loadingCourses,
} from 'src/app/state/actions/courses.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  show!: boolean;
  constructor(
    private adminService: AutenticacionService,
    private coursesAPIService: CoursesApiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.show = this.adminService.getUserIn().rol === 'admin';

    this.store.dispatch(loadingCourses());
    this.coursesAPIService.getCourses().subscribe((data) => {
      this.store.dispatch(loadedCourses({ courses: data }));
    });
  }
}
