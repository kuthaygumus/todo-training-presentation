import { Injectable } from '@angular/core';
import DATA from './data.json';
import { TodoItem } from 'src/models/model';

@Injectable({
  providedIn: 'root',
})
export class GenericDataService {
  constructor() {}

  getAllTodos(): TodoItem[] {
    return DATA.todos;
  }

  getCompletedTodos(): TodoItem[] {
    return DATA.todos.filter((t: TodoItem) => t.action);
  }

  getAllMovies() {
    return DATA.movies;
  }

  addTask(value: string) {
    if (value !== '') {
      DATA.todos.push(new TodoItem(Math.random(), value, false));
    }
  }

  removeTask(id: number) {
    const index = DATA.todos.findIndex((t: TodoItem) => t.id === id);
    if (index !== -1) {
      DATA.todos.splice(index, 1);
    }
  }

  getTaskById(id: number): TodoItem | undefined {
    return DATA.todos.find((t: TodoItem) => t.id === id);
  }

  updateTask(todo: TodoItem) {
    const index = DATA.todos.findIndex((t: TodoItem) => t.id === todo.id);
    if (index !== -1) {
      DATA.todos[index] = todo;
    }
  }
}
