투두리스트 헤더 만들기
======================

#1 ~ #3의 과정을 통해서 투두리스트를 만들기 위한 프로젝트 셋업을 마무리했다.

### ~/styles/palette.ts
### ~/components/Header/*
### ~/components/TodoList/*

===================================
## 어려운 부분 : ~/types/todo.d.ts
### 이해하기!!
### export type TodoTypeList = { ... } 이건 왜 만든 것일까? 무슨 역할일까??
```
export type TodoTypeList = {
  id      : number
  text    : string
  color   : 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy'
  checked : boolean
}
```

export type ... : type ...를 내보내기 하겠다는 Keyword.

=====================================
## 어려운 부분 : ~/pages/index.tsx
### 이해하기!!
### const todos = [] 이건 왜 만든 것일까, 무슨 역할일까??
```
import { TodoListType } from '../types/todo'

// @ 데이터베이스 역할을 해줄 배열(=Array, =[])
// @ 다른 명칭으로 Dummy Data, Mockup Data 등으로 불린다.
// @ 서버로부터 실제 데이터를 받아오는 것은 아니지만, 프론트엔드 개발을 위해 가상의, 고정 데이터를 만들어 두는 것이다.
// @ 가상의 데이터로 화면을 잘 그려지면, 백엔드와 연결해서 데이터를 받아와도 화면을 잘 그려내게 될 것이다.

const todos: TodoListType[] = [
  { id: 1, text: '마트 가서 장보기', color: 'red', checked: false },
  { id: 2, text: '수학 숙제하기', color: 'orange', checked: false },
  { id: 3, text: '코딩하기', color: 'yellow', checked: true },
  { id: 4, text: 'Next.js 공부하기', color: 'green', checked: true },
  { id: 5, text: '요리 연습하기', color: 'blue', checked: false },
  { id: 6, text: '분리수거 하기', color: 'navy', checked: false }
]
```
=====================================
## 어려운 부분 : ~/pages/index.tsx
### 이해하기!!
### 
```
const index: NextPage = () => {
  return (
    <TodoList todos={todos} />
  )
}

index 컴포넌트의 return 부분에,
<TodoList todos={todos} /> 가 있다.

이는 "TodoList" Component의 "todos" props에 todos 객체를 전달해주는 것을 의미한다.
그런데 todos={todos} 앞에 나오는 "todos" props에 빨간 밑줄이 생기면서 에러가 생긴다.


  /* 에러 내용 */
  '{ todos: TodoListType[]; }' 형식은 'IntrinsicAttributes & { children?: ReactNode; }' 형식에 할당할 수 없습니다.
  'IntrinsicAttributes & { children?: ReactNode; }' 형식에 'todos' 속성이 없습니다.ts(2322)
  (JSX attribute) todos: TodoListType[]
  
위의 에러 내용을 통해 할 수 있는 것은, todos는 TodoListType[]의 타입으로 이루어져 있다.
이는 "TodoList" Component가 props로 todos를 받기로 정해져 있지 않기 때문에 이런 에러가 발생하는 것이다.
```

## 그래서 뭐?

내용이 어렵고 주저리주저리 말이 많지만,  
그래서 어떻게 해결하면 되는지만 알면, 굳이 위의 내용들을 몰라도 된다.  
해결방법은 간단하다  

"TodoList가 props로 todos를 받기로 정해져 있지 않기 때문에" 발생한 에러이므로,  
"TodoList가 props로 todos를 받기로 정해주면" 발생하지 않는 에러이다.  

## ~/components/TodoList/index.tsx
```
import React from 'react'
import styled from 'styled-components
import { TodoTypeList } from '../../type/todo'

const Container = styled.div`
  width: 100%;
`

interface IProps {
  todos: TodoTypeList[]
}

const TodoList: React.FC<IProps> = () => {
  return (
    <Container>
      <h1>TodoList</h1>
    </Container>
  )
}

export default TodoList
```

interface IProps { ... }는,  
IProps 인터페이스를 { ... } 내용으로 만들겠다는 Keyword


## type 키워드와 interface 키워드는 역할의 거의 비슷하다.  
## 어떤 키워드를 사용해도 무방하지만, 보통 내보내기할 Type은 export type 키워드를 주로 사용하고, 내보내기 하지 않는 Type은 interface를 주로 사용하는 경향이 있다. (어느 것을 사용해도 무방함)

```
const TodoList 분해해서 이해하기

1. TodoList는 함수형 컴포넌트이다.

const TodoList = () => {
  return ...
}

2. TypeScript의 이점을 얻으며 코딩하기 위해, TodoList에게 타입을 입힌다.

const TodoList: React.FC = () => {
  return ...
}

3. TodoList가 다양한 값에 대응하며 화면을 그려줄 수 있도록, 매개변수(=props)를 받을 수 있도록, TodoList를 정의한다.

const TodoList: React.FC = ({ todos }) => {
  return ...
}

4. TodoList 자체는 Type이 정해져서 오류없는 코딩이 가능해졌다. 하지만 todos 변수를 선언했는데 Type이 정해지지 않아서 오류가 발생할 수 있다.
따라서 todos에 타입을 입혀준다.
(방법은 여러개이지만 최상급 방법인 제네릭을 사용하여 매개변수 todos의 Type을 정해준다.)

const TodoList: React.FC<IProps> = ({ todos }) => {
  return ...
}

5. TodoList에 입혀준 제네릭 <IProps>을 작성해준다. IProps는 마음대로 정한 이름일 뿐, 아무거나 작성해도 된다.

interface IProps {
  todos: TodoListType[]
}

6. TodoList의 매개변수(=props)인 todos에 제네릭을 통해 Type을 입혀줬다.
따라서 todos: TodoListType[] 이므로,
todos는 TodoListType[]의 값이 들어와야만 정상 작동하며, TodoListType[]의 타입이 아니면 에러가 발생한다.

todos: string;
todos: number;
todos: boolean ... 과 같이 string, number, boolean은 명확하지만,
TodoListType[] 은 우리가 필요에 의해 만들어 준 것이므로 type을 작성한다.

7. ~/types/todo.d.ts
export type TodoListType = {
  id      : number
  text    : string
  color   : 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy'
  checked : boolean
}

** 코딩하는 순서는 이렇지 않지만, 원활한 이해를 위해 순서를 위와 같이 나열하여 설명함 **
```

# Keyword
### export
### type
### interface
### Generic <>
### props