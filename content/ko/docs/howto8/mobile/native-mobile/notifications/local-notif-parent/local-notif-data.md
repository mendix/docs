---
title: "파트 4: 데이터"
url: /howto8/mobile/local-notif-data/
weight: 40
description: 푸시 알림에 데이터를 통합하기 위한 튜토리얼입니다.
---

## 소개

여러 앱에서 사용자가 알림을 탭하면 특정 매개변수가 설정된 특정 페이지로 이동합니다. 알림과 함께 데이터를 전송하여 이를 달성할 수 있습니다. 

예를 들어, 사용자가 Entity 객체에 대한 알림을 탭할 수 있습니다. 사용자는 Entity 객체의 세부 정보를 보여주는 세부 정보 페이지로 이동해야 합니다. 그러나 이를 위해서는 알림이 해당 특정 Entity를 세부 정보 페이지에 전달하도록 설정해야 합니다.

Mendix 데이터베이스의 모든 항목에는 고유 ID가 있습니다. 객체를 전달하려면 GetGUID JavaScript Action이 해당 객체의 GUID를 검색하여 로컬 알림에 전달해야 합니다. 알림을 탭하면 Widget이 객체의 GUID를 사용하여 GetObjectByGUID JavaScript Action으로 해당 객체를 검색할 수 있습니다. 마지막으로, 알림에서 지정한 액션에 객체가 전달됩니다.

페이지에 데이터를 보내기 위해 다음을 생성합니다:

