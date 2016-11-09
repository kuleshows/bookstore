import moment = require('moment');

export class DateHelper {
    private static format: string = 'YYYY-MM-DD';

    public static parseDate(input: string): Date {
        return moment.utc(input, DateHelper.format).toDate();
    }

    public static addDays(date: Date, days: number): Date {
        return moment(date).add(days, 'days').toDate();
    }

    public static toString(input: Date): string {
        return moment.utc(input).format(DateHelper.format);
    }
}
