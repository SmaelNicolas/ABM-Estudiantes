import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private userIn = {
    email: '',
    pw: '',
    rol: '',
  };
  private sesionActive = true;

  constructor() {}

  getUserIn() {
    return this.userIn;
  }

  updateUserIn(email: any, pw: any, rol: any) {
    this.userIn.email = email;
    this.userIn.pw = pw;
    this.userIn.rol = rol;
  }

  isSesionActive() {
    return this.sesionActive;
  }
}
