import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelA } from './panel-a';

describe('PanelA', () => {
  let component: PanelA;
  let fixture: ComponentFixture<PanelA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
