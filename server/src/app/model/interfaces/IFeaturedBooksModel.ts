import mongoose = require('mongoose');

interface IFeaturedBooksModel extends mongoose.Document {
    date: Date;
    books: [any]
}

export = IFeaturedBooksModel;