import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../shared/components/UI/main-btn/main-btn';
import { PasswordToggle } from '../../components/password-toggle/password-toggle';

@Component({
  selector: 'app-new-password',
  imports: [RouterLink, MainBtn, PasswordToggle],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
  newPassword = signal('');
  confirmPassword = signal('');

  showNewPassword = signal(false);
  showConfirmPassword = signal(false);

  toggleNewPasswordVisibility() {
    this.showNewPassword.update(v => !v);
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.update(v => !v);
  }

  onNewPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newPassword.set(target.value);
  }

  onConfirmPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.confirmPassword.set(target.value);
  }
}
