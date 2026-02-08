---
title: "좌표 클릭"
url: /appstore/partner-solutions/ats/rg-one-click-coordinates/
---

## 설명

현재 페이지의 특정 지점으로 이동하여 클릭합니다. 실제 시스템 마우스 포인터는 이동하지 않습니다.

## 사용법

수평 및 수직 좌표를 X 및 Y 오프셋으로 전달하세요. 기본적으로 현재 페이지의 왼쪽 상단 모서리가 원점으로 사용됩니다.

참조 요소에서 시작하려면 원하는 참조 요소를 전달하세요. ATS는 참조 요소의 왼쪽 상단 모서리를 원하는 클릭 위치를 계산하기 위한 새로운 원점으로 사용합니다.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- | ---------------
X Offset | Integer | Yes | 페이지 또는 지정된 참조 요소의 왼쪽 상단 모서리로부터의 수평 좌표입니다.
Y Offset | Integer | Yes | 페이지 또는 지정된 참조 요소의 왼쪽 상단 모서리로부터의 수직 좌표입니다.
Reference Element | WebElement | No | 지정된 경우, 참조 요소가 좌표 측정의 원점으로 사용됩니다.
