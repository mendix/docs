---
title: "SDK Use Cases"
url: /apidocs-mxsdk/mxsdk/sdk-use-cases/
weight: 2
---

## Introduction

Since the Mendix SDK gives you full access to all aspects of your app model, there's an almost infinite number of things you can do with it. We can however distinguish four basic categories: analyzing, exporting, modifying and importing. To inspire you to build your own scripts and tools, you can find an example for each category below.

## Importing Legacy Code {#importing}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844116.png" class="no-border" >}}

The longer an organization exists, the larger its installed base of legacy software is. Maintaining this legacy software is often costly and error-prone, not to mention the required expertise for outdated technologies. The Mendix SDK allows you to create legacy software transformation tools that help you convert your legacy applications to cloud-based Mendix apps.

Some of the possibilities:

* Bootstrap new apps and modify existing apps
* Automatically generate CRUD pages for your entities
* Transform legacy business logic to microflows

## Analyzing Your Apps {#analyzing}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844117.png" class="no-border" >}}

If you are looking to improve your existing Mendix app models, it can be hard to figure out where to start. Especially if you join a project where you need to work on an existing app, it is a lot of work to get a feeling for where the complexity of an app can be found. Mendix models are completely open and accessible, making it possible to automate model quality analysis. With the Mendix SDK, you are empowered to access every part of the model, which allows you to analyze your app model and find out where the complex areas reside.

Some of the possibilities are:

* Counting and listing the components of your app.
* Creating a "Death Star" architecture diagram of your app.
* Calculating industry standard software metrics like [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) and [fan-in/out](https://en.wikipedia.org/wiki/Fan-out_%28software%29) of microflows.

## Exporting Your Apps {#exporting}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844114.png" class="no-border" >}} 

The SDK allows you to export your Mendix app model and then take it basically anywhere. Every model element (pages, microflows, entities, etc.) and its properties are open and accessible via the Mendix SDK. So take any (or all) of these, and generate whole new representations of your app model.

Some of the possibilities are:

* Generating documentation.
* Transforming microflows into Java method.
* Setting up scaffolding for Selenium page objects.

## Modifying Your Apps {#modifying}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-intro/16844115.png" class="no-border" >}} 

Your existing Mendix apps will likely need updates and changes. Some of these changes can be tedious to do by hand, whether it is replacing group boxes by div containers, creating a better visual layout for your microflows, or publishing your microflows as Web Service operations. With the Model SDK you can create a script that does these things for you, so you can focus on the creative and fun parts of your app.

Some of the possibilities are:

* Batch updating page elements and labels
* Reorganizing the layout of your app model in the blink of an eye
* Exposing your microflows as web services and your entities as OData resources
