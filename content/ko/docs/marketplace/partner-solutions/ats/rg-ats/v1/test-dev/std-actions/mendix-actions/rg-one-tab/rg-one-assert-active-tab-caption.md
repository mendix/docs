---
title: "활성 탭 캡션 검증"
url: /appstore/partner-solutions/ats/rg-one-assert-active-tab-caption/
---

## 설명

활성 탭 페이지의 캡션에 대해 지정된 값을 검증합니다.

## 지원 Widget

* TabContainer

## 사용법

탭 Widget 이름과 검증하려는 탭 캡션을 Action의 파라미터로 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 탭 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 탭 Widget의 이름입니다.
Tab Caption | String | yes | 탭의 캡션입니다.
Search Context | WebElement | no | 지정된 WebElement로 DataGrid 행 검색을 제한합니다.
