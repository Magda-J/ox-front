import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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

export class CardHomeComponent implements OnChanges {
  @Input() selectedCategory: string = 'All';
  events: EventData[] = [];  
  filteredEvents: EventData[] = [];
  

  constructor(private eventService: HomepageEventsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      this.filterEvents();
    }
  }  

  ngOnInit(): void {
    this.getHomeEvents();
  }

  getHomeEvents() {
    this.eventService.getHomeEvents()
      .subscribe(events => {
        this.events = events;
        this.filterEvents();
        console.log("Home events", this.events)
        console.log("Filtered events", this.filteredEvents); 
      });
  }

  
  filterEvents(): void {
    if (this.selectedCategory === 'All') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event => event.tags.includes(this.selectedCategory));
    }
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
