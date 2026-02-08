---
title: "푸시 알림 포함"
url: /howto8/mobile/push-notifications/
weight: 10
no_list: false
description_list: true 
---

## 소개

푸시 알림은 사용자가 앱을 활발하게 사용하지 않는 경우에도 앱이 사용자에게 이벤트를 알릴 수 있게 합니다. 이것은 Android와 iOS 디바이스 모두에서 사용 가능한 네이티브 기능이며, Firebase Cloud Messaging(FCM) 또는 Apple Push Notifications service(APNs) 등의 외부 서비스를 통해 제어됩니다.

Mendix 푸시 알림 솔루션은 다음 두 부분으로 구성됩니다:

* [Push Notifications Connector](/appstore/modules/push-notifications/) 모듈 – 이것은 FCM/APNs에 푸시 알림을 보내는 "서버 측" 컴포넌트이며, FCM/APNs가 다시 사용자 디바이스에 알림을 보냅니다
* **PushNotifications widget** – 이것은 하이브리드 모바일 앱에 상주하며, 디바이스를 이러한 서비스에 등록하고 수신된 푸시 알림을 처리하는 측면에서 FCM/APNs(Push Plugin을 통해)와 애플리케이션의 상호 작용을 담당합니다

Mendix 푸시 알림 기능은 개발자가 Mendix 하이브리드 모바일 앱에 푸시 알림 기능을 쉽게 포함할 수 있도록 합니다.

## 전제 조건

푸시 알림을 사용하려면 다음이 필요합니다:

* [Marketplace](https://marketplace.mendix.com/link/studiopro/)에서 받을 수 있는 Mendix Studio Pro
* Mendix [Push Notifications Connector](/appstore/modules/push-notifications/)
* 모바일 디바이스(시작하려면 데이터 케이블을 통해 개발 머신에 연결된 Android 디바이스를 권장합니다)

## 지원 플랫폼

* Android 5.0 이상
* iOS 9.0 이상

## GCM vs. FCM

이전 버전의 Mendix Push Notifications Connector는 Google Cloud Messaging(GCM)과 APNs를 지원했습니다. Google은 GCM을 FCM으로 대체했습니다.

## 종속성

* Apache Commons IO: Apache 2.0
* Jackson (core+databind+annotations): Apache 2.0
* Google APIs Client Library for Java: Apache 2.0
* Google HTTP Client Library for Java: Apache 2.0
* Google OAuth Client Library for Java: Apache 2.0
* Gson: Apache 2.0
* Guice: Apache 2.0
* Netty: Apache 2.0
* Netty Tomcat Native Fork: Apache 2.0
* Pushy: MIT

## 기여

이 저장소에 기여하는 방법에 대한 자세한 정보는 [Mendix GitHub 저장소에 기여하는 방법](/howto8/collaboration-requirements-management/contribute-to-a-github-repository/)을 참조하십시오.

## 이 섹션의 문서
