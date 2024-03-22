import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuHidden: boolean = true;
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url === url;
}

}
