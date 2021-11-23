export type TodoListType = {
  id      : number
  text    : string
  color   : 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy'
  checked : boolean
}

// @ color의 Type을 string으로 하여도 무방하지만,
// @ 명시적으로 값을 지정해주어 color 속성을 더 명확하게 설정하였다.