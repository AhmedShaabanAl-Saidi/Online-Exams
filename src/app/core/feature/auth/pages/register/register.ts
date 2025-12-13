import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../../shared/components/UI/main-btn/main-btn';
import { PasswordToggle } from "../components/password-toggle/password-toggle";

@Component({
  selector: 'app-register',
  imports: [RouterLink, MainBtn, PasswordToggle],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  password = signal('');
  confirmPassword = signal('');

  showPassword = signal(false);
  showConfirmPassword = signal(false);

  togglePasswordVisibility() {
    this.showPassword.update(v => !v);
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.update(v => !v);
  }

  onPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password.set(target.value);
  }

  onConfirmPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.confirmPassword.set(target.value);
  }
}