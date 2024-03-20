import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const apiUrl = 'http://localhost:3000/auth/authorisation';

    // HTTP POST request
    this.http.post(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);

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

export interface UserData {
  username: string;
  password: string;
}


