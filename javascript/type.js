// 0. JS 동적 타입 언어
var a = ''

typeof a // string

// 1. 원시 타입
const num = 10 // number
const s = 'string' // string
const u = undefined // undefined
const n = null // null
const b = true // boolean
const sl = new Symbol() // symbol

// 2. 객체 타입
const arr = []
const obj = {}

// typescript 가 왜 필요한가 ?
// add 라는 함수는 숫자를 받는다. 더한다.
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('인자 값은 모두 숫자여야합니다.')
  }

  return a + b
}

add(10, 20) // 30
add('짱', '구') // 짱구

// function add2(a: number, b: number): number {
//     return a + b
// }

add2(10, 20) // OK !
add2('짱') // Error
