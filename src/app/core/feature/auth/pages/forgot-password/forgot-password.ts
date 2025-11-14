import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../../shared/components/UI/main-btn/main-btn';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, MainBtn],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

}
