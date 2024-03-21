import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuHidden: boolean = true;
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  
 
 
  authService = inject(AuthService)

ngOnInit(): void {
  // console.log('isLoggedIn:', this.isLoggedIn());
}
// isLoggedIn(): boolean {
//   return this.authService.getCurrentUser() !== null;
// }

logout(): void {
  console.log('logout')
}

}
