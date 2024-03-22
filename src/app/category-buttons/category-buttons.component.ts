import { Component, Output, EventEmitter } from '@angular/core';
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
  categories: string[] = ['All', 'Creative Arts', 'Language Learning', 'DIY and Crafts', 'Fitness and Wellness', 'Entrepreneurship', 'Science and Nature', 'Travel and Culture', 'Hobbies and Interests', 'Other'];

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}