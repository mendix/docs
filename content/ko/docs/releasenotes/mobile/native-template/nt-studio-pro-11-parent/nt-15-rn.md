---
title: "Native Template 15"
url: /releasenotes/mobile/nt-15-rn/
weight: 10
description: "Native Template 15"
---

## 15.4.4 {#1544}

**릴리스 날짜: 2025년 11월 10일**

* op-sqlite 버전을 15.0.7로 업데이트하기 위해 @mendix/native를 10.3.1로 업데이트했습니다.

## 15.4.3 {#1543}

**릴리스 날짜: 2025년 11월 5일**

* `components.json` 오류를 수정하기 위해 @mendix/native를 10.3.0으로 업데이트했습니다.

## 15.4.2 {#1542}

**릴리스 날짜: 2025년 10월 27일**

### 개선 사항

* Android 15 및 최신 기기에서 적절한 레이아웃 동작과 시각적 일관성을 보장하기 위해 react-native-edge-to-edge를 설치했습니다.

## 15.4.1 {#1541}

**릴리스 날짜: 2025년 10월 7일**

### 개선 사항

* 새로운 아키텍처 호환성을 위해 `react-native-camera`에서 `react-native-vision-camera`로 마이그레이션했습니다.

## 15.4.0 {#1540}

**릴리스 날짜: 2025년 10월 2일**

### 개선 사항

* 개선된 아키텍처 호환성과 향상된 푸시 알림 기능을 위해 `react-native-push-notification`에서 `@notifee/react-native`로 마이그레이션했습니다.
* `react-native-permissions`를 버전 5.4.2로 업그레이드했습니다.
* `react-native-schedule-exact-alarm-permission` 종속성을 제거했습니다.
* Android에 `USE_BIOMETRIC` 권한을 추가했습니다.
* 새로운 아키텍처 호환성을 위해 `react-native-fast-image`에서 `@d11/react-native-fast-image`로 마이그레이션했습니다.
* `react-native-reanimated`를 v3.16.7로 업그레이드했습니다.

## 15.3.1 {#1531}

**릴리스 날짜: 2025년 8월 15일**

### 수정 사항

* 업데이트된 Google Play 정책을 준수하기 위해 매니페스트에서 `USE_EXACT_ALARM` 권한을 제거했습니다.

## 15.3.0 {#1530}

**릴리스 날짜: 2025년 6월 23일**

### 개선 사항

* 유지 관리되지 않은 여러 라이브러리를 현대적이고 활발하게 지원되는 대안으로 마이그레이션했습니다.
* 이전 버전의 Studio Pro에서 최신 버전으로의 업데이트 프로세스를 개선했습니다.

### 제거됨

* **@react-native-community/push-notification-ios**: 1.10.1

### 새 라이브러리

* **notifee@notifee/react-native**: 9.1.8
* **react-native-blob-util**: 0.21.0

### 라이브러리 업데이트 및 개선 사항

* **react-native-device-info**: 13.0.0 -> 14.0.4
* **@mendix/native**: 11.0.3 -> 11.0.7

## 15.2.0 {#1520}

**릴리스 날짜: 2025년 6월 11일**

### 개선 사항

* 하나의 라이브러리를 업데이트했습니다.

### 라이브러리 업데이트 및 개선 사항

* **@mendix/native**: 10.1.4

## 15.1.1 {#1511}

**릴리스 날짜: 2025년 6월 6일**

### 수정 사항

* React Client가 활성화된 경우 Mendix 10.18 이상으로 빌드된 iOS 앱이 실행되지 않는 문제를 수정했습니다. Android는 영향을 받지 않았습니다.

### 제거됨

* **@react-native-community/push-notification-ios**: 1.10.1

## 15.1.0 {#1510}

**릴리스 날짜: 2025년 6월 2일**

### 개선 사항

* 유지 관리되지 않은 여러 라이브러리를 현대적이고 활발하게 지원되는 대안으로 마이그레이션했습니다.

## 15.0.0 {#1500}

**릴리스 날짜: 2025년 5월 2일**

### 개선 사항

* 데이터베이스 백엔드 라이브러리를 최신 버전으로 업그레이드했습니다. 이 업데이트는 데이터베이스 작업에 대한 더 나은 성능과 성능 개선을 제공합니다.

### 라이브러리 업데이트 및 개선 사항

* **@op-engineering/op-sqlite**: 12.0.2
