---
title: "Dialog 찾기/검증"
url: /appstore/partner-solutions/ats/rg-one-findassert-dialog/
---

## 설명

제목 또는 유형으로 Dialog를 찾거나 검증합니다.

## 지원 Widget

* Window
* DialogMessage
* ConfirmationDialog

## 사용법

선택적으로 Dialog 제목과 Dialog 유형을 제공하여 찾으려는 Dialog를 지정할 수 있습니다. 그렇지 않으면 이 Action은 처음 발견된 활성 Dialog를 반환합니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | 취소하려는 Dialog의 제목입니다.
Dialog Type | Enumeration | no | 취소하려는 Dialog의 유형입니다.
Message Text | String | no | Dialog의 메시지 텍스트입니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Dialog | WebElement | Web Element로서의 Dialog입니다.
