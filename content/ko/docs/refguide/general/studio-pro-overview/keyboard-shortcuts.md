---
title: "키보드 단축키"
url: /refguide/keyboard-shortcuts/
weight: 12
description: "Studio Pro에서 사용할 수 있는 단축키를 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

이 문서에서는 Studio Pro에서 사용할 수 있는 단축키를 요약합니다. 이 문서는 키를 사용할 수 있는 위치를 나타내는 섹션으로 구분되어 있습니다.

Windows 단축키는 [다크](https://www.mendix.com/wp-content/uploads/Windows-Keyboard-Shortcuts-dark-mode.pdf) 및 [라이트](https://www.mendix.com/wp-content/uploads/Windows-Keyboard-Shortcuts-light-mode.pdf) 버전 모두 참조 PDF로 제공됩니다.

## 일반 단축키

이 키들은 Studio Pro 내 여러 위치에서 사용할 수 있으며 범용적으로 작동합니다.

### 패널 및 에디터

이 키들은 [도킹 가능 패널](#panes) 및 Domain Model, 페이지, Workflow, Microflow 또는 Navigation 에디터와 같은 에디터에서 활성화됩니다.

#### 모든 패널 및 에디터 {#panes}

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>을 사용하여 Studio Pro 패널(예: Domain Model 에디터 또는 **Errors** 패널) 사이를 탐색할 수 있습니다. 이렇게 하면 마우스, <kbd>Ctrl</kbd> + 화살표 키 또는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>을 사용하여 패널을 선택할 수 있는 선택 대화 상자가 열립니다. 마우스 기본 버튼을 클릭하거나 <kbd>Ctrl</kbd> 키를 놓으면 선택한 패널로 이동합니다.

{{< figure src="/attachments/refguide/studio-pro-overview/ctrl-tab-navigation.png" class="no-border" >}}

패널 내 탭 간을 탐색하는 대체 방법이 있습니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> - <kbd>0</kbd> | 사용 불가 | 현재 창에서 선택한 탭 위치의 탭으로 전환합니다. |
| <kbd>Ctrl</kbd> + <kbd>Page&nbsp;up</kbd> / <kbd>Page&nbsp;down</kbd> | 사용 불가 | 활성 패널에서 다음/이전 탭으로 전환합니다. |

대부분의 메뉴 항목에도 모든 패널에서 사용할 수 있는 단축키가 할당되어 있습니다. 이들은 메뉴에 표시되며, 아래 [메뉴 단축키](#menu-shortcuts) 섹션에 나열되어 있고, [메뉴](/refguide/menus/) 아래 각 메뉴의 문서 페이지에 나열되어 있습니다.

#### 에디터 전용 {#editors-only}

다음 키 조합은 Domain Model, 페이지, Workflow, Microflow 또는 Navigation 에디터와 같은 에디터에서 작동합니다.

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>Command</kbd> + <kbd>C</kbd> | 선택한 요소를 클립보드에 복사합니다. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>Command</kbd> + <kbd>V</kbd> | 클립보드의 내용을 현재 에디터에 붙여넣습니다. |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>Command</kbd> + <kbd>X</kbd> | 선택한 요소를 클립보드로 이동합니다. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>Command</kbd> + <kbd>Y</kbd> | 에디터 패널에서 마지막으로 취소한 작업을 다시 실행합니다. |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>Command</kbd> + <kbd>Z</kbd> | 에디터 패널에서 마지막 작업을 취소합니다. |
| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | 사용 불가 | 열린 에디터 간을 탐색합니다(에디터가 *active files*로 표시되는 패널 탐색 대화 상자가 열립니다). |
| <kbd>Ctrl</kbd> + 마우스 스크롤 휠 | <kbd>Command</kbd> + 마우스 스크롤 휠 | 확대 또는 축소합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Plus&nbsp;sign</kbd>/<kbd>Minus&nbsp;sign</kbd> | 사용 불가 | 확대 또는 축소합니다. |
| <kbd>Shift</kbd> + 마우스 스크롤 휠 | <kbd>Shift</kbd> + 마우스 스크롤 휠 | 좌우로 스크롤합니다. 가로 스크롤 바를 사용하는 것처럼 작동합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | 사용 불가 | Widget의 인라인 스타일, 클래스, 디자인 속성을 복사합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> | 사용 불가 | Widget 스타일을 다른 선택된 Widget에 붙여넣습니다. |

#### 패널 전용

다음 키 조합은 Studio Pro의 패널에서 작동합니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F7</kbd> | 사용 불가 | 패널 간을 탐색합니다(패널이 *active tool windows*로 표시되는 패널 탐색 대화 상자가 열립니다). |

### 대화 상자

속성 편집을 위한 대부분의 대화 상자에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac                               | 설명 |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>Command</kbd> + <kbd>Enter</kbd> | 모든 변경 사항을 확인하고 대화 상자를 닫습니다. **OK** 버튼을 클릭한 것과 같이 작동합니다. 포커스가 여러 줄 텍스트 상자에 있을 때 특히 유용합니다. 그렇지 않으면 <kbd>Enter</kbd>를 누르는 것과 같은 효과가 있습니다. |
| <kbd>Esc</kbd> | 사용 불가 | 모든 변경 사항을 취소하고 대화 상자를 닫습니다. **Cancel** 버튼을 클릭한 것과 같이 작동합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | 사용 불가 | 탭이 있는 대화 상자에서 탭 간을 전환합니다. |

대부분의 편집 그리드(예: Entity 속성의 Attribute 목록)에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac                            | 설명 |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | <kbd>Ctrl</kbd> + <kbd>N</kbd> | 새 항목을 생성합니다. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | 현재 선택된 항목을 편집합니다. |
| <kbd>Delete</kbd> | 사용 불가 | 현재 선택된 항목을 삭제합니다. |
| <kbd>↑</kbd> / <kbd>↓</kbd> | <kbd>↑</kbd> / <kbd>↓</kbd> | 이전/다음 항목을 선택합니다. |
| <kbd>Ctrl</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | 사용 불가 | 선택된 항목을 위/아래로 이동합니다. |

## Domain Model 에디터 단축키

Domain Model 에디터에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac                                     | 설명 |
| --- | --- | --- |
| <kbd>F2</kbd> | <kbd>Fn</kbd> + <kbd>F2</kbd> | 선택된 Entity, Attribute 또는 Association의 이름을 편집합니다. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>Command</kbd> + <kbd>A</kbd> | 모든 Entity를 선택합니다. |
| <kbd>Ctrl</kbd> | <kbd>Command</kbd> | <kbd>Ctrl</kbd>/<kbd>Command</kbd>를 누르면 추가 Entity 컴포넌트를 선택할 수 있습니다. <kbd>Ctrl</kbd>/<kbd>Command</kbd>를 누른 채 선택된 Entity를 클릭하면 선택이 해제됩니다. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | 현재 선택된 Entity, Attribute 또는 Association의 속성을 대화 상자에서 편집합니다. |
| <kbd>Esc</kbd> | <kbd>Esc</kbd> | 선택을 해제합니다. |

## 페이지 에디터 단축키

페이지 에디터에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| 화살표 키 | 화살표 키| 선택 상자를 화살표 키 방향의 Widget 또는 요소로 이동합니다. 예를 들어, 현재 레이블이 선택되어 있고 오른쪽 화살표 키를 누르면 오른쪽의 텍스트 상자가 선택됩니다. |
| <kbd>Ctrl</kbd> + 화살표&nbsp;키 | 사용 불가 | 현재 선택된 항목을 위/아래 또는 좌/우로 이동합니다. 테이블 열과 행, 탭 페이지, Data Grid 및 Data View 버튼, 검색 필드 등에서 작동합니다. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | 현재 선택된 객체의 속성을 대화 상자에서 편집합니다. |
| <kbd>F2</kbd> | <kbd>Fn</kbd> + <kbd>F2</kbd> | 레이블 또는 버튼의 캡션, 또는 텍스트의 내용을 페이지에서 직접 편집합니다. 글자나 숫자를 입력하기 시작하면 캡션이 입력한 내용으로 대체됩니다. |

## Microflow, Nanoflow 및 Rule 에디터 단축키 {#logic-editor-keyboard-support}

다음 하위 섹션의 표에서는 Microflow, Nanoflow 및 Rule 에디터에서 사용할 수 있는 단축키를 설명합니다.

### 선택

| Windows | Mac | 설명 |
| --- | --- | --- |
| 화살표 키 | 화살표 키 | 화살표 방향으로 인접한 요소(Activity, Event, Loop 또는 Parameter)를 선택합니다. |
| <kbd>Home</kbd> | <kbd>Fn</kbd> + 왼쪽 화살표 | Start Event를 선택합니다. |
| <kbd>End</kbd> | <kbd>Fn</kbd> + 오른쪽 화살표 | End Event를 순환합니다. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>Command</kbd> + <kbd>A</kbd> | 모든 요소를 선택합니다. |
| <kbd>Ctrl</kbd> | <kbd>Command</kbd> | <kbd>Ctrl</kbd>/<kbd>Command</kbd>를 누르면 추가 요소를 선택할 수 있습니다. <kbd>Ctrl</kbd>/<kbd>Command</kbd>를 누른 채 선택된 요소를 클릭하거나 선택 사각형으로 선택하면 선택이 해제됩니다. |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Loop가 선택된 경우, Loop 내부의 첫 번째 요소가 선택됩니다. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> | Loop 내부의 요소가 선택된 경우, Loop 자체가 선택됩니다. |

### 탐색

| Windows | Mac | 설명 |
| --- | --- | --- |
| 마우스 스크롤 휠 | 마우스 스크롤 휠 | 위 또는 아래로 스크롤합니다. |
| <kbd>Shift</kbd> + 마우스 스크롤 휠 | <kbd>Shift</kbd> + 마우스 스크롤 휠 | 좌 또는 우로 스크롤합니다. |
| <kbd>Space</kbd> + 마우스 버튼 | <kbd>Space</kbd> + 마우스 버튼 | 화면을 드래그합니다. |
| <kbd>Ctrl</kbd> + 마우스 스크롤 휠 | <kbd>Command</kbd> + 마우스 스크롤 휠 | 확대 또는 축소합니다. |
| <kbd>Ctrl</kbd> + <kbd>Plus&nbsp;sign</kbd>/<kbd>Minus&nbsp;sign</kbd> | <kbd>Command</kbd> + <kbd>Plus&nbsp;sign</kbd>/<kbd>Minus&nbsp;sign</kbd> | 확대 또는 축소합니다.  |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | <kbd>Command</kbd> + <kbd>0</kbd> | 확대 수준을 100%로 재설정합니다. |

### 요소 조작

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Enter</kbd> - 요소에서 | <kbd>Enter</kbd> - 요소에서 | 요소가 선택된 경우 속성을 편집합니다. |
| <kbd>Enter</kbd> - Logic Recommender 제안 목록 항목에서 | <kbd>Enter</kbd> - Logic Recommender 제안 목록 항목에서 | 선택된 항목이 시퀀스 플로우에 추가됩니다. 다음에 추가할 액션을 위해 Logic Recommender 대화 상자가 다시 표시됩니다. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> (또는 <kbd>Shift</kbd> + 마우스 버튼) - Logic Recommender 제안 목록 항목에서| <kbd>Shift</kbd> + <kbd>Enter</kbd> (또는 <kbd>Shift</kbd> + 마우스 버튼) - Logic Recommender 제안 목록 항목에서 | 선택된 항목이 시퀀스 플로우에 추가됩니다. 요소의 속성 대화 상자가 열립니다. |
| <kbd>F2</kbd> | <kbd>Fn</kbd> + <kbd>F2</kbd> | 선택된 요소에서 반환되는 변수의 이름을 변경합니다. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> 또는 입력 시작 | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F2</kbd> 또는 입력 시작 | **Properties** 패널을 열고 선택된 요소의 캡션을 편집합니다. |
| 컨텍스트 메뉴 키 또는 <kbd>Shift</kbd> + <kbd>F10</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F10</kbd> | 현재 선택된 요소의 컨텍스트 메뉴를 엽니다. |
| <kbd>Shift</kbd> | <kbd>Shift</kbd> | <kbd>Shift</kbd>를 누른 채 요소 위에 마우스를 올리면 연결 지점이 표시됩니다.<br><br>{{% alert color="info" %}}이 키보드 단축키는 MacOS에서 Parallels로 Studio Pro를 실행할 때 기본적으로 작동하지 않습니다. 이 문제를 해결하려면 가상 머신 **configuration** > **Hardware** > **Mouse & Keyboard**로 이동하여 **Optimize for games** 옵션을 활성화하세요. 이렇게 하면 수정자 키를 누를 때마다 가상 머신에 이벤트가 전송됩니다.{{% /alert %}}|

## Workflow 에디터 단축키 {#workflow-editor-shortcut-keys}

Workflow 에디터에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| 마우스 스크롤 휠| 마우스 스크롤 휠 | 위 또는 아래로 스크롤합니다. |
| <kbd>Shift</kbd> + 마우스 스크롤 휠 | <kbd>Shift</kbd> + 마우스 스크롤 휠 | 좌 또는 우로 스크롤합니다. |
|<kbd>Ctrl</kbd> + 마우스 스크롤 휠 | <kbd>Command</kbd> + 마우스 스크롤 휠 | 확대 또는 축소합니다. |
| <kbd>Ctrl</kbd> + <kbd>Plus&nbsp;sign</kbd>/<kbd>Minus&nbsp;sign</kbd> | <kbd>Command</kbd> + <kbd>Plus&nbsp;sign</kbd>/<kbd>Minus&nbsp;sign</kbd> | 확대 또는 축소합니다.  |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | <kbd>Command</kbd> + <kbd>0</kbd> | 확대 수준을 100%로 재설정합니다. |
| <kbd>Ctrl</kbd> + 왼쪽/오른쪽 화살표 | <kbd>Command</kbd> + 왼쪽/오른쪽 화살표 | [Boundary Event](/refguide/workflow-boundary-events/)를 좌우로 이동합니다. |

## 디버거 단축키 {#debugger-shortcuts}

디버거에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Alt</kbd> + <kbd>F5</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | **Step into** – 디버거를 하위 Microflow/하위 Nanoflow 또는 Loop로 이동합니다. |
| <kbd>Alt</kbd> + <kbd>F6</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F6</kbd> | **Step over** – 디버거를 같은 Workflow/Microflow/Nanoflow의 다음 단계로 이동합니다. |
| <kbd>Alt</kbd> + <kbd>F7</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F7</kbd> | **Step out** – 디버거에 하위 Microflow/하위 Nanoflow 또는 Loop를 빠져나가도록 지시합니다. |
| <kbd>Alt</kbd> + <kbd>F8</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F8</kbd> | **Continue** – 디버거에 다른 중단점에 도달할 때까지 계속하도록 지시합니다. |
| <kbd>Alt</kbd> + <kbd>F9</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | **Continue all** – 디버거에 현재 일시 중지된 모든 Microflow/Nanoflow가 다른 중단점에 도달할 때까지 계속하도록 지시합니다. |

## 메뉴 단축키 {#menu-shortcuts}

다음 단축키는 모든 패널에서 사용할 수 있는 메뉴 액션에 할당되어 있습니다. 이들은 메뉴에도 표시되며, [메뉴](/refguide/menus/) 아래 각 메뉴의 문서 페이지에 나열되어 있습니다.

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>F1</kbd> | <kbd>Fn</kbd> + <kbd>F1</kbd> | 도움말. |
| <kbd>F3</kbd> | <kbd>Fn</kbd> + <kbd>F3</kbd> | **Find Results** 패널에서 다음 검색 결과를 강조 표시하고 에디터에서 엽니다. |
| <kbd>Shift</kbd> + <kbd>F3</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F3</kbd> | **Find Results** 패널에서 이전 검색 결과를 강조 표시하고 에디터에서 엽니다. |
| <kbd>F4</kbd> | <kbd>Fn</kbd> + <kbd>F4</kbd> | 앱 디렉토리를 동기화합니다. |
| <kbd>Ctrl</kbd> + <kbd>F4</kbd> | <kbd>Command</kbd> + <kbd>Q</kbd> | 종료합니다. |
| <kbd>F5</kbd> | <kbd>Fn</kbd> + <kbd>F5</kbd> | 앱을 로컬로 실행하여 확인할 수 있습니다. |
| <kbd>Shift</kbd> + <kbd>F5</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | 현재 실행 중인 앱을 중지합니다. |
| <kbd>Ctrl</kbd> + <kbd>F5</kbd> | <kbd>Ctrl</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | 라이선스된 클라우드 노드에 배포합니다. |
| <kbd>F6</kbd> | <kbd>Fn</kbd> + <kbd>F6</kbd> | Eclipse용으로 배포합니다. |
| <kbd>F7</kbd> | <kbd>Fn</kbd> + <kbd>F7</kbd> | 배포 패키지를 생성합니다. |
| <kbd>F8</kbd> | <kbd>Fn</kbd> + <kbd>F8</kbd> | **Errors** 패널에서 다음 오류를 강조 표시하고 에디터에서 엽니다. |
| <kbd>Shift</kbd> + <kbd>F8</kbd> | <Kbd>Shift</Kbd> + <kbd>Fn</kbd> + <kbd>F6</kbd> | **Errors** 패널에서 이전 오류 결과를 강조 표시하고 에디터에서 엽니다. |
| <kbd>F9</kbd> | <kbd>Fn</kbd> + <kbd>F9</kbd>| 현재 실행 중인 앱을 브라우저에 표시합니다(반응형). |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | <kbd>Ctrl</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | 현재 실행 중인 앱을 브라우저에 표시합니다(휴대폰 시뮬레이션). |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F9</kbd> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | 현재 실행 중인 앱을 브라우저에 표시합니다(태블릿 시뮬레이션). |
| <kbd>F11</kbd> | <kbd>Fn</kbd> + <kbd>F11</kbd> | 전체 화면 모드를 활성화 및 비활성화합니다. |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F11</kbd> | 집중 모드를 활성화 및 비활성화합니다. |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>F</kbd> | 검색 대화 상자를 엽니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | 고급 검색 대화 상자를 엽니다. |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>F</kbd> | 선택된 객체의 사용처를 표시합니다. |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | <kbd>Command</kbd> + <kbd>G</kbd> | 모든 문서 또는 Domain Model 요소로 이동합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | 구성된 언어를 순환합니다. |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | <kbd>Command</kbd> + <kbd>N</kbd> | 새 문서를 생성합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | 새 앱을 생성합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | 기존 앱 또는 앱 패키지를 엽니다. |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | <kbd>Command</kbd> + <kbd>S</kbd> | 현재 활성 문서 탭의 변경 사항을 저장합니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | 모든 열린 문서의 변경 사항을 저장합니다. |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | <kbd>Command</kbd> + <kbd>W</kbd> | 현재 문서를 닫습니다. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | 모든 문서 탭을 닫습니다. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | 선택된 요소를 삭제합니다. |

## Maia Chat 단축키 {#maia-chat-shortcuts}

피드백 페이지를 포함한 [Maia Chat](/refguide/maia-chat/)에서 다음 단축키를 사용할 수 있습니다:

| Windows | Mac | 설명 |
| --- | --- | --- |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | 채팅에서 질문을 전송합니다. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>Shift</kbd> + <kbd>Enter</kbd> | 질문에 새 줄을 추가합니다. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | 선택된 텍스트를 삭제합니다. |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>Command</kbd> + <kbd>C</kbd> | 선택된 텍스트를 클립보드에 복사합니다. |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>Command</kbd> + <kbd>X</kbd> | 선택된 텍스트를 클립보드에 잘라냅니다. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>Command</kbd> + <kbd>V</kbd> | 클립보드의 텍스트를 붙여넣습니다. |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>Command</kbd> + <kbd>Z</kbd> | 이전 작업을 취소합니다. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | 사용 불가 | 이전 작업을 다시 실행합니다. |

{{% alert color="warning" %}}
일부 시나리오에서는 Mac 지원 단축키가 작동하지 않을 수 있습니다.
{{% /alert %}}

## 더 읽어보기

* [App Explorer](/refguide/app-explorer/)
* [메뉴](/refguide/menus/)
* [개발 모범 사례](/refguide/dev-best-practices/)
* [앱 성능 모범 사례](/refguide/community-best-practices-for-app-performance/)
