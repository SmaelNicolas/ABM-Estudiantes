import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Student } from 'src/app/class/student';
import { StudentApiService } from 'src/app/services/students-api.service';
import { DeleteStudentDialogComponent } from '../delete-student-dialog/delete-student-dialog.component';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent {
  deleteStudentForm!: FormGroup;
  validStudent: boolean = true;
  suscriberStudent!: any;

  constructor(
    public studentAddForm: FormBuilder,
    public dialog: MatDialog,
    private studentAPIService: StudentApiService
  ) {
    this.deleteStudentForm = this.studentAddForm.group({
      id: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.pattern('[0-9]*'),
      ]),
    });
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
    let id: number = this.deleteStudentForm.get('id')!.value;
    let student: Student | undefined;
    this.studentAPIService.getStudent(id).subscribe(
      (data) => {
        student = data;
        this.studentAPIService.deleteStudent(id).subscribe();
        this.openDialog(student);
        this.deleteStudentForm.reset();
      },
      () => {
        student = undefined;
        this.validStudent = false;
        setTimeout(() => {
          this.validStudent = true;
        }, 3000);
      }
    );
  }
}
