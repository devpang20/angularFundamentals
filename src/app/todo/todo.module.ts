import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  // 탬플릿에서 사용하는거
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [], //서비스할때
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
