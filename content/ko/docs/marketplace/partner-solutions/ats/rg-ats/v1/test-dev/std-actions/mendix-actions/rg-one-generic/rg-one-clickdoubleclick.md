---
title: "클릭/더블클릭"
url: /appstore/partner-solutions/ats/rg-one-clickdoubleclick/
---

## 설명

클릭 또는 더블클릭을 수행하고 Mendix 활동을 기다립니다.

## 지원 Widget

* 모든 WebElement

## 사용법

클릭하려는 WebElement를 Action의 파라미터로 전달하세요. WebElement를 가져오려면 [Find/Assert Widget](/appstore/partner-solutions/ats/rg-one-findassert-widget/)과 같은 Action을 사용하세요.
선택적으로 더블클릭 수행 여부를 지정할 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Element | WebElement | yes | 클릭/더블클릭하려는 WebElement입니다.
Doubleclick | Boolean |no | 더블클릭을 수행합니다.
