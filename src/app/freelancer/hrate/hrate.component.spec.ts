import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrateComponent } from './hrate.component';

describe('HrateComponent', () => {
  let component: HrateComponent;
  let fixture: ComponentFixture<HrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
