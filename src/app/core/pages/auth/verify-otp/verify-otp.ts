import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainBtn } from '../../../../shared/components/UI/main-btn/main-btn';

@Component({
  selector: 'app-verify-otp',
  imports: [RouterLink, MainBtn],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOTP {

}
