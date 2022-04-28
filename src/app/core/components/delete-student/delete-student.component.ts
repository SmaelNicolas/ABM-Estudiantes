import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Student } from 'src/app/class/student';
import { StudentsService } from 'src/app/services/students.service';
import { DeleteStudentDialogComponent } from '../delete-student-dialog/delete-student-dialog.component';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit, OnDestroy {
  deleteStudentForm!: FormGroup;
  validStudent: boolean = true;
  suscriberStudent!: any;

  constructor(
    public studentAddForm: FormBuilder,
    public dialog: MatDialog,
    private studentService: StudentsService
  ) {
    this.deleteStudentForm = this.studentAddForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  ngOnInit(): void {
    this.suscriberStudent = this.studentService.getStudentList().subscribe();
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  openDialog(s: Student) {
    this.dialog.open(DeleteStudentDialogComponent, {
      data: {
        name: s.name,
        lastName: s.lastName,
      },
    });
  }

  deleteStudent() {
    let id: number = parseInt(this.deleteStudentForm.get('id')!.value);
    let student!: Student;
    this.studentService.getStudent(id).subscribe((data) => (student = data));

    if (student !== undefined) {
      this.studentService.deleteStudent(id);
      this.openDialog(student);
      this.deleteStudentForm.reset();
    } else {
      this.validStudent = false;
      setTimeout(() => {
        this.validStudent = true;
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    this.suscriberStudent.unsubscribe();
  }
}
