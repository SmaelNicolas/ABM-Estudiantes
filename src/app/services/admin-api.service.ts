import { Injectable } from '@angular/core';
import { Admin } from '../class/admin';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  private URL_ADMINS = 'https://62716f5ac455a64564b30a0d.mockapi.io/';

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

  getAdmins(): Observable<Admin[]> {
    return this.http
      .get<Admin[]>(this.URL_ADMINS + 'admin')
      .pipe(catchError(this.handleError));
  }
  getAdmin(id: number): Observable<Admin> {
    return this.http
      .get<Admin>(this.URL_ADMINS + 'admin/' + id)
      .pipe(catchError(this.handleError));
  }
  saveAdmin(admin: Admin) {
    return this.http
      .post<Admin>(this.URL_ADMINS + 'admin/', admin, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }
  updateAdmin(admin: Admin, id: number) {
    return this.http
      .put<Admin>(this.URL_ADMINS + id, admin)
      .pipe(catchError(this.handleError));
  }
  deleteAdmin(id: number) {
    return this.http
      .delete<Admin>(this.URL_ADMINS + 'admin/' + id)
      .pipe(catchError(this.handleError));
  }
}
