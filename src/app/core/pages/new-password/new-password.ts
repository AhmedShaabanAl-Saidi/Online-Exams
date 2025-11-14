import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../shared/components/UI/main-btn/main-btn';

@Component({
  selector: 'app-new-password',
  imports: [RouterLink, MainBtn],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
