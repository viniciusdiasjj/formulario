import { TestBed } from '@angular/core/testing';

import { FormularioGuard } from './formulario.guard';

describe('FormularioGuard', () => {
  let guard: FormularioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormularioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
