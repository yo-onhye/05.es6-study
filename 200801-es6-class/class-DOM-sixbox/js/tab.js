window.onload = function () {
	// getElementById는 하나의 요소만 존재하기 때문에 배열을 리턴하지 않는다.
	var $wrap = document.getElementById("wrap");
	// getElementsByTagName, getElementsByClassName은 배열을 리턴하기 때문에 첫 번째 요소를 지정한다.
	var $nav = document.getElementsByTagName("nav")[0];
	var $nav_li = $nav.getElementsByTagName("li");
	var len = $nav_li.length;

	for (var i = 0; i < len; i++) {
		(function (index) {
			$nav_li[index].onclick = function () {
				// className을 사용하면 문자열을 제거하고, 쓰는 것이기 때문에 removeClass, addClass가 필요 없다.
				$wrap.className = "box" + index;

				for (var k = 0; k < len; k++) {
					$nav_li[k].className = "";
				}
				$nav_li[index].className = "on";
			};
		})(i);
	}
};