---
title: "확장성: Web API 릴리스 노트"
linktitle: "확장성: Web API"
url: /releasenotes/studio-pro/web-extensibility-api/
weight: 45
numberless_headings: true
---

이 릴리스 노트는 [웹 개발자를 위한 Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/)의 변경 사항을 다룹니다.

## Version 11.7.0

* [Element Selector](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/) API에서 등록된 이름을 사용하여 **Custom Blob** 문서를 선택하는 기능을 추가했습니다.
* Element Selector API 사용 시 선택기 대화 상자에서 **New** 버튼을 사용하면 오류가 발생하는 문제를 수정했습니다. 해당 버튼은 제거되었습니다.

## Version 11.6.0

* Web Extensibility API에 호환성을 깨는 변경(breaking change)이 도입되었습니다. 메뉴는 더 이상 command를 지원하지 않으며, 대신 사용자가 직접 action을 정의할 수 있습니다. 이 변경 사항은 Studio Pro 11.5에서 11.6으로 업그레이드하는 확장 개발자에게 영향을 미칩니다. 최신 버전에 맞게 코드를 안전하게 변환하는 방법은 [마이그레이션 가이드](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/)를 참조하세요.
* 등록된 Custom Blob 문서를 Java Action의 매개변수로 전달할 수 있는 기능이 추가되었습니다. 자세한 내용은 [새 문서 유형을 해당 편집기와 함께 등록](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/)을 참조하세요.

## Version 11.5.0

* 이제 **View** > **Extensions**를 클릭하여 애플리케이션의 모든 확장을 확인할 수 있습니다.
* `studioPro.ui.elementSelectors` 아래에 새로운 Document Selector API가 도입되어 사용자가 프로젝트 구조에서 문서 또는 Entity를 선택할 수 있습니다. 자세한 내용은 [Element Selector API 사용하기](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/)를 참조하세요.

## Version 11.4.0

* `studioPro.ui.dialogs.showProgressDialog(<title>, <steps>)` 아래에 새로운 Progress Dialog API가 도입되었으며, 순차적으로 작업을 수행하는 일련의 단계가 포함된 모달을 엽니다. 자세한 내용은 *Web API를 사용하여 모달 대화 상자 열기*의 [진행 대화 상자 표시](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/#process-dialog) 섹션을 참조하세요.
* `studioPro.app.model.customBlobDocuments` 아래에 새로운 Custom Document Model API가 도입되었습니다. 이를 통해 확장에서 Studio Pro에 새로운 문서 유형을 등록할 수 있으며, 임의의 데이터를 저장하고 App Explorer, New Document 대화 상자 및 기타 UI 요소에 표시할 수 있습니다. 자세한 내용은 [새 문서 유형을 해당 편집기와 함께 등록](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/)을 참조하세요.

## Version 11.3.0

* `studioPro.ui.versionControl` 아래에 새로운 Version Control API가 도입되어 Studio Pro에서 현재 버전 관리 시스템, 브랜치 및 마지막 커밋에 대한 버전 관리 정보를 표시할 수 있습니다. 자세한 내용은 [Web API를 사용하여 버전 관리 정보 표시](/apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/)를 참조하세요.
* --enable-extension-development 기능 플래그를 사용하지 않고도 확장 개발을 활성화할 수 있는 옵션이 [Preferences](/refguide/preferences-dialog/#extension-development) 메뉴에 도입되었습니다. Studio Pro를 재시작해야 합니다.
* `studioPro.ui.messagePassing` 아래에 새로운 Message Passing API가 도입되어 확장 내의 서로 다른 활성 컨텍스트 간에 정보를 전달할 수 있습니다. 이 API는 요청-응답과 메시지 브로드캐스팅의 두 가지 통신 패턴을 지원합니다. 자세한 내용은 [Web API를 사용하여 활성 뷰 간 정보 교환](/apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/)을 참조하세요.

## Version 11.2.0

* Studio Pro API를 초기화하는 새로운 메서드가 포함되었습니다. (이것은 breaking change입니다.) 자세한 내용은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/)를 참조하세요.
* 새로운 command 등록 API가 도입되었습니다.

## Version 11.1.0

* `studioPro.ui.editors` 아래에 새로운 Editors API가 도입되어 활성 문서를 가져오고 문서의 기본 편집기를 열 수 있습니다. 자세한 내용은 [Editor API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/)를 참조하세요.

## Version 11.0.0

* 웹 확장에서 모달 대화 상자를 표시하기 위한 새로운 API가 도입되었습니다. Web Extensibility API의 `studioPro.ui.dialogs` 아래에서 사용할 수 있습니다. 자세한 내용과 실용적인 예제는 [모달 대화 상자 열기](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/)를 참조하세요.
* 웹 확장에서 사용자 기본 설정에 접근하기 위한 새로운 API가 도입되어 사용자가 선택한 테마 기본 설정(라이트 또는 다크)과 언어 설정(예: `en-US`)을 가져옵니다. Web Extensibility API의 `studioPro.ui.preferences` 아래에서 사용할 수 있습니다. 자세한 내용과 실용적인 예제는 [사용자 기본 설정 표시](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/)를 참조하세요.
* 웹 확장에서 알림 팝업을 표시하기 위한 새로운 API가 도입되었습니다. Web Extensibility API의 `studioPro.ui.notifications` 아래에서 사용할 수 있습니다. 자세한 내용과 실용적인 예제는 [팝업 알림 표시](/apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/)를 참조하세요.

## Version 10.24.0

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.23.0

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.22.0

* 사용자에게 표시되는 변경 사항은 없습니다. 단, 확장 패키지 버전은 Studio Pro 버전과 동일해야 합니다.

## Version 10.21.0

* Web Extensibility API의 첫 번째 [베타](/releasenotes/release-status/) 릴리스입니다.
