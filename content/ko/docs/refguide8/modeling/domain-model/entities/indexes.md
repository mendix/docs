---
title: "Index"
url: /refguide8/indexes/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

**Index**는 Entity의 기본 데이터베이스 테이블에 데이터베이스 인덱스가 생성되는 Attribute 목록입니다. 인덱스는 인덱싱된 Attribute가 검색 필드, Data Grid 또는 Template Grid의 XPath 제약 조건, 또는 OQL 쿼리의 `WHERE` 절에서 사용될 때 객체 검색 속도를 향상시킵니다. 그러나 `Comparison` 속성이 `Contains` 값을 가진 검색 필드는 향상된 성능의 이점을 누리지 못합니다.

Entity 속성의 **Indexes** 탭에서 Index를 추가하고 편집할 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/indexes/index-properties.png" alt="Example of index tab" class="no-border" >}}

{{% alert color="info" %}}
External Entity의 경우 Index 속성은 읽기 전용입니다. 자세한 내용은 [External Entity](/refguide8/external-entities/)를 참조하십시오.
{{% /alert %}}

## 중요 고려 사항

### Attribute 순서

Index는 순서가 있으므로, 두 개 이상의 Attribute에 Index를 만들 때 Attribute의 순서를 고려하는 것이 중요합니다. 여러 Attribute에 대해 검색하거나 쿼리할 때 향상된 성능을 활용하려면 이러한 Attribute가 Index와 동일한 순서여야 합니다. 확장하면, 검색이 하나의 Attribute에 의해서만 제한되는 경우 이것이 Index의 첫 번째 Attribute인 경우에만 향상된 성능이 달성됩니다.

### 시스템 멤버에 대한 Index

Entity의 `owner` 및 `changedBy` 시스템 멤버를 저장하도록 선택하면 Index가 생성됩니다. `createdDate` 및 `changedDate` 시스템 멤버에 대해서는 그렇지 않습니다. 또한 자동 생성된 Attribute `id`에 대한 Index가 생성됩니다. 이러한 Attribute의 구현에 대한 자세한 내용은 [도메인 모델](/refguide8/domain-model/)을 참조하십시오.

### 비영속 Entity에 대한 Index

Index는 데이터베이스 개념이므로 영속 Entity에 대해서만 Index를 정의할 수 있습니다. 따라서 비영속 Entity에 대해서는 Index가 비활성화됩니다.

### 성능 고려 사항

Index가 있는 Entity의 객체를 변경하고 삭제하는 것은 실제 데이터 외에 Index도 업데이트해야 하므로 더 오래 걸립니다. 따라서 검색이나 쿼리의 기준으로 거의 사용되지 않는 Attribute의 경우 검색 성능 향상이 업데이트 성능 감소를 정당화하는 경우에만 Index를 만드십시오.

## 예시

고객은 일반적으로 우편번호와 집 번호의 조합으로 검색됩니다. 따라서 Attribute 조합에 *하나의* Index를 설정합니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/indexes/customer-index-example.png" class="no-border" >}}

객체는 다음 OQL 쿼리로 검색됩니다. `WHERE` 절의 Attribute 순서가 Index의 Attribute 순서와 동일하다는 점에 유의하십시오:

```sql
FROM Module.Customer AS c
WHERE c.zipcode = $ParameterZipCode AND c.housenumber = $ParameterHouseNumber
SELECT c.name AS CustomerName
```
