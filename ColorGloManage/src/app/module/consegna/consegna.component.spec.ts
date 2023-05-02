import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsegnaComponent } from './consegna.component';

describe('ConsegnaComponent', () => {
  let component: ConsegnaComponent;
  let fixture: ComponentFixture<ConsegnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsegnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsegnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
