---
title: "Selenium 지원 구성"
url: /howto/front-end/selenium-support/
weight: 16
description: "명명 규칙에 대한 조언을 포함한 Selenium 모범 사례를 설명합니다."
aliases:
    - /howto/integration/selenium-support/
---

## 소개

Mendix는 Widget 및 팝업 창과 같은 페이지 콘텐츠를 식별하기 위해 CSS 클래스를 사용합니다. Selenium에서 이러한 클래스를 사용하여 페이지를 조작하고 데이터를 확인할 수 있습니다.

이 사용 방법에서는 다음을 수행하는 방법을 알려줍니다:

* 명명 규칙 사용
* 모범 사례 사용

## 명명 규칙

Widget에는 Studio Pro에서 이름을 지정할 수 있습니다. 이러한 이름은 HTML 문서에서 `mx-name-`이 접두사로 붙은 클래스 이름으로 나타납니다. 예를 들어, `ArtistGrid`라는 이름의 그리드는 `mx-name-ArtistGrid` CSS 클래스를 갖게 됩니다. 이는 모든 Widget에 적용됩니다.

그리드와 같은 더 복잡한 Widget은 열이나 페이징 바 버튼과 같은 하위 요소에 더 구체적인 CSS 클래스를 설정할 수 있습니다.

그리드나 리스트 뷰와 같은 일부 Widget은 여러 항목을 표시할 수 있습니다. 각 항목에는 0부터 시작하는 인덱스 번호가 뒤따르는 `mx-name-index-` CSS 클래스가 있습니다.

이러한 이름을 발견하는 가장 쉬운 방법은 브라우저의 개발자 도구를 사용하는 것입니다.

## 모범 사례

### 중첩된 Widget

모든 Widget에는 고유한 클래스 이름이 있으므로, Selenium에서 이름만을 선택자로 사용할 수 있습니다. 이렇게 하면 버튼을 한 컨테이너에서 다른 컨테이너로 이동하는 것과 같은 페이지 변경에 대해 강건해집니다. 그러나 그리드의 페이징 바에 있는 버튼과 같은 일부 하위 요소는 고유하지 않습니다. 이러한 요소를 선택하려면 `.mx-name-artist-grid .mx-name-next`와 같은 하위 선택자를 사용하세요. 먼저 아티스트 그리드를 선택한 다음 해당 그리드에서 다음 페이지 버튼을 검색합니다.

### 타이밍 문제

Selenium이 수행하는 일부 작업은 완료하는 데 시간이 걸립니다. 예를 들어, 애니메이션이나 팝업 창에 대한 데이터 요청 등이 있습니다. 그리드에서 검색 버튼을 클릭하면 애니메이션을 사용하여 검색 바가 나타납니다. 이는 버튼을 클릭한 후 계속하기 전에 애니메이션이 완료될 때까지 테스트가 기다려야 함을 의미합니다.

자세한 내용은 WebDriver 문서의 [Waiting Strategies](https://www.selenium.dev/documentation/webdriver/waits/)를 참조하세요.

## 예제

페이지에서 `Execute`라는 이름의 Microflow 버튼 선택:

```javascript
$('.mx-name-Execute')

```

`ArtistGrid`라는 이름의 그리드에서 네 번째 행 선택:

```javascript
$('.mx-name-ArtistGrid .mx-name-index-3')

```

그리드에서 네 번째 행의 인덱스는 `3`입니다.

## 더 읽기

* [Selenium IDE를 사용한 Mendix 애플리케이션 테스트](/howto/testing/testing-mendix-applications-using-selenium-ide/)
* [복잡한 웹 서비스 사용](/howto/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 사용](/howto/integration/consume-a-simple-web-service/)
* [Excel 문서 가져오기](/howto/integration/importing-excel-documents/)
* [XML 문서 내보내기](/howto/integration/export-xml-documents/)
* [웹 서비스 노출](/howto/integration/expose-a-web-service/)
* [XML 문서 가져오기](/howto/integration/importing-xml-documents/)
