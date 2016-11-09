import DataAccess = require('./../DataAccess');
import IFeaturedBooksModel = require('./../../model/interfaces/IFeaturedBooksModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class FeaturedBooksSchema {
    static get schema() {
        var schema = mongoose.Schema({
            date: {
                type: Date,
                required: true
            },
            books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Books'}]
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IFeaturedBooksModel>("FeaturedBooks", FeaturedBooksSchema.schema);
export = schema;