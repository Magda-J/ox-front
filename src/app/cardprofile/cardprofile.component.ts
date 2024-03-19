import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardprofile.component.html',
  styleUrl: './cardprofile.component.css'
})
export class CardprofileComponent {
  @Input() events: any[] = [];
  // events: any[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getEvents();
  // }

  // getEvents() {
  //   this.http.get<any[]>('http://localhost:3000/events')
  //     .subscribe({
  //       next: (data) => {
  //         this.events = data;
  //       },
  //       error: (error) => {
  //         console.error('Error fetching events:', error);
  //       }
  //     });
  // }
  
}
