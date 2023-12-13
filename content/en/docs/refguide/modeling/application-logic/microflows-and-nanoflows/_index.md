---
title: "Microflows and Nanoflows"
url: /refguide/microflows-and-nanoflows/
weight: 10
description: "Presents an overview of microflows and nanoflows."
tags: ["studio pro", "microflow", "nanoflow"]
---

## 1 Introduction

{{% alert color="info" %}}
In Studio Pro 10, logic editors (for microflows, nanoflows, and rules) have two versions (**Classic** and **Modern**). Our documentation is updated to always reflect the newest version, in this case, the modern logic editors.
{{% /alert %}}

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the browser/device and can be used in an offline app. Furthermore, most of the actions in nanoflows run directly on the device, so there is also a speed benefit for logic which does not need access to the server. 

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

{{% alert color="info" %}}
In Studio Pro 10.6, you can still switch to the **Classic** editor if you go to **Edit** > **Preferences** > **New features**, and **Enable switching to the Classic version of the editor**.
{{% /alert %}}

In Studio Pro 10.6 and above, the default logic editors are the **Modern** logic editors. In the modern logic editors, there are some major improvements in:

* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
* [keyboard navigation](/refguide/microflows/#keyboard-improved) 
* [canvas interaction](/refguide/microflows/#canvas-interaction)

In Studio Pro 10.5 and below, the default logic editors are the **Classic** logic editors. 

In Studio Pro 10.4 and 10.5, there is the toggle at the top right corner of the editor allowing you to try the modern logic editor (as a beta feature) for the current document. You can also enable it as the default editor through the Studio Pro [preferences](/refguide/preferences-dialog/#new-features).