---
title: "JavaScript 실행 (WebElement)"
url: /appstore/partner-solutions/ats/rg-one-execute-javascript-webelement/
---

## 설명

제공된 JavaScript 스니펫을 실행합니다.
Timeout이 설정되면 비동기적으로 실행됩니다.
문자열을 반환합니다.

## 사용법

실행하려는 스크립트를 Action의 파라미터로 전달하세요. 반환 값으로 WebElement를 설정해야 하며, 그렇지 않으면 Action이 실패합니다.
선택적 인수는 배열에 저장되며 스크립트에서 사용할 수 있습니다. 예를 들어 Argument 0 파라미터의 값을 가져오려면 "arguments[0]"을 입력하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- | ---------------
Script | String | yes | 실행하려는 JavaScript 소스 코드입니다.
Timeout(ms) | Integer | no | 스크립트 완료까지의 시간(밀리초)입니다.
Argument 0 | any | no | JavaScript 코드에서 사용할 인수입니다.
Argument 1 | any | no | JavaScript 코드에서 사용할 인수입니다.
Argument 2 | any | no | JavaScript 코드에서 사용할 인수입니다.
Argument 3 | any | no | JavaScript 코드에서 사용할 인수입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Script Result | WebElement | 스크립트에서 설정된 반환 값입니다.
