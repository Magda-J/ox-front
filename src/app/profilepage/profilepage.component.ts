import { Component } from '@angular/core';
import { BioeditComponent } from '../bioedit/bioedit.component';
import { CreateexperiencebuttonComponent } from '../createexperiencebutton/createexperiencebutton.component';
import { CardprofileComponent } from '../cardprofile/cardprofile.component';


@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [BioeditComponent, CreateexperiencebuttonComponent, CardprofileComponent],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {

  public sampleEvents = [

    { title: 'Event 3', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710088912041-34d1767d376a?q=80&w=3808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 1', username: 'username', rating: 2, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 2', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 5', username: 'username', rating: 3, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 7', username: 'username', rating: 1, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 8', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710069455079-2059d3cefe91?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 3', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710088912041-34d1767d376a?q=80&w=3808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 1', username: 'username', rating: 2, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 2', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 5', username: 'username', rating: 3, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 7', username: 'username', rating: 1, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 8', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710069455079-2059d3cefe91?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 3', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710088912041-34d1767d376a?q=80&w=3808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 1', username: 'username', rating: 2, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 2', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 5', username: 'username', rating: 3, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 7', username: 'username', rating: 1, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 8', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710069455079-2059d3cefe91?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 1', username: 'username', rating: 2, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 2', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 5', username: 'username', rating: 3, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 7', username: 'username', rating: 1, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 8', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710069455079-2059d3cefe91?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 3', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1710088912041-34d1767d376a?q=80&w=3808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 1', username: 'username', rating: 2, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 2', username: 'username', rating: 5, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 5', username: 'username', rating: 3, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 7', username: 'username', rating: 1, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 6', username: 'username', rating: 4, price: '£20', imageUrl: 'https://images.unsplash.com/photo-1708771641703-0df3d179cec3?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Event 4', username: 'username', rating: 4, price: '£20', imageUrl: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];



}
