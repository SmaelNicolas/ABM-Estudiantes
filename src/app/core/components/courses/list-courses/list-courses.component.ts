import { Component, OnDestroy, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/courses';
import { DataCourses } from 'src/app/class/dataCourses';
import { CoursesApiService } from 'src/app/services/courses-api.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit, OnDestroy {
  courses!: Courses[];
  coursesSuscriber: any;

  constructor(private cousesAPIService: CoursesApiService) {}

  ngOnInit(): void {
    this.coursesSuscriber = this.cousesAPIService
      .getCourses()
      .subscribe((data) => {
        this.courses = data;
      });
  }

  ngOnDestroy(): void {
    this.coursesSuscriber.unsubscribe();
  }
}
