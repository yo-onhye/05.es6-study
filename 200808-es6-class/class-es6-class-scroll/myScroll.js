/* 
	함수형 → 클래스형으로 변환 순서
	1. 클래스에서 인스턴스를 복사할때 꼭 전달해야될 DOM 요소를 파라미터로 전달
	2. 클래스를 생성하고 그 안에 생성자 함수에서 필수 메서드 호출 (initDOM, bindingEvent)
	3. 클래스 안에서 해당 메서드를 등록
	4. 필요에 따라서 추가 메서드들을 클래스에 등록
*/

class MyScroll {
	constructor(option) {
		this.initDOM(option);
		this.setPos(); // setPos() 실행 순서는 DOM이 초기화 되고 Event가 실행되기 전!
		this.bindingEvent();
	}

	initDOM(option) {
		// 해당 인스턴스 전역으로 제한을 걸어주기 때문에 클래스가 꼬이지 않는다.
		this.secs = document.querySelectorAll(option.boxs);
		this.btns = document.querySelectorAll(option.btns);
		this.box3 = document.querySelector(option.custom);
		this.class_name = "on";
		this.len = this.secs.length;
		this.offs;
		this.scroll = 0;
		this.base = -300;
		this.enableClick = true;
		this.timer;
	}

	setPos() {
		this.offs = [];
		this.secs.forEach((item, index) => {
			this.offs.push(item.offsetTop);
		});
		this.offs.push(this.secs[this.len - 1].offsetTop + this.secs[this.len - 1].offsetHeight);
	}

	bindingEvent() {
		// 브라우저 리사이즈시 세로위치 값 업데이트 (반응형 대응)
		window.onresize = () => {
			this.setPos();
		};

		// scroll 이벤트 연결
		window.onscroll = () => {
			this.scroll = window.scrollY;
			this.activation(this.scroll);
			this.section3(this.scroll);
		};

		// click 이벤트 연결
		for (let i = 0; i < this.len; i++) {
			this.btns[i].onclick = () => {
				if (this.enableClick) {
					if (this.offs[i] > this.scroll) {
						this.timer = setInterval(() => {
							this.scrollDown(this.offs[i]);
						}, 5);
					} else if (this.offs[i] < this.scroll) {
						this.timer = setInterval(() => {
							this.scrollUp(this.offs[i]);
						}, 5);
					} else {
						return;
					}
					this.enableClick = false;
				}
			};
		}
	}

	// activation 이벤트 연결
	activation(scroll) {
		this.btns.forEach((item, index) => {
			this.btns[index].classList.remove(this.class_name);
			this.secs[index].classList.remove(this.class_name);
			if (scroll >= this.offs[index] + this.base && scroll < this.offs[index + 1] + this.base) {
				this.btns[index].classList.add(this.class_name);
				this.secs[index].classList.add(this.class_name);
			}
		});
	}

	section3(scroll) {
		if (scroll >= this.offs[2] && scroll < this.offs[3]) {
			scroll = scroll - this.offs[2];
			this.box3.style.transform = `translateX(${scroll}px)`;
		}
	}

	// scroll up 이벤트 연결
	scrollUp(target_pos) {
		if (this.scroll < target_pos) {
			this.scroll = target_pos;
			clearInterval(this.timer);
			this.enableClick = true;
		} else {
			this.scroll -= 10;
		}
		window.scroll(0, this.scroll);
	}

	// scroll down 이벤트 연결
	scrollDown(target_pos) {
		if (this.scroll > target_pos) {
			this.scroll = target_pos;
			clearInterval(this.timer);
			this.enableClick = true;
		} else {
			this.scroll += 10;
		}
		window.scroll(0, this.scroll);
	}
}
