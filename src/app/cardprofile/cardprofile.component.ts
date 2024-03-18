import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardprofile.component.html',
  styleUrl: './cardprofile.component.css'
})
export class CardprofileComponent {
  @Input() events: any[] = [];
}
