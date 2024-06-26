import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../cardprofile/cardprofile.component';
import { map } from 'rxjs/operators';
import { UserProfileData } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    // return this.http.get<Event[]>('https://ox-back-kmw3.onrender.com/events');
    return this.http.get<Event[]>('https://ox-back-kmw3.onrender.com/events/userEvents');
  }
  getEvent(id: string): Observable<Event | undefined> {
    return this.getEvents().pipe(
      map(events => events.find(event => event._id === id))
    );
  }




}