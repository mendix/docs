---
title: "커스텀 위젯의 미리보기 이미지 빌드"
linktitle: "커스텀 위젯 미리보기 이미지"
url: /howto8/extensibility/add-a-preview-image-for-custom-widget/
---

## 소개

이 사용 방법 문서에서는 Studio Pro에서 렌더링될 미리보기 이미지를 지정하는 방법을 보여드립니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* 커스텀 위젯의 미리보기 이미지 구성

## 사전 조건

이 사용 방법을 시작하기 전에 다음 사전 조건을 완료하세요:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/) 다운로드 및 설치
* [커스텀 위젯](/howto8/extensibility/widget-development/) 읽기

## 커스텀 위젯 패키지에 미리보기 이미지 추가

커스텀 위젯 XML 구성 파일 옆에 *preview.png*라는 이미지 파일을 넣어야 합니다:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/01_Folder_View.png" class="no-border" >}}

커스텀 위젯을 패키징한 후 제공된 이미지가 사용될 때마다 Studio Pro에서 렌더링됩니다:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/02_Preview.png" class="no-border" >}}

이전 버전의 Studio Pro는 이 이미지를 무시하고 평소처럼 회색 직사각형을 렌더링합니다.
