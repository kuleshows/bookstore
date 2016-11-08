import RepositoryBase = require('./BaseRepository');
import IFeaturedBooksModel = require('./../model/interfaces/IFeaturedBooksModel');
import FeaturedBooksSchema = require('./../dataAccess/schemas/FeaturedBooksSchema');

class FeaturedBooksRepository extends RepositoryBase<IFeaturedBooksModel> {
    constructor() {
      super(FeaturedBooksSchema);
    }
}

Object.seal(FeaturedBooksRepository);
export = FeaturedBooksRepository;