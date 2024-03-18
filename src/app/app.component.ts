import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookingComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ox-front';
}
