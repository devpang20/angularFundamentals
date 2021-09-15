## Module

### 컴포넌트, 파이프, 서비스 같은 앵귤러 앱의 주요 부분을 기능단위로 그룹핑 하게 해준다.
- 모든 앵귤러 앱은 단일 Root Module을 가짐
- 다수의 Feature Module을 가질 수 있음.
- 재사용, 외부 배포용으로 사용가능 

### angular cli 활용해서 모듈 생성

- src/app/todo 모듈 생성

```bash
ng gnerate module todo
```

- todos 컴포넌트 생성(명령어 축약 및 옵션 적용)
- 
```bash
ng g c todo/todos --module todo/todo.module.ts --export
```

### 모듈 파일 구조
```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  /** 
   * declarations 선언
   * 컴포넌트를 사용하기 위해 선언하는 곳
   * 대체적으로 템플릿에서 사용할 것들을 선언함
   * declartions 속성에 어떤 컴포넌트를 넣을 것인가를 고려하는 것이 Angular 모듈화의 핵심
  */
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  /**
   * provider 공급
   * 전역에서 사용되는 서비스를 해당 객체에서 사용할 수 있도록 생성
   * provider는 앱 모든 곳에 접근할 수 있다.
  */
  providers: [], 
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }

```
+) app.module.ts
```js
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],

/**
 * bootstrap
 * 루트 컴포넌트라고 하는 메인 어플리케이션의 뷰를 선언
 * 쉽게 말해 해당 모듈이 시작되었을 때 우선적으로 실행될 컴포넌트를 지정
 * bootstrap속성은 루트 모듈에만 존재
*/
  bootstrap: [AppComponent]
})
export class AppModule { }


```

## Component
- 빌딩 블록(LEGO)
- HTML 요소들의 그룹
- 뷰와 로직으로 구성

### todo-app 구조
```html
<app-root>
    <title/>
    <todos>
        <todo/>
        <add-todo/>
    </todos>
</app-root>
```

```js

import { Component, OnInit } from '@angular/core';

/** 
 * @ 데코레이터 영역
 * 데코레이터는 JavaScript 클래스를 변형하는 함수다
 * Angular는 클래스가 어떤 특징을 가지며 어떻게 동작해야
 * 하는지 메타데이터를 여러개 구현해두고 있다.
 * 메타데이터 : 객체, 컴포넌트가 어떻게 동작하는지 정의
 * 
 * selector : DOM selector(#id, .class와 같이 작성가능) 
 * templateUrl : view에 대한 저의
 * styleUrls : 스타일 파일 url(배열구조로 여러개의 파일 url을 기입할 수 있음)
*/
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
/**
 * 클래스영역
 * 로직 작성
*/
export class TodosComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
```
- ng 명령어를 통해 todo component 생성
- --inline-template, --inline-style : 컴포넌트 안에 작성되게 파일 생성
```bash
ng g c todo/todos/todo --inline-template --inline-style
```
## Template

- HTML 코드로 템플릿을 표현
  - 템플릿 표현식
  ```js
  Component(class) => Dom
  
  {{템플릿 표현식}} <h1>{{title}}</h2>
  [속성]="템플릿 표현식" <todo [todo]="work">
  ```
  - 템플릿 문장
  ```js
  Component(class) <= Dom
  
  (이벤트)="템플릿 문장" <button (cilck)="handle()">
  [(ngModel)]="템플릿 표현식" <input type="text" [(ngModel)]="name">
  ```
- 바인딩: 바인딩의 대상 => 속성, 이벤트, ngModel, class, style

## 컴포넌트 통신
- 부모 => 자식 컴포넌트
  - @Input()을 사용
  - ES6 setter 사용가능
  - @View Child()를 사용
- 자식 => 부모 컴포넌트
  - @Output()을 사용
  - EventEmitter를 사용하여 부모에게 이벤트 전달
  - 부모 컴포넌트는 $event로 이벤트의 데이터를 전달 받음
  - 자식이 부모 컴포넌트를 직접 주입받을 수 있음(강력한 의존 관계로 사용시 주의가 필요)

## Pipe
- 템플릿에서 보이는 데이터를 변환
```js
 {{ express | pipName: paramValue }}
 {{today | date }}
 {{today | date:"yy/mm/dd" }}
 {{today | date | uppercase }}
```
- json 출력 검사 팁
```js
{{ todos | json }}
````
- 파이프는 커스텀이 가능