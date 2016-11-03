import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from "../../services/book.service";

@Component({
    selector: 'book-slider',
    templateUrl: './app/components/bookSlider/book-slider.component.html'
})
export class BookSliderComponent implements OnInit {
    @Input() book: Book;

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
    }
}