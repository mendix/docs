---
title: "Grid Selector 값 검증"
url: /appstore/partner-solutions/ats/rg-one-assert-grid-selector-value/
---

## 설명

Grid Selector Widget 내부의 체크박스 및 라디오 버튼 값을 검증합니다.

## 지원 Widget

* Grid Selector

## 사용법

Widget의 이름, 열 및 행 캡션, 그리고 검증하려는 값을 전달하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Widget Name | String | Yes | Widget의 이름입니다.
Column Caption | String | Yes | 검증하려는 체크박스 셀의 열 캡션입니다.
Row Caption | String | Yes | 검증하려는 체크박스 셀의 행 캡션입니다.
Checked | Boolean | Yes | 검증하려는 값입니다 (true 또는 false).
