import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStudent } from 'src/app/class/dataStudents';
import { DataCourses } from 'src/app/class/dataCourses';
import { Student } from 'src/app/class/student';
import { StudentsService } from 'src/app/services/students.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit, OnDestroy {
  students!: Student[];
  studentSuscriber: any;
  courseSuscriber: any;

  displayedColumns: string[] = [
    'position',
    'lastName',
    'name',
    'email',
    'id',
    'courses',
  ];
  dataSource!: Student[];

  constructor(
    private studentService: StudentsService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.studentSuscriber = this.studentService
      .getStudentList()
      .subscribe((data) => {
        this.students = data;
        this.dataSource = this.students;
      });
  }

  getImage(name: string): string {
    let dataReturn!: string;
    this.courseSuscriber = this.coursesService
      .getCourse(name)
      .subscribe((data) => {
        dataReturn = data.imageUrl;
      });
    return dataReturn;
  }

  ngOnDestroy(): void {
    this.studentSuscriber.unsubscribe();
    this.courseSuscriber.unsubscribe();
  }
}
