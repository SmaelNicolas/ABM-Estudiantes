import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/class/admin';
import { Student } from 'src/app/class/student';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { AutenticacionService } from 'src/app/services/admin.service';
import { StudentApiService } from 'src/app/services/students-api.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  clickStudent: boolean = false;
  clickAdmin: boolean = false;
  userCheck!: Admin | Student;
  // logInStudent: boolean = false;

  constructor(
    public lf: FormBuilder,
    private authService: AutenticacionService,
    private router: Router,
    private adminAPIService: AdminApiService,
    private studentAPIService: StudentApiService
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
    this.studentAPIService
      .getStudentEmail(this.loginForm.get('email')!.value)
      .subscribe((data) => {
        this.userCheck = data;
        this.correctUsername(this.userCheck);
      });
  }

  public clickAdminHandler() {
    this.clickStudent = false;
    this.clickAdmin = true;
    this.adminAPIService
      .getAdminEmail(this.loginForm.get('email')!.value)
      .subscribe((data) => {
        this.userCheck = data;

        this.correctUsername(this.userCheck);
      });
  }

  correctUsername(user: any) {
    let pw: string = this.loginForm.get('password')!.value;

    pw === user[0].password
      ? this.createUser(user)
      : Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña Incorrecta',
        });
  }

  public createUser(user: any) {
    this.authService.updateUserIn(user[0].email, user[0].password, user[0].rol);
    this.authService.getUserIn();
    let timerInterval: any;
    Swal.fire({
      title: 'Bienvenido!',
      html: 'Redireccionando al Home',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b: any = Swal.getHtmlContainer()!.querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      this.router.navigate(['home']);
    });
  }
}
