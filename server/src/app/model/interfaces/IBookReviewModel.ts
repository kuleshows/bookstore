import mongoose = require('mongoose');
import IShortUserDetails = require('./IShortUserDetailsModel');

interface IBookReviewModel extends mongoose.Document {
    text: string;
    timeStamp: Date;
    user: IShortUserDetails;
}

export = IBookReviewModel;