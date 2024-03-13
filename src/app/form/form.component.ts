import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropdownComponent, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
// export class FormComponent {

// }
export class FormComponent implements OnInit {
  showEvents: boolean = false;

  ngOnInit(): void {}
  toggleEvents() {
    this.showEvents = !this.showEvents;
  }

 



  event: any = {
      eventName: '',
      eventImg: '',    
      price: 0,
      tags: [],
      description: '',
    

  };

  onSubmit() {
    console.log(this.event)
  }

}
