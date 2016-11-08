import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
    selector: 'book-detail-page',
    templateUrl: './app/components/bookDetailPage/book-detail-page.html'
})

export class BookDetailPageComponent implements OnInit {
    book: Book;

    constructor(
        private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBook('')
            .then(book => this.book = book);
    }

}