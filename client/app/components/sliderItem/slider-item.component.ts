import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";

@Component({
    selector: 'slider-item',
    templateUrl: './app/components/sliderItem/slider-item.component.html'
})
export class SliderItemComponent {
    @Input() book: Book;
    @Input() isActive: boolean;
}