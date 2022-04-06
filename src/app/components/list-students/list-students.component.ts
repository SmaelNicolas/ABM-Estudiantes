import { Component, OnInit } from '@angular/core';
import { DataPeople } from 'src/app/class/data';
import { Student } from 'src/app/class/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  STUDENT_DATA: Student[] = DataPeople.getStudentList();

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
}
