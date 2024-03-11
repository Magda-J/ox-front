import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  categories = new FormControl('');
  categoryList: string[] = ['Fitness', 'Cooking', 'Mindfulness', 'DIY', 'Programming', 'Dancing', 'Entertainment', 'Magic', 'Marital Arts', 'Yoga'];
}
