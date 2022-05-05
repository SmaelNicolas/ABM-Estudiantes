import { StudentInterface } from '../interfaces/student';

export class Student implements StudentInterface {
  id: number | undefined;
  name: string;
  lastName: string;
  email: string;
  password: string;
  courses: string[] = [];
  rol: string;
  dni: number | undefined;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    course: string,
    dni: number
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.courses.push(course);
    this.rol = 'student';
    this.dni = dni;
  }
}
