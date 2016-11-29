import express = require("express");
import BookBusiness = require('./../app/business/BookBusiness');
import IBaseController = require("./BaseController");
import IBookModel = require('./../app/model/interfaces/IBookModel');

class BookController implements IBaseController<BookBusiness> {
    create(req: express.Request, res: express.Response): void {
        console.log('create request');

        try {
            var book: IBookModel = <IBookModel>req.body;
            var bookBusiness = new BookBusiness();
            bookBusiness.create(book, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }

        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var book: IBookModel = <IBookModel>req.body;
            var _id: string = req.params._id;
            var bookBusiness = new BookBusiness();
            bookBusiness.update(_id, book, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var bookBusiness = new BookBusiness();
            bookBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var bookBusiness = new BookBusiness();
            bookBusiness.retrieve({}, (error, result) => {
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
            var bookBusiness = new BookBusiness();
            bookBusiness.findById(_id, (error, result) => {
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

export = BookController;