---
title: "클래스 구현하기"
url: /howto8/front-end/styles/
description: "텍스트 색상, 버튼 및 기타 스타일 요소에 대한 클래스 이름 사용에 대한 세부 정보를 제공합니다."
weight: 45
---

## 소개

이 페이지에는 CSS를 작성하지 않고도 앱을 더 아름답게 만드는 데 사용할 수 있는 유용한 클래스 이름이 포함되어 있습니다. 클래스 이름은 페이지 위젯의 속성에 추가할 수 있습니다. 공백으로 클래스 이름을 구분하여 동일한 위젯에 여러 클래스를 추가할 수 있습니다.

클래스 이름은 두 위치에서 입력할 수 있습니다:

* Studio Pro의 **Properties** 패널
* 위젯의 **Properties** 팝업 창

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 클래스 이름을 사용하여 텍스트 및 배경 색상, 타이포그래피, 버튼, 목록 보기, 알림 및 기타 요소 구현하기

## 텍스트 색상

요소에 이 클래스를 추가하여 텍스트 색상을 테마 색상으로 변경하십시오:

* `text-default`: 기본 텍스트 색상
* `text-primary`: 기본 브랜드 색상
* `text-info`: 정보 브랜드 색상
* `text-success`: 성공 브랜드 색상
* `text-warning`: 경고 브랜드 색상
* `text-danger`: 위험 브랜드 색상

유용한 표준 텍스트 색상입니다:

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

레이아웃용 배경 색상입니다:

* `background-layout`: 기본 레이아웃 배경
* `background-layout-secondary`: 대안 레이아웃 배경
* `background-default`: 기본 레이아웃 배경
* `background-default-dark`: 어두운 레이아웃 배경
* `background-default-darker`: 더 어두운 레이아웃 배경
* `background-default-light`: 밝은 레이아웃 배경
* `background-default-lighter`: 더 밝은 레이아웃 배경

## 타이포그래피

텍스트 항목에 유용한 클래스입니다:

* `text-normal`: 보통 텍스트
* `text-bold`: 굵은 텍스트
* `text-spacing`: 텍스트 위아래에 간격 추가
* `text-lined`: 텍스트에 밑줄
* `text-break`: 여러 줄에 걸쳐 텍스트 나누기
* `text-uppercase`: 텍스트를 대문자로 변환
* `text-lowercase`: 텍스트를 소문자로 변환
* `text-capitalize`: 모든 단어의 첫 글자를 대문자로

텍스트를 정렬하려면 텍스트가 포함된 컨테이너에 다음을 추가하십시오:

* `text-right`: 텍스트를 오른쪽으로 정렬
* `text-center`: 텍스트를 가운데로 정렬
* `text-left`: 텍스트를 왼쪽으로 정렬 (기본값)

기타:

* `nowrap`: 텍스트 줄 바꿈 안 함

## 버튼

버튼의 모양을 변경할 수 있습니다:

* `btn-lg`: 큰 버튼
* `btn-sm`: 작은 버튼
* `btn-block`: 부모의 전체 너비에 걸치는 버튼
* `btn-bordered`: 테두리 있는 버튼
* `btn-transparent`: 투명 배경
* `btn-image`: 이미지가 깔끔하게 정렬된 투명 버튼
* `pull-right` 또는 `btn-right`: 버튼을 오른쪽으로 정렬
* `btn-attached-right`: 왼쪽 여백 추가
* `btn-attached-left`: 오른쪽 여백 추가
* `btn-attached-bottom`: 위쪽 여백 추가
* `btn-attached-top`: 아래쪽 여백 추가

## Layout Grid

Layout Grid의 모양을 변경할 수 있습니다:

* `v-center`: Bootstrap 행의 요소를 수직으로 정렬; Layout Grid의 행에 이 클래스를 추가하십시오
* `no-gutter`: Bootstrap 열의 패딩 제거; Layout Grid의 행에 이 클래스를 추가하십시오

{{% alert color="info" %}}**휴대폰:**

휴대폰의 경우 열이 서로 옆에 나타나도록 Layout Grid에 `col-xs-N` (여기서 `N`은 열의 크기)도 추가하십시오.

{{% /alert %}}

그리드 옵션에 대한 자세한 내용(제안 및 예제 포함)은 [Bootstrap CSS Grid Options](https://getbootstrap.com/docs/3.3/css/#grid-options)를 참조하십시오.

## List View

목록에서 항목이 나타나는 방식을 변경하십시오:

* `listview-lined`: 목록 보기 항목에 하단 테두리만 있는 목록 보기 위젯
* `listview-striped`: 줄무늬 목록 보기 항목이 있는 목록 보기 위젯
* `listview-seperated`: 분리된 목록 보기 항목이 있는 목록 보기 위젯
* `listview-stylingless`: 간격과 배경이 없는 목록 보기 위젯

## 알림

표준 컨테이너로 알림을 만드십시오.

* `alert`: 컨테이너를 알림으로 만듦; 다음 클래스와 함께 사용하십시오
* `alert-success`: 성공 알림 생성
* `alert-info`: 정보 알림 생성
* `alert-warning`: 경고 알림 생성
* `alert-danger`: 위험 알림 생성

[Bootstrap Alert Component](https://getbootstrap.com/docs/3.3/components/#alerts)도 참조하십시오.

## 기타

탭이 나타나는 방식을 변경하십시오:

* `tab-mobile`: 탭을 전체 너비로 만들고 헤더에 고정

## Bootstrap 추가 정보

이러한 클래스의 대부분은 Bootstrap의 일부입니다. 클래스 및 Bootstrap에 대한 자세한 내용은 [Bootstrap CSS](https://getbootstrap.com/docs/3.3/css/)를 참조하십시오.

## 더 읽기

* [Mendix Atlas UI](https://atlas2.mendix.com/)
