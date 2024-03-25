import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event-add.service';
import { Event } from '../cardprofile/cardprofile.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './eventpageUser.component.html',
  styleUrl: './eventpageUser.component.css',
})
export class EventpageUserComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService, private http: HttpClient, private router: Router) {}

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

  onDelete() {
    console.log(this.event);
    const eventid = this.route.snapshot.params['id'];
    const apiUrl = `http://localhost:3000/events/${eventid}`;

    console.log("Checking on submit event id", eventid)

    // HTTP PUT request
    this.http.delete(apiUrl).subscribe({
      next: (response: any) => {
        console.log('Delete successful', response);
        this.router.navigateByUrl('/profilepage')

      },
      error: (error: any) => {
        console.error('Error occurred', error);
      },
    });
  }



}
