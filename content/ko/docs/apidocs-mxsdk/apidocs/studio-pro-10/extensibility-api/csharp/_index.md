---
title: "C# 개발자를 위한 Extensibility API"
linktitle: "C# Extensibility API"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/
description: "C# Extensibility API를 사용하면 C#으로 개발된 사용자 정의 Studio Pro 확장 기능이 Studio Pro의 일부 내부 서비스와 상호 작용할 수 있습니다."
weight: 10
aliases:
    - /apidocs-mxsdk/apidocs/extensibility-api/
---

{{% alert color="warning" %}}
이 기능은 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
Extensibility API의 새로운 릴리스에 대한 정보는 [Extensibility: C# API 릴리스 노트](/releasenotes/studio-pro/csharp-extensibility-api/)를 참조하십시오.
{{% /alert %}}

## 소개

확장 기능은 여기에서 설명하는 C#으로 작성하거나, 웹 API를 사용하여 작성할 수 있습니다(웹 API에 대한 자세한 내용은 [웹 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-10/)를 참조하십시오).

Studio Pro에 사용자 정의 UI를 추가하려면 웹 기술을 사용할 수 있습니다. 웹 기반 UI는 호스팅된 웹 뷰를 통해 Studio Pro에서 렌더링되며, API는 UI와 C# 확장 로직 간의 통신을 제공합니다.

## 전제 조건

C# API를 사용하려면 다음이 필요합니다:

* Mendix 플랫폼에 대한 기본적인 이해
* Mendix 모델에 대한 약간의 이해
* C# 개발 경험

확장 기능은 [C#](https://docs.microsoft.com/en-us/dotnet/)을 사용하여 개발되며 `.dll` 어셈블리 파일로 컴파일됩니다.

## 시작하기

확장 기능 시작 방법에 대한 자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/get-started/)를 참조하십시오.

몇 가지 예제와 [API 참조 문서](https://github.com/mendix/ExtensionAPI-Samples)도 검토할 수 있습니다.

## 사용 방법(How-to)

다음은 시작할 수 있는 사용 방법 목록입니다:

* [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)
* [C#을 사용하여 도킹 가능한 창 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-dockable-pane-extension/)
* [C#을 사용하여 컨텍스트 메뉴 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-context-menu/)
* [C#을 사용하여 모달 대화 상자에 호스팅된 웹 뷰 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-modal-web-view/)
* [C#을 사용하여 계산용 Microflow 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflows-for-calculations/)

## 고급 API

아래는 고급 사용자를 위한 API입니다:

* [C#을 사용하여 비정형 모델 접근 API 사용하기](/apidocs-mxsdk/apidocs/untyped-model-access-api-10/)

## 참조 가이드

다음 참조 가이드를 검토하여 추가 Extensibility API 주제를 살펴보십시오:

* [Extension Points](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/extension-points/)
* [Extensibility 서비스](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/services/)
* [Extensibility 웹 뷰](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/web-views/)
