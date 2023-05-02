import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberatoriaComponent } from './liberatoria.component';

describe('LiberatoriaComponent', () => {
  let component: LiberatoriaComponent;
  let fixture: ComponentFixture<LiberatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
