---
title: "웹 API를 사용하여 Mendix 모델에 액세스"
linktitle: "Mendix 모델"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/model-api/
weight: 40
---

## 소개

이 사용 방법(how-to)에서는 Mendix 모델에 액세스할 수 있는 Model Access API를 사용하는 방법을 설명합니다.

## Model Access API 사용 {#using-api}

모델은 `studioPro.app.model` 객체를 통해 노출되는 여러 구성 요소로 나뉩니다. 현재 지원되는 구성 요소는 다음과 같습니다:

* buildingBlocks
* domainModels
* enumerations
* pages
* snippets

아래와 같이 페이지와 도메인 모델을 포함하는 구문을 사용하여 이러한 구성 요소를 포함할 수 있습니다.

```ts
const { pages, domainModels } = studioPro.app.model;
```

## 단위(Unit) 정보 읽기 및 단위 로드 {#units-info-load}

단위(Unit)는 요소를 포함하는 Mendix 문서(예: 페이지 또는 도메인 모델)입니다. 각 요소는 컨테이너 요소 내에 상주하며 자체적으로 다른 요소를 포함할 수 있습니다. 이 요소들은 함께 Mendix 모델의 로직을 형성합니다. 자세한 내용은 [Mendix 메타모델](/apidocs-mxsdk/mxsdk/mendix-metamodel/)을 참조하십시오.

각 구성 요소(예: 페이지 `studioPro.app.model.pages`)는 담당하는 단위를 노출합니다. 해당 단위에 대한 단위 정보를 로드한 후에만 단위의 모든 콘텐츠에 액세스할 수 있습니다.

`UnitInfo` 인터페이스로 설명되는 단위 정보에는 다음 필드가 포함됩니다:

| 이름 | 설명 | 예시 값 |
| --- | --- | --- |
| `$ID` | 단위의 고유 ID | `077d1338-a548-49a9-baee-c291e93d19af` |
| `$Type` | 단위의 유형 | `Pages$Page` |
| `moduleName` | (선택 사항) 단위를 포함하는 모듈의 이름 | `MyFirstModule` | 
| `name` | (선택 사항) 단위의 이름 | `ExamplePage` |

예를 들어, 다음 코드를 사용하여 `domainModels` 구성 요소에서 관리하는 모든 단위를 검색할 수 있습니다:

```ts
const unitsInfo: Primitives.UnitInfo[] = await domainModels.getUnitsInfo()
```

단위는 `component.loadAll(fn)`에 함수 `fn`을 제공하여 로드할 수 있습니다. 함수 `fn`은 지정된 단위를 로드하려면 `true`를 반환해야 합니다.

{{% alert color="warning" %}}
단위를 로드하는 것은 리소스 집약적인 프로세스입니다. 필요할 때만 단위를 로드하십시오.
{{% /alert %}}

## 예시

다음 코드 조각은 `MyFirstModule`이라는 모듈의 `domainModel`을 로드합니다:

```ts
const [domainModel] = await domainModels.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule');
```

다음 코드 조각은 `MyFirstModule` 모듈에서 `Home_Web`이라는 이름의 페이지를 로드합니다:

```ts
const [page] = await pages.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule' && info.name === 'Home_Web')
```

## 단위 콘텐츠 읽기 {#read}

단위 내의 요소는 `get<ElementName>` 도우미 메서드를 사용하여 액세스할 수 있습니다.

예를 들어, 다음 코드 조각은 이전에 로드된 `DomainModels` 단위에서 `MyEntity`라는 엔티티를 가져옵니다:

```ts
const entity: DomainModels.Entity = domainModel.getEntity("MyEntity");
```

## 단위 콘텐츠 수정 {#modify}

`add<ElementName>` 도우미 메서드를 활용하여 Mendix 모델을 수정할 수 있습니다.

{{% alert color="warning" %}}
단위를 변경한 후에는 항상 `component.save(unit)` 메서드를 호출하십시오. 이 메서드는 수정된 각 단위에 대해 호출되어야 하므로 여러 단위에 대한 변경 사항은 개별적으로 저장해야 합니다.
{{% /alert %}}

다음 코드 조각은 이전에 로드된 `DomainModels` 단위 내에 새 엔티티를 생성합니다:

```ts
const newEntity: DomainModels.Entity = await domainModel.addEntity({ name: "NewEntity", attributes: [{ name: "MyAttribute", type: "AutoNumber" }]});

newEntity.documentation = "New documentation";

await domainModels.save(domainModel);
```

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
