import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";
import {Category} from "../../models/category";
import {FeaturedBooksService} from "../../services/featuredBooks.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    books: Book[] = [];
    categories: Category[] = [];
    featuredBooks: Book[] = [];

    constructor(private router: Router,
                private bookService: BookService,
                private featuredBooksService: FeaturedBooksService) {
    }

    ngOnInit() {
        this.bookService.getBooks()
            .then(books => {
                this.books = books;

                var categoriesArray = [].concat.apply([], books.map(b => b.genres));

                this.categories = categoriesArray.filter((v, i, a) => a.indexOf(v) === i) // distinct
                    .map(name =>
                        new Category(name,
                            this.getCategoryLink(name),
                            books.filter(b => b.genres.indexOf(name) > -1).length));
            });
        this.featuredBooksService.getBooks(new Date())
            .then(books => {
                this.featuredBooks = books;
            });
    }

    getCategoryLink(categoryName) {
        return `?c=${encodeURIComponent(categoryName)}`;
    }

    gotoDetail(book: Book) {
        let link = ['/detail', book._id];
        this.router.navigate(link);
    }
}