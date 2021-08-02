# Heading1 

'#' 은 Heading 태그를 의미한다. ~ h6 까지 있다.

```js
import {KAKAO_KEY} from '../const/config';

const {Kakao} = window;

export default function initialize() {
  Kakao.init(KAKAO_KEY);
}
```

## LI

- item1
- item2
- itme3

1. item1 
2. item2

## P

> 여기는 p 태그 영역입니다.
   
## Link

- [네이버](www.naver.com)

![alt](https://i.ytimg.com/vi/85JwbVNCKps/maxresdefault.jpg)


## Strong, b

**진하게 나온다.**


## 주의할점

vscode 의 git 의 상태와 실제 git 의 상태가 갈린다.

=> 초록색: 파일 추가됨
=> 누런색: 추가된 파일, 기존에 있던 파일이 수정됨

## Git 명령어 

#### git status 
git 의 상태를 알려준다.

```
$ git status
```

#### git add
파일의 상태(= 변화) 를 git 에게 알려준다.
 
```
$ git add . 
```

#### git commit 
commit 은 작업의 단위를 의미한다.       
작게 쪼갤수록 좋다.

```
$ git commit -m "메세지"
```

#### git push
commit 목록을 remote 서버에 반영 

```
$ git push origin "branch name"
```