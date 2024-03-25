import { Component } from '@angular/core';
import { BioeditComponent } from '../bioedit/bioedit.component';
import { CreateexperiencebuttonComponent } from '../createexperiencebutton/createexperiencebutton.component';

import { CardprofileComponent } from '../cardprofile/cardprofile.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { UserProfileData } from '../../types';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-profilepage',
  standalone: true,

  imports: [BioeditComponent, CreateexperiencebuttonComponent, CardprofileComponent, CommonModule, NavbarComponent, FormsModule],

  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {

  username: string | null = null;
  rating: number | null = null;
  bio: string | null = null;
  profilePic: string | null = null;


  user: UserProfileData = {
    bio: '',
    profilePic: '',
  };

  constructor(
    private http: HttpClient,
        
    ) {}

   
  ngOnInit(): void {
   
    this.username = localStorage.getItem('username');
    this.bio = localStorage.getItem('bio');
    this.profilePic = localStorage.getItem('profilePic');
    const ratingString = localStorage.getItem('rating');
    this.rating = ratingString ? parseFloat(ratingString) : null;
  
  }


  onSubmit() {
    const apiUrl = 'http://localhost:3000/user/putUserInfo';

    // HTTP POST request
    this.http.put(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        
        

        this.user = {
          bio: '',
          profilePic: '',
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }




}