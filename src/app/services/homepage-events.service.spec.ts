import { TestBed } from '@angular/core/testing';

import { HomepageEventsService } from './homepage-events.service';

describe('HomepageEventsService', () => {
  let service: HomepageEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
