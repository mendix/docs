---
title: "External Entity"
url: /refguide8/external-entities/
weight: 15
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

External Entity는 [Catalog](/catalog/)를 통해 사용 가능한 공유 데이터 소스의 데이터에 연결합니다. 이러한 External Entity는 외부 애플리케이션에서 유지 관리되고 저장되는 데이터 세트에 대한 링크를 나타냅니다. 프로젝트에서 External Entity를 통합하거나 *소비*하고 로컬 Entity와 함께 사용하여 공유 데이터 세트를 사용하는 앱을 만들 수 있습니다. External Entity가 연결하는 데이터 세트는 소스 애플리케이션에서 변경될 때 업데이트됩니다.

이는 External Entity의 여러 속성이 원본 앱에서 결정되며 프로젝트에서 변경할 수 없음을 의미합니다.

External Entity는 [Data Hub 패널](/refguide8/data-hub-pane/)을 통해 도메인 모델에 추가되며 도메인 모델에서 *보라색* Entity 컨테이너로 표시됩니다.

**Data Hub** 패널에서 External Entity를 추가하는 방법에 대한 자세한 내용은 [External Entity 추가](#adding-external-entities)를 참조하십시오.

## 프로젝트에 External Entity 추가 {#adding-external-entities}

프로젝트에 External Entity를 추가하려면 다음을 수행하십시오:

1. 도메인 모델로 이동하십시오.

2. **Data Hub** 패널에서 앱에서 사용하려는 Entity를 검색하십시오.

    {{% alert color="info" %}}Catalog에서 OData 서비스는 사용하려는 Entity를 노출하는 여러 버전 또는 다른 환경에 배포된 상태로 여러 번 등록될 수 있습니다. 먼저 Catalog를 검색하여 프로젝트 요구 사항에 가장 관련성이 높은 것을 찾으십시오.{{% /alert %}}

3. Entity를 도메인 모델로 드래그하십시오. 그러면 Entity와 해당 Attribute가 앱에 추가됩니다:

    {{< figure src="/attachments/refguide8/modeling/domain-model/entities/virtual-entity-example.png" alt="Virtual Entity Example" class="no-border" >}}

{{% alert color="info" %}}
도메인 모델에 이미 있는 동일한 서비스의 Entity와 연관된 Entity를 드래그하면 Entity 간에 Association이 설정됩니다. External Entity 간의 Association에 대한 자세한 내용은 [Association](#properties)을 참조하십시오.
{{% /alert %}}

External Entity가 도메인 모델에 추가되면 **Project Explorer**에 두 개의 문서가 추가됩니다: 소비된 Entity의 메타데이터를 포함하는 **Consumed OData Service** 문서와 데이터 세트의 **OData Location**. 자세한 내용은 [Consumed OData Service](/refguide8/consumed-odata-service/)를 참조하십시오.

**Data Hub** 패널의 **Project Section**에 현재 프로젝트에 있는 소비된 Entity가 나열됩니다.

{{% alert color="info" %}}
Catalog에서 소비된 서비스의 최신 버전이 사용 가능해지면 **Data Hub** 패널에서 서비스 이름 옆에 업데이트 화살표로 표시됩니다. 자세한 내용은 *Consumed OData Service*의 [Consumed OData Service 업데이트 또는 전환](/refguide8/consumed-odata-service/#updating) 섹션을 참조하십시오.
{{% /alert %}}

소비하는 앱에서 데이터가 사용되고 표시되는 방식에만 영향을 미치는 External Entity의 속성에 대해 로컬 변경을 수행할 수 있습니다. 다른 모든 속성은 소스 애플리케이션에서 정의되며 변경할 수 없습니다. 동일한 OData 서비스의 여러 External Entity가 모듈 또는 앱에서 사용되는 경우, Entity 간의 Association(소스 앱에서 만들어진)이 로컬 모듈에서 자동으로 만들어집니다.

Catalog를 통해 게시된 OData 서비스 및 Entity를 사용하는 방법에 대한 자세한 내용은 [서비스 소비](/catalog/consume/)를 참조하십시오.

## External Entity의 속성 {#properties}

로컬 Entity와 비교하여 External Entity는 변경할 수 있는 속성의 수가 제한됩니다. 나머지 속성은 원본 앱에서 정의되므로 읽기 전용입니다.

{{% alert color="info" %}}
External Entity의 속성에 대한 변경 사항은 소비하는 앱에서만 적용됩니다. 원본 앱은 변경 사항의 영향을 받지 않습니다.
{{% /alert %}}

### 일반

이 탭은 External Entity의 일반 속성을 표시합니다. 원본 앱에서 정의된 값이 표시되지만 편집할 수 없습니다. 편집할 수 있는 값은 로컬 프로젝트에만 적용됩니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/external-entity-properties.png" alt="External Entity Properties" class="no-border" >}}

* **Name** – 로컬 앱에서의 Entity 이름
* **Original name** – 읽기 전용이며 Consumed OData Service에 정의된 Entity 이름을 표시
* **Summary** – 읽기 전용 필드이며 원본 앱에서의 Entity 설명을 표시

### Attribute {#attributes}

External Entity에 대해 OData 서비스에서 노출된 [Attribute](/refguide8/attributes/)가 여기에 나열됩니다. Attribute 및 Attribute 목록에 대한 모든 변경 사항은 Entity의 로컬 인스턴스에 적용됩니다. 소비되므로 이러한 변경 사항은 Entity가 노출된 Consumed Service의 메타데이터나 원본 앱의 Entity Attribute에 영향을 미치지 않습니다.

{{% alert color="info" %}}[Data Hub 패널](/refguide8/data-hub-pane/#association-attributes)에서 Mendix 모델에서 지원되지 않는 Association 및 Attribute가 선택 불가(회색)로 표시되며 도메인 모델로 드래그할 때 포함되지 않거나 Entity 속성에 포함되지 않습니다. 자세한 내용은 [Data Hub 패널](/refguide8/data-hub-pane/#association-attributes)을 참조하십시오.{{% /alert %}}

표시된 Attribute 목록에서 다음 작업을 수행할 수 있습니다:

* **Add** – 이전에 이 로컬 인스턴스에서 제거된 Entity에 대해 OData 서비스에서 노출된 Attribute를 추가
* **Edit** – [Attribute 편집](#edit-attribute) 양식에서 선택한 Attribute를 편집
* **Remove** – 목록에서 Attribute를 제거

#### Attribute 편집 {#edit-attribute}

**Edit Attribute** 상자는 Attribute의 로컬 이름을 지정하고 로컬 설명을 추가하는 데 사용할 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/edit-attributes.png" alt="Edit attributes" class="no-border" >}}

* **General 탭**
    * **Name** – Attribute의 로컬 이름
    * **Original Name** – 원본 앱에서 지정된 Attribute의 원래 이름을 표시하는 읽기 전용 값
    * **Summary** – 원본 앱에서의 Attribute 설명; 로컬 설명을 입력하려면 [Documentation 탭](#documentation)에서 추가
    * **Type** – 원본 앱에서 정의된 Attribute의 **Type** 및 **Length**
* **Documentation** – 현재 앱의 사용자에게 표시되는 Attribute 설명

### Association {#associations}

이 탭은 External Entity가 동일한 서비스에서 노출된 다른 Entity와 가지고 있는 Association 및 로컬 Entity와 만들어진 Association을 표시합니다. Studio Pro의 Association 속성에 대한 자세한 내용은 [Association 탭 속성](/refguide8/association-member-properties/)을 참조하십시오.

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/external-entity-associations.png" alt="Edit attributes" class="no-border" >}}

External Entity와의 모든 Association에 대해 다음이 적용됩니다:

**Name** – Association의 이름
**Type** – 두 External Entity 간 Association의 경우 읽기 전용
**Owner** – 두 External Entity 간 Association의 경우 읽기 전용
**Parent** – 두 External Entity 간 Association의 경우 읽기 전용
**Child** – 두 External Entity 간 Association의 경우 읽기 전용

로컬 Entity와 External Entity에 대한 Association을 **추가**하고 **편집**할 수 있습니다. 그러나 External Entity *에서* 로컬 Entity로의 Association은 만들 수 없습니다: 로컬 Entity가 Association의 소유자여야 합니다.

앱에서 External Entity를 사용하고 이 Entity가 앱의 동일한 OData 서비스에서 가져온 다른 External Entity와 연관된 경우, Association이 도메인 모델에 자동으로 추가되고 여기에 나열됩니다.

{{% alert color="info" %}}
자동으로 추가된 도메인 모델의 두 External Entity 간 Association을 **제거**할 수 있습니다. 나중에 Association을 복원하려면 도메인 모델에서 External Entity 중 하나를 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Association**을 클릭하여 수행할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
원본 앱에서 연결되지 않은 두 External Entity를 연결하려는 경우, 데이터에 대한 관계를 로컬에서 영향을 줄 수 없으므로 불가능합니다. 그러나 로컬 Entity를 추가하고 이 로컬 Entity를 두 External Entity에 연결하는 것을 고려하십시오. 이 경우 로컬 Entity가 두 Association의 소유자여야 합니다.
{{% /alert %}}

### Association 속성

동일한 OData 서비스에서 노출된 두 Entity에 대해 포함된 Association을 **편집**하면 다음 속성이 표시되며 변경할 수 있는 유일한 로컬 변경 사항은 로컬 이름입니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/association-properties.png" alt="Edit external associations" class="no-border" >}}

* **Name** – Association의 로컬 이름
* **Original Name** – 원본 앱에서 지정된 Association 이름
* **Summary** – 원본 앱에서의 Association에 대한 읽기 전용 설명
* **Multiplicity** – 원본 앱에서의 읽기 전용 다중성 값
* **Documentation** – 이 탭으로 이동하여 External Entity Association에 대한 로컬 설명을 추가

### 두 External Entity 연결

원본 앱에서 연결되지 않은 두 External Entity를 연결하려는 경우, 데이터에 대한 관계를 로컬에서 영향을 줄 수 없으므로 불가능합니다. 그러나 로컬 Entity를 추가하고 이 로컬 Entity를 두 External Entity에 연결할 수 있습니다. 이 경우 로컬 Entity가 두 Association의 소유자여야 합니다.

### 문서화 {#documentation}

이 탭에서 External Entity에 대한 로컬 정보를 추가할 수 있습니다.

## External Entity 제한 사항

External Entity는 원본 앱의 게시된 OData 서비스에 정의된 엔드포인트입니다. Consumed OData Service 문서는 External Entity가 **Data Hub** 패널을 통해 사용될 때 서비스 메타데이터의 값을 표시합니다. External Entity의 제한 사항은 소비 전용 Entity라는 것입니다. Entity와 연관된 데이터 세트는 원본 앱에서 유지 관리됩니다.

서비스 소비 및 노출된 Entity에 대한 자세한 내용(External Entity에서 수행할 수 있는 작업 포함)은 [서비스 소비](/catalog/consume/)를 참조하십시오.
