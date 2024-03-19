import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css',
})
export class EventpageComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEvent(eventId)
        .subscribe(event => {
          this.event = event;
          console.log(this.event)
        });
    }
  }
}
