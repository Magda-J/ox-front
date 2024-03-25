import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageEventsService } from '../services/homepage-events.service';


@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css'],
})

export class CardHomeComponent implements OnInit {
  @Input() selectedCategory: string = 'All';
  events: EventData[] = [];  
  filteredEvents: EventData[] = [];
  

  constructor(private http: HttpClient, private eventService: HomepageEventsService) {}

  ngOnInit(): void {
    this.getHomeEvents();
  }

  // fetchEventData(): void {
  //   this.http.get<EventData[]>('http://localhost:3000/events')
  //     .subscribe({
  //       next: (data) => {
  //         this.events = data;
  //         this.filterEvents();
  //         console.log('Events data:', this.events);
  //       },
  //       error: (error) => {
  //         console.error('Error fetching events:', error);
  //       }
  //     });
  // }

  getHomeEvents() {
    this.eventService.getHomeEvents()
      .subscribe(events => {
        this.events = events;
        console.log("Home events", this.events)
      });
  }

  
  filterEvents(): void {
    if (this.selectedCategory === 'All') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event => event.tags.includes(this.selectedCategory));
    }
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterEvents();
  }

}

export interface EventData {
  _id: string;
  eventName: string;
  eventImg: string;    
  price: number;
  tags: string[];
  description: string;
  ratings: number;
  date: string,
  starttime: string,
  endtime: string,
  spaces: number
 
}
