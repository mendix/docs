---
title: "앱 간 데이터 공유"
url: /refguide10/share-data/
description: "Studio Pro에서 간단한 데이터 자산을 Catalog에 게시 및 등록하고, 이 자산을 사용하는 새 앱을 만드는 방법을 설명합니다."
weight: 10
aliases:
    - /catalog/use-data-catalog.html
    - /datahub/general/share-data/index.html
    - /catalog/use-data-catalog
    - /data-hub/share-data/
    - /catalog/#share-data
    - /data-hub/data-hub-catalog/share-data/
    - /catalog/share-data/
    - /howto10/integration/share-data/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 사용 방법 문서에서는 [Catalog](https://catalog.mendix.com/)를 사용하여 다양한 소스의 데이터로 앱을 쉽게 구축하는 방법을 안내합니다. 다음 단계를 설명합니다:

* Mendix Studio Pro에서 앱 만들기
* 앱에서 엔티티(Entity)를 게시하고 Catalog에 등록하기
* Catalog를 사용하여 조직에서 자산으로 등록된 데이터 소스 탐색하기
* 이전에 게시한 등록된 자산에 연결하고 새 앱에서 사용하기
* 원본 앱에서 데이터를 변경하고 새 앱 또는 사용(consuming) 앱에서 업데이트된 내용 확인하기
* [Landscape](/catalog/manage/landscape/)에서 공유 데이터 네트워크 확인하기

## 사전 요구 사항

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하십시오:

* Mendix Studio Pro [8.14.0 이상](https://marketplace.mendix.com/link/studiopro/) 설치

## 앱 만들기 {#createapp}

Studio Pro에서 간단한 앱을 만들려면 다음 단계를 따르세요:

1. Studio Pro에서 **New App**을 클릭하고 **Blank** 앱 템플릿을 선택하세요. **App Name**에 *{yourname}CustomerServiceApp*을 입력하고 **Create app**을 선택하세요.
2. App Explorer에서 **MyFirstModule**의 **Domain model**을 더블클릭하세요.
3. **Toolbox**에서 **Entity**를 선택하고 도메인 모델로 드래그하세요.
4. 엔티티(Entity)를 더블클릭하여 속성을 열고 **Name**을 *Customer*로 설정하세요.
5. **Attributes** 탭에서 **New**를 클릭하고 다음을 수행하세요:
    1. **Add Attribute** 대화 상자에서 **Name**을 *CustomerID*로 설정하고 **Type**을 *Autonumber*로 설정하세요.
    2. **OK**를 클릭하여 속성을 만드세요.

6. 5a와 5b 단계를 반복하여 *FirstName*, *LastName*, *CompanyName*, *Address* 속성을 만들고 모두 *String* 유형으로 설정하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/entity-properties-pane.png" class="no-border" >}}

7. **OK**를 클릭하여 변경 사항을 저장하세요.
8. 엔티티(Entity)를 마우스 오른쪽 버튼으로 클릭하고 드롭다운 목록에서 **Generate overview pages**를 선택하세요.
9. **Generate pages** 대화 상자에서 **Content layout**으로 **Atlas_Default (Atlas_Core)**가 선택되어 있는지 확인하고 **OK**를 클릭하세요.
10. **Information** 팝업 대화 상자에서 **Close**를 클릭하세요.
    새 엔티티(Entity)의 개요 페이지가 **MyFirstModule**의 **OverviewPages** 폴더에 추가됩니다.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/overview-pages-for-customer-entity.png" class="no-border" >}}

11. **App Explorer**에서 **Home_Web**을 더블클릭하여 Home_Web 페이지를 여세요.
12. **App Explorer**에서 **Customer_Overview**를 Home 배너 아래의 빈 Auto-fill 컨테이너로 드래그하세요.

**Customer** 엔티티(Entity)와 이 엔티티의 세부 정보를 보고 편집할 수 있는 웹 페이지가 있는 간단한 앱을 만들었습니다.

배너 텍스트를 변경하여 홈 페이지를 추가로 커스터마이징하세요.

## Catalog에 게시하기 {#publishing}

이 엔티티(Entity)를 다른 앱에서 사용하려면 **Customer** 엔티티(Entity)를 Catalog에 등록해야 합니다. 이를 위해 Studio Pro에서 **Customer** 엔티티(Entity)를 [Published OData service](/refguide10/published-odata-services/)로 노출하세요. OData v3 및 OData v4는 REST 기반 프로토콜이며 Catalog에 서비스를 등록하기 위한 표준 형식입니다.

다음을 수행하세요:

1. App Explorer에서 **MyFirstModule**을 마우스 오른쪽 버튼으로 클릭하세요. 드롭다운 목록에서 **Add folder**를 선택하고 *APIs*로 이름을 지정하세요.

    {{% alert color="info" %}}게시된 OData 서비스는 앱에 대한 API 역할을 합니다. 일부 앱에는 여러 게시된 서비스가 있을 수 있으므로, 각 모듈의 폴더에 함께 보관하는 것이 좋은 관행입니다.{{% /alert %}}

2. **Domain model**에서 **Customer** 엔티티(Entity)를 마우스 오른쪽 버튼으로 클릭하고 **Publish in OData service...**를 선택하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/publish-in-odata-resource.png" class="no-border" >}}

3. **Select Published OData Service** 대화 상자에서 **MyFirstModule** > **APIs** 폴더를 선택하고 **New**를 클릭하여 이 폴더에 새 OData 서비스를 추가하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/select-published-odata-service.png" class="no-border" >}}

4. 게시된 OData 서비스의 이름을 *{yourname}CustomerODataService*로 지정하고 **OK**를 클릭하세요. 새 **{yourname}CustomerODataService**가 모듈에 추가됩니다.
5. **Choose key** 대화 상자에서 키로 사용할 속성을 **Available attributes**에서 **Key attributes**로 이동하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/choose-key.png" class="no-border" >}}
6. **OK**를 클릭하여 **Edit published entity** 대화 상자를 확인하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/edit-published-resource-box.png" class="no-border" >}}

    {{% alert color="info" %}} **Exposed set name**을 기록해 두세요. 기본적으로 **Exposed name** 끝에 "**s**"가 추가됩니다. 서비스가 Catalog에 등록되면 **Exposed set name**이 사용 가능한 **Dataset**으로 표시됩니다. {{% /alert %}}

7. **OK**를 클릭하여 Catalog에 등록될 **OData Service** 문서를 표시하세요. **General** 탭에서 **Version** 번호를 확인하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/customer-odata-service-page.png" class="no-border" >}}

    **Entities** 아래에 **Customer** 엔티티(Entity)가 나열됩니다. 엔티티(Entity)의 세부 정보가 오른쪽에 표시됩니다. 서비스에 더 많은 엔티티를 노출하려면 이 필드에서 추가하세요.

8. 상단 바에서 **Publish**를 클릭하여 앱을 배포하고 게시하세요. 메시지가 표시되면 **Save and continue**를 클릭하여 저장되지 않은 변경 사항을 저장하세요.

9. 앱이 배포되고 OData 서비스가 자동으로 Catalog에 등록됩니다. **View App**을 클릭하여 브라우저에서 앱을 여세요.
10. 앱의 홈 페이지에서 **Customers Overview**를 클릭하세요.
11. 앱에 데이터를 추가하세요. **New**를 클릭하여 고객 항목의 데이터를 추가하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/add-data-in-app.png" alt="external entities" class="no-border" >}}

이 엔티티(Entity) 세트가 Catalog를 통해 다른 앱에서 사용될 때, 다른 앱은 여기에 입력된 데이터를 볼 수 있습니다.

## Catalog 사용 및 서비스 큐레이션 {#use-and-curate}

앱의 **{yourname}CustomerODataService**가 이제 Catalog에 등록되었습니다. 이 데이터는 다른 앱에서 사용할 수 있습니다. 이 서비스는 Catalog에서 **Data Source**라고 하며, 노출된 **Customer** 엔티티(Entity)는 **Dataset**입니다.

다음을 수행하세요:

1. [Catalog](https://catalog.mendix.com/)로 이동하세요.

2. **Browse**를 클릭하고 검색어로 *{yourname}*을 입력하세요. 이 검색 문자열을 충족하는 모든 서비스와 데이터셋이 검색 결과 창에 표시됩니다.
3. 이 시나리오에서 앱은 **Sandbox** 환경에 배포되었습니다. 이 환경 내에서 검색하려면 **Filter** > **Sandbox** 체크 > **Apply**를 클릭하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/filter-box.png" alt="Catalog screen" class="no-border" >}}

4. 왼쪽의 새 검색 결과 목록에서 *{yourname}CustomerODataService* 서비스를 선택하세요. 서비스에 대한 OData 계약의 전체 세부 정보가 오른쪽에 표시됩니다.

이 서비스의 메타데이터를 Catalog에서 편집할 수 있는 권한이 있으며 **Technical Owner**입니다. 메타데이터를 편집하려면 Data Source 필드의 오른쪽 상단 모서리에 있는 편집 아이콘을 클릭하세요.

{{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/search-details-screen.png" alt="Catalog search details" class="no-border" >}}

{{% alert color="info" %}}Catalog의 역할에 대한 자세한 정보는 [User Roles](/catalog/manage/user-roles/)를 참조하세요.{{% /alert %}}

Catalog에서의 검색 및 **Search Details** 화면에 대한 자세한 내용은 [Search in the Catalog](/catalog/manage/search/)를 참조하세요. Landscape에서 등록된 서비스를 탐색할 수도 있습니다. 자세한 정보는 [Landscape View](/catalog/manage/landscape/)를 참조하세요.

## 다른 앱에서 Customer 데이터셋 사용하기

두 번째 앱을 만들고 **{yourname}CustomerODataService** 서비스에서 **Customer** 데이터셋을 사용하겠습니다.

이를 수행하려면 아래 단계를 따르세요:

1. Mendix Studio Pro에서 **Blank** 앱 템플릿을 사용하여 새 앱을 만들고 *{yourname}CustomerActionsApp*이라고 이름을 지정하세요.
2. 도메인 모델 > [Integration pane](/refguide10/integration-pane/)으로 이동하세요 (Integration pane이 보이지 않으면 **View** > **Integration**을 클릭하여 표시하세요).
3. Integration pane에서 검색 문자열 *{yourname}*을 입력하세요.
4. 기본적으로 Integration pane의 검색은 **Production** 환경의 서비스만 표시합니다. 앱은 **Sandbox** 앱으로 배포되었습니다. 검색 옆의 **Filter** 아이콘을 클릭하고 **Show development environments**를 체크하세요.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/filter-icon.png" alt="Filter Icon" class="no-border" >}}

    검색 결과에 이제 Mendix Cloud **Sandbox** 환경의 **{yourname}CustomerOData_service**가 포함됩니다.

5. **{yourname}CustomerODataService**에서 **Customer** 엔티티(Entity)를 도메인 모델로 드래그하세요. 사용된 서비스와 엔티티(Entity)에 Integration pane에서 녹색 체크 표시가 나타납니다.
6. 이 엔티티(Entity)는 첫 번째 앱의 파란색 엔티티 컨테이너와 다릅니다. 이 보라색 엔티티(Entity)는 [external entity](/refguide10/external-entities/)라고 합니다. 노출된 OData 서비스의 이름이 위에 표시됩니다. Integration pane에서 사용된 서비스의 정보 아이콘을 클릭하여 서비스에 대한 추가 정보를 확인하고 **View in Catalog** 링크를 따르세요.
7. **App Explorer**에서 외부 엔티티(Entity)에 대한 서비스 및 위치 문서를 확인하세요. 이 문서는 서비스의 메타데이터를 지정하고 공유 데이터에 연결하기 위한 링크를 제공합니다.
8. 엔티티(Entity)를 마우스 오른쪽 버튼으로 클릭하고 이 엔티티에 대해 **Generate overview pages**를 선택하세요. **Generate pages** 대화 상자에서 **Content layout**으로 **Atlas_Default(Atlas_Core)**를 선택하고 **OK**를 클릭하세요. **Information** 상자를 **Close**를 클릭하여 수락하세요. 새 엔티티의 개요 페이지가 **MyFirstModule**의 **OverviewPages** 폴더에 추가됩니다.
9. **App Explorer**에서 **Home_Web**을 열고 **Customer_Overview**를 빈 Auto-fill 컨테이너로 드래그하세요.
10. **Publish**를 클릭하여 앱을 배포하고 **({yourname}CustomerODataService**를 통해 게시 앱 **({yourname}CustomerServiceApp**)의 **Customer** 엔티티(Entity)에 추가한 데이터를 가져오세요.

## 새 앱에서 공유 데이터 보기

사용된 데이터를 새 앱에서 보려면 다음 단계를 따르세요:

1. 앱이 성공적으로 배포된 후 **View App**을 클릭하여 브라우저에서 앱을 여세요.
2. **Customer Overview**를 클릭하세요.

    개요 페이지에 **{yourname}CustomerServiceApp** 앱에서 입력한 고객 목록이 표시됩니다. 데이터는 다른 앱에서 공유되므로 데이터를 추가하거나 변경하는 옵션이 없습니다.

## 사용(Consuming) 앱에서 데이터 변경 사항 확인하기

원본 앱에서 데이터가 변경되면 사용된 데이터가 업데이트되는 예를 보려면 다음 단계를 따르세요:

1. Studio Pro에서 두 앱이 모두 게시되어 있는지 확인하고, 별도의 브라우저 창에서 두 앱을 모두 여세요.
2. **{yourname}CustomerServiceApp**에서 고객 목록을 변경하세요. 예를 들어 몇 명의 고객을 추가하거나 기존 항목을 편집하세요.
3. **{yourname}CustomerActionsApp** 창을 새로고침하고 검색하여 표시된 데이터의 변경 사항을 확인하세요.

축하합니다, Catalog를 사용하여 Mendix 앱 간에 데이터를 성공적으로 공유했습니다! 이제 Landscape에서 새 앱을 확인할 수 있습니다.

## Landscape에서 앱 보기

만든 두 앱을 Landscape에서 확인하고 어떻게 연결되어 있는지 볼 수 있습니다:

1. [Catalog](https://catalog.mendix.com/#/home) 홈 페이지를 여세요.
2. 검색 창을 사용하여 서비스를 찾으세요. **Sandbox** 앱을 볼 수 있도록 필터를 사용하세요.
3. **Landscape View**를 클릭하여 앱(둥근 사각형), 서비스(원), 연결(선)의 시각적 표현을 확인하세요. 노출된 엔티티 세트/데이터셋의 수가 서비스 아래에 나타납니다.

    {{< figure src="/attachments/refguide10/modeling/integration/share-data-sources/share-data/landscape-full-screen.png" class="no-border" >}}

    **{yourname}CustomerODataAPI** 서비스는 Free App으로 배포된 **{yourname}CustomerCustomerServiceApp**의 실행 인스턴스에 실선으로 연결되어 있습니다.

    이 서비스는 점선 회색 선으로 **{yourname}CustomerActionsApp**에도 연결되어 있습니다. 화살표는 **{yourname}CustomerActionsApp**이 데이터를 위해 **{yourname}CustomerODataAPI**를 호출하고 있음을 나타냅니다. 이 점선에서 **1 Dataset**을 클릭하면 사용 중인 데이터셋이 오른쪽 메타데이터 패널에 나열됩니다.
