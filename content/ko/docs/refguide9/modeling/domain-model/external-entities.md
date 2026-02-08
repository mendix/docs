---
title: "External Entity"
url: /refguide9/external-entities/
weight: 15
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 소개

External Entity는 [Data Hub 패널](/refguide9/data-hub-pane/)을 통해 Domain Model에 추가할 수 있습니다. Domain Model에서 *보라색* Entity 컨테이너로 표시됩니다. External Entity는 [Catalog](/catalog/)에 등록된 공유 데이터 소스를 통해 제공되는 데이터셋에 대한 링크를 나타냅니다. 데이터 소스는 OData 서비스로 게시된 Entity 세트(데이터셋이라고 함)의 모음입니다.

데이터셋은 원본 애플리케이션에서 유지 관리되고 업데이트됩니다. 앱 개발 시 External Entity를 통해 이러한 데이터셋을 통합하거나 소비할 수 있으며, 원본 앱의 데이터 변경 사항은 소비 앱에서 자동으로 업데이트됩니다.

External Entity는 로컬 Entity와 함께 사용할 수 있습니다. 그러나 데이터셋은 원본 애플리케이션에서 유지 관리되므로 소비 앱에서 모든 속성을 변경할 수는 없습니다.

**Data Hub** 패널에서 External Entity를 추가하는 방법은 [External Entity 추가](#adding-external-entities)를 참조하십시오.

## 앱에 External Entity 추가 {#adding-external-entities}

앱 모델에 External Entity를 추가하려면 다음 단계를 따르십시오:

1. 앱 모델의 Domain Model에서 **Data Hub** 패널을 사용하여 앱에서 사용하려는 Entity 또는 데이터 소스를 검색하십시오.

    {{% alert color="info" %}}[Catalog](/catalog/search/)에서 OData 서비스는 다른 버전 번호 또는 다른 환경에 배포되어 여러 번 등록될 수 있으며, 모두 사용하려는 Entity(데이터셋)를 노출합니다. 먼저 Catalog를 검색하여 앱의 요구 사항에 가장 관련성이 높은 것을 찾으십시오.{{% /alert %}}

1. Entity를 Domain Model로 드래그하십시오.
1. Entity와 그 Attribute가 앱에 추가되고 **App Explorer**에 두 개의 문서가 추가됩니다:

    * OData 서비스의 세부 정보와 메타데이터를 포함하는 **Consumed OData Service** 문서; 표시되는 로고는 서비스의 원본 앱을 식별합니다
    * 서비스의 위치 상수를 지정하는 **OData Location**

        {{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/consumed-service-docs.png" alt=" Virtual Entity and OData Service files" class="no-border" >}}

{{% alert color="info" %}}
Domain Model에 이미 있는 동일 서비스의 Entity와 연관된 Entity를 드래그하면 Entity 간에 Association이 표시되고 설정됩니다. External Entity 간의 Association에 대한 자세한 내용은 [Association](#properties)을 참조하십시오.
{{% /alert %}}

자세한 내용은 [Consumed OData Service](/refguide9/consumed-odata-service/)를 참조하십시오.

현재 앱의 소비된 Entity는 **Data Hub** 패널의 **Used in your App** 섹션에 나열됩니다:

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/data-hub-app.png" alt=" Virtual Entity and OData Service files" class="no-border" >}}

{{% alert color="info" %}}
소비된 서비스의 새 버전이 Catalog에서 사용 가능해지면 **Data Hub** 패널에서 서비스 이름 옆에 업데이트 화살표로 표시됩니다. 자세한 내용은 *Consumed OData Service*의 [Consumed OData Service 업데이트 또는 전환](/refguide9/consumed-odata-service/#updating) 섹션을 참조하십시오.
{{% /alert %}}

소비 앱에서 데이터가 사용되고 표시되는 방식에만 영향을 미치는 External Entity의 속성을 로컬로 변경할 수 있습니다. 다른 모든 속성은 원본 애플리케이션에서 정의되며 변경할 수 없습니다. 동일한 OData 서비스의 여러 External Entity가 모듈이나 앱에서 사용되면 원본 앱에서 만든 Entity 간의 Association이 로컬 모듈에서 자동으로 생성됩니다.

{{% alert color="info" %}}
Domain Model에서 External Entity를 삭제하면 서비스 문서는 App Explorer 목록에 남아 있고 서비스는 Data Hub App 패널에 계속 나열됩니다. Consumed 서비스의 Entity를 더 이상 사용하지 않을 경우 두 서비스 문서를 삭제할 수 있습니다.
{{% /alert %}}

Catalog를 통해 게시된 OData 서비스 및 Entity 사용에 대한 자세한 내용은 [서비스 소비](/catalog/consume/)를 참조하십시오.

## External Entity의 속성 {#properties}

로컬 Entity와 비교하여 External Entity는 변경할 수 있는 속성이 제한되어 있습니다. 나머지 속성은 원본 앱에서 정의되므로 읽기 전용입니다.

{{% alert color="info" %}}
External Entity의 속성에 대한 변경 사항은 소비 앱에서만 적용됩니다. 원본 앱은 변경 사항의 영향을 받지 않습니다.
{{% /alert %}}

### 일반

이 탭에는 External Entity의 일반 속성이 표시됩니다. 원본 앱에서 정의된 값은 표시되지만 편집할 수 없습니다. 편집할 수 있는 값은 로컬 앱에만 적용됩니다:

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/external-entity-properties.png" alt="External Entity Properties" class="no-border" >}}

* **Name** – 로컬 앱에서의 Entity 이름
* **Original name** – 읽기 전용이며 소비된 OData 서비스에서 정의된 Entity 이름을 표시합니다
* **Summary** – 읽기 전용 필드이며 원본 앱에서의 Entity 설명을 표시합니다

### Attribute {#attributes}

OData 서비스에서 External Entity에 대해 노출된 [Attribute](/refguide9/attributes/)가 여기에 나열됩니다. Attribute 및 Attribute 목록에 대한 모든 변경 사항은 Entity의 로컬 인스턴스에 적용됩니다. 소비되는 것이므로 이러한 변경 사항은 Entity가 노출된 소비 서비스의 메타데이터나 원본 앱의 Entity Attribute에 영향을 미치지 않습니다.

{{% alert color="info" %}}[Data Hub 패널](/refguide9/data-hub-pane/#association-attributes)에서 Mendix 모델에서 지원되지 않는 Association과 Attribute는 선택 불가능(회색)으로 표시되며 Domain Model로 드래그할 때 포함되지 않거나 Entity 속성에 포함되지 않습니다. 자세한 내용은 [Data Hub 패널](/refguide9/data-hub-pane/#association-attributes)을 참조하십시오.{{% /alert %}}

표시된 Attribute 목록에서 다음 작업을 수행할 수 있습니다:

* **Add** – OData 서비스에서 Entity에 대해 노출되었으며 이전에 이 로컬 인스턴스에서 제거된 Attribute를 추가합니다
* **Edit** – [Attribute 편집](#edit-attribute) 양식에서 선택한 Attribute를 편집합니다
* **Remove** – 목록에서 Attribute를 제거합니다

#### Attribute 편집 {#edit-attribute}

**Attribute 편집** 상자를 사용하여 Attribute의 로컬 이름을 지정하고 로컬 설명을 추가할 수 있습니다.

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/edit-attributes.png" alt="Edit attributes" class="no-border" >}}

* **General 탭**
    * **Name** – Attribute의 로컬 이름을 지정할 수 있습니다.
    * **Original Name** – 원본 앱에서 부여된 Attribute의 원래 이름을 표시하는 읽기 전용 값입니다
    * **Summary** – 원본 앱에서의 Attribute 설명을 표시하는 읽기 전용 요약입니다; 로컬 설명을 입력하려면 [Documentation 탭](#documentation)에 추가하십시오
    * **Type** – 원본 앱에서 정의된 Attribute의 **Type**, **Length** 및 **Max. Length**에 대한 읽기 전용 값입니다
* **Documentation** – 현재 앱 사용자에게 표시되는 Attribute에 대한 설명입니다

### Association {#associations}

이 탭에는 동일 서비스에서 노출된 다른 Entity와 External Entity가 가지는 Association 및 로컬 Entity와의 모든 Association이 표시됩니다. Studio Pro의 Association 속성에 대한 자세한 내용은 [Association 탭 속성](/refguide9/association-member-properties/)을 참조하십시오.

Entity에 [단방향 탐색 가능한 Association](/refguide9/association-properties/#one-way-navigable)이 포함된 경우 대화 상자 상단에 메모가 있습니다.

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/external-entity-associations.png" alt="Edit attributes" class="no-border" >}}

External Entity와의 모든 Association에 다음이 적용됩니다:

**탐색 가능성 아이콘** – Association이 [단방향 탐색 가능](/refguide9/association-properties/#one-way-navigable)한지 여부를 나타내는 아이콘
**Name** – 현재 앱에서 표시되는 Association의 이름
**Type** – 두 External Entity 간의 Association에 대해 읽기 전용
**Owner** – 두 External Entity 간의 Association에 대해 읽기 전용
**Parent** – 두 External Entity 간의 Association에 대해 읽기 전용
**Child** – 두 External Entity 간의 Association에 대해 읽기 전용

로컬 Entity와 External Entity 간에 Association을 **추가** 및 **편집**할 수 있습니다. 그러나 External Entity *에서* 로컬 Entity로의 Association은 만들 수 없습니다: 로컬 Entity가 Association의 소유자여야 합니다.

앱에서 External Entity를 사용하고 이 Entity가 앱의 동일 OData 서비스의 다른 External Entity와 연관되어 있으면 Domain Model에서 Association이 자동으로 추가되고 여기에 나열됩니다.

{{% alert color="info" %}}
자동으로 추가된 Domain Model에서 두 External Entity 간의 Association을 **제거**할 수 있습니다. 나중에 Association을 복원하려면 Domain Model에서 External Entity 중 하나를 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Association**을 클릭하여 수행할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
원본 앱에서 연결되지 않은 두 External Entity를 연결하려면 데이터에 대한 관계를 로컬에서 영향을 줄 수 없으므로 불가능합니다. 그러나 로컬 Entity를 추가하고 이 로컬 Entity를 두 External Entity에 연결하는 것을 고려하십시오. 이 경우 로컬 Entity가 두 Association의 소유자여야 합니다.
{{% /alert %}}

### Association 속성

동일 OData 서비스에서 노출된 두 Entity에 포함된 Association을 **편집**하면 다음 속성이 표시되며 로컬에서 변경할 수 있는 것은 로컬 이름뿐입니다:

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/association-properties.png" alt="Edit external associations" class="no-border" >}}

* **Name** – Association의 로컬 이름
* **Original Name** – 원본 앱에서 부여된 Association의 읽기 전용 이름
* **Summary** – 원본 앱의 Association에 대한 읽기 전용 설명
* **Multiplicity** – 원본 앱의 읽기 전용 다중성 값
* **Documentation** – 이 탭으로 이동하여 External Entity Association에 대한 로컬 설명을 추가하십시오

Association이 [단방향 탐색 가능](/refguide9/association-properties/#one-way-navigable)한 경우 대화 상자 상단에 메모가 있습니다.

{{< figure src="/attachments/refguide9/modeling/domain-model/external-entities/association-properties-one-way-navigable.png" alt="Edit external associations one-way navigable" class="no-border" >}}

### 두 External Entity 연결

원본 앱에서 연결되지 않은 두 External Entity를 연결하려면 데이터에 대한 관계를 로컬에서 영향을 줄 수 없으므로 불가능합니다. 그러나 로컬 Entity를 추가하고 이 로컬 Entity를 두 External Entity에 연결할 수 있습니다. 이 경우 로컬 Entity가 두 Association의 소유자여야 합니다.

### Documentation {#documentation}

이 탭에서 External Entity에 대한 모든 로컬 정보를 추가할 수 있습니다.

## 인증 {#authentication}

프로덕션 환경에서 External Entity를 사용하려면 OData 서비스의 게시자와 소비자 모두 올바른 인증 방법을 설정해야 합니다.

### 게시자: 인증 방법 설정

OData 서비스의 게시자는 소비에 필요한 인증 유형을 설정합니다. 다음 인증 방법을 사용할 수 있습니다:

* [사용자 이름 및 비밀번호](/refguide9/published-odata-services/#username-password) (기본 인증)
* [활성 세션](/refguide9/published-odata-services/#authentication-active-session)
* [사용자 정의](/refguide9/published-odata-services/#authentication-microflow) (인증 Microflow 호출)
    * [Mendix SSO](/refguide9/published-odata-services/#authentication-mendix-sso)
    * 기타 (예: 사용자 정의 모듈을 사용하여 직접 추가)

인증 방법의 유형과 설정 방법에 대한 자세한 내용은 *Published OData Services*의 [보안](/refguide9/published-odata-services/#security) 섹션을 참조하십시오.

### 인증을 사용한 External Entity 소비

Data Hub 패널을 통해 앱 모듈에서 External Entity를 사용하면 소비된 서비스의 세부 정보를 지정하는 [Consumed OData Service](/refguide9/consumed-odata-service/) 문서가 추가됩니다. 이것은 게시 앱과 Entity와 관련된 데이터에 대한 API입니다.

소비하는 서비스에 인증이 필요한 경우 인증 자격 증명을 추가해야 합니다. External Entity에서 OData 서비스의 소비자는 데이터 소스의 소유자에게 연락하여 필요한 인증 방법과 자격 증명을 확인할 수 있습니다.

소비된 OData 서비스에 인증 정보를 추가하는 방법에 대해 자세히 알아보십시오:

* 소비 앱에서 [사용자 이름 및 비밀번호](/refguide9/consumed-odata-service/#authentication) 구성
* 사용자 정의 인증 방법 소비를 위한 [HTTP 헤더](/refguide9/consumed-odata-service/#http-headers) 사용
* [Mendix SSO][/refguide9/consumed-odata-service/#authenticate-mendix-sso]를 사용하는 서비스 소비

## External Entity 제한 사항 {#limitations}

External Entity는 원본 앱의 게시된 OData 서비스에 정의된 엔드포인트입니다. Consumed OData Service 문서는 **Data Hub** 패널을 통해 External Entity를 사용할 때 서비스 메타데이터의 값을 표시합니다. Entity와 관련된 데이터셋은 원본 앱에서 유지 관리됩니다.

{{% alert color="info" %}}
External Entity는 네이티브 오프라인 앱에서 지원되지 않습니다.
{{% /alert %}}

또한 External Entity는 커밋할 수 없습니다. External Entity의 변경 사항을 유지하려면 [Send External Object Activity](/refguide9/send-external-object/)를 사용하십시오. 이는 다음을 의미합니다:

* **Commit** Activity가 작동하지 않습니다. 대신 **Send External Object**를 사용하십시오.
* 페이지에서 External Entity를 업데이트하는 위젯이 포함된 경우 [Save 버튼](/refguide9/button-widgets/) 및 [Save Changes 이벤트](/refguide9/on-click-event/#save-changes)가 작동하지 않습니다. 대신 **Send External Object**를 사용하여 변경 사항을 유지하는 Microflow를 호출하십시오.
* Mendix는 처리한 External Entity의 OData 키를 로컬 Mendix 식별자에 매핑하여 추적합니다. 이는 객체 중복을 방지하고 올바른 Association 확인을 보장합니다. 그러나 동일한 OData 키로 객체를 삭제하고 다시 만드는 서비스는 불일치를 유발할 수 있습니다. Mendix는 이러한 키가 고유하게 유지된다고 가정하기 때문입니다. 더 나은 호환성을 위해 객체를 제거하는 대신 비활성으로 표시하는 소프트 삭제를 구현하는 서비스를 사용하십시오.

소비 서비스 및 노출된 Entity에 대한 자세한 내용과 External Entity에서 수행할 수 있는 작업에 대한 자세한 내용은 [서비스 소비](/catalog/consume/)를 참조하십시오.
