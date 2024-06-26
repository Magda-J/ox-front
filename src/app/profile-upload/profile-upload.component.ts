import { Component } from '@angular/core';
import { UserProfileData } from '../../types';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-upload',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile-upload.component.html',
  styleUrl: './profile-upload.component.css'
})
export class ProfileUploadComponent {

  user: UserProfileData = {
    bio: '',
    profilePic: '',
    username: '',
  };

  uploadSuccess: boolean = false;

  constructor(
    private http: HttpClient,
        
    ) {}





  onSubmit() {
    const apiUrl = 'https://ox-back-kmw3.onrender.com/user/putUserInfo';

    // HTTP POST request
    this.http.put(apiUrl, this.user).subscribe({
      next: (response: any) => {
       
        
        
        this.user = {
          bio: '',
          profilePic: '',
          username: '',
        };

        this.uploadSuccess = true;

        setTimeout(() => {
          this.uploadSuccess = false;
         window.location.reload();
      }, 2000);



        
      },




      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }


}
