---
title: "Microflows and Nanoflows"
url: /refguide/microflows-and-nanoflows/
weight: 10
description: "Presents an overview of microflows and nanoflows."
tags: ["studio pro", "microflow", "nanoflow"]
---

## 1 Introduction

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the browser/device and can be used in an offline app. Furthermore, most of the actions in nanoflows run directly on the device, so there is also a speed benefit for logic which does not need access to the server. 

{{% alert color="info" %}}
Redesigned logic editors (microflows, nanoflows, and rules) were in beta from Studio Pro 10.4.0, and were released for GA in Studio Pro 10.6.0.
{{% /alert %}} 

In Studio Pro 10.4 and 10.5, you can activate the beta logic editors in the following ways:

* To try out the beta version once, use the toggle in the top toolbar of the editor to switch from the **Classic Version** to the **Beta Version**. This only affects the current document. Other microflow and nanoflow editors will still start with the **Classic Version**.

  {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/beta-toggle.png" >}}

* To edit microflows, nanoflows, or rules in the beta editors by default, open the Studio Pro preferences and check **Use the Beta version as the default editor** under the **New features** tab.

In Studio Pro 10.6 and above, the redesigned (**Modern**) logic editors are set as the default editors. 

{{% alert color="info" %}}
In Studio Pro 10.6, it is still possible to switch to the **Classic** version of your logic editors if you go to **Edit** > **Preferences** > **New features**, and **Enable switching to the Classic version of the editor**.
{{% /alert %}}

Explore the documentation for details on microflow and nanoflow definitions, properties, and usages.

* [Logic Editors (Beta)](/refguide/logic-editors-beta/)
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
