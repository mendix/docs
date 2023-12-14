---
title: "Microflows and Nanoflows"
url: /refguide/microflows-and-nanoflows/
weight: 10
description: "Presents an overview of microflows and nanoflows."
tags: ["studio pro", "microflow", "nanoflow"]
---

## 1 Introduction

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly, client side, on the browser/device and can be used in an offline app. Furthermore, most of the actions in nanoflows run directly on the device, so there is also a speed benefit for logic which does not need access to the server. 

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

## 2 Classic and Modern Logic Editors

In Studio Pro 10.6 and above, use the new and modernized logic editors. The new editors focus on making your daily logic modeling experience faster, smoother and easier to learn. 

The new editors contain several huge improvements, with some major improvements in:

* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
* [Keyboard navigation](/refguide/microflows/#keyboard-improved) 
* [Canvas interaction](/refguide/microflows/#canvas-interaction)

In Studio Pro 10.5 and below, the default logic editors are the **Classic** logic editors. In Studio Pro 10.4 and 10.5, there is the toggle at the top right corner of the editor allowing you to try the beta versions of the new modern editor for the current document.

{{% alert color="info" %}}
In Studio Pro 10.6, you can still switch to the **Classic** editor if you go to **Edit** > **Preferences** > **New features**, and **Enable switching to the Classic version of the editor**.
{{% /alert %}}
