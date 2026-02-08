---
title: "알림 사용"
url: /howto8/mobile/notifications/
weight: 54
description: 푸시 및 로컬 알림 구성을 위한 튜토리얼입니다.
---

## 소개 {#intro}

이 가이드에서는 Mendix 앱에 대한 푸시 알림(원격 알림이라고도 함)을 구성하는 방법을 설명합니다. 이 가이드는 순서대로 완료하도록 되어 있으며, 단일 디바이스로 테스트 푸시 알림을 보내는 방법을 설명합니다. 앱의 시작 템플릿에 따라 앱이 특정 전제 조건과 요건을 이미 충족할 수 있습니다. 사용 사례에 해당하는 단계만 완료하고, 해당하지 않는 부분은 건너뛰십시오.

* [모듈 종속성 추가](/howto8/mobile/notif-add-module-depends/) — 앱에서 푸시 알림을 사용할 수 있도록 필요한 종속성 모듈을 설치하십시오.
* [Push Notifications 모듈 구현](/howto8/mobile/notif-implement-module/) — Push Notifications Connector 모듈을 구현하는 방법을 알아보십시오.
* [Google Firebase Cloud Messaging Server 설정](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/) — Firebase 계정을 설정하고 앱에서 서비스를 구성하여 푸시 알림을 보낼 수 있도록 하십시오.
* [푸시 알림 구성](/howto8/mobile/notif-config-push/) — 런타임에서 푸시 알림을 구성하는 방법을 알아보십시오.
* [Native App에서 푸시 알림 구현](/howto8/mobile/notif-implement-native/) — 네이티브 앱에 대한 푸시 알림을 구현하십시오.
* [푸시 알림이 활성화된 Native App 빌드](/howto8/mobile/notif-build-native/) — 푸시 알림이 활성화된 네이티브 앱을 빌드하십시오.
* [첫 번째 테스트 푸시 알림 보내기](/howto8/mobile/notif-send-test/) — 앱이 제대로 작동하는지 확인하기 위해 테스트 알림을 보내십시오.

위의 사용 방법을 완료한 후 알림과 관련된 더 고급 작업을 수행할 수 있습니다. **여러 디바이스에 푸시 알림 보내기**에 대한 정보는 다음 사용 방법을 참조하십시오:

* [여러 디바이스에 알림 보내기](/howto8/mobile/notif-mult-devices/)

위에서 설명한 문서는 특히 Native Mobile 앱을 위한 것입니다. 하이브리드 앱의 푸시 알림에 대한 정보는 [하이브리드 푸시 알림 설정](/howto8/mobile/setting-up-hybrid-push-notifications/)을 참조하십시오. 로컬 알림에 대한 정보는 [로컬 알림 사용](/howto8/mobile/local-notif-parent/)을 참조하십시오.

시작하려면 시리즈의 첫 번째 항목인 [모듈 종속성 추가](/howto8/mobile/notif-add-module-depends/)부터 시작하십시오.
