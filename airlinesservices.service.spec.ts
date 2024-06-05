import { TestBed } from '@angular/core/testing';

import { AirlinesservicesService } from './airlinesservices.service';

describe('AirlinesservicesService', () => {
  let service: AirlinesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
