import IBookBusiness = require('./interfaces/IBookBusiness');
import IBookModel = require('./../model/interfaces/IBookModel');
import BookModel = require('./../model/BookModel');
import BookRepository = require("../repository/BookRepository");

class BookBusiness implements IBookBusiness {
    private _bookRepository: BookRepository;

    constructor() {
        this._bookRepository = new BookRepository();
    }

    create(item: IBookModel, callback: (error: any, result: any) => void) {
        this._bookRepository.create(item, callback);
    }

    retrieve(predicate: any, callback: (error: any, result: any) => void) {
        this._bookRepository.retrieve(predicate, callback);
    }

    update(_id: string, item: IBookModel, callback: (error: any, result: any) => void) {
        this._bookRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);
            else
                this._bookRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._bookRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IBookModel) => void) {
        this._bookRepository.findById(_id, callback);
    }
}

Object.seal(BookBusiness);
export = BookBusiness;