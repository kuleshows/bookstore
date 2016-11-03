import {Component, Input} from '@angular/core';
import {Book} from "../../models/book";

@Component({
    selector: 'book-detail',
    templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book: Book;

    goBack() {
        window.history.back();
    }
}