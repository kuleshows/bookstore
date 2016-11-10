import {Component, OnInit, Input} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
    selector: 'book-detail-page',
    templateUrl: './app/components/bookDetailPage/book-detail-page.component.html'
})

export class BookDetailPageComponent implements OnInit {
    @Input() book: Book;

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('init book');

        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            console.log(`id = ${id}`);
            this.bookService.getBook(id)
                .then(book => {
                    this.book = book;
                    console.log(JSON.stringify(book));
                });
        });
    }
}