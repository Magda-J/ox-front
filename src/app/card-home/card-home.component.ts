import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  

  constructor(private eventService: HomepageEventsService) {}

  ngOnInit(): void {
    this.getHomeEvents();
  }

  getHomeEvents() {
    this.eventService.getHomeEvents()
      .subscribe(events => {
        this.events = events;
        this.filterEvents();
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
  booked: []
 
}
