// if, if else, switch

const isHateZombie = true 

if (isHateZombie) {
    console.log('좀비를 싫어하는 유저입니다.')
} else {
    console.log('좀비를 싫어하지 않는 유저입니다.')
}

// 문제의 코드 !!
let message 

if (isHateZombie) {
    message = '좀비를 싫어하는 유저입니다.'
} else {
    message = '좀비를 싫어하지 않는 유저입니다.'
}

// 개선 !!
const message = isHateZombie ? '좀비를 싫어하는 유저입니다.' : '좀비를 싫어하지 않는 유저입니다.'

// 너무 싫은 코드
const level = '5'

let label 

if (level === '5') {
    label = '평민'
} else if (level === '4') {
    label = '일반회원'
}

// 조건이 너무 많으면 Switch 를 고려하자

switch (level) {
    case '5': {
        label = '평민'
    }
    case '4': {
        label = '일반회원'
    }
}






// OR(||), AND(&&)

// 삼항연산자