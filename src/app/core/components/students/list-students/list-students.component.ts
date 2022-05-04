import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/class/student';
import { CoursesService } from 'src/app/services/courses.service';
import { StudentApiService } from 'src/app/services/students-api.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
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
    private coursesService: CoursesService,
    private studentAPIService: StudentApiService
  ) {}

  ngOnInit(): void {
    this.studentSuscriber = this.studentAPIService
      .getStudents()
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

  // ngOnDestroy(): void {
  //   this.studentSuscriber.unsubscribe();
  //   this.courseSuscriber.unsubscribe();
  // }
}
