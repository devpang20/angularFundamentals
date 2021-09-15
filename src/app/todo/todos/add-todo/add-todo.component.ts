import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할 일을 입력하세요" [(ngModel)]="newText" >
    <button (click)="addTodo(newText)">add</button>
  `,
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() { 
    this.newText = '';
  }

  ngOnInit(): void {
  }

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
