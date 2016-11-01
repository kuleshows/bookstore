import IBookCommentModel = require('./interfaces/IBookCommentModel');
import IShortUserDetails = require('./interfaces/IShortUserDetailsModel');

class BookCommentModel {
    private _bookCommentModel: IBookCommentModel;

    constructor(bookCommentModel: IBookCommentModel) {
        this._bookCommentModel = bookCommentModel;
    }
    get text (): string {
        return this._bookCommentModel.text;
    }

    get user (): IShortUserDetails {
        return this._bookCommentModel.user;
    }

    get timeStamp (): Date {
        return this._bookCommentModel.timeStamp;
    }

}
Object.seal(BookCommentModel);
export =  BookCommentModel;