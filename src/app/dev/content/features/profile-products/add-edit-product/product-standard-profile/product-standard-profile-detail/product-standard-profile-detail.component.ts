import { ValidationService } from '../../../../shared/services/validation/validation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TimePickerRange } from '../../../../shared/models/date-time/time-picker';
import {
  TimePickerFromToComponent,
} from '../../../../shared/comps/forms/date-time-picker/time-picker-from-to/time-picker-from-to.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-standard-profile-detail',
  templateUrl: './product-standard-profile-detail.component.html',
  styleUrls: ['./product-standard-profile-detail.component.css'],
  entryComponents: [TimePickerFromToComponent]
})
export class ProductStandardProfileDetailComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private validationService: ValidationService
  ) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      sun: this.formBuilder.array([]),
      mon: this.formBuilder.array([]),
      tue: this.formBuilder.array([]),
      wed: this.formBuilder.array([]),
      thu: this.formBuilder.array([]),
      fri: this.formBuilder.array([]),
      sat: this.formBuilder.array([])
    });

    ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].forEach(day => this.setDefaultBussinessHoursForWeekDay(day));
  }

  private setDefaultBussinessHoursForWeekDay(day: string): void {
    this.formGroup.setControl(day, this.setTimeRangeForm(
      [
        { id: 1, from: '09:00', to: '22:00' }
      ]));
  }

  private setTimeRangeForm(ranges: TimePickerRange[]) {
    return this.formBuilder.array(ranges.map(x => this.timeRangeForm(x)));
  }

  private timeRangeForm(range: TimePickerRange): FormGroup {
    return this.formBuilder.group({
      id: range.id,
      from: [range.from, Validators.required],
      to: [range.to, Validators.required]
    });
  }

  public ngOnInit(): void {
  }
}
