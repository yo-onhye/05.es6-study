export default class {
	constructor({ del, modify, motion }) {
		this.del = del;
		this.modify = modify;
		this.motion = motion;
		this.$showBox = document.getElementById("showBox");
		this.$title = document.getElementById("title");
		this.$content = document.getElementById("content");
	}

	//인수값으로 데이터를 받아서 동적으로 태그를 생성후 DOM에 삽입해주는 메서드
	render(db) {
		this.$showBox.innerHTML = "";

		//map으로 반복을 돌면서 태그를 동적으로 생성
		db.map((data) => {
			let self = this;

			//DOM노드 생성
			let item = document.createElement("div");
			item.classList.add("post");
			let tags = `
					<div class="tit">
						<h2>${data.title}</h2>
						<span>${data.date}</span>
						<input type="button" class="btnToggle" value="+" />
					</div>
					<div class="con">
						<p>${data.content}</p>
						<input class="btnModify" type="button" value="modify" />
						<input class="btnDel" type="button" value="delete" />
					</div>
			`;
			item.innerHTML = tags;
			self.$showBox.appendChild(item);

			//삭제버튼 갯수만큼 반복을 돌면서 즉시실행함수로 해당버튼 클릭시 순서값을 콜백으로 넘어온 del함수에 인수로 넣음
			let $btnDel = document.getElementsByClassName("btnDel");
			for (let k = 0; k < $btnDel.length; k++) {
				(function (index) {
					$btnDel[k].onclick = function () {
						self.del(index);
					};
				})(k);
			}

			//수정버튼 갯수만큼 반복을 돌면서 즉시실행함수로 해당버튼 클릭시 순서값을 콜백으로 넘어온 del함수에 인수로 넣음
			let $btnModify = document.getElementsByClassName("btnModify");
			for (let k = 0; k < $btnModify.length; k++) {
				(function (index) {
					$btnModify[k].onclick = function () {
						self.modify(index);

						//input창에 수정할글 입력
						let inputTitle = this.parentElement.parentElement.children[0].children[0].innerText;
						let inputContent = this.parentElement.children[0].innerText;
						self.$title.value = inputTitle;
						self.$content.value = inputContent;

						//글입력 패널 열기
						self.motion.openInput()();
					};
				})(k);
			}

			let $btnToggle = document.getElementsByClassName("btnToggle");
			for (let k = 0; k < $btnToggle.length; k++) {
				(function (index) {
					$btnToggle[k].onclick = function () {
						//현재 토글버튼의 post요소를 찾고 최소, 최대넓이값 구하기
						let $currentPost = this.parentElement.parentElement;
						let currentClass = $currentPost.classList;
						let ht1 = parseInt(window.getComputedStyle(this.parentElement, null).height);
						let ht2 = parseInt(window.getComputedStyle(this.parentElement.nextElementSibling, null).height);

						//현재 패널이 열려있을때
						if (currentClass.contains("on")) {
							currentClass.remove("on");
							self.motion.closeInput()();
							let outerHT = ht1;
							$currentPost.style.height = outerHT + "px";
							//현재패널이 닫혀있을때
						} else {
							currentClass.add("on");
							let outerHT = ht1 + ht2;
							$currentPost.style.height = outerHT + "px";
						}
					};
				})(k);
			}
		});
	}
}
