import {Component, OnInit, OnChanges} from '@angular/core';
import { Router } from '@angular/router';

import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
    selector: 'books',
    templateUrl: './app/components/books/books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[];

    constructor(
        private router: Router,
        private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks()
            .then(books => this.books = books);
    }

}