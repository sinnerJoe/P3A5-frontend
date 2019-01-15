import { TestBed } from '@angular/core/testing';

import { ParsedDataManagerService } from './parsed-data-manager.service';

describe('ParsedDataManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsedDataManagerService = TestBed.get(ParsedDataManagerService);
    expect(service).toBeTruthy();
  });
});
