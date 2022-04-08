import { Student } from './student';

export class DataStudent {
  public static studentList: Student[] = [
    {
      id: 1234567,
      name: 'Juan',
      lastName: 'Perez',
      email: 'sada@dsadsa',
      password: '123',
      courses: ['angular', 'javascript'],
    },
    {
      id: 12345678,
      name: 'Juan',
      lastName: 'Perez',
      email: 'sada@dsadsa',
      password: '123',
      courses: [],
    },
  ];

  //   <<<<<<<<Serivices>>>>>>>
  public static getStudentList(): Student[] {
    return this.studentList;
  }
  public static addStudent(student: Student) {
    this.studentList.push(student);
  }
  public static deleteStudent(id: number) {
    this.studentList = this.studentList.filter((student) => student.id !== id);
  }
  public static getStudent(id: number): Student {
    return this.studentList.find((student) => student.id === id)!;
  }
  public static alreadyStudent(id: number): boolean {
    return this.studentList.find((student) => student.id === id)!
      ? true
      : false;
  }
  public static replaceStudent(student: Student) {
    const index = this.studentList.findIndex((s) => s.id === student.id);
    this.studentList[index] = student;
  }

  public studentIsInCourse(student: Student, course: string): boolean {
    return student.courses.includes(course);
  }
}
