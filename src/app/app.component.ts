import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardHomeComponent, CategoryButtonsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ox-front';

  isMenuHidden: boolean = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

}
