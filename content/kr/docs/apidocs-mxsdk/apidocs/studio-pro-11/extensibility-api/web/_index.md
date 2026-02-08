---
title: "웹 개발자를 위한 Extensibility API"
linktitle: "웹 Extensibility API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/
description: "웹 Extensibility API를 사용하면 JavaScript로 개발된 사용자 지정 Studio Pro 11 확장 프로그램이 Studio Pro의 일부 내부 서비스와 상호 작용할 수 있습니다."
weight: 20
---

{{% alert color="warning" %}} 이 기능은 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오. {{% /alert %}}

{{% alert color="info" %}}Extensibility API의 새 릴리스에 대한 정보는 [Extensibility: Web API 릴리스 노트](/releasenotes/studio-pro/web-extensibility-api/)를 참조하십시오.
{{% /alert %}}

## 소개

확장 프로그램은 여기에 설명된 대로 TypeScript 또는 기타 웹 언어로 작성하거나 [C# 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/)에 문서화된 C# API를 사용하여 작성할 수 있습니다.

{{% alert color="info" %}}
확장 프로그램 개발은 `--enable-extension-development` 기능 플래그가 있어야만 가능합니다.
{{% /alert %}}

웹 API에 대한 자세한 내용은 [Mendix Studio Pro Web Extensibility API 참조 문서](http://apidocs.rnd.mendix.com/11/extensions-api/index.html)를 참조하십시오.

## 전제 조건

Web Extensibility API를 사용하려면 다음이 필요합니다:

* Mendix 플랫폼에 대한 기본적인 이해
* Mendix 모델에 대한 어느 정도의 이해
* 약간의 TypeScript 개발 경험

## 시작하기

확장 프로그램을 시작하는 방법에 대한 자세한 내용은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/)를 참조하십시오.

## 사용 방법(How-tos)

시작하기 위한 사용 방법 목록은 다음과 같습니다:

* [메뉴 작동 방식](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/)
* [도킹 가능한 창(Dockable Pane)을 만드는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/)
* [로컬 앱 파일과 상호 작용하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/local-app-files-api/)
* [메뉴를 만드는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/)
* [메시지 상자를 표시하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/)
* [Mendix 모델에 액세스하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/)
* [탭을 여는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/tab-api/)
* [팝업 알림을 표시하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/)
* [사용자 기본 설정을 보는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/)
* [모달 대화 상자를 표시하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/)
* [문서를 여는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/)
* [활성 뷰 간에 정보를 교환하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/)
* [버전 관리 정보를 표시하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/)
* [새로운 문서 유형을 도입하는 방법](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/)
