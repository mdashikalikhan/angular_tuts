import { TestBed } from '@angular/core/testing';

import { SessionTimeOutService } from './session-time-out-service';

describe('SessionTimeOutService', () => {
  let service: SessionTimeOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionTimeOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
