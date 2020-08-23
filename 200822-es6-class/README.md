# 📌 2020.08.22 수업

## 게시판 (C.R.U.D기능)

C(create), R(read), U(update), D(delete) 기능이 구현되는 게시판 만들기

### 작업페이지

https://yo-onhye.github.io/05.es6-study/200822-es6-class/class-es6-notice-board/index.html

### CRUD 구현

- 사용자가 입력한 title, contents를 작성한 날짜와 함께 저장하여 리스트로 보여줌.
- 작성한 데이터를 수정 및 삭제하는 기능 추가
- 모듈을 이용하여 data / input / motion / showevent 관리 class 파일을 분리하고 호출

  `import Data from "./js/data.js";`

- 복잡한 코드를 유지보수하기 편리하여 모듈을 사용한다.

### JS

**custom.js**

- 모듈 JS들을 통제하는 JS

**data.js**

- data 관리
- insert 기능 정의
- modify 기능 정의
- delete 기능 정의
- data 입력 시 날짜 추가

**motion.js**

- motion에 필요한 class들을 제어

**showList.js**

- data 값을 이용하여 리스트 UI 생성
- 리스트에 포함되는 modify, delete, toggle 버튼 이벤트 부여

### 동일한 class 요소에 같은 이벤트 구현

동일한 class 요소에 같은 이벤트를 구현할 때는 **즉시실행함수**를 사용하여 각각의 요소에 이벤트를 걸어준다.

```javascript
let $btnDel = document.getElementsByClassName("btnDel");
for (let k = 0; k < $btnDel.length; k++) {
	(function (index) {
		$btnDel[k].onclick = function () {
			self.del(index);
		};
	})(k);
}
```
