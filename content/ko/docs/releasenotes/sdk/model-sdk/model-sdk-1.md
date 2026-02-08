---
title: "1"
url: /releasenotes/sdk/model-sdk-1/
weight: 100
---

## 1.2.0

| Story # | 영향도 | 설명 |
| --- | --- | --- |
| 619692 | 낮음 | `create` 및 `createIn` 메서드에 대한 TypeDoc을 추가/트리거하였습니다. 또한 6.1.0 이후의 `DatabaseConstraint`에 대한 `create` 메서드의 잘못된 동작을 수정하였습니다. |
| 623947 | 낮음 | Mendix 6.2.0 지원을 추가하였습니다. |

## 1.1.1

| Story # | 영향도 | 설명 |
| --- | --- | --- |
| 615031, 610152 | 낮음 | SDK가 매우 높은 CPU 사용량을 보이고 합리적인 요청 수에 대해 타임아웃을 발생시키는 문제를 수정하였습니다. |
| 617263 | 낮음 | File API 호출이 이제 워킹 카피 멤버에게도 접근 가능합니다. |
| 610152 | 낮음 | 더 나은 성능을 위해 SDK에서 모델 엘리먼트의 파싱을 개선하였습니다. |
| 614997 | 없음 | 유닛 테스트에 사용되는 내부 전용 테스트 메타 모델을 수정하였습니다. |

## 1.1.0

| Story # | 영향도 | 설명 |
| --- | --- | --- |
| 600896 | 낮음 | Mendix 6.1.0에 대한 다양한 메타 모델 업데이트 - 아래를 참조하세요. |

다음 변경 사항은 600896에 따라 이루어졌으며, Mendix 6.1.0 이상으로 만든 모델에만 해당됩니다:

* 페이지에 대한 새로운 모델링 구성 요소 `SelectorDatabaseSource`를 도입하였습니다.
* `DatabaseConstraint`는 더 이상 `DatabaseSourceBase` 인스턴스에서 직접 생성할 수 없습니다. 대신 `DatabaseConstraint`의 `create` 메서드를 사용하고 인스턴스를 적절한 컨테이너에 명시적으로 할당하세요. 즉, `DatabaseSourceBase`의 (하위 타입의) 인스턴스 또는 `SelectorDatabaseSource`의 `databaseConstraints`에 할당하세요.
* 다음 속성이 삭제되었으므로, Mendix 6.1.0 이상의 모델에서는 접근하면 안 됩니다:
    * `MsdMicroflow`와 `MsdMicroflowParameter`의 `systemEntityType`,
    * `ExportMapping`의 `parameterTypeName`,
    * `OperationInfo`의 `allowSimpleMappingInheritance`.

## 1.0.2

이 릴리스는 API 엔드포인트가 변경되어 확정되었으므로 모든 이전 SDK 버전을 대체합니다.
`npm update mendixmodelsdk --save`를 실행하세요.

| Story # | 영향도 | 설명 |
| --- | --- | --- |
| 585226 | 높음 | 모든 Model API 인프라가 유럽으로 이전되었으며 API의 기본 엔드포인트가 업데이트되었습니다. |
| 602450 | 낮음 | SDK는 이제 서버 스팸을 방지하기 위해 요청을 제한합니다. 이로 인해 성능이 약간 저하될 수 있습니다. |
| 606647 | 없음 | SDK가 이제 AWS에서 오는 EPIPE 오류를 올바르게 처리합니다. |

## 1.0.0

