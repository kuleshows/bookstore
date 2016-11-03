import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from "../../services/book.service";

@Component({
    selector: 'book-detail',
    templateUrl: './app/components/bookDetail/book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book: Book;

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {
    }

}