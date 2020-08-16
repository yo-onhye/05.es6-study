# 📌 2020.08.08 수업

## Scroll & Pallax 구현

ES6 사용하여 Scroll & Pallax 구현하기 (fuction type & class type)

### 작업페이지

**fuction type**

https://yo-onhye.github.io/05.es6-study/200808-es6-class/class-es6-function-scroll/index.html

**class type**

https://yo-onhye.github.io/05.es6-study/200808-es6-class/class-es6-class-scroll/index.html

**수업 응용 작업물**

https://yo-onhye.github.io/05.es6-study/200808-es6-class/class-es6-advanced-scroll/index.html

**Iterable Object UI**

https://yo-onhye.github.io/05.es6-study/200808-es6-class/class-es6-letter/index.html

### Arrow function

- function 키워드 대신 화살표(=>)를 사용하여 함수를 선언
- 콜백 함수에서 사용하면 간결하게 표현이 가능
- arrow function은 자신을 포함하는 외부 scope에서 this를 계승받는다. (자신이 종속된 인스턴스를 나타냄)
- hoisting이 불가능

### Click Event 구현

```
// 기존에는 이렇게 노가다로 분기하여 작업햇다!
if(scroll >= offs[0] && scroll <= offs[1]) {
	// 첫 번째 활성화
}
if(scroll >= offs[1] && scroll <= offs[2]) {
	// 두 번째 활성화
}
if(scroll >= offs[2] && scroll <= offs[3]) {
	// 세 번째 활성화
}
if(scroll >= offs[3] && scroll <= offs[4]) {
	// 네 번째 활성화
}

// 위에서 규칙성을 찾아 forEach문을 활용하여 간단하게 구현할 수 있다.
btns.forEach((item, index) => {
	btns[index].classList.remove(class_name);
	secs[index].classList.remove(class_name);

	if (scroll >= offs[index] && scroll < offs[index + 1]) {
		btns[index].classList.add(class_name);
		secs[index].classList.add(class_name);
	}
});
```

**💡 for VS forEach**

→ for는 index와 item을 받아 작업하는데, forEach는 반대로 item, index순으로 반환한다.

### Scroll Event 구현

```
//scroll function
let scrollUp = (target_pos) => {
	if (scroll < target_pos) {
		scroll = target_pos;
		clearInterval(timer); // 원하는 스크롤 Top 값에 도달하면 setInterval을 clear한다.
	} else {
		scroll -= 10; // 10만큼 스크롤 값을 감소시켜 원하는 값에 도달할 때까지 실행한다.
	}
	window.scroll(0, scroll);
};

// click evnet
for (let i = 0; i < len; i++) {
	btns[i].onclick = () => {
		if (offs[i] > scroll) {
			...
		} else if (offs[i] < scroll) {
			// 스크롤이 위로 올라가야 할때
			timer = setInterval(() => {
				scrollUp(offs[i]);
			}, 5); // 스크롤이 올라가는 액션을 setInterval을 이용해 계속 실행되게 한다.
		} else {
			...
		}
	};
}
```

**💡 setInterval로 인하여 계속 함수가 실행되어 있는데 성능 이슈가 없는가?**

→ 이슈가 없다. 이유는 Jquery 메소드를 사용해도 비슷하게 액션할 뿐만 아니라 Jquery 메소드는 DOM에 접근하여 실행시키기 때문에 오히려 Jquery가 성능상 더 좋지 않다.

### 함수형 → 클래스형으로 변환 순서

1. 클래스에서 인스턴스를 복사할때 꼭 전달해야될 DOM 요소를 파라미터로 전달

2. 클래스를 생성하고 그 안에 생성자 함수에서 필수 메서드 호출 (initDOM, bindingEvent)

3. 클래스 안에서 해당 메서드를 등록

4. 필요에 따라서 추가 메서드들을 클래스에 등록
