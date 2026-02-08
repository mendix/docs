---
title: "OData를 사용하여 BI 도구에 데이터 노출하기"
url: /howto9/integration/exposing-data-to-bi-tools-using-odata/
weight: 13
description: "리소스를 포함한 Published OData 서비스 생성, Tableau 및 Excel에 OData 서버 추가, Tableau에서 리소스 결합 및 사용자 정의 쿼리 생성 방법을 설명합니다."
---

## 소개

Mendix 앱은 서비스 지향 아키텍처의 적용을 권장하며, 여러 소규모 서비스가 특정 데이터 및 로직 세트에 대한 API와 사용자 인터페이스를 제공합니다. 기업은 이러한 서비스를 조합하여 완전한 솔루션을 구축합니다.

서비스의 중요한 측면 중 하나는 데이터와 로직에 대한 모든 접근이 서비스 작업에 의해 처리된다는 것입니다. 서비스 데이터를 저장하는 데 사용되는 데이터베이스에 대한 직접 접근은 서비스에서 처리하는 비즈니스 규칙과 보안을 우회하므로 권장되지 않습니다. 이로 인해 일반적인 보고, 데이터 웨어하우징 및 ETL 도구에 대한 과제가 발생합니다.

OData 표준은 서비스 지향 아키텍처 내에서 일반적인 데이터 접근을 가능하게 하기 때문에 채택되고 있습니다. [OData](https://www.odata.org)는 "간단하고 표준적인 방법으로 쿼리 가능하고 상호 운용 가능한 RESTful API를 생성하고 소비할 수 있게 하는 개방형 프로토콜"입니다. 즉, 제공되는 데이터를 설명하는 메타데이터를 제공하고, OData 서비스와 교환되는 메시지를 표준화하여 도구가 모든 REST/OData 서비스를 사용할 수 있게 합니다.

Excel이나 Tableau 같은 보고 도구는 OData 서비스에서 사용 가능한 데이터와 기능을 검색하고, 사용자가 데이터에 대한 새로운 쿼리를 구축할 수 있는 일반적인 방법을 제공할 수 있습니다.

**이 가이드에서는 다음 방법을 설명합니다:**

* 리소스를 포함한 Published OData 서비스 생성하기
* Tableau 및 Excel에 OData 서버 추가하기
* Tableau에서 리소스 결합하기
* 사용자 정의 쿼리 생성하기

## 전제 조건

이 가이드를 확인하기 전에 다음을 수행하십시오:

* 노출하려는 데이터를 포함하는 앱을 생성하십시오. 이미 Published OData 서비스가 있거나 아래 [Published OData 서비스 생성하기](#create-service) 섹션의 단계를 따를 수 있습니다. OData 서비스 게시에 대한 자세한 단계는 [앱 간 데이터 공유하기](/howto/integration/share-data/)를 참조하십시오.
* Excel을 설치하십시오(Office 365용 Excel을 사용합니다).
* [Tableau](https://public.tableau.com)의 공개 버전을 다운로드하여 설치하십시오.

## Published OData 서비스 생성하기 {#create-service}

Published OData 서비스는 타사 애플리케이션이 Mendix 애플리케이션에서 데이터를 읽는 데 사용할 수 있습니다. 기본 단계는 다음과 같습니다:

1. Studio Pro를 열고 **MyFirstModule**에 *OData Services*라는 폴더를 추가하십시오.
2. 새 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Published OData service**를 선택하십시오.
3. 서비스에 대한 설명적인 이름을 입력하고 **OK**를 클릭하십시오.
4. **Entities**에서 **Add**를 클릭하십시오:
5. **Select Persistable Entity** 창에서 노출하려는 Entity를 선택하고 **Select**를 클릭하십시오.

    {{% alert color="info" %}}OData의 보안은 **App Security** 설정과 Entity 수준 접근 규칙에 의해 관리됩니다. 따라서 앱에서 이미 접근 규칙을 구성한 경우 OData에 대해 별도로 보안을 구성할 필요가 없습니다.{{% /alert %}}

6. **Settings** 탭에서 **Associations**에 **As an associated id**를 선택하십시오. Excel은 **As a link** 설정을 처리할 수 있지만 Tableau는 이를 지원하지 않습니다.
7. 애플리케이션을 시작하십시오.

OData 서비스를 이제 소비할 준비가 되었습니다.

## Office 365용 Excel에서 Mendix 데이터 작업하기

1. Excel을 여십시오.
2. **DATA** 탭을 열고 **Get Data** > **From Other Sources** > **From OData Feed**를 선택하십시오.
3. Studio Pro로 돌아가서 Published OData 서비스를 더블 클릭하십시오. **Location** 필드의 링크를 클립보드에 복사하십시오.
4. Excel로 돌아가서 **OData Feed** 대화 상자에 복사한 링크를 **URL**에 입력하고 **OK**를 클릭하십시오:
5. Navigator에서 게시된 Entity의 이름을 선택하고 **Load**를 클릭하십시오.

Mendix 애플리케이션의 데이터를 이제 Excel에서 사용할 수 있습니다.

## Tableau에서 Mendix 데이터 작업하기

이 섹션에서는 서로 다른 데이터 소스의 데이터를 비교할 수 있도록 둘 이상의 게시된 Entity를 추가하는 단계를 설명합니다.

### 사용 사례

자산 관리를 돕는 앱이 있다고 가정합니다. 정보를 노출하는 **SmartTask**와 **Employee**라는 영속성 Entity가 포함된 Published OData Service가 있습니다. Domain Model은 다음과 같습니다:

{{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/asset-manager-domain-model.png" class="no-border" >}}

앱의 데이터를 Tableau에서 시각화하려면 다음 단계를 따르십시오:

1. **Tableau**를 열고 **Connect** > **To a Server** > **OData**를 선택하십시오:
2. Studio Pro로 돌아가서 Published OData 서비스를 더블 클릭하십시오. **Location** 필드의 링크를 클립보드에 복사하십시오.
3. **Server Connection** 대화 상자에서 복사한 OData 서비스 **Location** 링크를 **Server** 주소에 입력하십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582020.png" class="no-border" >}}

    인증 자격 증명을 설정한 경우 포함하십시오.

4. **Sign In**을 클릭하여 서버 연결을 저장하십시오. 이제 데이터 소스 세부 정보가 표시됩니다.
5. 서버 연결 이름을 클릭하고 Entity와 관련된 이름으로 변경하십시오(이 경우 **SmartTasks**).
6. **Data** > **New Data Source**를 클릭하고 1-5단계를 반복하여 다른 Published OData 서비스의 서버 연결을 추가하십시오.
7. **Sheet1**을 여십시오. **Data**에서 첫 번째 Entity를 클릭하고 원하는 Entity **Attribute**를 **Measures**에서 **Dimensions**로 끌어다 놓으십시오. 이 경우 **Engineers**를 클릭하고 **ID**를 **Measures**에서 **Dimensions**로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582012.png" class="no-border" >}}

8. 마찬가지로, 두 번째 Entity의 속성을 **Measures**에서 **Dimensions**로 끌어다 놓으십시오. 이 경우 **SmartTasks**를 클릭하고 **SmartTask_Engineer**를 **Measures**에서 **Dimensions**로 끌어다 놓으십시오.
9. **Data** > **Edit Relationships...**로 이동하여 서로 다른 데이터 소스 간의 관계를 정의하십시오.
10. **Relationships** 창에서 다음을 수행하십시오:<br />
    1. **Primary data source**에서 첫 번째 Entity를 선택하십시오. 이 시나리오에서는 **SmartTasks**입니다.<br />
    2. **Secondary data source**에서 두 번째 Entity를 선택하십시오. 이 시나리오에서는 **Engineers**입니다.<br />
    3. **Custom** 매핑으로 전환하십시오.<br />
    4. 기본 매핑을 제거하십시오.<br />
    5. **Add...**를 클릭하여 필드 매핑을 구성하십시오.

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582013.png" class="no-border" >}}

11. **Add/Edit Field Mapping** 창에서 **Primary data source field**에 첫 번째 Entity의 속성을, **Secondary data source field**에 **Entity1_Entity2**를 선택한 다음 **OK**를 클릭하여 필드 매핑을 저장하십시오. 이 경우 **Primary data source field**에 **ID**를, **Secondary data source field**에 **SmartTask_Engineer**를 선택하십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582011.png" class="no-border" >}}

12. **Relationships** 창에서 **OK**를 클릭하여 관계를 저장하십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582007.png" class="no-border" >}}

13. 데이터 소스의 두 번째 Entity(이 경우 **Engineers**)를 선택하고 **Dimensions** 섹션에서 **Name** 속성을 **Rows**로 끌어다 놓으십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582006.png" class="no-border" >}}

14. 데이터 소스에서 첫 번째 게시된 Entity(이 경우 **SmartTasks**)를 선택하고 다음을 수행하십시오:<br />
    1. **SmartTask_Engineer** 속성을 클릭하여 연결 필드로 사용하십시오.<br />
    2. **Measures** 섹션에서 **Number of Records**를 **Columns**로 끌어다 놓으십시오.

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18582005.png" class="no-border" >}}

이제 데이터의 막대 차트가 표시됩니다.

## 쿼리 매개변수로 데이터 필터링하기

기본적으로 Tableau는 모든 데이터를 검색하지만, Mendix에서는 쿼리에 필터를 추가하여 원하는 데이터만 검색할 수 있습니다.

쿼리 매개변수로 데이터를 필터링하려면 다음 단계를 따르십시오:

1. 데이터 소스를 마우스 오른쪽 버튼으로 클릭하고 **Edit Data Source...**를 선택하십시오.
2. OData URL을 클릭하여 연결 설정을 변경하십시오.
3. 서버 URL에 *?$top=2*를 추가하고(이 경우 처음 두 값, 즉 엔지니어만 검색하기 위해) **Sign In**을 클릭하십시오:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18581998.png" class="no-border" >}}

4. 사용 중인 데이터가 새로고침되었다는 경고에서 **OK**를 클릭하십시오.
5. **Sheet1**을 열고 **Name**을 다시 **Rows**로 끌어다 놓으십시오. 이제 두 엔지니어의 데이터만 포함된 막대 차트가 표시됩니다:

    {{< figure src="/attachments/howto9/integration/exposing-data-to-bi-tools-using-odata/18581997.png" class="no-border" >}}

6. `&` 문자를 사용하여 필터를 결합할 수 있습니다. 1-4단계를 반복하되, 이번에는 `http://localhost:8080/odata/Expenses/Expenses?$skip=1`을 서버 URL로 사용하십시오. 이제 2와 3의 데이터를 보여주는 막대 차트가 표시됩니다.

다음은 기타 쿼리 예제입니다:

* `http://localhost:8080/odata/publishedservicename/v1/Engineers(7881299347898469)`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers/$count`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers?$filter=Name+eq+'Kim'`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers?$filter=Name+ne+'Kim'`
* `http://localhost:8080/odata/publishedservicename/v1/SmartTasks?$filter=DueDate+gt+datetime'1995-01-01T00:00:00'`
* `http://localhost:8080/odata/publishedservicename/v1/SmartTasks?$filter=Created+gt+datetime'2005-01-01T00:00:00'&$orderby=DueDate`

## 더 읽기

* [복잡한 웹 서비스 소비하기](/howto9/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 소비하기](/howto9/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto9/integration/export-xml-documents/)
* [Excel 문서 가져오기](/howto9/integration/importing-excel-documents/)
* [웹 서비스 노출하기](/howto9/integration/expose-a-web-service/)
