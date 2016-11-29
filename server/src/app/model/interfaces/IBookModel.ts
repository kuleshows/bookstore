import mongoose = require("mongoose");
import IBookRating = require("./IBookRatingModel");
import IBookReview = require("./IBookReviewModel");

interface IBookModel extends mongoose.Document {
    title: string;
    annotation: string;
    releaseYear: number;
    author: string;
    language: string;
    genres: string[];
    isbn: string;
    ratings: IBookRating[];
    comments: IBookReview[];
    imageUrls: string[];
}

export = IBookModel;