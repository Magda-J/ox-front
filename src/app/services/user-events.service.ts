import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../cardprofile/cardprofile.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }
  getEvent(id: string): Observable<Event | undefined> {
    return this.getEvents().pipe(
      map(events => events.find(event => event._id === id))
    );
  }
}