---
title: "Application Logic"
url: /refguide/application-logic/
category: "App Modeling"
weight: 40
description: "Presents an overview of documentation on microflows and nanoflows."
tags: ["studio pro", "logic", "microflow", "nanoflow"]
---

## 1 Introduction

While you can create a simple Mendix app using widgets on pages, you can unleash the full power of Mendix by adding application logic to your app.

Application logic in Mendix can be implemented via [microflows](/refguide/microflows/), [nanoflows](/refguide/nanoflows/), and [workflows](/refguide/workflows/). These are visual ways of expressing what traditionally ends up in a textual programming code. 

{{< figure src="/attachments/refguide/modeling/application-logic/logic-comparison-diagram.png" class="no-border">}}

Microflows and nanoflows are short-lived in nature. They can perform actions such as creating and updating objects, showing pages, and making choices. Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the client side (that is, on the browser/device), and can be used in an offline app. For more information on the differences between microflows and nanoflows, see [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/).

Workflows represent a long-lived process. They are used to build extendable processes and are fully integrated with other editors, such as the microflow editor and the page editor. The main difference of workflows from microflows and nanoflows is from a waiting aspect—the workflow is paused until it gets an input from an end-user. For example, an employee sends a travel request (triggering the start of the workflow) and then the workflow is paused until a manager approves the request by clicking a button. For more information on workflow definitions, properties, and usages, see [Workflows](/refguide/workflows/).

In Mendix, expressions play a crucial role in defining conditional actions and logic within your application. For instance, they are often used in [decisions in microflows or nanoflows](/refguide/decisions/), or in [decisions in workflows](/refguide/decision-in-workflows/). For an overview of expressions that are available in Mendix, see [Expressions](/refguide/expressions/).

