---
title: "Native Template 11"
url: /releasenotes/mobile/nt-11-rn/
weight: 50
description: "Native Template 11 릴리스 노트."
---

## 11.1.4 {#1114}

**릴리스 날짜: 2025년 8월 25일**

### 수정 사항

* **react-native-screens** 패키지에서 사용된 더 이상 사용되지 않는 Kotlin 확장 함수의 문제를 수정했습니다.

## 11.0.7 {#1005}

**릴리스 날짜: 2025년 8월 4일**

### 수정 사항

* **borderRadius**를 사용할 때 SVG가 충돌하는 문제를 **react-native-svg** 버전을 15.11.2로 업그레이드하여 해결했습니다.

## 11.0.6 {#1005}

**릴리스 날짜: 2025년 6월 5일**

### 수정 사항

* **Runtime** 설정에서 React 클라이언트가 활성화된 경우 Mendix 10.18 이상으로 빌드된 iOS 애플리케이션이 실패하는 문제를 해결했습니다.

## 11.0.5 {#1004}

### 수정 사항

**릴리스 날짜: 2025년 3월 10일**

* 시스템 글꼴 크기를 변경할 때 Android에서 충돌이 발생하는 문제를 수정했습니다. 

## 11.0.4 {#1003}

**릴리스 날짜: 2025년 1월 15일**

### 수정 사항

* Xcode의 **Dev** 스킴에서 번들 식별자 관련 문제를 수정했습니다.
* PNG 형식이 아닌 이미지가 react-native 버전에 패치가 누락되어 오류를 발생시키는 문제를 수정했습니다.

## 11.0.2 {#1002}

**릴리스 날짜: 2025년 1월 13일**

### 수정 사항

* 커스텀 빌드된 Mendix Native Developer App에서 원격 JavaScript 디버깅이 실패하여 "Remote JS Debugging"을 활성화할 때 충돌이 발생하는 문제를 해결했습니다. 이 문제는 빌드 과정에서 Firebase 서비스가 올바르게 초기화되지 않아 발생했습니다. 이제 Firebase 종속성은 애플리케이션에서 명시적으로 필요한 경우에만 포함됩니다.

## 11.0.1 {#1001}

**릴리스 날짜: 2025년 1월 7일**

### 수정 사항

* App Center의 Xcode 버전을 15.4로 업데이트했습니다.
* Bundle Identifier 문제를 수정하기 위해 Xcode 구성에 매개변수를 추가했습니다.

## 11.0.0 {#1000}

**릴리스 날짜: 2024년 12월 17일**

### 호환성을 깨뜨리는 변경 사항

#### JSC 및 Hermes 지원 {#jsc-hermes}

* JavaScriptCore(JSC)를 완전히 비활성화하고 이제 Hermes만 지원합니다.

#### 중요 참고 사항

* Studio Pro 10.18 이상에서 생성된 앱은 추가 구성 없이 자동으로 Hermes를 사용합니다.
* 10.18 이상으로 업그레이드하는 프로젝트의 경우, [업그레이드 안내](#upgrade-instructions)의 단계를 따라 앱을 마이그레이션하세요.
* 프로젝트가 이미 Hermes를 사용하고 있더라도 업데이트가 필요합니다.

### 업그레이드 안내 {#upgrade-instructions}

10.17 미만의 Mendix 버전에서 업그레이드하는 경우, 새로운 React Native 버전을 사용하기 위해 다음 단계를 따르세요:

1. 필수 모듈 업데이트:
    1. Native Mobile Resources: Mendix Marketplace에서 이 모듈을 최신 버전으로 업데이트하세요.
    1. Nanoflow Commons: 이 모듈을 최신 버전으로 업데이트하세요.
1. Studio Pro에서 위젯 업데이트:
    1. Native Mobile Resources 모듈을 업데이트한 후, Studio Pro에서 경고를 마우스 오른쪽 버튼으로 클릭하고 **Update All Widgets**를 클릭하여 프로세스를 완료하세요.
1. 애플리케이션 테스트:
    1. 업데이트 후 모든 기능이 예상대로 작동하는지 애플리케이션을 철저히 테스트하세요.

Native Template에 대한 가장 직접적인 정보는 [GitHub Releases 페이지](https://github.com/mendix/native-template/releases/tag/v11.0.0)를 방문하세요.
