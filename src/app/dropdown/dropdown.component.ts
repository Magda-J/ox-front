import { Component, Input } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() event: any;

  categories = new FormControl('');
  categoryList: string[] = ['Creative Arts', 'Language Learning', 'DIY and Crafts', 'Fitness and Wellness', 'Entrepreneurship', 'Science and Nature', 'Travel and Culture', 'Hobbies and Interests', 'Other'];

  handleSelectionChange(event: MatSelectChange) {
   
    const selectedOptions = event.value as string[];
      
    this.event.tags = selectedOptions;
  }


}
