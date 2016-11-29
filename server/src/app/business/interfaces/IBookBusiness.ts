import BaseBusiness = require("./../BaseBusiness");
import IBookModel = require("./../../model/interfaces/IBookModel");
import Comment = require('../../model/BookCommentModel')

interface IBookBusiness extends BaseBusiness<IBookModel> {
}
export = IBookBusiness;