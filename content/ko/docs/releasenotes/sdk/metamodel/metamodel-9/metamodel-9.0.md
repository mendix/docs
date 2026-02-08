---
title: "9.0"
url: /releasenotes/sdk/metamodel-9.0/
weight: 100
---

## 9.0.5

**릴리스 날짜: 2021년 3월 26일**

### Constants

#### Constant (ModelUnit)

* 공개 `type` 속성을 추가하였습니다.

### Microflows

#### JavaActionCallAction (Element)

* `queue` 속성을 도입하였습니다.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction, and OpenWorkflowAction (Elements)

* 이 엘리먼트들의 실험적 상태를 제거하였습니다.

### Settings

#### ModelerSettings (Element)

* `actionActivityDefaultColors` 속성을 도입하였습니다.

#### WorkflowsProjectSettingsPart (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.
* `workflowEngineParallelism` and `defaultTaskParallelism` 속성을 도입하였습니다.
* `enabled` 속성을 삭제하였습니다.

### Pages

#### OpenWorkflowClientAction (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.
* `defaultPage` 속성을 도입하였습니다.

#### CallWorkflowClientAction, OpenUserTaskClientAction, and SetTaskOutcomeClientAction (Element)

* 이 엘리먼트들의 실험적 상태를 제거하였습니다.

### Workflows

#### Workflow (ModelUnit)

* 이 모델 유닛의 실험적 상태를 제거하였습니다.

#### JumpToActivity, UserTaskEvent, NoEvent, and MicroflowBasedEvent (Element)

* 이 엘리먼트들을 도입하였습니다.

#### WorkflowActivity (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.
* `name` 속성을 도입하였습니다.

#### UserTask (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.
* `onCreatedEvent` 속성을 도입하였습니다.

#### Flow, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserSource, XPathBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome, VoidConditionOutcome, and MicroflowBasedUserSource (Elements)

* 이 엘리먼트들의 실험적 상태를 제거하였습니다.

## 9.0.4

### Microflows

#### LoopSource, IterableList, and WhileLoopCondition (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### LoopedActivity (Element)

* `loopSource` 속성을 도입하였습니다.
* `iteratedListVariableName` and `loopVariableName` 속성을 삭제하였습니다.

## 9.0.3

### JavaActions

#### JavaAction (ModelUnit)

* `useLegacyCodeGeneration` 속성을 삭제하였습니다. Java 액션 파라미터 이름을 생성된 코드에서 고유하게 만드는 옵션은 더 이상 지원되지 않습니다.

### DataSets

#### JavaDataSetSource (Element)

* `useLegacyCodeGeneration` 속성을 삭제하였습니다. Java 액션 파라미터 이름을 생성된 코드에서 고유하게 만드는 옵션은 더 이상 지원되지 않습니다.

### Microflows

#### ExpressionListOperation, FilterByExpression, and FindByExpression (Elements)

* 이 엘리먼트들을 도입하였습니다. 

### Navigation

#### NavigationProfile (Element)

* `progressiveWebAppSettings` 속성을 도입하였습니다.

### Workflows

#### UserTask (Element)

* `allowedModuleRoles` and `allowedUserRoles` 속성을 도입하였습니다.

## 9.0.2

### DomainModels

#### CachedMappedValue (Element)

* 이 엘리먼트를 도입하였습니다.

### Microflows

#### Microflow (ModelUnit)

* `workflowActionInfo` 속성을 도입하였습니다.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction, and OpenWorkflowAction (Element)

* 이 엘리먼트들을 도입하였습니다.

#### AppServiceCallAction and AppServiceCallParameterMapping (Elements)

* 이 엘리먼트들을 삭제하였습니다.

### Settings

#### ConsumedAppService (ModelUnit)

* 이 모델 유닛을 삭제하였습니다.

#### RuntimeSettings (Element)

* `enforceDataStorageUniqueness` 속성을 삭제하였습니다.

### AppServices

#### AppServiceAction, AppServiceActionParameter, Msd, MsdAssociation, MsdAttribute, MsdDomainModel, MsdEntity, MsdEnumeration, MsdEnumerationContainer, MsdEnumerationValue, MsdMetadata, MsdMicroflow, MsdMicroflowParameter, MsdText, and MsdVersion (Elements)

* 이 엘리먼트들을 삭제하였습니다.

### WebServices

#### PublishedAppService (ModelUnit)

* 이 모델 유닛을 삭제하였습니다.

#### DataAssociation (Element)

* `associationByContract` 속성을 삭제하였습니다.

#### DataAttribute (Element)

* `attributeByContract` 속성을 삭제하였습니다.

#### DataMember (Element)

* `isLockedByContract`, `isOptionalByContract`, and `isNillableByContract`  속성을 삭제하였습니다.

#### PublishedOperation (Element)

* `isLockedByContract`, `returnTypeNameByContract`, `returnTypeSpecificationByContract`, and `entityExposedNameByContract`  속성을 삭제하였습니다.

#### PublishedParameter (Element)

* `isLockedByContract`, `parameterByContract`, `isOptionalByContract`, and `entityExposedItemNameByContract` 속성을 삭제하였습니다.

#### VersionedService (Element)

* `isLockedByContract`, `enumerationsByContract`, `appServiceState`, and `msdFileBase64` 속성을 삭제하였습니다.

### Pages

#### TemplateFormBase (ModelUnit)

* `templateCategory` and `templateCategoryWeight` 속성을 도입하였습니다. 

#### WorkflowTemplateType, UserTaskTemplateType, WorkflowOverviewTemplateType, CallWorkflowClientAction, OpenUserTaskClientAction, OpenWorkflowClientAction, and SetTaskOutcomeClientAction (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Workflows

#### Workflow (ModelUnit)

* 이 모델 유닛을 도입하였습니다.

#### Flow, WorkflowActivity, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserTask, UserSource, XPathBasedUserSource, MicroflowBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome, and VoidConditionOutcome (Elements)

* 이 엘리먼트들을 도입하였습니다.

## 9.0.1

### DomainModels

#### EntityCapabilities, AttributeCapabilities, and AssociationCapabilities (Elements)

* 이 엘리먼트들을 삭제하였습니다.

#### Entity, Attribute, and AssociationBase (Elements)

* `capabilities` 속성을 삭제하였습니다.

### Settings

#### WebUIProjectSettingsPart (Element)

* `themeConversionStatus` 속성을 삭제하였습니다.

### Pages

#### ActionButton (Element)

* `ariaRole` 속성을 도입하였습니다.

#### ClientTemplateParameter (Element)

* `expression` 속성을 도입하였습니다.

### Reports

#### ReportChart and ReportChartSeries (Elements)

* 이 엘리먼트들을 삭제하였습니다.
