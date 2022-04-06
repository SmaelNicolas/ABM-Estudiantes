import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/courses';
import { DataPeople } from 'src/app/class/data';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courses: Courses[] = DataPeople.getCoursesList();

  constructor() {}

  ngOnInit(): void {}
}
