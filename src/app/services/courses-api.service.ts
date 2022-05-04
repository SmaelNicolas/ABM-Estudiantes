import { Injectable } from '@angular/core';
import { Courses } from '../class/courses';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
      alert('Error de Frontend:' + error.error.message);
    } else {
      alert(
        `Error de Backend: ${error.status}, cuerpo del error: ${error.message}`
      );
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
  updateCourse(course: Courses, id: number) {
    return this.http
      .put<Courses>(this.URL_COURSES + id, course)
      .pipe(catchError(this.handleError));
  }
  deleteCourse(id: number) {
    return this.http
      .delete<Courses>(this.URL_COURSES + 'courses/' + id)
      .pipe(catchError(this.handleError));
  }
}
