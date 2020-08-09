class ScrollAnimation {
	constructor(option) {
		this.initDOM(option);
		this.setPos();
		this.bindingEvent();
	}

	initDOM(option) {
		this.secs = document.querySelectorAll(option.boxs);
		this.background = document.querySelector(option.background);
		this.textsubani = document.querySelectorAll(option.textsubani);
		this.textani2 = document.querySelector(option.textani2);
		this.textaniright = document.querySelectorAll(option.textaniright);
		this.textanileft = document.querySelectorAll(option.textanileft);
		this.textani4 = document.querySelector(option.textani4);
		this.class_name = "on";
		this.len = this.secs.length;
		this.offs;
		this.scroll = 0;
		this.base = -300;
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
		window.onresize = () => {
			this.setPos();
		};

		// scroll 이벤트 연결
		window.onscroll = () => {
			this.scroll = window.scrollY;
			this.activation(this.scroll);
			this.changebackground(this.scroll);
			this.section1(this.scroll);
			this.section2(this.scroll);
			this.section3(this.scroll);
			this.section4(this.scroll);
		};
	}

	// activation 이벤트 연결
	activation(scroll) {
		this.secs.forEach((item, index) => {
			this.secs[index].classList.remove(this.class_name);
			if (scroll >= this.offs[index] + this.base && scroll < this.offs[index + 1] + this.base) {
				this.secs[index].classList.add(this.class_name);
			}
		});
	}

	changebackground(scroll) {
		if (scroll >= this.offs[0] && scroll < this.offs[1]) {
			this.background.style.background = `rgb(255, 209, 220)`;
		} else if (scroll >= this.offs[1] && scroll < this.offs[2]) {
			this.background.style.background = `rgb(249, 245, 195)`;
		} else if (scroll >= this.offs[2] && scroll < this.offs[3]) {
			this.background.style.background = `rgb(245, 245, 245)`;
		} else if (scroll >= this.offs[3] && scroll < this.offs[4]) {
			this.background.style.background = `rgb(223, 207, 241)`;
		}
	}

	section1(scroll) {
		if (scroll >= this.offs[0] && scroll < this.offs[1]) {
			this.textsubani.forEach((item, index) => {
				this.textsubani[index].style.width = "0";
			});
		}
	}

	section2(scroll) {
		if (scroll >= this.offs[1] + this.base && scroll < this.offs[2]) {
			const nScaleRate = (scroll - this.offs[1] - this.base) / 2000 + 0.5;
			const nSkewRate = (scroll - this.offs[1] - this.base) / 60 - 10;
			this.textani2.style.transform = `scale3d(${nScaleRate}, ${nScaleRate}, 1) skew(${nSkewRate}deg, 0deg)`;
		}
	}

	section3(scroll) {
		if (scroll >= this.offs[2] + this.base && scroll < this.offs[3]) {
			const nOpacity = 0.8 - (scroll - this.offs[2] - 100) / 5000;
			const nSkewRate = (scroll - this.offs[2]) / 50 - 13;
			const nSkewRate2 = 13 - (scroll - this.offs[2]) / 50;
			const nScroll = scroll - this.offs[2] + 800;
			this.textanileft.forEach((item, index) => {
				this.textanileft[index].style.transform = `translateX(-${nScroll}px) skew(${nSkewRate}deg, 0deg)`;
				this.textanileft[index].style.opacity = `${nOpacity}`;
			});
			this.textaniright.forEach((item, index) => {
				this.textaniright[index].style.transform = `translateX(${nScroll}px) skew(${nSkewRate2}deg, 0deg)`;
				this.textaniright[index].style.opacity = `${nOpacity}`;
			});
		}
	}

	section4(scroll) {
		if (scroll >= this.offs[3] && scroll < this.offs[4]) {
			scroll = scroll - this.offs[3];
			this.textani4.style.transform = `translateX(${scroll}px) rotateY(0deg)`;
			this.textani4.style.opacity = "1";
		}
	}

	// scroll up 이벤트 연결
	scrollUp(target_pos) {
		if (this.scroll < target_pos) {
			this.scroll = target_pos;
			clearInterval(this.timer);
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
		} else {
			this.scroll += 10;
		}
		window.scroll(0, this.scroll);
	}
}
