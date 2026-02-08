---
title: "9.12"
url: /releasenotes/sdk/metamodel-9.12/
weight: 88
---

## 9.12.0

**릴리스 날짜: 2022년 3월 21일**

### DomainModels

#### RemoteEntitySource (Element)

* `creatableRuntime` property to enable whether the entity allows create operations.

#### MappedValue (Element)

* `defaultValue` 속성을 도입하였습니다. 

### Microflows

#### ActionActivity (Element)

* `disabled` 속성을 도입하였습니다. 

#### LoopedActivity (Element)

* `^size` 속성의 기본값을 변경하였습니다.

#### DeleteExternalObject, WorkflowOperationAction, WorkflowOperation, AbortOperation, ContinueOperation, PauseOperation, RestartOperation, UnpauseOperation, GetWorkflowDataAction, and RetryOperation (Elements)

* 이 엘리먼트들을 도입하였습니다. 

### Projects

#### ModuleSettings (ModelUnit)

* `protectedModuleType` 속성을 도입하였습니다. 

### Queues

#### BasicQueueConfig (Element)

* `parallelismExpression` 속성을 도입하였습니다. 
* `parallelism` 속성을 삭제하였습니다. 

### ScheduledEvents

#### ScheduledEvent (ModelUnit)

* `schedule` and `onOverlap` 속성을 도입하였습니다. 

#### Schedule, YearSchedule, YearDateSchedule, YearWeekdaySchedule, MonthSchedule, MonthDateSchedule, MonthWeekdaySchedule, WeekSchedule, DaySchedule, HourSchedule, and MinuteSchedule (Elements)

* 이 엘리먼트들을 도입하였습니다. 

### Settings

#### WorkflowsProjectSettingsPart (Element)

* `workflowOnStateChangeEvent` and `usertaskOnStateChangeEvent` 속성을 도입하였습니다. 

### CustomWidgets

#### WidgetValueType (Element)

* `selectableObjectsProperty` and `associationTypes` 속성을 도입하였습니다.
* `universeDataSourceProperty` 속성을 삭제하였습니다. Use the 'selectableObjectsProperty' property을(를) 사용하세요.

### Pages

#### CallWorkflowClientAction (Element)

* `confirmationInfo` 속성을 도입하였습니다. 
* `commit` 속성을 삭제하였습니다. This action will always commit.

### Workflows

#### Workflow (ModelUnit)

* `workflowOnStateChangeEvent` and `usertaskOnStateChangeEvent` 속성을 도입하였습니다.

#### PageReference (Element)

* `location` 속성을 도입하였습니다. 

#### MicroflowEventHandler (Element)

* 이 엘리먼트를 도입하였습니다. 
