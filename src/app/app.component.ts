import { Component} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService = inject(AuthService)
  http = inject(HttpClient)
  title = 'ox-front';

  ngOnInit(): void {
    this.http.get<{ user: UserInterface }>('https://api.realworld.io/api/user')
    .subscribe({
      next: (response) => {
        console.log('response', response);
        this.authService.currentUserSig.set(response.user);
      },
      error: () => {
        this.authService.currentUserSig.set(null);
      }
    });
  }

  logout(): void {
    console.log("logout");
    localStorage.setItem('token', '')
    this.authService.currentUserSig.set(null);
  }
}