| Story # | 영향도 | 설명 |
| --- | --- | --- |
| 561960 | 높음 | 새 모델 엘리먼트를 생성하는 모든 생성자가 제거되었으며, 대신 팩토리 메서드를 사용해야 합니다. 마이그레이션은 간단합니다: `var entity = new domainmodels.Entity()`는 `var entity = domainmodels.Entity.create(model)`이 됩니다. 자세한 내용은 다음 단락을 참조하세요. |
| 562069 | 중간 | 버전 관리가 명시적으로 추가되었으므로, 엘리먼트와 속성의 사용이 제품(및 메타 모델) 버전에 대해 확인됩니다. 이에 따라 `new ModelSdkClient(..)`는 더 이상 유효하지 않으며 모든 곳에서 `Model.createSdkClient(..)`로 대체해야 합니다. |
| 569299 | 낮음 | 구조/엘리먼트/속성에 대한 도입/사용 중단/삭제 메시지가 TypeScript 문서에 표시됩니다. |
| 581572 | 낮음 | 로드되지 않은 엘리먼트 또는 속성을 사용할 때의 오류 메시지를 개선하였습니다. |
| 580561 | 낮음 | 오래된 Mendix Model SDK를 사용할 때 오류 메시지가 반환됩니다. 이제 Mendix Model SDK 1.0.0-rc.0 이상만 지원됩니다. |
| 588942 | 낮음 | 새 프로젝트 생성 시 안정성을 개선하였습니다. |
| 561960 | 낮음 | 엘리먼트 목록을 포함하는 속성에 `null` 또는 이미 존재하는 항목을 push하는 것이 더 이상 불가능합니다. |
| 561960 | 낮음 | `LayoutParameter`와 같은 파생 객체를 인스턴스화하는 것이 더 이상 불가능합니다. |
| 561960 | 낮음 | 모든 모델 엘리먼트는 해당 엘리먼트가 속한 모델을 반환하는 `.model` 속성을 노출합니다. |
| 561960 | 낮음 | 고유한 위치에 저장되는 모든 엘리먼트에 대해 엘리먼트를 생성하고 부모에 직접 추가하는 편의 메서드가 도입되었습니다(이는 `texts.Text`와 같은 유틸리티를 제외한 대부분의 엘리먼트에 해당됩니다). 자세한 내용은 다음 단락을 참조하세요. |
| 553639 | 낮음 | Model API와 SDK는 Modeler와 동일한 규칙으로 속성을 `null`로 설정합니다: (1) 목록 속성은 `null`을 전혀 받을 수 없으며, (2) 비목록 속성은 객체 타입(즉, 원시 또는 열거형이 아닌)이고 필수가 아닌 경우에만 `null`로 설정할 수 있습니다(문서 참조). |
| 561972 | 낮음 | 모델 엘리먼트를 한 모델에서 다른 모델로 이동하는 것이 더 이상 불가능합니다. 즉, 모델 엘리먼트는 생성된 모델 내에서만 존재할 수 있습니다. |
| 562069, 561977, 568908 | 없음 | SDK에 버전 관리가 추가되어 구조와 속성이 라이프사이클을 가질 수 있습니다. Mendix Modeler의 어떤 버전을 사용하여 워킹 카피의 *.mpk*를 생성했는지에 따라 `아직 도입되지 않음`에서 `도입됨`, `사용 중단됨`, `삭제됨`으로 변경됩니다. SDK는 아직 도입되지 않았거나, 사용 중단되었거나, 삭제된 구조 또는 속성이 사용될 때 적절한 경고 또는 오류를 콘솔에 제공합니다(연결당 구조/속성당 한 번). |
| 463511* | 낮음 | 정규화된 이름으로 이미지 찾기가 이제 작동합니다. 따라서 예를 들어, `pages.StaticImageViewer.image`가 항상 `null`이 아닙니다. |
| 585563 | 낮음 | 대용량 파일 업로드 시 안정성을 개선하였습니다. |
| 583025 | 낮음 | `Structure#traverse`는 이제 구조가 로드되었는지 확인하고, 로드되지 않은 경우 실패합니다. 아직 로드하지 않은 경우 순회 구조를 먼저 사전 로드해야 합니다. |
| 585492 | 낮음 | 최신(RC) 버전의 Modeler에 대해 Model SDK를 업데이트하였습니다. |
| 590510 | 없음 | Model SDK에 파일 작업을 추가하였습니다. |
| 591741 | 없음 | 빌드 프로세스를 개선하였습니다. |
| 564149 | 없음 | Model SDK는 이제 SDK 자체의 유닛 테스트에만 사용되는 별도의 "미니 SDK"를 포함합니다. |
| 463511* | 없음 | `IStructure`, `IList`, `IAbstractUnit` 및 `IEnum`이 이제 (요청에 의해) 최상위 수준에서 다시 노출됩니다. |
| 463511* | 없음 | `Structure`에 이 구조 및 포함된(참조되지 않은) 모든 구조를 (동기적으로) 순회하는 `traverse`라는 새 메서드가 추가되었습니다. 자세한 내용은 TypeDoc을 참조하세요. |

('*'는 이 스토리 중에 수정되었지만, 이 스토리와 본질적으로 관련이 없음을 의미합니다)

### 구조 팩토리 도입

이 릴리스에서 인수 없는 생성자에서 팩토리 메서드로 전환하였습니다. 이에는 몇 가지 장점이 있습니다: 1\. 생성하는 타입이 프로젝트의 Mendix 버전에서 사용 가능한지 등 사전에 더 많은 일관성 검사를 수행할 수 있습니다. 2\. 팩토리는 생성자보다 훨씬 다양한 방식으로 오버로드할 수 있어, 향후 더 많은 편의 팩토리를 도입할 수 있습니다.

따라서 다음과 같은 코드가 있었다면:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = new domainmodels.Entity();
	domainModel.entities.push(entity);
	entity.name = name;

	return entity;
}</code>
```

이것은 다음과 같이 됩니다:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = domainmodels.Entity.create(domainModel.model); // 모든 팩토리는 소유 모델을 알아야 합니다
	domainModel.entities.push(entity);
	entity.name = name;

	return entity;
}</code>
```

이것은 새 구조를 만드는 것이 덜 편리해 보일 수 있습니다. 그러나 자동으로 새 엘리먼트를 생성하고 부모에 등록하는 편의 팩토리 메서드를 도입하였습니다. 따라서 이 릴리스부터 다음과 같이 작성할 수 있습니다:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = domainmodels.Entity.createIn(domainModel); // 모델 대신 domainModel을 전달합니다
	entity.name = name;

	return entity;
}</code>
```

이것은 애플리케이션 생성기에서 보일러플레이트 코드의 양을 크게 줄여줍니다.
