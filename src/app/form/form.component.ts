import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropdownComponent, CommonModule, FormsModule, NavbarComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  showEvents: boolean = false;

  username: string | null = null;
  rating: number | null = null;
  profilePic: string | null = null;


  createSuccess: boolean = false;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.profilePic = localStorage.getItem('profilePic');
    const ratingString = localStorage.getItem('rating');
    this.rating = ratingString ? parseFloat(ratingString) : null;



  }
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

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    
    const apiUrl = 'http://localhost:3000/events/postevent';

    // HTTP POST request
    this.http.post(apiUrl, this.event)
      .subscribe({
        next: (response: any) => {
          
          
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

          this.createSuccess = true;

          setTimeout(() => {
            this.createSuccess = false;
            this.router.navigateByUrl('/profilepage') 
        }, 2000);



          
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

