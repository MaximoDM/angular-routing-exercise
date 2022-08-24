import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  constructor(private todosService: TodosService) {
    this.todosService.getTodos()
      .then(todos => this.todos = todos);
  }

  ngOnInit(): void {
  }

}
