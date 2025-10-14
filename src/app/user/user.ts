import { Component } from '@angular/core';
import { Userservice } from '../services/userservice';
import { DatePipe } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterLink } from '@angular/router';
import { Edituser } from '../edituser/edituser';

@Component({
  selector: 'app-user',
  imports: [DatePipe, LazyLoadImageModule, RouterLink, Edituser],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  users: any[] = [];
  selectedUser: any = null;
  loading: boolean = false;

  constructor(private userService: Userservice) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data.users;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  openModal(user: any) {
    this.selectedUser = user;
  }

  closeModal() {
    this.selectedUser = null;
  }

  updateUser(updatedUser: any) {
    this.loading = true;
    this.userService.updateUser(updatedUser.id, updatedUser).subscribe({
      next: (response) => {
        const index = this.users.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = { ...response };
        }
        this.loading = false;
        this.closeModal();
      },
      error: (err) => {
        console.error('Update failed:', err);
        this.loading = false;
      },
    });
  }
}
