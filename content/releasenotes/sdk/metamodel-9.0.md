---
title: "9.0"
parent: "metamodel-9"
---

## 9.0.5

**Release date: March 31st, 2021**

### Constants

#### Constant (ModelUnit)

* We added the public `type` property. 

### Microflows

#### JavaActionCallAction (Element)

* We introduced the `queue` property.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction & OpenWorkflowAction  (Elements)

* We removed these experimental elements.

### Settings

#### ModelerSettings (Element)

* We added the `actionActivityDefaultColors` property.

#### WorkflowsProjectSettingsPart (Element)

* We removed this experimental element.
* We introduced the `workflowEngineParallelism` and `defaultTaskParallelism` properties.
* We deleted the `enabled` property.

## Pages

#### OpenWorkflowClientAction (Element)

* We removed this experimental element.
* We introduced the `defaultPage` property.

#### CallWorkflowClientAction, OpenUserTaskClientAction & SetTaskOutcomeClientAction (Elements)

* We removed these experimental elements.

### Workflows

#### JumpToActivity, UserTaskEvent, NoEvent, MicroflowBasedEvent (Elements)

* We introduced these elements.

#### Workflow (ModelUnit)

* We removed this experimental ModelUnit.

#### WorkflowActivity (Element)

* We removed this experimental element.
* We introduced the `name` property.

#### UserTask (Element)

* We removed this experimental element.
* We introduced the `onCreatedEvent` property.

#### MicroflowBasedUserSource (Element)

* We removed this experimental element.
* We introduced the `parameterMappings` property.

#### Flow, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserSource, XPathBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome & VoidConditionOutcome (Elements)

* We removed these experimental elements.
