import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";

@Component({
    selector: 'book-detail',
    templateUrl: './app/components/bookDetail/book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book: Book;
}