import { Injectable } from '@angular/core';
import { Student } from '../class/student';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {
  private URL_STUDENTS = 'https://62716f5ac455a64564b30a0d.mockapi.io/api/v1/';

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

  getStudents(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.URL_STUDENTS + 'students')
      .pipe(catchError(this.handleError));
  }
  getStudent(id: number): Observable<Student> {
    return this.http
      .get<Student>(this.URL_STUDENTS + 'students/' + id)
      .pipe(catchError(this.handleError));
  }
  saveStudent(student: Student) {
    console.log(student);
    return this.http
      .post<Student>(
        this.URL_STUDENTS + 'students/',
        student,
        this.getHttpOptions()
      )
      .pipe(catchError(this.handleError));
  }
  updateStudent(student: Student, id: number | undefined) {
    return this.http
      .put<Student>(this.URL_STUDENTS + id, student)
      .pipe(catchError(this.handleError));
  }
  deleteStudent(id: number | undefined) {
    return this.http
      .delete<Student>(this.URL_STUDENTS + 'students/' + id)
      .pipe(catchError(this.handleError));
  }
}
