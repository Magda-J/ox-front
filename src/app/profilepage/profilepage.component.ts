import { Component } from '@angular/core';
import { BioeditComponent } from '../bioedit/bioedit.component';
import { CreateexperiencebuttonComponent } from '../createexperiencebutton/createexperiencebutton.component';
import { CardprofileComponent } from '../cardprofile/cardprofile.component';


@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [BioeditComponent, CreateexperiencebuttonComponent, CardprofileComponent],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {

  



}
