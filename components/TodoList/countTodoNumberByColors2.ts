import { IProps } from '.'

type ObjectIndexType = {
  [key: string]: number | undefined
}

export const countTodoNumberByColors2 = ({ todos }: IProps) => {
  const colors: ObjectIndexType = {}
  
  todos.forEach((todo) => {
    const value = colors[todo.color]
    if (!value) {
      // 존재하지 않던 key라면
      colors[`${todo.color}`] = 1
    } else {
      // 존재하는 key라면
      colors[`${todo.color}`] = value + 1
    }
  })
  
  return colors
}

/* 
 * JavaScript에서 Object에 대괄호 표기법을 사용하면,
 * 객체의 Property에 접근할 수 있다.
 * colors[`${todo.color}`]는 undefined 이거나, 새로 넣어준 number일 것이다.
 * 따라서 ObjectIndexType 타입에 [key]의 값으로 number | undefined라는 타입을 지정해주었다.
 * ObjectIndexType 타입을 colors 객체에 지정해주지 않으면, 대괄호 표기법을 사용할 때 타입에러가 나온다.
 * 각 투두 아이템에 대하여 색상이 없다면, 색상의 값을 1로,
 * 색상이 이미 있다면 1을 더해주도록 했다.
 * 이렇게 해서 색상의 값을 구할 수 있었다.
 * 이렇게 얻은 Todo 색상의 개수들을 가지고 Styling 해본다.
*/