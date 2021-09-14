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
   * 대체적으로 템플릿에서 사용할 것들을 선언함
  */
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  /**
   * provider 공급
   * 서비스를 공급 할 때 사용
  */
  providers: [], 
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }

```

## Component

- ng 통해서 컴포넌트 빼기 가능

## Template


## 키워드
- @ 데코레이터
- 메타데이터
