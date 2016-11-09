import moment = require('moment');

export class DateHelper {
    public static parseDate(input: string): Date {
        return moment.utc(input, 'YYYY-MM-DD').toDate();
    }

    public static addDays(date: Date, days: number): Date {
        return moment(date).add(days, 'days').toDate();
    }
}
