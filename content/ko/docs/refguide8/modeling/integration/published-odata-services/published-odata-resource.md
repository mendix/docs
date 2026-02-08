---
title: "Published OData Resource"
url: /refguide8/published-odata-resource/
---

{{% alert color="warning" %}}

이 문서는 Published OData Resource의 속성을 설명합니다. OData 서비스의 개요는 [Published OData Services](/refguide8/published-odata-services/)를 참조하십시오.

{{% /alert %}}

## 리소스 추가 또는 편집

### 리소스 추가

**Published OData Service** 창의 **Resources** 패널에서 **Add**를 클릭하여 **Select Entity** 창을 엽니다. 게시할 Entity를 선택하고 **Select**를 클릭하십시오.

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/published-odata-service.png" alt="OData service page" class="no-border" >}}

리소스를 추가하는 다른 방법은 **Domain Model**에서 Entity를 마우스 오른쪽 버튼으로 클릭하고 **Expose as OData resource**를 선택하는 것입니다.

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/create-odata-resource-from-domain-model.png" alt="Domain model dropdown menu" class="no-border" >}}

리소스를 추가하려면 **Select Published Data Service** 창에서 OData 서비스 이름을 클릭하고 **Select**를 클릭하십시오.

새 OData 서비스를 생성하고 Entity를 추가하려면 **New**를 클릭하고 **Add Published OData Service** 대화 상자에서 생성할 서비스 이름을 입력하십시오.

### 리소스 편집

**Published OData Service** 창의 **Resources** 패널에서 리소스를 선택하고 **Edit**를 클릭하여 **Edit published resource** 창을 표시하십시오.

{{< figure src="/attachments/refguide8/modeling/integration/published-odata-services/published-odata-resource/published-resource-dialog-box.png" alt="Edit published OData dialog box" class="no-border" >}}

다른 **Entity**를 선택하거나 **Show**를 클릭하여 도메인 모델에서 Entity를 볼 수 있습니다. 이 창에서 선택한 Entity에 대한 [노출된 속성 및 연관](#exatass)을 설정할 수 있습니다.

**Example of location**에서 리소스가 게시될 위치를 지정하십시오.

**Public documentation** 탭에서 노출된 Entity에 대한 요약 및 설명을 제공할 수 있습니다.

{{% alert color="info" %}}

[IBM DB2](/refguide8/db2/)는 다중 사용자 환경에서 비차단 읽기 격리 데이터 검색 작업을 지원하지 않습니다. 따라서 OData에서 검색된 데이터는 동일한 데이터 행이 다른 사용자에 의해 동시에 수정되는 경우 100% 일관되지 않을 수 있습니다.

{{% /alert %}}

## 노출된 속성 및 연관 선택 {#exatass}

**Edit published resource** 창에서 **Exposed attributes and associations**를 선택하여 Entity의 속성 및 연관 목록을 표시하십시오.

{{% alert color="info" %}}

**System.ID** 속성은 OData 서비스에서 키로 사용되며 항상 선택되어 있어야 합니다.

{{% /alert %}}

게시된 Entity의 속성은 기본적으로 **Nillable**입니다. 이는 값이 비어 있으면 OData 콘텐츠에서 명시적 null로 인코딩됨을 의미합니다. 속성에 대해 **Nillable**이 선택 해제되면 속성이 비어 있을 수 없습니다(런타임 오류가 발생합니다).

{{% alert color="info" %}}

**Binary** 유형의 속성은 **System.FileDocument** 속성의 **Contents** 필드를 제외하고는 OData 서비스를 통해 내보낼 수 없습니다.

{{% /alert %}}

## 내부 이름에서 노출된 이름으로의 매핑

**Edit published resource** 창에서 **Exposed entity name**을 사용하여 외부에 노출되는 리소스의 이름을 사용자 정의할 수 있습니다. 기본값은 도메인 모델에서 노출된 Entity의 이름입니다. **Exposed entity name**은 문자로 시작하고 문자 또는 숫자가 뒤따르며 최대 길이는 480자입니다.

{{% alert color="info" %}}

위치 URI는 고유해야 합니다. 동일한 위치에 두 개의 다른 리소스를 노출하면 일관성 오류가 발생합니다.

{{% /alert %}}

속성 및 연관도 **Exposed attributes and associations** 목록 창의 **Exposed name** 열에서 동일한 방법으로 사용자 정의할 수 있습니다.

연관의 경우, 노출된 이름은 내비게이션 속성(연관된 객체를 참조하는 속성)에 부여되는 이름입니다. 기본값은 도메인 모델에서 연관의 이름과 동일합니다.

{{% alert color="info" %}}

이러한 방식으로 이름이 사용자 정의된 경우 도메인 모델에서 정의된 Entity, 속성 또는 연관의 이름은 외부에 노출되지 않습니다. 모든 OData 통신에는 노출된 이름이 사용됩니다.

{{% /alert %}}

이러한 기능을 사용하면 외부 API에 영향을 주지 않고 도메인 모델을 더 쉽게 리팩토링할 수 있습니다.

## Exposed Set Name

**Edit published resource** 창의 **Exposed set name** 필드에서 표시되는 Entity 집합의 이름을 사용자 정의할 수 있습니다. 이는 **Example of location**에 제공된 리소스 URL의 마지막 부분을 형성합니다.

기본값: *{Entity name}s*

## Use Paging

**Use paging** 옵션은 응답당 최대 객체 수를 설정하고 다음 객체 집합에 대한 링크를 포함하는 데 사용됩니다. [Tableau](https://www.tableau.com)와 같은 클라이언트는 이를 사용하여 진행 상황을 표시하고 모든 데이터가 검색될 때까지 자동으로 링크를 따라갈 수 있습니다. 페이징이 적절한 페이지 크기로 설정되면 클라이언트의 메모리 사용량이 개선될 수 있습니다.

기본값: *No*

**Use paging**을 **Yes**로 설정하면 데이터가 단일 트랜잭션에서 검색되지 않으므로 검색된 데이터에 불일치가 발생할 수 있습니다. 예를 들어, **Customer**라는 Entity에서 **Age** 속성으로 정렬하고 페이지당 1000개의 객체를 검색하도록 설정한 경우, 두 호출 사이에 고객이 삭제되면 위치 1001에 있던 **Age** 23의 고객이 위치 1000으로 이동합니다. 이는 두 번째 페이지의 첫 번째 항목이 첫 번째 페이지로 이동하여 더 이상 검색되지 않음을 의미합니다. 마찬가지로 호출 사이에 삽입된 데이터는 데이터의 중복을 초래할 수 있습니다. 이러한 종류의 불일치가 허용되는 경우에만 이 옵션을 사용해야 합니다.

## Page Size

**Use paging**이 **Yes**로 설정된 경우 **Page size**에서 페이지당 객체 수를 설정할 수 있습니다.

기본값: *10000*
