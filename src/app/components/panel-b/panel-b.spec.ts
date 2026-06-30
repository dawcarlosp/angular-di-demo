import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelB } from './panel-b';

describe('PanelB', () => {
  let component: PanelB;
  let fixture: ComponentFixture<PanelB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
