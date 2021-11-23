### $ 로 시작하는 것은 cmd(=terminal, powershell 등)에 입력하라는 의미  
### ~ 는 프로젝트의 최상위 폴더 경로를 의미함.  
<br />
<br />

## $ npm init -y  
### • ~/.gitignore 생성하기
```
node_modules
.npm
.next
.vscode
```

## $ npm i next react react-dom  
## $ npm i -D typescript @types/react @types/node  
#### • package.json  
```
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

### • ~/pages/index.tsx 생성  
```
const index = () => {  
  return "Welcome New World"  
}  
export default index  
```

## $ npm run dev  

### • Next가 TypeScript를 감지하여, tsconfig.json을 자동으로 생성해준다  
	
strict: false 를 true로 수정.  
```
"strict": true,
```

strict는 모든 타입 체킹 옵션을 활성화 한다는 것을 의미한다.  
이를 활성화하면 엄격한 타입 검사가 활성화된다는 것을의미한다.  
strict를 사용함으로써 더욱 안정된 코드를 작성할수 있다.  
	
## $ npx eslint --init  
```
	• How would you like to use ESLint?  
		○ To check syntax, find problems, and enforce code style  
	• What type of modules does your project use?  
		○ JavaScript Modules (import/export)  
	• Which framework does your project use?  
		○ React  
	• Does your project use TypeScript?  
		○ Yes  
	• Where does your code run?  
		○ Browser  
	• How would you like to define a style for your project?  
		○ Use a popular style guide  
	• Which style guid do you want to follow?  
		○ Airbnb (https://github.com/airbnb/javascript)  
	• What format do you want your config file to be in?  
		○ JSON  

	• 마지막으로 npm을 통하여 모듈을 설치하겠냐는 물음에 yes를 입력하면  
	  '.eslintrc.json' 파일이 생성되고,  
	  'package.json' 안에 eslint에 필요한 모듈들이 추가된 것을 확인할 수 있다.  
	```
	
### • .eslintrc.json 최종본 (복붙해서 쓰셈)  
```
{  
  "env": {  
    "browser": true,  
    "es2021": true  
  },  
  "extends": ["plugin:react/recommended", "airbnb"],  
  "parser": "@typescript-eslint/parser",  
  "parserOptions": {  
    "ecmaFeatures": {  
      "jsx": true  
    },  
    "ecmaVersion": 13,  
    "sourceType": "module"  
  },  
  "plugins": ["react", "@typescript-eslint"],  
  "rules": {  
    "no-trailing-spaces"                    : "off",                     // 코드의 내용이 없을 때, 빈 공간에 대한 에러  
    "semi"                                  : "off",                     // 코드의 끝에 세미콜론을 붙여야 한다.  
    "linebreak-style"                       : "off",                     // OS별 개행(=줄바꿈) "\n"(LF) 및 "\r\n"(CRLF) 규칙을 off  
    "@typescript-eslint/quotes"             : ["error", "single"],       // 싱글 쿼터('') 사용 1  vs  더블 쿼터("")  
    "quotes"                                : ["error", "single"],       // 싱글 쿼터('') 사용 2  vs  더블 쿼터("")  
    "@typescript-eslint/no-unused-vars"     : "warn",                    // 사용 하지 않는 변수에 대한 경고 1  
    "no-unused-vars"                        : "off",                     // 사용 하지 않는 변수에 대한 경고 2  
    "comma-dangle"                          : "off",                     // 코드의 라인 끝에 ,를 넣어주지 않는다.  
    "arrow-body-style"                      : "off",                     // 화살표 함수 안에 return을 사용할 수 있다.  
    "object-curly-newline"                  : "off",                     // { 다음 줄 바꿈을 강제로 사용하지 않는다.  
    "implicit-arrow-linebreak"              : "off",                     // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.  
    "no-shadow"                             : "off",                     // 파일 내에서 중복 이름을 사용할 수 있다.  
    "spaced-comment"                        : "off",                     // Comment를 뒤에 달 수 있다.  
    "operator-linebreak"                    : "off",                     // 연산자 다음 줄 바꿈을 사용할 수 있다.  
    "global-require"                        : "off",                     // 함수 내에서 require를 사용할 수 있다.  
    "import/prefer-default-export"          : "off",                     // export default를 사용하라  
    "no-param-reassign"                     : "off",                     // 함수의 매개변수에, 재할당하는 것을 허용하지 않는다.  
    "jsx-a11y/control-has-associated-label" : "off",                     // 상호작용하는 Element에 label을 넣는다.  
    "jsx-a11y/anchor-is-valid"              : "off",                     // next js 에서는 a에 href 없이 사용한다.  
    "jsx-a11y/label-has-associated-control" : "off",                     // label htmlFor를 사용하지 않아도 된다.  
    "react/no-array-index-key"              : "off",                     // key 값으로 index를 사용할 수 있다.  
    "react/no-unescaped-entities"           : "off",                     // 문자열 내에서 " ' > } 를 허용한다.  
    "react/prop-types"                      : "off",                     // prop-types를 허용하지 않는다.  
    "react/jsx-one-expression-per-line"     : "off",                     // 한 라인에 여러 개의 JSX를 사용할 수 있다.  
    "react/react-in-jsx-scope"              : "off",                     // jsx를 사용하여도 React를 꼭 Import 하지 않아도 된다.  
    "react/jsx-props-no-spreading"          : "off",                     // props를 spread, 전개할 수 있다.  
    "react/jsx-curly-newline"               : "off",                     // jsx 안에 }를 새로운 라인에 사용할 수 있다.  
    "react/jsx-filename-extension"          : [  
      // jsx 사용 가능한 확장자 설정  
      1,  
      { "extensions": [".js", ".jsx", ".tsx"] }  
    ],  
    "import/extensions": [  
      // import 시 확장자 명은 사용하지 않는다.  
      "error",  
      "ignorePackages",  
      {  
        "js": "never",  
        "jsx": "never",  
        "ts": "never",  
        "tsx": "never"  
      }  
    ]  
  },  
  "settings": {  
    "import/resolver": {  
      "node": {  
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]  
      }  
    }  
  }  
} 
```