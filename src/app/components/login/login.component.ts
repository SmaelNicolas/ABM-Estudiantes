import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  loginForm!: FormGroup;
  start: boolean = true;
  clickStudent: boolean = false;
  clickAdmin: boolean = false;
  // logInStudent: boolean = false;

  @Input() showNavbar: any;
  @Input() showLoading: any;
  @Input() showLogin: any;
  @Input() logInStudent: any;

  @Output()
  showNavbarChange = new EventEmitter<any>();
  @Output()
  showLoadingChange = new EventEmitter<any>();
  @Output()
  showLoginChange = new EventEmitter<any>();
  @Output()
  logInStudentChange = new EventEmitter<any>();

  constructor(public lf: FormBuilder) {
    this.loginForm = this.lf.group({
      email: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public clickStudentHandler() {
    this.clickStudent = true;
    this.clickAdmin = false;
  }

  public clickAdminHandler() {
    this.clickStudent = false;
    this.clickAdmin = true;
  }

  showNavbarHandler() {
    this.showNavbarChange.emit(true);
  }

  public logUser() {
    if (this.clickStudent) {
      this.logInStudentChange.emit(true);
    }
    this.showNavbarHandler();
    this.showLoginChange.emit(false);
  }

  showLoadingHandler() {
    this.showLoadingChange.emit(true);
    setTimeout(() => {
      this.showLoadingChange.emit(false);
    }, 1500);
    this.start = false;
  }
}
