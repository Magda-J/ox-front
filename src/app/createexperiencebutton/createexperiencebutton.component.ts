import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-createexperiencebutton',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormComponent],
  templateUrl: './createexperiencebutton.component.html',
  styleUrl: './createexperiencebutton.component.css'
})
export class CreateexperiencebuttonComponent {

}
