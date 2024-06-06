---
title: "9.12"
url: /releasenotes/sdk/metamodel-9.12/
weight: 88
---

## 9.12.0

**Release date: March 21, 2022**

### DomainModels

#### RemoteEntitySource (Element)

* We introduced the `creatableRuntime` property to enable whether the entity allows create operations.

#### MappedValue (Element)

* We introduced the `defaultValue` property. 

### Microflows

#### ActionActivity (Element)

* We introduced the `disabled` property. 

#### LoopedActivity (Element)

* We changed the default value of the `^size` property.

#### DeleteExternalObject, WorkflowOperationAction, WorkflowOperation, AbortOperation, ContinueOperation, PauseOperation, RestartOperation, UnpauseOperation, GetWorkflowDataAction, and RetryOperation (Elements)

* We introduced these elements. 

### Projects

#### ModuleSettings (ModelUnit)

* We introduced the `protectedModuleType` property. 

### Queues

#### BasicQueueConfig (Element)

* We introduced the `parallelismExpression` property. 
* We deleted the `parallelism` property. 

### ScheduledEvents

#### ScheduledEvent (ModelUnit)

* We introduced the `schedule` and `onOverlap` properties. 

#### Schedule, YearSchedule, YearDateSchedule, YearWeekdaySchedule, MonthSchedule, MonthDateSchedule, MonthWeekdaySchedule, WeekSchedule, DaySchedule, HourSchedule, and MinuteSchedule (Elements)

* We introduced these elements. 

### Settings

#### WorkflowsProjectSettingsPart (Element)

* We introduced the `workflowOnStateChangeEvent` and `usertaskOnStateChangeEvent` properties. 

### CustomWidgets

#### WidgetValueType (Element)

* We introduced the `selectableObjectsProperty` and `associationTypes` properties.
* We deleted the `universeDataSourceProperty` property. Use the 'selectableObjectsProperty' property instead.

### Pages

#### CallWorkflowClientAction (Element)

* We introduced the `confirmationInfo` property. 
* We deleted the `commit` property. This action will always commit.

### Workflows

#### Workflow (ModelUnit)

* We introduced the `workflowOnStateChangeEvent` and `usertaskOnStateChangeEvent` properties.

#### PageReference (Element)

* We introduced the `location` property. 

#### MicroflowEventHandler (Element)

* We introduced this element. 
