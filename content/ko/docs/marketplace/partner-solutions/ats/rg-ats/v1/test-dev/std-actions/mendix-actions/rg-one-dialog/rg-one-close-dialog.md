---
title: "Dialog 닫기"
url: /appstore/partner-solutions/ats/rg-one-close-dialog/
---

## 설명

Confirmation, Error, Warning 또는 Info Dialog의 [x] 버튼을 클릭합니다.

## 지원 Widget

* Window
* DialogMessage
* ConfirmationDialog

## 사용법

선택적으로 Dialog 제목과 Dialog 유형을 제공하여 닫으려는 Dialog를 지정할 수 있습니다. 그렇지 않으면 이 Action은 처음 발견된 활성 Dialog를 닫습니다.
이 Action은 Dialog 상단의 [x] 버튼을 누르는 것과 동일합니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | 취소하려는 Dialog의 제목입니다.
Dialog Type | Enumeration | no | 취소하려는 Dialog의 유형입니다.
