import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';



@NgModule({
  // 탬플릿에서 사용하는거
  declarations: [
    TodosComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [], //서비스할때
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
