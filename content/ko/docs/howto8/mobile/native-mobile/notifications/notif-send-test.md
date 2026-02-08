---
title: "첫 번째 테스트 푸시 알림 보내기"
url: /howto8/mobile/notif-send-test/
weight: 64
description: 푸시 알림을 테스트하기 위한 튜토리얼입니다.
---

## 소개

[Push Notifications 모듈을 구성](/howto8/mobile/notif-config-push/)하고 [네이티브 앱을 빌드](/howto8/mobile/notif-build-native/)한 후 이제 첫 번째 테스트 푸시 알림을 보낼 차례입니다.

## 테스트 알림 보내기

첫 번째 테스트 알림을 보내려면 다음을 수행하십시오:

1. 웹 애플리케이션에 로그인하십시오. 
1. 이전에 내비게이션에 추가한 푸시 알림 관리 페이지로 이동하십시오.
1. **Devices** 탭으로 이동하십시오.
1. 테스트 디바이스를 선택하십시오.
1. **New Message**를 클릭하십시오(또는 테스트 디바이스를 더블 클릭하십시오).
1. 알림에 원하는 **Title**/**Body**를 입력하십시오.
1. **Action name**을 *Example*로 설정하십시오.
1. 나머지 필드는 기본값으로 두십시오.
1. **Send**를 클릭하십시오.

이제 디바이스에서 알림을 받아야 합니다. 애플리케이션이 이미 열려 있는 경우 액션은 메시지를 로그(로그 노드 **ExampleNotification**)에 기록하고 앱에서 대화 상자를 표시합니다.

앱이 열려 있지 않거나(또는 백그라운드에서 실행 중인 경우) Android 또는 iOS 디바이스의 일반적인 위치에 알림을 전달하고 표시합니다. 알림을 클릭하면 인앱 액션이 트리거됩니다.

축하합니다, 첫 번째 푸시 알림을 보냈습니다! 

메시지를 받지 못한 경우 애플리케이션 로그를 확인하여 메시지가 성공적으로 전송되었는지 확인하십시오. 가장 일반적인 문제에 대한 해결 방법은 아래 문제 해결 섹션을 참조하십시오.

## 알림 문제 해결 {#troubleshoot}

| 문제 | 원인 | 해결 방법 |
|-----|----|-----|
| 메시지 전송 시 **SenderId mismatch** 오류 또는 **403: Forbidden** 발생. | 네이티브 모바일 앱이 Mendix 애플리케이션 내에서 디바이스를 등록했지만 Firebase에는 등록하지 않았습니다. | *푸시 알림이 활성화된 Native App 빌드*의 [Native App 빌드](/howto8/mobile/notif-build-native/#build-native-app) 섹션을 따르고 *google-services.json* 파일을 추가했는지 확인하십시오. |
| 메시지 전송 시 **Request contains an invalid argument** 오류 또는 **400: Bad Request** 발생. | **Project ID**가 개인 키 *json* 파일의 **project_id**와 일치하지 않습니다. | 올바른 파일을 업로드하거나 Firebase에서 [새 개인 키를 생성](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account)하고 업로드하십시오. |
| JavaAction 'DecryptString'에서 Mendix Runtime 예외: **Key should not be empty**. | 이 모듈은 키가 필요한 **Encryption** 모듈에 종속됩니다. | **Encryption** 모듈에서 정확히 32자의 키로 상수 **EncryptionKey**를 설정하십시오. |
| 메시지 전송 오류: **Error reading credentials from stream, 'type' field not specified. at PushNotifications.SendFCMMessages (JavaAction : 'GetFCMAccessToken')**. | 잘못된 개인 키 파일이 업로드되었습니다. | 올바른 파일을 업로드하거나 Firebase에서 [새 개인 키를 생성](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account)하고 업로드하십시오. |
