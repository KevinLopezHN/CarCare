import { TestBed } from '@angular/core/testing';

import { TokenInterceptoradministradorService } from './token-interceptoradministrador.service';

describe('TokenInterceptoradministradorService', () => {
  let service: TokenInterceptoradministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptoradministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
