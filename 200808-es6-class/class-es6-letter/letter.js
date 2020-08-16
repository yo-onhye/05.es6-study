var letterJS = (selector) => {
	const wrap = document.querySelector(selector);
	// str에 title에 있는 문자열을 옮겨담는다.
	let str = wrap.innerText;
	// 문자 구조를 변경해야 함으로 innerText를 사용하여 문자열을 비워준다.
	wrap.innerText = "";
	let index = 0;

	// 문자열은 객체로 인식되어 반복문을 돌릴 수 있다.
	for (let i of str) {
		let newSpan = document.createElement("span");
		newSpan.classList.add("s" + index);
		newSpan.innerText = i;
		newSpan.style.transitionDelay = 0.1 * index + "s";
		newSpan.style.animationDelay = 0.1 * index + "s";
		// stretch를 이용하여 문자열 크기를 설정하면 될것 같다!
		wrap.appendChild(newSpan);
		index++;
	}
};

letterJS("#title");
letterJS("#title2");
letterJS("#title3");
