import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarRingComponent } from './ear-ring.component';

describe('EarRingComponent', () => {
  let component: EarRingComponent;
  let fixture: ComponentFixture<EarRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
