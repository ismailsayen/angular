import { Injectable } from '@angular/core';
import { Grocerie,  } from '../components/todo-list/list-interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list:Array<Grocerie>=[
    {id:1,name:"milk"},
    {id:2,name:"fish"}
  ];
}
