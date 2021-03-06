import express = require('express');
import FeaturedBooksController = require('./../../controllers/FeaturedBooksController');

var router = express.Router();

class FeaturedBookRoutes {
    private _featuredBooksController: FeaturedBooksController;

    constructor () {
        this._featuredBooksController = new FeaturedBooksController();
    }
    get routes () {
        var controller = this._featuredBooksController;
        router.get("/featuredbooks/:_date", controller.retrieve);
        return router;
    }
}

Object.seal(FeaturedBookRoutes);
export = FeaturedBookRoutes;