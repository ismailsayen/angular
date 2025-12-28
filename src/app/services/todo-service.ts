import { inject, Injectable } from '@angular/core';
import { Grocerie } from '../components/todo-list/list-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  fetchTodos() {
    return this.http.get<Array<Grocerie>>('https://jsonplaceholder.typicode.com/todos');
  }
}
