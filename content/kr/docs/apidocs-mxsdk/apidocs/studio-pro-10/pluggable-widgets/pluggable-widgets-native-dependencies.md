---
title: "네이티브 종속성 선언"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies-10/
description: Mx10에서 플러그형 위젯 및 JavaScript 액션을 위한 네이티브 종속성을 이해하기 위한 가이드입니다.
weight: 40
---

## 소개

플러그형 위젯과 JavaScript 액션을 개발할 때 JavaScript 생태계의 기존 모듈과 라이브러리를 재사용하는 것이 필수적입니다. Mendix는 위젯 개발자가 플러그형 위젯을 생성, 개발 및 출시할 수 있도록 [Pluggable Widgets Tools](https://github.com/mendix/widgets-resources/tree/master/packages/tools/pluggable-widgets-tools)를 제공합니다. 이러한 도구는 타사 종속성을 플러그형 위젯 코드에 연결하고 포함하는 힘든 작업을 수행합니다. 또한 이 툴링은 일부 라이브러리의 Android 및 iOS 관련 설정 부분에 대한 정보를 Mendix 네이티브 모바일 앱에 제공합니다. 플러그형 위젯이 Mendix 네이티브 생태계에 네이티브 종속성을 전달하는 방법에 대해 자세히 알아보려면 계속 읽어보십시오.

플러그형 위젯을 위한 이러한 툴링이 존재하지만, `react-native` Android 및 iOS 관련 설정을 대상으로 하는 라이브러리를 사용하려면 JavaScript 액션에 대해 일부 수동 작업을 수행해야 합니다. JavaScript 액션에서 이러한 라이브러리를 사용하려면 이 페이지를 읽어보십시오.

## 선언 파일 {#declaration-file}

선언 파일은 플러그형 위젯 또는 JavaScript 액션에 필요한 특정 설정에 대한 정보가 포함된 *.json* 파일입니다.

파일을 배치하는 위치는 상황에 따라 다릅니다:

* JavaScript 액션의 경우 *.json* 파일에 선언합니다.
* 위젯의 경우 최신 **pluggable-widgets-tools**를 사용하는 경우 선언 파일을 자동으로 수집하고 생성합니다.
* 위젯을 직접 만드는 경우 *.mpk*에 나열된 위젯 이름과 동일한 이름을 가진 *.json* 파일을 만드십시오.

### 명명 규칙

플러그형 위젯의 경우 선언 파일 이름은 [위젯 정의 XML 파일](/apidocs-mxsdk/apidocs/pluggable-widgets-10/#widget-definition)의 이름을 따야 하지만 *.json* 확장자를 사용해야 합니다.

JavaScript 액션의 경우 선언 파일 이름은 액션의 `.js` 파일 이름을 따야 하지만 *.json* 확장자를 사용해야 합니다.

### 파일 형식

이 파일은 다음 형식을 사용하는 하나의 객체로 된 *.json* 파일입니다:

```json
{
    "nativeDependencies": {
        "dependency-name": "1.2.3"
    }
}
```

이 파일에는 `nativeDependencies` 키만 허용됩니다. 이 필드는 이 파일이 속한 플러그형 위젯 또는 JavaScript 액션의 네이티브 종속성을 선언하는 데 사용됩니다.

## 네이티브 종속성(Native Dependencies)

플러그형 위젯 또는 JavaScript 액션에 필요한 네이티브 종속성을 선언하기 위해 `nativeDependencies` 키 아래의 JSON 객체에 항목이 추가됩니다. 다음 예제는 해당 버전과 함께 두 개의 종속성을 지정합니다:

```json
{
    "nativeDependencies": {
        "@react-native-community/netinfo": "5.9.10",
        "react-native-image-picker": "3.1.4"
    }
}
```

위에서 볼 수 있듯이 항목의 키는 종속성의 이름이고 값은 필요한 종속성의 버전입니다. `semver`는 지원되지 않으며 정확한 버전을 지정해야 합니다.

## 충돌 확인(Conflict Checking)

하나의 앱에 동일한 네이티브 종속성의 서로 다른 버전을 포함하는 것은 불가능합니다. 따라서 앱의 서로 다른 컴포넌트가 동일한 네이티브 종속성을 사용하는 경우 Studio Pro는 충돌 확인을 시작합니다. 서로 다른 컴포넌트에서 요구하는 버전 간에 불일치가 없는지 확인합니다. 버전 충돌이 감지되면 보고됩니다.

## 추가 정보

* [플러그형 위젯 API 문서](/apidocs-mxsdk/apidocs/pluggable-widgets-10/)
* [네이티브 모바일용 JavaScript 액션 빌드](/howto/extensibility/create-native-javascript-action/)
