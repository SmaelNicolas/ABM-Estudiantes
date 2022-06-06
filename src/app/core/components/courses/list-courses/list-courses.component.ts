import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/app/models/course';
import { CoursesApiService } from 'src/app/services/courses-api.service';
import { AppState } from 'src/app/state/app.state';
import { coursesListSelector } from 'src/app/state/selectors/courses.selector';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courses$!: Observable<Course[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(coursesListSelector);
  }
}
