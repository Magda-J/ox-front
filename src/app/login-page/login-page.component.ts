import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../types';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

  loginSuccess: boolean = false;
  loginError: boolean = false;


  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    
    ) {}

  onSubmit() {
    const apiUrl = 'http://localhost:3000/auth/authorisation';

    // HTTP POST request
    this.http.post(apiUrl, this.user).subscribe({
      next: (response: any) => {
      
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.username)
        localStorage.setItem('rating', response.rating)
        localStorage.setItem('bio', response.bio)
        localStorage.setItem('profilePic', response.profilePic)
        
        this.loginSuccess = true;


        const userData: UserData = {
          username: response.username,
          password: response.password
        };
       
           setTimeout(() => {
          this.loginSuccess = false;
           this.router.navigateByUrl('/profilepage')
      }, 1000);
        
       
        
        this.user = {
          username: '',
          password: '',
        };

     


      },
      error: (error: any) => {
        console.error('Error occurred', error);
        this.loginError = true;

        setTimeout(() => {
          this.loginError = false;
           this.router.navigateByUrl('/login')
      }, 1000);


      },
    });
  }


}



