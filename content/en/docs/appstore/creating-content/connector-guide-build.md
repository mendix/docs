---
title: "Building Connectors"
url: /appstore/creating-content/connector-guide-build/
linktitle: "Building Connectors"
url: /appstore/creating-content/connector-guide-build/
category: "Creating Content"
menu_order: 3
tags: ["connectors", "data hub", "studio pro", "build", "connector guide", "how to"]
---

## 1 Introduction

Welcome to the world of Mendix connectors! Mendix connectors allow you to connect your Mendix application to other systems. You can find them on the [Mendix Marketplace](https://marketplace.mendix.com/), or add them to the Marketplace for others to use. 

**This how-to will teach you the following:**

* What connectors are and how they work
* How to build a connector

Check back later for a link to a future document about recommended practices for building connectors.

### 1.1 Prerequisites  

Before starting this how-to, make sure you have completed the following prerequisites:

* Read the blog post [Introducting the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/)
* Read [How to Share Marketplace Content](/appstore/general/share-app-store-content/)
* Read the Evaluation Guide page about [Integration](https://www.mendix.com/evaluation-guide/app-capabilities/integration/)
* Read [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/) 
* Watch the [Build a Mendix Connector](https://www.youtube.com/watch?v=wTQJ1MiXAow) tutorial

## 2 What Are Connectors?

Connectors can be used in your app to simplify connecting to existing third-party systems or other Mendix applications. 

### 2.1 Connecting to Other Systems

These connectors are implemented as Mendix modules with a focus on connecting to other systems. The connectors can make use of any of the platform-supported protocols like [SOAP](/refguide/consumed-web-services/#soap), [REST](/refguide/consumed-rest-services/#rest), [OData](/refguide/consumed-odata-services/#external-entities), or [Data Hub](/data-hub/). 

They can also be used to package a Java library provided by the other system to make the connection. These Java library functions can be exposed via Java actions as custom microflow activities (see [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/)). This makes it simpler for Mendix developers without in-depth knowledge about third-party integrations to use these connectors in their business logic.

#### 2.1.1 Connecting Mendix Apps to Mendix Apps  

This chart shows the available solutions for when you want to connect Mendix apps to other Mendix apps:<br/>  

| Category | Solution |
| --- | --- |
| Platform-supported protocols | Connect to two or more Mendix applications using platform-supported facilities:<br> SOAP web services (see [Published Web Services](https://docs.mendix.com/refguide/published-web-services) and [Consumed Web Services](https://docs.mendix.com/refguide/consumed-web-services)), REST web services (see [Published REST Services](/refguide/published-rest-service/) and [Consumed REST Services](/refguide/consumed-rest-services/)), OData (see [Published OData Services](https://docs.mendix.com/refguide/published-odata-services) and [Consumed OData Services](https://docs.mendix.com/refguide/consumed-odata-services)), or Data Hub (see the [Data Hub Guide](https://docs.mendix.com/data-hub/)). | 
| Unsupported protocols   | Build a module to connect either with alternative protocols or by encapsulating one of the platform supported protocols. You can do this with [Java actions](https://docs.mendix.com/refguide/java-actions) or [JavaScript actions](https://docs.mendix.com/refguide/javascript-actions).  | 

#### 2.1.2 Connecting Mendix Apps to Third-Party Systems  

This chart shows the available solutions for when you want to connect Mendix apps to third-party systems:<br/>

| Category | Solution |
| --- | --- |
| Platform-supported protocols | Connect a Mendix application to one or more third party applications using platform-supported facilities: SOAP web services, REST web services or ODATA.       | 
| eQ-supported protocols   | Use eQ supported facilities: Web services, REST, OData | 
| Unsupported protocols   | Build a module to connect either via alternative protocols, or by encapsulating one of the platform supported protocols. |

### 2.2 Getting Mendix Connectors

Many existing Mendix [Connectors](/appstore/connectors/) can be downloaded from the [Mendix Marketplace](https://marketplace.mendix.com/) directly into your app. Depending on your use case, your company's private Mendix Marketplace could also have a variety of Mendix connector modules available. For more information on the distinction between public and private Marketplace content, see the [Getting Started](/appstore/general/share-app-store-content/#get-started) section of *Share Marketplace Content*.

Because connectors expose data via custom microflow activities, you can find them in the Studio Pro [Toolbox](/refguide/view-menu/#toolbox) to implement when building your application logic. Then, you can drag them where you want to use the connector functionality.

### 2.3 Deploying Connectors

Once you deploy an application, the connector will automatically deploy with it. You can also set a few runtime or node specific configurations (via the application interface or constants).

As an example, check out the [AWS IoT](/appstore/connectors/aws-iot/) connector. This connector uses AWS-provided Java libraries to interact with the AWS IoT service. The functions from these Java libraries in turn are exposed via a set of Mendix Java actions that are available in the toolbox to use in your logic.

### 2.4 Future Versions of Connectors

Another approach to connecting to external systems is by creating connector applications that wrap those systems with OData APIs. This approach will be discussed in the future, either here or in a linked document.

In addition, it is important to protect the IP of the connector module, particularly when reselling those modules. Applying IP protection to connector modules will be discussed in the future, either here or in a linked document.

## 3 Building a Mendix Connector in Studio Pro

Now that you know what connectors are, you can try building your own!

When creating a new Mendix connector, it is advised to have an app in which you both develop and test your connector. This means that you will have a module that contains all your connector logic, along with one or more additional modules that assist in the testing and development. The logic in the additional modules are not required for the operation of the module and therefore need to be separated.

### 3.1 Setting Up Your App

To start setting up your app, open Studio Pro and do the following:

1.  Create a [New App](/refguide/new-project/) for your connector.
2.  Create a module to contain your connector. To do this, right-click anywhere in the **App Explorer** outside of existing modules and choose **Add Module**.
    
     {{< figure src="/attachments/appstore/creating-content/connector-guide-build/add-module.png" >}}

3.  Give your module a name fitting for the type of connector you are building.
4.  Create the basic folder structure at root level. 

### 3.2 Implementing the Connector

How you implement the module is entirely up to you and your use case, but it is good to keep the following in mind:

* Document the parts that are to be used by the implementing application.
* Provide a granular security model that allows the implementing application to use your connector in a secure way.
* Hide complex parts, preferably in the Java code, or at least in the private folder. Future Mendix versions will include an option to secure your IP in the Mendix module, but for now that is only possible using a Java library.
* Minimize dependencies to easily available libraries/modules that are well maintained. And where possible do not use any dependencies.
* Contain all your core code in your connector module. Anything assisting you during development or testing should be in separate modules using the connector module but never the other way around.
* Test your connector.

### 3.3 Exporting the Connector

Because Mendix connectors are like any other Mendix [module](/appstore/modules/), you can export them from your app. When a connector module is exported, the following will also export:

* Entities
* Microflows
* Pages
* Java actions
* Theming (from the **themesource** folder) *[only for Mendix Studio Pro 9 and above]*
* Specified user library files (from the **userlibs** folder)
* Specified resource files (from the **resources** folder)
* Specified related Java files (from the modules subfolder in the **javasource** folder)

#### 3.3.1 Exporting as an .mpk File

To export your connector as an *.mpk* file, do the following:

1. Ensure your version is aligned with the version number that appears on the Marketplace version. Versioning in Marketplace starts at 1.0.0 (for more information, see the [Adding New Marketplace Content](/appstore/general/share-app-store-content/#adding) section in *How to Share Marketplace Content*). You cannot use Marketplace to distribute your connector if it is below version 1.0.0.
2. Generate the export module package using your [Gradle script](https://github.com/ako/CsvServices/blob/cd219e71249c194bca26b374716b88628237a6dd/build.gradle#L72).
3. Build and export release candidate with versioning and put it in the Marketplace **DIST** folder. You can create this folder to contain the releases of your module for reference.

### 3.4 Distributing the Connector

To share your connector with other developers and the wider community, you can publish it in the Mendix Marketplace. While publishing, you may choose to publish it for everyone or just for your company. In case you choose the second option, it will only be available to other developers belonging to the same company. For more information on how to publish to the Marketplace, and the difference between public and private publishing, see the [Getting Started](/appstore/general/share-app-store-content/#get-started) section of *Share Marketplace Content*.

Once you publish the connector and someone imports it in their Mendix app, all of these elements will be placed in the same location from which they are exported.

Distribute the module to whomever wants to use it (share the file or upload to Marketplace) by following these steps: 

1. Keep the release notes ready.
2. Deploy to GITHub by doing the following:
    * Commit code to GitHub (if you have not already made this a Git project)
    * Create new release
3. Create the release in Marketplace using the release from GitHub.

### 3.5 Architectural Impact

Because connectors are exported as modules and then published on the Marketplace, they are as decoupled as possible from your development application. This is needed because a copy of the module will be imported in other applications when users download the module from the Marketplace. The implementing application might need to configure some constants, add specific microflows, use pages or snippets, configure specifics on runtime, but it will always be a standalone situation.

## 4 Read More

* [How to Share Marketplace Content](/appstore/general/share-app-store-content/)
