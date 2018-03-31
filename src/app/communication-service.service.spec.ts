import { TestBed, inject } from '@angular/core/testing';

import { CommunicationServiceService } from './communication-service.service';

describe('CommunicationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationServiceService]
    });
  });

  it('should be created', inject([CommunicationServiceService], (service: CommunicationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
