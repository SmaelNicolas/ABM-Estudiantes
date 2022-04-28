import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrls: ['./delete-student-dialog.component.css'],
})
export class DeleteStudentDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
