import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropdownComponent, CommonModule, FormsModule, NavbarComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
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

  event: EventData = {
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

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log(this.event);
    const apiUrl = 'http://localhost:3000/events/postevent';

    // HTTP POST request
    this.http.post(apiUrl, this.event).subscribe({
      next: (response: any) => {
        console.log('Post successful', response);

        this.event = {
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
      
        this.router.navigateByUrl('/profilepage')
      
      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }
}

export interface EventData {
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
