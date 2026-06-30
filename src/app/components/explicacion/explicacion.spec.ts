import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explicacion } from './explicacion';

describe('Explicacion', () => {
  let component: Explicacion;
  let fixture: ComponentFixture<Explicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
