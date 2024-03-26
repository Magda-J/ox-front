import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../types';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

 


  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    
    ) {}

  onSubmit() {
    const apiUrl = 'http://localhost:3000/auth/authorisation';

    // HTTP POST request
    this.http.post(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        this.toastr.success('Logged in successfully!', 'Success!', {
          closeButton: true,
          positionClass: 'toast-top-left',
          timeOut: 2000
        });

        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.username)
        localStorage.setItem('rating', response.rating)
        localStorage.setItem('bio', response.bio)
        localStorage.setItem('profilePic', response.profilePic)
        
        const userData: UserData = {
          username: response.username,
          password: response.password
        };
        // this.authService.setCurrentUser(userData);
        // console.log('Set current user:', userData);
        
        
        this.router.navigateByUrl('/profilepage')
        
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



