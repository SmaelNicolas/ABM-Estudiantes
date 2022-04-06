import { Student } from './student';
import { Admin } from './admin';
import { Courses } from './courses';

export class DataPeople {
  public static studentList: Student[] = [];
  public static adminList: Admin[] = [];
  public static coursesList: Courses[] = [
    {
      name: 'angular',
      description:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      isAvailable: true,
    },
    {
      name: 'react',
      description:
        'React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      isAvailable: true,
    },

    {
      name: 'node',
      description:
        'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user.  ',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      isAvailable: false,
    },
    {
      name: 'javascript',
      description:
        ' JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but its used in many non-browser environments as well.      ',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
      isAvailable: true,
    },
    {
      name: 'Python',
      description:
        'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales. In July 2018, Van Rossum stepped down as the leader in the language community after 30 years.',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      isAvailable: false,
    },
  ];

  //   <<<<<<<<STUDENTS>>>>>>>
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

  //   <<<<<<<<ADMIN>>>>>>>
  public static getAdminList(): Admin[] {
    return this.adminList;
  }
  public static deleteAdmin(id: number) {
    this.adminList = this.adminList.filter((admin) => admin.id !== id);
  }
  public static addAdmin(admin: Admin) {
    this.adminList.push(admin);
  }

  public static getAdmin(email: string): Admin | undefined {
    return this.adminList.find((admin) => admin.email === email);
  }

  //COURSES
  public static getCoursesList(): Courses[] {
    return this.coursesList;
  }
  public static getCoursesListAvailable(): Courses[] {
    return this.coursesList.filter((course) => course.isAvailable);
  }

  public static addCourse(course: Courses) {
    this.coursesList.push(course);
  }
  public static deleteCourse(name: string) {
    this.coursesList = this.coursesList.filter(
      (course) => course.name !== name
    );
  }
  public static getCourse(name: string): Courses | undefined {
    return this.coursesList.find((course) => course.name === name);
  }
}
