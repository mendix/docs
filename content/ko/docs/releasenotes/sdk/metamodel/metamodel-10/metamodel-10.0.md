---
title: "10.0"
url: /releasenotes/sdk/metamodel-10.0/
weight: 100
---

## 10.0.0 GA

**릴리스 날짜: 2023년 6월 19일**

### Microflows

#### AggregateListAction (Element)

* `expression`, `useExpression`, `reduceReturnDataType`, and `reduceInitialValueExpression` 속성을 도입하였습니다.

#### RestOperationCallAction (Element)

* 이 엘리먼트를 도입하였습니다. REST 작업 액션을 호출하기 위한 것입니다.

#### ClearFromClientAction, NotifyWorkflowAction (Elements)

* 이 엘리먼트들을 도입하였습니다. 

#### LockWorkflowAction (Element)

* `workflowSelection` 속성을 도입하였습니다.
* `workflow` 속성을 삭제하였습니다. 

#### UnlockWorkflowAction (Element)

* `workflowSelection` 속성을 도입하였습니다.
* `workflow` 속성을 삭제하였습니다. 

### Projects

#### ModuleSettings (ModelUnit)

* `solutionIdentifier`, `jarDependencies`, and `basedOnVersion` 속성을 도입하였습니다.

### Settings

#### RuntimeSettings (Element)

* `bcryptCost` 속성의 기본값을 변경하였습니다.

#### WebUIProjectSettingsPart (Element)

* `enableDownloadResources` 속성을 삭제하였습니다. 

### DatabaseConnector

#### ConnectionString (Element)

* 이 엘리먼트를 도입하였습니다. 텍스트를 사용하여 연결 문자열을 정의합니다.

#### ConnectionParts (Element)

* 이 엘리먼트를 도입하였습니다. 파트를 사용하여 연결 문자열을 정의합니다.

### Rest

#### PublishedODataMicroflow (Element)

* `parameters` 속성을 도입하였습니다. parameters of the microflow.

#### PublishedODataMicroflowParameter (Element)

* 이 엘리먼트를 도입하였습니다. OData 서비스에 게시된 Microflow 파라미터입니다.

#### ConsumedODataService (ModelUnit)

* 이 모델 유닛을 도입하였습니다.

### CustomWidgets

#### CustomWidgetType (Element)

* `phoneGapEnabled` 속성을 삭제하였습니다. 

### Navigation

#### NavigationDocument (ModelUnit)

* `reports` and `reportParameters` 속성을 삭제하였습니다.

### Pages

#### Page (ModelUnit)

* `urlSegments` 속성을 도입하였습니다.

#### UrlSegment, ParameterAttributeUrlSegment, ParameterIdUrlSegment, StaticUrlSegment (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### EntityPathSource (Element)

* `sourceVariable` 속성을 도입하였습니다. 

#### RetrievalQueryParameter (Element)

* `types` 속성을 도입하였습니다.
* `type` 속성을 삭제하였습니다. 

### Reports

#### ReportParameter (Element)

* `parameterTypeRuntime` and `reportId` 속성을 삭제하였습니다.

### Workflows

#### WaitForNotificationActivity, MajorityCompletionCriteria, ThresholdCompletionCriteria, WorkflowDefinitionSelection, WorkflowDefinitionNameSelection, WorkflowDefinitionObjectSelection (Elements)

* 이 엘리먼트들을 도입하였습니다.
