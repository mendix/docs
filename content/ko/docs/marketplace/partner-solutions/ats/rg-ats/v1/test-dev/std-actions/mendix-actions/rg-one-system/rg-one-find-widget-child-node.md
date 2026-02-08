---
title: "Widget 자식 노드 찾기"
url: /appstore/partner-solutions/ats/rg-one-find-widget-child-node/
---

## 설명

Mendix Widget 내에서 노드를 찾습니다.
Widget 노드 자체도 일치합니다.

## 지원 Widget

* 모든 Widget

## 사용법

상위 Widget의 이름과 찾으려는 자식 노드의 Selector를 전달하세요. [CSS Selector](/appstore/partner-solutions/ats/rg-one-selectors/#css-selectors) 및 [JQuery Selector](/appstore/partner-solutions/ats/rg-one-selectors/#jquery-selectors)를 사용하여 자식 노드의 경로를 정의할 수 있습니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 노드가 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 상위 Widget의 이름입니다.
Child Node Selector | String | yes | 상위 Widget에서 시작하는 자식 노드의 Selector입니다.
Search Context | WebElement | no | 지정된 WebElement로 노드 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Menu Item | WebElement | Web Element로서의 Widget 자식 노드입니다.
