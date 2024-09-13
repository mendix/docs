---
title: "Wait for Notification"
url: /refguide/wait-for-notification/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Wait for notification** activity allows you to suspend a workflow's execution until the workflow is notified.

{{% alert color="info" %}}
If you have this activity in one of the parallel split paths, then only the path which has this activity will suspend and all the other paths will continue with their own activities.

However, the whole parallel split will still suspend on the merge of the split until the waiting activity is notified.
{{% /alert %}}

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-notification/wait-for-notification-example.jpg" alt="Wait For Notification" width="250" class="no-border" >}}

## Properties

**Wait for notification** properties consist of the following sections:

* [General](#general)
* [Common](#common)

### General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Wait for notification** activity easier to read and understand without the need to add annotations.

### Common Section {#common}

**Name** is the internal name of the wait for notification activity. When referring to the wait for notification in the app, you will use this name. It must be unique within the workflow, but you can have two wait for notification activities with the same name in different workflows.

## Read More

* [Workflows](/refguide/workflows/)
