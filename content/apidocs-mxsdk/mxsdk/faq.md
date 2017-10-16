---
title: "FAQ"
category: "Mendix Platform SDK"
---

## 1 General Questions

### 1.1 Which Mendix versions are supported?

Mendix 6.0.0 and higher.

### 1.2 Where does the Model API run?

The Model API service is hosted in the European Union.

### 1.3 How long do online working copies exist?

Online working copies are automatically removed 24 hours after they have been created. It is not possible to extend their lifetime - you need to create a new online working copy.

### 1.4 What are the limits on project size?

The initial project mpk file that is uploaded is not allowed to exceed 250Mb (project mpr file and other files combined).

### 1.5 Which parts of the Mendix app model can I access with the Model API?

You can access every meta model element of your app model! That includes domain models, microflows, pages, integrations (consumed and published web and app services), Java actions, custom widgets, security constraints and so on. Anything you can access with the Modeler - and all the technical details we abstract away from in the UI, but are part of the app model!

When analyzing app models this gives you a lot of power: you can access every tiny detail in the model, so that you can reason about the entire model, analyze it for quality, or export it completely.

However, because we provide full read-write access, you can also break the model easily. We have taken measures against this, of course, and most of the meta model is safe to use. However, we recommend only doing read access actions on the following specific meta model components, because it is easy to create an invalid model:

*   Consumed and published web and app services
*   XML schemas
*   Import and export mappings
*   Custom widgets
*   Rest services: PublishedRestService is an unsupported, experimental feature.

When changing these components, make sure to use the [reverse engineering tool](generating-code-from-the-model) to increase your chances of successfully building a script that creates valid models.

### 1.6 What the heck are these "promises" anyway?

Glad you asked. We put together a page on [Working with when.js and Promises in TypeScript](working-with-when.js-and-promises-in-typescript). We're happy to tell you all about it!

## 2 Common Error Messages

### 2.1 Delta rejected, delta queue connection has closed

This error message is shown when making changes on a model, but the connection to the Online Working Copy on the Model Server has already been closed. This sometimes happens if your script executes a commit too quickly, without waiting until all model updates have been executed.

### 2.2 JS Allocation failed – process out of memory

This can happen when you open a huge model and then load a lot of documents (e.g. pages, microflows). You can increase the memory available to your script by running it using the max-old-space-size flag and an appropriate memory size in MB:

`node --max-old-space-size=4096 script.js`
