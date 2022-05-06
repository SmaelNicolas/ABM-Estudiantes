import { Injectable } from '@angular/core';
import { Student } from '../class/student';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No existe un Estudiante con ese EMAIL / ID',
      });
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
  getStudentEmail(email: string): Observable<Student> {
    return this.http
      .get<Student>(this.URL_STUDENTS + 'students?email=' + email)
      .pipe(catchError(this.handleError));
  }

  saveStudent(student: Student) {
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
      .put<Student>(this.URL_STUDENTS + 'students/' + id, student)
      .pipe(catchError(this.handleError));
  }

  deleteStudent(id: number) {
    return this.http
      .delete<Student>(this.URL_STUDENTS + 'students/' + id)
      .pipe(catchError(this.handleError));
  }
}
