---
title: "아카이브 스토리"
linktitle: "아카이브"
url: /developerportal/project-management/epics/archive/
weight: 40
description: "Epics의 아카이브(Archive) 페이지를 설명합니다."
---
## 소개

Sprint를 완료할 때마다 **Done** 상태인 모든 스토리가 자동으로 아카이브됩니다. 다음을 수행하여 스토리와 스윔레인을 수동으로 아카이브할 수도 있습니다:

* **Board** 페이지의 [스토리 카드](/developerportal/project-management/epics/board/#story-card) 또는 [스윔레인](/developerportal/project-management/epics/board/#swimlane) 오른쪽 상단의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Archive**를 선택합니다.
* **Planning** 페이지의 [행](/developerportal/project-management/epics/planning/) 끝에 있는 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Archive**를 선택합니다.

아카이브된 모든 스토리는 **Archived** 페이지로 이동됩니다.

## 아카이브된 스토리

**Archive** 페이지는 아카이브된 모든 스토리를 표시합니다.

 아카이브된 스토리에 대한 다음 세부 정보를 확인할 수 있습니다:

* 고유 스토리 ID – 클릭하면 스토리 세부 정보가 표시됩니다.
* 스토리 제목 – 클릭하면 스토리 세부 정보가 표시됩니다.
* 스토리가 속한 Sprint – 클릭하면 [아카이브된 Sprint 세부 정보](#archived-sprint-details)가 표시됩니다.
* 연결된 Epic – 클릭하면 Epic 세부 정보가 표시됩니다.
* 아카이브 날짜 및 시간 – 클릭하면 스토리 세부 정보가 표시됩니다.

아카이브된 스토리에 피드백 항목이 연결된 경우 보라색 아이콘이 함께 표시됩니다.

{{< figure src="/attachments/developerportal/project-management/epics/archive/archive.png" class="no-border" >}}

페이지 상단에서 스토리 제목, 태그, Epic 이름, 스토리 ID를 기반으로 검색 상자에서 스토리를 검색할 수 있습니다.

페이지 오른쪽 상단의 **Export to Excel**을 클릭하여 아카이브된 모든 스토리를 Excel 파일로 [내보낼](#export-archived-stories) 수 있습니다.

## 아카이브된 Sprint 세부 정보 {#archived-sprint-details}

**Archived** 페이지에서 아카이브된 스토리 행의 Sprint 이름을 클릭하면 해당 Sprint의 다음 세부 정보를 확인할 수 있습니다:

* Sprint 이름
* Sprint 아카이브 시기
* Sprint 시작 및 종료 시기
* Sprint 요약
    * 완료된 스토리 수
    * 미완성 스토리 수
    * 완료된 포인트 분석
* Sprint 목표
* Sprint 목표 달성 여부
* Sprint를 아카이브한 사람(**Archived by**에 표시)
* 완료된 스토리(**Completed Stories**에 표시)
* 완료되지 않은 스토리(**Incomplete Stories**에 표시)

## 아카이브된 스토리 내보내기 {#export-archived-stories}

**Archive** 페이지의 오른쪽 상단에서 **Export to Excel** 버튼을 찾을 수 있습니다. 이를 통해 아카이브된 모든 스토리를 Excel 파일로 내보낼 수 있습니다. 다음 단계를 따르세요:

1. **Export to Excel**을 클릭하세요. **Excel Export** 대화 상자가 열립니다.
2. **Export to Excel**을 클릭하여 내보낸 데이터를 다운로드하세요.
3. 다운로드된 파일이 저장된 폴더로 이동하여 Excel 파일을 여세요. Excel 파일에서 다음 열을 확인할 수 있습니다:
   * **Depth** – **+**는 스토리, **++**는 작업을 나타냅니다. 작업은 속하는 스토리 바로 아래에 있습니다.
   * **UUID** – 스토리에 대해 자동 생성된 범용 고유 식별자입니다.
   * **Story id** – Epics에서 스토리의 고유 ID입니다.
   * **Title** – 스토리의 제목입니다.
   * **Assigned to** – 스토리가 할당된 사람을 표시합니다.
   * **Archived by** – 스토리를 아카이브한 사람을 표시합니다.
   * **Description** – 스토리의 설명입니다.
   * **Story type** – 스토리가 **Feature**인지 **Bug**인지 지정합니다.
   * **Story points** – 스토리 포인트를 표시합니다.
   * **Epic id** – Epics에서 스토리가 연결된 Epic의 고유 ID입니다.
   * **Tags** – 스토리의 태그를 표시합니다.
   * **Archived date** – Sprint가 아카이브된 날짜를 표시합니다.
   * **Sprint name** – 스토리가 속한 Sprint 이름을 표시합니다.
   * **Sprint start** – Sprint가 시작된 시기를 표시합니다.
   * **Sprint end** – Sprint가 종료된 시기를 표시합니다.
