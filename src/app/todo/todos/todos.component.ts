import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  newText: string = '';
  todos: {
    done: boolean,
    text: string
  }[];
  
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

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText
    });
    this.newText = '';
  }

}
