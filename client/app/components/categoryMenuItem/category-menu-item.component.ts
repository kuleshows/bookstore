import {Component, Input} from '@angular/core';
import {Category} from "../../models/category";

@Component({
    selector: 'category-menu-item',
    templateUrl: './app/components/categoryMenuItem/category-menu-item.component.html'
})
export class CategoryMenuItemComponent {
    @Input() category: Category;
}