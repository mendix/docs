---
title: "Cast Object"
parent: "object-activities"
---


Activity 'Cast Object' can be used in a microflow after an [inheritance split](inheritance-split) to change the type of the object from the generalized objecttype to the specialized objecttype of the path out of the inheritance split. 

See [Entities](entities) to read more about specialization and generalization.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Output Properties

### Variable name

The variable name for the result of the cast. It can be used by all activities that follow this activity.

## Example
https://modelshare.mendix.com/models/f099fba5-ba6a-4854-b4ac-1da63e5cc5f5/example-of-activity-cast-object 

In this example there are three specializations of the Object 'Question' and only object of specialized type 'MultipleChoiceQuestion' performs some special actions which will be done in a subflow which has as inputtype 'MultipleChoiceQuestion'. Since an object of type 'Question can not get passed to the subflow, the object first needs to get casted to the object type 'MultipleChoiceQuestion'.

