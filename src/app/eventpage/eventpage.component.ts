import { Component } from '@angular/core';
import { EventAddService } from '../services/event-add.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css',
})
export class EventpageComponent {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) {
// ,private eventAddService: EventAddService
  }
    

  ngOnInit() {
    // this.eventAddService
    //   .getAllEvents('http://localhost:3000/event/events/') 
    //   .subscribe((events: Event[]) => { 
    //     console.log(events);
    //   });
  
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
     
    }
  
}
