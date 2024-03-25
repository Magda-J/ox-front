import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EventService } from '../services/event-add.service';


@Component({
  selector: 'app-cardprofile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cardprofile.component.html',
  styleUrl: './cardprofile.component.css'
})
export class CardprofileComponent implements OnInit {
 
  events: Event[] = [];
  username: string | null = null;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
    this.username = localStorage.getItem('username');
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      });
  }


  
  
    
  

  
}

export interface Event {
  _id: string;
  eventName: string;
  eventImg: string;
  ratings: number;
  price: number;
  description: string;
 
}