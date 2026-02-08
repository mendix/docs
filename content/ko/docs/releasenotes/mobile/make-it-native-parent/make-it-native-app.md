---
title: "Make It Native 8 앱"
url: /releasenotes/mobile/make-it-native-app/
weight: 10
description: "이 릴리스 노트는 iOS 및 Android Make It Native 앱 버전의 각 릴리스를 보여줍니다."
---

{{% alert color="info" %}}
Make It Native 8은 Mendix 8의 LTS 버전에서만 사용해야 합니다.
{{% /alert %}}

Make It Native 앱에 대한 자세한 내용은 [Make It Native 앱 다운로드](/refguide9/getting-the-make-it-native-app/)를 참조하세요.

## Android 2.2.2 / iOS 2.2.2

**릴리스 날짜: 2021년 3월 25일**

### 새로운 기능

* 명확성을 위해 iOS와 Android 버전 번호를 통합했습니다.
* 앱이 이제 Mendix Studio Pro 9를 올바르게 식별하고 Make It Native 9 버전 설치를 안내합니다.

## Android 2.1.1

**릴리스 날짜: 2021년 2월 12일**

### 수정 사항

* 이미지 선택기가 기기에 중복 이미지를 생성하는 버그를 수정했습니다.
* 리스트 뷰에서 텍스트 필드를 선택할 때 소프트 키보드가 숨겨지는 버그를 수정했습니다.

## Android 2.1.0 / iOS 2.2.0

**릴리스 날짜: 2020년 6월 24일**

### 새로운 기능

* iOS Make It Native 앱에 새로운 쇼케이스 앱을 추가했습니다: Native Banking 앱. Native Banking 앱은 Mendix로 완전히 만들어진 기능적인 뱅킹 앱을 보여줍니다.

### 수정 사항

* 앱의 방향이 변경될 때 뷰포트가 올바르게 크기 조정되지 않는 iOS 문제를 수정했습니다.

## Android 2.1.0 / iOS 2.1.0

**릴리스 날짜: 2020년 5월 15일**

### 새로운 기능

Mendix Studio Pro 8.10 이상에서는 동기화 시점 결정 책임이 클라이언트로 돌아갑니다. 이를 통해 더 빠른 리로드와 릴리스 앱과 더 잘 일치하는 동기화 동작이 가능합니다. Mendix Studio Pro 8.9의 동작은 변경되지 않습니다. 

## Android 2.0.1 / iOS 2.0.0

**릴리스 날짜: 2020년 4월 30일**

### 수정 사항

* QR 코드 스캔 시 지원되지 않는 Studio Pro 버전 대화 상자가 잘못 표시되어 앱 로드를 거부하는 Android 문제를 수정했습니다.

## Android 2.0.0 / iOS 2.0.0 {#two-zero-zero}

**릴리스 날짜: 2020년 4월 28일**

{{% alert color="info" %}}
종속성 업그레이드로 인해 Make It Native 2.0.0의 두 버전 모두 Studio Pro 8.9 이전 버전과 호환되지 않습니다. Mendix는 Studio Pro 8.18 이상으로 업그레이드한 후 최신 버전의 Make It Native 8 앱을 다운로드하는 것을 권장합니다. 
{{% /alert %}}

### 새로운 기능

* 모든 새로운 Mendix Studio Pro 8.9 기능에 대한 지원을 추가했습니다. 
* iOS에서 Atlas UI 샘플 앱이 플랫폼의 모든 새로운 기능을 보여주도록 업데이트되었습니다.

## Android 1.3.0 / iOS 1.3.0

**릴리스 날짜: 2020년 4월 1일**

{{% alert color="info" %}}
Mendix Studio Pro 8.8 이상에서 작업하는 경우 Make It Native 앱을 이 버전으로 업데이트해야 합니다. 

이전 버전의 Studio Pro를 사용하는 경우 [여기](/refguide9/getting-the-make-it-native-app/)에서 적절한 레거시 앱을 설치하세요.
{{% /alert %}}

### 새로운 기능

* 모든 새로운 Mendix Studio Pro 8.8 기능에 대한 지원을 추가했습니다. 

### 수정 사항

