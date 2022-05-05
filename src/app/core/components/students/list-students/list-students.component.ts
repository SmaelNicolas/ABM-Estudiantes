import { Component, OnDestroy, OnInit } from '@angular/core';
import { Courses } from 'src/app/class/courses';
import { Student } from 'src/app/class/student';
import { CoursesApiService } from 'src/app/services/courses-api.service';
import { StudentApiService } from 'src/app/services/students-api.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  students!: Student[];
  courses!: Courses[];
  course!: Courses;
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
    private studentAPIService: StudentApiService,
    private courseAPIService: CoursesApiService
  ) {}

  ngOnInit(): void {
    this.studentSuscriber = this.studentAPIService
      .getStudents()
      .subscribe((data) => {
        this.students = data;
        this.dataSource = this.students;
        console.log(this.students);
      });
    this.courseSuscriber = this.courseAPIService
      .getCourses()
      .subscribe((data) => {
        this.courses = data;
      });
  }

  getImage(name: string): string {
    this.course = this.courses.find((curso) => curso.name === name)!;
    return this.course.imageUrl;
  }

  ngOnDestroy(): void {
    this.studentSuscriber.unsubscribe();
    this.courseSuscriber.unsubscribe();
  }
}
