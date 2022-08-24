import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = []
  constructor(private commentsService: CommentsService) {
    this.commentsService.getComments()
      .then(comments => this.comments = comments);
  }

  ngOnInit(): void {
  }

}
