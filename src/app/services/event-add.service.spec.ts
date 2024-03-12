import { TestBed } from '@angular/core/testing';

import { EventAddService } from './event-add.service';

describe('EventAddService', () => {
  let service: EventAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
