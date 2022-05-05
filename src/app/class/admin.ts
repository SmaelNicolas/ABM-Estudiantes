import { AdminInterface } from '../interfaces/admin';

export class Admin implements AdminInterface {
  id: number;
  email: string;
  password: string;
  rol: string = 'admin';
  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.rol;
  }
}