* **두 개의 Entity** – 특정 객체를 표시하는 방법을 테스트하기 위한 *TestEntity*와 데이터를 페이지에 전달하는 데 도움이 되는 *Notification*
* **한 개의 페이지** – 알림을 탭할 때 표시될 *DetailTestEntity*
* **한 개의 Microflow** – 테스트용 더미 데이터를 생성하는 *DS_TestEntity*
* **세 개의 Nanoflow** – 더미 알림 객체를 생성하는 *DS_Notification*, GUID를 전달하는 *ACT_PassGUIDToNotification*, 알림의 데이터를 처리하는 *On_tapNotification*

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 로컬 알림과 푸시 알림 간의 [기본 차이점](https://developer.apple.com/documentation/usernotifications)을 검토하십시오
* 모바일 디바이스에 [Make It Native](/refguide8/getting-the-make-it-native-app/) 앱을 설치하십시오
* [로컬 알림 사용](/howto8/mobile/local-notif-parent/) 시리즈의 이전 튜토리얼을 완료하십시오

## 페이지에 데이터 보내기

두 개의 Entity를 만들려면 다음을 수행하십시오:

1. Domain Model로 이동하십시오.
2. Domain Model에 새 Entity를 드래그하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/new-entity.png" alt="new entity"   width="500"  class="no-border" >}}

3. 더블 클릭하고 이름을 *TestEntity*로 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/test-entity.png" alt="test entity"   width="500"  class="no-border" >}}

4. **Attributes** > **New**를 클릭하고 이름을 *StringAttribute_1*로 지정한 다음 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/first-string-attribute.png" alt="string attribute"   width="400"  class="no-border" >}}

5. Domain Model로 돌아올 때까지 **OK**를 클릭하십시오.
6. Domain Model에 문자열 속성 *GUIDString*이 있는 *Notification*이라는 Entity를 생성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/guid-notification.png" alt="GUID string"   width="500"  class="no-border" >}}

알림 Nanoflow를 설정하려면 다음을 수행하십시오:

1. *DS_Notification*이라는 Nanoflow를 생성하십시오. <br />
2. Nanoflow에 Create object Activity를 드래그하십시오.
3. Create object Activity를 더블 클릭하십시오.
4. **Entity** > **Select**를 클릭하십시오.
5. **Notification**을 클릭한 다음 **Select**를 클릭하십시오.
6. **OK**를 클릭하십시오.
7. Create object Activity를 마우스 오른쪽 버튼으로 클릭하고 **Set $NewNotification as return value**를 선택하십시오: <br />

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/create-notif-nano.png" alt="create notification nanoflow"   width="500"  class="no-border" >}}

Microflow를 설정하려면 다음을 수행하십시오:

1. *DS_TestEntity*라는 Microflow를 생성하십시오.
2. Microflow에 Create object Activity를 드래그하십시오.
3. Create object Activity를 더블 클릭하십시오.
4. **Entity** > **Select**를 클릭하십시오.
5. **NativeMobile.TestEntity**를 클릭하십시오.
6. **Select**를 클릭하십시오.
7. **Commit**을 체크하십시오 
8. **OK**를 클릭하십시오.
9. End event를 더블 클릭하고 **Type**이 **Boolean**인지 확인한 다음 값 필드에 *true*를 입력하고 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/end-event-true.png" alt="end event true"   width="500"  class="no-border" >}}

이 Microflow가 시작 후 실행되도록 하려면 다음을 수행하십시오:

1. Project Explorer에서 **Settings**를 더블 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/pe-settings.png" alt="project explorer"   width="400"  class="no-border" >}}

2. **Runtime** 탭을 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/runtime-tab.png" alt="click runtime"   width="400"  class="no-border" >}}

3. **After startup** > **Select**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/after-startup.png" alt="select after start up"   width="500"  class="no-border" >}}

4. **DS_TestEntity**를 클릭한 다음 **Select** 버튼을 클릭하여 다음과 같은 결과를 얻으십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/select-ds-entity.png" alt="select test entity"   width="500"  class="no-border" >}}

5. **OK**를 클릭하십시오

페이지를 만들려면 다음을 수행하십시오: 

1. *DetailTestEntity*라는 새로운 빈 네이티브 페이지를 생성하십시오.
2. 새 페이지에 Data view Widget을 드래그하십시오.
3. Data view Widget을 더블 클릭하십시오.
4. **Data Source**에서 **Entity (path)** > **Select**를 클릭하십시오.
5. **TestEntity**를 클릭하십시오.
6. **Select**를 클릭하여 다음을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/data-view-source.png" alt="entity test entity" class="no-border" >}}

7. **OK**를 클릭하십시오. 
8. **"Do you want to automatically fill the contents of the data view?"**라는 메시지가 표시되면 **Yes**를 클릭하십시오.
9. 이것이 사용자가 알림을 탭할 때 보게 되는 페이지입니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/page-with-data-view.png" alt="page with data view"   width="300"  class="no-border" >}}

다음으로 알림을 탭한 후 페이지에 데이터를 전달하는 방법을 배웁니다. 먼저 Nanoflow를 만드십시오:

1. *ACT_PassGUIDToNotification*이라는 Nanoflow를 생성하십시오.

2. Nanoflow에 검색 액션을 추가하고 **Source**를 **From Database**로, **Range**를 **First**로 설정하십시오. **Entity** > **Select**를 클릭하고 **TestEntity**를 선택하십시오. **Object name**에 *FirstTestEntityObject*를 입력하십시오. 그런 다음 **OK**를 클릭하십시오. 이것이 GUID를 가져올 객체입니다: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/retrieve-object.png" alt="retrieve object" class="no-border" >}}

3. Nanoflow에 JavaScript Action Call Activity를 추가하십시오.
4. Action call Activity를 더블 클릭하십시오.
5. **JavaScript Action** > **Select**를 클릭하십시오.
6. 검색 필드에 *GetGuid*를 입력하고 **GetGuid**를 클릭한 다음 **Select**를 클릭하십시오. (Native Quickstarter 템플릿 내의 NanoflowCommons 모듈에 포함되어 있으므로 GetGuid JavaScript Action을 찾을 수 있습니다.)
7. **Entity Object** 드롭다운을 클릭하고 **$FirstTestEntityObject**를 클릭하십시오.
8. **Variable name** 필드에 **GUIDForFirstObject**를 입력하십시오.
9. **OK**를 클릭하십시오.
10. Nanoflow에 네 개의 Create variable Activity를 드래그하십시오: *Title*, *Subtitle*, *Body*, *ActionName*. 각각 *'title1'*, *'subtitle1'*, *'body1'*, *'OpenPageWithParams'* 값을 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/title1-activity.png" alt="title1"   width="400"  class="no-border" >}}

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/subtitle1-activity.png" alt="subtitle1"   width="400"  class="no-border" >}}

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/body1-activity.png" alt="body1"   width="400"  class="no-border" >}}

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/actionname-activity.png" alt="actionname"   width="400"  class="no-border" >}}

    모든 Activity는 다음과 같이 보입니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/guid-nano-with-four-strings.png" alt="actionname"   width="500"  class="no-border" >}}

11. Nanoflow에 JavaScript action call Activity를 드래그하십시오. 
12. Action call을 더블 클릭하십시오.
13. **JavaScript action** > **Select**를 클릭하십시오.
14. 검색 필드에 *DisplayNotification*을 입력하고 해당 JavaScript Action을 클릭한 다음 **Select**를 클릭하십시오.
15. **Body**, **Title**, **Subtitle**, **Action name**, **Action guid**를 이전에 생성한 해당 변수로 설정하고 **Play Sound**를 **True**로 설정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/first-guid-action.png" alt="first guid action"   width="500"  class="no-border" >}}

16. **OK**를 클릭하십시오.
17. 이 Nanoflow를 앱의 **Home_Native** 페이지에 드래그하여 이를 호출하는 버튼을 만들고 버튼 이름을 *Pass GUID to Notification*으로 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/pass-guid-button.png" alt="guid button"   width="500"  class="no-border" >}}

잘하셨습니다! 사용자가 **Pass GUID to Notification** 버튼에서 알림을 탭하면 **DetailTestEntity** 페이지로 이동합니다. 다음으로 **notificationEntity**를 매개변수로 받아 이 매개변수를 통해 객체를 검색하고 해당 객체를 페이지에 전달하는 Nanoflow를 생성합니다.

1. *ON_tapNotification*이라는 새 Nanoflow를 만드십시오.
2. Nanoflow에 매개변수를 드래그하십시오. 
3. **Data Type** > **Select**를 클릭하십시오. **Notification**을 클릭한 다음 **Select**를 클릭하십시오.
4. **Name**을 *notificationEntity*로 입력하십시오.
5. **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/notif-entity.png" alt="guid button" class="no-border" >}}

6. Nanoflow에 JavaScript action call을 드래그하십시오.
7. JavaScript action call을 더블 클릭한 다음 **Select**를 클릭하십시오. 
8. 검색 필드에 *GetObjectByGuid*를 입력하고 해당 액션을 클릭한 다음 **Select**를 클릭하십시오. 
9. **TestEntity**를 클릭한 다음 **Select**를 클릭하십시오.
10. **Object guid** 드롭다운 메뉴 옆의 **Edit**를 클릭하십시오.
11. 인수 필드에 *$NotificationEntity/GUIDString*을 입력하고 **OK**를 클릭하십시오.
12. **Use Return Value** > **Yes**를 선택하십시오.
13. **Object name**에 *ReturnedObjectByGUID*를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/get-object-by-guid-settings.png" alt="guid settings"   width="500"  class="no-border" >}}

14. **OK**를 클릭하여 JavaScript Action 설정을 저장하고 닫으십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/guid-activity.png" alt="guid activity"   width="500"  class="no-border" >}}

15. Nanoflow에 **Change object** Activity를 드롭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/new-change-object.png" alt="change object"   width="500"  class="no-border" >}}

16. Change object Activity를 더블 클릭하십시오.
17. 드롭다운 메뉴에서 **Object** > **ReturnedObjectByGUID (NativeMobile.TestEntity)**를 선택하십시오.
18. **Action** > **New**를 클릭하고 **Member**가 문자열 속성으로 설정되어 있는지 확인한 다음 **Value**에 *'Your notification has forwarded you here!'*를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/change-object-action.png" alt="change object action"   width="400"  class="no-border" >}}

19. **OK**를 클릭하십시오. 대화 상자가 다음과 같은지 확인한 다음 **OK**를 다시 클릭하여 닫으십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/change-object-final.png" alt="change object final"   width="400"  class="no-border" >}}

다음으로 **ON_tapNotification**에 대한 Show page 액션을 생성합니다.

1. Nanoflow에 **Show Page** Activity를 드래그하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/add-show-page.png" alt="new show page"   width="500"  class="no-border" >}}

2. **Show Page** Activity를 더블 클릭하십시오.
3. **Object to pass** 드롭다운 메뉴에서 **ReturnedObjectByGuid**를 선택하십시오.
4. **Page** > **Select**를 클릭하고 **DetailTestEntity**를 클릭한 다음 **OK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/show-page-settings.png" alt="guid button"   width="400"  class="no-border" >}}

5. **OK**를 클릭하여 **Show Page** Activity 설정을 닫은 다음 **Home_Native** 페이지로 이동하십시오.

이제 홈 페이지에 Data view를 설정합니다.

1. **Home_Native** 페이지에 **Data View** Widget을 드래그하십시오.
2. Data view를 더블 클릭하십시오.
3. **Data source** > **Type** > **Nanoflow**를 선택하십시오.
4. **Nanoflow** > **Select**를 클릭하고 **DS_Notification**을 선택하십시오.
5. **OK**를 클릭하여 홈 페이지로 돌아가고 후속 Data view 대화 상자에서 **OK**를 클릭하십시오.
6. **Notifications** Widget을 이 Data view 안으로 이동하십시오.
7. Data flow의 텍스트 상자가 **GUIDString**을 데이터 소스로 사용하고 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/GUID-data-source.png" alt="first guid action"   width="500"  class="no-border" >}}

8. Notifications Widget을 더블 클릭하십시오.
9. **GUID** > **Select**를 클릭하십시오.
10. **GUIDString (String (200))**을 클릭한 다음 **Select**를 클릭하십시오. 결과는 다음과 같습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/set-guid-string.png" alt="guid string"   width="500"  class="no-border" >}}

11. **Actions** > **New**를 클릭하십시오.
12. *OpenPageWithParams*라는 **New Action**을 생성하고 **On open**을 **Call a nanoflow**로 설정하고 **ON_tapNotification**을 선택하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-data/notif-action-2.png" alt="notification action"   width="500"  class="no-border" >}}

잘하셨습니다! 이제 데이터 알림 기능을 테스트합니다.

1. 모바일 디바이스에서 앱을 시작하고 로드하십시오.
2. 알림을 보내는 버튼을 탭하십시오.
3. 알림을 탭하여 적절한 객체가 있는 **DetailTestEntity** 페이지로 이동하십시오.

축하합니다! 데이터의 힘을 활용하여 푸시 알림을 향상시켰습니다. 다음으로, [로컬 알림 사용 파트 5: 예약](/howto8/mobile/local-notif-schedule-cancel/)에서 특정 시간에 알림을 예약하고 취소하는 방법을 배웁니다.

## 추가 정보

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [JavaScript Action 빌드](/howto8/extensibility/build-javascript-actions/)
