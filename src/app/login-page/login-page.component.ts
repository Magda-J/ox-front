import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../types';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

  // fb = inject(FormBuilder);
  // authService = inject(AuthService)
  
  // form = this.fb.nonNullable.group({
  //   username: ['', Validators.required],
  //   password: ['', Validators.required]
  // })


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
        console.log('Post successful', response);
        localStorage.setItem('token', response.token)
        // this.authService.currentUserSig.set(response)
        console.log("USER", response)
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


  // tutorial
  // onSubmit(): void {
  //   this.http
  //   .post<{ user: UserData}>('http://localhost:3000/auth/authorisation', {
  //   user: this.form.getRawValue(),
  // })
  // .subscribe((response) => {
  //   console.log('response', response)
  //   // localStorage.setItem('token', response.user.token)
  //   this.authService.currentUserSig.set(response.user)
  // });

  // }

}



