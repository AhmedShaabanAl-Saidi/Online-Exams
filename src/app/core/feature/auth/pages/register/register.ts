import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../../shared/components/UI/main-btn/main-btn';

@Component({
  selector: 'app-register',
  imports: [RouterLink, MainBtn],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}