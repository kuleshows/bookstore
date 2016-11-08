export class Category {
    name: string;
    link: string;
    bookCount: number;

    constructor(name, link, bookCount) {
        this.name = name;
        this.link = link;
        this.bookCount = bookCount;
    }
}