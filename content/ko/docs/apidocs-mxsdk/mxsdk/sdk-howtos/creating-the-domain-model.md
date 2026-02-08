---
title: "도메인 모델 만들기"
url: /apidocs-mxsdk/mxsdk/creating-the-domain-model/
weight: 30
description: "상속이 있는 도메인 모델을 만드는 방법과 Mendix Metamodel과 SDK의 관계에 대해 설명합니다."
---

## 소개

이제 단일 엔티티(Entity)로 새 앱을 생성하는 첫 번째 스크립트가 작동합니다. 이 사용 방법 가이드는 더 광범위한 도메인 모델(Domain Model)을 만드는 과정을 안내합니다. 이 가이드가 끝나면 두 개의 엔티티(Entity)인 `Customer`와 `Invoice`가 있는 도메인 모델(Domain Model)을 갖게 됩니다. 이 엔티티들은 일대다 연관(Association)으로 연결되어야 합니다. `Customer` 엔티티(Entity)는 `Administration.Account` 엔티티(Entity)(그리고 간접적으로 `System.User`)의 특수화(Specialization)가 되어, 고객이 앱에 로그인할 수 있도록 해야 합니다.

이 문서에서는 다음을 수행하는 방법을 배우게 됩니다:

* 상속이 있는 도메인 모델(Domain Model) 만들기
* Mendix Metamodel과 SDK의 관계 설명

이 가이드를 완료하면 다음과 같은 도메인 모델(Domain Model)을 가진 앱을 생성할 수 있게 됩니다:

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-howtos/creating-the-domain-model/16844083.png" class="no-border" >}}

이러한 도메인 모델(Domain Model)을 만들기 위해서는 몇 가지 질문에 대한 답이 필요합니다:

1. 앱의 어떤 부분을 변경하고 싶은가?
2. 어떤 SDK 클래스를 사용해야 하는가?
3. 해당 SDK 클래스를 어떻게 사용하는가?

첫 번째 질문에 대한 답은 기능 요구 사항에 직접 기반합니다: 두 개의 엔티티(Entity), 하나의 연관(Association)을 만들고, 두 엔티티(Entity) 중 하나의 일반화(Generalization)를 설정해야 합니다. 두 번째와 세 번째 질문에 대한 답은 여러 정보 소스를 결합해야 합니다: [Studio Pro 가이드](/refguide/), [SDK 참조 가이드](/apidocs-mxsdk/mxsdk/sdk-refguide/), 그리고 [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html) 문서입니다.

*Studio Pro 가이드*는 Mendix 앱 모델의 다양한 부분에 대해 구성할 수 있는 항목의 개요를 제공하고, Mendix Metamodel 참조 가이드는 SDK에서 사용 가능한 실제 프로그래밍 가능한 객체를 상세히 지정하며, Model SDK API 문서는 실제 코드를 작성하는 데 필요한 정확한 API 세부 사항을 제공합니다.

이 가이드는 도메인 모델(Domain Model)을 만들기 위해 이러한 소스에서 필요한 정보를 수집하는 과정을 안내합니다. 동시에 SDK 문서의 일반적인 개념과 구조를 설명합니다. 이를 통해 앱 모델의 다른 부분을 조작하는 데 필요한 정보를 찾을 수 있게 됩니다.

## 엔티티 만들기

먼저 두 개의 엔티티(Entity), `Customer`와 `Invoice`를 만듭니다. 엔티티(Entity)에는 `name`과 `documentation` 같은 기본 속성이 있습니다. Studio Pro에서 엔티티(Entity)를 선택했을 때 속성 패널에서 이를 확인할 수 있습니다. 이러한 속성은 *Studio Pro 가이드*의 [엔티티](/refguide/entities/) 주제에서 문서화되어 있습니다.

앱 모델의 관련 개념은 Mendix Metamodel 참조 가이드에서 찾을 수 있습니다. 이 경우 도메인 모델(Domain Model)을 다루고 있으므로 [도메인 모델](/apidocs-mxsdk/mxsdk/domain-model-metamodel/) 페이지가 시작점입니다. 개요 섹션에서 `Entity`가 보이며, 이것이 새 도메인 모델 엔티티(Entity)를 생성하기 위한 후보입니다.

