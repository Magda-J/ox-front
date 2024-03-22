import { Component } from '@angular/core';
import { BioeditComponent } from '../bioedit/bioedit.component';
import { CreateexperiencebuttonComponent } from '../createexperiencebutton/createexperiencebutton.component';
import { CardprofileComponent } from '../cardprofile/cardprofile.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [BioeditComponent, CreateexperiencebuttonComponent, CardprofileComponent, CommonModule],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {

  username: string | null = null;
  rating: number | null = null;



  ngOnInit(): void {
   
    this.username = localStorage.getItem('username');
    const ratingString = localStorage.getItem('rating');
    this.rating = ratingString ? parseFloat(ratingString) : null;
  
  }


}