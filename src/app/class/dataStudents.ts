import { Student } from './student';

export class DataStudent {
  public static studentList: Student[] = [
    {
      id: 11111111,
      name: 'Nicolas',
      lastName: 'Smael',
      email: 'Smael@Nicolas.com',
      password: '11111111',
      courses: ['angular', 'javascript', 'react'],
    },
    {
      id: 11111112,
      name: 'Fernando',
      lastName: 'Olvera',
      email: 'Olvera@Fernando.com',
      password: '11111111',
      courses: ['angular', 'javascript'],
    },
    {
      id: 11111113,
      name: 'Abner',
      lastName: 'García',
      email: 'García@Abner.com',
      password: '11111111',
      courses: ['angular'],
    },
    {
      id: 11111114,
      name: 'Victoria',
      lastName: 'Cordero',
      email: 'Cordero@Victoria.com',
      password: '11111111',
      courses: ['react'],
    },
    {
      id: 11111115,
      name: 'Pablo',
      lastName: 'García',
      email: 'García@Pablo.com',
      password: '11111111',
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
