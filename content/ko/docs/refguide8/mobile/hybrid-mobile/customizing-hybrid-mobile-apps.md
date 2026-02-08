---
title: "하이브리드 모바일 앱 커스터마이징"
url: /refguide8/customizing-hybrid-mobile-apps/
---

## 소개

Mendix Developer App과 생성된 하이브리드 모바일 앱에는 자체 `index.html` 파일이 포함되어 있습니다. 이 인덱스 파일은 CSS 파일 등을 추가하기 위해 직접 편집할 수 없습니다. 그러나 *components.json*이라는 파일을 통해 인덱스 파일을 간접적으로 변경할 수 있습니다. 여기에서 CSS 및 JavaScript 파일을 추가할 수 있습니다. 다음은 *components.json*의 초기 내용입니다:

## 표준 components.json

```js
{
    "files": {
        "css": ["styles/web/css/main.css"],
        "js": ["mxclientsystem/mxui/mxui.js"]
    },
    "cachebust": "{{cachebust}}"
}

```

더 많은 리소스를 포함하려면 테마의 루트에 자체 *components.json* 파일을 추가하면 됩니다. 위의 버전을 복사하고 자체 파일을 추가하십시오. 다음은 `index.html`에 JavaScript 파일을 동적으로 추가하는 예시입니다:

## 커스텀 components.json

```js
{
    "files": {
        "css": ["styles/web/css/main.css"],
        "js": [
		"mxclientsystem/mxui/mxui.js",
		"myOwnCode.js"
	]
    },
    "cachebust": "{{cachebust}}"
}
```
