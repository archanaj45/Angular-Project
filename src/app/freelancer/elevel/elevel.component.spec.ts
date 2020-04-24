import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevelComponent } from './elevel.component';

describe('ElevelComponent', () => {
  let component: ElevelComponent;
  let fixture: ComponentFixture<ElevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
