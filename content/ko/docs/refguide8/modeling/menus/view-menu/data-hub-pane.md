---
title: "Data Hub 창"
url: /refguide8/data-hub-pane/
weight: 15
description: "Mendix Studio Pro의 Data Hub 창에 대해 설명합니다."
---

## 소개

[Catalog](/catalog/)는 조직 내 다양한 애플리케이션에서 사용 가능한 데이터 소스를 Mendix 앱에 통합할 수 있게 해줍니다. 이는 Catalog에 등록된 공유 데이터 세트를 사용하여 새 앱을 만들 수 있음을 의미합니다. Studio Pro에서는 **Data Hub** 창을 통해 Catalog의 통합 기능을 사용할 수 있습니다.

**Data Hub** 창에서 Catalog를 검색하여 프로젝트에서 사용할 수 있는 데이터 소스를 발견할 수 있습니다. 이 창을 통해 등록된 OData 서비스에 노출된 Entity를 앱의 Domain Model에 추가할 수 있습니다. 이러한 Entity는 [외부 Entity](/refguide8/external-entities/)라고 하며, 원본 앱의 Entity에 연결된 데이터에 대한 연결을 가능하게 합니다.

**Data Hub** 창을 표시하려면 **View** > **Data Hub**를 클릭하십시오:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/data-hub-pane-empty.png" alt="data-hub-pane"   width="300"  class="no-border" >}}

## Domain Model에서의 Data Hub 창

Data Hub 창은 Catalog에서 앱에 드래그하여 사용할 수 있는 Entity를 검색하고, 현재 모델에서 사용 중인 외부 Entity 및 관련 서비스를 표시하는 데 사용됩니다.

### Data Hub 검색

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/data-hub-pane.png"   width="300"  class="no-border" >}}

창에서 다음 기능을 사용할 수 있습니다:

