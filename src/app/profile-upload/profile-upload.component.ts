import { Component } from '@angular/core';
import { UserProfileData } from '../../types';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-upload.component.html',
  styleUrl: './profile-upload.component.css'
})
export class ProfileUploadComponent {

  user: UserProfileData = {
    bio: '',
    profilePic: '',
    username: '',
  };

  constructor(
    private http: HttpClient,
    private toastr: ToastrService   
    ) {}





  onSubmit() {
    const apiUrl = 'http://localhost:3000/user/putUserInfo';

    // HTTP POST request
    this.http.put(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        this.toastr.success('Profile photo saved successfully!', '', {
          closeButton: true,
          positionClass: 'toast-top-left',
          
        });
        
        this.user = {
          bio: '',
          profilePic: '',
          username: '',
        };
        window.location.reload();
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }


}
