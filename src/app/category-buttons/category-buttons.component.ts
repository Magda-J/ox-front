import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-buttons',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent {
  showCategories = false;

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }
}
