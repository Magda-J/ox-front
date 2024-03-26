import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../types';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  user: UserData = {
    username: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    
    ) {}

  onSubmit() {
    const apiUrl = 'http://localhost:3000/auth/signup';

    // HTTP POST request
    this.http.post(apiUrl, this.user).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        console.log("user signal", response)
        this.router.navigateByUrl('/login')

        this.user = {
          username: '',
          password: '',
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }
}





// import { Component, inject } from '@angular/core';
// import { OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { UserData } from '../../types';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-register-page',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './register-page.component.html',
//   styleUrl: './register-page.component.css',
// })
// export class RegisterPageComponent {
//   user: UserData = {
//     username: '', 
//     password: '',
  
//   };

// fb = inject(FormBuilder);
// authService = inject(AuthService)

// // form = this.fb.group({
// //   username: '',
// //   password: '',
// // })


//   constructor(private http: HttpClient) {}

// // tutorial stuff

// // form: FormGroup;

// // constructor(
// //   private fb: FormBuilder,
// //   private http: HttpClient,
// //   private authService: AuthService,
// //   private router: Router
// // ) {
// //   this.form = this.fb.group({
// //     username: '',
// //     password: ''
// //   });
// // }

//   onSubmit() {
//     const apiUrl = 'http://localhost:3000/auth/signup';

//     // HTTP POST request
//     this.http.post(apiUrl, this.user).subscribe({
//       next: (response: any) => {
//         console.log('Post successful', response);

//         this.user = {
//           username: '',
//           password: '',
        
//         };
//       },
//       error: (error: any) => {
//         console.error('Error occurred', error);
//       },
//     });
//   }
 

//   //  TUTORIAL Stuff
//   // onSubmit(): void {
//   //   this.http
//   //   .post<{ user: UserData}>('http://localhost:3000/auth/signup', {
//   //   user: this.form.getRawValue(),
//   // })
//   // .subscribe((response) => {
//   //   console.log('response', response)
//   //   // localStorage.setItem('token', response.user.token)
//   //   // this.authService.currentUserSig.set(response.user)
//   //   this.router.navigateByUrl('/profile')
   
//   // });

//   // }

// }
