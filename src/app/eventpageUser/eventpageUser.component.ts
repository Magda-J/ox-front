import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';


@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './eventpageUser.component.html',
  styleUrl: './eventpageUser.component.css',
})
export class EventpageUserComponent implements OnInit {
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
