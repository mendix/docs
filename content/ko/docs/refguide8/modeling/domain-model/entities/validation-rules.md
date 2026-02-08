---
title: "Validation Rule"
url: /refguide8/validation-rules/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Validation Rule은 객체가 커밋되기 전에 충족되어야 하는 조건입니다. Validation Rule에 의해 정의된 조건이 객체가 커밋될 때 충족되지 않으면 런타임 서버가 유효성 검사 오류를 생성합니다.

양식을 사용하여 객체가 커밋된 경우 유효성 검사 메시지가 표시됩니다.

Microflow에서 객체가 커밋된 경우 사용자 정의 오류 처리를 사용하여 처리할 수 있는 오류가 발생합니다.

다른 모든 경우 유효성 검사 오류는 Java 예외가 발생합니다.

예를 들어, Entity 'Customer'의 경우 이름과 크레딧은 항상 입력되어야 하고 비용은 크레딧보다 높을 수 없습니다. 이것은 도메인 모델 편집기에서 다음과 같이 시각화됩니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/validation-rules/customer-validation-rules.png" class="no-border" >}}

{{% alert color="warning" %}}
영속 Entity에 대해서만 Validation Rule을 정의할 수 있습니다. 이는 데이터베이스 무결성을 보장하기 위해 설계되었기 때문입니다. 따라서 비영속 Entity에 대해서는 Validation Rule이 비활성화됩니다.
{{% /alert %}}

## 속성

[Entity 대화 상자](/refguide8/entities/#dialog-box)에서 Entity에 대한 Validation Rule을 추가하고 편집할 수 있습니다.

Validation Rule 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/validation-rules/validation-rule-properties.png" class="no-border" >}}

Validation Rule 속성은 다음 섹션으로 구성됩니다:

* [일반](#general)
* [규칙](#rule)

### 일반 속성 {#general}

#### Attribute

**Attribute**는 Validation Rule이 적용되는 Attribute를 지정합니다. Validation Rule은 Entity의 Attribute에 적용되며, 일반화가 있는 경우 해당 일반화의 Attribute에도 적용됩니다.

#### 오류 메시지

**Error message**는 Attribute 값이 Validation Rule에 의해 정의된 조건을 충족하지 않을 때 최종 사용자에게 표시되는 메시지를 정의합니다.

### 규칙 속성 {#rule}

#### 규칙

규칙은 Attribute가 충족해야 하는 조건을 정의합니다.

| 옵션 | 설명 |
| --- | --- |
| Required *(기본값)* | Attribute에 값이 있어야 합니다. 비어 있을 수 없습니다. |
| Unique | 이 Attribute의 값은 동일한 Entity의 모든 다른 객체에서 이 Attribute의 값과 달라야 합니다. |
| Equals | Attribute 값이 지정된 값과 같거나 동일한 객체의 다른 Attribute 값과 같아야 합니다. |
| Range | Attribute 값이 두 값 사이이거나, 크거나 같거나, 작거나 같아야 합니다. 값은 지정된 고정 값이거나 동일한 객체의 다른 Attribute 값입니다. |
| Regular expression | Attribute가 [정규 표현식](/refguide8/regular-expressions/) 리소스에 저장된 정규 표현식과 일치해야 합니다. |
| Maximum length | Attribute는 지정된 문자 수를 초과할 수 없습니다. |

{{% alert color="info" %}}
날짜 값은 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) 형식으로 입력해야 합니다. 예: 2015-07-26.
{{% /alert %}}

#### 규칙 순서

Validation Rule은 Studio Pro에서 순서를 지정할 수 있습니다. 규칙의 순서는 적용 순서를 결정합니다. 여러 규칙이 위반되면 모든 오류 메시지가 (정의된 순서대로) 기록되고 페이지에 표시됩니다. 모든 Validation Rule에 대해 순서를 설정할 수 있지만, 모든 Attribute에 대해 모든 Validation Rule이 실행되므로 Attribute별 순서만 영향을 줍니다.

`uniqueness` 유효성 검사는 정의된 순서를 따르지 않습니다. 이 유효성 검사는 데이터베이스 쿼리가 필요하며 전체 객체가 다른 모든 Validation Rule을 충족할 때만 실행됩니다.
