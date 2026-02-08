---
title: "C# 개발자를 위한 Extensibility API"
linktitle: "C# Extensibility API"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/
description: "C# Extensibility API를 사용하면 C#으로 개발된 사용자 지정 Studio Pro 확장 프로그램이 Studio Pro의 일부 내부 서비스와 상호 작용할 수 있습니다."
weight: 10
aliases:
    - /apidocs-mxsdk/apidocs/extensibility-api/
---

{{% alert color="warning" %}}
이 기능은 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
Extensibility API의 새 릴리스에 대한 정보는 [Extensibility: C# API 릴리스 노트](/releasenotes/studio-pro/csharp-extensibility-api/)를 참조하십시오.
{{% /alert %}}

## 소개

확장 프로그램은 여기에 설명된 대로 C#으로 작성하거나 웹 API를 사용하여 작성할 수 있습니다(웹 API에 대한 자세한 내용은 [웹 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/) 참조).

Studio Pro에 사용자 지정 UI를 추가하려면 웹 기술을 사용할 수 있습니다. 웹 기반 UI는 호스팅된 웹 뷰를 통해 Studio Pro에서 렌더링되며 API는 UI와 C# 확장 로직 간의 통신을 제공합니다.

## 전제 조건

C# API를 사용하려면 다음이 필요합니다:

* Mendix 플랫폼에 대한 기본적인 이해
* Mendix 모델에 대한 어느 정도의 이해
* 약간의 C# 개발 경험

확장 프로그램은 [C#](https://docs.microsoft.com/en-us/dotnet/)을 사용하여 개발되며 `.dll` 어셈블리 파일로 컴파일됩니다.

## 시작하기

확장 프로그램을 시작하는 방법에 대한 자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/)를 참조하십시오.

또한 몇 가지 예제와 [API 참조 문서](https://github.com/mendix/ExtensionAPI-Samples)를 검토할 수 있습니다.

## 사용 방법(How-tos)

시작하기 위한 사용 방법 목록은 다음과 같습니다:

* [메뉴 확장 프로그램을 만드는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/)
* [도킹 가능한 창(Dockable Pane) 확장 프로그램을 만드는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-dockable-pane-extension/)
* [컨텍스트 메뉴를 만드는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-context-menu/)
* [모달 대화 상자 내에 호스팅되는 웹 뷰를 만드는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-modal-web-view/)
* [계산을 위한 마이크로플로우를 만드는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflows-for-calculations/)
* [모델 API와 상호 작용하는 방법](/apidocs-mxsdk/apidocs/interact-with-model-api-11/)
* [마이크로플로우를 생성하고 활동을 추가하는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflow-add-activities/)
* [메뉴 및 하위 메뉴를 추가하는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/add-menu/)
* [To-do 예제 확장 프로그램을 빌드하는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/build-todo-example-extension/)
* [C# 확장 프로그램을 내보내는 방법](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/export-an-extension/)

## 고급 API

고급 사용자를 위한 API는 다음과 같습니다:

* [C#을 사용한 Untyped Model Access API 사용](/apidocs-mxsdk/apidocs/untyped-model-access-api-11/)

## 참조 가이드

추가 Extensibility API 주제를 살펴보려면 다음 참조 가이드를 검토하십시오:

* [확장 포인트(Extension Points)](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/extension-points/)
* [확장성 서비스(Extensibility Services)](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/services/)
* [확장성 웹 뷰(Extensibility Web Views)](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/web-views/)
