import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';

  resetPassword() {
    console.log("Reset password for:", this.email);
    // Add logic for password reset (e.g., API request)
  }
}
