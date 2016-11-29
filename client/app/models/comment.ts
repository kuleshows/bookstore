import {ShortUserDetails} from "./shortUserDetails";

export class Comment {
    public get diag(): string {
        return this.text + ' ' + this.timeStamp + ' ' + this.user.name;
    }

    constructor(
       public text: string,
       public timeStamp: string,
       public user: ShortUserDetails
    ) {}
}