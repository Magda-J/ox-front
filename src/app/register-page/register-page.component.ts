import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../types';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    
    ) {}

  onSubmit() {
    const apiUrl = 'http://localhost:3000/auth/signup';

    // HTTP POST request
    this.http.post(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        this.toastr.success('Registered successfully! Please log in to view your profile.', 'Success!', {
          closeButton: true,
          positionClass: 'toast-top-left',
          timeOut: 5000
        });
        console.log("user signal", response)
        this.router.navigateByUrl('/login')

        this.user = {
          username: '',
          password: '',
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }
}




