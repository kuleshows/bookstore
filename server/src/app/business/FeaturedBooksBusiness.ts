import IFeaturedBooksBusiness = require('./interfaces/IFeaturedBooksBusiness');
import IFeaturedBooksModel = require('./../model/interfaces/IFeaturedBooksModel');
import IFeaturedBooksRepository = require('./../repository/FeaturedBooksRepository');
import FeaturedBooksRepository = require("../repository/FeaturedBooksRepository");

class FeaturedBooksBusiness implements IFeaturedBooksBusiness {
    private _featuredBooksRepository: IFeaturedBooksRepository;

    constructor() {
        this._featuredBooksRepository = new FeaturedBooksRepository();
    }

    create(item: IFeaturedBooksModel, callback: (error: any, result: any) => void) {
        this._featuredBooksRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._featuredBooksRepository.retrieve(callback);
    }


    findById(_id: string, callback: (error: any, result: IFeaturedBooksModel) => void) {
        this._featuredBooksRepository.findById(_id, callback);
    }

    update(_id: string, item: IFeaturedBooksModel, callback: (error: any, result: any) => void) {}

    delete(_id: string, callback: (error: any, result: any) => void) {}
}

Object.seal(FeaturedBooksBusiness);
export = FeaturedBooksBusiness;