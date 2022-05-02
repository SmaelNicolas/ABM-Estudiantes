import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/admin.service';

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

  constructor(
    public lf: FormBuilder,
    private authService: AutenticacionService,
    private router: Router
  ) {
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

  public createUser() {
    let email: string = this.loginForm.get('email')!.value;
    let pw: string = this.loginForm.get('password')!.value;
    this.clickAdmin && this.authService.updateUserIn(email, pw, 'admin');
    this.clickStudent && this.authService.updateUserIn(email, pw, 'student');
    this.router.navigate(['home']);
  }
}
