# 📌 2020.08.15 수업

## 이미지 갤러리

Flickr API 사용하여 이미지 검색 및 결과 리스트 구현

### 작업페이지

**fuction type**

https://yo-onhye.github.io/05.es6-study/200815-es6-class/class-es6-function-flickr/index.html

**class type**

https://yo-onhye.github.io/05.es6-study/200815-es6-class/class-es6-class-flickr/index.html

### Flickr API 사용하기

https://www.flickr.com/services/api

### Flickr REST 요청 형식

**Query String**

```
// url
const url = 'https://www.flickr.com/services/rest/?';

//method (api 호출 방식)
const interest = 'method=flickr.interestingness.getList';
const search = 'method=flickr.photos.search';
```

### 메서드 생성

- 페이지 로드 시 노출될 검색량이 많은 이미지 호출 메서드
- 태그 검색 이미지 호출 메서드

**💡 fetch()**

fetch는 promise가 내장되어 있어 then 사용 가능

**Isotope API VS Masonry API**

게시글 정렬을 위해 사용되는 API로 기능이 비슷하지만, Isotope API는 검색 기능도 제공
