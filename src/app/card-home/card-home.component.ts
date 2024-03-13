import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css'],
})
export class CardHomeComponent {
  @Input() events: any[] = [];

}