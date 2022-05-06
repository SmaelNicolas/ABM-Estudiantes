import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin } from '../class/admin';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  private URL_ADMIN = 'https://62716f5ac455a64564b30a0d.mockapi.io/api/v1/';

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
        text: 'No existe un ADMINISTRADOR con ese EMAIL',
      });
    }
    return throwError('Error de comunicación Http');
  }

  getAdmins(): Observable<Admin[]> {
    return this.http
      .get<Admin[]>(this.URL_ADMIN + 'admin')
      .pipe(catchError(this.handleError));
  }
  getAdmin(id: number): Observable<Admin> {
    return this.http
      .get<Admin>(this.URL_ADMIN + 'admin/' + id)
      .pipe(catchError(this.handleError));
  }
  getAdminEmail(email: string): Observable<Admin> {
    return this.http
      .get<Admin>(this.URL_ADMIN + 'admin?email=' + email)
      .pipe(catchError(this.handleError));
  }

  saveStudent(admin: Admin) {
    return this.http
      .post<Admin>(this.URL_ADMIN + 'admin/', admin, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }
  updateStudent(admin: Admin, id: number | undefined) {
    return this.http
      .put<Admin>(this.URL_ADMIN + 'admin/' + id, admin)
      .pipe(catchError(this.handleError));
  }

  deleteStudent(id: number) {
    return this.http
      .delete<Admin>(this.URL_ADMIN + 'admin/' + id)
      .pipe(catchError(this.handleError));
  }
}
