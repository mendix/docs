---
title: "계획"
url: /developerportal/project-management/epics/planning/
weight: 20
description: "Epics의 계획(Planning) 페이지를 설명합니다. 이 페이지는 Scrum 워크플로를 사용하는지 Kanban 워크플로를 사용하는지에 따라 다르게 보입니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---
## 소개

**계획(Planning)** 페이지는 모든 스토리를 표시합니다.

**Planning** 페이지의 주요 영역은 다양한 카테고리의 모든 스토리를 나열합니다. 각 행은 스토리를 나타냅니다.

{{< figure src="/attachments/developerportal/project-management/epics/planning/story-kanban.png" class="no-border" >}}

각 행은 스토리에 대한 다음 정보를 표시합니다:

* 스토리가 버그인지 기능인지
* 스토리에 피드백 항목이 연결되어 있는지
* 고유 스토리 ID
* 스토리 제목
* 연결된 Epic
* 태그
* 코멘트 수
* 작업 수
* 스토리 포인트
* 스토리 담당자

페이지 왼쪽 상단에서 검색 상자를 사용하여 스토리 제목, 태그, Epic 이름, 담당자(미할당 스토리 포함), 스토리 유형(*bug* 또는 *feature* 입력) 및 스토리 ID를 기반으로 스토리를 검색할 수 있습니다. 필터와 함께 검색 상자를 사용할 수 있습니다.

페이지 오른쪽 상단에서 두 개의 버튼을 확인할 수 있습니다:

