import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/courses';
import { DataCourses } from 'src/app/class/dataCourses';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courses: Courses[] = DataCourses.getCoursesList();

  constructor() {}

  ngOnInit(): void {}
}
