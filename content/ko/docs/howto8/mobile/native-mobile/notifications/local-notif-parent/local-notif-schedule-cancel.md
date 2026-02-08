---
title: "파트 5: 예약"
url: /howto8/mobile/local-notif-schedule-cancel/
weight: 50
description: 알림 예약 및 취소를 위한 튜토리얼입니다.
---

## 소개

로컬 알림은 사용자가 작업을 수행한 직후에 알림을 보내는 경우가 거의 없어야 합니다. 여기에서는 일정 시간이 지난 후 로컬 알림이 트리거되도록 구성하는 방법을 배웁니다. 이를 위해 **ScheduleNotification**이라는 JavaScript Action을 사용합니다. 그런 다음 예약된 알림을 취소하는 방법을 배웁니다.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 로컬 알림과 푸시 알림 간의 [기본 차이점](https://developer.apple.com/documentation/usernotifications)을 검토하십시오
* 모바일 디바이스에 [Make It Native](/refguide8/getting-the-make-it-native-app/) 앱을 설치하십시오
* [로컬 알림 사용](/howto8/mobile/local-notif-parent/) 시리즈의 이전 튜토리얼을 완료하십시오

## 알림 예약

특정 시간에 알림을 예약하려면 다음을 수행하십시오:

1. **ACT_CreateAndSendNotification** Nanoflow로 이동하십시오. 
2. **Display notification** JavaScript Action을 새로운 **Schedule notification** 액션으로 교체하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/new-schedule-action.png" alt="schedule action replace"   width="500"  class="no-border" >}}

3. 새로운 **Schedule notification activity**를 더블 클릭하십시오.
4. **Date**를 **EndOfCurrentMinute**로 설정하십시오.
5. **body**, **title**, **subtitle**를 생성한 변수로 변경하십시오.
6. **Play sound**를 **true**로 설정하십시오.
7. 지금은 **Notification id**를 **empty**로 설정하십시오.
8. **Action name**과 **Action guid**를 **empty**로 설정하십시오.
9. **OK**를 클릭하십시오.
10. 모바일 디바이스에서 앱을 시작하고 로드하십시오.
11. **Send notification** 버튼을 탭한 다음 빠르게 앱을 최소화하십시오.

분이 끝나면 알림이 표시됩니다.

앱이 열려 있으면 iOS 및 Android 사용자 가이드라인에 따라 알림이 표시되지 않습니다. 그러나 열린 앱에 대한 알림은 여전히 onReceive 이벤트를 트리거할 수 있습니다. 이를 통해 팝업 레이아웃으로 페이지를 표시하는 등 알림에 대한 사용자 정의 액션을 디자인할 수 있습니다. onReceive 이벤트를 모델링하려면 다음 단계를 따르십시오:

1. *ON_ReceiveNotification*이라는 새 Nanoflow를 만드십시오.
2. Nanoflow에 **Log message** Activity를 드래그하십시오.
3. 이 Activity를 더블 클릭하십시오. 
4. **Template**에 *I triggered on receive notification*을 입력한 다음 **OK**를 클릭하십시오.
5. 홈 페이지의 Notifications Widget을 더블 클릭하십시오.
6. **Actions** > **New**를 클릭하십시오.
7. *TriggerOnReceive*라는 **New Action**을 생성하고, **On receive**를 **Call a nanoflow**로 설정하고, **ON_ReceiveNotification**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/on-receive-action.png" alt="on receive settings"   width="500"  class="no-border" >}}

8. **OK**를 클릭한 다음 **OK**를 다시 클릭하십시오.
9. **ACT_CreateAndSendNotification**에서 Schedule notification Activity를 더블 클릭하십시오.
10. **Action name** > **Edit**를 클릭하십시오.
11. 인수 필드에 *'TriggerOnReceive'*를 입력하고 **OK**를 클릭하십시오.
12. **OK**를 클릭하십시오.
13. 모바일 디바이스에서 앱을 시작하고 로드하십시오.
14. **Send notification** 버튼을 탭하고 앱을 최소화하지 *마십시오*.
15. Studio Pro 콘솔에서 **I triggered on receive notification** 로그가 표시됩니다.

그런데 예약된 알림을 취소하려면 어떻게 해야 할까요? 아래를 계속 읽어보십시오.

## 예약된 알림 취소

예약된 알림을 취소하려면 **Cancel Scheduled Notification** 또는 **Cancel All Scheduled Notification** JavaScript Action을 사용할 수 있습니다. 특정 알림을 취소하려면 해당 특정 알림의 식별자를 **Cancel Scheduled Notification**에 제공하십시오. 모든 알림을 취소하려면 **Cancel All Scheduled Notification** JavaScript Action을 호출하십시오. 자세한 내용은 아래 하위 섹션을 참조하십시오.

### 모든 예약된 알림 취소

모든 예약된 알림을 취소하려면 다음을 수행하십시오:

1. *ACT_CancelAllScheduledNotifications*라는 Nanoflow를 생성하십시오.
2. Nanoflow에 **Cancel all scheduled notifications**라는 JavaScript Action을 드래그하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-all-action.png" alt="cancel scheduled action"   width="500"  class="no-border" >}}

3. 새로운 cancel notification 액션을 더블 클릭하십시오.
4. **Use return value** > **No**를 선택하십시오.
5. **OK**를 클릭하십시오.
6. 이 Nanoflow를 홈 화면에 드래그하고 버튼 이름을 *Cancel all*로 지정하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-button.png" alt="cancel button"   width="300"  class="no-border" >}}

새로운 취소 버튼을 테스트하려면 다음을 수행하십시오:

1. 모바일 디바이스에서 앱을 시작하고 로드하십시오.
2. **Send notification** 버튼을 탭하십시오.
3. **Cancel all** 버튼을 탭하십시오.
4. 앱을 최소화하십시오.

분이 끝나도 알림이 표시되지 않으며, 이는 취소 액션이 성공했음을 증명합니다!

### 특정 예약된 알림 취소

특정 예약된 알림을 취소하려면 취소하려는 알림의 알림 ID를 제공해야 합니다. 

1. **ACT_CreateAndSendNotification**으로 이동하십시오.
2. **Schedule notification** Activity를 더블 클릭하십시오.
3. **Notification id** > **Edit**를 클릭하십시오. 
4. 인수 필드에 *'testID'*를 입력하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/test-id-arg.png" alt="test id argument" class="no-border" >}}

5. **OK**를 한 번 더 클릭하여 대화 상자를 닫으십시오. 
6. *ACT_CancelScheduledNotifications*라는 Nanoflow를 생성하십시오.
7. Nanoflow에 **Cancel scheduled notification**이라는 JavaScript Action을 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-scheduled-notif.png" alt="cancel one notification" class="no-border" >}}

8. 새로운 cancel notification 액션을 더블 클릭하십시오.
9. **Notification id** > **Edit**를 클릭하십시오.
10. 매개변수 인수 필드에 *'testID'*를 입력하고 **OK**를 클릭하십시오.
11. **OK**를 다시 클릭하여 대화 상자를 닫으십시오.
12. 이 Nanoflow를 홈 화면에 드래그하고 버튼 이름을 *Cancel a specific notification*으로 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-specific-button.png" alt="cancel one button"   width="300"  class="no-border" >}}

새로운 취소 버튼을 테스트하려면 다음을 수행하십시오:

1. 모바일 디바이스에서 앱을 시작하고 로드하십시오.
2. **Send notification** 버튼을 탭하십시오.
3. **Cancel a specific notification** 버튼을 탭하십시오.
4. 앱을 최소화하십시오.

분이 끝나도 알림이 표시되지 않으며, 이는 취소 액션이 성공했음을 증명합니다! 이 시리즈를 완료하고 로컬 알림의 기능을 마스터한 것을 축하합니다.

## 추가 정보

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [JavaScript Action 빌드](/howto8/extensibility/build-javascript-actions/)
