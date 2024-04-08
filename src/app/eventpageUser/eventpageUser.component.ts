import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileData } from '../../types';


@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './eventpageUser.component.html',
  styleUrl: './eventpageUser.component.css',
})
export class EventpageUserComponent implements OnInit {
  event: Event | undefined;
  user: UserProfileData = {
    bio: '',
    profilePic: '',
    username: '',
  };

  deleteSuccess: boolean = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEvent(eventId)
        .subscribe(event => {
          this.event = event;
         
        });
    }

   this.getUserData()

  }

  onDelete() {
    
    const eventid = this.route.snapshot.params['id'];
    const apiUrl = `https://ox-back-kmw3.onrender.com/events/${eventid}`;

   

    // HTTP PUT request
    this.http.delete(apiUrl).subscribe({
      next: (response: any) => {
       
       


        this.deleteSuccess = true;

        setTimeout(() => {
          this.deleteSuccess = false;
          this.router.navigateByUrl('/profilepage') 
      }, 2000);




      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }


  getUserData(): void {
    
    const apiUrl = 'https://ox-back-kmw3.onrender.com/user/fetchUserInfo'

    this.http.get(apiUrl)
      .subscribe({
        next: (response: any) => {
          
          this.user = response;
        
        },
        error: (error: any) => {
          console.error('Error occurred during GET request', error);
        }
      });
  }




}
