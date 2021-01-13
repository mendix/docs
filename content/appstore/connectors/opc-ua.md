---
title: "OPC UA" 
category: "Connectors"
description: "Describes how to use the OPC UA connector, which is available in the Mendix App Store."
tags: ["app store", "app store component", "OPC UA", "connector", ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% todo %}}[Check answers to all information with multiple question marks ??????????]{{% /todo %}}

## 1 Introduction

The [OPC UA Client connector](https://appstore.home.mendix.com/link/app/114874/) connector allows you to connect your Mendix application to [OPC](https://opcfoundation.org/) enabled servers using the functionality of [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/). The connector allows you to read from, write to, and subscribe to OPC UA servers.

OPC is the platform-independent, multi-vendor interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. The OPC Unified Architecture (OPC UA) is an architecture that integrates all the OPC specifications into one extensible framework.

This module uses the [Eclipse Milo library](https://github.com/eclipse/milo) an open-source implementation of OPC UA, and has been tested with the [Prosys OPC UA server](https://www.prosysopc.com/).

There is a sample module, [OPC UA Client example implementation](https://appstore.home.mendix.com/link/app/114876/), which gives an example of how the connector can be used.

### 1.1 Features

#### 1.1.1 Actions

The OPC UA Client connector supports the following actions

* Browse: – browse a list of nodes
* Read: – reads the value of a node
* Write: – write data to a node
* Subscribe: – to receive data (or events) from a node
* Unsubscribe: – stop receiving updates for a node

#### 1.1.2 Security 

The OPC UA Client connector supports all three security options offered by OPC UA:

* None
* Credentials
* Client certificates

Only one of the options can be in use any any time, which one will be determined by the OPC UA server that you are connecting too. The password from both the user and certificate are automatically encrypted when saving the server configuration using the Encryption module.  

#### 1.1.3 Dependencies

The OPC UA Client connector has the following dependencies

* Mendix 8.8.1 or higher
* Encryption Module
* An OPC UA server – we assume that you are familiar with OPC UA and your OPC UA server(s), these instructions do not include information on how to set up your servers.

Recommended; Having an external OPC UA Client tool will make setup of the connection a lot easier. A commonly used client is the one from [Unified Automation](https://www.unified-automation.com/downloads/opc-ua-clients.html), with this (non-Mendix) tool you will be able to browse through the server and find the parameters needed to configure your connection. 

## 2 Installation

Import the [OPC UA Client connector](https://appstore.home.mendix.com/link/app/114874/) module into your app. Instructions for doing this are in [How to Use App Store Content in Studio Pro](/appstore/general/app-store-content).

You will see the new module in the **App Store modules** section of the **Project Explorer**.

{{% image_container width="300" %}}
![OPC UA Client connector in Project Explorer](attachments/opc-ua/opc-ua-connector-module.png)
{{% /image_container %}}
{{% todo %}}[Update this Image, the folder structure has changed]{{% /todo %}}

When you edit a microflow, you will also see five additional actions in the **Toolbox**.

{{% image_container width="300" %}}
![OPC UA Client connector actions in the microflow toolbox](attachments/opc-ua/opc-ua-toolbox.png)
{{% /image_container %}}

This is all you need to do to use the connector. However, there is also a sample module, [OPC UA Client example implementation](https://appstore.home.mendix.com/link/app/114876/), which gives an example of how the connector can be used. If you want to look at the sample implementation described in [OPC UA Client example implementation](#example-implementation) you will need to import this into your app in addition to the OPC UA Client connector.

## 3 OPC UA Client connector

### 3.1 Client State

The module/app is designed for usage with multiple servers if necessary. The state for each OPC UA server is kept by the client in an object of entity type **OpcUaServerCfg**. This  needs to be populated before the actions of the OPC UA client connector can be used. 

{{% image_container width="300" %}}
![OPC UA Server configuration entity](attachments/opc-ua/opcuaservercfg.png)
{{% /image_container %}}
{{% todo %}}[Update image, attributes have been removed?]{{% /todo %}}

For each OPC UA server, the following information will need to be stored in a OpcUaServerCfg object.

* ServerID (String) – a short nickname that you assign to the server so that you can identify it easily. Primarily used for error and log messages.
* URL (String) – the full URL of the OPC UA server (e.g.: opc.tcp://localhost:53530/OPCUA/SimulationServer)
* Username (String) – the username used if the authentication type is `CREDENTIALS`
* Password (String) – the password for the username used if the authentication type is `CREDENTIALS`, only used for data-entry. After saving this field is reset.
* Password_Encrypted (String) – the encrypted password for the username, automatically takes the 'Password' and encrypts the value
* AuthenticationType (Enumeration) – the type of authentication required for this server: `NONE`, `CREDENTIALS`, or `CERTIFICATE`
* CertificatePassword (String) – the certificate password required when using the `CERTIFICATE` type of authentication, only used for data-entry. After saving this field is reset.
* CertificatePassword (String) – the encrypted password for the certificate, automatically takes the CertificatePassword and encrypts the value

You can see an example of how this can be set up in the [OPC UA Client example implementation](#example-implementation) section.


### 3.2 Actions

Once you have set up the server configuration, you can perform the following actions in your microflows.

#### 3.2.1 **Browse** a List of Nodes

The **Browse** action allows you to browse the nodes within the OPC UA server. The browse function starts at the specified node and browses 'down' and returns the children of the specified node. 

![Parameters for the browse action](attachments/opc-ua/browse-action.png)
{{% todo %}}[Update image, parameters have changed]{{% /todo %}}

* Opc ua server cfg – an object of entity type OpcUaServerCfg containing the configuration of the server to which the request is made
* NodeId – The NodeId from where you want to browse to it's children. When requesting the 'Is Root'=true leave this value empty. Expects the full Node Id as referenced by the OPC UA server. This is generally a combination of the namespace URI and Identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation client) and the Browse function returns this same value for each node. Example: "ns=4;id=3"
* Is root – is used by the tree widget in the example implementation module — if you are not using the tree widget you, the value here is not important

#### 3.2.2 **Read** the Value of a Node

The **Read** action allows you to read the current value of a specific node within the OPC UA server.

![Parameters for the read action](attachments/opc-ua/read-action.png)
{{% todo %}}[Update image, parameters have changed]{{% /todo %}}

* Opc ua server cfg – an object of entity type OpcUaServerCfg containing the configuration of the server to which the request is made
* NodeId – The NodeId of the Node you want to read. Expects the full Node Id as referenced by the OPC UA server. This is generally a combination of the namespace URI and Identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation client) and the Browse function returns this same value for each node. Example: "ns=4;id=3"

{{% alert type="info" %}}
All values are read as strings, you will need to convert them if you need a numeric or date value.
{{% /alert %}}

#### 3.2.3 **Subscribe** to Updates of Data from a Node
{{% todo %}}[Update chapter, the subscription structure has changed.]{{% /todo %}}

The **Subscribe** action allows you to subscribe to receive a notification every time the value of a node changes. This creates an object of type **Subscription** which is associated with the OPC UA service and contains details of the subscription and the item which is being monitored. You should assign a microflow to process the data each time a notification is received. The frequency of the notifications is controlled by the UPC UA server.

![Parameters for the subscribe action](attachments/opc-ua/subscribe-action.png)

* Opc ua server cfg – an object of entity type OpcUaServerCfg containing the configuration of the server to which the request is made
* Namespace index – the index an OPC UA server uses for a namespace URI
* Identifier – the identifier for a node in the address space of an OPC UA server 
* On message microflow – defines a microflow to be run every time a message is received from the subscribed service
* Use return value – `Yes` returns an object of type **Subscription** which defines the new subscription and can be used in the microflow, `No` does not return an object
* Variable name – the name assigned to the variable containing the return value

{{% alert type="info" %}}
Subscriptions are automatically kept alive by the app and will continue to be sent as long as both the client and server are running. The OPC UA Connector automatically provides values for `requestedMaxKeepAliveCount` and `requestedLifetimeCount`and will keep the subscription alive. If these values are exceeded, then the subscription will lapse. This can happen, for example, if the app is redeployed.
{{% /alert %}}

##### 3.2.3.1 Subscriptions

Information about nodes which are subscribed to is stored in the **Subscription** entity associated with the **OpcUaServerCfg** server configuration entity.

{{% image_container width="300" %}}
![The subscription entity](attachments/opc-ua/subscription.png)
{{% /image_container %}}

An object is created for each subscription and contains the following information:

SubscriptionID (String) – a unique identifier generated by the OPC UA server
Identifier (String) – the identifier of the node the client is subscribed to
NamespaceIndex (String) – the namespace index of the node the client is subscribed to
MonitoredItemID (String) – a unique identifier generated by the OPC UA server — this can be used to identify a subscription to be cancelled
Active (Boolean) – identifies whether the subscription is active or not
OpcUaNodeID (String) – ????? Used within Example implementation

#### 3.2.4 **Unsubscribe** from Updates of Data from a Node

The **Unsubscribe** action allows you to end a subscription to item change notifications when you no longer want to receive the notifications.

![Parameters for the unsubscribe action](attachments/opc-ua/unsubscribe-action.png)

* Opc ua server cfg – an object of entity type OpcUaServerCfg containing the configuration of the server to which the request is made
* Subscription ID – the ID of the subscription from which you want to unsubscribe — this is held as the **SubscriptionID** in the **Subscription** entity
* Monitored item ID – the ID of the item which is being monitored by the subscription — this is held as the **MonitoredItemID** in the **Subscription** entity
* Use return value – `Yes` ????? what is the return value, `No` does not return a variable
* Variable name – the name assigned to the variable containing the return value

#### 3.2.5 **Write** Data to a Node

The **Write** action allows you to write a new value to a node to which you have write permissions.

![Parameters for the write action](attachments/opc-ua/write-action.png)

* Opc ua server cfg – an object of entity type OpcUaServerCfg containing the configuration of the server to which the request is made
* Namespace index – the index an OPC UA server uses for a namespace URI
* Identifier – the identifier for a node in the address space of an OPC UA server 
* Value to write – the new value which you want to set for this node
* Use return value – `Yes` creates a variable containing the list of nodes, `No` does not return a variable
* Variable name – the name assigned to the variable containing the return value

### 3.3 Pages

The OPC UA Client connector comes with a number of pages which you can use to manage and test the connection to your server(s).

#### 3.3.1 OpcUaServer_Overview

This page shows a summary of all the servers you have set up in your app and allows you to edit existing servers and set up a new one. For each server you will see the name you have given it, the URL where the server can be reached, and the authentication type.

To use this page, just include it in the navigation for your app, or add an **Open Page** button to an existing page of your app.

From this page, you can perform the following actions:

* Search – search for a particular server in the list of servers
* New server – add a new OPC UA server using the **OpcUaServer_NewEdit** page
* Edit server - change the details of the selected server using the **OpcUaServer_NewEdit** page
* View server – this button is there for adding further functionality — in the default module it calls a microflow which displays a message
* Delete – delete all the information about the selected server — you will be asked for confirmation

#### 3.3.2 OpcUaServer_NewEdit

This page allows you to create or change the details of an OPC UA server you want to use within your app. Your app administrator can use this page as is, or you can customize it for your own use. If you customize it, we recommend that you use a copy of it in one of your own modules so that it is not accidentally overwritten if you update the OPC UA Client connector App Store module.

##### 3.3.2.1 Data on OpcUaServer_NewEdit Page

* **Name** – The name to give to this server within the app
* **URL** – The URL used for connection to the server — this should be a TCP connection in the form `opc.tcp://…`
* **Authentication type** – the type of authentication to be used with this server — this is one of **NONE**, **CREDENTIALS**, or **CERTIFICATE**
    * **Username** (if **Authentication Type** is **CREDENTIALS**) – the username required to authenticate to the OPC UA server if credentials are being used for authentication
    * **Password** (if **Authentication Type** is **CREDENTIALS**) – the password required to authenticate to the OPC UA server if credentials are being used for authentication
    * **Certificate file (PFX)** (if **Authentication Type** is **CERTIFICATE**) – the file containing the certificate required to authenticate to the OPC UA server if a certificate is being used for authentication — you will be able to upload a file held locally, and also download an existing file
    * **Certificate password** (if **Authentication Type** is **CERTIFICATE**) – the password required to authenticate to the OPC UA server if a certificate is being used for authentication

{{% alert type="warning" %}}
The OPC UA server should have only one type of authentication enabled, and the authentication type chosen here must match that type to ensure that the endpoint can be reached.
{{% /alert %}}

##### 3.3.2.2 Test Actions on OpcUaServer_NewEdit Page

In addition to the usual **Save** and **Cancel** buttons which allow you to save the server settings or cancel the create or edit operation, there are a number of additional options. These enable you to test that your connection to the OPC UA server is working correctly.

To display the test buttons and additional data fields, check **Enable Test Mode**.

This displays the following data entry fields which can be used to control the tests.

* **Value to write** – the value to write to a node when the **Test OPC UA Write** button is clicked
* **Namespace index** – the namespace index of the node to test when the **Test OPC UA Subscribe**, **Test OPC UA Write**, or **Test OPC UA Read** button is clicked
* **Identifier** – the identifier of the node to test when the **Test OPC UA Subscribe**, **Test OPC UA Write**, or **Test OPC UA Read** button is clicked
* **Result** – the resulting JSON string from performing any of the four test actions

The four test actions you can perform are listed below.

* **Test OPC UA Browse** (no parameters required) – retrieves top level nodes of the Address space of an OPC UA server
* **Test OPC UA Subscribe** (**Namespace index** and **Identifier**) – creates a subscription to the specified identifier — when a new value is received this will trigger the *OpcUaClientMx.SubscriptionIncomingData_Process_TEST* microflow, which does not contain any actions in the default implementation
* **Test OPC UA Write** (**Namespace index**, **Identifier**, and **Value to write**)– writes the specified value to a writable node
* **Test OPC UA Read** (**Namespace index** and **Identifier**) – reads the current value of a node

The result of the tests is displayed in the **Result** field. It shows the raw JSON response which the OPC UA server provides.

## 4 OPC UA Client Example Implementation{#example-implementation}

The OPC UA Client example implementation is a sample app based on the [Prosys OPC UA server](https://www.prosysopc.com/). It implements the following functionality:

* Configure one or more OPC UA server connections
* View the nodes on the server
* ?????? 
* Add a subscription to a node
* Remove a subscription

You can use or adapt the OpcUaClient_ExampleImplementation module (link) for a fast start. Bear in mind that the node data structure from your server may be different and adjust your imports accordingly.

{{% alert type="info" %}}
If you are adapting the example implementation, it is recommended that you make a copy of the module and add it to your app so that you don't accidentally update the App Store module and overwrite your changes.
{{% /alert %}}

### 4.1 Dependencies

* Mx 8.8.1 or higher
* Atlas UI (use, for example, the blank starter app as a basis)
* The OpcUaClientMx module
* Any OPC UA server

### 4.2 Initial Configuration

1. Add the **OpcUaServer_Overview** page in the **OpcUaClientMx** module to the navigation of the app, either through the **Navigation** settings, or by adding an **Open Page** button to a page which is already in the navigation (for example the home page).

2. Connect the **OpcUaServer_View** page in the **OpcUaClient_ExampleImplementation** to the **View server** button on the **OpcUaServer_Overview** page in the **OpcUaClientMx** module.

### 4.3 Pages

The **OpcUaServer_View** page adds functionality to the **View server** button on the server overview page. 


## Known Limitations ##

1. Limited Value types
   Currently only Boolean, Int16, UInt16, Int32, Int64, Float, Double, and String are implemented to be written to the Node in the OPC UA Server. Reading has been tested for limited data types, when reading and subscribing all return values are casted to String through a simple toString() method. This implementation works well for Boolean and the Int values but hasn't been tested for all data types. 

1. High-Availability Architecture. 
    At this point the module is relying completely on storing configuration in the server memory and only supports running on a single Container instance. If you use scaling and run multiple parallel instances of the application the module will likely generate exceptions and loose messages. 

1. Complex Events on Nodes
    Subscriptions are only possible on value changes of Nodes. At this time Events or aggregates are not implemented yet. The module does support all DataTypes, any OPC UA type is received and passed as a String to the evaluating microflow.

1. Advanced settings on MonitoredItem
   OPC UA offers fine graned control over how values are shared with [this] client. At this time all MonitoredItems are setup with identical default parameters, and these can not yet be influenced. The default parameters are coming from the Apache Milo library. 
Some example of the default values are: SamplingInterval: 500ms; RequestedPublishingInterval: 500ms; QueueSize: 10; DiscardOldest: true;    (This will get a guaranteed value every 500ms, and stores a maximum of 10 values in the queue, if the queue fills up it will discared the oldest and keep the latest 10 values only).




