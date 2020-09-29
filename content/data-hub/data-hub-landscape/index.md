---
title: "Data Hub Landscape"
description: "Describes using Data Hub Landscape to search for and look at registered assets"
tags: ["data hub catalog", "data hub", "virtual entities", "landscape", "published odata service"]
---

{{% todo %}}[what about public services which are going to be issued with Data Hub>?]{{% /todo %}}

## 1 Introduction

The Data Hub Landscape presents a graphical view of the registered OData services in your Data Hub. It provides a landscape visualization of items registered in the [Data Hub Catalog](../data-hub-catalog/index) in which the nodes are the runtime instances of applications (or, more specifically, the deployments of apps in specific environments). All public services that are issued with Data Hub are also shown in the Landscape.

{{% todo %}}[**AD: Standardize if "Landscape" should be capitalized when not used with "Data Hub"**]{{% /todo %}}

In the Landscape, you to see at a glance the deployments of the apps publishing OData services and those consuming them in an environment. The Data Hub Landscape enhances the search experience of the Data Hub Catalog as follows: 

* See popular apps in the Data Hub Landscape and the apps that consume data from them
* See clearly the dependencies between consuming and publishing apps
* See at a glance all the services published from an app (deployed to a specific environment) and the entities that are exposed in the service
* Decide on the relevance of available entities by seeing the apps that they are consumed by
* Ascertain the context of the data being shared by the network of nodes for a service and the deploying app
* From the displayed network of dependencies, ascertain the differences between the services by seeing how the shared data is used

{{% todo %}}[**AD: "See" used three times and "acertain" twice - consider using some synomyms**]{{% /todo %}}

You can access the Data Hub Landscape from the [Mendix Data Hub](https://hub.mendix.com/) by clicking the **Landscape** tab.

## 2 Data Hub Landscape in Detail

### 2.1 Structure and Flow of Data

A registered OData service includes the precise definition of the app, the environment it is deployed in, and the entities—that provide the link to the shared data—are defined as specific endpoints in the service. 

The Landscape depiction of a service and its network will be such that it will show the "flow" of data  from the bottom of the display towards the top. Therefore, services that are consumed by an app will always be shown below it. Other applications that consume a selected service will always be displayed above it. A complex example of a network where this is illustrated is shown in the [example landscape network](#example-landscape) below.

### 2.2 Navigating the Landscape

By default, the Data Hub **Search** pane is on the left of the Landscape screen. When a service is selected in the search results, the selected service is displayed in the center of the Landscape display, and its network of connections is shown. The selected service and the deploying app are highlighted with a blue outline  in the landscape view.

When you click any of the nodes or connections, the metadata pane on the right displays the details.

To see the full details of the selected item, click the **Catalog** tab to display the **Search Details** screen in the Data Hub Catalog.

{{% todo %}}[**AD: Is "Search Details" in the UI? If it is not, it should not be bolded or capitalized.**]{{% /todo %}}

You can pan and zoom around the landscape using the mouse controls. It is also possible to "rearrange" the network of nodes by clicking a node and moving it.  The selected service will always remain centered. 

![](attachments/use-landscape/landscape.png)

### 2.3 Nodes

Registered apps and services are depicted in the Landscape as nodes from the definitions in the registered service metadata. The icons for each of these nodes identifies if it is a Mendix app, a Siemens Team Center app, or a non-Mendix app.

{{% todo %}}[??verify that ultimately it will show he avatar for the app]{{% /todo %}}

{{% todo %}}[**AD: "Siemens Team Center" should be cross-referenced - to App Store connector?**]{{% /todo %}}

#### 2.3.1 Service

Services are shown as a round node with the service name and version number and the number of entities exposed by the service.

The following examples show a selected service node from a Mendix app exposing one entity and a non-Mendix service exposing three entities:

![](attachments/use-landscape/node-service.png)

#### 2.3.2 Apps

Apps are displayed as square icons in the landscape and the environment that the app is deployed to is given below the app name. The example below shows a non-Mendix app (**SAP Concur**) deployed to a production environment and the selected Mendix app (**MxAnniversery**):

![](attachments/use-landscape/node-apps.png)

{{% todo %}}[?**In the new**: The published service is shown in the circle and the relationships are lines to the publishing apps and the consuming apps that "call on" the service. A consuming "environment" is shown with the arrow pointing to the service. the service will get the data for the endpoint that is consumed, from the publishing app. ….also the explanation for the rest is changed - shape of Node containers, entities displayed, information… etc.]{{% /todo %}}

### 2.4 Dependencies

For a service from a deployed app that is consumed by another deployed app—when the actual connection to the data for the exposed entities is made between the publishing and consuming apps—the relationships and dependencies are represented as shown and described for the example below: 

![](attachments/use-landscape/dependencies.png)

* **Solid gray line** – This links an app and the services that have been published from the app in the specified environment. In the example, the selected app **MxAnniversery** has a published service, **AnniversaryService1.0.0**. 
* **Broken gray line with an arrow (consume line)** – This indicates that an app is consuming from a service to which it is linked. The direction of the dependency is indicated by the direction of the arrow, which indicates that the consuming app makes a call to the OData service for data from the publishing app – there is an arrow to the consuming app which is "pulling" the data.  The service will get the data for the endpoint that is consumed from the publishing app.
	* The app **MxAnniversery** consumes three entities through **ConcurExpenses 1.0.0**, which is published from **SAP Concur** in production.
	* **MxAnniversery** consumes two entities through **BambooDataService 1.1.0**, which is published from the **Bamboo** app in production.

The network of dependencies that is shown will show the selected item at the center of the Landscape view. 

### 2.5 Node Details

Clicking a node will display details of the node in the **Metadata** pane. You see further details in the **Search Details** screen by clicking the **Catalog** tab. Conversely, in the **Search Details** screen, you can click the **Landscape** tab to see the network of dependencies for the selected item. 

### 2.6 Consumed Entities

If you click the **Entity** icon on the consume line, the names of the entities that are being consumed from the service will be shown in the right panel.

![](attachments/use-landscape/consume-arrow-entitites-list.png)

## 3 Example Landscape Network {#example-landscape}

This example shows a complex network of apps and services from different sources (Mendix and Team Center) that are connected. The example illustrates the "flow of data" principle of the Landscape representation for the individual service and consuming app.  However, this example also illustrates a possible exception when viewed over the whole network: The selected app (**SuperCyclingApp**) consumes from a service (**CyclingServicePublishedby…**) that is published by an app (**ConsumpingApp2**) that consumes the selected service (**CyclingService1.0.0**).

In this example, when viewed over the whole network, it appears that the data flow is from the top of the Landscape to the bottom. However, that is because of the circularity of the connections.

![](attachments/use-landscape/complex-example.png)

{{% todo %}}[? - tooltip should be moved and not "roll-out" from top left of landscape screen. Font is all wrong, too large and style does not fit rest of Landscape styling. Click **consume arrow** - shows entities being consumed in the right panel. This is inconsistent with the basic format of catalog/landscape screen. Right panel is for metadata. Entity list should appear highlighted in the search results pane on the left. ]{{% /todo %}}
