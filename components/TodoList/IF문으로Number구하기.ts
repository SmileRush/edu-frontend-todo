import { IProps } from '.'

export const countTodoNumberByColors = ({ todos }: IProps) => {
  let red = 0
  let orange = 0
  let yellow = 0
  let green = 0
  let blue = 0
  let navy = 0

  todos.forEach((todo) => {
    if (todo.color === 'red') {
      red += 1
    }
    if (todo.color === 'orange') {
      orange += 1
    }
    if (todo.color === 'yellow') {
      yellow += 1
    }
    if (todo.color === 'green') {
      green += 1
    }
    if (todo.color === 'blue') {
      blue += 1
    }
    if (todo.color === 'navy') {
      navy += 1
    }
  })

  return {
    red,
    orange,
    yellow,
    green,
    blue,
    navy,
  }
}