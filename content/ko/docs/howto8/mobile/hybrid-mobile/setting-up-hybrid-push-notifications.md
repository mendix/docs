---
title: "하이브리드 푸시 알림 설정"
url: /howto8/mobile/setting-up-hybrid-push-notifications/
weight: 9
description: "PhoneGap Build로 하이브리드 푸시 알림을 설정하는 방법을 알아보세요."
---

## 소개

이 사용법 가이드에서는 하이브리드 푸시 알림을 설정합니다.

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 푸시 알림을 활성화하도록 하이브리드 템플릿 사용자 지정

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Google Firebase Cloud Messaging Server 설정 방법](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)을 완료하십시오

## 모바일 애플리케이션 빌드

앱이 푸시 알림을 지원하는 경우 앱에 대한 Firebase 계정을 설정하고 하이브리드 앱에 Google 서비스 설명 파일(*google-services.json* 및 *GoogleService-Info.plist*)을 포함해야 합니다.

이로 인해 푸시 알림을 사용하는 Mendix 하이브리드 앱은 더 이상 Mendix Portal의 PhoneGap Build 흐름을 사용하여 직접 빌드할 수 없습니다. 대신 하이브리드 앱 패키지를 로컬에서 준비해야 합니다. 생성된 하이브리드 앱 패키지를 사용하여 Android 및 iOS 앱을 로컬에서 빌드하거나 수동으로 PhoneGap Build에 업로드할 수 있습니다.

하이브리드 앱 패키지를 빌드하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)에서 앱을 여십시오. 왼쪽 탐색 창에서 **Mobile App**을 클릭하십시오.
2. **Permissions** 아래에서 **Push Notifications** 권한이 선택되어 있는지 확인하십시오.
3. **Publish for Mobile App Stores**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step1.png" class="no-border" >}}

4. **Do it yourself**를 선택한 다음 **Download Customizable Package**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step2.png" class="no-border" >}}

    방금 다운로드한 패키지는 특정 Mendix 앱을 위한 사용자 지정 가능한 하이브리드 앱 패키지입니다. 이를 변경하고 새 PhoneGap Build 패키지를 빌드한 다음 PhoneGap Build에 업로드하여 바이너리(Android용 *.apk* 및 iOS용 *.ipa*)를 생성할 수 있습니다. 방금 다운로드한 항목의 구조를 더 잘 이해하려면 [Mendix PhoneGap Build App Template 문서](https://github.com/mendix/hybrid-app-template#folder-structure)의 **Folder Structure** 섹션을 참조하십시오.

5. 하이브리드 앱 패키지의 압축을 해제하십시오.
6. 이전에 다운로드한 *google-services.json* 및 *GoogleService-Info.plist* 구성 파일을 `config` 폴더에 복사하여 붙여넣으십시오.
    {{% alert color="warning" %}} iOS 디바이스에 푸시 알림을 보내기 위해 FCM을 사용할 계획인 경우에만 *GoogleService-Info.plist* 구성 파일을 붙여넣으십시오. iOS 디바이스에 푸시 알림을 보내기 위해 APNS를 계속 사용할 계획이라면 *GoogleService-Info.plist* 구성 파일을 붙여넣지 마십시오.{{% /alert %}}
7. *Mendix PhoneGap Build App Template* 문서의 [Through Uploading to PhoneGap Build](https://github.com/mendix/hybrid-app-template#through-uploading-to-phonegap-build) 섹션의 지침을 따라 PhoneGap Build 패키지를 생성하십시오. 이 문서의 **Prerequisites** 및 **Build on PhoneGap** 섹션도 반드시 읽으십시오. 단계 개요는 다음과 같습니다:<br />
    1. 최신 안정 버전의 [Node.js](https://nodejs.org/en/download/)를 설치하십시오.<br />
    1. 압축 해제한 하이브리드 앱 패키지 폴더에서 `npm install`을 실행하십시오.<br />
    1. 같은 폴더에서 `npm run package`를 실행하십시오.<br />
8. PhoneGap Build 패키지에서 APK 또는 iOS 패키지를 생성하십시오. 새 PhoneGap Build 패키지(**dist** 폴더에 있음)를 PhoneGap에 업로드하여 APK 또는 iOS 바이너리를 빌드할 수 있습니다.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/build.phonegap.com.png" class="no-border" >}}

## 추가 읽기

* [푸시 알림 구현](/howto8/mobile/implementation-guide/)
* [모바일 앱 스토어에 Mendix 하이브리드 모바일 앱 게시](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
