// 프로토타입이란 부모격인 객체와 연결된 링크

const p = {
  // => Object 를 통해서 만들어졌다. p.toString => Object.toString X => Error
  name: '홍길자',
  age: 40,
  getName: function () {},
}
const p2 = {
  name: '홍길순',
  age: 42,
  getName: function () {},
}
const p3 = {
  name: '홍길동',
  age: 43,
  getName: function () {},
}

// 100

class Person {
  // new 키워드를 이용해서 생성될 때 제일 먼저 단 한 번 실행되는 함수
  constructor(name, age) {
    // 초기화 => 값, 이벤트 등등 ..
    // this Person
    this.name = name
    this.age = age
  }
  // 프로토타입 영역으로 분리
  getName() {
    return this.name
  }
}

const p4 = new Person('홍길자', 30)
const p5 = new Person('홍길순', 40)
const p6 = new Person('홍길동', 50)
