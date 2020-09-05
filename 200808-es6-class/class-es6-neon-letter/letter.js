window.onload = () => {
	// section1 animation
	let textAnimation1Js = (selecotr) => {
		let elTarget = document.querySelector(selecotr);
		let sTargettxt = elTarget.innerText;
		let nRandom1 = Math.floor(Math.random() * (sTargettxt.length - 0));
		let nRandom2 = Math.floor(Math.random() * (sTargettxt.length - 0));
		let nRandom3 = Math.floor(Math.random() * (sTargettxt.length - 0));
		let index = 0;
		elTarget.innerText = "";

		for (let i of sTargettxt) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("logo" + index);
			newSpan.innerText = i;
			elTarget.appendChild(newSpan);
			if ((index === nRandom1) | (index === nRandom2) | (index === nRandom3)) {
				document.querySelector(".logo" + index).classList.add("blink");
			}
			index++;
		}
	};

	// section2 animation
	let opacityAniJs = (selector, delay) => {
		let elTarget = document.querySelector(selector);
		elTarget.style.opacity = 1;
		elTarget.style.transitionDelay = delay + "s";
		elTarget.style.transform = "translateX(0px) translateY(0px) translateZ(0px)";
	};

	// section3 animation
	let intervalAniJs = (selector) => {
		let elTarget = document.querySelector(selector);
		let sTargettxt = elTarget.innerText;
		let nRandom1 = Math.floor(Math.random() * (sTargettxt.length - 0));
		let nRandom2 = Math.floor(Math.random() * (sTargettxt.length - 0));
		let index = 0;
		elTarget.innerText = "";

		for (let i of sTargettxt) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("s" + index);
			newSpan.innerText = i;
			elTarget.appendChild(newSpan);
			newSpan.style.opacity = 1;
			newSpan.style.animationDelay = Math.floor(Math.random() * (sTargettxt.length - 0)) * 0.5 + "s";
			if ((index === nRandom1) | (index === nRandom2)) {
				elTarget.querySelector(".s" + index).classList.add("blink");
			}
			index++;
		}
	};

	// section4 animation
	let floatingAniJS = (selector) => {
		let elTarget = document.querySelector(selector);
		let elSplitText = new SplitText(elTarget);

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}

		elSplitText.chars.each = (i) => {
			TweenMax.from($(this), 2.5, {
				opacity: 0,
				x: random(-500, 500),
				y: random(-500, 500),
				z: random(-500, 500),
				scale: 0.1,
				delay: i * 0.02,
				yoyo: true,
				repeat: -1,
				repeatDelay: 10,
			});
		};
	};

	let typingAniJS = (selector) => {
		let elTarget = document.querySelector(selector);
		let sTargettxt = elTarget.innerText;
		let index = 0;
		elTarget.innerText = "";

		for (let i of sTargettxt) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("s" + index);
			newSpan.innerText = i;
			elTarget.appendChild(newSpan);
			newSpan.style.animationDelay = index * 0.05 + "s";
			index++;
		}
	};

	textAnimation1Js(".text1");
	opacityAniJs(".text2", 0.5);
	opacityAniJs(".text2_1", 1);
	intervalAniJs(".text3");
	intervalAniJs(".text3_1");
	typingAniJS(".text4");
	typingAniJS(".text4_1");
};
