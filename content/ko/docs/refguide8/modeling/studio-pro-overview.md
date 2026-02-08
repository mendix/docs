---
title: "Studio Pro 개요"
url: /refguide8/studio-pro-overview/
description: "Studio Pro의 탭, 메뉴, 단축키 등 일반적인 내용을 설명합니다."
weight: 10
aliases:
    - /refguide8/desktop-modeler-overview.html
    - /refguide8/desktop-modeler-overview
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

Mendix Studio Pro는 Mendix 애플리케이션을 생성, 보기 및 편집하기 위한 도구입니다. Studio Pro에서 Mendix 앱은 [프로젝트](/refguide8/project/)라고 합니다.

하나의 Studio Pro 인스턴스는 한 번에 하나의 프로젝트만 열 수 있지만, 필요한 경우 두 개의 Studio Pro 인스턴스를 열 수 있습니다.

{{% alert color="info" %}}
Studio Pro가 열려 있을 때 <kbd>F1</kbd>을 눌러 문서로 빠르게 이동할 수 있습니다.
{{% /alert %}}

이 문서에서는 Mendix Studio Pro의 사용자 인터페이스를 설명합니다:

{{< figure src="/attachments/refguide8/modeling/studio-pro-overview/studio-pro-diagram.png" alt="Studio Pro Diagram" class="no-border" >}}

## 상단 바

Studio Pro 상단 바에는 다음 항목이 포함됩니다:

