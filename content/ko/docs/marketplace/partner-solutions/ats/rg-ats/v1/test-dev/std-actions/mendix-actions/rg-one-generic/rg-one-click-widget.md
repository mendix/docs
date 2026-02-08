---
title: "Widget 클릭"
url: /appstore/partner-solutions/ats/rg-one-click-widget/
---

## 설명

이름으로 Mendix Widget(예: Button, Link, Image)을 클릭합니다.

## 지원 Widget

모든 Widget.

## 사용법

클릭하려는 Widget의 이름을 Action의 파라미터로 전달하세요.
선택적으로 더블클릭 수행 여부를 지정할 수 있으며, WebElement를 검색 컨텍스트로 제공하여 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 클릭/더블클릭하려는 Widget의 이름입니다.
Doubleclick | Boolean |no | 더블클릭을 수행합니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.
