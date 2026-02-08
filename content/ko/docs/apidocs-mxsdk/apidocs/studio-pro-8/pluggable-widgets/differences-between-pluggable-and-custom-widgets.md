---
title: "플러거블 위젯과 커스텀 위젯 비교"
linktitle: "플러거블 위젯과 커스텀 위젯 비교"
url: /apidocs-mxsdk/apidocs/differences-between-pluggable-and-custom-widgets/
description: This document explains the differences between pluggable and custom widgets.
---

## 소개

플러거블 위젯(Pluggable Widget)은 [커스텀 위젯(Custom Widget)](/howto8/extensibility/widget-development/)의 후속 버전입니다. 플러거블 위젯은 최신 React 프레임워크를 기반으로 하며, 클라이언트에서 더 나은 API에 접근할 수 있고, Studio Pro에서 더 고급 속성을 사용할 수 있습니다. 따라서 플러거블 위젯을 사용하면 기존 프런트엔드 라이브러리, 도구 및 자체 전문 지식을 더 쉽게 구현할 수 있습니다. 가능하면 커스텀 위젯 대신 플러거블 위젯을 사용해야 합니다.

## 플러거블 위젯과 커스텀 위젯의 차이점

| 개념 | 플러거블 위젯(Pluggable Widget) | 커스텀 위젯(Custom Widget) |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 프레임워크 | [React](/apidocs-mxsdk/apidocs/pluggable-widgets/#client-component) | [Dojo](/howto8/extensibility/widget-development/#dojo) |
| 데이터 접근 | 선언적, props 기반 | 명령적, 콜백 기반 |
| 데이터 업데이트 | [props로 업데이트 수신](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/#dynamic-value) | [Subscribe](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.subscribe) |
| API | [플러거블 위젯 API](/apidocs-mxsdk/apidocs/pluggable-widgets/) | [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/) |
| 플랫폼 | [웹 및 네이티브](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-description) | 웹 |

| 기능 | 플러거블 위젯(Pluggable Widget) | 커스텀 위젯(Custom Widget) |
| ----------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| 속성(Attribute) 데이터 접근 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#attribute) | 예 |
| 연관관계, 마이크로플로우(Microflow) 또는 나노플로우(Nanoflow)를 통한 추가 데이터 조회 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#datasource) ([위젯(Widget)](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#widgets) 전용) | [예](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.get) |
| 텍스트 템플릿(Template Text); 데이터와 번역 가능한 텍스트 결합 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#texttemplate) | 아니오 |
| 표현식(Expression); 데이터와 결합된 로직 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#expression) | 아니오 |
| 파일 지원; 다운로드 및 열기 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#file) | [예](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| 파일 지원; 업로드 | 아니오 | [예](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| 조건부 표시(Visibility) 사용 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#visibility) | 아니오 |
| 조건부 편집 가능성(Editability) 사용 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#editability) | 아니오 |
| 글리프 아이콘 사용 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#icon) | 아니오 |
| 입력 레이블 표시 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#label) | 아니오 |
| 속성 변경 시 액션 트리거 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#attribute) | 아니오 |
| 위젯이 다른 위젯을 포함할 수 있음 | [예](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#widgets) | 아니오 |
| 위젯이 새 객체를 생성할 수 있음 | 아니오 | [예](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.create) |

## 더 읽기

* [플러거블 위젯(Pluggable Widgets) API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
