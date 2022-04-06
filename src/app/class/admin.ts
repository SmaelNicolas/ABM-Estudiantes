import { Person } from '../interfaces/person';

export class Admin implements Person {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
