import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerFromToComponent } from './time-picker-from-to.component';

describe('TimePickerFromToComponent', () => {
  let component: TimePickerFromToComponent;
  let fixture: ComponentFixture<TimePickerFromToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerFromToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerFromToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
