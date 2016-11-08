// Fill 10 days starting from today with 3-5 featured books

import mongoose = require('mongoose');
import FeaturedBookBusiness = require('./../../app/business/FeaturedBooksBusiness');
import BookBusiness = require('./../../app/business/BookBusiness');
import IFeaturedBooksModel = require('./../../app/model/interfaces/IFeaturedBooksModel');
import fs = require('fs');
import {MathHelper} from "../../app/business/common/MathHelper";

export class Seeder {
    private daysCount = 10;
    private minBooks = 3;
    private maxBooks = 5;

    private printError(error): void {
        console.log(`Error: ${error}`);
    }

    private printResult(result, property): void {
        console.log(`Added book: ${result[property]}`);
    }

    seed(): void {
        var featuredBooksBusiness = new FeaturedBookBusiness();
        var bookBusiness = new BookBusiness();

        var books = bookBusiness.retrieve((error, books) => {
            var booksTotal = books.length;

            var featuredDate = new Date();

            for (var i = 0; i < this.daysCount; i++) {
                var booksCount = MathHelper.nextIntRandomInRange(this.minBooks, this.maxBooks);

                var featuredBooks = [];

                for (var j = 0; j < booksCount; j++) {
                    var book = books[MathHelper.nextIntRandomInRange(0, booksTotal - 1)];
                    while (featuredBooks.indexOf(book._id) != -1) {
                        book = books[MathHelper.nextIntRandomInRange(0, booksTotal - 1)];
                    }

                    featuredBooks.push(book._id);
                }

                featuredBooksBusiness.create(<IFeaturedBooksModel>{ date: featuredDate, books: featuredBooks }, (error, result) => {
                    if (error) {
                        this.printError(error);
                    }
                    else {
                        this.printResult(result, 'date');
                    }
                });

                featuredDate.setDate(featuredDate.getDate() + 1);
            }
        });
    }
}

var seeder = new Seeder();
seeder.seed();