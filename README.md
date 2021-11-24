아이콘 사용하기
======================

### ~/components/TodoList/index.tsx

===================================
## 어려운 부분 : ~/components/TodoList/index.tsx
### 아이콘을 사용하는 방법은 다양하다.
### react-icons 라이브러리를 사용할 수도 있고,
### CDN으로 Font를 받았던 것처럼, 받아 사용할 수도 있다.
### 또한 다른 방법도 많으니 한번 사용해보자
-----------------------------------
## iconmonstr 사이트 이용하기
### iconmonstr는 원하는 아이콘 이미지들을 검색하고 다운로드 받을 수 있는 사이트이다.
### https://iconmonstr.com/
### 여기에서 "휴지통(trash can)"과 "체크마크(check)"를 검색해서 다운로드 받아본다.
```
https://iconmonstr.com 접속
trash can 검색
원하는 trash can 이미지 클릭
(SVG로 다운 받기 : 기본적으로 선택되어져 있으므로 다른 조작은 X)

I agree to the license agreement 에 체크해주고,
Download 클릭하면 svg 아이콘을 얻을 수 있다. (Embed를 클릭하여 Code로 다운받을 수도 있다.)

(아이콘은 svg 확장자를 사용하는 것이 가장 성능이 좋다.)
(*.svg 확장자를 사용하게 되면 확대 & 축소를 하게 되더라도 이미지가 깨지지 않는다.)

다운로드 받은 파일은 이름을 변경한 후 public 폴더에 저장한다.

~/public/statics/svg/trash_can.svg
~/public/statics/svg/check_mark.svg

```

=====================================
## 어려운 부분 : ~/components/TodoList/index.tsx
### 이해하기!!
### 전체 코드. 어디는 이해되고, 어디는 이해안되는지 한줄한줄 체크한 후 물어봐주세용
```
다운로드 받은 SVG를 svg component로써,
우리 앱에 사용하기 위한 설정

reference: https://github.com/zeit/next.js/tree/canary/examples/svg-components

1. svg를 React 아나에서 Component로 사용하기 위한 Babel Plugin을 설치한다
$ npm i -D babel-plugin-inline-react-svg

2. 설치를 마쳤다면, babel 파일에 설정을 추가한다.
* 기존 .babelrc 
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}

* 변경 .babelrc
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }], "inline-react-svg"]
}

3. 모든 설치, 설정을 마쳤으니 TodoList 컴포넌트에서 svg 아이콘들을 사용하기 위해 불러오기
~/components/TodoList/index.tsx

import TrashCanIcon from '../public/statics/svg/trash_can.svg'
import CheckMarkIcon from '../public/statics/svg/check_mark.svg'

우리가 설치한 SVG를 저장한 위치에서, import 해오는 것임.
```

그리고 *.svg 라는 모듈을 찾을 수 없다는 에러가 나온다면,
.svg에 대한 모듈 타입을 지정해주어 문제를 해결 할 수 있다.

~/types/image.d.ts
```
declare module '*.svg'
```

=====================================
## 논리 연산자 ! 문법
```
ex) 예시 null, "", undefined, "anything", 12 등에 ! 문법을 붙이면 어떻게 작동할까?
console.log(!null, !"", !undefined, !"anything", !12, !!"anything") 함수를 실행시키면,
어떤 내용이 Console에 Log될까

!null         => true
!""           => true
!undefined    => true
!"anything"   => false
!12           => false
!!"anything"  => true
```

=====================================
# 최종 #8 최종 완성 코드

```
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
```