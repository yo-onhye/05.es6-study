export default class {
	constructor({ save, motion }) {
		//해당 클래스로 인스턴스 생성시 외부에서 콜백을 전달받음
		//let self = this;
		this.$title = document.getElementById("title");
		this.$content = document.getElementById("content");
		this.$btn = document.getElementById("send");
		this.$btnCancel = document.getElementById("cancel");
		this.save = save;
		this.motion = motion;

		let self = this;
		self.$btn.onclick = function () {
			//버튼을 클릭시 해당요소의 value값으 구함
			let titleValue = self.$title.value;
			let contentValue = self.$content.value.replace(/\n/g, "<br>");
			//일반적인 replace는 앞의 한문자열만 바꿔주기 때문에
			//여러문자열을 동시에 바꾸기 위해서는 정규표현식 필요
			//  /바꿀문자열/g

			if (titleValue == "" || contentValue == "") {
				window.alert("모든정보를 입력해주세요");
				return;
			} else {
				let dataValue = {
					title: titleValue,
					content: contentValue,
				};
				self.$title.value = "";
				self.$content.value = "";

				self.save(dataValue);
			}
		};

		self.$btnCancel.onclick = function () {
			self.$title.value = "";
			self.$content.value = "";
			motion.closeInput()();
		};
	}
}
