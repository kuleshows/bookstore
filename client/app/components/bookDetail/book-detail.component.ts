import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from "../../services/book.service";

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
    @Input() book: Book;

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.bookService.getBook(id)
                .then(book => this.book = book);
        });
    }

    goBack() {
        window.history.back();
    }
}