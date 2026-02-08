---
title: "iOS용 Mendix Feedback 위젯 구성"
linktitle: "iOS Mendix Feedback 위젯 구성"
url: /howto8/mobile/feedback-widget-ios/
weight: 20
description: "피드백 위젯의 콘텐츠를 렌더링하기 위한 iOS 보안 설정 구성 방법"
---

## 소개

iOS용 Mendix 하이브리드 모바일 앱을 처음 시작하면 [Mendix Feedback](/appstore/modules/mendix-feedback/) 위젯의 피드백 버튼이 작동하지 않습니다. 이는 애플리케이션이 `file:///` URL에서만 요청하고 콘텐츠를 로드할 수 있는 iOS 보안 정책 때문입니다. 피드백 위젯의 콘텐츠가 `https://sprintr.home.mendix.com`에 호스팅되어 있으므로 위젯이 작동하지 않습니다.

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* **Apps**의 [피드백 관리](/developerportal/app-insights/feedback/) 기능에 대한 접근을 허용하도록 iOS 하이브리드 모바일 앱을 구성합니다.

## 사전 요구 사항

* Mendix Portal 및 **Mobile App** 페이지(**DEPLOY**를 통해 접근 가능)의 **Custom Cordova configuration** 섹션에 대한 접근 권한이 있는지 확인하십시오
* 또는 사용 가능한 *config.xml* 파일에서 직접 변경할 수 있습니다

## config.xml 파일 확장

피드백 버튼이 정상적으로 작동하려면 *config.xml* 파일의 `<widget>` 요소 내에 두 줄만 추가하면 됩니다:

```xml
<!-- Don't block any requests -->
<access origin="*" />
<!-- Allow links to sprintr.home.mendix.com -->
<allow-navigation href="https://sprintr.home.mendix.com/*" />
```

이제 앱을 빌드하면 올바르게 렌더링된 피드백 위젯을 볼 수 있습니다! 

## 추가 읽기

* [피드백 관리](/developerportal/app-insights/feedback/)
