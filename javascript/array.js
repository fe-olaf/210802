const arr = [1, 'string', {}, function () {}]

// 값을 가져오는 방법
arr[0]

// 추가
const persons = [
  { name: '홍길자', message: '안녕하세요', isLikeZombie: true },
  { name: '나좀비', message: '저는 좀비를 좋아해요', isLikeZombie: false },
  { name: '홍길순', message: '저는 길순이에요', isLikeZombie: true },
]

const newPersons = [
  ...persons,
  { name: '나귀신', message: '저는 귀신을 좋아합니다' },
]

// 삭제 = filter
const removedPersons = newPersons.filter((person) => person.name !== '나좀비')

console.log(removedPersons)

// 업데이트 = map
// 나귀신 message => 안녕하세요
const updatedPersons = newPersons.map((person) => {
  if (person.name === '나귀신') {
    return { ...person, message: '안녕하세요' }
  }
  return person
})

console.log('updatedPersons', updatedPersons)

// 좀비를 좋아하는 회원
const likeZomibes = persons.filter((person) => person.isLikeZombie)
console.log('likeZomibes', likeZomibes)
