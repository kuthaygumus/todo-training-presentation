import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/models/model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: TodoItem[] = [];
  @Output() removeTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();

}
