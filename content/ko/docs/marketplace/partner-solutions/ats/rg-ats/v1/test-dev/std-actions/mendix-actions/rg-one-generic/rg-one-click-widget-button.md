---
title: "Widget 버튼 클릭"
url: /appstore/partner-solutions/ats/rg-one-click-widget-button/
---

## 설명

Refresh/Loadmore/ClearSearchField (ListView)/ Goto/Add (ReferenceSelector) 버튼을 클릭합니다.

## 지원 Widget

* ListView
* ReferenceSelector

## 사용법

버튼이 포함된 Widget의 이름을 전달하세요. 제공된 전역 상수에서 버튼 유형을 선택할 수 있습니다.

선택적으로 더블클릭 수행 여부를 지정할 수 있으며, WebElement를 검색 컨텍스트로 제공하여 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 버튼이 포함된 Widget의 이름입니다.
Button | Enumeration | yes | 버튼의 유형입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.
