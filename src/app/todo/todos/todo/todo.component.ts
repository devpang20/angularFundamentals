import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox"> 번역공부
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
