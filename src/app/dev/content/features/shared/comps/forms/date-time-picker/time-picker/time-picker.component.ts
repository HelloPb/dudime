import { RegexParser } from '../../../../utils/regex-parser';
import { Observable, Subscription } from 'rxjs/Rx';
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
    this.time.setValue(`${this.timestamp.hour}:${this.timestamp.minute}`);
  }

  private setTimestamp(src: string): void {
    this.timestamp = RegexParser.getTimeStamp(src);
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.handleInputChanges(changes);
  }

  private handleInputChanges(changes: SimpleChanges) {
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
  }
}
