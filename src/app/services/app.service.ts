import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loggedAsStudent: boolean = false;
  loggedAsAdmin: boolean = false;

  loggedAsStudent$!: Observable<boolean>;
  loggedAsAdmin$!: Observable<boolean>;
  logged$!: Observable<boolean>;

  constructor() {
    this.loggedAsStudent$ = new Observable((suscription) => {
      suscription.next(this.loggedAsStudent);
    });
    this.loggedAsAdmin$ = new Observable((suscription) => {
      suscription.next(this.loggedAsAdmin);
    });
    this.logged$ = new Observable((suscription) => {
      suscription.next(this.loggedAsStudent || this.loggedAsAdmin);
    });
  }

  getLoggedAsStudent(): Observable<boolean> {
    return this.loggedAsStudent$;
  }
  getLoggedAsAdmin(): Observable<boolean> {
    return this.loggedAsAdmin$;
  }
  logged(): Observable<boolean> {
    return this.logged$;
  }
  logInStudent(): void {
    this.loggedAsStudent = true;
  }

  logInAdmin(): void {
    this.loggedAsAdmin = true;
  }
  logOut(): void {
    this.loggedAsStudent = false;
    this.loggedAsAdmin = false;
  }
}