* [메뉴](#menus) 
* [앱 실행 및 보기 버튼](#run-and-view)
* [앱 및 Marketplace 링크](#links) 

### 메뉴 {#menus}

Studio Pro 상단 바에서 [Edit](/refguide8/edit-menu/), [View](/refguide8/view-menu/), [Version Control](/refguide8/version-control-menu/) 등 여러 메뉴를 볼 수 있습니다. 각 메뉴에는 다양한 작업을 수행할 수 있는 메뉴 항목이 포함되어 있습니다. 예를 들어, [배포 패키지 생성](/refguide8/create-deployment-package-dialog/), [환경 설정](/refguide8/preferences-dialog/) 지정, [오류](/refguide8/errors-pane/) 패널 보기 등이 있습니다.

메뉴에 대한 자세한 내용은 [메뉴](/refguide8/menus/)를 참조하십시오.

### 앱 실행 및 보기 {#run-and-view}

**Run** 또는 **Run locally** 버튼을 클릭하여 앱을 배포할 수 있습니다. 배포된 앱을 보려면 **View** 버튼을 클릭하십시오.

Mendix에서의 배포에 대한 자세한 내용은 [앱 배포](/deployment/)를 참조하십시오.

앱 배포 및 버전 관리에 대한 자세한 내용은 *Studio Pro에서 버전 제어 사용*의 [클라우드에 배포된 프로젝트 버전 관리](/refguide8/using-version-control-in-studio-pro/#versioning-project) 섹션을 참조하십시오.

### 앱 및 Marketplace 링크 {#links}

Studio Pro의 오른쪽 상단 모서리에서 [Apps](/developerportal/) 및 [Marketplace](/appstore/) 링크를 찾을 수 있습니다.

로그인한 경우 이 버튼 옆에 계정이 표시됩니다. 계정 이름을 클릭하여 앱, 프로필로 이동하거나 로그아웃하십시오.

## 프로젝트 구조

프로젝트는 폴더와 [모듈](/refguide8/modules/)로 그룹화된 개별 파일(*문서*)과 설정으로 구성됩니다. 프로젝트의 전체 구조는 [Project Explorer](/refguide8/project-explorer/)에서 볼 수 있습니다.

## 작업 영역

작업 영역은 현재 작업 중인 문서 탭입니다. 작업 영역과 설정은 편집기(예: 페이지, Microflow, 도메인 모델 편집기)와 문서 유형에 따라 다릅니다.

### 문서 탭 {#documents}

보고 편집하는 문서가 탭에 표시됩니다.

{{% alert color="info" %}}
이 섹션에서는 작업 영역의 문서를 설명하며, 작업 영역 주위에 열고 배치할 수 있는 패널이 아닙니다. 패널의 동작에 대한 자세한 내용은 *View 메뉴*의 [패널 레이아웃](/refguide8/view-menu/#layout-of-panes) 섹션을 참조하십시오.
{{% /alert %}}

최신 웹 브라우저처럼 여러 탭을 열 수 있습니다. 탭을 닫고, 재정렬하고, 나란히 표시할 수 있습니다. 아래 비디오는 탭과 상호 작용하는 방법의 예를 보여줍니다:

<video controls width="608" height="456" src="/attachments/refguide8/studio-pro-overview/document-tabs.mp4">VIDEO</video>

각 문서에는 고유한 저장 상태, 히스토리 및 미래가 있으므로 실행 취소 및 다시 실행 작업이 무제한입니다.

## 도킹 가능한 패널

도킹 가능한 패널은 작업 영역 주위에 배치할 수 있으며 다양한 요소와 설정을 포함합니다. 예를 들어, 오류 목록을 보거나, 특정 문서 또는 요소의 속성을 구성하거나, 도구 상자를 볼 수 있습니다. 패널은 [메뉴](/refguide8/menus/)를 통해 열립니다.

## 상태 바

Studio Pro 메인 창 패널의 하단에 상태 바가 있습니다.

왼쪽에는 Studio Pro의 현재 상태가 있습니다.

오른쪽에는 현재 선택된 언어가 있습니다. 앱에서 여러 언어를 설정한 경우 여기를 클릭하여 현재 선택된 언어를 변경할 수 있습니다. 자세한 내용은 [언어 메뉴](/refguide8/translatable-texts/)를 참조하십시오.

## 단축키

### 일반 단축키

메인 창 패널에서 <kbd>Ctrl</kbd> + <kbd>Tab</kbd>을 사용하여 열린 모든 문서 사이를 탐색할 수 있습니다. 메인 창 패널에서 사용할 수 있는 다른 단축키는 [메뉴](/refguide8/menus/)의 관련 메뉴 항목 옆에서 찾을 수 있습니다.

속성 편집을 위한 대부분의 대화 상자에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | 모든 변경 사항을 확인하고 대화 상자를 닫습니다. **OK** 버튼을 클릭한 것처럼 작동합니다. 포커스가 여러 줄 텍스트 상자에 있을 때 특히 유용합니다. 그렇지 않으면 <kbd>Enter</kbd>를 누르면 동일한 효과가 있습니다. |
| <kbd>Esc</kbd> | 모든 변경 사항을 취소하고 대화 상자를 닫습니다. **Cancel** 버튼을 클릭한 것처럼 작동합니다. |
| <kbd>Ctrl</kbd> + 마우스 스크롤 휠 | 확대 또는 축소합니다. 모든 편집기에서 작동합니다. |
| <kbd>Shift</kbd> + 마우스 스크롤 휠 | 왼쪽 또는 오른쪽으로 스크롤합니다. 가로 스크롤 바를 사용하는 것처럼 작동합니다. |

대부분의 편집 그리드(예: Entity 속성의 Attribute 목록)에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | 새 항목을 생성합니다. |
| <kbd>Enter</kbd> | 현재 선택된 항목을 편집합니다. |
| <kbd>Delete</kbd> | 현재 선택된 항목을 삭제합니다. |

### 도메인 모델 편집기 단축키

도메인 모델 편집기에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| <kbd>F2</kbd> | 선택한 요소의 이름을 편집합니다. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | 모든 Entity를 선택합니다. |
| <kbd>Esc</kbd> | 선택을 해제합니다. |

### 페이지 편집기 단축키

페이지 편집기에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| 화살표 키 | 선택 상자를 화살표 키 방향의 위젯 또는 요소로 이동합니다. 예를 들어, 현재 레이블이 선택되어 있고 오른쪽 화살표 키를 누르면 오른쪽의 텍스트 상자가 선택됩니다. |
| <kbd>Ctrl</kbd> + 화살표 키 | 현재 선택된 항목을 위/아래 또는 왼쪽/오른쪽으로 이동합니다. 테이블 열과 행, 탭 페이지, 그리드 및 Data View 버튼, 검색 필드 등에서 작동합니다. |
| <kbd>Enter</kbd> | 현재 선택된 객체의 속성을 대화 상자에서 편집합니다. |
| <kbd>F2</kbd> | 레이블 또는 버튼의 캡션을 페이지에서 인라인으로 편집합니다. 문자나 숫자를 입력하기 시작하면 캡션이 입력한 내용으로 대체됩니다. |

### Microflow 편집기 단축키

Microflow 편집기에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| 화살표 키 | 선택 상자를 화살표 키 방향의 Activity 또는 요소로 이동합니다. 예를 들어, 현재 show page Activity가 선택되어 있고 오른쪽 화살표 키를 누르면 오른쪽의 end event가 선택됩니다. |
| <kbd>Ctrl</kbd> + 화살표 키 | 현재 선택된 항목을 위/아래 또는 왼쪽/오른쪽으로 이동합니다. |
| <kbd>Enter</kbd> | 현재 선택된 객체의 속성을 대화 상자에서 편집합니다. |
| <kbd>F2</kbd> | 현재 선택된 Activity의 반환 값 이름을 편집합니다. 결과를 반환하지 않는 Activity에서는 이 단축키가 작동하지 않습니다. |
| <kbd>Home</kbd> | 현재 Microflow의 시작 이벤트를 강조 표시하고 포커스합니다. |
| <kbd>End</kbd> | 현재 Microflow의 종료 이벤트를 강조 표시하고 포커스합니다. 여러 종료 이벤트가 있는 경우 **End**를 여러 번 클릭하면 다른 이벤트 간에 전환됩니다. |
| Activity 크기 조정 시 <kbd>Shift</kbd> | Entity 크기를 조정할 때 <kbd>Shift</kbd>를 누르면 Microflow 컴포넌트가 현재 위치에서 중앙에 유지되고 모든 방향으로 동일하게 확장됩니다. |
| 여러 Activity 선택 시 <kbd>Ctrl</kbd> | <kbd>Ctrl</kbd>을 누르면 추가 Microflow 컴포넌트를 선택할 수 있습니다. <kbd>Ctrl</kbd>을 누른 상태에서 선택된 컴포넌트를 클릭하면 선택이 해제됩니다. |

### Microflow 디버거 단축키 {#debugger-shortcuts}

Microflow 디버거에서 다음 단축키를 사용할 수 있습니다:

| 키 | 설명 |
| --- | --- |
| <kbd>Alt</kbd> + <kbd>F5</kbd> | *Step into* – 디버거를 하위 Microflow 또는 루프로 이동합니다. |
| <kbd>Alt</kbd> + <kbd>F6</kbd> | *Step over* – 디버거를 동일한 Microflow의 다음 단계로 이동합니다. |
| <kbd>Alt</kbd> + <kbd>F7</kbd> | *Step out* – 디버거가 하위 Microflow 또는 루프를 벗어나도록 지시합니다. |
| <kbd>Alt</kbd> + <kbd>F8</kbd> | *Continue* – 디버거가 다른 중단점에 도달할 때까지 계속하도록 지시합니다. |

### 언어 단축키

다음 단축키는 현재 선택된 언어를 제어합니다:

| 키 | 설명 |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | **Language Settings…**에서 선택한 언어 목록에서 다음 언어를 선택합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | **Language Settings…**에서 선택한 언어 목록에서 이전 언어를 선택합니다. |

## 더 읽기

* [Project Explorer](/refguide8/project-explorer/)
* [메뉴](/refguide8/menus/)
