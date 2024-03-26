import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from '../cardprofile/cardprofile.component';
import { EventData } from '../card-home/card-home.component';


@Injectable({
  providedIn: 'root'
})
export class HomepageEventsService {
  constructor(private http: HttpClient) {}

  getHomeEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>('http://localhost:3000/events');
   
  }
  getHomeEvent(id: string): Observable<EventData | undefined> {
    return this.getHomeEvents().pipe(
      map(events => events.find(event => event._id === id))
    );
  }
}
