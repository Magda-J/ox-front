import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EventpageComponent } from './eventpage/eventpage.component';

import { NavbarComponent } from './navbar/navbar.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, FormComponent, EventpageComponent, RouterLink, RouterLinkActive, NavbarComponent, CardHomeComponent, CategoryButtonsComponent],


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
