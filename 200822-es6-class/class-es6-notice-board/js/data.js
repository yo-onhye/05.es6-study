export default class {
	//생성자 함수로 데이터가 저장될 배열을 생성
	constructor() {
		this._db = [
			{
				title: "What is Lorem Ipsum?",
				content: "content1 dummy contents come here in detail.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
				date: "2020-08-15",
			},
			{
				title: "Where does it come from?",
				content: "Contrary to popular belief, Lorem Ipsum is not simply random text. <br><br>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <br><br>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
				date: "2020-08-16",
			},
			{
				title: "Why do we use it?",
				content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br><br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
				date: "2020-08-17",
			},
		];
	}

	//배열의 데이터를 외부로 내보내는 메서드
	read() {
		return this._db;
	}

	//인수값으로 전달받은 데이터를 배열에 저장해주는 메서드
	insert(data) {
		if (!data) return;

		let post = {
			title: data.title,
			content: data.content,
			date: this.formatDate(),
		};
		this._db.unshift(post);
		console.log(this._db);
	}

	//인수값으로 전달받은 순서값으로 배열의 데이터를 삭제
	delete(index) {
		this._db.splice(index, 1);
	}

	//인수값으로 전달받은 순서값, 데이터로 해당 순서값의 데이트를 변경
	modify(data, index) {
		if (!data) return;

		let post = {
			title: data.title,
			content: data.content,
			date: this.formatDate(),
		};
		this._db[index] = post;
	}

	//날짜를 보기좋게 정리해주는 메서드
	formatDate() {
		let date = new Date();
		let month = "" + (date.getMonth() + 1);
		let day = "" + date.getDate();
		let year = date.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	}
}
