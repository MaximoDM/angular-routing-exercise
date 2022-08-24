import { Injectable } from '@angular/core';
import axios from 'axios';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'https://jsonplaceholder.typicode.com/comments';
  constructor() { }

  getComments() {
    return axios.get<Comment[]>(this.url)
      .then(res => res.data);
  }

  getComment(id: number) {
    return axios.get<Comment>(`${this.url}/${id}`)
      .then(res => res.data);
  }
}
