import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
    selector: 'books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[] = [];

    constructor(
        private router: Router,
        private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks()
            .then(books => this.books = books);
    }

    gotoDetail(book: Book) {
        let link = ['/detail', book._id];
        this.router.navigate(link);
    }
}