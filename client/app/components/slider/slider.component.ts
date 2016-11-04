import {Component, Input} from '@angular/core';
import {Book} from './../../models/book';

@Component({
    selector: 'slider',
    templateUrl: './app/components/slider/slider.component.html'
})
export class SliderComponent {
    @Input()
    items: Book[] = [];
}