import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Book} from "../../models/book";

@Component({
    selector: 'book-images',
    templateUrl: './app/components/bookImages/book-images-component.html'
})

export class BookImagesComponent {
    @Input() book: Book;
}