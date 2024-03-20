import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexperiencebuttonComponent } from './createexperiencebutton.component';

describe('CreateexperiencebuttonComponent', () => {
  let component: CreateexperiencebuttonComponent;
  let fixture: ComponentFixture<CreateexperiencebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateexperiencebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateexperiencebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
