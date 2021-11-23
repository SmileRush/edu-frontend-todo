import { IProps } from '.'

export const countTodoNumberByColors = ({ todos }: IProps) => {
  let red = 0
  let orange = 0
  let yellow = 0
  let green = 0
  let blue = 0
  let navy = 0

  todos.forEach((todo) => {
    switch (todo.color) {
      case 'red':
        red += 1
        break;
      case 'orange':
        orange += 1
        break;
      case 'yellow':
        yellow += 1
        break;
      case 'green':
        green += 1
        break;
      case 'blue':
        blue += 1
        break;
      case 'navy':
        navy += 1
        break;
      default:
        break;
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