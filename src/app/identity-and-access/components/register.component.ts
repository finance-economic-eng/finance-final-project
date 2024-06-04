import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //values
  isActive = false;
  isForgotPasswordActive = false;

  //functions

  toggleActive(): void{
    this.isActive = !this.isActive;
  }

  toggleForgotPassword(): void{
    this.isActive = false;
    this.isForgotPasswordActive = !this.isForgotPasswordActive;
  }

  backToSignIn(): void{
    this.isForgotPasswordActive = false;
    this.isActive = false;
}



}
