import { Component } from '@angular/core';
import { UserProfileData } from '../../types';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bioedit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bioedit.component.html',
  styleUrl: './bioedit.component.css'
})
export class BioeditComponent {

  user: UserProfileData = {
    bio: '',
    profilePic: '',
  };

  constructor(
    private http: HttpClient,
        
    ) {}




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
