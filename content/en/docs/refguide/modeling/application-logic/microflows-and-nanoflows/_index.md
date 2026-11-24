---
title: "Microflows, Nanoflows, and Testflows"
url: /refguide/microflows-and-nanoflows/
weight: 10
description: "Presents an overview of microflows, nanoflows, and testflows."
---

## Introduction

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Testflows use the same visual language to test the logic of your application. For more information, see [Testflows](/refguide/testflows/).

Explore the documentation for details on microflow, nanoflow, and testflow definitions, properties, and usages.

* [Microflows](/refguide/microflows/)
* [Nanoflows](/refguide/nanoflows/)
* [Testflows](/refguide/testflows/)
* [Sequence Flow](/refguide/sequence-flow/)
* [Activities](/refguide/activities/)
* [Decisions](/refguide/decisions/)
* [Annotation](/refguide/annotation/)
* [Parameter](/refguide/parameter/)
* [Loop](/refguide/loop/)
* [Events](/refguide/events/)
* [Common Properties](/refguide/microflow-element-common-properties/)
* [Debugging Microflows and Nanoflows](/refguide/debug-microflows-and-nanoflows/)

## Auto Layout {#auto-layout}

{{% alert color="info" %}}
This feature is available in Studio Pro 11.17 and above.

This feature is enabled by default. You can disable it in **Edit** > **Preferences** > **New features** tab, under [Microflow, Nanoflow, and Rule Editor](/refguide/preferences-dialog/#microflow-nanoflow-rule-editor).
{{% /alert %}}

In the microflow, nanoflow, and rule editors, you can automatically arrange activities on the canvas through the context menu:

* Right-click an empty part of the canvas and select **Auto layout** to arrange the entire microflow, nanoflow, or rule.
* Right-click a selected activity, or a selection of multiple activities, and select **Auto layout** to arrange only the selected activities.

Auto layout is applied as a single action that you can undo.

## Differences between Microflows and Nanoflows {#differences}

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the client side (that is, on the browser/device), and can be used in an offline app. Furthermore, most of the actions in nanoflows run directly on the device, so there is also a speed benefit for logic which does not need access to the server. 

Below presents a list of main differences between microflows and nanoflows:

* When a nanoflow steps through its actions, client actions are directly executed. For example, an open page action immediately opens a page instead of at the end of the nanoflow. This is different from client actions in a microflow, which only run when the client receives the result from the microflow.
* Nanoflows and microflows do not provide the same [activities](/refguide/activities/). Some activities available in microflows are not available in nanoflows, and vice versa.
* Because nanoflows use JavaScript libraries and microflows use Java libraries, there can sometimes be slight differences in the way [expressions](/refguide/expressions/) are executed.
* When used in nanoflow activities, expressions do not support the following objects and variables: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`.
* Nanoflows are not run inside a transaction. So, if an error occurs in a nanoflow, it will not roll back any previous changes.

## Testflows {#testflows}

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

Testflows test the logic of your app. You build a testflow in the same way as a microflow, and like microflows, testflows run in the runtime server. A testflow can use the same activities as a microflow, plus [testing activities](/refguide/activities/#testing-activities) such as Assert, which check whether your logic gives the result you expect.

Testflows differ from microflows in the following ways:

* You create testflows in the **Testing** node of a module.
* A testflow cannot have parameters and does not return a value.
* You do not call a testflow from your app. Instead, you run testflows from the **Test Runner** pane in Studio Pro.

For more information, see [Testflows](/refguide/testflows/).
