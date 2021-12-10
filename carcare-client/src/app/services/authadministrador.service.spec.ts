import { TestBed } from '@angular/core/testing';

import { AuthadministradorService } from './authadministrador.service';

describe('AuthadministradorService', () => {
  let service: AuthadministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthadministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
