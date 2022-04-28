import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-course-dialog',
  templateUrl: './modify-course-dialog.component.html',
  styleUrls: ['./modify-course-dialog.component.css'],
})
export class ModifyCourseDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
