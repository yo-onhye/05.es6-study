# 📌 2020.08.01 수업

## 액션이 있는 Tab 메뉴 만들기

ES5 사용하여 DOM을 제어로 만들기

### 작업페이지
https://yo-onhye.github.io/05.es6-study/200801-es6-class/class-DOM-sixbox/index.html

### animation 효과를 줄때 주의할 점

- 자식요소에 transform으로 요소의 위치를 제어
- 부모의 요소에 `transform-style:preserve-3d;`를 줘야 변경된 액션이 유지된다.
- 또한 그 상위요소 `perspective`를 추가하여 원근감을 부여한다.

### hoisting

원래 블록 안에서 선언된 변수는 지역변수여서 변수의 유효범위(scope)는 해당 블록 안에서만 동작하는게 정상이나 일반함수가 아닌 반복문이나 조건문같은 블록안에서의 지역변수는 강제로 최상위 루트인 window 객체까지 끌려 올라가져서 전역화된다.

**💡 hoisting 해결방법**

- **ES6** : 
  기존 var를 let으로 대체하면 hoisting 해결 가능
- **ES5** : 
  즉시실행함수로 호이스팅으로 빠져나가지 못하게 캡슐화

## Tab 메뉴 만들기 (ES5)

ES5 사용하여 DOM을 제어로 만들기

### 작업페이지
https://yo-onhye.github.io/05.es6-study/200801-es6-class/class-DOM-tab/index.html

### classList를 사용하여 함수 정의

addClass, removeClass, hasClass, togleClass 대신 사용할 수 있는 방법이 classList 속성이다.
classList는 length, Item, contains, add, remove, toggle 메서드가 있다.

```javascript
/// item의 class를 제거한다.
item.classList.remove("on");
```

## Tab 메뉴 만들기 (ES5-prototype)

ES5 사용하여 prototype 형식으로 만들기

### 작업페이지
https://yo-onhye.github.io/05.es6-study/200801-es6-class/class-prototype-tab/index.html

### prototype 생성

1. 생성자 함수로 인스턴스 생성 (필요한 정보 값을 인수로 전달 : 선택자)

2. 생성자 함수를 정의함과 동시에 필수 메서드 2개를 호출 (initDOM, bindingEvent)

3. 생성자 함수의 prototype에 해당 메서드들을 등록

4. 필요한 메서드들을 떄에 따라 추가해서 prototype에 등록해서 사용

### addEventListener 이벤트 연결 시 주의점
- 익명함수로 감싸서 외부함수 호출시 해당 외부함수에서의 this는 인스턴스를 지칭

- 바로 외부함수이름을 인수로 넣어서 호출시에는 외부함수에서의 this는 이벤트가 발생한 주체를 지칭

## Tab 메뉴 만들기 (ES6)

ES6 사용하여 만들기

### 작업페이지
https://yo-onhye.github.io/05.es6-study/200801-es6-class/class-es6-tab/index.html