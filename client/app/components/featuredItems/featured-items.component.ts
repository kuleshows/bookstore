import {Component, Input} from '@angular/core';
import {Book} from './../../models/book';

@Component({
    selector: 'featured-items',
    templateUrl: './app/components/featuredItems/featured-items.component.html'
})
export class FeaturedItemsComponent {
    @Input() books: Book[] = [];

}