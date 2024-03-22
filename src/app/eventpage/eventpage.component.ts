import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css',
})
export class EventpageComponent implements OnInit {
  event: Event | undefined;
  eventid: string | null = ''

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    const getEventId = this.route.snapshot.paramMap.get('id');
    this.eventid = getEventId;
    if (getEventId) {
      this.eventService.getEvent(getEventId)
        .subscribe(event => {
          this.event = event;
          console.log(this.event)
        });
    }
  }
}
