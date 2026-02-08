---
title: "Mendix Metamodel의 도메인 모델"
linktitle: "Metamodel의 도메인 모델"
url: /apidocs-mxsdk/mxsdk/domain-model-metamodel/
description: "이 문서는 도메인 모델(Domain Model)이 모든 구성 요소(속성, 접근 규칙 등)와 어떻게 작동하는지 설명합니다."
weight: 2
---

## 소개

도메인 모델(Domain Model)은 앱에 저장되는 데이터를 나타냅니다. 각 모듈에는 도메인 모델(Domain Model)이 있으며, 특정 타입의 속성(Attribute)을 가진 엔티티(Entity)와 다른 엔티티(Entity)와의 연관(Association)으로 구성됩니다.

속성(Attribute)에는 `value`가 있으며, 이는 데이터베이스에 저장되는 값인 `StoredValue`이거나 `Microflow`에서 계산되는 `CalculatedValue`일 수 있습니다.

엔티티(Entity)는 일반화(Generalization)를 통해 서로 관련될 수도 있습니다. 마지막으로, 엔티티(Entity)에 대한 접근 규칙, 유효성 검사 규칙, 이벤트 핸들러 및 인덱스를 정의할 수 있습니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842837.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [도메인 모델](/refguide/domain-model/) | TypeScript 모듈 [domainmodels](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/domainmodels.html)  |
| [엔티티](/refguide/entities/) | [DomainModel](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.DomainModel.html) |
| [속성](/refguide/attributes/) | [Entity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Entity.html) |
| [연관](/refguide/associations/) | [Association](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Association.html) |
| | [Attribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Attribute.html) |

## 속성

엔티티(Entity)는 여러 속성(Attribute)을 가질 수 있습니다. 각 속성(Attribute)에는 특정 타입이 있습니다.

### 비숫자 속성의 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842840.svg" class="no-border" >}}

### 숫자 속성의 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842841.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [속성](/refguide/attributes/) | Entity의 속성 [`attributes`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Entity.html#attributes)  |
| | [Attribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Attribute.html) |
| | [AttributeType](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.AttributeType.html) |

## 일반화 관계

엔티티(Entity)는 다른 엔티티(Entity)와 일반화(Generalization) 관계를 가질 수 있습니다. 이 경우 해당 엔티티(Entity)를 특수화(Specialization)라고 합니다. 특수화(Specialization) 엔티티(Entity)는 일반화(Generalization) 엔티티(Entity)의 모든 속성, 유효성 검사 규칙 및 접근 규칙을 상속합니다.

`Entity` 인스턴스에는 이 관계를 정의하는 `generalization` 속성이 있습니다. 다른 엔티티(Entity)의 특수화(Specialization)가 아닌 경우 `NoGeneralization` 인스턴스로 설정하거나, `Generalization` 인스턴스로 설정할 수 있습니다. `Generalization` 인스턴스에는 실제 일반화(Generalization)인 엔티티(Entity)를 가리키는 `generalization` 속성이 다시 있습니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842839.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [엔티티](/refguide/entities/) | Entity의 속성 [`generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Entity.html#generalization) |
| | [GeneralizationBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.GeneralizationBase.html) |
| | [Generalization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Generalization.html) |
| | [NoGeneralization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.NoGeneralization.html) |

## 접근 규칙

Mendix 앱의 데이터에 대한 접근을 보호하기 위해 엔티티(Entity)에 대한 접근 규칙을 정의할 수 있습니다. 접근 규칙은 항상 특정 모듈 역할에 대해 정의되며, 해당 역할이 어떤 속성 또는 연관(Association) 멤버에 접근할 수 있는지를 정의하고, 검색된 데이터는 XPath 제약 조건에 의해 제한됩니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842835.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [접근 규칙](/refguide/access-rules/) | Entity의 속성 [`accessRules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#accessrules) |
| | [AccessRule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.AccessRule.html) |
| | AccessRule의 속성 [`xpathConstraint`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.AccessRule.html#xPathConstraint) |
| | [ModuleRole](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/security.ModuleRole.html) |

## 유효성 검사 규칙

엔티티(Entity)의 각 속성(Attribute)에 대해 유효성 검사 규칙을 정의할 수 있습니다. 유효성 검사 규칙은 단일 속성(Attribute)에 적용되며, 오류 메시지를 표시하고, 특정 유형의 규칙입니다. 예를 들어, 속성(Attribute)이 특정 값과 같아야 하거나, 최대 길이가 있거나, 고유해야 합니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842834.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [유효성 검사 규칙](/refguide/validation-rules/) | Entity의 속성 [`validationRules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Entity.html#validationRules) |
| | [ValidationRule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.ValidationRule.html) |
| | [RuleInfo](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.RuleInfo.html) |

## 인덱스

엔티티(Entity)는 여러 인덱스를 가질 수 있습니다. 각 인덱스는 인덱싱된 속성(Attribute)의 집합으로 구성됩니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/domain-model-metamodel/16842836.svg" class="no-border" >}}

| Studio Pro 가이드 | Model SDK API 문서 |
| --- | --- |
| [인덱스](/refguide/indexes/) | Entity의 속성 [`indexes`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Entity.html#indexes) |
| | [Index](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.Index.html) |
| | [IndexedAttribute](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.IndexedAttribute.html) |
