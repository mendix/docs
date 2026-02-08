---
title: "네이티브 종속성 선언"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies-9/
description: A guide for understanding native dependencies for pluggable widgets and JavaScript actions in Mendix 9.
weight: 40
---

## 소개

플러거블 위젯(Pluggable Widget)과 JavaScript 액션을 개발할 때 JavaScript 생태계의 기존 모듈과 라이브러리를 재사용하는 것은 필수적입니다. Mendix는 위젯 개발자에게 [Pluggable Widgets Tools](https://github.com/mendix/widgets-resources/tree/master/packages/tools/pluggable-widgets-tools)를 제공하여 플러거블 위젯을 생성, 개발 및 배포할 수 있도록 돕습니다. 이 도구는 서드파티 종속성을 플러거블 위젯 코드에 연결하고 포함하는 무거운 작업을 수행합니다. 또한 이 도구는 일부 라이브러리의 Android 및 iOS 관련 설정 부분에 대한 정보를 Mendix 네이티브 모바일 앱에 제공합니다. 플러거블 위젯이 Mendix 네이티브 생태계에 네이티브 종속성을 전달하는 방법에 대해 자세히 알아보려면 계속 읽어 주세요.

이 도구는 플러거블 위젯에 대해 존재하지만, `react-native` Android 및 iOS 관련 설정을 대상으로 하는 라이브러리를 사용하기 위해서는 JavaScript 액션에 대해 일부 수동 작업이 필요합니다. 이러한 라이브러리를 JavaScript 액션에서 사용하려면 이 페이지를 참조하세요.

## 선언 파일 {#declaration-file}

선언 파일은 플러거블 위젯이나 JavaScript 액션에 필요한 특정 설정에 대한 정보를 포함하는 *.json* 파일입니다.

파일을 배치하는 위치는 상황에 따라 다릅니다:

* JavaScript 액션의 경우, *.json* 파일에 선언하세요
* 위젯의 경우, 최신 **pluggable-widgets-tools**를 사용하면 선언 파일이 자동으로 수집 및 생성됩니다
* 직접 위젯을 만드는 경우, *.mpk*에 나열된 위젯과 동일한 이름의 *.json* 파일을 생성하세요

### 명명 규칙

플러거블 위젯의 경우, 선언 파일은 [위젯 정의 XML 파일](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-definition)의 이름을 따르되 *.json* 확장자를 사용해야 합니다.

JavaScript 액션의 경우, 선언 파일은 액션의 `.js` 파일 이름을 따르되 *.json* 확장자를 사용해야 합니다.

### 파일 형식

이 파일은 다음 형식을 사용하는 하나의 객체로 구성된 *.json* 파일입니다:

```json
{
    "nativeDependencies": {
        "dependency-name": "1.2.3"
    }
}
```

해당 파일에서는 `nativeDependencies` 키만 허용됩니다. 이 필드는 해당 파일이 속하는 플러거블 위젯 또는 JavaScript 액션의 네이티브 종속성을 선언하는 데 사용됩니다.

## 네이티브 종속성

플러거블 위젯이나 JavaScript 액션에 필요한 네이티브 종속성을 선언하려면 `nativeDependencies` 키 아래의 JSON 객체에 항목을 추가하세요. 다음 예제는 해당 버전과 함께 두 개의 종속성을 지정합니다:

```json
{
    "nativeDependencies": {
        "@react-native-community/netinfo": "5.9.10",
        "react-native-image-picker": "3.1.4"
    }
}
```

위에서 볼 수 있듯이, 항목의 키는 종속성의 이름이고 값은 필요한 종속성의 버전입니다. `semver`는 지원되지 않으며 정확한 버전을 지정해야 합니다.

## 충돌 검사

하나의 앱에 동일한 네이티브 종속성의 서로 다른 버전을 포함할 수 없습니다. 따라서 앱의 여러 구성 요소가 동일한 네이티브 종속성을 사용할 때 Studio Pro는 충돌 검사를 시작합니다. 서로 다른 구성 요소가 요구하는 버전 간에 불일치가 없는지 확인합니다. 버전 충돌이 감지되면 보고됩니다.

## 더 읽기

* [Mendix 9](/apidocs-mxsdk/apidocs/pluggable-parent-9/) 플러거블 위젯 API 문서
