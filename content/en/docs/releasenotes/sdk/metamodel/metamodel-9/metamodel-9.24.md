---
title: "9.24"
url: /releasenotes/sdk/metamodel-9.24/
weight: 76
---

## 9.24.0

**Release date: March 20, 2023**

### DomainModels

#### MultiLanguageAttributeType (Element)

* We deleted this element. 

### Microflows

#### AggregateListAction (Element)

* We changed the default value of the `aggregateFunction` property.

#### ListRange (Element)

* We introduced this element. 

### Security

#### ProjectSecurity (ModelUnit)

* We introduced the `strictMode` property. 

### Settings

#### DistributionSettings (Element)

* We introduced this element. 

### BusinessEvents

#### ConsumedBusinessEventService and PublishedBusinessEventService (ModelUnits)

* We deleted these modelunits. 

#### ConsumedBusinessEvent, PublishedChannel, PublishedMessage, and PublishedMessageAttribute (Elements)

* We deleted these elements. 

### Pages

#### AccessibilitySettings (Element)

* We deleted the `accessible` property. 

#### ConditionallyVisibleWidget (Element)

* We deleted the `accessibilitySettings` property. 

#### ConditionalSettings, ClientTemplateParameter, and AssociationWidget (Elements)

* We introduced the `sourceVariable` property. 

#### NamedValue (Element)

* We introduced this element. 

#### RuntimeOperation (Element)

* We introduced the `constants` property. 
* We deleted the `operationName` property.

#### ActionButton, CheckBox, DatePicker, DropDown, DynamicImageViewer, DynamicText, DivContainer, ReferenceSelector, StaticImageViewer, TextArea, TextBox, and Title (Elements)

* We introduced the `nativeAccessibilitySettings` property. 

### Workflows

#### AbsoluteAmountUserInput (Element)

* We changed the default value of the `amount` property.

#### PercentageAmountUserInput (Element)

* We changed the default value of the `percentage` property.
