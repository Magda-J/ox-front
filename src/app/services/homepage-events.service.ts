import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from '../cardprofile/cardprofile.component';
import { EventData } from '../card-home/card-home.component';
import { UserProfileData } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class HomepageEventsService {
  constructor(private http: HttpClient) {}

  getHomeEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>('https://ox-back.onrender.com/events');
   
  }
  getHomeEvent(id: string): Observable<EventData | undefined> {
    return this.getHomeEvents().pipe(
      map(events => events.find(event => event._id === id))
    );
  }

  getUserInfo(id: string): Observable<UserProfileData | undefined> {
    return this.http.get<UserProfileData>(`https://ox-back.onrender.com/user/event/${id}/creator`);
}

}
