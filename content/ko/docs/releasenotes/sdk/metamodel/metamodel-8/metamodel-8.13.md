---
title: "8.13"
url: /releasenotes/sdk/metamodel-8.13/
weight: 88
---

## 8.13.0

**릴리스 날짜: 2020년 8월 19일**

### DomainModels

#### Attribute (Element)

* `capabilities` property to describe what an attribute is capable of.

#### AttributeCapabilities (Element)

* We introduced this element to describe what an attribute is capable of.

### Projects

#### Module (StructuralUnit)

* `appStorePackageId` 속성을 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* `versionApiMockResults` property to mock results for the Version API.

### Pages

#### TemplateType, RegularPageTemplateType, EditPageTemplateType, and SelectPageTemplateType (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### PageTemplate (ModelUnit)

* `templateType` 속성을 도입하였습니다.
* `type` 속성을 삭제하였습니다. Use the `templateType` property을(를) 사용하세요.

#### TemplatePlaceholder (Element)

* 이 엘리먼트를 도입하였습니다.

#### Appearance (Element)

* `dynamicClasses` 속성을 도입하였습니다.

#### Grid (Element)

* `showPagingBar` 속성을 도입하였습니다.
* `isPagingEnabled` 속성을 삭제하였습니다. Use the `showPagingBar` property을(를) 사용하세요.

#### TabPage (Element)

* `badge` 속성을 도입하였습니다.

#### WorkflowTemplateType, UserTaskTemplateType, WorkflowOverviewTemplateType, CallWorkflowClientAction, OpenUserTaskClientAction, OpenWorkflowClientAction, and SetTaskOutcomeClientAction (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Workflows

#### Workflow (ModelUnit)

* `dueDate` 속성을 도입하였습니다.

#### UserTask (Element)

* 공개 `page` 속성을 추가하였습니다.
* `dueDate` 속성을 도입하였습니다.

#### EnumerationValueOutcomeValue, BooleanOutcomeValue, ExclusiveSplitActivity, and CallWorkflowActivity (Elements)

* 이 엘리먼트들을 도입하였습니다.
