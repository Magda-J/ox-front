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
      dates: [{
      date: [],
      starttime: [],
      endtime: [],
      spaces: []
    }]
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
   
    console.log(this.event);
    const apiUrl = 'http://localhost:3000/event/postevent';
    
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
            dates: [{
              date: [],
              starttime: [],
              endtime: [],
              spaces: []
            }]
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
  dates: [{
  date: Date[],
  starttime: string[],
  endtime: string[],
  spaces: number[]}],
};