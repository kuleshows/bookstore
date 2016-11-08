import {Component, Input} from '@angular/core';
import {Category} from "../../models/category";

@Component({
    selector: 'left-sidebar',
    templateUrl: './app/components/leftSidebar/left-sidebar.component.html'
})
export class LeftSidebarComponent {
    @Input() categories: Category[];
}