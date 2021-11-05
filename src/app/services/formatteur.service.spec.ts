import { TestBed } from '@angular/core/testing';

import { FormatteurService } from './formatteur.service';

describe('FormatteurService', () => {
  let service: FormatteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
