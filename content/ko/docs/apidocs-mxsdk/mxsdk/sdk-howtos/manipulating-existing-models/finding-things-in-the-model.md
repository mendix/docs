---
title: "모델에서 항목 찾기"
url: /apidocs-mxsdk/mxsdk/finding-things-in-the-model/
---

## 소개

`workingCopy.openModel()`에서 반환되는 `model` 객체를 사용하여 유닛과 엘리먼트를 찾고 조작할 수도 있습니다. 유닛과 엘리먼트를 찾을 수 있는 세 가지 방법을 제공합니다.

## model.root 속성

`root` 객체는 Studio Pro의 **앱 탐색기**에서 `root` 앱 노드를 참조합니다. 여기에서 앱 트리를 탐색하고 특정 문서로 이동할 수 있습니다.

예를 들어, 이 코드 조각은 앱의 첫 번째 모듈에 있는 `Customer` 엔티티(Entity)의 첫 번째 속성 이름을 찾습니다:

```js
const model = await workingCopy.openModel();

const domainModel = model.root.modules[0].domainModel;
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## model.allXXX() 함수

이 함수들은 특정 유형의 유닛의 전체 컬렉션을 반환합니다. 일부 유닛 유형은 추상적입니다(예: `allMicroflowBases`는 모든 마이크로플로우(Microflow)와 모든 규칙을 반환합니다).

따라서 위의 예제 코드 조각은 다음과 같이 표현할 수도 있습니다:

```js
const domainModel = model.allDomainModels()[0];
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## model.findXXXByQualifiedName() 함수

모델에서 참조 가능한 모든 개념(페이지 같은 유닛과 엔티티(Entity) 같은 엘리먼트 모두)에 대해 `model` 객체를 통해 `find` 함수가 노출됩니다. 정규화된 이름(예: `"Customers.Customer.Name"`)이 주어지면, 해당 이름의 엘리먼트를 찾거나 존재하지 않으면 `null`을 반환합니다.

```js
const customerEntity = model.findEntityByQualifiedName("Customers.Customer");
if (customerEntity) {
    const attributeName = customerEntity.attributes[0].name;
}
```

자세한 내용은 [유닛과 엘리먼트 로드 방법](/apidocs-mxsdk/mxsdk/loading-units-and-elements/)을 참조하십시오.

## model.allModules 함수

앱에서 사용된 모든 마켓플레이스 모듈에 대한 정보를 가져오려면 다음 코드 조각을 구현하십시오:

```js
const model = await workingCopy.openModel();
model.allModules()
	.filter(module => module.fromAppStore === true)
	.forEach(module =>
		console.log({
			name: module.name,
			appStoreVersion: module.appStoreVersion,
			appStoreGuid: module.appStoreGuid,
			appStoreVersionGuid: module.appStoreVersionGuid
		})
	);
```
