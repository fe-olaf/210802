// 데이터를 구조화 할 때 object 를 사용한다.

const box = {
  width: 200,
  height: 100,
  color: '#efefef',
}

const person = {
  name: '홍길동',
  age: 40,
  'a-b': 'any',
}

const key = 'name'

// 값을 가져오는 방법
person.name // 1
person['name'] // 2 person['a-b']
person[key] // 3

// 값을 추가하는 방법 (중요!!)
const p = {} // 원본

p.name = '홍길동'

// ... spread operator
const person1 = {
  name: '나좀비',
  age: 30,
  keyword: '좀비',
}
const updatePerson = {
  ...person1,
  address: '안양',
}

console.log('person1', person1)
console.log('updatePerson', updatePerson)

// 업데이트
const person2 = {
  name: '나좀비',
  age: 30,
  keyword: '좀비',
}

const updatePerson2 = {
  ...person2,
  age: 31,
}

console.log('updatePerson2', updatePerson2)

// 반복문
