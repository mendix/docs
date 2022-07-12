---
title: "Rollback Object"
url: /refguide7/rollback-object/
---

## 1 Introduction

The Rollback object action can be used to undo changes (that have not been committed) made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but never committed.

{{% alert color="info" %}}

When the Rollback object action is performed in a sub-microflow, it rolls back the changes in both the sub-microflow as well as its parent microflow.

{{% /alert %}}

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

If the microflow is called from the client, [input widgets](/refguide7/input-widgets/) showing the rolled back object's attributes are refreshed automatically. This includes updating their visibility and editability [conditions](/refguide7/conditions/).

## 2 Input Properties

### 2.1 Object

Object defines the object that needs to be rolled back.

### 2.2 Refresh in Client

If the microflow is called from the client, the rollback is not reflected in the client if **Refresh in client** is set to *No*. If Refresh in client is set to *Yes*, the object is refreshed across the client, which includes reloading of relevant [data sources](/refguide7/data-sources/).

{{% alert color="info" %}}

As of 7.19.0, rolled back attribute values are always reflected in client. [Data sources](/refguide7/data-sources/) are only reloaded if **Refresh in client** is set to *Yes*.

{{% /alert %}}

{{% alert color="warning" %}}

When inside a [nanoflow](/refguide7/nanoflows/), the Rollback object action reloads [data sources](/refguide7/data-sources/) as if **Refresh in client** was set to *Yes*.

{{% /alert %}}

_Default value_: No
