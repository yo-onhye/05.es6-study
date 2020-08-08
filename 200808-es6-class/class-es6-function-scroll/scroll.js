/*
	이벤트 작동 방식
	- 클릭 했을 떄 클릭한 영역으로 이동하는 액션 (click → 세로이동)
	- 스크롤 시 해당 영역 네비게이션 활성화 (scroll → 버튼, 박스 활성화)

*/

window.onload = () => {
	const secs = document.querySelectorAll("section");
	const btns = document.querySelectorAll("ul>li");
	const class_name = "on";
	const len = secs.length; // offset top 값을 가져오기 위해 섹션 갯수 구해두기
	let offs; // section의 높이값은 바뀌기 때문에 let으로 선언
	let scroll = 0;
	let base = -300; // offsetTop 값에 도달했을 때, 애니메이션이 작동하면 부드럽지 못한 액션처럼 보여 임의의 base 값을 추가하여 부드러운 애니메이션이 동작할 수 있도록 한다.
	let enableClick = true; // 이벤트 실행 시 다른 이벤트가 실행되지 않도록 하기위해 불린 값 추가

	// 세로 위치 값 초기화 정의 함수
	let setPos = () => {
		// offs를 초기화 하지 않는다면 resize 될때마다 높이값이 배열에 '추가'가 됨
		offs = [];
		// 각 section의 세로 위치값을 offs 배열에 할당
		secs.forEach((item, index) => {
			offs.push(item.offsetTop); // 배열에 offsetTop 값을 넣어준다.
		});
		offs.push(secs[len - 1].offsetTop + secs[len - 1].offsetHeight); // 마지막 요소의 bottom 값을 넣어준다.
	};

	// 로딩 시 세로위치값 저장 함수 호출
	setPos();

	// 브라우저 리사이즈시 세로위치값 업데이트 (반응형 대응)
	window.onresize = () => {
		setPos();
	};

	// scroll 이벤트 연결
	window.onscroll = () => {
		scroll = window.scrollY;
		activation(scroll);
	};

	// click 이벤트 연결
	for (let i = 0; i < len; i++) {
		btns[i].onclick = () => {
			if (enableClick) {
				if (offs[i] > scroll) {
					// 스크롤이 아래로 내려가야할 때
					timer = setInterval(() => {
						scrollDown(offs[i]);
					}, 5);
				} else if (offs[i] < scroll) {
					// 스크롤이 위로 올라가야 할때
					timer = setInterval(() => {
						scrollUp(offs[i]);
					}, 5);
				} else {
					// 스크롤이 이동할 필요가 없을 때
					return;
				}
				enableClick = false;
			}
		};
	}

	// activation 이벤트 연결
	let activation = (scroll) => {
		btns.forEach((item, index) => {
			btns[index].classList.remove(class_name);
			secs[index].classList.remove(class_name);
			if (scroll >= offs[index] + base && scroll < offs[index + 1] + base) {
				btns[index].classList.add(class_name);
				secs[index].classList.add(class_name);
			}
		});
	};

	// scroll up 이벤트 연결
	let scrollUp = (target_pos) => {
		if (scroll < target_pos) {
			scroll = target_pos;
			clearInterval(timer);
			enableClick = true;
		} else {
			scroll -= 10;
		}
		window.scroll(0, scroll);
	};

	// scroll down 이벤트 연결
	let scrollDown = (target_pos) => {
		if (scroll > target_pos) {
			scroll = target_pos;
			clearInterval(timer);
			enableClick = true;
		} else {
			scroll += 10;
		}
		window.scroll(0, scroll);
	};
};
