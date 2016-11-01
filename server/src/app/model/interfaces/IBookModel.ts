import mongoose = require("mongoose");
import IBookRating = require("./IBookRatingModel");
import IBookComment = require("./IBookCommentModel");

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