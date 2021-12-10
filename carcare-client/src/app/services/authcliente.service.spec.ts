import { TestBed } from '@angular/core/testing';

import { AuthclienteService } from './authcliente.service';

describe('AuthclienteService', () => {
  let service: AuthclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
