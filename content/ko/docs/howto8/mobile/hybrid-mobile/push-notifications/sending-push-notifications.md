---
title: "푸시 알림 전송"
url: /howto8/mobile/sending-push-notifications/
weight: 20
---

## 개요

이것은 애플리케이션에서 푸시 알림을 보내기 위해 호출할 수 있는 Microflow 액션 목록입니다. **Toolbox**의 **Push notifications** 카테고리에 있습니다.

| Microflow 액션 이름 | 설명 |
| --- | --- |
| SendMessageToDevice | 디바이스에 즉시 메시지를 보냅니다. |
| SendMessageToDevices | 여러 디바이스에 즉시 메시지를 보냅니다. |
| SendMessageToUser | 사용자의 모든 디바이스에 즉시 메시지를 보냅니다. |
| SendMessageToUsers | 여러 사용자의 모든 디바이스에 즉시 메시지를 보냅니다. |

모든 액션은 첫 번째 매개변수로 MessageData 객체를 받습니다. MessageData 엔터티에는 제목, 본문, timeToLive 등 알림에 대한 모든 입력 데이터가 포함됩니다.

**PrepareMessageData** Microflow를 사용하여 이 엔터티를 생성할 수 있습니다(수동으로 생성할 수도 있습니다).

| 매개변수 | 설명 |
| --- | --- |
| Title | 메시지의 제목입니다. |
| Body | 알림의 확장된 텍스트입니다. |
| TimeToLive | 알림이 만료되기 전의 시간(초)입니다. |
| Badge | 앱 아이콘에 표시할 숫자입니다. |
| ActionName | 수신자가 알림을 클릭할 때 수행할 액션의 이름입니다(아래 참조). |
| ContextObjectGuid | 지정된 액션에 전달할 엔터티의 Mendix 객체 ID입니다. |

또한 NextTry 속성을 수정하여 알림이 전달되는 시기에 영향을 줄 수 있습니다.

contextObjectGuid를 제공하는 대신 컨텍스트 객체로 사용하려는 엔터티를 **SendMessage...** Microflow 액션에 전달할 수 있습니다.

## 액션

수신자가 알림을 클릭하면 수행할 액션을 지정할 수 있습니다. 이를 위해 다음 단계를 따라 위젯에서 사용 가능한 액션을 지정해야 합니다:

1. **Online_Snippet** 또는 **Offline_Snippet** 문서를 찾아 여십시오.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_snippets.png" class="no-border" >}}

2. 위젯을 더블 클릭하여 속성을 여십시오.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_widget_settings.png" class="no-border" >}}

**New** 버튼을 사용하여 새 액션을 추가하십시오. 각 액션에는 이름, 액션 유형(Open Page 또는 Call Microflow), 그리고 선택적으로 엔터티(컨텍스트 객체의 유형)가 필요합니다. 액션 유형에 따라 열 페이지 또는 호출할 Microflow를 구성해야 합니다.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_action.png" class="no-border" >}}

액션의 이름은 MessageData 엔터티의 ActionName 속성 값으로 사용할 수 있습니다.

### 이 접근 방식의 한계

* Nanoflow는 아직 지원되지 않습니다
* Microflow는 온라인 앱에서만 사용할 수 있으며, 오프라인 앱에서는 Microflow가 지원되지 않습니다

## 추가 읽기

* [Apple Push Notification Server 설정](/howto8/mobile/setting-up-apple-push-notification-server/)
* [Google Firebase Cloud Messaging Server 설정](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)
