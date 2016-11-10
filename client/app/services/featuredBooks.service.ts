import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Book} from './../models/book';

@Injectable()
export class FeaturedBooksService {
    private featuredBooksUrl: string = 'api/featuredbooks';

    constructor(private http: Http) {}

    getBooks(date: Date): Promise<Book[]> {
        return this.http.get(`${this.featuredBooksUrl}/2016-11-10`)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

