---
title: "Persistent Create Object"
parent: "Object+Activities"
space: "Reference Guide 5"
---


The persistent-create-object action is the result of converting a create-object action from version 3\. This action not only creates the object in memory but also inserts a row in the database. This action is deprecated and there will be a warning for it in the error list. Right-clicking the warning allows you to find all occurrences and to convert them to new [create actions](Create+Object).

In obscure cases you can detect the difference between the old and the new create action. For example, if you look at the database after the create action but before a corresponding commit action, the object will not be in the database if you used the new create action. Because we cannot guarantee 100% backward compatibility we do not convert the persistent create actions automatically.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Entity

The entity of which you want to create an object.

### Refresh in browser

Refresh in browser defines whether forms that use the entity of the object being created are refreshed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Objects of same entity are refreshed in the user's browser.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Objects of same entity are not refreshed in the user's browser.</td></tr></tbody></table>

_Default value_: False

## Output Properties

### Variable name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
