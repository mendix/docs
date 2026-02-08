---
title: "파트 2: 배지"
url: /howto8/mobile/local-notif-badges/
weight: 20
description: 로컬 푸시 알림의 배지 설정을 위한 튜토리얼입니다.
---

## 소개

배지는 iOS와 Android의 많은 앱에서 중요합니다. 배지는 플랫폼에 따라 모양이 다르며, 종종 애플리케이션에서 중요한 정보를 나타냅니다. 예를 들어 메시징 애플리케이션에서는 새 메시지를 사용자에게 알리는 배지를 사용하는 것이 좋은 방법입니다.

사용자가 알림을 받으면 앱 아이콘에 배지가 표시되도록 앱에 배지 기능을 구축해야 합니다. 또한 배지는 사용자가 앱을 확인할 때 *자동으로 감소하거나 제거되지 않습니다*. 이 두 가지 기능은 개발자가 수동으로 구축해야 합니다. 

이 문서에서는 앱에 배지 기능을 추가하는 방법과 배지를 제거하는 방법을 배웁니다.

## 전제 조건 

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 로컬 알림과 푸시 알림 간의 [기본 차이점](https://developer.apple.com/documentation/usernotifications)을 검토하십시오
* 모바일 디바이스에 [Make It Native](/refguide8/getting-the-make-it-native-app/) 앱을 설치하십시오
* [로컬 알림 사용](/howto8/mobile/local-notif-parent/) 시리즈의 이전 튜토리얼을 완료하십시오

## 배지 번호 설정

간단한 로컬 알림을 보내는 방법을 알고 있으므로 다음 단계에 따라 배지 번호를 설정할 수 있습니다:

1. **ACT_CreateAndSendNotification**을 여십시오.
2. 생성한 세 개의 문자열 변수 오른쪽에 **Create variable** Activity를 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/new-variable-badge.png" alt="new create variable"   width="500"  class="no-border" >}}

3. 변수 Activity를 더블 클릭하고 **Data type** > **Integer/Long**을 선택하십시오.
4. 표현식 값 필드에 *1*을 입력하십시오. 
5. **variable name** 필드에 *badge_number*를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-1.png" alt="badge number"   width="400"  class="no-border" >}}

6. **OK**를 클릭하십시오.
7. Merge Activity 오른쪽에 **Set badge number** JavaScript Action을 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/set-badge-act.png" alt="drag set badge number" class="no-border" >}}

8. 배지 번호 Activity를 더블 클릭하십시오.
9. **Badge number**의 값을 **$badge_number**로 설정하십시오

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-input.png" alt="value badge number" class="no-border" >}}

10. **OK**를 클릭하십시오.

모바일 디바이스에서 앱을 시작하고 로드한 다음 Nanoflow를 호출하는 버튼을 탭하십시오. 알림이 표시됩니다. 디바이스의 시작 화면으로 이동하여 앱 아이콘의 알림 배지를 확인하십시오:

{{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  class="no-border" >}}

## 배지 번호 줄이기

사용자가 앱을 열면 배지가 사라지도록 하려면 아래 지침을 따르십시오.

1. **Home_Native**에 **App events** Widget을 드롭하십시오([Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)에 포함되어 있으므로 이 Widget을 가지고 있습니다):

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/app-events.png" alt="app event widget" class="no-border" >}}

2. **App events** Widget을 더블 클릭하십시오.
3. **On load** > **Call a nanoflow**를 선택하십시오.
4. **New**를 클릭하고 새 Nanoflow를 만드십시오: *ACT_ClearBadge*.
5. **ACT_ClearBadge**로 이동하십시오.
6. Nanoflow에 **Set badge number** Activity를 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-set-badge.png" alt="set badge activity" class="no-border" >}}

7. **Set badge number** Activity를 더블 클릭하십시오.
8. **Badge number** > **Edit**를 클릭하십시오.
9. *0*을 입력하고 **OK**를 클릭하십시오.
10. **Use Return Value**를 **No**로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-badge-settings.png" alt="return value"   width="400"  class="no-border" >}}

11. Microflow에 **Log message** Activity를 드래그하십시오.
12. **Log message** Activity를 더블 클릭하고 **Template**에 *Your notification has been cleared*를 입력한 다음 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-text-log.png" alt="clear text"   width="500"  class="no-border" >}}

13. **Home_Native** 페이지로 돌아가서 **App events** Activity를 더블 클릭하십시오.
14. **Page load** > **On load**가 **Call a nanoflow**로 설정되어 있는지 확인하고 해당 Nanoflow를 **ACT_ClearBadge**로 지정하십시오. 이렇게 하면 페이지 로드 시 배지가 지워집니다.
15. **App resume** > **On resume**을 **Call a nanoflow**로 설정하고 해당 Nanoflow를 **ACT_ClearBadge**로 지정하십시오. 이렇게 하면 앱이 다시 시작될 때 배지가 지워집니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/app-event-final-settings.png" alt="app event final settings"   width="300"  class="no-border" >}}

16. **OK**를 클릭하고 변경 사항을 저장하십시오.

이제 배지 지우기를 테스트할 수 있습니다.

1. 모바일 디바이스에서 앱을 시작하고 로드한 다음 Nanoflow를 호출하는 버튼을 탭하십시오. 알림이 표시됩니다. 
2. 디바이스의 시작 화면으로 이동하여 앱의 알림 배지를 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  class="no-border" >}}

3. 앱을 다시 탭하여 여십시오.
4. 디바이스의 홈 화면으로 이동하여 Make It Native 앱에 더 이상 배지가 없는 것을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/cleared-badge-icon.png" alt="cleared-badge-icon.png"   width="300"  class="no-border" >}}

5. Studio Pro **Console**을 확인하여 설정한 **Your notification has been cleared** 텍스트를 읽으십시오.

축하합니다! 기본 배지 지우기를 성공적으로 구현했습니다. 다음으로, [로컬 알림 사용 파트 3: 액션](/howto8/mobile/local-notif-action/)에서 사용자가 알림을 탭할 때 페이지로 이동하도록 알림을 구성하는 방법을 배웁니다.

## 추가 정보

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [JavaScript Action 빌드](/howto8/extensibility/build-javascript-actions/)
