import mongoose = require('mongoose');
import BookBusiness = require('./../../app/business/BookBusiness');
import IBookModel = require('./../../app/model/interfaces/IBookModel');
import fs = require('fs');


class Seeder {
    private printError(error): void {
        console.log(`Error: ${error}`);
    }

    private printResult(result, property): void {
        console.log(`Added book: ${result[property]}`);
    }

    seed(): void {
        var bookBusiness = new BookBusiness();

        var booksData;
        fs.readFile('./books.json', 'utf8', (err, data) => {
            if (err) throw err;
            booksData = JSON.parse(data);

            if (!booksData || !booksData.data) {
                console.log('Error reading seed data');
                return;
            }

            for (var item of booksData.data) {
                bookBusiness.create(<IBookModel>item, (error, result) => {
                    if (error) {
                        this.printError(error);
                    }
                    else {
                        this.printResult(result, 'title');
                    }
                });
            }
        });
    }
}

var seeder = new Seeder();
seeder.seed();