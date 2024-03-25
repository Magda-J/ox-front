import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryButtonsComponent } from '../category-buttons/category-buttons.component';
import { CardHomeComponent } from '../card-home/card-home.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CategoryButtonsComponent, CardHomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  selectedCategory: string = 'All';

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }
}
  