import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscriber, Subscription } from 'rxjs';
import { Courses } from 'src/app/class/courses';
import { Student } from 'src/app/class/student';
import { CoursesApiService } from 'src/app/services/courses-api.service';
import { StudentApiService } from 'src/app/services/students-api.service';
import { ModifyCourseDialogComponent } from '../modify-course-dialog/modify-course-dialog.component';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css'],
})
export class ModifyCourseComponent implements OnInit, OnDestroy {
  courseList!: Courses[];
  studentList!: Student[];
  createNewCourseForm!: FormGroup;
  show: boolean = false;
  subscription!: Subscription;

  constructor(
    public courseAddForm: FormBuilder,
    public dialog: MatDialog,
    private coursesAPIService: CoursesApiService,
    private studentAPIService: StudentApiService
  ) {
    this.createNewCourseForm = this.courseAddForm.group({
      name: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      description: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(12),
      ]),
      isAvailable: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.subscription = this.studentAPIService
      .getStudents()
      .subscribe((data) => {
        this.studentList = data;
      });

    this.subscription = this.coursesAPIService
      .getCourses()
      .subscribe((data) => {
        this.courseList = data;
      });
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  openDialog(title: string, course: string, action: string): void {
    this.dialog.open(ModifyCourseDialogComponent, {
      data: {
        title: title,
        course: course,
        action: action,
      },
    });
  }

  deleteCourse(course: Courses) {
    if (this.coursesAPIService.canDeleteCourse(course.name, this.studentList)) {
      this.subscription = this.coursesAPIService
        .deleteCourse(course.id)
        .subscribe();
      this.openDialog('Curso Eliminado Correctamente', course.name, 'delete');
    } else {
      this.openDialog(
        'No es posible eliminar el curso',
        course.name,
        'noDelete'
      );
    }
  }
  changeAvailability(course: Courses): void {
    course.isAvailable
      ? (course.isAvailable = false)
      : (course.isAvailable = true);
    this.subscription = this.coursesAPIService
      .updateCourse(course, course.id)
      .subscribe();
    this.openDialog(
      'Se ha modificado la disponibilidad del curso',
      course.name,
      'availability'
    );
  }

  addNewCourse() {
    let newCourse: Courses = this.createNewCourse();
    console.log(newCourse);
    this.subscription = this.coursesAPIService
      .saveCourse(newCourse)
      .subscribe();
    this.createNewCourseForm.reset();
  }

  createNewCourse(): Courses {
    return new Courses(
      this.createNewCourseForm.get('name')!.value,
      this.createNewCourseForm.get('description')!.value,
      this.createNewCourseForm.get('imageUrl')!.value,
      this.createNewCourseForm.get('isAvailable')!.value,
      undefined
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
