import { Component } from '@angular/core';
import { CommentService } from './services/comment.service';
import { Comment } from './model/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-practice';

  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe((response) => {
      this.comments = response;
      
    });
  }
}
