import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css'],
})

export class CardHomeComponent implements OnInit {

  events: EventData[] = [];  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEventData();
  }

  fetchEventData(): void {
    this.http.get<EventData[]>('http://localhost:3000/events')
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log('Events data:', this.events);
        },
        error: (error) => {
          console.error('Error fetching events:', error);
        }
      });
  }
  
}

export interface EventData {
  eventName: string;
  eventImg: string;    
  price: number;
  tags: string[];
  description: string;
  ratings: number;
  dates: {
    date: Date,
    starttime: string,
    endtime: string,
    spaces: number
  }[];
}
