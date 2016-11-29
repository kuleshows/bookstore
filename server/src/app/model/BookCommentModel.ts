import IBookReviewModel = require('./interfaces/IBookReviewModel');
import IShortUserDetails = require('./interfaces/IShortUserDetailsModel');

class BookReviewModel {
    private _bookReviewModel: IBookReviewModel;

    constructor(bookReviewModel: IBookReviewModel) {
        this._bookReviewModel = bookReviewModel;
    }
    get text (): string {
        return this._bookReviewModel.text;
    }

    get user (): IShortUserDetails {
        return this._bookReviewModel.user;
    }

    get timeStamp (): Date {
        return this._bookReviewModel.timeStamp;
    }

}
Object.seal(BookReviewModel);
export =  BookReviewModel;