import {Component} from '@angular/core';
import {Comment} from './../../models/comment';
import {ShortUserDetails} from "../../models/shortUserDetails";

@Component({
    selector: 'comment-form',
    templateUrl: './app/components/commentForm/comment-form.component.html'
})
export class CommentFormComponent {
    private model: Comment;

    constructor() {
        this.model = this.newComment();
    }

    newComment() {
        return new Comment("", "", new ShortUserDetails("", ""));
    }

    onSubmit(form) {
        console.log(JSON.stringify(this.model));

        this.model = this.newComment();
        form.reset();
    }


}