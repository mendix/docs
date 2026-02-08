---
title: "푸시 알림이 활성화된 Native App 빌드"
linktitle: "푸시 알림이 활성화된 Native App"
url: /howto8/mobile/notif-build-native/
weight: 60
description: 푸시 알림이 활성화된 네이티브 앱을 빌드하기 위한 튜토리얼입니다.
---

## 소개

푸시 알림을 구현했으므로 이제 Native Mobile 앱을 빌드하고 배포할 차례입니다. iOS 또는 Android 앱을 배포하면 서버가 앱이 설치된 모바일 디바이스에 푸시 알림을 보낼 수 있습니다.

## Native App 빌드 {#build-native-app}

1. Studio Pro 상단 바 내비게이션에서 **App** > **Build Native Mobile App**을 클릭하십시오: </br>
    * 처음으로 네이티브 앱을 빌드하는 경우 [여기](/howto8/mobile/native-build-locally/)에서 지침을 확인하십시오.</br>
1. 빌드 유형(로컬 개발 또는 배포)을 선택한 후 **App capabilities**로 이동하십시오.</br>
1. **Firebase configuration**에서 **Push notifications**를 **On**으로 전환하십시오.</br>
1. 아래로 스크롤하여 Firebase 구성을 업로드하십시오:</br>
    1. Android 빌드용 *google-services.json*.</br>
    1. iOS 빌드용 *GoogleServices-Info.plist*.</br>
1. 구성을 저장하십시오. 이제 빌드할 준비가 되었습니다.

로컬 개발용으로 빌드할 때 Mendix의 Make it Native는 푸시 알림을 지원하지 않는다는 점에 유의하십시오. 푸시 알림을 사용하고 테스트하려면 위에서 설명한 대로 자체 네이티브 앱을 빌드하여 에뮬레이터(Android만 해당) 또는 테스트 디바이스에 배포해야 합니다.

이제 빌드할 수 있으므로 다음 단계는 에뮬레이터 또는 테스트 디바이스에서 앱을 실행하여 [첫 번째 테스트 푸시 알림 보내기](/howto8/mobile/notif-send-test/)를 시도하는 것입니다. 
