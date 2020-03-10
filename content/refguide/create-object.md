---
title: "Create Object"
parent: "object-activities"
menu_order: 4
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction 

The create object action can be used to create an object.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Entity

The entity of which you want to create an object.

### 2.2 Commit Type

**Commit** defines the way the object is committed.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](event-handlers) are triggered. |
| Yes without event handlers | The object is saved in the database, but the [event handlers](event-handlers) are not triggered. |
| No *(default)*  | The object is changed without being saved in the database. |

{{% alert type="warning" %}}

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a create object action is used in an offline app, the changes are committed to the offline database.

{{% /alert %}}

### 2.3 Refresh in Client

If the microflow is called from the client, [data sources](data-sources) do not reload, unless **Refresh in client** is set to *Yes*.

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the create object action reloads [data sources](data-sources) as if Refresh in client was set to *Yes*.

{{% /alert %}}

Default: *No*

### 2.3 Change Members

You can set the values of members (attributes and associations) of the newly created object to be different from the default value set in the [entity](entities). Values for members are specified with an [expression](expressions) and must be of the same type as the member.

## 3 Output Properties

### 3.1 Object Name

This is the name of the resulting object which can be used by all activities that follow this activity.
