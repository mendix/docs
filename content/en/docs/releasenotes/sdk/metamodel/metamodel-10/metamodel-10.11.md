---
title: "10.11"
url: /releasenotes/sdk/metamodel-10.11/
weight: 89
---

## 10.11.0

### Microflows

#### ExternalActionParameterMapping (Element)

* We introduced the `includedAssociations` property. 

#### IncludedAssociation (Element)

* We introduced this element. 

### Settings

#### RuntimeSettings (Element)

* We introduced the `useOQLVersion2` property. 

### Rest

#### StringBody (Element)

* We deleted the `value` property. Info: "Use valueTemplate instead."
* We introduced the `valueTemplate` property. Info: "String version of the request body using ValueTemplate."

### Navigation

#### NativeNavigationProfile (Element)

* We introduced the `screenNavigationTransition` property. 
* We introduced the `popupNavigationTransition` property. 
* We introduced the `applyScreenTransition` property. 
* We introduced the `hermesEnabled` property. 

### Pages

#### AttributeWidgetWithPlaceholder (Element)

* We deleted the `placeholder` property. Info: "Use property 'placeholderTemplate' instead"
* We introduced the `placeholderTemplate` property. 
