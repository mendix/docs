---
title: "보드"
url: /developerportal/project-management/epics/board/
weight: 10
description: "Epics의 보드(Board) 페이지를 설명합니다. 이 페이지는 Scrum 워크플로를 사용하는지 Kanban 워크플로를 사용하는지에 따라 다르게 보입니다."
---
## 소개

**보드(Board)** 페이지는 팀이 현재 작업 중인 모든 스토리의 개요를 제공합니다. 스토리는 상태에 따라 스윔레인으로 그룹화됩니다.

페이지 오른쪽 상단에서 다음 항목을 확인할 수 있습니다:

* **Create Story** — 새 스토리를 생성할 수 있습니다.
    Maia를 사용하여 스토리를 생성할 수도 있습니다. [Maia로 스토리 생성 및 개선](#create-with-maia) 섹션을 참조하세요.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) — 클릭하면 다음 옵션이 표시됩니다:

    * **Create Epic** — 새 Epic을 생성할 수 있습니다.
    * **Settings** — 다음과 같이 보드 설정을 구성할 수 있습니다:

        * 태그 구성.
        * Scrum과 Kanban 보드 유형 간 전환.
        * 토스트 알림 구성.
  
* 검색 상자 — 스토리 제목, 태그, Epic 이름, 담당자(미할당 스토리 포함) 및 스토리 ID를 기반으로 스토리를 검색할 수 있습니다. 필터와 함께 검색 상자를 사용할 수 있습니다.

## Maia로 스토리 생성 및 개선 {#create-with-maia}

Maia로 스토리를 생성하려면 다음 단계를 따르세요:

1. 앱 [설정](/developerportal/general-settings/#maia-settings) 페이지에서 Maia를 활성화하세요.
2. **Create Story**를 클릭한 후 {{% icon name="sparkles" %}}**Create with Maia**를 클릭하세요.
   Maia가 활성화된 경우 **Create Story with Maia** 창이 표시됩니다.
   Maia가 활성화되지 않은 경우 **Enable Maia** 창에서 즉시 활성화할 수 있는 옵션이 제공됩니다.
3. 입력을 입력한 후 **Generate Story**를 클릭하세요.
4. Maia가 제공한 제안을 확인하세요. 제안에 동의하면 **Apply to Story**를 클릭하거나 다시 생성할 수 있습니다.

기존 스토리를 Maia를 사용하여 개선하려면 스토리를 열고 **Refine with Maia** ({{% icon name="sparkles" %}})를 클릭하세요.

## 스윔레인 {#swimlane}

두 개의 기본 스윔레인은 **To Do**와 **Done**입니다.

**In Progress**, **In Review**, **Testing** 등 사용자 정의 스윔레인을 더 추가할 수 있습니다. 새 스윔레인을 추가하려면 새 스윔레인을 추가할 스윔레인의 경계에 마우스를 올리고 세로 선이 나타나면 클릭하세요. 그런 다음 스윔레인 이름을 입력하고 **✓**를 클릭하여 변경 사항을 저장하세요.

{{< figure src="/attachments/developerportal/project-management/epics/board/add-swimlane.png" width="500px" class="no-border" >}}

스윔레인 오른쪽 상단의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 해당 옵션을 선택하여 스윔레인의 이름을 바꾸거나, 아카이브하거나, 삭제할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/rename-archive-delete-swimlane.png" class="no-border" >}}

그러나 다음 작업은 수행할 수 없습니다:

* 스토리가 여전히 포함된 스윔레인 삭제.
* 스토리가 포함되지 않은 스윔레인 아카이브.
* 기본 스윔레인 **To Do** 및 **Done** 삭제.

스윔레인을 새 위치로 드래그하여 이동할 수 있습니다.

### 스토리 카드 {#story-card}

스윔레인의 각 카드는 스토리를 나타냅니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/story-card.png" class="no-border" >}}

스토리 카드에는 다음 세부 정보가 표시됩니다:

* ① 접두사와 번호로 구성된 고유 스토리 ID
* ② 스토리 제목
* ③ 스토리와 관련된 Epic
* ④ 태그
* ⑤ 스토리가 기능인지 버그인지(녹색 별 아이콘은 기능, 빨간 버그 아이콘은 버그)
* ⑥ 코멘트 수
* ⑦ 작업 수
* ⑧ 스토리 포인트
* ⑨ 스토리 담당자

카드 오른쪽 상단의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 해당 옵션을 선택하여 스토리를 [아카이브](/developerportal/project-management/epics/archive/)하거나 삭제할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/archive-delete-story.png" class="no-border" >}}

스윔레인 내에서 또는 스윔레인 간에 카드를 이동할 수 있습니다. 카드를 새 위치로 드래그하세요.

스토리 카드를 클릭하여 [스토리 세부 정보](#story-details)를 확인할 수 있습니다.

### 스토리 세부 정보 {#story-details}

스토리 카드를 클릭하면 스토리 세부 정보 대화 상자가 열립니다.

오른쪽 상단에서 **Copy Link** ({{% icon name="hyperlink" %}})를 클릭하여 스토리 링크를 복사할 수 있습니다. **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하면 스토리를 복제, 아카이브 또는 삭제할 수 있는 메뉴가 열립니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/story-details-page-icons.png" class="no-border" >}}

스토리 세부 정보 대화 상자에는 다음 항목이 표시됩니다:

* **Description** – 스토리의 설명입니다:
    * **Edit Description**을 클릭하고 WYSIWYG 편집기에서 변경하여 스토리 설명을 편집할 수 있습니다. 편집기는 코드 블록을 포함한 다양한 텍스트 형식을 지원합니다.
    * 편집기에서 *#*과 스토리 제목을 입력한 후 목록에서 스토리를 선택하여 스토리를 연결할 수 있습니다.
    * 편집기에서 *@*과 사람의 이름을 입력한 후 목록에서 해당 사람을 선택할 수 있습니다. 스토리를 저장하면 시스템이 태그된 사람에게 알림을 보냅니다.

* **Created by** – 스토리를 생성한 사람을 표시합니다.

* **Assign to** – [앱(Apps)](https://sprintr.home.mendix.com/)에서 앱에 접근할 수 있는 누구에게나 스토리를 할당할 수 있습니다.

* **Status** – **Board** 및 **Planning** 페이지의 카테고리/스윔레인 이름 중 하나로 상태를 설정할 수 있습니다.

* **Tasks** – 모든 작업이 나열됩니다.
    * **+ Add Task**를 클릭하여 작업을 추가할 수 있습니다.
    * 작업을 드래그하여 위아래로 이동할 수 있습니다.
    
* **Story Type** – 스토리 유형을 **Bug** 또는 **Feature**로 설정할 수 있습니다.

* **Linked Epic** – 드롭다운 목록에서 Epic을 선택할 수 있습니다.

* **Tags** – 태그를 추가하거나 제거할 수 있습니다.
    * 텍스트 상자에 태그를 입력하고 **Create new "[tag name]"**을 클릭하여 새 태그를 만들 수 있습니다.
    * 끝의 **Settings** ({{% icon name="cog" %}})를 클릭하여 [태그를 관리](/developerportal/project-management/epics/planning/#manage-tags)할 수 있습니다.
    
* **Story Points** – 스토리 포인트를 정수로 설정할 수 있습니다.

* **Attached Files** – **+**를 클릭하여 첨부 파일을 추가할 수 있습니다.

* **Feedback** – 스토리에 연결된 피드백 항목을 표시합니다.
    피드백 항목과 스토리의 연결을 해제하려면 해당 {{% icon name="unlink" %}} **unlink** 버튼을 클릭하세요.

* **Audit Trail** – 누가 업데이트했는지와 시기를 포함하여 스토리와 관련된 모든 업데이트에 대한 정보를 제공합니다:
   
    * Story assigned to {user name}
    * Story assigned to {user name} from {user name}   
    * Story unassigned from {user name}   
    * Changed Status to {status}    
    * Story type changed to {story type}   
    * Task {task name} added  
    * Task {task name} completed  
    * Task {task name} deleted  
    * Epic {epic name} linked  
    * Epic {epic name} unlinked 
    * Tag (or tags) {tag names} added  
    * Tag (or tags) {tag names} removed 
    * Story points changed to {story points} 
    * File attached {file name}   
    * File removed {file name}   
    * Story archived  
    * Comment Deleted 
    * Comment Edited
    
    {{< figure src="/attachments/developerportal/project-management/epics/board/audit-trail.png" class="no-border" >}}
    
* **Revision** – 스토리의 리비전 이력을 표시합니다. 이 기능은 버전 제어에 Git을 사용하는 앱에서만 사용할 수 있습니다.

* **Comment** – 텍스트 상자에 코멘트를 입력한 후 **Post Your Comments**를 클릭하여 코멘트를 저장하고 게시할 수 있습니다.
    **Newest** 또는 **Oldest** 버튼을 클릭하여 코멘트를 정렬할 수 있습니다.

{{% alert color="info" %}}이 스토리 세부 정보 대화 상자에서 스토리를 편집할 수도 있습니다. 변경 사항이 있으면 하단의 **Save Story**를 클릭하여 저장하세요.{{% /alert %}}

## Scrum 보드 vs Kanban 보드 {#different-boards}

**보드(Board)** 페이지는 Scrum 또는 Kanban의 두 가지 워크플로를 수용하는 다양한 기능을 제공합니다. 보드 유형(Scrum 또는 Kanban) 선택에 따라 **Board** 페이지가 약간 다르게 보입니다.

{{% alert color="info" %}}[계획(Planning)](/developerportal/project-management/epics/planning/#board-type) 페이지에서 보드 유형을 선택할 수 있습니다.{{% /alert %}}

### Scrum 보드

보드 스타일이 Scrum인 경우 Scrum 워크플로를 수용하는 아래 기능을 확인할 수 있습니다.

페이지 왼쪽 상단에 현재 Sprint 이름, Sprint 종료 시기, 스토리 및 포인트 수, Sprint 목표가 표시됩니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/scrum-board.png" class="no-border" >}}

페이지의 주요 영역은 현재 Sprint의 모든 스토리 개요를 제공합니다. Studio Pro에서 변경 사항을 커밋할 때 [커밋](/refguide/commit-dialog/) 대화 상자에서 현재 Sprint의 스토리에 커밋을 연결할 수 있습니다.

{{% alert color="info" %}}현재 Sprint를 편집하거나 종료하려면 [계획(Planning)](/developerportal/project-management/epics/planning/#scrum-planning) 페이지로 이동하여 오른쪽 상단의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하고 해당 항목을 선택하세요.{{% /alert %}}

### Kanban 보드

보드 유형이 Kanban인 경우 페이지 왼쪽 상단에 스토리 수와 총 포인트가 표시됩니다.

{{< figure src="/attachments/developerportal/project-management/epics/board/kanban-stories-story-points.png" class="no-border" >}}

주요 영역은 팀이 작업 중인 모든 스토리의 개요를 제공합니다.
