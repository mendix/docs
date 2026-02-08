---
title: "확장성: C# API 릴리스 노트"
linktitle: "확장성: C# API"
url: /releasenotes/studio-pro/csharp-extensibility-api/
weight: 45
numberless_headings: true
---

이 릴리스 노트는 [C# 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/)의 변경 사항을 다룹니다.

## Version 10.15.1

* JSON 직렬화 기본값이 변경되어 웹 측에 호환되지 않는 JSON이 도착하는 `IWebView.PostMessage` API의 breaking change를 되돌렸습니다.

## Version 10.15.0

* Untyped Model Access API가 도입되었습니다. 자세한 내용과 실용적인 예제는 [Untyped Model Access API 사용 방법](/apidocs-mxsdk/apidocs/untyped-model-access-api-10/)을 참조하세요.
* Studio Pro의 UI에 현재 설정된 언어를 제공하기 위해 `IConfiguration`에 `CurrentLanguage`를 추가했습니다.
  
## Version 10.14.0

* Studio Pro에서 활성 문서가 변경될 때 확장에 알림을 보낼 수 있는 `ActiveDocumentChanged` 이벤트를 추가했습니다. 문서가 아직 Extensibility API에서 지원되지 않는 경우 이름과 유형만 반환됩니다.
* 리스트 및 객체에 대한 여러 Microflow Activity 지원이 추가되었습니다.
* 이러한 새 Activity의 생성을 용이하게 하는 여러 함수를 포함하는 `IMicroflowActivitiesService`가 도입되었습니다.
  
## Version 10.13.1

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.13.0

* Activity의 오류 처리가 앱 배포 후 손실되는 버그를 수정했습니다.
* 배포 패키지 생성 중 확장이 다시 로드되는 버그를 수정했습니다.

## Version 10.12.5

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다. 

## Version 10.12.4

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.12.3

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.12.2

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.12.1

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.12.0

* Extensibility API의 첫 번째 [베타](/releasenotes/release-status/) 릴리스입니다.
