---
title: "Grid Selector 박스 값 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-grid-selector-box-value/
---

## 설명

현재 체크박스 및 라디오 버튼 값을 반환합니다.

## 지원 Widget

* Grid Selector

## 사용법

찾으려는 체크박스의 Widget 이름, 열 캡션, 행 캡션을 전달하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | Grid Selector Widget의 이름입니다.
Column Caption | String | Yes | 값을 가져오려는 체크박스 셀의 열 캡션입니다.
Row Caption | String | Yes | 값을 가져오려는 체크박스 셀의 행 캡션입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | 체크박스의 현재 값입니다.
