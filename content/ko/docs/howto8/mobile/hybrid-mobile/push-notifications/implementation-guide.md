---
title: "푸시 알림 구현"
url: /howto8/mobile/implementation-guide/
weight: 10
---

## 소개

이 사용법 가이드에서는 애플리케이션에서 푸시 알림을 구현하는 데 필요한 단계를 안내합니다.

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* PushNotifications 모듈 가져오기
* 푸시 알림 위젯 및 관리자 페이지 추가
* 필요한 종속성으로 여러 프로젝트 파일 업데이트
* FCM/APNs 접근/자격 증명 획득 및 애플리케이션에 구성
* 하이브리드 모바일 패키지 빌드

## Marketplace에서 PushNotifications 모듈 가져오기

[Push Notifications Connector](/appstore/modules/push-notifications/) 모듈은 Mendix Marketplace에 게시되어 있습니다. 프로젝트로 가져오려면 Mendix Studio Pro 오른쪽 상단의 Marketplace 아이콘을 클릭하십시오. "Push Notifications Connector"를 검색하고 결과의 제목을 클릭하십시오:

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/20218020.png" class="no-border" >}}

결과 페이지에서 녹색 **Download** 버튼을 클릭하십시오. **Add as a new module**이 선택되어 있는지 확인한 다음 **Import**를 클릭하십시오:

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/20217885.jpg" class="no-border" >}}

{{% alert color="warning" %}}
Push Notifications Connector는 모바일 앱과 백엔드 부분이 동일한 앱에 있다고 가정합니다.
{{% /alert %}}

## 모듈 종속성 설치

PushNotifications 모듈에는 다음 종속성이 있습니다:

* [Encryption](/appstore/modules/encryption/)
* [Community Commons Function Library](/appstore/modules/community-commons-function-library/)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515/)
* [Native Mobile Resources](/appstore/modules/native-mobile-resources/)

이러한 종속성을 포함하려면 PushNotifications 모듈을 설치한 것과 유사한 방식으로 Marketplace에서 다운로드하십시오. 가져오는 동안 프로젝트 파일 덮어쓰기에 대한 정보가 포함된 팝업 창이 나타날 수 있으며, **OK**를 클릭하여 확인할 수 있습니다.

{{% alert color="info" %}}

프로젝트가 이전 버전의 [Encryption](/appstore/modules/encryption/) 모듈을 사용하는 경우 존재하지 않는 레이아웃을 참조하는 오류가 발생할 수 있습니다. **Encryption.ResponsiveLayout_Certificate** 레이아웃의 기본 레이아웃을 다른 레이아웃에 할당하여 이 문제를 해결할 수 있습니다(이 특정 사용 사례에서는 어떤 레이아웃을 사용하는지는 중요하지 않습니다). 이는 버전 1.3.1 이상에는 적용되지 않습니다.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/20217886.jpg" class="no-border" >}}

{{% /alert %}}

모듈과 종속성을 가져온 후 오류 도크에서 엔터티 접근이 최신이 아니라는 알림이 표시됩니다. 이 오류를 수정하려면 오류를 더블 클릭한 다음 도메인 모델 창 상단의 **Update security**를 클릭하십시오.

## 애플리케이션 레이아웃에 푸시 알림 스니펫 포함

타사 원격 푸시 서비스(FCM 또는 APNs)에 디바이스를 올바르게 등록하고 인앱 알림을 표시하려면 앱의 페이지에 위젯을 배치해야 합니다. **PushNotifications** 모듈의 **_USE ME** 폴더에 있는 **Online_Snippet** 또는 **Offline_Snippet**을 앱에서 사용하는 레이아웃으로 드래그하여 이를 수행할 수 있습니다. 이 두 가지 중 어느 것을 선택해야 하는지는 Mendix 하이브리드 앱이 온라인 프로필을 사용하는지 오프라인 프로필을 사용하는지에 따라 달라집니다. 푸시 알림은 현재 데스크톱에서 작동하지 않습니다.

