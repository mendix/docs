---
title: "푸시 알림 구현 테스트"
linktitle: "푸시 알림 테스트"
url: /howto8/mobile/testing-the-implementation/
weight: 60
---

## 소개

[푸시 알림 구현 방법](/howto8/mobile/implementation-guide/)에 설명된 단계를 완료한 후, 푸시 알림이 올바르게 작동하는지 테스트해야 합니다. 

## 사전 요구 사항

푸시 알림 테스트를 시작하려면 모바일 애플리케이션의 새 버전을 빌드해야 합니다:

1. [Apps](https://sprintr.home.mendix.com/)로 이동한 다음 앱을 클릭하십시오.
2. **Deploy** > **Mobile App**을 클릭하십시오.
3. **Permissions** > **Push Notifications** 체크박스가 선택되어 있는지 확인하십시오.
4. **Publish for Mobile App Stores**를 클릭하십시오.
5. **Do it yourself** 체크박스를 선택하고, 원하는 환경이 선택되어 있는지 확인한 다음 **Download Customizable Package**를 클릭하십시오. 

이렇게 하면 [하이브리드 앱 패키지 문서](https://github.com/mendix/hybrid-app-template/)에 따라 앱을 사용자 지정하는 데 사용할 수 있는 *zip* 앱이 제공됩니다. *zip* 앱에는 *google-services.json* 및 *GoogleService-info.plist* 파일을 참조하는 *config.xml* 파일이 포함되어 있습니다. 

FCM 푸시 알림을 성공적으로 사용하려면 *Firebase Cloud Messaging Server 설정*의 [Google 서비스 구성 파일 다운로드](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/#downloading-the-google-services-config-files) 섹션에서 얻은 *google-services.json* 및 *GoogleService-Info.plist* 파일을 앱의 **config** 폴더에 넣어야 합니다.

이러한 파일을 추가하면 **PushNotifications** 위젯이 FCM에 디바이스를 등록한 다음 Mendix 백엔드 서버와 FCM 등록 토큰을 공유합니다. 이는 FCM을 사용하여 디바이스에 메시지를 보내야 한다는 것을 의미합니다. 

### iOS 디바이스에 FCM 대신 APNS 사용

iOS 디바이스에 APNS를 사용하려면 *config.xml*에서 *GoogleService-info.plist*에 대한 참조를 삭제해야 합니다. 이렇게 하면 *GoogleService-info.plist* 파일을 포함할 필요가 없으며 APNS를 사용하여 iOS 디바이스에 메시지를 보낼 수 있습니다.

## 모바일 앱 빌드

푸시 알림을 위한 하이브리드 앱을 설정했으므로 [하이브리드 앱 패키지 문서](https://github.com/mendix/hybrid-app-template/)를 따라 빌드를 계속할 수 있습니다. 실행 중인 앱이 있으면 아래 섹션을 계속하십시오. 

## 디바이스에 푸시 알림 보내기

푸시 알림을 테스트하고 디바이스에 보내려면 다음 단계를 따르십시오:

1. 브라우저에서 애플리케이션을 열고 관리자로 로그인하십시오(예: MxAdmin).
2. 하이브리드 모바일 애플리케이션에 로그인하려면 새 사용자를 생성해야 합니다. 일반적으로 애플리케이션의 관리 페이지에서 수행할 수 있습니다. 익명 접근이 활성화된 경우 이 단계는 물론 필요하지 않습니다.
3. 하이브리드 모바일 앱을 열고 로그인하십시오. 오프라인 모드를 테스트하는 경우 동기화 버튼을 클릭하여 보류 중인 디바이스 등록 요청을 서버로 보내십시오.
4. **Push Notifications Administration** 페이지를 여십시오. 웹 애플리케이션의 관리자 뷰로 돌아가서 Push Notifications 관리 페이지의 **Devices** 탭으로 이동하십시오. 여기서 등록된 디바이스 목록에 하나의 디바이스가 표시되어야 하며, 이는 하이브리드 모바일 애플리케이션에 로그인하는 데 사용한 디바이스입니다. 디바이스를 선택하고 **New Message**를 클릭하여 계속하십시오.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/testing-the-implementation/21168174.png" class="no-border" >}}

5. 양식에 제목과 메시지를 입력하고 **Send**를 누르십시오. 디바이스가 새 푸시 알림을 수신해야 합니다. 하이브리드 모바일 앱이 현재 포그라운드에서 실행 중인 경우 알림이 앱 내에 표시됩니다. 그렇지 않으면 표준 푸시 알림으로 표시됩니다.

알림을 확인했다면 축하합니다! 이 문서를 따라 디바이스에서 푸시 알림을 성공적으로 테스트했습니다.

## 추가 읽기

* [모바일 앱 스토어에 Mendix 하이브리드 모바일 앱 게시](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
* [하이브리드 모바일 앱 디버그](/howto8/mobile/debug-a-mobile-app/)
