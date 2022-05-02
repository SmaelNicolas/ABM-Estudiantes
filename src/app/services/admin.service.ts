import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private userIn = {
    email: '',
    pw: '',
    rol: 'student',
  };
  private sesionActive = true;

  constructor() {}

  getUserIn() {
    return this.userIn;
  }

  updateUserIn(email: string, pw: string, rol: string) {
    this.userIn.email = email;
    this.userIn.pw = pw;
    this.userIn.rol = rol;
  }

  isSesionActive() {
    return this.sesionActive;
  }
}
