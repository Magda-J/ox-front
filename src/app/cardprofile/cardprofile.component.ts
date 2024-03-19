import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cardprofile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cardprofile.component.html',
  styleUrl: './cardprofile.component.css'
})
export class CardprofileComponent {
 
  events: Event[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.http.get<Event[]>('http://localhost:3000/events')
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log(this.events)
        },
        error: (error) => {
          console.error('Error fetching events:', error);
        }
      });
  }
  
}

export interface Event {
  _id: string;
  eventName: string;
  eventImg: string;
  // hostName: string;
  ratings: number;
  price: number;
 
}