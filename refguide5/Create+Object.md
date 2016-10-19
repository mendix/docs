---
title: "Create Object"
parent: "Object+Activities"
space: "Reference Guide 5"
---


The create-object action can be used to create an object.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Entity

The entity of which you want to create an object.

### Refresh in client

This property specifies whether forms that use the entity of the object being created are refreshed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Objects of same entity are refreshed in the user's browser.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Objects of same entity are not refreshed in the user's browser.</td></tr></tbody></table>

_Default value_: False

### Initialize members

You can initialize members of the newly created object. Values for members are specified with a [microflow expression](Microflow+Expressions) and should be of the same type as the member.

## Output Properties

### Variable name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
