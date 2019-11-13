import { TestBed, inject } from '@angular/core/testing';

import { SentryService } from './sentry.service';

describe('SentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentryService]
    });
  });

  it('should be created', inject([SentryService], (service: SentryService) => {
    expect(service).toBeTruthy();
  }));
});
