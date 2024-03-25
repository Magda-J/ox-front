import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
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
  
}


logout(): void {
  console.log('logout');
  localStorage.setItem('token', '')
  localStorage.setItem('username', '')
  localStorage.setItem('rating', '')
  localStorage.setItem('bio', '')
  localStorage.setItem('profilePic', '')

}

constructor(@Inject(DOCUMENT) private document: Document) { }

isTokenPresent(): boolean {
  return !!this.document.defaultView?.localStorage.getItem('token');
}

}
