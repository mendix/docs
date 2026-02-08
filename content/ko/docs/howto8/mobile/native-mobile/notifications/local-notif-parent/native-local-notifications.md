---
title: "파트 1: 로컬 알림"
url: /howto8/mobile/native-local-notifications/
weight: 10
description: 인터넷 연결을 사용하지 않는 로컬 푸시 알림 설정을 위한 튜토리얼입니다.
---

## 소개

이 사용 방법에서는 Native Mobile 애플리케이션을 위한 로컬 알림을 구축하는 방법을 설명합니다. 로컬 알림은 하나의 모바일 디바이스에 한정된 알림을 예약하고 보낼 수 있습니다. 이러한 알림은 인터넷 연결을 사용하지 않습니다. 로컬 알림의 한 가지 사용 예로는 일정 시간이 경과한 후 알림을 보내는 알람 앱이 있습니다.

이 사용 방법에서는 다음을 수행하는 방법을 설명합니다:

* 로컬 알림을 호출하는 Nanoflow에 연결된 버튼 구축
* 알림 Nanoflow에서 로컬 알림에 대한 디바이스 권한 요청

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 로컬 알림과 푸시 알림 간의 [기본 차이점](https://developer.apple.com/documentation/usernotifications)을 검토하십시오
* 모바일 디바이스에 [Make It Native](/refguide8/getting-the-make-it-native-app/) 앱을 설치하십시오

{{% alert color="info" %}}
Native Builder로 생성된 앱에서 푸시 알림을 사용하려면 [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)과 [알림 사용](/howto8/mobile/notifications/)에 설명된 사용 방법을 완료했는지 확인하십시오
{{% /alert %}}

## 프로젝트 생성 및 알림 구성

아래 지침에 따라 첫 번째 로컬 알림을 설정하십시오:

1. Mendix Studio Pro를 여십시오.
2. **File** > **New Project**를 선택하십시오.
3. **Blank Native Mobile App**을 선택하십시오(온라인에서도 [여기](https://marketplace.mendix.com/link/component/109511/)에서 사용 가능):

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/quickstart.png" alt="Blank Native Mobile App" class="no-border" >}}

4. **Use this starting point**를 클릭하십시오.
5. **Create App**을 클릭하여 대화 상자를 닫으십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/app-settings.png" alt="app settings"   width="500"  class="no-border" >}}

6. **Native phone** 프로필이 활성화되어 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/native-profile.png" alt="app settings"   width="500"  class="no-border" >}}

7. 앱의 홈 페이지에 **Call nanoflow button**을 드래그한 다음 **New**를 클릭하여 새 Nanoflow를 만드십시오(참고: 이 버튼의 이름을 *Send Notification*으로 변경하는 것이 좋습니다): 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/call-button.png" alt="app settings"   width="400"  class="no-border" >}}

8. Nanoflow 이름을 *ACT_CreateAndSendNotification*으로 지정하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/name-nano.png" alt="app settings"   width="400"  class="no-border" >}}

9. **ACT_CreateAndSendNotification**에서 세 개의 **Create variable** Activity를 Nanoflow에 드래그하고 *Title*, *Subtitle*, *Body*라는 문자열 변수로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/create-string-variables.png" alt="app settings"   width="500"  class="no-border" >}}

10. **Title** Activity를 더블 클릭한 다음 구성하십시오:<br />
    1. **Data type**이 **String**으로 설정되어 있는지 확인하십시오.<br />
    1. **Generate**를 클릭하십시오.<br />
    1. **Constant** 필드에 *Title*을 입력하십시오.<br />
    1. **Output** > **Variable**에 *Title*을 입력하십시오.<br />
    1. **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/title-activity.png" alt="app settings"   width="400"  class="no-border" >}}

11. **Subtitle** Activity를 더블 클릭하고 **Title** Activity와 유사하게 구성하십시오.

12. **Body** Activity를 더블 클릭하고 **Title** Activity와 유사하게 구성하십시오.

이제 앱이 알림을 표시하는 데 필요한 최종 로직을 설정합니다. 사용자는 앱이 알림을 보내는 것에 대한 권한을 부여해야 합니다. 이를 위해 Nanoflow에 **Request notification permission** Activity를 포함하고 몇 가지 다른 Activity를 포함합니다.

1. Nanoflow에 **Has notification permission** Activity를 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/has-notif.png" alt="app settings"   width="500"  class="no-border" >}}

2. **Has notification permission** Activity를 더블 클릭하고 **Variable**에 *NotificationPermission*을 입력한 다음 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/set-haspermission-variable.png" alt="app settings"   width="500"  class="no-border" >}}

3. Nanoflow에서 **Has notification permission** Activity 뒤에 Decision을 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/new-decision.png" alt="app settings"   width="500"  class="no-border" >}}

4. 해당 Decision을 더블 클릭하고 **Caption**을 *Permission*으로 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-caption.png" alt="app settings"   width="500"  class="no-border" >}}

5. **Expression wizard**를 클릭하고 **Variable** > **NotificationPermission (Boolean)**을 선택한 다음 Nanoflow로 돌아올 때까지 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/expression-variable.png" alt="app settings"   width="500"  class="no-border" >}}

6. Nanoflow에 **Request notification permission** Activity를 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/request-notif.png" alt="app settings"   width="500"  class="no-border" >}}

7. **Request notification permission** Activity를 더블 클릭하고 **Output** > **Variable**을 *PermissionGranted*로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/permission-granted.png" alt="app settings"   width="500"  class="no-border" >}}

8. **Request notification permission** Activity 옆에 Decision을 드래그하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-1.png" alt="app settings"   width="400"  class="no-border" >}}

9. Activity와 Decision을 연결하고 해당 연결 값을 다음과 같이 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/connections-1.png" alt="app settings"   width="400"  class="no-border" >}}

10. Decision을 더블 클릭한 다음 **Caption**을 *Permission?*으로 설정하십시오.
11. **Expression wizard**를 클릭하십시오.
12. 드롭다운 메뉴에서 **Value** > **Variable** > **Permission (Boolean)**을 선택하십시오. 완료되면 **Decision**은 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-1-config-new.png" alt="app settings"   width="400"  class="no-border" >}}

13. Nanoflow로 다시 이동하십시오.

14. Nanoflow에 **Show message** Activity를 드래그하고 다음과 같이 연결하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/show-message.png" alt="app settings"   width="400"  class="no-border" >}}

15. **Show message** Activity를 더블 클릭한 다음 다음을 수행하십시오:<br />
    1. 드롭다운 메뉴에서 **Type** > **Error**를 선택하십시오.<br />
    1. **Template**에 *No notification permissions, go to your app permission settings to grant permission*을 입력하십시오.<br />
    1. **OK**를 클릭하십시오.

16. **Show message** 아래에 **End event**를 드래그하고 다음과 같이 연결하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/error-end-event.png" alt="app settings"   width="400"  class="no-border" >}}

이제 Nanoflow 로직의 마지막 부분을 설정합니다. 

1. Nanoflow 오른쪽 상단의 End event를 삭제하고 그 자리에 **Merge**를 드래그 앤 드롭한 다음 연결을 다시 구축하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/merge.png" alt="app settings"   width="400"  class="no-border" >}}

2. **Display Notification** Activity를 드래그 앤 드롭하고 다음과 같이 Merge에 연결하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/display-notif-merge.png" alt="app settings"   width="400"  class="no-border" >}}

3. **Body**, **Title**, **Subtitle**를 같은 Nanoflow에서 생성한 변수로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/tsb-variables.png" alt="app settings"   width="500"  class="no-border" >}}

4. **Play sound**를 **true**로 설정하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/sound.png" alt="app settings"   width="500"  class="no-border" >}}

5. **Action name**과 **Action guid**를 **empty**로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/notif-action-actionguid.png" alt="app settings"   width="500"  class="no-border" >}}

6. **Use return value** > **no**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/return-no.png" alt="app settings" class="no-border" >}}

7. **OK**를 클릭한 다음 Nanoflow로 다시 이동하십시오.
8. **Display notification** Activity 옆에 마지막 **End event**를 추가하고 다음과 같이 연결하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/final-end-event.png" alt="app settings" class="no-border" >}}

9. 모든 작업이 완료되면 Nanoflow는 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/finished-flow.png" alt="app settings"   width="500"  class="no-border" >}}

이제 앱을 실행하고 알림이 작동하는지 확인할 수 있습니다.

1. 모바일 디바이스에서 앱을 시작하고 로드한 다음 **Send Notification**을 탭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/app-1.png" alt="app settings"   width="400"  class="no-border" >}}

2. **Allow notifications** 메시지가 표시되면 **OK**를 탭하십시오.
3. 알림을 허용하면 알림을 받게 됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/basic-notif.png" alt="app settings"   width="400"  class="no-border" >}}

    알림이 보이지 않으면 **Run Locally**를 클릭하여 앱을 다시 로드해 보십시오. 그런 다음 **Send Notification** 버튼을 다시 탭하십시오.

축하합니다! 이제 디바이스에서 로컬 알림을 볼 수 있습니다. 다음으로, [로컬 알림 사용 파트 2: 배지](/howto8/mobile/local-notif-badges/)에서 알림 배지를 구성하는 방법을 배웁니다.

## 추가 정보

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [JavaScript Action 빌드](/howto8/extensibility/build-javascript-actions/)
