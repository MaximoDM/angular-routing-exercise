import { Injectable } from '@angular/core';
import axios from 'axios';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor() { }

  getTodos() {
    return axios.get<Todo[]>(this.url)
      .then(res => res.data);
  }

  getTodoById(id: number) {
    return axios.get<Todo>(`${this.url}/${id}`)
      .then(res => res.data);
  }
}
