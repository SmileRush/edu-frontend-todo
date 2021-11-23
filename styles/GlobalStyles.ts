import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset'

const globalStyle = css`
  ${reset}
  
  input {                    // # input에서 모든 property가 삭제된다. (= 내 마음대로 만들기 쉽게, input이 기본적으로 가진 여러 속성들을 삭제한다.)
    all:unset;
  }
  
  * {                        // # 모든 box-sizing 크기를 border-box 만큼.
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;   // # a (=링크)는 기본적으로 하단에 밑줄이 쳐져 있는데, 이러한 기본 속성을 지워준다.
    color: inherit;          // # a (=링크)의 텍스트는 기본적으로 글자가 파란색인데, 이러한 기본 속성을 지워준다.
  }
  
  body {
    margin: 0;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif; // # ~/pages/_document.tsx 에서 Google Font를 CDN으로 가져왔으므로, 이제 어디에서든 font-family 속성으로 폰트를 원하는 대로 변경할 수 있다.
  }
`

const GlobalStyle = createGlobalStyle`    // # styled-components를 재사용하기 위해, globalStyle 객체처럼 css 키워드를 통해 작은 덩어리로 만들어 놓고, 속성을 줄줄 써내려가지 않고 객체를 가져오기만 해도, 그대로 적용할 수 있다.
  ${globalStyle}
`

export default GlobalStyle

// @ Styled Components의 createGlobalStyle을 사용하여,
// @ Global Style을 만들었고, export default로 내보내기 하였다.