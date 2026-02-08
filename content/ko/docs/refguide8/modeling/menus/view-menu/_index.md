---
title: "View 메뉴"
url: /refguide8/view-menu/
description: "Studio Pro의 View 메뉴에 대해 설명합니다."
weight: 20
---

## 소개

Studio Pro는 **Changes** 및 **Errors** 창과 같은 여러 도킹 가능한 창을 지원합니다. 현재 필요한 창만 표시하기 위해 일부 창을 닫을 수 있지만, **View** 메뉴를 통해 언제든지 다시 열 수 있습니다.

이 메뉴를 통해 [전체 화면 모드](#full-screen)를 활성화 또는 비활성화하거나 프로젝트 [레이아웃을 초기화](#reset-layout)할 수도 있습니다.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/view-menu.png" alt="View Menu"   width="300"  class="no-border" >}}

## 창 레이아웃 {#layout-of-panes}

창의 기본 레이아웃을 변경하고 원하는 레이아웃으로 배치할 수 있습니다.

{{% alert color="info" %}}
이 섹션은 작업 영역에 있는 문서의 동작이 아닌 창의 동작에 대해 설명합니다. 작업 영역에서 열린 문서의 동작에 대한 자세한 내용은 *Studio Pro 개요*의 [Document Tabs](/refguide8/studio-pro-overview/#documents) 섹션을 참조하십시오.
{{% /alert %}}

창을 드래그하면 이 창을 배치할 수 있는 위치를 나타내는 화살표가 표시됩니다. 현재 창 내부(함께 그룹화된 화살표) 또는 전체 창 높이 또는 너비(테두리의 개별 화살표)로 창을 배치할 수 있습니다. 각 위치에 대한 레이블과 설명은 아래와 같습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/interaction-with-panes.png" class="no-border" >}}

1. 현재 *창* 내에서 다음과 같은 방식으로 창을 배치할 수 있습니다:

    1. 창 높이 – 왼쪽
    2. 창 높이 – 오른쪽
    3. 창 높이 – 위
    4. 창 높이 – 아래
    5. 새 탭으로 새 창

        {{% alert color="info" %}}작업 영역 내에 새 창으로 배치하려고 하면 대화 상자로 열립니다.{{% /alert %}}

2. 현재 *윈도우* 내에서 다음과 같은 방식으로 창을 배치할 수 있습니다:

    1. 전체 윈도우 높이 – 왼쪽
    2. 전체 윈도우 높이 – 오른쪽
    3. 전체 윈도우 높이 – 위
    4. 전체 윈도우 높이 – 아래

아래 비디오는 창을 배치하는 방법의 예를 보여줍니다:

<video width="640" height="360" controls src="/attachments/refguide8/view-menu/positioning-panes.mp4">VIDEO</video>
탭으로 그룹화된 여러 창이 있는 경우 상단 바를 드래그하여 모든 탭의 위치를 한 번에 변경할 수 있습니다. 개별 탭의 위치를 변경하려면 탭 자체를 드래그하십시오.

## 메뉴 항목

**View** 메뉴의 메뉴 항목은 아래 섹션에 설명되어 있습니다.

### Changes

버전 관리가 활성화된 프로젝트([Team Server](/developerportal/repository/team-server/) 또는 기타 SVN 서버를 사용하는 프로젝트)의 경우, [Changes 창](/refguide8/changes-pane/)은 마지막 커밋 이후의 앱 로컬 변경 사항을 표시합니다. 여기서 변경 사항을 커밋하고, 최신 리비전으로 업데이트하고, 히스토리를 볼 수 있습니다.

이 창은 두 단계가 있으므로 변경된 문서를 확대하면 단계 간에 앞뒤로 이동하지 않고 해당 문서 내의 모든 변경 사항을 검토할 수 있습니다. 확대된 수준의 창은 두 개의 그리드로 분할되며, 왼쪽에 요소가 있고 오른쪽에 속성이 있습니다. 왼쪽에서 요소를 선택하면 오른쪽에 변경된 속성이 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes.gif" class="no-border" >}}

### Connector {#connector}

**Connector** 창은 현재 선택된 요소에 연결할 수 있는 요소를 표시합니다. 예를 들어, 버튼이 선택되면 **Connector**는 버튼에 드래그하여 연결할 수 있는 Microflow를 표시합니다.

### Data Hub {#data-hub}

[Data Hub 창](/refguide8/data-hub-pane/)을 사용하면 [Catalog](/catalog/)를 탐색하고 조직에서 사용 가능한 등록된 데이터 소스를 통합할 수 있습니다. 이 창을 통해 앱에 [외부 Entity](/refguide8/external-entities/)를 추가하고 프로젝트에서 이미 사용 중인 Entity 및 서비스를 볼 수 있습니다.

### Console {#console}

**Console** 창은 애플리케이션 실행 중 [Mendix Runtime](/refguide8/runtime/)의 출력을 표시합니다.

### Documentation

**Documentation** 창은 현재 선택된 요소에 대한 문서를 표시합니다(해당되는 경우).

### Error List

[Errors 창](/refguide8/errors-pane/)은 앱에 존재하는 [오류](/refguide8/consistency-errors/), 경고 및 사용 중단을 표시합니다.

### Find Results {#find}

이 창은 최신 검색 작업의 결과를 표시합니다. 텍스트, 요소(예: Attribute)의 사용 위치, 사용되지 않는 항목을 검색할 수 있습니다.

두 개의 **Find Results** 창이 있습니다. 첫 번째 창의 결과를 잠그면 잠금을 해제할 때까지 후속 검색 작업에 두 번째 창이 사용됩니다.

### Project Explorer

[Project Explorer](/refguide8/project-explorer/) 창은 모듈 내의 모든 문서를 포함하여 앱의 전체 구조를 표시합니다. 기본적으로 활성 문서가 항상 선택되어 편집 중인 문서가 트리에서 어디에 있는지 빠르게 확인할 수 있습니다. **Edit** > [Preferences](/refguide8/preferences-dialog/)에서 이 동작을 변경할 수 있습니다.

### Properties

**Properties** 창은 현재 선택된 요소의 속성을 표시합니다. Studio Pro에서 많은 편집 작업이 이곳에서 이루어집니다.

### Stories

[Team Server](/developerportal/repository/team-server/) 앱의 경우, **Stories** 창은 현재 Sprint의 스토리를 표시합니다. **Stories** 창 및 상호 작용 방법에 대한 자세한 내용은 [Stories Pane](/refguide8/stories-pane/)을 참조하십시오.

### Toolbox {#toolbox}

**Toolbox** 창은 현재 편집기에서 사용할 수 있는 도구를 표시합니다. 예를 들어, 페이지에서 **Toolbox**에서 다양한 위젯(예: [데이터 위젯](/refguide8/data-widgets/))을 페이지로 드래그하여 삽입할 수 있습니다.

### Debug Windows

디버깅에 대한 자세한 내용은 [Microflow 디버깅 방법](/howto8/monitoring-troubleshooting/debug-microflows/)을 참조하십시오.

#### Breakpoints

**Breakpoints** 창은 앱의 모든 중단점을 표시합니다. 여기서 중단점을 활성화하거나 비활성화할 수 있습니다.

#### Debugger {#debugger}

**Debugger** 도구를 사용하여 애플리케이션을 디버그할 수 있습니다.

#### Variables

**Variables** 창에서 애플리케이션을 디버깅할 때 변수, 목록 및 객체의 현재 값을 볼 수 있습니다.

### Full Screen {#full-screen}

**Full Screen** 모드는 제목 표시줄을 숨기고 창이 전체 화면을 채우도록 합니다. 이 버전의 **Full Screen**은 Studio Pro [8.3.0](/releasenotes/studio-pro/8.3/#830)에서 도입되었습니다; 이전 버전에서는 **Full Screen** 모드가 모든 도킹 가능한 창을 닫았습니다.
단축키: <kbd>F11</kbd>

### Distraction Free Mode {#distraction-free}

**Distraction Free Mode**는 위의 **Full Screen** 모드와 동일한 작업을 수행하지만 모든 도킹 가능한 창도 닫습니다. 이 기능은 Studio Pro [8.3.0](/releasenotes/studio-pro/8.3/#830)에서 도입되었습니다.

단축키: <kbd>Shift</kbd> + <kbd>F11</kbd>

### Reset Layout {#reset-layout}

도킹 가능한 창의 레이아웃을 공장 기본값으로 재설정합니다.

## 더 보기

* [Changes Pane](/refguide8/changes-pane/)
* [Errors Pane](/refguide8/errors-pane/)
* [Project Explorer](/refguide8/project-explorer/)
* [Studio Pro 개요](/refguide8/studio-pro-overview/)
