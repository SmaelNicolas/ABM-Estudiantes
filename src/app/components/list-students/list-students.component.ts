import { Component, OnInit } from '@angular/core';
import { DataStudent } from 'src/app/class/dataStudents';
import { DataCourses } from 'src/app/class/dataCourses';
import { Student } from 'src/app/class/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  STUDENT_DATA: Student[] = DataStudent.getStudentList();

  displayedColumns: string[] = [
    'position',
    'lastName',
    'name',
    'email',
    'id',
    'courses',
  ];
  dataSource = this.STUDENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  getImage(name: string): string {
    return DataCourses.getCourse(name).imageUrl;
  }
}