* iOS에서 더 이상 사용되지 않는 UIWebView 라이브러리를 제거하기 위해 종속성을 업데이트했습니다.
* 인스펙터 오버레이에서 **Touchable** 옵션을 사용하여 디버깅할 때 네이티브 모바일 앱이 충돌하는 [문제를 수정](/releasenotes/studio-pro/8.8/#417)했습니다.

## Android 1.2.3 / iOS 1.2.5

**릴리스 날짜: 2020년 3월 11일**

### 수정 사항

* 동기화 관련 문제를 수정했습니다. 프로젝트의 변경 사항이 이제 리로드 후 앱에 올바르게 반영됩니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.2.2 / iOS 1.2.4

**릴리스 날짜: 2020년 2월 4일**

### 수정 사항

* 다양한 사소한 버그를 수정했습니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.2.1 / iOS 1.2.3

**릴리스 날짜: 2019년 12월 17일**

### 개선 사항

* iOS에서 보다 일관된 키보드 회피 동작을 도입했습니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.2.1 / iOS 1.2.2

**릴리스 날짜: 2019년 11월 26일**

### 새로운 기능

* Mendix Studio Pro 8.4 SVG 이미지 기능에 대한 지원을 추가했습니다.

Android:

* 패키저가 적시에 응답하지 않을 경우 앱이 이전 프로젝트의 캐시된 버전을 열 수 있는 문제를 수정했습니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.2.0 / iOS 1.2.1

**릴리스 날짜: 2019년 11월 6일**

### 개선 사항

iOS:

* 특정 iOS 13 기기에서 Make It Native가 충돌할 수 있는 문제를 수정했습니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.2.0 / iOS 1.2.0

**릴리스 날짜: 2019년 10월 29일**

### 새로운 기능

* 이 버전은 [Mendix Studio Pro 8.3](/releasenotes/studio-pro/8.3/)에 대한 지원을 추가합니다.
* Make It Native 앱에 스타일과 레이아웃에 대한 인사이트를 제공하는 새로운 **Toggle Inspector** 개발자 메뉴 옵션이 추가되었습니다. 이 옵션을 사용하면 스타일을 디버그하고, 쉽게 변경하며, Make It Native 앱에서 직접 결과를 평가할 수 있습니다. 이 옵션이 네이티브 Mendix 앱을 위한 기능이 풍부하고 매력적인 레이아웃을 만드는 경험을 크게 향상시킨다고 생각합니다.
* Make It Native 앱이 이제 Atlas UI 다크 모드를 완전히 지원합니다. 

### 개선 사항

iOS:

* QR 코드 스캐너를 개선하여 이제 더 일관되게 작동합니다. 
* 기본 Atlas UI 테마와 대비되도록 상태 표시줄을 변경했습니다.

Android:

* 다양한 성능 병목 현상을 해결하기 위해 Android 앱의 아키텍처를 재설계했습니다.

### 알려진 문제

* 인스펙터 오버레이에서 **Touchable** 옵션을 사용할 때 Mendix Native 앱이 충돌합니다.
    * [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)에서 수정되었습니다.

## Android 1.1.0 / iOS 1.1.0

**릴리스 날짜: 2019년 9월 30일**

### 새로운 기능

* Make It Native 앱이 이제 태블릿을 지원합니다. 이제 태블릿에서 Make It Native 앱을 사용하여 Mendix 애플리케이션을 실행하고 테스트할 수 있습니다. 

### 개선 사항

* 전체 기기 방향 기능을 활성화했습니다. 이제 모든 기기 방향에서 앱을 테스트할 수 있습니다.
* **Dev Mode**가 비활성화된 경우 번들 크기를 최적화하여 로딩 성능을 개선했습니다. 

### 수정 사항

* <a id="153"></a>시작 화면을 통해 Android에서 데이터를 지울 때 쿠키가 올바르게 지워지지 않는 문제를 수정했습니다.

## Android 1.0.0 / iOS 1.0.2

**릴리스 날짜: 2019년 8월 1일**

* Mendix Studio Pro 8.0을 지원하는 Android 및 iOS 버전의 Make It Native 앱의 공식 릴리스입니다. Android 및 iOS 버전 모두 지원되는 모든 모바일 플랫폼에서 로컬로 실행 중인 네이티브 앱을 미리 보고 디버그할 수 있습니다. 이 앱은 Mendix Studio Pro 8.0.0 베타 버전과 호환되지 않습니다. Mendix Studio Pro 8.0에 대한 자세한 내용은 [8.0.0 릴리스 노트](/releasenotes/studio-pro/8.0/)를 참조하세요.

### 알려진 문제

* 시작 화면을 통해 Android에서 데이터를 지우면 쿠키가 올바르게 지워지지 않습니다. 개발자 메뉴 옵션을 사용하면 쿠키가 올바르게 지워집니다.
    * [1.1.0](#153)에서 수정되었습니다.
