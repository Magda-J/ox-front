import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioeditComponent } from './bioedit.component';

describe('BioeditComponent', () => {
  let component: BioeditComponent;
  let fixture: ComponentFixture<BioeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
