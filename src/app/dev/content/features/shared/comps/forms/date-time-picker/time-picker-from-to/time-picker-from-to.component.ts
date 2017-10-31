import { from } from 'rxjs/observable/from';
import { selector } from 'rxjs/operator/publish';
import { range } from 'rxjs/observable/range';
import { TimePickerRange } from '../../../../models/date-time/time-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker-from-to',
  templateUrl: './time-picker-from-to.component.html',
  styleUrls: ['./time-picker-from-to.component.css']
})
export class TimePickerFromToComponent implements OnInit, OnDestroy {

  public range: TimePickerRange;

  private formGroup: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.create();
    this.subscription = Observable.of(this.range).subscribe(this.initialize);
  }

  private create(): void {
    this.formGroup = this.formBuilder.group({
      from: ['09:00', Validators.required],
      to: ['17:00', Validators.required]
    });
  }

  private initialize(src: TimePickerRange) {
    this.formGroup.reset(Object.assign({}, { from: src.from, to: src.to }));
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
