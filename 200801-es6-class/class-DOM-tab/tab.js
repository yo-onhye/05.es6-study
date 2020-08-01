window.onload = function () {
	// DOM 등록
	var el = document.querySelector("#tab");
	var btns = el.querySelectorAll("ul>li");
	var boxs = el.querySelectorAll("div");

	// event 연결
	for (var i = 0; i < btns.length; i++) {
		//addEventListener를 이용하여 hoisting 방지
		btns[i].addEventListener("click", activateBox);
	}

	// 함수 정의
	function activateBox(e) {
		e.preventDefault();

		var thisID = this.querySelector("a").getAttribute("href");
		thisID = thisID.split("#")[1];

		for (var k = 0; k < btns.length; k++) {
			btns[k].classList.remove("on");

			if (boxs[k].getAttribute("id") == thisID) {
				boxs[k].classList.add("on");
			} else {
				boxs[k].classList.remove("on");
			}
		}
		this.classList.add("on");
	}
};
