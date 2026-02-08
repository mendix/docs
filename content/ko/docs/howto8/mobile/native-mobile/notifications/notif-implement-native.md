---
title: "Native App에서 푸시 알림 구현"
linktitle: "Native App의 푸시 알림"
url: /howto8/mobile/notif-implement-native/
weight: 58
description: 네이티브 앱에서 푸시 알림을 구현하기 위한 튜토리얼입니다.
---

## 소개

이 사용 방법은 서버 Mendix 애플리케이션에서 보낸 푸시 알림을 네이티브 앱에서 처리할 수 있도록 하는 요소를 설정하는 데 도움이 됩니다. 이 단계를 완료하면 푸시 알림을 지원하는 네이티브 앱을 빌드할 수 있습니다.

설정을 쉽게 하기 위해 Push Notifications Connector 모듈에는 초기 설정에 도움이 되는 스니펫이 포함되어 있습니다. 다음을 수행하십시오:

1. **Marketplace modules** > **PushNotifications** > **USE ME** 폴더를 확장하십시오.
1. **Native** 폴더를 찾아 복사하십시오.
1. **Native** 폴더 내용을 앱의 내비게이션에 붙여넣으십시오.
1. 앱의 내비게이션에서 새로운 **Native** 폴더를 확장하십시오.
1. **Native_Snippet** 스니펫을 복사하십시오.
1. 스니펫을 Native 내비게이션의 홈 페이지에 붙여넣으십시오.

## App Events Widget

이전 섹션을 완료하면 **App events** Widget이 앱에 추가됩니다. 이 Widget은 이미 구성되어 있고 스니펫의 일부이므로 변경할 필요가 없습니다. 

이미 홈 페이지에 **App events** Widget이 있는 경우 다음 단계를 따르십시오:

1. **App events** Widget을 여십시오.
1. **Page load**에서 **On load** 드롭다운 목록에서 **Call a nanoflow**를 선택하십시오. 
1. **Nanoflow**에서 **Select**를 클릭하고 **PushNotifications** 모듈의 Nanoflow **OnPageLoad_RegisterPushNotifications**를 지정하십시오:<br /> 
    * 이미 선택된 Nanoflow가 있는 경우 해당 기존 Nanoflow에서 해당 Nanoflow로 **Call nanoflow** Activity를 만드십시오.<br />
1. **App resume**에서 **On Resume** 드롭다운 목록에서 **Call a nanoflow**를 선택하십시오. 
1. **Nanoflow**에서 클릭하고 **PushNotifications** 모듈의 Nanoflow **OnPageLoad_RegisterPushNotifications**를 지정하십시오: <br />
    * 이미 선택된 Nanoflow가 있는 경우 해당 기존 Nanoflow에서 해당 Nanoflow로 **Call nanoflow** Activity를 만드십시오. <br /> 

## Notifications Widget

스니펫은 또한 앱이 수신하는 알림과 사용자가 상호 작용할 수 있도록 하는 **Notifications** Widget을 추가합니다.

기본적으로 이 Widget은 **Example** 액션으로 구성되어 있습니다. 알림에서 수신한 데이터를 저장하는 비영속 엔티티([NPE](/refguide8/persistability/#non-persistable))를 사용합니다. 그런 다음 알림을 수신하거나 열 때 해당 데이터를 Nanoflow에서 사용합니다. 이 예제를 사용하여 자체 액션을 만드십시오. 

## 오프라인 동기화 사용자 정의

네이티브 앱에서 푸시 알림 통합이 제대로 실행되도록 하려면 모바일 디바이스에 동기화되는 객체를 조정해야 합니다:

1. 앱의 **Navigation**을 여십시오.
1. **Native mobile (tablet & phone)** 내비게이션 탭을 클릭하십시오.
1. **Synchronization configuration** 버튼을 클릭하십시오.
1. 아직 추가되지 않은 경우 **PushNotifications** 모듈에서 **DeviceRegistration** Entity를 추가하십시오.
1. **Download** 드롭다운 메뉴에서 해당 Entity에 대해 **All Objects**를 선택하고 **OK**를 클릭하십시오.

이렇게 하면 올바른 객체가 네이티브 앱에 동기화됩니다.

이제 모든 설정이 완료되었으므로 네이티브 앱을 배포할 차례입니다. 네이티브 앱 빌드 시 푸시 알림을 활성화하는 방법은 [푸시 알림이 활성화된 Native Mobile App 빌드](/howto8/mobile/notif-build-native/)를 참조하십시오. 
