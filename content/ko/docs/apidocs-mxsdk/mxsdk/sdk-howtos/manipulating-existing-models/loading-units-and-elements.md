---
title: "유닛과 엘리먼트 로드 작업"
url: /apidocs-mxsdk/mxsdk/loading-units-and-elements/
---

유닛이나 엘리먼트를 찾은 후, 변경하거나 인터페이스에서는 사용할 수 없는 정보를 분석하려면 완전히 로드된 형태로 가져와야 합니다. 인터페이스 형태의 엘리먼트를 변경하면 예외가 발생합니다.

각 엘리먼트(인터페이스 또는 전체 형태)에는 `isLoaded` 속성과 `load` 및 `asLoaded` 함수가 있습니다. [`isLoaded`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/istructure.html#isloaded) 속성은 이 엘리먼트가 이미 완전히 로드되었는지 여부를 나타냅니다. 실제로 이 값을 테스트할 필요는 없지만, 항상 유닛/엘리먼트를 먼저 `load`하도록 해야 합니다.

[`load`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/iabstractelement.html#load) 인터페이스는 엘리먼트나 유닛을 완전히 로드합니다. 이 프로세스는 비동기적입니다. JavaScript 용어로, 완전히 로드된 객체는 실제로 인터페이스와 동일한 인스턴스이지만, 편의를 위해 `load` 메서드에서 반환됩니다. 매개변수는 전체 비인터페이스 타입으로 업캐스트되어 타입 시스템(예: TypeScript 또는 스마트 IDE)이 모든 멤버에 대한 접근을 허용합니다. `load`는 특정 엘리먼트에서만 호출하더라도 항상 전체 유닛을 가져옵니다. 이전에 이미 로드된 경우 항상 로컬 캐시에서 유닛을 반환합니다.

유닛이 이미 로드되었을 수 있으므로, 인수 없이 엘리먼트/유닛에서 `asLoaded`를 사용할 수도 있으며, 이 경우 인터페이스 타입에서 전체 타입으로의 업캐스트 역할만 합니다. 그러나 주의하십시오: 해당 엘리먼트를 포함하는 유닛이 이전에 로드되지 않았으면 예외가 발생합니다.

다음 (약간 인위적인) 예제는 `load`의 동작을 보여줍니다. 이 예제에서는 설명을 위해 타입 정보를 명시적으로 작성했지만, TypeScript 컴파일러가 추론하므로 이 코드를 생략할 수 있습니다. 이 예제는 인위적입니다: 일반적인 흐름은 `domainModel`에서 `load`를 호출하고 콜백 내에서 완전히 로드된 도메인 모델(Domain Model)로 작업하는 것입니다.

```ts
const model = await workingCopy.openModel();

// at first, only interfaces are available:
const domainModel = model.allDomainModels()[0];
const entity1Interface = domainModel.entities[0];

console.log(entity1Interface.isLoaded); // ==> prints false

const entity1 = await entity1Interface.load();

// entity1 is now the fully-loaded entitiy of type domainmodels.Entity
console.log(entity1.isLoaded); // ==> prints true
console.log(entity1Interface === entity1); // ==> prints true

// loading the entity actually loaded the complete domain model unit:
console.log(domainModel.isLoaded); // prints true
// ... so we can cast it as a fully loaded domainModel:
const fullDomainModel = domainModel.asLoaded();

// In fully-loaded units, all sub elements also have the fully-loaded types,
// while in interfaces all sub objects are interfaces as well.
const entity2: domainmodels.Entity = fullDomainModel.entities[1];
console.log(entity2.isLoaded); // prints true
```

[모델에서 코드 생성 방법](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/)을 계속하십시오.
