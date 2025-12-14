import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from 'auth';
import { MainBtn } from '../../../../shared/components/UI/main-btn/main-btn';
import { PasswordToggle } from '../../components/password-toggle/password-toggle';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainBtn, ReactiveFormsModule, PasswordToggle],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  _auth = inject(Auth);

  password = signal('');
  showPassword = signal(false);

  togglePasswordVisibility() {
    this.showPassword.update(v => !v);
  }

  onPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password.set(target.value);
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  login() {
    this._auth.login(this.loginForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
