import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';
import { HomepageEventsService } from '../services/homepage-events.service';
import { EventData } from '../card-home/card-home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileData } from '../../types';


@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NavbarComponent],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css',
})
export class EventpageComponent implements OnInit {
  event: EventData | undefined;
  eventid: string | null = ''
  user: UserProfileData | undefined;

  constructor(private route: ActivatedRoute, private eventService: HomepageEventsService) {}
  
 


  ngOnInit(): void {
    const getEventId = this.route.snapshot.paramMap.get('id');
    this.eventid = getEventId;
    if (getEventId) {
      this.eventService.getHomeEvent(getEventId)
        .subscribe(event => {
          this.event = event;
         


          
        });
    }
  //  this.eventService.getUserInfo()
  const getEventId2 = this.route.snapshot.paramMap.get('id');
  this.eventid = getEventId2;
 
    if(getEventId2) {
   
    this.eventService.getUserInfo(getEventId2)
      .subscribe(user => {
        this.user = user;
        
      });
  
}
}

 

}
