import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {AppComponent}  from './app.component';
import {routing}       from './app.routing';

import {DashboardComponent}   from './components/dashboard/dashboard.component';

import {BookDetailComponent} from './components/bookDetail/book-detail.component';
import {SliderComponent} from './components/slider/slider.component';
import {SliderItemComponent} from './components/sliderItem/slider-item.component';
import {SiteHeaderComponent} from './components/siteHeader/site-header.component';
import {SiteFooterComponent} from './components/siteFooter/site-footer.component';
import {LeftSidebarComponent} from './components/leftSidebar/left-sidebar.component';
import {FeaturedItemsComponent} from './components/featuredItems/featured-items.component';
import {RecommendedItemsComponent} from './components/recommendedItems/recommended-items.component';
import {CategoryTabComponent} from './components/categoryTab/category-tab.component';

import {BookService}  from './services/book.service';
import {CategoryMenuItemComponent} from "./components/categoryMenuItem/category-menu-item.component";
import {FeaturedBooksService} from "./services/featuredBooks.service";

import {RemoveHostDirective} from './directives/remove-host.directive';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        BookDetailComponent,
        SliderComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        LeftSidebarComponent,
        FeaturedItemsComponent,
        RecommendedItemsComponent,
        CategoryTabComponent,
        CategoryMenuItemComponent,
        SliderItemComponent,
        RemoveHostDirective
    ],
    providers: [
        BookService,
        FeaturedBooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
