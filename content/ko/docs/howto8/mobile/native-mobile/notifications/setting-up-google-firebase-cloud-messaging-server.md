---
title: "Google Firebase Cloud Messaging Server 설정"
linktitle: "Firebase Cloud Messaging 설정"
url: /howto8/mobile/setting-up-google-firebase-cloud-messaging-server/
weight: 55
---

## 소개

Google의 Firebase Cloud Messaging(FCM) 서비스를 사용하여 Android와 iOS 디바이스 모두에 푸시 알림을 보낼 수 있습니다. Push Notifications Connector 모듈에서 FCM을 사용하여 푸시 알림을 보내려면 FCM이 활성화된 Firebase 계정을 설정해야 합니다. 이 사용 방법에서는 FCM에 등록하고 앱에서 서비스를 구성하는 방법을 설명합니다.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* Firebase 계정 보유 (https://firebase.google.com)

## Firebase 프로젝트 설정

두 가지 가능한 시나리오가 있습니다: 새 FCM 프로젝트를 생성하거나 기존 GCM 프로젝트를 FCM으로 업데이트할 수 있습니다. 두 시나리오 모두 아래에 설명되어 있습니다.

### GCM 프로젝트를 FCM으로 마이그레이션

푸시 알림 전달의 안정성 저하를 방지하려면 기존 GCM 프로젝트를 FCM으로 마이그레이션하고 필요한 경우 자격 증명을 업그레이드해야 합니다.

#### Developer's Console에 로그인

[Firebase developer's console](https://console.firebase.google.com/)을 열고 Google ID로 로그인하십시오.

#### 프로젝트 가져오기

프로젝트를 가져오려면 다음을 수행하십시오:

1. Firebase 콘솔에서 **Import Google Project**를 선택하십시오. 
1. 기존 프로젝트 목록에서 GCM 프로젝트를 선택하고 지역을 선택한 다음 **Add Firebase**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/Add_Firebase_to_a_Google_Project.png"   width="350"  class="no-border" >}}

이 작업이 완료되면 아래의 [APNs 자격 증명 구성](#configuring)을 계속 진행하십시오.

### 새 FCM 프로젝트 생성

#### Developers Console에 로그인

[Firebase developers console](https://console.firebase.google.com/)을 열고 Google ID로 로그인하십시오.

#### 프로젝트 생성

프로젝트를 생성하려면 다음을 수행하십시오:

1. **Create new project**를 클릭하십시오.
1. 애플리케이션의 프로젝트 이름과 지역을 입력하십시오. 
1. **Create**를 클릭하십시오"

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/Create_Firebase_Project.png"   width="350"  class="no-border" >}}

## Android 또는 iOS 앱 추가 {#native-apps}

FCM에 앱을 추가하기 전에 앱의 번들 ID를 확인해야 합니다. 위치는 모바일 앱의 유형에 따라 다릅니다.

Native Mobile 앱의 경우 번들 ID는 NBUI에서 **App identifier**로 지정한 것입니다. 생성된 GitHub 저장소에서 나중에 이 ID를 찾을 수 있습니다:

* Android의 경우 *android/app/build.gradle*을 열고 **applicationId**를 확인하여 ID를 찾으십시오 
* iOS의 경우 *ios/Config/config.xcconfig*를 열고 **BUNDLE_IDENTIFIER**를 확인하여 ID를 찾으십시오

**Deploy**를 클릭한 다음 **Mobile App**을 클릭하십시오. ID는 **App Identifier**로 표시됩니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/hybrid_app_identifier.png"   width="350"  class="no-border" >}}

FCM에 앱을 추가하려면 다음을 수행하십시오:

1. **Project Overview** 톱니바퀴를 클릭하고 **Project settings**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/project_settings.png"   width="350"  class="no-border" >}}

1. **General** 탭으로 이동하여 **Add app**을 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/add_app.png"   width="350"  class="no-border" >}}

1. Android를 선택하고 bundle_id를 입력한 다음 나머지 단계는 건너뛰십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/android_setup.png"   width="350"  class="no-border" >}}

번들 ID는 패키지 ID와 일치해야 합니다. iOS에 대해서도 이 단계를 반복하십시오.

## APNs 자격 증명 구성 (선택 사항) {#configuring}

FCM을 통해 iOS 디바이스에 푸시 알림을 보내려면(Native Mobile 앱의 경우) APNs 자격 증명을 구성해야 합니다:

1. 화면 왼쪽 상단을 클릭하고 **Project settings**를 선택하십시오.
1. **Cloud messaging** 탭으로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_cloud_messaging.png"   width="350"  class="no-border" >}}

1. 이 탭에서 [Apple Developer 계정](https://developer.apple.com)에서 구성한 APNs 키 또는 APNs 인증서를 업로드하십시오.

## 서비스 계정 설정 {#setting-up-a-service-account}

화면 왼쪽 상단의 톱니바퀴를 클릭하고 **Project settings**를 선택하십시오. 그런 다음 **Service accounts** 탭으로 이동하십시오.

{{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_service_accounts.png"   width="350"  class="no-border" >}}

이 페이지에서 **Generate new private key**를 누르십시오. 생성된 파일을 안전한 위치에 저장하십시오. Mendix 애플리케이션의 백엔드에서 FCM을 구성할 때 이 파일을 사용합니다.

방금 생성한 파일은 앱의 모든 사용 가능한 Firebase 서비스에 대한 API 접근 권한을 제공합니다. 더 제한적인 서비스 계정을 원하는 경우 화면 오른쪽 상단의 **Manage all service accounts**를 클릭한 다음 Cloud Messaging 기능을 사용하도록 제한된 서비스 계정을 생성하십시오.

## Google Services 구성 파일 다운로드 {#downloading-the-google-services-config-files}

이전 단계에서 설정한 백엔드 구성 외에도 모바일 애플리케이션의 일부로 번들될 추가 파일이 필요합니다. 이를 얻으려면 화면 왼쪽 상단의 톱니바퀴를 다시 클릭하고 **Project settings**를 선택하십시오. 그런 다음 **General** 탭으로 이동하십시오:

{{< figure src="/attachments/howto8/mobile/native-mobile/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_platforms.png"   width="350"  class="no-border" >}}

하단의 목록에는 Firebase 프로젝트에 대해 구성한 Android 및 iOS 애플리케이션이 표시됩니다. Android 애플리케이션을 선택하고 *google-services.json*을 클릭하십시오. 그런 다음 iOS 애플리케이션을 클릭하고 *GoogleService-Info.plist*를 클릭하십시오. 두 파일 모두 안전한 위치에 저장하십시오. 모바일 애플리케이션을 빌드할 때 이 파일들이 필요합니다.

{{% alert color="warning" %}}
FCM을 사용하여 iOS 디바이스에 푸시 알림을 보낼 계획이 있을 때만 Firebase 프로젝트에서 iOS 애플리케이션을 생성하십시오. APNS를 계속 사용하여 iOS 디바이스에 푸시 알림을 보낼 계획이라면 Firebase 프로젝트에서 iOS 애플리케이션을 생성할 필요가 없으며, *GoogleService-Info.plist* 구성 파일을 다운로드할 필요도 없습니다.
{{% /alert %}}

## 추가 정보

* [푸시 알림 설정](/howto8/mobile/notifications/)
* [하이브리드 푸시 알림 설정](/howto8/mobile/setting-up-hybrid-push-notifications/)
