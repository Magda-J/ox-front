import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';


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
    dates: [
      {
        date: [],
        starttime: [],
        endtime: [],
        spaces: [],
      },
    ],
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

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
          dates: [
            {
              date: [],
              starttime: [],
              endtime: [],
              spaces: [],
            },
          ],
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }
}

export interface EventDataUser {
  eventName: string;
  eventImg: string;
  price: number;
  tags: string[];
  description: string;
  dates: [
    {
      date: Date[];
      starttime: string[];
      endtime: string[];
      spaces: number[];
    }
  ];
}

