import { RouterModule, Routes } from '@angular/router';
import { EventpageComponent } from './eventpage/eventpage.component';
import { FormComponent } from './form/form.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: 'eventpage/:eventid/:dateindex', title: 'Event', 
        loadComponent: () => import('./booking/booking.component').then((c)=>c.BookingComponent)
        },
  {
    path: 'eventpage/:id',
    title: 'Event',
    loadComponent: () =>
      import('./eventpage/eventpage.component').then(
        (c) => c.EventpageComponent
      ),

    // component: EventpageComponent,
  },
  {
    path: 'form',
    title: 'Form',
    component: FormComponent,
  },
  {
    path: 'profilepage',
    title: 'Profile Page',
    component: ProfilepageComponent,
  },
  {
    path: '',
    title: 'Homepage',
    component: HomepageComponent,
  },
];