* **Create Story** – 클릭하면 새 스토리를 생성할 수 있습니다.
    Maia를 사용하여 스토리를 생성할 수도 있습니다. [Maia로 스토리 생성 및 개선](#create-with-maia) 섹션을 참조하세요.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – 클릭하면 다음 옵션이 표시됩니다:
    * **Create Epic** – Epic을 생성할 수 있습니다.
    * **Edit Sprint** ([Scrum 워크플로](#scrum-planning)에서만 사용 가능) – 현재 Sprint를 편집할 수 있습니다.
    * **End Sprint** ([Scrum 워크플로](#scrum-planning)에서만 사용 가능) – 현재 Sprint를 종료할 수 있습니다.
    * **Start Sprint** ([Scrum 워크플로](#scrum-planning)에서만 사용 가능) – 새 Sprint를 시작할 수 있습니다.
    * **Import Stories** – 클릭하면 Excel 파일에서 스토리를 가져올 수 있습니다.
        * 자세한 내용은 [스토리 가져오기](#import-stories) 섹션을 참조하세요.
    * **Board Settings** – 클릭하면 보드 설정을 구성할 수 있습니다.
        * 자세한 내용은 [보드 설정](#settings) 섹션을 참조하세요.

## Maia로 스토리 생성 및 개선 {#create-with-maia}

Maia로 스토리를 생성하려면 다음 단계를 따르세요:

1. 앱 [설정](/developerportal/general-settings/#maia-settings) 페이지에서 Maia를 활성화하세요.
2. **Create Story**를 클릭한 후 {{% icon name="sparkles" %}}**Create with Maia**를 클릭하세요.
   Maia가 활성화된 경우 **Create Story with Maia** 창이 표시됩니다.
   Maia가 활성화되지 않은 경우 **Enable Maia** 창에서 즉시 활성화할 수 있는 옵션이 제공됩니다.
3. 입력을 입력한 후 **Generate Story**를 클릭하세요.
4. Maia가 제공한 제안을 확인하세요. 제안에 동의하면 **Apply to Story**를 클릭하거나 다시 생성할 수 있습니다.

기존 스토리를 Maia를 사용하여 개선하려면 스토리를 열고 **Refine with Maia** ({{% icon name="sparkles" %}})를 클릭하세요.

## 스토리 선택, 이동, 아카이브 및 삭제

스토리를 선택하려면 마우스 포인터가 가리키는 손 모양이 될 때 스토리의 체크박스를 선택하세요:

 {{< figure src="/attachments/developerportal/project-management/epics/planning/pointing-hand.png" width="30px" class="no-border" >}}

{{% alert color="info" %}}키보드 단축키를 사용하여 여러 스토리를 선택할 수도 있습니다. 자세한 내용은 [키보드 단축키](#keyboard-shortcuts) 섹션을 참조하세요.{{% /alert %}}

[스토리 세부 정보](/developerportal/project-management/epics/board/#story-details) 페이지를 열려면 마우스 포인터가 펼친 손 모양이 될 때 스토리 행을 클릭하세요:

{{< figure src="/attachments/developerportal/project-management/epics/planning/open-hand.png" width="30px" class="no-border" >}}

스토리를 이동하려면 스토리를 다른 카테고리로 드래그하세요.

여러 스토리를 이동하려면 스토리를 선택하고 페이지 하단의 드롭다운 목록에서 이동할 카테고리 이름을 선택한 후 **Move**를 클릭하세요.

{{< figure src="/attachments/developerportal/project-management/epics/planning/move-multiple-stories.png" class="no-border" >}}

스토리를 [아카이브](/developerportal/project-management/epics/archive/)하거나 삭제하려면 행 끝의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 해당 옵션을 선택하세요.

{{< figure src="/attachments/developerportal/project-management/epics/planning/archive-delete-story-kanban.png" class="no-border" >}}

여러 스토리를 아카이브하거나 삭제하려면 스토리를 선택한 후 페이지 하단의 해당 옵션을 클릭하세요.

#### 스토리 선택을 위한 키보드 단축키 {#keyboard-shortcuts}

Windows에서는 다음 키보드 단축키를 사용하여 **Planning** 페이지에서 스토리를 선택할 수 있습니다:

| 작업                              | Windows                        | Mac                               |
| ----------------------------------- | ------------------------------ | --------------------------------- |
| 모든 스토리 선택                  | <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>Ctrl</kbd> + <kbd>A</kbd>    |
| 모든 스토리 선택 취소 | <kbd>Ctrl</kbd> + <kbd>D</kbd> | <kbd>Command</kbd> + <kbd>D</kbd> |
| 여러 스토리 선택             | <kbd>Ctrl</kbd> + click        | <kbd>Command</kbd> + click        |
| 범위 스토리 선택           | <kbd>Shift</kbd> + click       | <kbd>Shift</kbd> + click          |

## Scrum 계획 vs Kanban 계획 {#different-plannings}

**Planning** 페이지는 Scrum 또는 Kanban의 두 가지 워크플로를 수용하는 다양한 기능을 제공합니다. 보드 유형 선택(Scrum 또는 Kanban)에 따라 **Board** 페이지가 약간 다르게 보입니다.

{{% alert color="info" %}}[계획(Planning)](/developerportal/project-management/epics/planning/#board-type) 페이지에서 보드 유형을 선택할 수 있습니다.{{% /alert %}}

### Scrum 계획 {#scrum-planning}

보드 스타일이 Scrum인 경우 Scrum 워크플로를 수용하는 아래 기능을 확인할 수 있습니다.

활성 Sprint가 있는 경우 왼쪽 상단에서 Sprint 이름, 종료 시기, 스토리 및 포인트 수를 확인할 수 있습니다.
목표 아이콘 위에 마우스를 올리면 Sprint 목표를 확인할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/epics/planning/scrum-planning.png" class="no-border" >}}

페이지의 주요 영역에서 스토리는 **Active Sprint**(활성 Sprint가 있는 경우), **Next Sprint**, **Refinement**, **Backlog** 카테고리로 그룹화됩니다.

오른쪽 상단에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하면 다음 Scrum 항목을 찾을 수 있습니다:

* **Start Sprint** – 새 Sprint를 시작할 수 있습니다. Sprint가 생성되면 **Next Sprint**의 모든 항목이 자동으로 **Active Sprint**로 이동됩니다.
    현재 실행 중인 Sprint가 없을 때만 사용 가능합니다.
* **Edit Sprint** – 현재 Sprint를 편집할 수 있습니다.
    현재 실행 중인 Sprint가 있을 때만 사용 가능합니다.
* **End Sprint** – 현재 Sprint를 종료할 수 있습니다. Sprint를 종료하면 시스템이 해당 Sprint에서 완료된 스토리 수를 보여줍니다. 완료된 모든 스토리는 자동으로 아카이브되며, 미완성 스토리의 위치를 결정할 수 있습니다.
    현재 실행 중인 Sprint가 있을 때만 사용 가능합니다.

### Kanban 계획 {#kanban-planning}

보드 유형이 Kanban인 경우 스토리는 **To Do**, **Refinement**, **Backlog** 카테고리로 그룹화됩니다.
각 카테고리 상단에서 총 스토리 수와 포인트를 확인할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/epics/planning/kanban-planning.png" class="no-border" >}}

## 스토리 가져오기 {#import-stories}

다음과 같이 Excel 파일을 사용하여 Epics로 스토리를 가져올 수 있습니다:

1. **Planning** 페이지의 오른쪽 상단에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Import Stories**를 클릭하세요.
   **Import Stories From Excel** 대화 상자가 열립니다.

2. **Download**를 클릭하여 Excel 파일 템플릿을 다운로드하세요.

   {{% alert color="warning" %}}오류를 방지하기 위해 Mendix는 이 Excel 파일 템플릿을 사용하여 스토리를 가져올 것을 권장합니다.{{% /alert %}}

3. Excel 파일을 엽니다. 다음과 같이 스토리 데이터를 입력하세요:

   * **Depth** – 스토리는 **+**, 작업은 **++**를 입력하세요. 작업은 속하는 스토리 바로 아래에 추가해야 합니다.

   * **Name** – 스토리 이름을 입력하세요. 작업의 경우 이 열을 비워두세요.

   * **Epic** – 스토리가 Epic에 연결된 경우 Epic ID를 입력하세요. 작업의 경우 이 열을 비워두세요.

     {{% alert color="warning" %}}Excel 파일에 입력하는 Epic ID는 이미 Epics에 존재해야 합니다.{{% /alert %}}

   * **Story Type** – 스토리가 **Feature**인지 **Bug**인지 지정하세요. 작업의 경우 이 열을 비워두세요.

   * **Story Points** – 스토리 포인트를 입력하세요. 작업의 경우 이 열을 비워두세요.

   * **Description** – 스토리 설명을 입력하세요. 작업의 경우 이 열을 비워두세요.

   * **Tags** – 스토리의 태그를 입력하세요. 쉼표로 태그를 구분하세요. 작업의 경우 이 열을 비워두세요.

     {{% alert color="warning" %}}Excel 파일에 입력하는 모든 태그는 이미 Epics에 존재해야 합니다.{{% /alert %}}

4. Excel 파일을 저장하세요.

5. **Import Stories from Excel** 대화 상자로 돌아가세요.

6. **Browse**를 클릭하여 Excel 파일로 이동한 후 선택하세요.

7. **Continue**를 클릭하세요. 대화 상자에 가져올 모든 스토리의 미리보기가 표시됩니다.

8. **Continue**를 클릭하여 스토리를 가져오세요. 가져오기가 완료되었음을 알리는 팝업 창이 표시됩니다.

가져온 모든 스토리를 **Backlog**에서 찾을 수 있습니다.

## 스토리 내보내기 {#export-stories}

다음과 같이 **Planning** 페이지의 스토리를 Excel 파일로 내보낼 수 있습니다:

1. **Planning** 페이지의 오른쪽 상단에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Export Stories**를 클릭하세요.
2. 스토리를 내보낼 위치를 선택하세요.
3. **Continue**를 클릭하여 Excel 파일의 미리보기를 확인하세요.
4. **Export to Excel**을 클릭하세요.

## 보드 설정 {#settings}

**Planning** 페이지의 오른쪽 상단에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하고 **Board Settings**를 선택하면 다음 탭이 있는 대화 상자가 열립니다:

* **Manage Tags**
* **Board Type**
* **Toast Settings**

{{< figure src="/attachments/developerportal/project-management/epics/planning/board-settings.png" class="no-border" >}}

### 태그 관리 {#manage-tags}

이 탭에서 태그를 추가, 이름 변경, 삭제하고 태그 색상을 변경할 수 있습니다. 여기서의 변경 사항은 앱의 모든 태그에 영향을 미칩니다.

#### 사용 가능한 작업

* 태그를 추가하려면 **+Add Tag**를 클릭하고 이름을 입력한 후 색상을 선택하고 **Save** {{% icon name="checkmark-circle" %}}를 클릭하여 저장하세요.

* 태그 이름을 변경하려면 태그 이름을 더블 클릭하고 텍스트 상자에서 이름을 변경한 후 텍스트 상자 외부를 클릭하여 저장하세요.

* 태그를 삭제하려면 태그 행 위에 마우스를 올리고 행 끝에 나타나는 **Cancel** 버튼 ({{% icon name="remove" %}})을 클릭하세요.

* 태그 색상을 변경하려면 현재 색상을 클릭한 후 대화 상자에서 새 색상을 선택하세요.

### 보드 유형 {#board-type}

이 탭에서 Scrum 워크플로와 Kanban 워크플로 간에 전환할 수 있습니다. 선택한 워크플로에 따라 [보드(Board)](/developerportal/project-management/epics/board/#different-boards) 페이지와 [계획(Planning)](#different-plannings) 페이지의 모습이 결정됩니다.

### 토스트 설정

이 탭에서 화면을 따라 표시되는 토스트 알림을 활성화하거나 비활성화할 수 있습니다.

{{< figure src="/attachments/developerportal/project-management/epics/planning/toast-notification.png" width="500px" class="no-border" >}}
