import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {AppComponent}  from './app.component';
import {routing}       from './app.routing';

import {HeroesComponent}      from './components/heroes/heroes.component';
import {DashboardComponent}   from './components/dashboard/dashboard.component';
import {HeroDetailComponent}  from './components/heroDetail/hero-detail.component';

import {BooksComponent} from './components/books/books.component';
import {BookDetailComponent} from './components/bookDetail/book-detail.component';
import {SliderComponent} from './components/slider/slider.component';
import {SiteHeaderComponent} from './components/siteHeader/site-header.component';
import {SiteFooterComponent} from './components/siteFooter/site-footer.component';
import {LeftSidebarComponent} from './components/leftSidebar/left-sidebar.component';
import {FeaturedItemsComponent} from './components/featuredItems/featured-items.component';
import {RecommendedItemsComponent} from './components/recommendedItems/recommended-items.component';
import {CategoryTabComponent} from './components/categoryTab/category-tab.component';

import {HeroService}  from './services/hero.service';
import {BookService}  from './services/book.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        BooksComponent,
        BookDetailComponent,
        SliderComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        LeftSidebarComponent,
        FeaturedItemsComponent,
        RecommendedItemsComponent,
        CategoryTabComponent
    ],
    providers: [
        HeroService,
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
