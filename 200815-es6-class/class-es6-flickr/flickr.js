// 전역변수 설정
const wrap = document.querySelector("#list");
const $btn = document.querySelector(".searchBtn");
const $input = document.querySelector("#search");
const url = "https://www.flickr.com/services/rest/?";
const interest = "flickr.interestingness.getList"; // 검색량이 많은 이미지 호출 메서드
const search = "flickr.photos.search"; // 태그검색 이미지 호출 메서드
const key = "b27343c07ef22647404873055e1a3b3e"; // api_key
const per_page = 10; // 페이지랑 호출할 이미지 갯수
const tagmode = "any"; // 이미지의 종류
const privacy_filter = 5; // 이미지 보안수준
const format = "json"; // 데이터포맷
const nojsoncallback = 1; // 오류방지
let result_url = `${url}method=${interest}&api_key=${key}&per_page=${per_page}&tagmode=${tagmode}&privacy_filter=${privacy_filter}&format=${format}&nojsoncallback=${nojsoncallback}`;

/*----------- 이벤트 연결 -----------*/
// 브라우저 로딩 시
fetchData(result_url)
	.then((data) => createDOM(data))
	.catch((error) => console.log(error));

// 검색 버튼 클릭 시
$btn.onclick = () => {
	let tag = $input.value;
	$input.value = "";

	result_url = `${url}method=${search}&api_key=${key}&per_page=${per_page}&tagmode=${tagmode}&privacy_filter=${privacy_filter}&format=${format}&nojsoncallback=${nojsoncallback}&tags=${tag}`;

	fetchData(result_url)
		.then((data) => createDOM(data))
		.catch((error) => console.log(error));
};

/*----------- 함수 정의 -----------*/
// DOM 생성함수정의
function createDOM(data) {
	let item = data.photos.photo;
	wrap.innerHTML = "";
	// 배열의 갯수만큼 반복을 돌면서 태그,속성노드생성
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

		new_a.setAttributeNode(new_href);
		new_img.setAttributeNode(new_src);
		new_p.innerText = data.title;

		wrap.appendChild(new_li);
		new_li.appendChild(new_div);
		new_div.appendChild(new_a);
		new_div.appendChild(new_p);
		new_a.appendChild(new_img);
	});
}

// 데이터호출함수 정의
function fetchData(url) {
	// fetch로 데이터 호출
	return fetch(url)
		.then((data) =>
			// 해당 데이터를 json()메서드를 활용해서 json객체로 변환
			data.json()
		)
		.then((json) => {
			// 받아지는 json정보값이 있으면
			if (json) {
				// promsie객체를 생성을해서 resolve메서드 내보냄 (.then()호출가능)
				return Promise.resolve(json);
				// 받아지는 json정보값이 없으면
			} else {
				// promise객체를 생성을해서 reject메서드를 내보냄 (.catch()호출가능)
				return Promise.reject(Error("json is undefined!!!"));
			}
		});
}
