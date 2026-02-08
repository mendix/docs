---
title: "모델에서 사항 변경하기"
url: /apidocs-mxsdk/mxsdk/changing-things-in-the-model/
---

## 소개

모든 유닛과 엘리먼트는 타입 시스템을 준수하는 한 로드 후 자유롭게 변경할 수 있습니다. [IStructure](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/istructure.html) 객체에 정의된 `id`, `container`, `structureTypeName`, `isLoaded` 및 `unit` 속성은 사용해서는 안 됩니다: 이들은 (대부분) 내부 목적용입니다.

## 새 유닛과 엘리먼트 만들기

새 유닛을 만들려면 부모 구조 유닛을 생성자에 전달해야 합니다.

새 엘리먼트를 만들려면 `create` 메서드를 사용하십시오. 이렇게 하면 모델에서 분리된 엘리먼트가 생성됩니다. 엘리먼트를 만든 후 실제로 모델의 일부가 되려면 속성에 할당해야 합니다. 예를 들어, 새 `Attribute` 엘리먼트는 엔티티(Entity)의 `attributes` 배열에 push해야 합니다. 엘리먼트를 만들어 모델에 직접 연결하려면 `createIn`을 사용할 수 있습니다.

엘리먼트는 항상 특정 상태에 있습니다: new, attached, detached 또는 deleted. 상태에 따라 엘리먼트에 적용할 수 있는 변경 사항이 결정됩니다. 이러한 상태와 특성에 대한 전체 설명은 아래 [엘리먼트 상태](#es) 섹션을 참조하십시오.

모든 비목록형 속성은 단순히 할당을 사용하여 변경할 수 있습니다. 목록형 속성은 본질적으로 JavaScript 배열이므로, 교체하거나 `push`와 같은 JavaScript 내장 [배열](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 함수를 사용하여 변경할 수 있습니다.

참조는 SDK에 의해 자동으로 해결됩니다. 즉, 완전히 타입이 지정된 객체를 사용하여 참조를 직접 할당하거나 읽을 수 있습니다. 다른 유닛의 개념을 참조하는 각 속성에 대해, 참조의 문자열 표현을 제공하는 읽기 전용 속성 `<propertyName>QualifiedName`(또는 목록형 속성의 경우 `<propertyName>QualifiedNames`)도 사용할 수 있습니다.

다음 예제 함수는 도메인 모델(Domain Model)이 주어지면 속성이 있는 새 엔티티(Entity)를 만듭니다:

```typescript
import { domainmodels } from "mendixmodelsdk";

function createEntity(domainModel: domainmodels.DomainModel, entityName: string, attributeName: string) {
    const newEntity = domainmodels.Entity.createIn(domainModel);
    newEntity.name = entityName;

    // location in the Mendix Studio Pro working area:
    newEntity.location = { x: 100, y: 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
    newAttribute.name = attributeName;
}
```

## 엘리먼트 상태 {#es}

엘리먼트는 네 가지 상태 중 하나에 있을 수 있습니다. 상태에 따라 엘리먼트로 수행할 수 있는 작업이 결정됩니다.

### 상태

#### New

*new* 상태는 엘리먼트가 생성되었지만 아직 모델에 추가되지 않았음을 의미합니다. *new* 엘리먼트는 모델에 추가할 필요가 없으며 "잊힐" 수 있습니다.

*new* 엘리먼트는 다른 *new* 엘리먼트의 일부로 추가될 수 있습니다. 그러면 *new* 상태를 유지합니다. 이는 *new* 상태의 엘리먼트에만 적용되며, *detached* 엘리먼트는 new 엘리먼트에 추가할 수 없습니다.

*new* 상태의 엘리먼트가 모델에 연결되면, 해당 엘리먼트와 모든 하위 요소가 *attached* 상태가 됩니다.

*new* 엘리먼트가 *detached* 엘리먼트에 추가되면, *new* 엘리먼트와 하위 요소가 *attached* 상태가 됩니다.

*new* 상태의 엘리먼트는 *detached*가 될 수 없습니다.

#### Attached

*attached* 상태는 엘리먼트가 모델의 일부이거나 *detached* 엘리먼트의 일부임을 의미합니다.

엘리먼트가 모델의 일부가 되면 *attached* 상태가 됩니다. 이것이 "정상적인" 상황이므로 모든 접근이 허용됩니다. 규칙(예: 필수 여부)이 고려됩니다.

엘리먼트가 *attached* 상태가 되면 모든 하위 요소도 *attached* 상태가 됩니다.

#### Detached

*detached* 상태는 엘리먼트가 모델의 일부였다가 일시적으로 모델의 일부가 아닌 상태를 의미합니다.

*new* 상태의 엘리먼트는 *detach*할 수 없습니다.

*detached* 엘리먼트는 동일한 (암시적) 트랜잭션 내에서 다시 모델에 연결해야 합니다.

*attached* 상태와 마찬가지로 대부분의 접근이 허용됩니다:

* 속성 접근 및 변경이 허용됩니다
* *detached* 트리의 엘리먼트는 트리에서 다시 detach하거나 삭제할 수 있습니다

*attached* 상태와 달리, *detached* 상태의 엘리먼트는 *deleted*가 될 수 없습니다.

규칙(예: 필수 여부)이 고려됩니다.

엘리먼트가 *detached*되면 하위 요소는 원래(*attached*) 상태를 유지합니다.

*detached* 엘리먼트는 *attached* 엘리먼트에 연결할 수 있습니다. *detached* 엘리먼트는 *new* 엘리먼트에 연결할 수 없으며, *new* 엘리먼트를 먼저 연결해야 합니다.

*detached* 엘리먼트가 모델에 연결되면 해당 엘리먼트는 *attached*가 됩니다. *attached* 상태의 모든 하위 요소는 이 상태를 유지합니다.

#### Deleted

*deleted* 상태는 엘리먼트가 모델에서 삭제되었음을 의미합니다.

*deleted* 엘리먼트에 대한 모든 쓰기 접근은 금지되며 오류가 발생합니다.

*deleted* 엘리먼트의 모든 하위 요소도 *deleted*되며 접근할 수 없습니다. 엘리먼트가 *deleted* 상태가 되면 모든 하위 요소도 *deleted* 상태가 됩니다.

### 허용된 상태 변경 개요

| 시작 상태 | To *new*    | To *attached* | To *detached* | To *deleted* |
| -------------- | ----------- | ------------- | ------------- | ------------ |
| *new*          | -           | 허용       | 허용 안 됨   | 허용      |
| *attached*     | 허용 안 됨 | -             | 허용       | 허용      |
| *detached*     | 허용 안 됨 | 허용       | -             | 허용 안 됨  |
| *deleted*      | 허용 안 됨 | 허용 안 됨   | 허용 안 됨   | -            |

## 다음 단계

[모델에서 항목 찾기 방법](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/)을 계속하십시오.
