---
title: "Application Logic"
url: /refguide/application-logic/
weight: 40
description: "Presents an overview of documentation on microflows and nanoflows."
---

## Introduction

While you can create a simple Mendix app using widgets on pages, you can unleash the full power of Mendix by adding application logic to your app.

Application logic in Mendix can be implemented via [microflows](/refguide/microflows/), [nanoflows](/refguide/nanoflows/), and [workflows](/refguide/workflows/). These are visual ways of expressing what traditionally ends up in a textual programming code. 

{{< figure src="/attachments/refguide/modeling/application-logic/logic-comparison-diagram.png" class="no-border">}}

Microflows and nanoflows are short-lived in nature. They can perform actions such as creating and updating objects, customizing button functionalities, showing pages, and making choices. For example, you can use a microflow to customize a **Save** button for validating end-users' input data. For more instructions, see the [Defining Logic Using Microflows](/quickstarts/responsive-web-app/#microflow-use-case) section in *Building a Responsive Web App*. An example of a nanoflow is to use it to create a button that allows end-users to take a picture. For more instructions, see the [Using a Nanoflow to Call a JavaScript Action](/quickstarts/native-mobile-app/#nanoflow-use-case) section in *Adding a Native Mobile App*. 

Microflows run in the runtime server and can therefore not be used in offline apps, while nanoflows run directly on the client side (that is, on the browser/device), and can be used in an offline app. For more details on their differences, see the [Differences between Microflows and Nanoflows](/refguide/microflows-and-nanoflows/#differences) section in *Microflows and Nanoflows*.

Workflows represent a long-lived process. They are used to build extendable processes and are fully integrated with other editors, such as the microflow editor and the page editor. The main difference of workflows from microflows and nanoflows is from a waiting aspect—the workflow is paused until it gets an input from an end-user. An example of a workflow is when an employee sends a business travel request to get approved by their manager. Sending the travel request will trigger the start of the workflow and then the workflow is paused until a manager approves or rejects the request by clicking a button. For more information on workflow definitions, properties, and usages, see [Workflows](/refguide/workflows/).

In Mendix, expressions play a crucial role in defining conditional actions and logic within your application. For instance, they are often used in [decisions in microflows or nanoflows](/refguide/decisions/), or in [decisions in workflows](/refguide/decision-in-workflows/). For an overview of expressions that are available in Mendix, see [Expressions](/refguide/expressions/).
