---
title: "Stories 창"
url: /refguide8/stories-pane/
weight: 50
description: "Mendix Studio Pro의 Stories 창에 대해 설명합니다."
---

## 소개

버전 관리가 활성화된 프로젝트(Team Server 또는 기타 SVN 서버를 사용하는 프로젝트)의 경우, **Stories** 창은 현재 Sprint의 스토리와 태스크를 표시합니다. 스토리, 태스크, Sprint는 **Apps**에서 생성되고 관리됩니다. 스토리에 대한 자세한 내용은 Stories를 참조하십시오.

**Stories** 창에서 현재 Sprint의 스토리와 태스크를 보고, 완료된 스토리를 표시하거나 숨기고, 세부 정보를 열고, 스토리와 태스크의 상태를 변경하고, 스토리에 연결된 문서를 열 수 있습니다.

**Stories** 창은 다양한 버튼이 있는 상단 바와 테이블로 구성되어 있습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/stories-pane/stories-pane.png" alt="Stories Pane Example" class="no-border" >}}

테이블에는 다음 열이 포함되어 있습니다:

* **Story** – 스토리 목록을 표시합니다
    * *태스크*는 해당 스토리의 하위 목록으로 표시됩니다
* **Status** – 스토리 또는 태스크의 상태를 표시합니다

## Stories 창과의 상호 작용

**Stories** 창에서 다음 작업을 수행할 수 있습니다:

* [Stories 창 새로고침](#refresh)
* [스토리 세부 정보 보기](#view-details)
* [완료된 스토리 표시 또는 숨기기](#show-completed-stories)
* [스토리에 연결된 문서 열기](#opening-documents)
* [스토리 또는 태스크의 상태 변경](#changing-status)

### Stories 창 새로고침 {#refresh}

**Refresh** 버튼을 사용하면 **Apps** 또는 Studio Pro에서 귀하와 팀원이 수행한 스토리 및 태스크의 최신 변경 사항을 가져올 수 있습니다.

두 팀원이 동일한 스토리를 변경하면 마지막으로 수행된 변경 사항이 적용됩니다. 예를 들어, 스토리 상태를 *Running*으로 설정했지만 동료가 2분 후에 *Done*으로 설정한 경우, **Refresh**를 클릭하면 동료가 마지막으로 변경 사항을 적용했으므로 스토리 상태가 *Done*으로 설정됩니다.

### 세부 정보 보기 {#view-details}

*스토리*의 세부 정보를 보려면 다음 중 하나를 수행하십시오:

* 테이블에서 더블 클릭하십시오
* 테이블에서 스토리를 선택하고 상단 바의 **Details** 버튼을 클릭하십시오

스토리 옆의 *플러스 아이콘*은 태스크가 할당되어 있음을 의미합니다. *태스크*의 세부 정보를 보려면 플러스 아이콘을 클릭하고 다음 중 하나를 수행하십시오:

* 테이블에서 태스크를 더블 클릭하십시오
* 테이블에서 태스크를 선택하고 상단 바의 **Details** 버튼을 클릭하십시오

스토리 또는 태스크의 세부 정보를 볼 때, 다음 정보가 포함된 **Story Details** 팝업 창이 열립니다:

* **Title** – 스토리/태스크의 제목
* **Status** – 스토리/태스크의 현재 상태
* **Story points** – 스토리/태스크에 할당된 스토리 포인트
* **Description** – 스토리/태스크의 설명

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/stories-pane/story-details.png" alt="Story Details" class="no-border" >}}

### 완료된 스토리 표시 {#show-completed-stories}

활성화하면 **Show complete stories** 버튼으로 *Done* 상태로 설정된 스토리를 표시할 수 있습니다. 스토리 상태에 대한 자세한 내용은 아래 [스토리 또는 태스크의 상태 변경](#changing-status) 섹션을 참조하십시오.

### 스토리에 연결된 문서 열기 {#opening-documents}

피드백 항목에서 스토리가 생성된 경우, 피드백 항목이 참조하는 문서를 열 수 있습니다. 즉, 페이지의 위젯에 대해 피드백이 제출된 경우, **Open document** 버튼 또는 아이콘이 이 페이지를 엽니다.

문서를 열려면 상단 바의 **Open document** 버튼 또는 테이블의 해당 아이콘을 클릭하십시오:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/stories-pane/open-document-icon.png" alt="Open document icon" class="no-border" >}}

피드백 항목을 기반으로 스토리를 생성하고 [Epics](/developerportal/project-management/epics/) 또는 [Jira](/developerportal/project-management/jira-connector/)의 보드에 추가하는 방법에 대한 자세한 내용은 *Feedback*의 [Feedback Details](/developerportal/app-insights/feedback/#feedback-details) 섹션을 참조하십시오.

### 스토리 또는 태스크의 상태 변경 {#changing-status}

스토리 또는 태스크의 상태를 변경할 수 있습니다.

*스토리*의 상태를 변경하려면 **Status** 열에서 상태를 클릭하십시오. 상태는 *To do* > *Running* > *Done* > *To do* 순서로 변경됩니다.

태스크의 상태를 변경하려면 **Status** 열의 확인란을 선택하거나 해제하십시오:

* 확인란을 해제하면 완료된 태스크를 *To do*로 설정합니다
* 확인란을 선택하면 태스크를 *Done*으로 설정합니다

## 더 보기

* [Feedback Management](/developerportal/app-insights/feedback/)
* [View Menu](/refguide8/view-menu/)
