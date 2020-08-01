window.onload = function () {
	var tab1 = new Tab("#tab");
};

function Tab(selector) {
	// 자기 자신에게 등록된 prototype 함수를 호출
	this.initDOM(selector);
	this.bindingEvent();
}

Tab.prototype.initDOM = function (selector) {
	this.el = document.querySelector(selector);
	this.btns = this.el.querySelectorAll("ul>li");
	this.boxs = this.el.querySelectorAll("div");
};

Tab.prototype.bindingEvent = function () {
	var self = this;
	for (var i = 0; i < this.btns.length; i++) {
		this.btns[i].addEventListener("click", function (e) {
			e.preventDefault;
			self.activationBox(this);
		});
	}
};

Tab.prototype.activationBox = function (item) {
	var thisID = item.querySelector("a").getAttribute("href");
	thisID = thisID.split("#")[1];

	for (var k = 0; k < this.btns.length; k++) {
		this.btns[k].classList.remove("on");

		if (this.boxs[k].getAttribute("id") == thisID) {
			this.boxs[k].classList.add("on");
		} else {
			this.boxs[k].classList.remove("on");
		}
	}
	item.classList.add("on");
};
