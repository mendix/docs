---
title: "ID로 요소 찾기"
url: /appstore/partner-solutions/ats/rg-one-find-element-by-id/
---

## 설명

ID로 웹 요소를 찾습니다. Occurrence를 사용하면 결과 목록에서 가져올 요소를 지정할 수 있으며, 첫 번째 요소는 1부터 시작합니다 (기본값은 첫 번째 요소).

## 사용법

찾으려는 요소의 ID를 제공하세요. 이 Action은 해당 ID를 가진 DOM의 모든 요소를 찾아 결과 목록으로 저장합니다. 결과 목록의 첫 번째 요소 대신 다른 요소를 가져오려면 Occurrence에 인덱스를 입력하세요.
선택적으로 지정된 SearchContext 요소로 검색을 제한할 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
ID| String | yes | 가져오려는 요소의 ID입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.
Occurrence | Integer | no | 가져오려는 결과 목록 값의 인덱스입니다 (기본값은 첫 번째 요소).

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Element | WebElement | 원하는 WebElement입니다.
