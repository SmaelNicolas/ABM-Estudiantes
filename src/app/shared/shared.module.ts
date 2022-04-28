import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameStudentDirective } from './directives/name-student.directive';
import { TitleFontSizeDirective } from './directives/title-font-size.directive';

@NgModule({
  declarations: [NameStudentDirective, TitleFontSizeDirective],
  imports: [CommonModule],
  exports: [NameStudentDirective, TitleFontSizeDirective],
})
export class SharedModule {}
