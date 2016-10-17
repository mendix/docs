---
title: "Change Object"
category: "refguide5"
space: "Reference Guide 5"
---


A Change Object can be used to change the members of an object. This can be done with or without committing, with or without events.

<div class="alert alert-info">{% markdown %}

Before a customer is saved you want to make sure all characters of the zip code are capitals. You do this by creating an [event handler](Event+Handlers) for the entity 'Customer'. The microflow that is used as event handler is shown below. It consists of a parameter and a change object activity. The parameter contains the current customer being saved.

![](attachments/819203/918094.png)

The properties are configured as below.

<table><thead><tr><th class="confluenceTh">Property</th><th class="confluenceTh">Value</th><th class="confluenceTh">Reason</th></tr></thead><tbody><tr><td class="confluenceTd">Object</td><td class="confluenceTd">InputCustomer (Module.Customer)</td><td class="confluenceTd">The change activity applies to the current customer being saved</td></tr><tr><td class="confluenceTd">Commit type</td><td class="confluenceTd">No</td><td class="confluenceTd">The object is changed before commit and the changes are still 'remembered' by the server when it is committed</td></tr><tr><td class="confluenceTd">Refresh in browser</td><td class="confluenceTd">False</td><td class="confluenceTd">Objects of the entity 'Customer' are automatically refreshed by the server when a object is committed in a form</td></tr><tr><td class="confluenceTd">Change member action <em>set</em> on <em>zipcode</em></td><td class="confluenceTd">toUpperCase($InputCustomer/zipcode)</td><td class="confluenceTd">A <a href="Microflow+Expressions">microflow expression</a> can be used to set all characters to upper case (capitals)</td></tr></tbody></table>
{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### Object

Object defines the object variable that is changed.

## Action Properties

### Commit type

Commit type defines the way the object is committed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes with event handlers</td><td class="confluenceTd">The object is saved in the database and the <a href="Event+Handlers">event handlers</a> are triggered</td></tr><tr><td class="confluenceTd">Yes without event handlers</td><td class="confluenceTd">The object is saved in the database, but the <a href="Event+Handlers">event handlers</a> are not triggered</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">The object is changed without being saved in the database</td></tr></tbody></table><div class="alert alert-success">{% markdown %}

If a microflow is triggered from a data view (for example by the 'on change' of an text field) you often do not want to commit the changes you make to the data view object yet. The end user can press the Save or Cancel button to commit or rollback the changes.

However, if the microflow is triggered from a data grid button that just performs an operation on a selection you will want to commit the changes to avoid losing them.

{% endmarkdown %}</div>

_Default value:_ No

### Refresh in browser

Refresh in browser defines whether forms that use the entity of the object being changed are refreshed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Objects of same entity are refreshed in the user's browser</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Objects of same entity are not refreshed in the user's browser</td></tr></tbody></table>

_Default value_: False

### Change members

You can specify a list of changes that will be applied to the object. Values for members are specified with [microflow expressions](Microflow+Expressions) and should be of the same type as the member. For a reference set association it is also possible to add and remove instead of only set the member. With 'add' an object or a list of objects can be added to the currently associated objects. With 'remove' an object or a list of objects can be removed from the currently associated objects.

### Related Topics

*   [Microflow Expressions](Microflow+Expressions)