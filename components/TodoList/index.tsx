import React from 'react'
import styled from 'styled-components'
import palette from '../../styles/palette'
import { TodoListType } from '../../types/todo'
import { countTodoNumberByColors2 } from './countTodoNumberByColors2'
import TrachCanIcon from '../../public/statics/svg/trash_can.svg'
import CheckMarkIcon from '../../public/statics/svg/check_mark.svg'

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

  // # Todo Header
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
  
  // # Todo Body
  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      
      // # todo.checked가 false일 때 보일 Style
      .todo-right-side {
        display: flex;
        margin-right: 12px;
        
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        
        .todo-trash-can {
          path {
            fill: ${palette.deep_red};
          }
        }
        
        .todo-check-mark {
          fill: ${palette.deep_green};
        }
        
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`

export interface IProps {
  todos: TodoListType[]
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  const todoColorNums = countTodoNumberByColors2({ todos })
  return (
    <Container>
      {/* Todo Header */}
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
      {/* Todo Body, Item */}
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            {/* Todo Left Side */}
            <div className='todo-left-side'>
              <div className={`todo-color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? 'checked-todo-text' : ''}`}>
                {todo.text}
              </p>
            </div>
            {/* Todo Right Side */}
            <div className='todo-right-side'>
              {todo.checked && (
                <>
                  <TrachCanIcon className='todo-trash-can' onClick={() => {}} />
                  <CheckMarkIcon className='todo-check-mark' onClick={() => {}} />
                </>
              )}
              {!todo.checked && (
                <button type='button' className='todo-button' onClick={() => {}} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList