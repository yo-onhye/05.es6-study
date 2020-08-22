export default class {
	constructor() {
		this.$inputBox = document.getElementById("inputBox");
		this.$showBox = document.getElementById("showBox");
	}

	openInput() {
		return () => {
			this.$inputBox.classList.add("on");
			this.$showBox.classList.add("on");
		};
	}

	closeInput() {
		return () => {
			this.$inputBox.classList.remove("on");
			this.$showBox.classList.remove("on");
		};
	}
}
