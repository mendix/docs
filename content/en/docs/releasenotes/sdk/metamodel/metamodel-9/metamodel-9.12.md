---
title: "9.12"
parent: "metamodel-9"
---

## 9.12.0

### DomainModels

#### RemoteEntitySource (Element)
* We introduced the `creatableRuntime` property. Info: "Whether the entity allows create operations"

#### MappedValue (Element)
* We introduced the `defaultValue` property. 

### Microflows

#### ActionActivity (Element)
* We introduced the `disabled` property. 

#### LoopedActivity (Element)
* We changed the default value of the `^size` property.

#### DeleteExternalObject (Element)
* We introduced this element. 

#### WorkflowOperationAction (Element)
* We introduced this element.

#### WorkflowOperation (Element)
* We introduced this element.

#### AbortOperation (Element)
* We introduced this element.

#### ContinueOperation (Element)
* We introduced this element.

#### PauseOperation (Element)
* We introduced this element.

#### RestartOperation (Element)
* We introduced this element.

#### UnpauseOperation (Element)
* We introduced this element. 

#### GetWorkflowDataAction (Element)
* We introduced this element.

#### RetryOperation (Element)
* We introduced this element. 

### Projects

#### ModuleSettings (ModelUnit)
* We introduced the `protectedModuleType` property. 

### Queues

#### BasicQueueConfig (Element)
* We introduced the `parallelismExpression` property. 
* We deleted the `parallelism` property. 

### ScheduledEvents

#### ScheduledEvent (ModelUnit)
* We introduced the `schedule` property. 
* We introduced the `onOverlap` property. 

#### Schedule (Element)
* We introduced this element. 

#### YearSchedule (Element)
* We introduced this element. 

#### YearDateSchedule (Element)
* We introduced this element. 

#### YearWeekdaySchedule (Element)
* We introduced this element. 

#### MonthSchedule (Element)
* We introduced this element. 

#### MonthDateSchedule (Element)
* We introduced this element. 

#### MonthWeekdaySchedule (Element)
* We introduced this element. 

#### WeekSchedule (Element)
* We introduced this element. 

#### DaySchedule (Element)
* We introduced this element. 

#### HourSchedule (Element)
* We introduced this element. 

#### MinuteSchedule (Element)
* We introduced this element. 

### Settings

#### WorkflowsProjectSettingsPart (Element)
* We introduced the `workflowOnStateChangeEvent` property. 
* We introduced the `usertaskOnStateChangeEvent` property. 

### CustomWidgets

#### WidgetValueType (Element)
* We deleted the `universeDataSourceProperty` property. Info: "Use 'selectableObjectsProperty' instead"
* We introduced the `selectableObjectsProperty` property. 
* We introduced the `associationTypes` property. 

### Pages

#### CallWorkflowClientAction (Element)
* We deleted the `commit` property. Info: "This action will always commit"
* We introduced the `confirmationInfo` property. 

### Workflows

#### Workflow (ModelUnit)
* We introduced the `workflowOnStateChangeEvent` property. 
* We introduced the `usertaskOnStateChangeEvent` property. 

#### PageReference (Element)
* We introduced the `location` property. 

#### MicroflowEventHandler (Element)
* We introduced this element. 

This page has been generated automatically.
