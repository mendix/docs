---
title: "Request Handler"
url: /refguide10/request-handlers/
description: "런타임에서 사용할 수 있는 다양한 Request Handler를 설명합니다."
weight: 45
---

## 소개

Mendix Client와 Runtime Server 간의 통신은 다양한 Request Handler를 통해 이루어집니다.

## 표준 Request Handler

다음 표준 Request Handler가 사용됩니다:

| Name | Endpoint | Description |
| ---- | -------- | ----------- |
| Resources | `/` | `index.html`과 같은 정적 파일을 제공합니다. |
| XAS | `/xas` | 클라이언트/런타임 통신을 처리합니다. 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide10/communication-patterns/)을 참조하십시오. |
| File | `/file` | Mendix Client에서의 파일 업로드 및 다운로드를 처리합니다. |
| Page/Microflow URLs | `/p` (기본값) | URL이 구성된 페이지 열기 및 Microflow 실행을 처리합니다. 엔드포인트는 [앱 설정](/refguide10/app-settings/#url-prefix)에서 구성할 수 있습니다. |
| PWA Manifest | `/manifest.webmanifest` | [PWA 애플리케이션](/refguide10/mobile/introduction-to-mobile-technologies/progressive-web-app/)에 필요한 매니페스트 파일을 제공합니다. |
| Mx Dev Tools | `/mxdevtools` | 클라이언트 로그 및 Nanoflow 디버깅을 처리하는 WebSocket 엔드포인트입니다. 개발 중에만 활성화됩니다. |

## 사용자 지정 Request Handler

`com.mendix.core.Core#addRequestHandler({Request Handler 이름})` API 호출을 사용하여 사용자 지정 Request Handler를 추가할 수 있습니다.
