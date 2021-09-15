import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../share/todo-model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  newText: string = '';
  todos: TodoModel[];
  today: Date = new Date();
  
  constructor() { 
    this.todos = [
      { done: false, text: '통번역' },
      { done: false, text: '알고리즘' },
    ]
  }

  ngOnInit(): void {
  }

  toggleTodo(todo:{done: boolean, text: string}) {
    todo.done = !todo.done
  }
  
  addTodo(text: string) {
    this.todos.push({
      done : false,
      text : text
    })
  }

}
