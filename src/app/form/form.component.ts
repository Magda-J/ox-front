import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropdownComponent, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})




export class FormComponent implements OnInit {
  showEvents: boolean = false;

  ngOnInit(): void {}
  toggleEvents() {
    this.showEvents = !this.showEvents;
  }
 
  event: EventData = {
      eventName: '',
      eventImg: '',    
      price: 0,
      tags: [],
      description: '',
      date: '',
      starttime: '',
      endtime: '',
      spaces: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
   
    console.log(this.event);
    const apiUrl = 'http://localhost:3000/events/postevent';
    
    // HTTP POST request
    this.http.post(apiUrl, this.event)
      .subscribe({
        next: (response: any) => {
          console.log('Post successful', response);
          
          this.event = {
            eventName: '',
            eventImg: '',    
            price: 0,
            tags: [],
            description: '',
            date: '',
            starttime: '',
            endtime: '',
            spaces: 0
          };
        },
        error: (error: any) => {
          console.error('Error occurred', error);
         
        }
      });
  }
}


export interface EventData {
  eventName: string,
  eventImg: string,    
  price: number,
  tags: string[],
  description: string
  date: string,
  starttime: string,
  endtime: string,
  spaces: number,
  };