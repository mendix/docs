---
title: "여러 디바이스에 알림 보내기"
url: /howto8/mobile/notif-mult-devices/
weight: 71
description: Native Mobile Builder로 여러 디바이스에 알림을 보내는 방법을 알아보십시오.
---

## 소개

이 튜토리얼에서는 여러 디바이스에 테스트 푸시 알림을 보내는 방법을 설명합니다.

{{% alert color="info" %}}
푸시 알림은 Mendix Native Mobile Builder를 통해 생성된 앱에서만 작동합니다. Make it Native 앱 내부의 앱에는 알림을 보낼 수 없습니다.
{{% /alert %}}

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* [알림 사용](/howto8/mobile/notifications/)에 설명된 대로 하나의 테스트 푸시 알림 보내기

Mendix Native Mobile Builder로 생성된 사용자 정의 앱에서 푸시 알림을 사용하려면 다음 전제 조건을 완료했는지 확인하십시오:

* [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)의 *첫 번째 빌드 만들기* 섹션까지 완료

## 여러 디바이스에 알림 보내기

버튼 한 번으로 모든 사용자의 디바이스에 메시지를 보내고 싶지만 GUID 검색을 직접 처리하고 싶지 않은 경우는 어떨까요? 아래 섹션에서 이 시나리오를 다룹니다. 구체적으로, Push Notifications API를 통해 사용자의 디바이스에 데이터 객체가 포함된 푸시 알림을 보냅니다.

### 데이터 객체 푸시 알림을 보내는 Microflow 생성 

다음 요소를 포함하는 Microflow *ACT_SendProductToAllDevices*를 생성하십시오:

{{< figure src="/attachments/howto8/mobile/native-mobile/notifications/notif-mult-devices/SendProductToAll.png" alt="SendProductToAll"   width="300"  class="no-border" >}}

1. Microflow에 *Product* 데이터 매개변수를 추가하십시오.
2. 데이터베이스에서 *PushNotifications.Device* Entity 목록을 검색하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/notif-mult-devices/retrieveDevices.png" alt="retrieveDevices"   width="300"  class="no-border" >}}

3. *PushNotifications/_USE ME/API*에서 **PrepareMessageData** Microflow를 **ACT_SendProductToAllDevices**로 드래그하고 다음을 구성하십시오:<br />
    1. Title: *myTitle*.<br />
    1. Body: *myBody*.<br />
    1. TimeToLive: *0*.<br />
    1. Badge: *0*.<br />
    1. ActionName: *sendProduct*.<br />
    1. ContextObjectGuid: *empty*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/notif-mult-devices/prepareMessageData.png" alt="prepareMessageData"   width="300"  class="no-border" >}}

    **ContextObjectGuid**는 비워두십시오. 객체 자체를 **SendMessageToDevices** Java Action에 전달하면 자동으로 검색됩니다. 

4. *PushNotifications/_USE ME/API*에서 **SendMessageToDevices** Java Action을 **ACT_SendProductToAllDevices**로 드래그하고 다음을 구성하십시오:<br />
    1. **Message data param**: **$MessageToBeSent**.<br />
    1. **Device param**: **$Devices**.<br />
    1. **Context object**: **$Product**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/notif-mult-devices/sendMessagesJava.png" alt="sendMessagesJava"   width="300"  class="no-border" >}}

5. **Product_NewEdit**로 이동하여 **ACT_SendProductToAllDevices**를 해당 페이지의 데이터 뷰에 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/notif-mult-devices/sendProductToAllButton.png" alt="sendProductToAllButton"   width="300"  class="no-border" >}}

### 구현 테스트

다음을 수행하여 새로운 푸시 알림 기능을 테스트하십시오:

1. 디바이스의 백그라운드에서 네이티브 앱을 실행하십시오.
2. 웹 브라우저에서 **Product_NewEdit**로 이동하여 **ACT_SendProductToAllDevices** Microflow 버튼을 클릭하십시오. 

이렇게 하면 사용 가능한 모든 디바이스에 알림이 전송됩니다. 알림을 탭하면 모델링한 특정 제품 페이지로 리디렉션됩니다.

## 추가 Java Action 설명

Push Notifications 모듈에서 사용 가능한 Java Action에 대한 자세한 내용은 아래 섹션을 참조하십시오.

### PrepareMessageData Microflow

이를 통해 사용자는 푸시 알림 메시지를 변경하고 생성하기 위한 자체 사용자 인터페이스를 만들 수 있습니다. 

### SendMessageToDevice 및 SendMessageToDevices Java Action

이 Java Action에는 다음 매개변수가 있습니다:

* **MessageDataParam** (PushNotifications.MessageData): 이 매개변수는 **PrepareMessageData** Microflow로 생성할 수 있습니다
* **DeviceParam** (PushNotifications.Device 목록 또는 PushNotification.Device): 이 매개변수를 사용하여 디바이스 목록에 동일한 메시지를 보낼 수 있습니다
* **ContextObject**: 이 매개변수는 모든 Mendix 객체를 알림에 전달할 수 있게 합니다

### SendMessageToUsers 및 SendMessageToUser Java Action

모든 사용자는 하나 이상의 디바이스를 가질 수 있습니다. 특정 사용자의 모든 디바이스에 푸시 알림을 보낼 때는 **SendMessageToUser** Java Action을 사용하십시오.

모든 사용자에게 푸시 알림을 보내려면 **SendMessageToUsers** Java Action을 사용하십시오.

## 알림 문제 해결

문제가 발생하면 *첫 번째 테스트 푸시 알림 보내기*의 [알림 문제 해결](/howto8/mobile/notif-send-test/#troubleshoot) 섹션을 참조하십시오.

## 추가 정보

* [알림 사용](/howto8/mobile/notifications/)
