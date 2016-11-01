import mongoose = require("mongoose");
import IBookRating = require("IBookRating");
import IBookComment = require("IBookComment");

interface IBookModel extends mongoose.Document {
    title: string;
    annotation: string;
    releaseYear: number;
    author: string;
    language: string;
    genres: string[];
    isbn: string;
    ratings: IBookRating[];
    comments: IBookComment[];
}

export = IBookModel;