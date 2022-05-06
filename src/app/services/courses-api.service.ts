import { Injectable } from '@angular/core';
import { Courses } from '../class/courses';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../class/student';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Injectable({
  providedIn: 'root',
})
export class CoursesApiService {
  private URL_COURSES = 'https://62716f5ac455a64564b30a0d.mockapi.io/api/v1/';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal, pruebe denuevo.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en la base de datos',
      });
    }
    return throwError('Error de comunicación Http');
  }

  getCourses(): Observable<Courses[]> {
    return this.http
      .get<Courses[]>(this.URL_COURSES + 'courses')
      .pipe(catchError(this.handleError));
  }
  getCourse(id: number): Observable<Courses> {
    return this.http
      .get<Courses>(this.URL_COURSES + 'courses/' + id)
      .pipe(catchError(this.handleError));
  }
  saveCourse(course: Courses) {
    return this.http
      .post<Courses>(
        this.URL_COURSES + 'courses/',
        course,
        this.getHttpOptions()
      )
      .pipe(catchError(this.handleError));
  }
  updateCourse(course: Courses, id: number | undefined) {
    return this.http
      .put<Courses>(this.URL_COURSES + 'courses/' + id, course)
      .pipe(catchError(this.handleError));
  }
  deleteCourse(id: number | undefined) {
    return this.http
      .delete<Courses>(this.URL_COURSES + 'courses/' + id)
      .pipe(catchError(this.handleError));
  }

  canDeleteCourse(courseName: string, studentList: Student[]): boolean {
    let isInCourse: boolean = false;
    studentList.forEach((student) => {
      student.courses.includes(courseName) ? (isInCourse = true) : null;
    });
    return !isInCourse;
  }
}
