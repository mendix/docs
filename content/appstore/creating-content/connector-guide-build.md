---
title: "Understand and Build Mendix Connectors"
parent: "Creating-Content"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
tags: "connectors", "data hub", "studio pro", "build", "connector guide", "how to"
---

## 1 Introduction

Welcome to the world of Mendix connectors! Mendix connectors allow you to connect your Mendix application to other systems. You can find them on the Mendix Marketplace, or add them to the Marketplace for others to use. For more information on content you can create for the Marketplace, see [Creating Content](/appstore/creating-content).

**This how-to will teach you the following:**
* What connectors are and how they work
* How to build a Mendix connector

**We aim to reach the following target audiences:**
* Mendix teams responsible for building connectors
* Mendix partners
* Mendix customers
* Anyone else interested in creating a Mendix Marketplace connector

### 1.1 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Read the [introductory blog on the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/)
* Read [Share Marketplace Content](https://docs.mendix.com/appstore/general/share-app-store-content)
* Read the [doc about Mendix integration](howto/integration/) and check out the [evaluation guide post on Mendix integration](https://www.mendix.com/evaluation-guide/app-capabilities/integration/)
* Read how to [build microflow actions with Java](https://docs.mendix.com/howto/extensibility/howto-connector-kit) 
* View a [YouTube tutorial on building a Mendix connector](https://www.youtube.com/watch?v=wTQJ1MiXAow)

## 2 What Are Connectors?

Mendix connectors can be used in your Mendix project to simplify connecting to existing third-party systems or other Mendix applications. 

These connectors are implemented as Mendix modules with a focus on connecting to other systems. The connectors can make use of any of the platform supported protocols like SOAP, REST, OData, or [Data Hub](/data-hub/). They can also be used to package a Java library provided by the other system to make the connection. These Java library functions can be exposed via Java actions as [custom microflow activities](/howto/extensibility/howto-connector-kit). This makes it simpler for Mendix developers without in-depth knowledge about third-party integrations to use these connectors in their business logic.

The charts below provide overviews of use cases and categoriation for connectors:

| Mendix to Mendix| Solution | 
| ----------- | ----------- | 
| Platform-supported protocols | Connect to two or more Mendix applications using platform supported facilities: SOAP webservices, REST webservices, ODATA or Data Hub. <br>**References**</br>* [Publish Web Services](https://docs.mendix.com/refguide/published-web-services)<br>* [Consumed Web Services](https://docs.mendix.com/refguide/consumed-web-services)<br>* [Published REST Services](https://docs.mendix.com/refguide/published-rest-services)<br>* [Consumed REST Services](https://docs.mendix.com/refguide/consumed-rest-services)<br>* [Published OData Services](https://docs.mendix.com/refguide/published-odata-services)<br>* [Consumed OData Services](https://docs.mendix.com/refguide/consumed-odata-services)<br>* [Data Hub Guide](https://docs.mendix.com/data-hub/)        |
| Unsupported protocols   | Build a module to connect either via alternative protocols or by encapsulating one of the platform supported protocols. <br>**References**</br> * [Java actions](https://docs.mendix.com/refguide/java-actions)<br>* [JavaScript actions](https://docs.mendix.com/refguide/javascript-actions)   |  |

| Mendix to Third-Party | Solution 
| ----------------- | ----------------------- |
| Platform-supported protocols      | Connect a Mendix application to one or more third party applications using platform supported facilities: SOAP webservices, REST webservices or ODATA.       | 
| Partner-supported protocols (eQ)   | Use eQ supported facilities: Webservices, REST, OData | 
| Unsupported protocols   | Build a module to connect either via alternative protocols, or by encapsulating one of the platform supported protocols. | 

### 2.1 Getting Mendix Connectors

Many existing Mendix connectors can be downloaded from the [Mendix Marketplace](https://marketplace.mendix.com/) directly into your project. Depending on your use case, your company's Mendix Marketplace could also have a variety of Mendix connector modules available. See an [explanation of available Mendix connectors](/appstore/connectors/).

Because connectors expose data via custom Microflow activities, you can find them in the Studio Pro **Toolbox** to implement when building your application logic. Then, you can drag them where you want to use the connector functionality.

### 2.2 Deploying Connectors

Once you deploy an application, the connector will automatically deploy with it. You can also set a few runtime or node specific configurations (via the application interface or constants).

As an example, check out the [AWS IoT connector](appstore/connectors/aws-iot/). This connector uses AWS-provided Java libraries to interact with the AWS IoT service. The functions from these Java libraries in turn are exposed via a set of Mendix Java actions that are available in the toolbox to use in your logic.

#### 2.2.1 Future Versions of Connectors

Another approach to connecting to external systems is by creating connector applications that wrap those systems with OData APIs. This approach will be discussed in a future version of this document.

In addition, it is important to protect the IP of the connector module, particularly when reselling those modules. Applying IP protection to connector modules will be discussed in a future version of this document. For more information on securing Marketplace content, see [Sharing Marketplace Content](appstore/general/share-app-store-content/)

## 3 Building a Mendix Connector in Studio Pro

Now that you know what connectors are, you can try building your own!

When creating a new Mendix connector, it is advised to have a project in which you both develop and test your connector. This means that you will have a module that contains all your connector logic, along with one or more additional modules that assist in the testing and development. The logic in the additional modules are not required for the operation of the module and therefore need to be separated.

### 3.1 Setting Up Your Project

1. Create a [Mendix project](refguide/new-project/) for your connector.
2. Create a Module to contain your connector. To do this, right-click anywhere in the **App Explorer** outside of existing modules and choose **Add Module**.
![](/attachments/connectors/add-module.png)
3. Give your module a name fitting for the type of connector you are building.
4. Create the basic folder structure at root level. 

### 3.2 Implementing the Connector

How you implement the module is entirely up to you and your use case, but it is good to keep the following in mind:

* Document the parts that are to be used by the implementing application.
* Provide a granular security model that allows the implementing application to use your connector in a secure way.
* Hide complex parts, preferably in the Java code, or at least in the private folder. Future Mendix versions will include an option to secure your IP in the Mendix module, but for now that is only possible using a Java library.
* Minimize dependencies to easily available libraries/modules that are well maintained. And where possible do not use any dependencies.
* Contain all your core code in your connector module. Anything assisting you during development or testing should be in separate modules using the connector module but never the other way around.
* Test your connector.

### 3.3 Exporting the Connector

Because Mendix connectors are like any other Mendix [module](/appstore/modules/), you can export them from your project. When a connector module is exported, the following will also export:

* Entities
* Microflows
* Pages
* Java actions
* Theming (from the `themesource` folder) *[only for Mx 9+]*
* Specified user library files (from the `userlibs` folder)
* Specified resource files (from the `resources` folder)
* Specified related Java files (from the modules sub folder in the `javasource` folder)

#### 3.3.1 Exporting as an *.mpk* File

1. Ensure that version number in the version folder corresponds with Marketplace version number.
2. Generate the export module package using your [Gradle script](https://github.com/ako/CsvServices/blob/cd219e71249c194bca26b374716b88628237a6dd/build.gradle#L72)
3. Build/export release candidate with versioning and put it in the Marketplace `DIST` folder.
4. Ensure your version is aligned with the Marketplace version number. Versioning in Marketplace starts at 1.0.0. See the *Adding New Marketplace Content* section in [Share Marketplace Content](appstore/general/share-app-store-content)/. You cannot use Marketplace to distribute your connector if it is below version 1.0.0.

### 3.4 Distributing the Connector

To share your connector with other developers and the wider community you can publish it in the Mendix Marketplace. While publishing you may choose to publish it for everyone or just for your company. In case you choose the second option it will only be available to other developers belonging to the same company. For more information on how to publish to the Marketplace, see [Share Marketplace Content](https://docs.mendix.com/appstore/general/share-app-store-content/).

Once you publish the connector and someone imports it in their Mendix project, all of these elements will be placed in the same location from which they are exported.

Distribute the module to whomever wants to use it (share the file or upload to Marketplace).
1. Keep the release notes ready.
2. Deploy to GITHub by doing the following:
    * Commit code to GitHub (if you have not already made this a Git project)
    * Create new release
3. Create the release in Marketplace using the release from GitHub.

**Architectural impact:**
Because connectors are exported as modules and then published on the private/public Mendix Marketplace, they are as decoupled as possible from your development application. This is needed because a copy of the module will be imported in other applications when they download the module from the Marketplace. The implementing application might need to configure some constants/add specific microflows/use pages or snippets/configure specifics on runtime, but it will always be a standalone situation.

## 4 Read More

This document introduced connectors and gave you a step-by-step outline on how to build one. An upcoming document will contain more detailed information and good practices for this process.