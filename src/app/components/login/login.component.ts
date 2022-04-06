import { Component, OnInit } from '@angular/core';
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

  //array para ver la lista de estudiantes/administradores logeados
  loggedList: any[] = [{}];

  constructor(public lf: FormBuilder) {
    this.loginForm = this.lf.group({
      password: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
    });
  }

  ngOnInit(): void {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public logUser() {
    //chekear si el usuario existe en la base de datos
  }
}
