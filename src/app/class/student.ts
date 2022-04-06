import { Person } from '../interfaces/person';

export class Student implements Person {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  courses: string[] = [];

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    course: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.courses.push(course);
  }
}
