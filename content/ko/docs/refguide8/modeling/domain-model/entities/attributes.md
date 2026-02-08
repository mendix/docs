---
title: "Attribute"
url: /refguide8/attributes/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

**Attribute**는 Entity를 설명하거나 식별하는 특성입니다. 각 Attribute에는 이름이 부여됩니다.

예를 들어, **Customer**에는 일반적으로 고객 이름(예: **FullName**), 이메일 주소(예: **EmailAddress**) 및 기타 개인 정보에 대한 Attribute가 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/customer-entity.png" alt="Example customer entity" class="no-border" >}}

도메인 모델 편집기는 다음 기호를 사용하여 Attribute 속성을 시각화하는 데 도움을 줍니다:

| 기호 | 설명 |
| --- | --- |
| {{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/917593.png" class="no-border" >}} | 이 Attribute에 하나 이상의 Validation Rule이 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/917592.png" class="no-border" >}} | 이 Attribute에 Attribute 값을 계산하는 Microflow가 있습니다. |

{{% alert color="info" %}}
External Entity의 Attribute는 **External Entity Properties**에서 지정됩니다. 이러한 Attribute는 원본 앱에서 정의되며 이러한 Entity에 적용할 수 있는 유일한 로컬 변경 사항은 로컬 이름과 설명입니다. 자세한 내용은 *External Entity*의 [Attribute](/refguide8/external-entities/#attributes) 섹션을 참조하십시오.
{{% /alert %}}

## 속성

[Entity 속성 대화 상자](/refguide8/entities/#dialog-box)에서 Entity에 Attribute를 추가할 수 있습니다. 이 대화 상자에서 편집하거나 도메인 모델에서 Attribute 이름을 더블 클릭하여 편집할 수도 있습니다.

{{% alert color="info" %}}
[External Entity](/refguide8/external-entities/#attributes)에 새 Attribute를 **추가**하고, 일부 Attribute 속성을 **편집**하거나, **삭제**할 수 있습니다. 그러나 변경 사항은 로컬에서만 적용되며 원본 앱의 값은 영향을 받지 않습니다. External Entity의 Attribute에 대한 작업에 대한 자세한 내용은 *External Entity*의 [Attribute](/refguide8/external-entities/#attributes) 섹션을 참조하십시오.
{{% /alert %}}

Attribute 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/attribute-properties.png" class="no-border" >}}

Attribute 속성은 다음 섹션으로 구성됩니다:

* [공통](#common)
* [타입](#type)
* [값](#value)
* [제한 사항](#limitations)

### 공통 섹션 {#common}

#### 이름

**Name** 속성은 Attribute의 이름을 지정합니다. 이 이름은 양식, Microflow, 쿼리, 제약 조건 등에서 Attribute를 참조하는 데 사용됩니다.

{{% alert color="warning" %}}
Entity에서 Attribute를 삭제한 다음 동일한 이름으로 새 Attribute를 만들면 Mendix는 이를 새로운 다른 Attribute로 간주합니다. 이는 배포 시 기존 컬럼이 데이터와 함께 삭제된 다음 동일한 이름의 새 빈 컬럼이 생성됨을 의미합니다.
{{% /alert %}}

#### 문서화

이 기능을 사용하면 앱 내에서 Entity를 사용할 때 본인이나 다른 팀원에게 유용할 수 있는 Entity의 측면을 설명할 수 있습니다.

### 타입 섹션 {#type}

#### 타입

타입 속성은 Attribute에 저장할 수 있는 데이터의 유형을 정의합니다. 이것은 [데이터 타입](/refguide8/data-types/)에서 설명하는 데이터 타입과 관련이 있지만 일대일 매핑은 아닙니다.

{{% alert color="warning" %}}
Mendix는 기존 도메인 모델에서 Attribute 및 Association 유형을 변경할 수 있습니다. 일부 Attribute는 쉽게 변환할 수 있지만, 일부 유형 간 변환에는 제한 사항과 결과가 있습니다. 자세한 내용은 [Attribute 유형 마이그레이션](/refguide8/attributes-type-migration/)을 참조하십시오.
{{% /alert %}}

Attribute는 다음 유형 중 하나를 가집니다:

타입 | 가능한 값 | Mendix 데이터 타입으로 매핑 |
--- | --- | --- |
AutoNumber | 양수 또는 음수 정수.<br/>AutoNumber Attribute는 자동으로 생성되는 번호입니다. Attribute의 기본값이 생성될 첫 번째 번호를 결정합니다. 생성된 각 객체는 이전 번호보다 큰 AutoNumber를 가집니다. AutoNumber는 AutoNumber 값이 데이터베이스에서 계산되므로 영속 Entity에만 사용할 수 있습니다. | Integer/Long |
Binary¹ | 바이너리 데이터. 데이터가 데이터베이스에 저장되므로 영속 Entity에만 사용할 수 있습니다. 예를 들어 전체 파일. 대부분의 경우 파일 내용을 저장하기 위해 FileDocument 또는 Image에 대한 Association을 사용하는 것이 좋습니다. | Binary |
Boolean | True 또는 false. | Boolean | 
Date and time | 밀리초까지 정확한 날짜와 시간 구성 요소로 이루어진 시점. | Date and time |
Decimal | 소수점 이하 자릿수를 가질 수 있는 양수 또는 음수. Decimal 타입은 고정밀 계산에 사용할 수 있습니다. 예를 들어 금액을 나타내는 데 이 타입을 사용하십시오. Decimal 타입 Attribute가 데이터베이스에 저장될 때 해당 값은 2가지 조건에 대해 검증됩니다. 정수 부분(소수점 앞)의 자릿수가 20을 초과하면 예외가 발생합니다. 소수 부분(소수점 뒤)의 자릿수가 8을 초과하면 소수 값이 [은행가 반올림 규칙(짝수로 반올림)](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even)에 따라 자동으로 반올림됩니다. 따라서 Decimal 타입의 최대 허용 값은 99999999999999999999.99999999입니다. | Decimal |
Enumeration | 미리 정의된 Attribute 목록. 자세한 내용은 [Enumeration](/refguide8/enumerations/)을 참조하십시오. | Enumeration |
Hashed string | [프로젝트 설정](/refguide8/project-settings/#hash-algorithm)에서 지정된 알고리즘을 사용하여 해시된 문자열. 예를 들어 원래 비밀번호가 데이터베이스에 기록되지 않도록 비밀번호 해시를 저장하는 데 사용할 수 있습니다. | String |
Integer | 양수(최대 2³¹-1, 즉 2147483647), 음수(최소 -2³¹, 즉 -2147483648) 또는 0이 될 수 있는 정수. | Integer/Long |
Long | 양수(최대 2⁶³-1), 음수(최소 -2⁶³) 또는 0이 될 수 있는 정수. | Integer/Long |
String *(기본값)* | 문자, 공백, 숫자 및 기타 문자를 포함하는 텍스트. | String |

¹ Binary 타입 Attribute에 대략적으로 저장할 수 있는 최대 크기는 데이터베이스에 따라 다릅니다:

| HSQLDB | PostgreSQL | SQL Server | Oracle |
| --- | --- | --- | --- |
| 1 MB | 1 GB | 2 GB | 128 TB 또는 서버 하드 디스크로 제한 |

**예시**

웹 쇼핑몰에서 고객의 id, 프로필 사진, 레벨(서비스 품질용), 사용자 이름, 비밀번호, 활동, 총 온라인 시간(분), 가입 연도, 생년월일, 총 지출 금액 및 표준 할인 금액을 저장하려 합니다.

**CustomerId**는 모든 고객에 대해 고유해야 하므로 이 Attribute는 **AutoNumber** 타입입니다.

**Photo**는 Image를 특수화하는 Entity에 대한 Association으로 표현됩니다. 이 목적을 위해 Binary Attribute를 사용하지 않습니다.

**Level**은 High, Medium, Low의 세 가지 가능한 값을 가집니다. 이것은 **Enumeration** 타입의 Attribute에 저장됩니다.

**Password** 자체는 저장되지 않고 해시 값만 저장되므로 **Hashed string** 타입의 Attribute에 저장됩니다.

고객은 활성 또는 비활성일 수 있으며, 이것은 **Boolean** 타입의 **Active** Attribute에 저장됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/customer-attribute-examples.png" class="no-border" >}}

#### Localize

{{% alert color="info" %}}
이 속성은 **Type**이 **Date and time**으로 설정된 경우 표시됩니다.
{{% /alert %}}

이 속성은 날짜와 시간을 현지화해야 하는지 나타냅니다. 기본적으로 현지화가 활성화됩니다. 날짜의 시간 구성 요소에 관심이 *없는* 경우(예: 생일) 이 속성을 'No'로 설정해야 합니다. 그렇지 않으면 시간대 차이로 인해 날짜가 변경될 수 있습니다: 유럽에서 4월 2일 이른 아침의 날짜와 시간이 미국에서는 4월 1일이 됩니다.

기술적으로 이 속성은 클라이언트가 날짜와 시간이 현지 시간대(Yes)인지 UTC(No)인지 가정하는지를 나타냅니다. 전자의 경우 날짜가 서버로 전송되기 전에 먼저 UTC로 변환되고 표시되기 전에 UTC에서 변환됩니다.

기본값: *Yes*

#### Enumeration

{{% alert color="info" %}}
이 속성은 **Type**이 **Enumeration**으로 설정된 경우 표시됩니다.
{{% /alert %}}

Enumeration 속성은 이 Attribute에 가능한 값을 정의하는 Enumeration을 나타냅니다.

#### Length

{{% alert color="info" %}}
이 속성은 **Type**이 **String**으로 설정된 경우 표시됩니다.
{{% /alert %}}

이 속성은 String의 길이가 제한되는지 무제한인지 지정합니다. 길이가 제한된 경우 'Max length' 속성이 최대값을 지정합니다(아래 참조).

기본값: *Limited*

#### 최대 길이 (String Attribute 타입에만 해당)

{{% alert color="info" %}}
이 속성은 **Type**이 **String**으로 설정된 경우 표시됩니다.
{{% /alert %}}

'Max length' 속성은 Attribute에 저장할 수 있는 문자 수를 지정합니다.

기본값: *200*

### 값 섹션 {#value}

#### 값

**Value**는 Attribute의 값이 Microflow에 의해 **Calculated**되는지 또는 데이터베이스에 **Stored**되는지 결정합니다.

**Calculated** Attribute를 사용할 때 다음 사항에 유의하십시오:

* 계산된 Attribute가 있는 객체가 검색될 때마다 Attribute가 계산됩니다. Microflow의 복잡성과 검색하는 객체 수에 따라 성능에 영향을 줄 수 있습니다.
* Microflow에 의해 계산되는 Attribute는 데이터베이스에 저장되지 않습니다.
* 이 속성이 사용되는 Attribute에 대해 정렬하는 것은 불가능합니다. 정렬은 데이터베이스 엔진에 의해 수행되기 때문입니다.
* 커밋되지 않은 연관된 객체는 계산된 Attribute에서 검색할 수 없습니다.

#### Microflow

{{% alert color="info" %}}
이 속성은 **Value**가 **Calculated**로 설정된 경우 표시됩니다.
{{% /alert %}}

값이 계산인 경우, **Microflow** 속성은 객체가 검색될 때 Attribute의 값을 계산하기 위한 계산을 정의하는 Microflow를 정의합니다. Microflow는 Attribute의 Entity 유형의 매개변수를 가져야 하며 Attribute와 동일한 유형의 값을 반환해야 합니다.

예를 들어, 웹 쇼핑몰에서 각 고객의 총 지출을 표시하려 합니다. 이것은 고객과 연관된 모든 주문을 검색하고 총액을 더하여 계산됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/attributes/917570.png" class="no-border" >}}

#### 기본값

{{% alert color="info" %}}
이 속성은 **Value**가 **Stored**로 설정된 경우 표시됩니다.
{{% /alert %}}

**Default value** 속성은 객체가 생성될 때 이 Attribute의 값을 정의합니다. 기본값은 Attribute의 유형과 호환되어야 합니다.

| Attribute 타입 | 지정되지 않은 경우 기본값 | 추가 설명 |
| --- | --- | --- |
| AutoNumber | 1 | 이 Attribute의 시작 값. 이 Entity의 객체가 이미 있는 경우 AutoNumber 값은 id 컬럼 값의 오른쪽 32비트를 기반으로 합니다. 이는 Runtime이 100개 블록으로 id 값을 예약하기 때문에 100씩 점프하는 AutoNumber 범위의 간격이 발생할 수 있습니다. |
| Binary | N/A |   |
| Boolean | False |   |
| Date and time | (비어 있음) | 기본값은 `year-month-day` 형식의 UTC 날짜(선택적으로 `hour:minute` 또는 `hours:minute:second`가 뒤에 올 수 있음)이거나 `[%CurrentDateTime%]`(객체 생성 시 이 Attribute의 값을 날짜와 시간으로 설정)일 수 있습니다. |
| Decimal | 0 |   |
| Enumeration | (비어 있음) |   |
| Hashed string | (비어 있음) |   |
| Integer | 0 |   |
| Long | 0 |   |
| String | (비어 있음) |   |

### 제한 사항 {#limitations}

**Limitations** 속성은 Attribute를 필터링 및 정렬에 사용할 수 있는지 지정합니다:

* **Non-sortable** – Attribute를 정렬에 사용할 수 없습니다(예: Data Grid의 정렬 막대에서 이 Attribute를 사용하거나 Retrieve 액션에서 정렬에 사용할 수 없음)
* **Non-filterable** – Attribute를 필터링에 사용할 수 없습니다(예: XPath 제약 조건에서 이 Attribute를 사용하거나 목록 작업에서 필터링에 사용할 수 없음)

Mendix의 일부 Attribute 유형에는 항상 제한 사항이 있습니다:

* Hashed string Attribute는 필터링할 수 없습니다
* Binary Attribute는 정렬 및 필터링할 수 없습니다
* 계산된 Attribute는 정렬 및 필터링할 수 없습니다
