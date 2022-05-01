import { Component, OnDestroy, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/courses';
import { DataCourses } from 'src/app/class/dataCourses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit, OnDestroy {
  courses!: Courses[];
  coursesSuscriber: any;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesSuscriber = this.coursesService
      .getCoursesList()
      .subscribe((data) => {
        this.courses = data;
      });
  }

  ngOnDestroy(): void {
    this.coursesSuscriber.unsubscribe();
  }
}
