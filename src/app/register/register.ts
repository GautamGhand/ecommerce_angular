import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Replace this with real registration logic or API call
    alert(`Registered successfully!\nWelcome, ${this.name}`);
    this.router.navigate(['/login']);
  }
}
