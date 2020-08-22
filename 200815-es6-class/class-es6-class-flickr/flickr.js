class Flickr {
	constructor(option) {
		this.option = option;
		this.init(this.option);
		this.bindingEvent();
	}

	init = (option) => {
		this.$wrap = document.querySelector(option.wrap);
		this.$list = document.querySelector(option.list);
		this.$btn = document.querySelector(option.btn);
		this.$input = document.querySelector(option.input);
		this.key = option.key;
		this.per_page = option.per_page;

		this.url = "https://www.flickr.com/services/rest/?";
		this.interest = "flickr.interestingness.getList";
		this.search = "flickr.photos.search";
		this.tagmode = "any";
		this.privacy_filter = 5;
		this.format = "json";
		this.nojsoncallback = 1;
		this.base_url = `${this.url}api_key=${this.key}&per_page=${this.per_page}&tagmode=${this.tagmode}&privacy_filter=${this.privacy_filter}&format=${this.format}&nojsoncallback=${this.nojsoncallback}`;
		this.result_url = `${this.base_url}&method=${this.interest}`;
	};

	bindingEvent = () => {
		//브라우저 로딩시
		this.fetchData(this.result_url)
			.then((data) => this.createDOM(data))
			.catch((error) => console.log(error))
			.then(
				setTimeout(() => {
					this.isoLayout(this.$list);
				}, 1000)
			);

		//검색어버튼 클릭시
		this.$btn.onclick = () => {
			let tag = this.$input.value;
			if (tag == "") {
				alert("검색어를 입력하세요.");
				return;
			}

			this.result_url = `${this.base_url}&method=${this.search}&tags=${tag}`;

			this.fetchData(this.result_url)
				.then((data) => this.createDOM(data))
				.catch((error) => console.log(error))
				.then(
					setTimeout(() => {
						this.isoLayout(this.$list);
					}, 1000)
				);
		};
	};

	fetchData = (url) => {
		return fetch(url)
			.then((data) => data.json())
			.then((json) => {
				if (json) {
					return Promise.resolve(json);
				} else {
					return Promise.reject(Error("json is undefined!!"));
				}
			});
	};

	createDOM = (data) => {
		let item = data.photos.photo;
		this.$list.innerHTML = "";
		this.$wrap.classList.remove("on");

		console.log(data.length);

		item.map((data, index) => {
			let new_li = document.createElement("li");
			let new_div = document.createElement("div");
			let new_a = document.createElement("a");
			let new_img = document.createElement("img");
			let new_p = document.createElement("p");
			let new_href = document.createAttribute("href");
			let new_src = document.createAttribute("src");

			new_href.value = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
			new_src.value = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

			new_li.classList.add("item");
			new_a.setAttributeNode(new_href);
			new_img.setAttributeNode(new_src);
			new_p.innerText = data.title;

			this.$list.appendChild(new_li);
			new_li.appendChild(new_div);
			new_div.appendChild(new_a);
			new_div.appendChild(new_p);
			new_a.appendChild(new_img);
		});

		setTimeout(() => {
			this.$wrap.classList.add("on");
		}, 1000);
	};

	isoLayout = (target) => {
		new Isotope(target, {
			itemSelector: ".item",
			columnWidth: ".item",
			transitionDuration: "0.5s",
			percentPosition: true,
		});
	};
}
