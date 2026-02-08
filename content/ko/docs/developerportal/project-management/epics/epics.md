---
title: "Epics 개요"
linktitle: "Epics"
url: /developerportal/project-management/epics/epics/
weight: 30
description: "Epics의 Epics 페이지를 설명합니다."
---

## 소개

**Epics** 페이지는 현재 앱의 모든 Epic 개요를 제공합니다. 오른쪽 상단의 필터를 사용하여 **All**, **Completed**, **In Progress** 또는 **Not Started** 상태별로 Epic을 필터링할 수 있습니다. **Create Epics** 버튼을 클릭하면 새 Epic을 생성할 수 있습니다.

각 행은 Epic을 나타냅니다.

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic.png" class="no-border" >}}

각 행은 Epic에 대한 다음 세부 정보를 표시합니다:

* 접두사와 번호로 구성된 고유 ID
* 제목
* 태그
* Epic 담당자
* 진행률 막대
* Epic에 대해 완료된 스토리 수

행을 클릭하면 [Epic 세부 정보](#epic-details) 대화 상자가 열립니다.

## Epic 세부 정보 {#epic-details}

Epic을 클릭하면 Epic 세부 정보 대화 상자가 열립니다.

오른쪽 상단에 **Copy Link** 아이콘 ({{% icon name="hyperlink" %}})과 **More Options** 아이콘 ({{% icon name="three-dots-menu-horizontal" %}})이 있습니다. **Copy Link**을 클릭하면 Epic 링크가 복사됩니다. **More Options**를 클릭하면 Epic을 삭제할 수 있는 팝업 메뉴가 열립니다.

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic-details-page-ellipsis.png" class="no-border" >}}

Epic 세부 정보 대화 상자에는 다음 항목이 표시됩니다:

* **Objective** – Epic의 설명입니다.
    * **Edit Objective**를 클릭하고 WYSIWYG 편집기에서 변경하여 Epic의 목적을 편집할 수 있습니다. 편집기는 코드 블록을 포함한 다양한 텍스트 형식을 지원합니다.
    * 편집기에서 *#*과 스토리 제목을 입력한 후 목록에서 올바른 스토리를 선택하여 스토리를 연결할 수 있습니다.
    * 편집기에서 *@*과 사람의 이름을 입력한 후 목록에서 올바른 사람을 선택할 수 있습니다. Epic을 저장하면 시스템이 태그된 사람에게 알림을 보냅니다.

* **Assign to** – [앱(Apps)](https://sprintr.home.mendix.com/)에서 앱에 접근할 수 있는 누구에게나 Epic을 할당할 수 있습니다.
* **Tags** – 태그를 추가하거나 제거할 수 있습니다.
    * 텍스트 상자에 태그를 입력하고 **Create new "[tag name]"**을 클릭하여 새 태그를 만들 수 있습니다.
    * 끝의 **Manage Tags** ({{% icon name="cog" %}})를 클릭하여 [태그를 관리](/developerportal/project-management/epics/planning/#manage-tags)할 수 있습니다.

* **Attachments** – **Add File** ({{% icon name="add" %}})를 클릭하여 첨부 파일을 추가할 수 있습니다.
* **Stories** – 이 Epic에 연결된 열린 스토리를 표시합니다.
    * **Create**를 클릭하여 Epic에서 직접 새 **Feature** 또는 **Bug** 스토리를 생성할 수 있습니다. 새 스토리는 기본적으로 백로그로 이동합니다.
    * 검색 바에 스토리 이름이나 ID를 입력한 후 **Link Story** ({{% icon name="add" %}})를 클릭하여 기존 스토리를 연결할 수 있습니다.
    * **Remove Story** ({{% icon name="remove" %}})를 클릭하여 연결된 스토리를 제거할 수 있습니다.

* **Archived Stories** – 이 Epic에 연결된 아카이브된 스토리를 표시합니다.
* **Comment** – 텍스트 상자에 코멘트를 입력한 후 **Post Your Comments**를 클릭하여 코멘트를 저장하고 게시할 수 있습니다.
    * **Newest** 또는 **Oldest** 버튼을 클릭하여 코멘트를 정렬할 수 있습니다.

{{% alert color="info" %}}이 Epic 세부 정보 대화 상자에서 Epic을 편집할 수도 있습니다. 변경 사항이 있으면 하단의 **Save Epic**을 클릭하여 저장하세요.{{% /alert %}}
