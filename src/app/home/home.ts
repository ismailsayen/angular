import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo-service';
import { Grocerie } from '../components/todo-list/list-interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  data = inject(TodoService);
  list = signal<Array<Grocerie>>([]);
  ngOnInit(): void {
    this.list.set(this.data.list);
  }
}
