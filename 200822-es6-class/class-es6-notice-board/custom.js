//외부 모듈을 임포트로 불러오기
import Data from "./js/data.js";
import InputEvent from "./js/inputEvent.js";
import ShowList from "./js/showList.js";
import Motion from "./js/motion.js";

//Motion 모듈로부터 인스턴스 생성
//openInput(), closeInput()메서드 사용가능
let motion = new Motion();

//btnInput버튼 클릭스 inputBox 열림
const $btnInput = document.getElementById("btnInput");
$btnInput.onclick = motion.openInput();

let modifyIndex; //수정버튼 클릭시 해당 포스트의 순서값이 저장될 전역변수
let mode = "write"; //현재 모드는 글쓰기 모드

//Data모듈로부터 인스턴스 생성
//Data모듈안의 insert(), read(), delete(), modify() 호출가능
let data = new Data();

//ShowList모듈로부터 인스턴스 생성
//ShowList모듈안의 render()호출가능
let showList = new ShowList({
	//인스턴스 생성시 del, modify함수 콜백으로 전달
	del: function (index) {
		data.delete(index);
		showList.render(data.read());
	},
	modify: function (index) {
		mode = "modify"; //현재 모드를 수정모드로 변경
		modifyIndex = index; //수정할 포스트의 순서값을 전역변수에 할당
	},
	motion: motion,
});

//기존 배열에 데이터가 있을시 화면에 출력
showList.render(data.read());

//InputEvent모듈에서 인스턴스를 생성
//인스턴스 생성할때 인수값으로 Data모듈에 있는 저장함수를 콜백으로 전달
let inputEvent = new InputEvent({
	save: function (value) {
		if (mode == "write") {
			data.insert(value);
			showList.render(data.read());
			motion.closeInput()();
		} else {
			data.modify(value, modifyIndex);
			showList.render(data.read());
			motion.closeInput()();
			mode = "write";
		}
	},
	motion: motion,
});
