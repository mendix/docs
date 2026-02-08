---
title: "항목/행 찾기 (자식 요소 기준)"
url: /appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/
---

## 설명

지정된 요소를 포함하는 TemplateGrid, DataGrid 또는 ListView의 항목 또는 행을 찾습니다.

## 지원 Widget

* DataGrid
* TemplateGrid
* ListView

## 사용법

찾으려는 항목 또는 행에 있는 자식 WebElement(예: 특정 버튼 또는 DataView)를 제공하세요.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Child Element | WebElement | yes | 항목/행 내의 WebElement입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | DataGrid 행 또는 TemplateGrid/ListView 항목입니다.
