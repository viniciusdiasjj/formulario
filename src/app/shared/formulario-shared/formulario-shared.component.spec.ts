import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSharedComponent } from './formulario-shared.component';

describe('FormularioSharedComponent', () => {
  let component: FormularioSharedComponent;
  let fixture: ComponentFixture<FormularioSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
