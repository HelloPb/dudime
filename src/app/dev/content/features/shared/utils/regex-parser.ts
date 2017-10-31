import { TimePicker } from '../models/date-time/time-picker';


export class RegexParser {
    public static getTimeStamp(src: string): TimePicker {
        let time: TimePicker;

        const reg = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/i);

        if (reg.test(src)) {

            const match = reg.exec(src);

            time = new TimePicker();
            time.hour = match[1];
            time.minute = match[2];

        }
        return time;
    }
}
