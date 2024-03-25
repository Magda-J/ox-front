import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpageUserComponent } from './eventpageUser.component';

describe('EventpageComponent', () => {
  let component: EventpageUserComponent;
  let fixture: ComponentFixture<EventpageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventpageUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventpageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
