import express = require("express");
import FeaturedBooksBusiness = require('./../app/business/FeaturedBooksBusiness');
import IBaseController = require("./BaseController");
import IFeaturedBooksModel = require('./../app/model/interfaces/IFeaturedBooksModel');

class FeaturedBooksController implements IBaseController<FeaturedBooksBusiness> {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

    retrieve(req: express.Request, res: express.Response): void {
        try {
            var featuredBooksBusiness = new FeaturedBooksBusiness();
            featuredBooksBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var featuredBooksBusiness = new FeaturedBooksBusiness();
            featuredBooksBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}

export = FeaturedBooksController;