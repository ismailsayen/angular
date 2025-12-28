import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo-service';
import { Grocerie } from '../components/todo-list/list-interface';
import { TodoList } from '../components/todo-list/todo-list';

@Component({
  selector: 'app-home',
  imports: [TodoList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  service = inject(TodoService);
  list = signal<Array<Grocerie>>([]);
  ngOnInit(): void {
    this.service.fetchTodos().subscribe((data) => this.list.set(data));
  }
}
