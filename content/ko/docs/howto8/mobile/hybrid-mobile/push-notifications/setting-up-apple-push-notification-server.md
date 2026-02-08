---
title: "Apple Push Notification Server 설정"
linktitle: "Apple Push Notification Server"
url: /howto8/mobile/setting-up-apple-push-notification-server/
weight: 30
---

## 소개 {#intro}

진행하려면 Apple 개발자 라이선스와 Mac OS X를 실행하는 디바이스가 필요합니다.

이 사용법 가이드에서는 이미 프로비저닝 프로필이 있는 앱 서명 키가 있고 모바일 앱을 자유롭게 빌드하고 설치할 수 있다고 가정합니다(그렇지 않은 경우 [이 사용법 가이드](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)를 참조하십시오). 앱에서 푸시 알림을 수신할 수 있도록 App ID가 `Explicit App ID`를 사용하고 `Push Notifications`가 켜져 있어야 합니다.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/setting-up-apple-push-notification-server/20217895.png" class="no-border" >}}

그렇지 않은 경우 `Explicit App ID`와 `Push Notifications`가 켜진 새 App ID를 생성해야 합니다. 아래 단계를 따른 후 이 App ID에 대한 새 프로비저닝 프로필을 생성하고 다운로드하여 모바일 앱을 다시 빌드하는 데 사용해야 합니다.

모든 것이 설정되고 애플리케이션을 빌드하고 배포할 수 있으면 푸시 알림 서버 설정을 진행할 수 있습니다. 알림 서버와 Apple Push Notification 서비스 간의 연결을 설정하려면 다음 중 하나가 필요합니다:

* Apple Push Notification 서비스 키, 또는
* *.p12* 형식의 Apple Push Notification 서비스 SSL 인증서

## 옵션 A: 키 사용

Apple에서 Apple Push Notifications 키를 얻고 설정하려면 아래 단계를 따르십시오.

### Apple Developer Center에 로그인

Apple Developer에 로그인하고 [https://developer.apple.com/account/ios/authkey/](https://developer.apple.com/account/ios/authkey/)로 이동하십시오.

### 키 생성

화면 오른쪽 상단의 **+** 아이콘을 클릭하십시오. 새 양식이 표시됩니다. 이 키에 대한 설명적인 이름을 입력하고, **Push Notifications service** 체크박스를 선택한 다음 **Continue**를 누르십시오. 다음 페이지에서 **Confirm**을 누르십시오.

### 키 다운로드

다운로드 버튼을 누르고 키를 안전한 곳에 저장하십시오. 다음 단계에서 사용할 **Key ID**도 복사하십시오.

### 애플리케이션에서 APNs 구성

마지막 단계에서는 애플리케이션 내에서 APNs를 구성해야 합니다. 이는 Administrator 역할이 있는 사용자로 애플리케이션에 로그인하고 *푸시 알림 구현 방법*의 [모듈의 프로젝트 보안 설정](/howto8/mobile/implementation-guide/#setting) 섹션에서 설정한 **PushNotifications_Administration** 페이지로 이동하여 수행할 수 있습니다.

이를 위해 다음을 수행하십시오:

* 새 APNs 구성을 생성하고 새 구성의 이름을 선택하십시오
* 새 구성의 토픽을 선택하십시오(자유롭게 선택할 수 있습니다)
    * **Authentication Type**을 **Token**으로 설정하십시오
    * "topic disallowed" 오류 메시지가 표시되면 토픽 필드를 비워 두십시오
* Apple Push Notification 서비스 키를 추가하십시오
    * Apple 개발자 웹사이트에 표시된 팀 ID를 입력하십시오
    * 이전 단계에서 복사한 키 ID를 입력하십시오

## 옵션 B: SSL 인증서 사용

Apple에서 Apple Push Notifications 서비스 SSL 인증서를 얻고 설정하려면 아래 단계를 따르십시오.

### Apple Developer Center에 로그인

Apple Developer에 로그인하고 [https://developer.apple.com/account/ios/identifier/bundle](https://developer.apple.com/account/ios/identifier/bundle)에서 앱을 선택하십시오.

### 인증서 유형 선택

**Edit**를 클릭하고 **Push Notifications** 섹션으로 스크롤한 다음 **Development** 인증서 또는 **Production** 인증서를 구성하도록 선택하십시오. Development 인증서는 개발 모드에서 빌드하고 실행되는 iOS 앱에서만 사용할 수 있습니다. Production 인증서는 프로덕션 모드에서 빌드하고 실행되는 앱에서만 사용할 수 있습니다.

### CSR 파일 생성

마법사에서 Certificate Signing Request(CSR)를 생성하는 방법을 설명합니다. 이 설명을 읽고 **Continue**를 누르십시오. 다음 단계에서 CSR 파일을 요청받습니다. 앱 서명 인증서를 생성하는 데 사용한 것과 동일한 CSR을 사용할 수 있습니다. CSR이 없는 경우 아래에 표시된 지침을 따르십시오.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/setting-up-apple-push-notification-server/20217898.png" class="no-border" >}}

### 인증서 다운로드

Apple Push Notification 서비스 SSL 인증서를 다운로드하고 Keychain에 추가하십시오.

이 인증서는 *.p12* 형식으로 변환해야 합니다. 방법을 모르는 경우 Apple의 [What is app signing?](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html)을 참조하십시오.

### 애플리케이션에서 APNs 구성

마지막 단계에서는 애플리케이션 내에서 APNs를 구성해야 합니다. 이는 Administrator 역할이 있는 사용자로 애플리케이션에 로그인하고 *푸시 알림 구현 방법*의 [모듈의 프로젝트 보안 설정](/howto8/mobile/implementation-guide/#setting) 섹션에서 설정한 **PushNotifications_Administration** 페이지로 이동하여 수행할 수 있습니다.

APNs를 구성하려면 다음 단계를 완료하십시오:

* 새 APNs 구성을 생성하고 새 구성의 이름을 선택하십시오
* 새 구성의 토픽을 선택하십시오(자유롭게 선택할 수 있습니다)
    * **Authentication Type**을 **Certificate**로 설정하십시오
    * 생성한 인증서 유형에 해당하는 **Stage**를 선택하십시오
* *.p12* 형식의 Apple Push Notification 서비스 SSL 인증서를 추가하십시오
    * 인증서 생성 시 사용한 비밀번호를 입력하십시오

## 추가 읽기

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [모바일 앱 스토어에 Mendix 하이브리드 모바일 앱 게시](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
