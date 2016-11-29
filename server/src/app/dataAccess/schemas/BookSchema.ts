import DataAccess = require('./../DataAccess');
import IBookModel = require('./../../model/interfaces/IBookModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BookSchema {
    static get schema () {
        var schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            annotation: {
                type: String,
                required: true
            },
            releaseYear: {
                type: Number,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            genres: {
                type: [String],
                required: false
            },
            comments: {
                type: [],
                required: false
            },
            imageUrls: {
                type: [String],
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IBookModel>("Books", BookSchema.schema);
export = schema;