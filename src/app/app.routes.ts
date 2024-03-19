import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'eventpage/:eventid/:dateindex', title: 'Event', 
        loadComponent: () => import('./booking/booking.component').then((c)=>c.BookingComponent)
        }
];
