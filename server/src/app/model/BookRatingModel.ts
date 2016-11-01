import IBookRatingModel = require('./interfaces/IBookRatingModel');
import IShortUserDetails = require('./interfaces/IShortUserDetailsModel');

class BookCommentModel {
    private _bookRatingModel: IBookRatingModel;

    constructor(bookRatingModel: IBookRatingModel) {
        this._bookRatingModel = bookRatingModel;
    }
    get rating (): number {
        return this._bookRatingModel.rating;
    }

    get user (): IShortUserDetails {
        return this._bookRatingModel.user;
    }

    get timeStamp (): Date {
        return this._bookRatingModel.timeStamp;
    }

}
Object.seal(BookCommentModel);
export =  BookCommentModel;