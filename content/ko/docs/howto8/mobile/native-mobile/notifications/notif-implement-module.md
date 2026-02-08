---
title: "Push Notifications 모듈 구현"
linktitle: "Push Notifications 모듈"
url: /howto8/mobile/notif-implement-module/
weight: 54
description: 푸시 알림 모듈을 구현하기 위한 튜토리얼입니다.
---

## 소개

앱에서 전제 조건을 구현했으므로 이제 [Push Notifications Connector](/appstore/modules/push-notifications/) 모듈을 구현해야 합니다. 기본 구성을 활성화하려면 아래 단계를 완료하십시오.

## Marketplace에서 다운로드

아직 다운로드하지 않았다면 Marketplace에서 **Push Notification Connector** 모듈을 다운로드하십시오:

1. Studio Pro에서 Marketplace를 여십시오.
1. *Push Notification Connector*를 검색하십시오.
1. **Push Notification Connector** 모듈을 여십시오.
1. **Download**를 클릭하십시오.

## 앱 구성 {#config}

앱에서 Push Connections Module을 사용하려면 다음 사항을 구성하십시오:

1. App Explorer에서 **Project** > **Security**를 여십시오.
1. **User roles**로 이동하십시오.<br />
1. 푸시 알림에 접근해야 하는 사용자 역할을 조정하십시오:<br />
    1. `Administrator` 모듈 역할은 구성 및 관리 작업을 수행하는 하나 이상의 사용자에게 할당되어야 합니다. <br />
    1. `Anonymous` 모듈 역할은 익명 프로젝트 사용자 역할에 할당할 수 있습니다. <br />
    1. `User` 역할은 `Administrator` 또는 `Anonymous` 사용자가 아닌 알림과 상호 작용해야 하는 모든 사용자 역할을 위한 것입니다.
    1. `NativeMobileResources.User` 모듈 역할이 알림과 상호 작용해야 하는 모든 사용자 역할에 추가되었는지 확인하십시오.
1. Security 설정을 저장하십시오.
1. App Explorer에서 **Project** > **Navigation**을 여십시오.
1. **Responsive** 내비게이션 프로필에 새로운 열기 페이지 내비게이션 항목을 추가하십시오.
1. **PushNotifications** 모듈에서 **Administration** 페이지를 선택하십시오. 이 페이지는 **PushNotifications** 모듈의 **_USE ME/Web** 폴더에 있습니다.
1. **AfterStartup** Microflow에 **AfterStartup_PushNotifications** Microflow에 대한 Microflow 서브 콜을 추가하십시오:<br />
    * 아직 **AfterStartup** Microflow가 구성되지 않은 경우 자세한 정보는 *앱 설정*의 [After Startup](/refguide8/project-settings/#after-startup) 섹션을 참조하십시오.

이제 앱을 시작하고 다음 단계인 [Google Firebase Cloud Messaging Server 설정](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)으로 이동할 수 있습니다.
