---
title: "이니셔티브 개요"
url: /developerportal/portfolio-management/initiatives-overview/
weight: 5
description: "Mendix 포트폴리오 관리 앱의 이니셔티브 개요(Initiatives Overview) 페이지를 설명합니다."
---

## 소개

포트폴리오 관리 앱에서 "이니셔티브"는 비즈니스 목표 또는 전략적 목표를 나타내며 여러 앱에 걸쳐 있을 수 있습니다. 이니셔티브는 여러 앱 또는 큰 앱의 작은 일부와 관련될 수 있습니다. 진행 추적을 위해 Mendix는 가능할 때마다 앱을 더 작은 이니셔티브로 분할할 것을 권장합니다.

**이니셔티브 개요(Initiatives Overview)** 페이지는 이 포트폴리오의 모든 이니셔티브에 대한 개요를 제공합니다.

{{< figure src="/attachments/developerportal/portfolio-management/initiatives-overview/initiatives-overview.png" >}}

상단의 검색 상자에서 이니셔티브 이름으로 이니셔티브를 검색할 수 있습니다.

오른쪽 상단에서 드롭다운 목록을 사용하여 [보기를 변경](#change-view)할 수 있습니다. {{% icon name="office-sheet" %}} 아이콘을 클릭하여 [이니셔티브를 내보내고 가져올](/developerportal/portfolio-management/export-import-initiatives/) 수 있습니다. **Filters**를 클릭하면 이니셔티브를 필터링할 수 있으며 필터는 새 보기로 변경해도 유지됩니다. **Create Initiative** 버튼을 클릭하여 [새 이니셔티브를 생성](#create-new-initiative)할 수 있습니다.

## 새 이니셔티브 생성 {#create-new-initiative}

{{% alert type="info" %}}포트폴리오 관리자와 기여자 모두 새 이니셔티브를 생성할 수 있습니다. 뷰어만 이 작업을 수행할 수 없습니다. 역할 및 권한에 대한 자세한 내용은 *접근 관리*의 [멤버](/developerportal/portfolio-management/access-management/#members) 섹션을 참조하세요.{{% /alert %}}

새 이니셔티브를 생성하고 세부 정보를 추가하려면 아래 단계를 따르세요.

1. [이니셔티브를 생성합니다.](#create-initiative)
2. [일반 정보를 추가합니다.](#add-general-information)
3. [이니셔티브에 Epic을 연결합니다.](#link-epics)
4. [계획 정보를 추가합니다.](#add-planning-information)
5. [우선순위 정보를 추가합니다.](#add-prioritization-information)
6. [예상 가치를 추가합니다.](#add-estimated-value)
7. [코멘트를 추가합니다.](#add-comments)
8. [이니셔티브 세부 정보를 저장합니다.](#save-details)

### 이니셔티브 생성 {#create-initiative}

새 이니셔티브를 생성하려면 다음 단계를 따르세요:

1. **Initiatives Overview** 페이지로 이동합니다.
2. **Create Initiative**를 클릭합니다.
3. **Initiative Name**과 이니셔티브가 위치한 **Stage**를 입력합니다.
4. **Create Initiative**를 클릭합니다. 이니셔티브가 생성되어 **Initiatives Overview** 페이지에 나타납니다. 새 이니셔티브의 세부 정보를 추가할 수 있는 **Edit Initiative** 사이드 패널이 페이지 오른쪽에 열립니다.

### 일반 정보 추가 {#add-general-information}

이니셔티브에 일반 정보를 추가하려면 **Edit Initiative** 사이드 패널에서 이니셔티브의 상태, 완료 비율, 태그, 설명, 연결된 앱, 소유자, 단계, 부서, 위치, 국가 및 사용 사례를 설정하세요.

### Epic을 이니셔티브에 연결 {#link-epics}

사용하는 프로젝트 관리 도구에 따라 [Mendix Epics](/developerportal/project-management/epics/) 또는 [Jira](/developerportal/portfolio-management/integrate-with-jira/)에서 Epic을 이니셔티브에 연결할 수 있습니다.

### 계획 정보 추가 {#add-planning-information}

**Edit Initiative** 사이드 패널에서 **Planning**을 클릭하여 이 섹션의 모든 필드를 표시합니다. **Intake Date**, **Start Date**, **Go-Live date**를 설정하세요.

### 우선순위 정보 추가 {#add-prioritization-information}

**Edit Initiative** 사이드 패널에서 **Prioritization**을 클릭하여 이 섹션의 모든 필드를 표시합니다. 필드의 값을 설정하세요.

### 예상 가치 추가 {#add-estimated-value}

**Edit Initiative** 사이드 패널에서 **Estimated Value**를 클릭하여 이 섹션의 모든 필드를 표시합니다.

### 코멘트 추가 {#add-comments}

코멘트를 추가하려면 **Edit Initiative** 사이드 패널에서 **Comments**를 클릭한 후 코멘트를 추가하고 **Post Comment**를 클릭하세요.

### 이니셔티브 세부 정보 저장 {#save-details}

**Edit Initiative** 사이드 패널 하단에서 **Save**를 클릭하세요.

## 보기 변경 {#change-view}

**Initiatives Overview** 페이지에서 보기를 변경하려면 오른쪽 상단의 드롭다운 목록을 클릭한 후 다음 보기 중 하나를 선택하세요:

* [Kanban 보기](#kanban-view)
* [목록 보기](#list-view)
* [WSJF 우선순위](#wsjf) 또는 [RICE 우선순위](#rice)
* [계획 보기](#planning-view)

### Kanban 보기 {#kanban-view}

Kanban 보기에서 모든 이니셔티브는 이니셔티브 카드로 표시되며 다른 열에 분류됩니다. 열은 이니셔티브가 현재 위치한 단계를 나타냅니다.

### 목록 보기 {#list-view}

목록 보기에서 이니셔티브는 목록으로 표시됩니다.

{{< figure src="/attachments/developerportal/portfolio-management/list-view.png" >}}

### WSJF 우선순위 {#wsjf}

{{% alert type="info" %}}WSJF와 각 구성 요소에 대한 자세한 내용은 *포트폴리오 관리에서 지원하는 우선순위 모델*의 [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) 섹션을 참조하세요.{{% /alert %}}

### RICE 우선순위 {#rice}

{{% alert type="info" %}}RICE와 각 구성 요소에 대한 자세한 내용은 *포트폴리오 관리에서 지원하는 우선순위 모델*의 [RICE](/developerportal/portfolio-management/prioritization-models/#rice) 섹션을 참조하세요.{{% /alert %}}

### 계획 보기 {#planning-view}

계획 보기는 계획, 조정 및 의사 결정을 돕기 위해 타임라인에 이니셔티브의 명확한 시각적 표현을 제공합니다.

{{< figure src="/attachments/developerportal/portfolio-management/planning-view.png" >}}

## 이니셔티브 세부 정보 보기 {#view-initiative}

**Initiatives Overview** 페이지에서 이니셔티브를 클릭하면 오른쪽에 이니셔티브 세부 정보를 보여주는 사이드 패널이 열립니다.

{{< figure src="/attachments/developerportal/portfolio-management/side-pane.png" >}}

## 이니셔티브 편집 또는 삭제 {#edit-delete-initiative}

이니셔티브를 편집하거나 삭제하려면 **Initiatives Overview** 페이지에서 해당 이니셔티브의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Edit** 또는 **Delete**를 선택하세요.

## 이니셔티브 아카이브 {#archive-initiative}

이니셔티브가 완료되었거나 현재 시점에 관련이 없는 경우 이니셔티브를 아카이브할 수 있습니다.

이니셔티브를 아카이브하려면 다음 단계를 수행하세요:

1. **Initiatives Overview** 페이지에서 해당 이니셔티브의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Archive**를 선택하세요.

2. 열리는 대화 상자에서 이니셔티브가 아카이브된 이유를 선택하세요: **Completed**, **Canceled**, **On Hold** 또는 **Other Reason**. 그런 다음 **Archive**를 클릭하세요.

   {{< figure src="/attachments/developerportal/portfolio-management/archive-dialog-box.png" >}}

이니셔티브가 아카이브되면 [아카이브](/developerportal/portfolio-management/archive/) 페이지에서 찾을 수 있습니다.

## 이니셔티브 내보내기 및 가져오기

**Initiatives Overview** 페이지에서 이니셔티브를 가져오고 내보낼 수 있습니다. 자세한 내용은 [이니셔티브 내보내기 및 가져오기](/developerportal/portfolio-management/export-import-initiatives/)를 참조하세요.
