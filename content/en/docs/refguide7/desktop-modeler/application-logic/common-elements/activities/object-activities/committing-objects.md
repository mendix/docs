---
title: "Commit Object(s)"
url: /refguide7/committing-objects/
---

## 1 Introduction

This action can commit one or more objects. For persistable entities this means that the object will be stored in the database. Committing non-persistable entities stores the current attribute values and association values in memory, this allows a rollback to revert to those values. See also [Persistability](/refguide7/persistability/).

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The object or list of objects that you want to commit.

## 3 Action Properties

### 3.1 With Events

Indicates whether or not to execute the commit event handlers of the objects.

{{% alert color="warning" %}}

Nanoflows do not have this property. Committing while running in an online app sends a commit request to the Mendix Runtime and always runs the events. If the commit object(s) action is used in an offline app, the changes are committed to the offline database, and event handlers will run when the offline app synchronizes.

{{% /alert %}}

### 3.2 Refresh in Client

If the microflow is called from the client, the change is not reflected in the client if **Refresh in client** is set to *No*. If set to *Yes*, the object is refreshed across the client, which includes reloading the relevant [data sources](/refguide7/data-sources/).

{{% alert color="info" %}}

As of 7.19.0, all attribute values are reflected in the client, including virtual ones, even if **Refresh in client** is set to *No*.

{{% /alert %}}

{{% alert color="warning" %}}

When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.

{{% /alert %}}

{{% alert color="warning" %}}

When inside a [nanoflow](/refguide7/nanoflows/), the object is refreshed across the client as if **Refresh in client** was set to *Yes*.

{{% /alert %}}

_Default value_: No
