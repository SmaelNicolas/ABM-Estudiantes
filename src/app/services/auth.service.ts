import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private userIn = {
    email: 'nico.smael@gmail.com',
    pw: '159159',
    rol: 'admin',
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
