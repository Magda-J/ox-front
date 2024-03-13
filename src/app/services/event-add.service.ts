import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class EventAddService {

  constructor(private apiService: ApiService) { }

  getAllEvents(url: string): Observable<Event[]> {
    return this.apiService.get<Event[]>(url);
  }
}
