import RepositoryBase = require('./BaseRepository');
import IBookModel = require('./../model/interfaces/IBookModel');
import BookSchema = require('./../dataAccess/schemas/BookSchema');

class BookRepository extends RepositoryBase<IBookModel> {
    constructor() {
      super(BookSchema);
    }
}

Object.seal(BookRepository);
export = BookRepository;