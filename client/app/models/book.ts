import {Comment} from "./comment";

export class Book {
    _id: string;
    title: string;
    annotation: string;
    releaseYear: number;
    author: string;
    language: string;
    genres: string[];
    isbn: string;
    imageUrls: string[];
    comments: Comment[];

    get mainImageUrl(): string {
        console.log(this.imageUrls);
        return (this.imageUrls && this.imageUrls.length > 0) ? this.imageUrls[0] : 'xx';
    }
}