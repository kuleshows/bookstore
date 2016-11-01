import mongoose = require('mongoose');

interface IShortUserDetailsModel extends mongoose.Document {
    name: string;
    profileUrl: string;
}

export = IShortUserDetailsModel;