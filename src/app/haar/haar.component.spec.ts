import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaarComponent } from './haar.component';

describe('HaarComponent', () => {
  let component: HaarComponent;
  let fixture: ComponentFixture<HaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
