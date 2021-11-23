import { NextPage } from 'next'
import TodoList from '../components/TodoList'
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

const index: NextPage = () => {
  return (
    <TodoList todos={todos} />
  )
}

export default index