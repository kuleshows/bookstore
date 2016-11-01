import mongoose = require('mongoose');
import IShortUserDetails = require('IShortUserDetailsModel');

interface IBookRatingModel extends mongoose.Document {
    rating: number;
    timeStamp: Date;
    user: IShortUserDetails;
}

export = IBookRatingModel;