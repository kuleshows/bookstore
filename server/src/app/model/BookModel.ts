import IBookModel = require('./interfaces/IBookModel');
import IBookRating = require('./interfaces/IBookRatingModel');
import IBookComment = require('./interfaces/IBookCommentModel');

class BookModel  {
    private _bookModel: IBookModel;

    constructor(bookModel: IBookModel) {
        this._bookModel = bookModel;
    }

    get title(): string {
        return this._bookModel.title;
    }

    get annotation(): string {
        return this._bookModel.annotation;
    }

    get releaseYear(): number {
        return this._bookModel.releaseYear;
    }

    get author(): string {
        return this._bookModel.author;
    }

    get genres(): string[] {
        return this._bookModel.genres;
    }

    get isbn(): string {
        return this._bookModel.isbn;
    }

    get ratings(): IBookRating[] {
        return this._bookModel.ratings;
    }

    get comments(): IBookComment[] {
        return this._bookModel.comments;
    }
}

export = BookModel;