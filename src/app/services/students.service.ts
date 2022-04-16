import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Courses } from '../class/courses';
import { Student } from '../class/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  studentList: Student[] = [
    {
      id: 11111111,
      name: 'Nicolas',
      lastName: 'Smael',
      email: 'Smael@Nicolas.com',
      password: '11111111',
      courses: ['angular', 'javascript', 'react'],
    },
    {
      id: 11111112,
      name: 'Fernando',
      lastName: 'Olvera',
      email: 'Olvera@Fernando.com',
      password: '11111111',
      courses: ['angular', 'javascript'],
    },
    {
      id: 11111113,
      name: 'Abner',
      lastName: 'García',
      email: 'García@Abner.com',
      password: '11111111',
      courses: ['angular'],
    },
    {
      id: 11111114,
      name: 'Victoria',
      lastName: 'Cordero',
      email: 'Cordero@Victoria.com',
      password: '11111111',
      courses: ['react'],
    },
    {
      id: 11111115,
      name: 'Pablo',
      lastName: 'García',
      email: 'García@Pablo.com',
      password: '11111111',
      courses: [],
    },
  ];

  studentList$!: Observable<Student[]>;

  constructor() {
    this.studentList$ = new Observable((suscription) => {
      suscription.next(this.studentList);
    });
  }

  getStudentList(): Observable<Student[]> {
    return this.studentList$;
  }

  addStudent(student: Student): void {
    this.studentList.push(student);
  }

  deleteStudent(id: number): void {
    this.studentList = this.studentList.filter((student) => student.id !== id);
  }

  getStudent(id: number): Observable<Student> {
    return this.studentList$.pipe(
      map((studentList) => studentList.find((student) => student.id === id)!)
    );
  }

  alreadyStudent(id: number): Observable<boolean> {
    return of(this.studentList.some((student) => student.id === id));
  }

  replaceStudent(student: Student): void {
    const index = this.studentList.findIndex((s) => s.id === student.id);
    this.studentList[index] = student;
  }

  studentIsInCourse(student: Student, course: string): Observable<boolean> {
    return of(student.courses.includes(course));
  }
}
