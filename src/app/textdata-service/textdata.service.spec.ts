import { TestBed } from '@angular/core/testing';

import { TextdataService } from './textdata.service';

describe('TextdataService', () => {
  let service: TextdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
