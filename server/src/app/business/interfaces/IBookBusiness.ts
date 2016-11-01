import BaseBusiness = require("./../BaseBusiness");
import IBookModel = require("./../../model/interfaces/IBookModel");

interface IBookBusiness extends BaseBusiness<IBookModel> {

}
export = IBookBusiness;