그러면 SDK로 이러한 속성을 어떻게 설정할까요? Model SDK API 문서가 이 정보를 제공합니다. [`domainmodels.Entity`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html) 페이지에서 도메인 모델 엔티티(Entity)에 대해 구성할 수 있는 모든 항목을 찾을 수 있으며, 여기에는 [`name`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#name) 및 [`documentation`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#documentation) 속성이 포함됩니다. 이들은 `string` 타입이므로 값을 임의의 `string` 값으로 직접 설정할 수 있습니다.

새 `Customer` 엔티티(Entity)를 만들려면 도메인 모델(Domain Model)에 단일 엔티티(Entity) 인스턴스를 생성한 다음 이름을 설정합니다.

```ts
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
```

`Entity`에는 Studio Pro의 도메인 모델 편집기에서 엔티티(Entity)가 표시되는 위치를 정의하는 [`location`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#location) 속성도 있습니다. 도메인 모델 편집기에서 엔티티가 서로 겹치지 않도록 각 엔티티(Entity)에 이 속성을 설정해야 합니다. 이를 위해 좌표에 대한 `x`와 `y` 속성이 있는 JSON 객체로 속성을 설정합니다:

```ts
customer.location = { x: 100, y: 100 };
```

이러한 구성 요소를 사용하여 두 개의 엔티티(Entity)를 만들 수 있습니다. [이전 가이드 단계](/apidocs-mxsdk/mxsdk/creating-your-first-script/)에서 만든 스크립트에서 단일 엔티티(Entity)를 생성하는 코드 조각을 다음 코드 조각으로 바꾸어 두 개의 새 엔티티(Entity)를 만드십시오:

```ts
const domainModel = await domainModelInterface.load();
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
customer.location = { x: 100, y: 100 };

const invoice = domainmodels.Entity.createIn(domainModel);
invoice.name = `Invoice`;
invoice.location = { x: 400, y: 100 };
```

### 리소스

*Studio Pro 가이드*

* [도메인 모델의 데이터](/refguide/domain-model/)
* [엔티티](/refguide/entities/)

Metamodel 참조 가이드

* [도메인 모델](/apidocs-mxsdk/mxsdk/domain-model-metamodel/)

Model SDK API 문서

* [domainmodels.Entity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html)
* [Entity.name](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#name)

* [Entity.documentation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#documentation)

* [Entity.location](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#location)

## 연관 만들기

다음 단계는 `Customer`와 `Invoice` 엔티티(Entity) 간의 관계를 정의하는 연관(Association)을 만드는 것입니다: `Customer`는 0개 이상의 `Invoice`를 가질 수 있습니다.

*Studio Pro 가이드*는 [연관](/refguide/associations/)에 소유자가 있으며 참조(세트)임을 설명합니다. [도메인 모델](/apidocs-mxsdk/mxsdk/domain-model-metamodel/)에 대한 Mendix Metamodel 참조 가이드의 개요에서 `Association`이 `AssociationBase`를 상속한다는 것을 보여주며, 이는 자체 속성 외에 `AssociationBase`의 모든 속성을 가지고 있음을 의미합니다. Metamodel 참조 문서 그래프에서 `Entity`와 `Association`이 `Association`의 `child` 및 `parent` 속성을 통해 관련되어 있음을 보여줍니다(화살표는 `Association`에서 `Entity`로 향합니다). `child`와 `parent` 속성은 각각 도메인 모델 편집기에서 연관(Association) 화살표의 대상과 소스를 정의합니다.

따라서 이 두 속성을 올바른 엔티티(Entity)를 가리키도록 설정해야 합니다. 연관(Association)에 사용 가능한 모든 속성의 정확한 개요는 관련 객체의 Model SDK API 문서에서 찾을 수 있으며, 이 경우 [`Association`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html)입니다.

표준 참조(일대다) 연관(Association)을 만들려면 하나의 Association 인스턴스를 인스턴스화하고, 이름을 설정하고, `child` 및 `parent` 속성을 정의합니다. `child` 속성은 연관(Association)의 '1' 쪽을 가리키고, `parent` 속성은 '다(many)' 쪽을 가리킵니다. 동일한 모듈의 도메인 모델(Domain Model)에서 모든 엔티티(Entity) 참조로 설정할 수 있습니다(크로스 모듈 연관의 경우 [`CrossAssociation`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.crossassociation.html)을 사용하십시오).

다음 코드 조각은 `Customer`와 `Invoice` 연관(Association) 사이의 연관을 만듭니다:

```ts
const invoices = domainmodels.Association.createIn(domainModel);
invoices.name = `Invoices`;
invoices.child = customer;
invoices.parent = invoice;
```

엔티티(Entity)와 마찬가지로, 엔티티 간 연관(Association)의 화면상 위치는 `childConnection` 및 `parentConnection` 속성의 값을 설정하여 결정할 수 있으며, 이는 자식 및 부모 엔티티(Entity)의 상대적 위치입니다. 이러한 속성은 비워 둘 수 있으며 기본값은 `{x:0, y:0}`(엔티티(Entity)의 왼쪽 상단)입니다.

```ts
invoices.childConnection = { "x": 100, "y": 30 };
invoices.parentConnection = { "x": 0, "y": 30 };
```

위의 두 코드 조각을 결합하면 도메인 모델(Domain Model)에 `Invoice`와 `Customer` 사이의 완전히 작동하는 일대다 연관(Association)을 추가할 수 있습니다. 엔티티를 생성하는 줄 바로 아래, `return workingCopy` 문 앞에 다음 코드 조각을 스크립트에 추가하십시오:

```ts
const invoices = domainmodels.Association.createIn(domainModel);
invoices.name = `Invoices`;
invoices.child = customer;
invoices.parent = invoice;

invoices.childConnection = { "x": 100, "y": 30 };
invoices.parentConnection = { "x": 0, "y": 30 };
```

### 리소스

*Studio Pro 가이드*

* [연관](/refguide/associations/)

Metamodel 참조 가이드

Model SDK API 문서

* [Association](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html)
* [AssociationBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.associationbase.html)
* [Association.parent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html#parent)
* [Association.child](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.association.html#child)

## 일반화 구성

마지막으로, `Customer` 엔티티(Entity)를 `Administration.Account`의 특수화(Specialization)로 구성하여 고객이 앱에 로그인할 수 있도록 합니다. *Studio Pro 가이드*에서는 [엔티티](/refguide/entities/) 페이지에서 상속을 설명합니다. 다른 엔티티(Entity)의 특수화(Specialization)인 엔티티(Entity)는 해당 엔티티(Entity)의 모든 속성과 동작을 상속합니다.

참조 가이드의 Metamodel에는 Mendix Metamodel의 상속 구조가 어떻게 되어 있는지 보여주는 다이어그램이 포함된 '일반화 관계' 섹션이 있습니다.

Model SDK에서 [`Entity.generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html#generalization) 속성은 이 동작을 구성하는 데 사용됩니다. [`NoGeneralization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.nogeneralization.html) 인스턴스로 설정되면 엔티티(Entity)에 일반화(Generalization)가 없습니다. [`Generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html) 인스턴스로 설정되면 엔티티(Entity)는 [`Generalization.generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html#generalization) 속성으로 설정된 엔티티(Entity)의 특수화(Specialization)입니다.

따라서 엔티티 `Customer`를 엔티티 `Administration.Account`의 특수화(Specialization)로 설정하려면, 먼저 [여러 가지 방법으로 수행할 수 있는](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/) `Account` 엔티티(Entity)를 조회해야 합니다. 다음 코드 조각은 `findEntityByQualifiedName` 함수를 사용하여 `Administration` 도메인 모델(Domain Model)에서 `Account` 엔티티(Entity)를 조회합니다:

```ts
const systemUser = model.findEntityByQualifiedName(`Administration.Account`);
```

`Account` 인스턴스를 구성하는 데 사용할 `domainmodels.Generalization` 인스턴스를 이제 생성할 수 있습니다. `generalization` 속성은 조회한 `System.User` 엔티티(Entity) 인스턴스로 설정됩니다:

```ts
if(systemUser){
    const generalization = domainmodels.Generalization.createIn(customer);
    generalization.generalization = systemUser;
}
```

종합하면, `Customer` 엔티티(Entity)의 생성은 다음 코드 조각과 같습니다. 스크립트에서 `customer` 엔티티(Entity) 인스턴스 생성 부분을 다음 코드 조각으로 바꾸십시오:

```ts
const customer = domainmodels.Entity.createIn(domainModel);
customer.name = `Customer`;
customer.location = { x: 100, y: 100 };

const generalization = domainmodels.Generalization.createIn(customer);
const systemUser = model.findEntityByQualifiedName(`Administration.Account`);
if (systemUser) {
    generalization.generalization = systemUser;
}
```

### 리소스

*Studio Pro 가이드*

* [엔티티](/refguide/entities/)

Metamodel 참조 가이드

Model SDK API 문서

* [Generalization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html)
* 속성 [`generalization`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.generalization.html#generalization)
* [NoGeneralization](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.nogeneralization.html)

## 결론

이것으로 스크립트가 완성됩니다. 이전 섹션에서 설명한 대로 컴파일하고 실행하십시오. Studio Pro에서 앱을 열어 결과를 확인하십시오!
