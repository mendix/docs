---
title: "Data Hub Landscape"
description: "Describes using Data Hub Landscape to search for and look at registered assets"
tags: ["data hub catalog", "data hub", "external entities", "landscape", "published odata service"]
---

## 1 Introduction

The Data Hub Landscape presents a graphical view of the registered OData services in your Data Hub. It provides a landscape visualization of items registered in the [Data Hub Catalog](../data-hub-catalog/index) and their releationships with apps that consume the datasets that they connect to. In the Data Hub Landscape, the nodes are the runtime instances of applications (or, more specifically, the deployments of apps in specific environments) and the published OData services from the apps. All public services that are issued with Data Hub are also shown in the Landscape.

In the Landscape, you will see, at a glance, the network of deployments of the apps publishing OData services and those consuming them. It enhances searching for suitable data sources in the Data Hub Catalog by showing the following: 

* Popular apps in the Data Hub Landscape and the apps that consume data from them
* The dependencies between consuming and publishing apps
* All the services published from an app (deployed to a specific environment) and the entities that are exposed in the service
* Details of the selected nodes
This visual display of registered assets will enable you to:
* Decide on the relevance of available assets by seeing the apps that they are consumed by
* Discover the context of the data being shared by the network of nodes for a service and the deploying app
* From the displayed network of dependencies, ascertain the differences between the services by seeing how the shared data is used

You can access the Data Hub Landscape from [Mendix Data Hub](https://hub.mendix.com/) by clicking the **Landscape** tab.

## 2 Data Hub Landscape in Detail

### 2.1 Structure and Flow of Data

A registered OData service includes the precise definition of the app and the datasets or entity sets—that provide the link to the shared data. The service endpoint and the deployment to a specific environment is shown as a node on the Landscape. 

The Landscape depiction of a service and its network will be such that it will show the "flow" of data from the bottom of the display towards the top. Therefore, services that are consumed by an app will always be shown below it. Other applications that consume a selected service will always be displayed above it. A complex example of a network where this is illustrated is shown in the [example landscape network](#example-landscape) below.

### 2.2 Navigating the Landscape

By default, the Data Hub **Search** pane is on the left of the Landscape screen. When a service is selected in the search results, it is displayed in the center with its network of connections. The selected service and the deploying app are highlighted with a blue outline.

When you click any of the nodes or connections, the metadata pane on the right displays further details.

You can pan around the landscape and and zoom using the mouse. You can also collapse both the search pane and the metadata pane so that the full screen area is available for viewing.

When you click the **Catalog** tab this will display the **Search Details** screen of the items selected in the search pane.

![](attachments/use-landscape/landscape.png)

### 2.3 Nodes
Registered apps and services are depicted in the Landscape as nodes from the definitions in the registered service metadata. The icons for each of these nodes identifies the the source application, for example, Mendix and Siemens.

#### 2.3.1 Service
Services are depicted as a round node with the OData icon and the service name and version number, and on the line connecting it to the publishing app, the number of entities exposed in the service.

The following is an example of a selected service node exposing three entities:

![](attachments/use-landscape/node-service.png)

#### 2.3.2 Apps
Apps are displayed as square icons in the landscape and the environment that the app is deployed to is given below the app name. The example below shows a non-Mendix app (**SAP Concur**) deployed to a production environment and the selected Mendix app (**MxAnniversery**):

![](attachments/use-landscape/node-apps.png)

### 2.4 Dependencies
The relationships and dependencies between apps, published services, and consuming apps are represented by connecting lines that also display the entities that are consumed. These are illustrated and described in the following examples: 

![](attachments/use-landscape/dependencies.png)

* **Solid gray line** – This links an app and the services that have been published from the app in the specified environment. In the example, the selected app **MxAnniversery** has a published service, **AnniversaryService1.0.0**. 
* **Broken gray line with an arrow (consume line)** – This indicates that an app is consuming from a service to which it is linked. The direction of the dependency is indicated by the direction of the arrow, which indicates that the consuming app makes a call to the OData service for data from the publishing app—there is an arrow to the consuming app which is "pulling" the data. The service will "get" the dataset for the endpoint that is consumed from the publishing app.
	* The app **MxAnniversery** consumes three entities through **ConcurExpenses 1.0.0**, which is published from **SAP Concur** in production.
	* **MxAnniversery** consumes two entities through **BambooDataService 1.1.0**, which is published from the **Bamboo** app in production.

The network of dependencies that is shown will position the selected item at the center of the network. 

{{% alert type="info" %}}
In the case when an app publishing a service also consumes from the same service, the line for the publishing dependency will be superimposed on the line for the consuming dependency. This will result in only a single dotted-gray line being displayed. Details can be seen in the Metadata panel.
{{% /alert %}}

### 2.5 Node Details
Clicking a node will display details of the node in the **Metadata** pane. You can see further details in the **Search Details** screen by clicking the **Catalog** tab. Conversely, in the **Search Details** screen, you can click the **Landscape** tab to see the network of dependencies for the selected item. 

### 2.6 Consumed Entities
If you click the **Entity** icon on the consume line, the names of the entities that are being consumed from the service will be shown in the right panel.

![](attachments/use-landscape/consume-arrow-entitites-list.png)

## 3 Example Landscape Network {#example-landscape}

This example shows a complex network of apps and services from different sources (Mendix, Siemens and other OData sources) that are connected. The example illustrates the "flow of data" principle of the Landscape representation for the individual service and consuming app. However, this example also illustrates a possible exception when viewed over the whole network: The selected app (**SuperCyclingApp**) consumes from a service (**CyclingServicePublishedby…**) that is published by an app (**ConsumpingApp2**) that consumes the selected service (**CyclingService1.0.0**).

In this example, when viewed over the whole network, it appears that the data flow is from the top of the Landscape to the bottom. However, that is because of the circularity of the connections.

![](attachments/use-landscape/complex-example.png)

