import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../../shared/components/UI/main-btn/main-btn';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainBtn],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
