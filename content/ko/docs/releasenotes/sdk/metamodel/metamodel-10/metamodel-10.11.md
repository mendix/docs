---
title: "10.11"
url: /releasenotes/sdk/metamodel-10.11/
weight: 89
---

## 10.11.0

### Microflows

#### ExternalActionParameterMapping (Element)

* `includedAssociations` 속성을 도입하였습니다. 

#### IncludedAssociation (Element)

* 이 엘리먼트를 도입하였습니다. 

### Settings

#### RuntimeSettings (Element)

* `useOQLVersion2` 속성을 도입하였습니다. 

### Rest

#### StringBody (Element)

* `value` 속성을 삭제하였습니다. Info: "Use valueTemplate을(를) 사용하세요."
* `valueTemplate` 속성을 도입하였습니다. Info: "String version of the request body using ValueTemplate."

### Navigation

#### NativeNavigationProfile (Element)

* `screenNavigationTransition` 속성을 도입하였습니다. 
* `popupNavigationTransition` 속성을 도입하였습니다. 
* `applyScreenTransition` 속성을 도입하였습니다. 
* `hermesEnabled` 속성을 도입하였습니다. 

### Pages

#### AttributeWidgetWithPlaceholder (Element)

* `placeholder` 속성을 삭제하였습니다. Info: "Use property 'placeholderTemplate' instead"
* `placeholderTemplate` 속성을 도입하였습니다. 
