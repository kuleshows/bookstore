import mongoose = require('mongoose');
import IShortUserDetails = require('./IShortUserDetailsModel');

interface IBookCommentModel extends mongoose.Document {
    text: string;
    timeStamp: Date;
    user: IShortUserDetails;
}

export = IBookCommentModel;