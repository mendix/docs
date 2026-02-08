---
title: "C# 개발자를 위한 Extensibility API"
linktitle: "C# Extensibility API"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/
description: "C# Extensibility API를 사용하면 C#으로 개발된 사용자 정의 Studio Pro 확장이 Studio Pro의 일부 내부 서비스와 상호 작용할 수 있습니다."
weight: 10
aliases:
    - /apidocs-mxsdk/apidocs/extensibility-api/
---

{{% alert color="warning" %}}
이 기능은 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하세요.
{{% /alert %}}

{{% alert color="info" %}}
Extensibility API의 새 릴리스에 대한 정보는 [Extensibility: C# API 릴리스 노트](/releasenotes/studio-pro/csharp-extensibility-api/)를 참조하세요.
{{% /alert %}}

## 소개

확장은 여기에 설명된 C#로 작성하거나, Web API를 사용하여 작성할 수 있습니다 (Web API에 대한 자세한 내용은 [웹 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/)를 참조하세요).

Studio Pro에 사용자 정의 UI를 추가하려면 웹 기술을 사용할 수 있습니다. 웹 기반 UI는 호스팅된 웹 뷰를 통해 Studio Pro에 렌더링되며, API는 UI와 C# 확장 로직 간의 통신을 제공합니다.

## 전제 조건

C# API를 사용하려면 다음이 필요합니다:

* Mendix 플랫폼에 대한 기본적인 이해
* Mendix 모델에 대한 어느 정도의 이해
* C# 개발 경험

 확장은 [C#](https://docs.microsoft.com/en-us/dotnet/)을 사용하여 개발되며 `.dll` 어셈블리 파일로 컴파일됩니다.

## 시작하기

확장을 시작하는 방법에 대한 자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/)를 참조하세요.

일부 예제와 [API 레퍼런스 문서](https://github.com/mendix/ExtensionAPI-Samples)도 검토할 수 있습니다.

## How-to

시작을 위한 How-to 목록입니다:

* [C#를 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/)
* [C#를 사용하여 도킹 가능한 패널 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-dockable-pane-extension/)
* [C#를 사용하여 컨텍스트 메뉴 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-context-menu/)
* [C#를 사용하여 모달 대화 상자에 호스팅된 웹 뷰 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-modal-web-view/)
* [C#를 사용하여 계산용 Microflow 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflows-for-calculations/)
* [C#를 사용하여 Model API와 상호 작용하기](/apidocs-mxsdk/apidocs/interact-with-model-api-11/)
* [C#를 사용하여 Microflow 만들고 Activity 추가하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflow-add-activities/)
* [C#를 사용하여 메뉴와 하위 메뉴 추가하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/add-menu/)
* [C#를 사용하여 할 일 예제 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/build-todo-example-extension/)
* [C# 확장 내보내기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/export-an-extension/)

## 고급 API

다음은 고급 사용자를 위한 API입니다:

* [C#를 사용하여 Untyped Model Access API 사용하기](/apidocs-mxsdk/apidocs/untyped-model-access-api-11/)

## 레퍼런스 가이드

추가 Extensibility API 주제를 탐색하려면 다음 레퍼런스 가이드를 검토하세요:

* [Extension Points](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/extension-points/)
* [Extensibility Services](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/services/)
* [Extensibility Web Views](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/web-views/)
