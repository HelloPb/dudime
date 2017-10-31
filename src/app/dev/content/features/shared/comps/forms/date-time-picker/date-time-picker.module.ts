import { TimePickerFromToComponent } from './time-picker-from-to/time-picker-from-to.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TimePickerComponent, DatePickerComponent, DateTimePickerComponent, TimePickerFromToComponent],
  exports: [TimePickerComponent, DatePickerComponent, DateTimePickerComponent, TimePickerFromToComponent]
})
export class DateTimePickerModule { }
