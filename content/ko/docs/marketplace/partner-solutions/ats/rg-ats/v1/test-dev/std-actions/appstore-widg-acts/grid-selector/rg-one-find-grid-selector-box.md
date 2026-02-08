---
title: "Grid Selector 박스 찾기"
url: /appstore/partner-solutions/ats/rg-one-find-grid-selector-box/
---

## 설명

열 및 행 캡션으로 체크박스와 라디오 버튼을 찾습니다.

## 지원 Widget

* Grid Selector

## 사용법

상위 Widget의 이름, 열 캡션, 행 캡션을 전달하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | Grid Selector Widget의 이름입니다.
Column Caption | String | Yes | 찾으려는 체크박스 셀의 열 캡션입니다.
Row Caption | String | Yes | 찾으려는 체크박스 셀의 행 캡션입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Box | WebElement | 찾은 체크박스 및 라디오 버튼입니다.
