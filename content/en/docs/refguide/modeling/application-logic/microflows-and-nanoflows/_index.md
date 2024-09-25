---
title: "Microflows and Nanoflows"
url: /refguide/microflows-and-nanoflows/
weight: 10
description: "Presents an overview of microflows and nanoflows."
---

## Introduction

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Explore the documentation for details on microflow and nanoflow definitions, properties, and usages.

* [Microflows](/refguide/microflows/)
* [Nanoflows](/refguide/nanoflows/)
* [Sequence Flow](/refguide/sequence-flow/)
* [Activities](/refguide/activities/)
* [Decisions](/refguide/decisions/)
* [Annotation](/refguide/annotation/)
* [Parameter](/refguide/parameter/)
* [Loop](/refguide/loop/)
* [Events](/refguide/events/)
* [Common Properties](/refguide/microflow-element-common-properties/)
* [Debugging Microflows and Nanoflows](/refguide/debug-microflows-and-nanoflows/)

## Differences between Microflows and Nanoflows {#differences}

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the client side (that is, on the browser/device), and can be used in an offline app. Furthermore, most of the actions in nanoflows run directly on the device, so there is also a speed benefit for logic which does not need access to the server. 

Below presents a list of main differences between microflows and nanoflows:

* When a nanoflow steps through its actions, client actions are directly executed. For example, an open page action immediately opens a page instead of at the end of the nanoflow. This is different from client actions in a microflow, which only run when the client receives the result from the microflow.
* Nanoflows and microflows do not provide the same [activities](/refguide/activities/). Some activities available in microflows are not available in nanoflows, and vice versa.
* Because nanoflows use JavaScript libraries and microflows use Java libraries, there can sometimes be slight differences in the way [expressions](/refguide/expressions/) are executed.
* When used in nanoflow activities, expressions do not support the following objects and variables: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`.
* Nanoflows are not run inside a transaction. So, if an error occurs in a nanoflow, it will not roll back any previous changes.
* Changes done to the lists in a sub-nanoflow are not reflected in the original nanoflow.

## Classic and Modern Logic Editors {#new-editor}

In Studio Pro 10.6 and above, use the new and modernized microflow, nanoflow, and rule editors. The new editors focus on making your daily logic modeling experience faster, smoother and easier to learn. 

The new editors contain several huge improvements, with some major improvements in:

* [Logic Recommender](/refguide/logic-recommender/)
* [Keyboard navigation](/refguide/microflows/#keyboard-improved) 
* [Canvas interaction](/refguide/microflows/#canvas-interaction)

In Studio Pro 10.5 and below, the default logic editors are the **Classic** logic editors. In Studio Pro 10.4 and 10.5, there is the toggle at the top right corner of the editor allowing you to try the beta versions of the new modern editor for the current document.

{{% alert color="info" %}}
In Studio Pro 10.6, you can still switch to the **Classic** editor if you go to **Edit** > **Preferences** > **New features**, and **Enable switching to the Classic version of the editor**.
{{% /alert %}}
