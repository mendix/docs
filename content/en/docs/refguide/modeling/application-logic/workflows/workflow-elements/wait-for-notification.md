---
title: "Wait For Notification"
url: /refguide/wait-for-notification/
weight: 30
tags: ["workflow", "workflows", "wait for notification", "notification", "Studio Pro"]
---

## 1 Introduction

Wait for notification allows you to suspend a workflow's execution until the workflow is notified.

If you have this activity in one of the parallel split branches then only the branch which has this activity will suspend and all the other branches will simply continue with their own activities.

However, the whole parallel split will still suspend on the merge of the split until the waiting activity is notified.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-notification/wait-for-notification-example.jpg" alt="Wait For Notification" >}}

## 2 Properties

Wait for notification properties consist of the following sections:

* [General](#general)
* [Common](#common)

### 2.1 General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Wait For Notification** activity easier to read and understand without needing to add annotations.

### 2.2 Common Section {#common}

**Name** is the internal name of the wait for notification activity. When referring to the wait for notification in the app you will use this name. It must be unique within the workflow, but you can have two wait for notification activities with the same name in different workflows.

## 3 Read More

* [Workflows](/refguide/workflows/)
