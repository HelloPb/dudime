import { RegexParser } from '../../../../utils/regex-parser';
import { Subscription } from 'rxjs/Rx';
import { TimePicker } from '../../../../models/date-time/time-picker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public time: FormControl;
  private timestamp: TimePicker;
  private subsription: Subscription;

  constructor() {
    this.create();
  }

  private create(): void {
    this.timestamp = new TimePicker();
  }

  private valueChanges(): void {
    if (this.time == null) {
      return;
    }
    this.subsription = this.time.valueChanges.subscribe(this.setTimestamp);
  }

  private setTimestamp(src: string): void {
    this.timestamp = RegexParser.getTimeStamp(src);
  }

  // Angular Lifecyle Hooks
  public ngOnInit(): void {
    this.valueChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.handleInputChanges(changes);
  }

  private handleInputChanges(changes: SimpleChanges) {
    // input is an observable form control and
    // it is subscribed in valueChanges() function. So no need to look for change events in this method
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        if (chng.currentValue == null) {
          continue;
        }
        this.setTimestamp(chng.currentValue.value);
      }
    }
  }

  public ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
