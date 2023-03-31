import { TestBed } from '@angular/core/testing';

import { FormularioSharedGuard } from './formulario-shared.guard';

describe('FormularioSharedGuard', () => {
  let guard: FormularioSharedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormularioSharedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
