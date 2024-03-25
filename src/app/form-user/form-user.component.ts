import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [DropdownComponent, CommonModule, FormsModule, NavbarComponent],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit {
  showEvents: boolean = false;

  username: string | null = null;
  rating: number | null = null;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    const ratingString = localStorage.getItem('rating');
    this.rating = ratingString ? parseFloat(ratingString) : null;
    this.fetchUserEvent()



  }
  toggleEvents() {
    this.showEvents = !this.showEvents;
  }

  eventUser: EventDataUser = {
    eventName: '',
    eventImg: '',    
    price: 0,
    tags: [],
    description: '',
    date: '',
    starttime: '',
    endtime: '',
    spaces: 0
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

// get single event 

fetchUserEvent(): void {
    const eventid = this.route.snapshot.params['id'];
    const apiUrl = `http://localhost:3000/events/${eventid}`

    this.http.get(apiUrl)
      .subscribe({
        next: (response: any) => {
          console.log('GET request successful', response);
          this.eventUser = response;
          // this.totalPrice = response.price.toString();
        },
        error: (error: any) => {
          console.error('Error occurred during GET request', error);
        }
      });
  }







  onSubmit() {
    console.log(this.eventUser);
    const eventid = this.route.snapshot.params['id'];
    const apiUrl = `http://localhost:3000/events/${eventid}`;

    // HTTP PUT request
    this.http.put(apiUrl, this.eventUser).subscribe({
      next: (response: any) => {
        console.log('Edit successful', response);

        this.eventUser = {
          eventName: '',
          eventImg: '',    
          price: 0,
          tags: [],
          description: '',
          date: '',
          starttime: '',
          endtime: '',
          spaces: 0
        };
        this.router.navigateByUrl('/profilepage')
      
      },

      
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }
}

export interface EventDataUser {
  eventName: string,
  eventImg: string,    
  price: number,
  tags: string[],
  description: string
  date: string,
  starttime: string,
  endtime: string,
  spaces: number,
}

