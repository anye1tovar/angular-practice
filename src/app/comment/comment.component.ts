import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() name: string = '';
  @Input() body: string = '';

  isLiked: boolean = false;
  imgPath: string = 'assets/images/like-outline.svg';

  like() {
    this.isLiked = !this.isLiked;
    this.imgPath = this.isLiked
      ? 'assets/images/like.svg'
      : 'assets/images/like-outline.svg';
  }
}
