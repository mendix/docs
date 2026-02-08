---
title: "푸시 알림 구성"
url: /howto8/mobile/notif-config-push/
weight: 56
description: 푸시 알림을 구성하기 위한 튜토리얼입니다.
---

## 소개 

이 사용 방법에서는 네이티브 앱에서 푸시 알림을 사용하기 위한 런타임 구성 방법을 설명합니다. 

## 알림 구성

사용 사례에 따라 [모듈 종속성 추가](/howto8/mobile/notif-add-module-depends/)와 [Push Notifications 모듈 구현](/howto8/mobile/notif-implement-module/)을 완료했다면 다음을 수행하여 푸시 알림을 구성하십시오:

1. Mendix Studio Pro에서 앱을 여십시오.
1. [이전에 지정한](/howto8/mobile/notif-implement-module/#config) Administrator 사용자로 로그인하십시오.
1. **Administration** 페이지로 이동하십시오.

이 페이지를 처음 열면 Firebase 구성을 설정하는 마법사가 표시됩니다. 아직 Firebase를 설정하지 않은 경우 [Google Firebase Cloud Messaging Server 설정](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)을 참조하십시오. 마법사에서는 다음 파일을 언급합니다:

| **파일**    | **출처**   | **용도**      |
| -------- | -------- | ------- |
| **{project_id}-firebase-adminsdk-{identifier}.json** | Google Firebase | Firebase 서비스 계정의 개인 키로, 런타임 구성에서 사용됩니다. | 
| **GoogleServices-Info.plist** | Google Firebase | Firebase 구성 및 개인 키로, iOS 애플리케이션의 일부로 번들됩니다. |
| **google-services.json** | Google Firebase | Firebase 구성 및 개인 키로, Android 애플리케이션의 일부로 번들됩니다. |

이 파일에는 iOS 및 Android 앱에서 푸시 알림을 활성화하는 데 필요한 정보와 개인 키가 포함되어 있습니다. Firebase 서비스 계정의 개인 키는 Mendix 앱의 구성 마법사(또는 수동 구성)에서 업로드해야 합니다. Android 및 iOS 전용 구성 파일은 Android 및 iOS용 네이티브 앱을 빌드할 때 구성해야 합니다. [푸시 알림이 활성화된 Native App 빌드](/howto8/mobile/notif-build-native/)를 참조하십시오.

앱을 빌드하기 전에 먼저 네이티브 앱에서 푸시 알림을 구현해야 합니다. [네이티브 푸시 알림 구현](/howto8/mobile/notif-implement-native/)을 참조하십시오.
