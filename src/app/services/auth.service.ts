import { Injectable, signal } from '@angular/core';
import { UserData } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUserSig = signal<UserData | undefined | null>(undefined)
  
}