* [검색](#search) – Catalog에서 검색하려면 영숫자 문자의 검색 문자열을 입력하십시오. 검색은 Catalog의 서비스, Entity, Attribute, Association 및 설명에 대해 수행됩니다.

* [필터](#search) – 기본적으로 검색은 **Production** 환경의 자산에 대해 수행됩니다. **Filter** 아이콘을 클릭하여 **Test**, **Acceptance**, Mendix Free App 환경 **Sandbox** 등의 **개발 환경을 표시**할 수 있습니다.

* [검색 결과](#viewing) – 검색 결과는 검색 문자열을 충족하는 Catalog의 모든 요소를 표시합니다. 각 "히트"에 대해 서비스 이름, 서비스 버전, 서비스가 배포된 환경, 검색 문자열과 일치하는 요소가 표시됩니다. Attribute 또는 Association이 검색 기준을 충족하면 표시됩니다. 검색 결과에서 Domain Model로 드래그하면 [외부 Entity](/refguide8/external-entities/)로 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/external-entity.png" class="no-border" >}}

현재 Domain Model에서 사용 중인 서비스와 Entity는 검색 결과에 녹색 체크 표시로 표시됩니다.

### Data Hub Project 창

**Data Hub** 창에 검색 문자열이 지정되지 않은 경우 **Project** 창이 표시됩니다. 이는 현재 프로젝트에서 사용된 소비 서비스와 외부 Entity를 표시합니다. Entity, Association 및 Attribute 목록은 검색 결과와 동일하게 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/project-section.png" alt="Project Section"   width="300"  class="no-border" >}}

프로젝트 모델에 Entity를 추가하려면 [프로젝트에 외부 Entity 추가](/refguide8/external-entities/#adding-external-entities)를 참조하십시오.

## Catalog 검색 {#search}

검색어를 입력하면 검색 문자열을 충족하는 Catalog의 모든 항목이 검색 결과에 나열됩니다. 여기에는 Data Hub 창에 표시되지 않는 서비스, Entity 및 Attribute 설명의 단어가 포함됩니다. 자세한 내용은 [Catalog 자산 세부 정보](/catalog/manage/search/#search-details)를 참조하십시오.

### 와일드카드 검색

검색 영역에 `*`를 입력하여 와일드카드 검색을 수행할 수 있습니다.

{{% alert color="info" %}}
검색 문자열은 최소 3개의 영숫자 문자여야 합니다. Catalog에서 "빈" 검색을 수행하기 위한 와일드카드 문자 `*`를 제외하고는 구두점을 검색어의 일부로 사용할 수 없습니다. 와일드카드를 다른 문자와 조합하여 사용할 수 없습니다. 자세한 내용은 [등록된 자산 검색 방법](/catalog/search/)을 참조하십시오.
{{% /alert %}}

### 서비스 환경

기본적으로 검색은 **Production** 환경의 자산에 대해 수행됩니다. **Test**, **Acceptance**, Mendix Free App 환경 **Sandbox** 등 모든 다른 환경을 포함하려면 **Filter** 아이콘을 클릭하고 **Show development environments**를 선택하십시오:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/filter-icon.png" alt="Filter Icon"   width="300"  class="no-border" >}}

{{% alert color="info" %}}
**Show development environments**가 선택되면 이후의 모든 검색 결과에도 비프로덕션 환경의 결과가 포함됩니다.
{{% /alert %}}

## 검색 결과 및 Project 창의 정보 {#viewing}

다음 정보가 표시됩니다.

### 서비스

검색 결과 및 Project 창은 서비스 수준에서 다음을 표시합니다:

* **서비스 이름**

* **애플리케이션 아이콘** (예: Mendix, SAP, Siemens Teamcenter 또는 위의 스크린샷에 표시된 것처럼 커스텀 아이콘)

* **서비스 버전**

* 비프로덕션 환경의 **환경 이름**

    {{% alert color="info" %}}비프로덕션 환경의 이름만 표시됩니다. **Production**의 서비스는 환경 이름을 표시하지 않습니다. {{% /alert %}}

* 서비스 또는 Entity가 프로젝트에서 사용 중인 경우 **녹색 체크 표시**. 사용 중인 서비스를 마우스 오른쪽 버튼으로 클릭하면 다음을 수행할 수 있습니다:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/data-hub-pane-menu.png" alt="info on a Service"   width="250"  class="no-border" >}}

    * **View in Catalog** – Catalog의 **Data Source Details** 페이지로 이동합니다
    * **Go to connection settings** – [소비 OData 서비스](/refguide8/consumed-odata-service/) 문서를 엽니다

* Catalog에서 사용 중인 서비스의 다른 버전이 사용 가능함을 나타내는 **파란색** **Update Service** 아이콘. 클릭하면 프로젝트에서 사용 중인 서비스를 현재 사용 가능한 계약으로 업데이트합니다:

    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/data-hub-pane-update.png" alt="Data Hub Pane update" class="no-border" >}}

    {{% alert color="info" %}}OData 서비스 업데이트가 사용 가능한 경우, 나열된 Entity는 해당 버전의 OData 서비스에서 사용 가능한 Entity입니다. 이러한 Entity는 프로젝트에서 사용 중인 *현재* 계약에 이러한 Entity가 없으므로 Domain Model로 드래그할 수 없음을 나타내기 위해 "회색으로 표시"됩니다. **Update** 화살표를 클릭하여 검색 결과에 표시된 버전으로 계약을 업데이트해야 합니다. {{% /alert %}}

    {{% alert color="info" %}}OData 서비스에 대해 표시되는 버전 번호는 서비스 엔드포인트에서 Catalog에서 사용 가능한 최신 버전입니다. 위의 예에서 **Theatre_service**의 버전 1.0.11이 현재 프로젝트에서 사용 중이지만, 버전 **1.0.12**가 현재 Catalog에서 사용 가능합니다. 검색 결과는 새 서비스에서 사용 가능한 Entity를 표시하지만(로컬에서 사용 중인 Entity도 표시) 회색으로 표시되어 로컬 서비스가 이 버전으로 **업데이트**될 때까지 선택할 수 없습니다.{{% /alert %}}

* 서비스에 대한 추가 세부 정보를 보고 Catalog의 [Service Details](/catalog/manage/search/#search-details) 화면으로 직접 이동하는 링크가 있는 **정보 아이콘**:

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/data-hub-pane-info.png" alt="Data Hub Pane Information"   width="250"  class="no-border" >}}

### Entity, Attribute 및 Association {#association-attributes}

검색 문자열을 충족하는 Entity, Attribute 및 Association이 검색 결과에 나열됩니다.

목록의 모든 서비스에 대해 **:Show details**를 클릭하여 해당 서비스의 노출된 Entity와 Association 및 Attribute의 전체 목록을 볼 수 있습니다.

{{% alert color="info" %}}Mendix 모델에서 지원되지 않는 Association 및 Attribute는 선택 불가능(회색)으로 표시되며, Domain Model로 드래그할 때 포함되지 않습니다.{{% /alert %}}

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/expand-service-list.png" alt="Data Hub Pane Information"   width="250"  class="no-border" >}}

### Entity

Entity를 마우스 오른쪽 버튼으로 클릭하고 **View in Catalog**를 선택하면 [Catalog](/catalog/)의 Entity 세부 정보 페이지로 이동합니다.

사용 중인 Entity를 마우스 오른쪽 버튼으로 클릭하고 **Go to entity**를 선택하면 Domain Model의 Entity로 이동합니다.

### Association

서비스에 노출된 Association은 알파벳 순서로 Attribute 앞에 나열됩니다. **+**를 클릭하면 Association이 연결된 Entity를 볼 수 있습니다.

동일한 Entity 간의 **다중 Association**은 단일 Association 앞에 표시됩니다.

다음 예에서 Entity **Customer**는 Entity **Order**와 다중 Association을 가지고 있지만, 이러한 Association은 지원되지 않으며 모델에서 사용할 수 없습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/multiple-assocs.png" alt="multiple associations"   width="250"  class="no-border" >}}

### Attribute

서비스의 Attribute는 알파벳 순서로 나열됩니다. 사용 중인 Entity의 Attribute를 마우스 오른쪽 버튼으로 클릭하고 **Go to attribute**를 선택하면 Domain Model의 Attribute로 이동합니다.

위의 예에서 **Addresses**와 **FavoriteColors** 두 개의 Attribute가 지원되지 않으므로 모델에 포함되지 않습니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/data-hub-pane/unsupported-attributes.png" alt="multiple associations"   width="300"  class="no-border" >}}

## 더 보기

* [Catalog](/catalog/)
* [External Entities](/refguide8/external-entities/)
* [Consumed OData Service](/refguide8/consumed-odata-service/)
* [등록된 자산을 소비하는 방법](/catalog/consume/)
