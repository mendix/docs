---
title: "Create a Connector"
url: /appstore/creating-content/connector-guide-build/
weight: 4
description: "Introduces the concept of connectors, how they work, and the basic steps for building and publishing connectors."
---

## Introduction

Welcome to the world of Mendix connectors. Mendix connectors allow you to connect your Mendix application to other systems. You can find them on the [Mendix Marketplace](https://marketplace.mendix.com/), or add them to the Marketplace for others to use. 

This how-to teaches you the following:

* What connectors are and how they work
* Basic steps for building and publishing connectors

{{% alert color="info" %}}
For in-depth instructions and best practices, see [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/).
{{% /alert %}}

### Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Read the blog post [Introducing the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/)
* Read [How to Share Marketplace Content](/appstore/submit-content/)
* Read the Evaluation Guide page about [Integration](https://www.mendix.com/evaluation-guide/app-capabilities/integration/)
* Read [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/) 
* Watch the [Build a Mendix Connector](https://www.youtube.com/watch?v=wTQJ1MiXAow) tutorial
* Install Studio Pro

## What Are Connectors?

Connectors can be used in your app to simplify connecting to existing third-party systems or other Mendix applications. 

### Connecting to Other Systems

Connectors are implemented as Mendix modules with a focus on connecting to other systems. Connectors can make use of any of the platform-supported protocols like [SOAP](/refguide/consumed-web-services/#soap), [REST](/refguide/integration/rest-services/), [OData](/refguide/consumed-odata-services/#external-entities), or [Catalog](/catalog/). 

They can also be used to package a Java library provided by the other system to make the connection. These Java library functions can be exposed via Java actions as custom microflow activities (see [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/)). This makes it simpler for Mendix developers without in-depth knowledge about third-party integrations to use these connectors in their business logic.

#### Connecting Mendix Apps to Mendix Apps  

This chart shows the available solutions for when you want to connect Mendix apps to other Mendix apps:

| Category | Solution |
| --- | --- |
| Platform-supported protocols | Connect to two or more Mendix applications using platform-supported facilities:<br> SOAP web services (see [Published Web Services](/refguide/published-web-services/) and [Consumed Web Services](/refguide/consumed-web-services/)), REST web services (see [Published REST Services](/refguide/published-rest-service/) and [Consumed REST Services](/refguide/consumed-rest-services/)), OData (see [Published OData Services](/refguide/published-odata-services/) and [Consumed OData Services](/refguide/consumed-odata-services/)), or Catalog (see the [Catalog Guide](/catalog/)). | 
| Unsupported protocols   | Build a module to connect either with alternative protocols or by encapsulating one of the platform supported protocols. You can do this with [Java actions](/refguide/java-actions/) or [JavaScript actions](/refguide/javascript-actions/).  | 

#### Connecting Mendix Apps to Third-Party Systems  

This chart shows the available solutions for when you want to connect Mendix apps to third-party systems:

| Category | Solution |
| --- | --- |
| Platform-supported protocols | Connect a Mendix application to one or more third party applications using platform-supported facilities: SOAP web services, REST web services or OData.       | 
| eQube-supported protocols   | Use eQube-supported facilities: Web services, REST, OData | 
| Unsupported protocols   | Build a module to connect either via alternative protocols, or by encapsulating one of the platform supported protocols. |

{{% alert color="info" %}}
The [Catalog](/catalog/) is a hub for shared registered assets made available in your organization. At the moment, it supports OData, REST, and Business Events.
{{% /alert %}}

### Getting Mendix Connectors

Many existing Mendix Connectors can be downloaded from the [Mendix Marketplace](https://marketplace.mendix.com/) directly into your app. Depending on your use case, your company's private Mendix Marketplace could also have a variety of Mendix connector modules available. For more information on the distinction between public and private Marketplace content, see the [Adding New Marketplace Content](/appstore/submit-content/#adding) section of *Share Marketplace Content*.

Because connectors expose data via custom microflow activities, you can find them in the Studio Pro [Toolbox](/refguide/view-menu/#toolbox) to implement when building your application logic. Then, you can drag them to where you want to use the connector functionality.

### Deploying Connectors

Once you deploy an application, the connector will automatically deploy with it. You can also set a few runtime or node specific configurations (via the application interface or constants).

As an example, check out the [Amazon SNS](/appstore/modules/aws/amazon-sqs/) connector. This connector uses AWS-provided libraries to interact with the Amazon Simple Notification Service. The functions are exposed via a set of Mendix actions that are available in the toolbox to use in your logic.

## Building a Mendix Connector in Studio Pro {#build-connector}

When creating a new Mendix connector, it is advised to have an app in which you both develop and test your connector. This means that you will have a module that contains all your connector logic, along with one or more additional modules that assist in the testing and development. The logic in the additional modules are not required for the operation of the module and therefore need to be separated.

### Setting Up Your App {#app-setup}

To start setting up your app, open Studio Pro and do the following:

1. Create a [New App](/refguide/new-app/) for your connector.
2. Create a module to contain your connector. To do this, right-click anywhere in the **App Explorer** outside of existing modules and choose **Add Module**.

    {{< figure src="/attachments/appstore/create-content/create-connectors/add-module.png" class="no-border" >}}

3. Give your module a name fitting for the type of connector you are building.
4. Create the basic folder structure at root level. 

For more information, see the [App Setup](/appstore/creating-content/connector-guide-best-practices/#app-setup) section of *Best Practices for Building Connectors*.

### Implementing the Connector {#implement}

How you implement the module is entirely up to you and your use case, but it is good to keep the following in mind:

* Document the parts that are to be used by the implementing application.
* Provide a granular security model that allows the implementing application to use your connector in a secure way.
* Hide complex parts, preferably in the Java code, or at least in the private folder. Future Mendix versions will include an option to secure your IP in the Mendix module, but for now that is only possible using a Java library.
* Minimize dependencies to easily available libraries/modules that are well maintained. And where possible do not use any dependencies.
* Contain all your core code in your connector module. Anything assisting you during development or testing should be in separate modules using the connector module but never the other way around.
* Test your connector.

### Exporting the Connector {#export}

Because Mendix connectors are like any other Mendix [module](/appstore/modules/), you can export them from your app. When a connector module is exported, the following will also export:

* Entities
* Microflows
* Pages
* Java actions
* Theming (from the **themesource** folder) *[only for Mendix Studio Pro 9 and above]*
* Specified user library files (from the **userlibs** folder)
* Specified resource files (from the **resources** folder)
* Specified related Java files (from the modules subfolder in the **javasource** folder)

#### Exporting as an .mpk File{#export-as-mpk}

To export your connector as an *.mpk* file, do the following:

1. Ensure your version is aligned with the version number that appears on the Marketplace version. Versioning in Marketplace starts at 1.0.0 (for more information, see the [Adding New Marketplace Content](/appstore/submit-content/#adding) section in *How to Share Marketplace Content*). You cannot use Marketplace to distribute your connector if it is below version 1.0.0.
2. Generate the export module package using your [Gradle script](https://github.com/ako/CsvServices/blob/cd219e71249c194bca26b374716b88628237a6dd/build.gradle#L72).
3. Build and export release candidate with versioning and put it in the Marketplace **DIST** folder. You can create this folder to contain the releases of your module for reference.

### Distributing the Connector {#distribute}

To share your connector with other developers and the wider community, you can publish it in the Mendix Marketplace. While publishing, you may choose to publish it for everyone or just for your company. In case you choose the second option, it will only be available to other developers belonging to the same company. For more information on how to publish to the Marketplace, and the difference between public and private publishing, see the [Adding New Marketplace Content](/appstore/submit-content/#adding) section of *Share Marketplace Content*.

Once you publish the connector and someone imports it in their Mendix app, all of these elements will be placed in the same location from which they are exported.

Distribute the module to whomever wants to use it (share the file or upload to Marketplace) by following these steps: 

1. Keep the release notes ready.
2. Deploy to GitHub by doing the following:
    * Commit code to GitHub (if you have not already made this a Git project)
    * Create new release
3. Create the release in Marketplace using the release from GitHub.

### Architectural Impact

Because connectors are exported as modules and then published on the Marketplace, they are as decoupled as possible from your development application. This is needed because a copy of the module will be imported in other applications when users download the module from the Marketplace. The implementing application might need to configure some constants, add specific microflows, use pages or snippets, configure specifics on runtime, but it will always be a standalone situation.

## Read More

* Read [How to Share Marketplace Content](/appstore/submit-content/)
* Check out [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)
* See more about building a third-party service connector using [OData Services](/refguide/integration/odata-services/)
