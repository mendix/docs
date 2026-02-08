---
title: "Studio Pro 8 호환"
url: /releasenotes/mobile/nt-studio-pro-8-parent/
weight: 80
description: "Studio Pro 8 호환 Native Template 릴리스 노트."
---

Studio Pro 8용으로 현재 활발히 개발 중인 Native Template 버전은 다음과 같습니다:

* Native Template [5.2](/releasenotes/mobile/nt-5.2-rn/) 버전은 Studio Pro [8.18.9](/releasenotes/studio-pro/8.18/#8189) 이상으로 빌드된 앱과 호환됩니다.
* Native Template [5.1](/releasenotes/mobile/nt-5.1-rn/) 버전은 Studio Pro [8.15](/releasenotes/studio-pro/8.15/)-[8.18.8](/releasenotes/studio-pro/8.18/#8188)로 빌드된 앱과 호환됩니다.
* Native Template [5.0](/releasenotes/mobile/nt-5.0-rn/) 버전은 Studio Pro [8.12.1](/releasenotes/studio-pro/8.12/#8121)–[8.14.1](/releasenotes/studio-pro/8.14/)로 빌드된 앱과 호환됩니다. 

{{% alert color="info" %}}
최신 버전의 Native Template 5.2는 Android 11(API 레벨 30)을 대상으로 합니다. 

Android 13(API 레벨 33 이상)을 대상으로 하려면, **build.gradle** 파일에서 `compileSdkVersion`과 `targetSdkVersion`을 33으로 업데이트하고 종속성을 업데이트할 수 있습니다([이 블로그](https://www.mendix.com/blog/update-needed-for-android-native-mobile-apps/)의 *Build a new version of your native mobile app* 섹션 참조). 
{{% /alert %}}

{{% alert color="warning" %}}
Native Template [5.0](/releasenotes/mobile/nt-5.0-rn/) 및 [5.1](/releasenotes/mobile/nt-5.1-rn/) 버전은 더 이상 업데이트를 받지 않습니다. 또한, Native Template은 8.18.9 미만 버전에서는 작동하지 않습니다. 

최신 Studio Pro [8.18.x](/releasenotes/studio-pro/8.18/) 패치 릴리스와 호환되는 Native Template 버전을 사용하세요.
{{% /alert %}}
