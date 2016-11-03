import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
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