import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'test@example.com' && this.password === 'password') {
      alert('Login Successful!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }

}
