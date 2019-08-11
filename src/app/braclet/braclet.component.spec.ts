import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracletComponent } from './braclet.component';

describe('BracletComponent', () => {
  let component: BracletComponent;
  let fixture: ComponentFixture<BracletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
