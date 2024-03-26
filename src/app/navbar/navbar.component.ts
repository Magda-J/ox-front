
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';




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
toastr = inject(ToastrService)


ngOnInit(): void {
   


}


logout(): void {
  console.log('logout');
  localStorage.setItem('token', '')
  localStorage.setItem('username', '')
  localStorage.setItem('rating', '')
  localStorage.setItem('bio', '')
  localStorage.setItem('profilePic', '')
  this.toastr.success('Logged out successfully!', 'Success!', {
    closeButton: true,
    positionClass: 'toast-top-left',
    timeOut: 1000
  });
}

constructor(
  private router: Router,
  @Inject(DOCUMENT) private document: Document
) { }

isTokenPresent(): boolean {
  return !!this.document.defaultView?.localStorage.getItem('token');



}


  isActive(url: string): boolean {
    return this.router.url === url;
}

}
