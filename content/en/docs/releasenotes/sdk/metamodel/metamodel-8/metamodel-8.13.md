---
title: "8.13"
url: /releasenotes/sdk/metamodel-8.13/
weight: 88
---

## 8.13.0

**Release date: August 19, 2020**

### DomainModels

#### Attribute (Element)

* We introduced the `capabilities` property to describe what an attribute is capable of.

#### AttributeCapabilities (Element)

* We introduced this element to describe what an attribute is capable of.

### Projects

#### Module (StructuralUnit)

* We introduced the `appStorePackageId` property.

### Rest

#### ConsumedODataService (ModelUnit)

* We introduced the `versionApiMockResults` property to mock results for the Version API.

### Pages

#### TemplateType, RegularPageTemplateType, EditPageTemplateType, and SelectPageTemplateType (Elements)

* We introduced these elements.

#### PageTemplate (ModelUnit)

* We introduced the `templateType` property.
* We deleted the `type` property. Use the `templateType` property instead.

#### TemplatePlaceholder (Element)

* We introduced this element.

#### Appearance (Element)

* We introduced the `dynamicClasses` property.

#### Grid (Element)

* We introduced the `showPagingBar` property.
* We deleted the `isPagingEnabled` property. Use the `showPagingBar` property instead.

#### TabPage (Element)

* We introduced the `badge` property.

#### WorkflowTemplateType, UserTaskTemplateType, WorkflowOverviewTemplateType, CallWorkflowClientAction, OpenUserTaskClientAction, OpenWorkflowClientAction, and SetTaskOutcomeClientAction (Elements)

* We introduced these elements.

### Workflows

#### Workflow (ModelUnit)

* We introduced the `dueDate` property.

#### UserTask (Element)

* We added the public `page` property.
* We introduced the `dueDate` property.

#### EnumerationValueOutcomeValue, BooleanOutcomeValue, ExclusiveSplitActivity, and CallWorkflowActivity (Elements)

* We introduced these elements.
