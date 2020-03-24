---
title: "Rollback Object"
parent: "object-activities"
menu_order: 7
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The rollback object action can be used to undo changes (that have not been committed) made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but never committed.

{{% alert type="info" %}}

When the rollback object action is performed in a sub-microflow, it rolls back the changes in both the sub-microflow as well as its parent microflow.

{{% /alert %}}

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

If the microflow is called from the client, [input widgets](input-widgets) showing the rolled back object's attributes are refreshed automatically. This includes updating their visibility and editability [properties](common-widget-properties).

## 2 Input Properties

### 2.1 Object

Object defines the object that needs to be rolled back.

### 2.2 Refresh in Client

If the microflow is called from the client, the rollback is not reflected in the client if **Refresh in client** is set to *No*. If Refresh in client is set to *Yes*, the object is refreshed across the client, which includes reloading of relevant [data sources](data-sources).

{{% alert type="info" %}}
Rolled back attribute values are always reflected in client. [Data sources](data-sources) are only reloaded if **Refresh in client** is set to *Yes*.
{{% /alert %}}

{{% alert type="warning" %}}
When inside a [nanoflow](nanoflows), the rollback object action reloads [data sources](data-sources) as if **Refresh in client** was set to *Yes*.
{{% /alert %}}

Default: *No*