앱이 오프라인 호환인 경우 디바이스 등록 요청이 서버와 동기화되도록 사용자가 동기화 버튼을 사용할 수 있는지 확인하십시오. 자세한 내용은 [Offline](/refguide8/offline-first/) 및 [Navigation](/refguide8/navigation/#hybrid-profiles)을 참조하십시오.

{{% alert color="warning" %}}

**PushNotification_Snippet**에서 **Device Registration reference** 캡션이 있는 버튼을 제거하지 마십시오. 이는 위젯을 오프라인 호환 가능하게 만드는 데 필요합니다. 이 버튼은 사용자에게 보이지 않습니다.

{{% /alert %}}

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/20217888.jpg" class="no-border" >}}

## After-Startup Microflow에서 Connector 시작

PushNotifications 모듈에는 APNs 커넥터를 시작하는 **AfterStartup_PushNotifications**라는 Microflow가 포함되어 있습니다. **AfterStartup** Microflow에서 이 Microflow를 호출하십시오.

프로젝트에 이미 AfterStartup Microflow가 구성되어 있는 경우 다음 중 하나를 수행하는 것이 좋습니다: 

* 기존 AfterStartup Microflow와 AfterStartup_PushNotifications Microflow를 모두 호출하는 새 Microflow를 생성한 다음 이를 앱의 AfterStartup Microflow로 설정
* 기존 AfterStartup Microflow에 AfterStartup_PushNotifications Microflow를 실행하는 새 액션 추가

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/on-app-startup.png" alt="On start push microflow" class="no-border" >}}

## 관리 페이지 설정 {#setting}

**PushNotifications_Administration** 페이지를 프로젝트 탐색에 추가하여 앱을 배포한 후 접근할 수 있도록 하십시오. 이 페이지에는 세 개의 탭이 있습니다:

* **Pending Messages** - QueueMessage 액션을 사용하여 전송되었거나 이전 전송 시도가 실패하여 대기열에 있는 모든 메시지를 표시합니다
* **Devices** - 애플리케이션에 등록된 모든 디바이스 목록을 포함하며 테스트 목적에 유용합니다
* **Configuration** - 나중에 해당 서비스(APNs 및 FCM)에 도달할 수 있도록 애플리케이션을 구성합니다

{{% alert color="warning" %}}

오프라인 디바이스의 탐색 레이아웃에 관리 페이지를 추가하지 마십시오. 관리 페이지는 오프라인 호환이 아닙니다.

{{% /alert %}}

## 모듈의 프로젝트 보안 설정

**Project Security** 대화 상자의 **User roles** 탭에서 다음을 포함하십시오:

* **PushNotifications.Administrator** 역할을 기본 **Administrator** 역할의 일부로 포함
* **PushNotifications.User** 역할을 기본 **User** 역할의 일부로 포함
* **PushNotifications.Anonymous** 역할을 기본 **Anonymous** 역할의 일부로 포함(애플리케이션이 익명 사용자를 허용하는 경우)

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/implementation-guide/21168173.png" class="no-border" >}}

## 앱 배포

이 시점에서 모든 구현 단계가 완료되었으며 애플리케이션을 Mendix Cloud에 배포할 수 있습니다. 무료 앱을 사용하는 경우 **Run**을 클릭하기만 하면 됩니다.

{{% alert color="warning" %}}

애플리케이션을 시작하기 전에 `Encryption.EncryptionKey` 상수에 값이 있는지 확인하십시오. 값이 설정되지 않으면 APNs로 알림을 보내려고 할 때 `NullPointerException`이 발생합니다. 무료 앱을 사용하는 경우 모델에서 상수의 기본값을 설정하십시오. 그렇지 않으면 Mendix Portal에서 상수 값을 구성하십시오.

{{% /alert %}}

## APNs 또는 FCM 접근 설정

아래는 APNs 또는 FCM에 대한 접근을 설정하고 애플리케이션에서 구성하는 지침입니다. FCM이 APNs보다 설정이 훨씬 덜 복잡하므로 FCM부터 시작하는 것을 권장합니다. 나중에 이 섹션으로 돌아와 APNs를 설정할 수 있습니다.

Mendix 앱을 열고 **Admin**으로 로그인한 다음 **PushNotifications_Administration** 페이지를 여십시오. **FCM** 섹션으로 스크롤하여 구성을 생성하거나 편집하십시오. 

FCM을 다음과 같이 구성하십시오:

1. **Enabled** 체크박스를 선택하십시오.
2. 새 구성의 이름을 입력하십시오.
3. Firebase 프로젝트 ID를 입력하십시오([Firebase 콘솔](https://console.firebase.google.com/) 웹사이트에 있습니다).
4. 서비스 계정을 생성할 때 다운로드한 개인 키를 업로드하십시오.

{{% alert color="warning" %}}
애플리케이션을 시작하기 전에 **Encryption.EncryptionKey** 상수에 유효한 값이 있는지 확인하십시오. 값이 설정되지 않으면 개인 키가 올바르게 저장되지 않고 FCM으로 알림을 보내려고 할 때 `NullPointerException` 오류가 발생합니다. `NullPointerException` 오류가 발생하면 **Encryption.EncryptionKey** 상수의 값을 다시 확인하고, 앱을 재시작한 다음, 개인 키를 다시 업로드하십시오.
{{% /alert %}}

자세한 내용은 [Apple Push Notification Server 설정 방법](/howto8/mobile/setting-up-apple-push-notification-server/) 및 [Firebase Cloud Messaging Server 설정 방법](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)을 참조하십시오.

## 하이브리드 모바일 애플리케이션 빌드

이제 하이브리드 모바일 애플리케이션을 빌드해야 합니다. 이 방법에 대한 설명은 [Mendix 하이브리드 모바일 앱 게시 방법](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)을 참조하십시오.

## 추가 읽기

* [Microflow](/refguide8/microflows/)
* [푸시 알림 구현 테스트](/howto8/mobile/testing-the-implementation/)
