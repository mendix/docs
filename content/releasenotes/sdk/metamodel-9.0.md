---
title: "9.0"
parent: "metamodel-9"
---

## 9.0.5

**Release date: March 26th, 2021**

### Constants

#### Constant (ModelUnit)

* We added the public `type` property. 

### Microflows

#### JavaActionCallAction (Element)

* We introduced the `queue` property.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction & OpenWorkflowAction  (Elements)

* We removed the experimental status of these elements.

### Settings

#### ModelerSettings (Element)

* We added the `actionActivityDefaultColors` property.

#### WorkflowsProjectSettingsPart (Element)

* We removed the experimental status of this element.
* We introduced the `workflowEngineParallelism` and `defaultTaskParallelism` properties.
* We deleted the `enabled` property.

### Pages

#### OpenWorkflowClientAction (Element)

* We removed the experimental status of this element.
* We introduced the `defaultPage` property.

#### CallWorkflowClientAction, OpenUserTaskClientAction & SetTaskOutcomeClientAction (Elements)

* We removed the experimental status of these elements.

### Workflows

#### Workflow (ModelUnit)

* We removed the experimental status of this model unit.

#### JumpToActivity, UserTaskEvent, NoEvent, MicroflowBasedEvent (Elements)

* We introduced these elements.

#### WorkflowActivity (Element)

* We removed the experimental status of this element.
* We introduced the `name` property.

#### UserTask (Element)

* We removed the experimental status of this element.
* We introduced the `onCreatedEvent` property.

#### MicroflowBasedUserSource (Element)

* We removed the experimental status of this element.
* We introduced the `parameterMappings` property.

#### Flow, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserSource, XPathBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome & VoidConditionOutcome (Elements)

* We removed the experimental status of these elements.
