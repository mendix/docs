---
title: "Delete Object(s)"
url: /refguide7/deleting-objects/
---

{{% alert color="info" %}}
This action can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

Delete object can be used to delete one or more objects.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The variable that refers to the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## 3 Action Properties

### 3.1 Refresh in Client

If the microflow is called from the client, the deletion is not reflected in the client if **Refresh in client** is set to *No*. If set to *Yes*, the deletion is reflected across the client, which includes reloading relevant [data sources](/refguide7/data-sources/).

{{% alert color="info" %}}

As of 7.19.0, deletions are always reflected in the client. [Data sources](/refguide7/data-sources/) are only reloaded if **Refresh in client** is set to *Yes*.

{{% /alert %}}

_Default value_: No
