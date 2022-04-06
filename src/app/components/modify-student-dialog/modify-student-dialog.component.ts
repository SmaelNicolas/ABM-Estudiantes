import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-student-dialog',
  templateUrl: './modify-student-dialog.component.html',
  styleUrls: ['./modify-student-dialog.component.css'],
})
export class ModifyStudentDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
