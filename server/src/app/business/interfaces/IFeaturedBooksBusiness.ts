import IFeaturedBooksModel = require("./../../model/interfaces/IFeaturedBooksModel");
import Read = require("../common/Read");

interface IFeaturedBooksBusiness extends Read<IFeaturedBooksModel> {
}
export = IFeaturedBooksBusiness;