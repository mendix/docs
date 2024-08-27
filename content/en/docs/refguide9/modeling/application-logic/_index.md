---
title: "Application Logic"
url: /refguide9/application-logic/
weight: 40
description: "Presents an overview of documentation on microflows and nanoflows."
---

## Introduction

While you can create a simple Mendix app using widgets on pages, you can unleash the power of Mendix by adding application logic to your app.

Application logic in Mendix can be implemented via [microflows](/refguide9/microflows/), [nanoflows](/refguide9/nanoflows/), and [workflows](/refguide9/workflows/). You can change a value based on a function or combination of functions using expressions. 

Microflows and nanoflows allow you to express the logic of your application. They can perform actions such as creating and updating objects, showing pages, and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Workflows represent a long-lived process. Their main difference from microflows and nanoflows is a waiting aspect – the workflow is paused until it gets an input from an end-user. For example, an employee sends a travel request (triggering the start of the workflow) and then the workflow is paused until a manager approves the request by clicking a button. 

Explore the documentation for details on microflow, nanoflow, and workflow definitions, properties, and usages.

* [Microflows and Nanoflows](/refguide9/microflows-and-nanoflows/)
* [Workflows](/refguide9/workflows/)
* [Expressions](/refguide9/expressions/)
