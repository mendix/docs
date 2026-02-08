---
title: "클래스 구현"
url: /howto/front-end/styles/
description: "텍스트 색상, 버튼 및 기타 스타일 요소에 대한 클래스 이름 사용에 대한 세부 정보를 설명합니다."
weight: 45
---

## 소개

이 페이지에는 CSS를 작성하지 않고도 앱을 더 아름답게 만드는 데 사용할 수 있는 유용한 클래스 이름이 포함되어 있습니다. 클래스 이름은 페이지 Widget의 속성에 추가할 수 있습니다. 클래스 이름을 공백으로 구분하여 동일한 Widget에 여러 클래스를 추가할 수 있습니다.

클래스 이름은 두 곳에서 입력할 수 있습니다:

* Studio Pro의 **Properties** 패널
* Widget의 **Properties** 팝업 창

이 사용 방법에서는 다음을 수행하는 방법을 알려줍니다:

* 클래스 이름을 사용하여 텍스트 및 배경 색상, 타이포그래피, 버튼, 리스트 뷰, 알림 및 기타 요소를 구현

## 텍스트 색상

텍스트 색상을 테마 색상으로 변경하려면 다음 클래스를 요소에 추가하세요:

* `text-default`: 기본 텍스트 색상
* `text-primary`: 기본 브랜드 색상
* `text-info`: 정보 브랜드 색상
* `text-success`: 성공 브랜드 색상
* `text-warning`: 경고 브랜드 색상
* `text-danger`: 위험 브랜드 색상

표준 유용한 텍스트 색상:

* `text-white`: 흰색 텍스트
* `text-black`: 검은색 텍스트
* `text-gray-primary`: 기본 회색 텍스트
* `text-gray`: 회색 텍스트
* `text-gray-dark`: 어두운 회색 텍스트
* `text-gray-darker`: 더 어두운 회색 텍스트
* `text-gray-light`: 밝은 회색 텍스트
* `text-gray-lighter`: 더 밝은 회색 텍스트

## 배경 색상

배경 색상은 테마 색상을 기반으로 합니다. 버튼과 동일한 색상입니다:

* `background-primary`: 기본 배경 색상
* `background-info`: 정보 배경 색상
* `background-success`: 성공 배경 색상
* `background-warning`: 경고 배경 색상
* `background-danger`: 위험 배경 색상

배경 색상의 더 밝은 변형은 일치하는 전경 색상도 설정합니다:

* `bg-primary`: 기본 배경 색상
* `bg-info`: 정보 배경 색상
* `bg-success`: 성공 배경 색상
* `bg-warning`: 경고 배경 색상
* `bg-danger`: 위험 배경 색상

레이아웃용 배경 색상:

* `background-layout`: 기본 레이아웃 배경
* `background-layout-secondary`: 대체 레이아웃 배경
* `background-default`: 기본 레이아웃 배경
* `background-default-dark`: 어두운 레이아웃 배경
* `background-default-darker`: 더 어두운 레이아웃 배경
* `background-default-light`: 밝은 레이아웃 배경
* `background-default-lighter`: 더 밝은 레이아웃 배경

## 타이포그래피

텍스트 항목에 유용한 클래스:

* `text-normal`: 일반 텍스트
* `text-bold`: 굵은 텍스트
* `text-spacing`: 텍스트 위아래에 간격 추가
* `text-lined`: 텍스트에 밑줄
* `text-break`: 여러 줄에 걸쳐 텍스트 분할
* `text-uppercase`: 텍스트를 대문자로 변환
* `text-lowercase`: 텍스트를 소문자로 변환
* `text-capitalize`: 모든 단어의 첫 글자를 대문자로

텍스트를 정렬하려면 텍스트를 포함하는 컨테이너에 다음을 추가하세요:

* `text-right`: 텍스트를 오른쪽으로 정렬
* `text-center`: 텍스트를 가운데로 정렬
* `text-left`: 텍스트를 왼쪽으로 정렬 (기본값)

기타:

* `nowrap`: 텍스트 줄바꿈 방지

## 버튼

버튼의 모양을 변경할 수 있습니다:

* `btn-lg`: 큰 버튼
* `btn-sm`: 작은 버튼
* `btn-block`: 부모의 전체 너비에 걸치는 버튼
* `btn-bordered`: 테두리가 있는 버튼
* `btn-transparent`: 투명한 배경
* `btn-image`: 이미지가 잘 정렬된 투명한 버튼
* `pull-right` 또는 `btn-right`: 버튼을 오른쪽으로 정렬
* `btn-attached-right`: 왼쪽 여백 추가
* `btn-attached-left`: 오른쪽 여백 추가
* `btn-attached-bottom`: 상단 여백 추가
* `btn-attached-top`: 하단 여백 추가

## 레이아웃 그리드

레이아웃 그리드의 모양을 변경할 수 있습니다:

* `v-center`: Bootstrap 행의 요소를 수직으로 정렬; 레이아웃 그리드의 행에 이 클래스를 추가
* `no-gutter`: Bootstrap 열의 패딩 제거; 레이아웃 그리드의 행에 이 클래스를 추가

{{% alert color="info" %}}**폰:**

폰의 경우, 열이 나란히 표시되도록 레이아웃 그리드에 `col-xs-N`(`N`은 열의 크기)도 추가하세요.

{{% /alert %}}

그리드 옵션에 대한 자세한 내용(제안 및 예제 포함)은 [Bootstrap CSS Grid Options](https://getbootstrap.com/docs/3.3/css/#grid-options)를 참조하세요.

## 리스트 뷰

리스트에서 항목이 표시되는 방식을 변경:

* `listview-lined`: 리스트 뷰 항목에 하단 테두리만 있는 리스트 뷰 Widget
* `listview-striped`: 줄무늬 리스트 뷰 항목이 있는 리스트 뷰 Widget
* `listview-seperated`: 분리된 리스트 뷰 항목이 있는 리스트 뷰 Widget
* `listview-stylingless`: 간격과 배경이 없는 리스트 뷰 Widget

## 알림

표준 컨테이너로 알림을 만드세요.

* `alert`: 컨테이너를 알림으로 만듦; 다음 클래스와 함께 사용
* `alert-success`: 성공 알림 생성
* `alert-info`: 정보 알림 생성
* `alert-warning`: 경고 알림 생성
* `alert-danger`: 위험 알림 생성

[Bootstrap Alert Component](https://getbootstrap.com/docs/3.3/components/#alerts)도 참조하세요.

## 기타

탭이 표시되는 방식 변경:

* `tab-mobile`: 탭을 전체 너비로 만들고 헤더에 고정

## 더 많은 Bootstrap

이러한 클래스의 대부분은 Bootstrap의 일부입니다. 클래스 및 Bootstrap에 대한 자세한 내용은 [Bootstrap CSS](https://getbootstrap.com/docs/3.3/css/)를 참조하세요.

## 더 읽기

* [Mendix Atlas UI](https://www.mendix.com/atlas/)
