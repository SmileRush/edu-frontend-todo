import React from 'react'
import styled from 'styled-components'
import palette from '../../styles/palette'
import { TodoListType } from '../../types/todo'
import { countTodoNumberByColors2 } from './countTodoNumberByColors2'

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

  .todo-list-header {
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      margin: 0 0 8px;
      span {
        margin-left: 12px;
      }
    }

    .todo-list-header-colors {
      display: flex;

      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }

        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }
`

export interface IProps {
  todos: TodoListType[]
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  const todoColorNums = countTodoNumberByColors2({ todos })
  return (
    <Container>
      <div className='todo-list-header'>
        <p className='todo-list-last-todo'>
          남은 TODO<span>{todos.length}</span>
        </p>
        <div className='todo-list-header-colors'>
          {Object.keys(todoColorNums).map((color, index) => (
            <div className='todo-list-header-color-num' key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default TodoList
