import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../../shared/components/UI/main-btn/main-btn';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from 'auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainBtn, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  _auth = inject(Auth);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  login() {
    this._auth.login(this.loginForm.value).subscribe(res => {
      console.log(res)
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
