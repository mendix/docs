---
title: "파트 3: 액션"
url: /howto8/mobile/local-notif-action/
weight: 30
description: 푸시 알림을 탭했을 때 액션을 트리거하도록 만드는 튜토리얼입니다.
canonical_url: "https://docs.mendix.com/refguide/mobile/using-mobile-capabilities/local-notifications/local-notif-action/"
---

## 소개

푸시 알림을 사용하는 여러 앱에서는 사용자가 알림을 탭한 후 액션을 트리거해야 합니다. 이 단계별 가이드에서는 탭한 알림이 특정 페이지를 표시하도록 만드는 방법을 설명합니다.

{{% alert color="warning" %}}
Make It Native 앱은 현재 알림을 방해하는 제한 사항이 있습니다. 현재 이러한 제한 사항을 수정하고 있습니다. 로컬 알림 액션을 테스트하려면 Make It Native 앱 대신 모바일 테스트 디바이스에 설치된 네이티브 릴리스 앱을 사용하십시오. 네이티브 릴리스 앱을 빌드하려면 [Native App 배포 방법](/howto8/mobile/deploying-native-app/)을 완료하고 해당 앱을 사용하여 로컬 알림 액션을 테스트하십시오.
{{% /alert %}}

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 로컬 알림과 푸시 알림 간의 [기본 차이점](https://developer.apple.com/documentation/usernotifications)을 검토하십시오
* 모바일 디바이스에 [Make It Native](/refguide8/getting-the-make-it-native-app/) 앱을 설치하십시오
* [로컬 알림 사용](/howto8/mobile/local-notif-parent/) 시리즈의 이전 튜토리얼을 완료하십시오

## 알림 탭 시 액션 설정

이 섹션에서는 사용자가 알림을 탭할 때 페이지를 표시하는 방법을 배웁니다.

1. 네이티브 홈 페이지에 **Notifications** Widget을 드래그하십시오. 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/notif-widget.png" alt="notifications widget"   width="400"  class="no-border" >}}

2. Widget을 더블 클릭하십시오.
3. **Actions** > **New**를 클릭하십시오. 
4. 액션 이름을 *show_page*로 지정하십시오.
5. **On open to** > **Show a Page**를 선택하십시오.
6. **New**를 클릭하여 새 페이지를 만드십시오.
7. **Page Name**에 *NotifPage*를 입력하십시오.
8. 왼쪽의 **Blank** 패널을 클릭하고 **Blank** 페이지 템플릿을 선택하십시오. 
9. **OK**를 클릭하여 페이지를 생성하십시오. 
10. **NotifPage**에 **Open page button** Widget을 드래그하십시오.
11. 메시지가 표시되면 **Home_Native** 페이지를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/home-native-select.png" alt="click home page"   width="400"  class="no-border" >}}

12. **Select**를 클릭하십시오. 이제 테스트 시 홈 화면으로 돌아갈 수 있는 버튼이 생겼습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/nav-button.png" alt="click home page" class="no-border" >}}

13. **ACT_CreateAndSendNotification** Nanoflow로 다시 이동하십시오. 

**ACT_CreateAndSendNotification**에서 알림을 탭하면 페이지로 이동하는 로직을 설정합니다. 이 과정에서는 문자열 변수를 설정해야 합니다. 그러나 이 문자열 변수는 다른 변수와 함께 사용되지 않고 내부 알림 기능에만 사용되므로 이전처럼 Create variable Activity를 드래그 앤 드롭하여 설정하지 않습니다. 표현식으로 설정합니다.

1. **Display Notification** Activity를 더블 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/set-action-name-display.png" alt="click display notification" class="no-border" >}}

2. **Action Name** > **Edit**를 클릭하십시오 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/add-action-name.png" alt="edit action name"   width="500"  class="no-border" >}}

3. 표현식 필드에 `'show_page'`를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-action/show-page-exp.png" alt="show page expression"   width="400"  class="no-border" >}}

4. Nanoflow로 돌아올 때까지 **OK** 버튼을 클릭하십시오.

알림 설정을 잘 완료하셨습니다. 이제 테스트할 수 있습니다:

1. **Run Locally**를 클릭하여 앱을 업데이트하십시오.
2. 모바일 디바이스에서 앱을 시작하십시오.
3. **Send notification** 버튼을 탭하십시오.
4. 알림을 탭하여 선택한 페이지로 이동하십시오.
5. **Return to home page** 버튼을 탭하여 홈 페이지로 다시 이동하십시오.

이제 알림을 탭한 후 페이지를 표시할 수 있습니다. 다음으로, [로컬 알림 사용 파트 4: 데이터](/howto8/mobile/local-notif-data/)에서 해당 페이지에 데이터를 전달하는 방법을 배웁니다.

## 추가 정보

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [JavaScript Action 빌드](/howto8/extensibility/build-javascript-actions/)
