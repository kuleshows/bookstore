import express = require("express");
import FeaturedBooksBusiness = require('./../app/business/FeaturedBooksBusiness');
import BookBusiness = require('./../app/business/BookBusiness');
import IBaseController = require("./BaseController");
import {DateHelper} from "../app/business/common/DateHelper";
import mongoose = require("mongoose");

class FeaturedBooksController implements IBaseController<FeaturedBooksBusiness> {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

    retrieve(req: express.Request, res: express.Response): void {
        try {
            var featuredBooksBusiness = new FeaturedBooksBusiness();

            var today: Date = DateHelper.parseDate(req.params._date); // assuming yyyy-mm-dd

            if (!today) {
                today = new Date();
            }

            var tomorrow = DateHelper.addDays(today, 1);

            var predicate =
            {
                "date": {
                    "$gte": today,
                    "$lt": tomorrow
                }
            };

            process.stdout.write(`Predicate: ${JSON.stringify(predicate)}`);

            featuredBooksBusiness.retrieve(predicate, (error, result) => {
                if (error) res.send({"error": "error"});
                else {
                    var bookIds = result[0].books.map(b => new mongoose.Types.ObjectId(b));

                    var bookBusiness = new BookBusiness();

                    bookBusiness.retrieve({ '_id': { $in: bookIds } }, (error, result) => {
                        if (error) res.send({"error": "error"});
                        else res.send(result);
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var featuredBooksBusiness = new FeaturedBooksBusiness();
            featuredBooksBusiness.findById(_id, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}

export = FeaturedBooksController;