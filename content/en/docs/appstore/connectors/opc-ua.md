---
title: "OPC UA" 
url: /appstore/connectors/opc-ua/
category: "Connectors"
description: "Describes how to use the OPC UA connector, which is available in the Mendix Marketplace."
tags: ["Marketplace", "Marketplace component", "OPC UA", "connector", ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [OPC UA Client](https://marketplace.mendix.com/link/component/117391/) connector allows you to connect your Mendix application to [OPC](https://opcfoundation.org/)-enabled Servers using the functionality of [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/). The connector allows you to read from, write to, and subscribe to OPC UA Servers.

OPC is the platform-independent, multi-vendor interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. The OPC Unified Architecture (OPC UA) is an architecture that integrates all the OPC specifications into one extensible framework. This module uses the [Eclipse Milo library](https://github.com/eclipse/milo) an open-source implementation of OPC UA, and has been tested with the [Prosys OPC UA Server](https://www.prosysopc.com/). All terminology in this module is per the OPC UA Documentation. 

You can check out a [sample module](https://marketplace.mendix.com/link/component/114876/), which gives an example of how the connector can be used.

### 1.1 Features

#### 1.1.1 Actions

The OPC UA Client connector supports the following actions:

* Browse – browses a list of nodes
* Read – reads the value of a node
* Write – writes data to a node
* Subscribe – receives data or events from a node
* Unsubscribe – stops receiving updates for a node

#### 1.1.2 Security 

The OPC UA Client connector supports all three security options offered by OPC UA:

* None
* Credentials
* Client certificates

Only one of the options can be in use at a time. Which option to use is determined by the OPC UA Server that you are connecting to. The password from both the user and certificate are automatically encrypted by the Encryption module when the Server configuration is saved.

### 1.2 Limitations

1. Limited value types

   Currently only the following value types are implemented to be written to the node in the OPC UA Server: Boolean, Int16, UInt16, Int32, Int64, Float, Double, and String.
   
   Reading has been tested for limited data types. During reading and subscribing, all return values are casted to String through a simple `toString()` method. This implementation works well for Boolean and the Int values, but has not been tested for all data types. 

1. High-availability architecture (no horizontal scaling support)

   At this point, this connector replies completely on storing configuration in the Server memory and only supports running on a single container instance. If you use scaling and run multiple parallel instances of the application, the module may generate exceptions and loose messages. 

1. Complex events on nodes

   Subscriptions are only possible on value changes of nodes. At this time, events or aggregates are not implemented yet. The connector supports all data types. Any OPC UA type is received and passed as a String to the evaluating microflow.

1. Advanced settings on monitored items

   OPC UA offers fine-grained control over how values are shared with this Client. At this time all monitored items are set up with identical default parameters, and these can not yet be influenced. The default parameters come from the Apache Milo library. 

   Some examples of the default values are:` SamplingInterval: 500ms`; `RequestedPublishingInterval: 500ms`; `QueueSize: 10`; `DiscardOldest: true`. This will get a guaranteed value every 500 ms, and stores a maximum of 10 values in the queue. If the queue fills up, it will discard the oldest and keep the latest 10 values only.

### 1.3 Prerequisites

* You use Studio Pro [8.17.0](/releasenotes/studio-pro/8.17/) or higher
* You have installed the [Encryption](/appstore/modules/encryption/) module in Studio Pro
* You have an OPC UA Server
* You are familiar with OPC UA and your OPC UA Server and know how to set up your Server

{{% alert color="info" %}}We recommend that you use an external OPC UA Client tool, for example, the tool from [Unified Automation](https://www.unified-automation.com/downloads/opc-ua-clients.html). Using such a tool will make the setup of the connection a lot easier, because you will be able to browse through the Server and find the parameters needed to configure your connection. {{% /alert %}}

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the [OPC UA Client connector](https://marketplace.mendix.com/link/component/117391/) module into your app. You will see the new module in the **Marketplace modules** section of the **App Explorer**. When you edit a microflow, you will also see five additional actions in the **Toolbox**.

{{< figure src="/attachments/appstore/connectors/opc-ua/opc-ua-toolbox.png" alt="OPC UA Client connector actions in the microflow toolbox" >}}

## 3 Configuration

1. Add the **OpcUaServer_Overview** page to the navigation of the app, either through the **Navigation** settings, or by adding an **Open Page** button to a page which is already in the navigation (for example the home page). 

2. Update the constant **UA_ApplicationName** in the **_USE_ME** folder with the information specific to your Client. The application name must be unique to the OPC UA Server. The connector has no requirements to the contents of this constant. If you have a single Mendix application connecting to the Server, you can use the default value. If you have multiple Mendix applications connecting to the same Server, change the name so that it is unique as per the OPC UA spec.

    This setting is only used by the OPC UA Server. See the OPC UA Specification for more details.

3. Update the constant **UA_ApplicationURI** in the **_USE_ME** folder with the information specific to your Client. The application name must be unique to the OPC UA Server. The connector has no requirements for the content of this constant. If you have a single Mendix application connecting to the Server, you can use the default value. If you have multiple Mendix applications connecting to the same Server, change the name so that it is unique as per the OPC UA spec. If you use Client certificates for authentication, the URI should match the certificate.

    This setting is only used by the OPC UA Server. See the OPC UA Specification for more details.

4.  If you use subscriptions, set up the **After startup** and **Before shutdown** microflows in your [App Settings](/refguide/app-settings/) as follows: set the **After startup** microflow to **ASu_ReintializeSubscriptions** in the USE_ME folder, and set the **Before shutdown** microflow to **BSd_GracefullyShutdownSubscriptions** in the USE_ME folder.

    {{% alert color="info" %}}If you do not set up the **After startup** microflow, subscriptions will not reconnect after a reboot. If you do not set up the **Before shutdown** microflow, the Server will keep the old subscriptions potentially up to a few hours, and send duplicate messages for this period of time, which can cause exceptions in the Client.{{% /alert %}}

The connector is ready for use.

For an example of the implementation, install the [sample module](https://marketplace.mendix.com/link/component/114876/) and see the [OPC UA Client example implementation](#example-implementation)section.

## 4 Usage

### 4.1 Client State

This connector is designed for usage with multiple Servers if necessary. The state for each OPC UA Server is kept by the Client in an object of the entity **OpcUaServerCfg**. This needs to be populated before the actions of the OPC UA Client connector can be used. 

{{< figure src="/attachments/appstore/connectors/opc-ua/opcuaservercfg.png" alt="OPC UA Server configuration entity" width="300" >}}

For each OPC UA Server, the following information will need to be stored in an **OpcUaServerCfg** object:

* **ServerID** (String) – The short nickname assigned to the Server for identification, which is primarily used for error and log messages.
* **URL** (String) – The full URL of the OPC UA Server, for example, `opc.tcp://localhost:53530/OPCUA/SimulationServer`
* **Username** (String) – The username used if **AuthenticatioType** is **CREDENTIALS**
*  **Password** (String) – The password for the username used if **AuthenticatioType** is **CREDENTIALS**, only used for data-entry

   {{% alert color="info" %}}Once saved, this field is reset.{{% /alert %}}

* **Password_Encrypted** (String) – a password for the username, automatically encrypted from **Password**
* **AuthenticationType** (Enumeration) – the type of authentication required for this Server: **NONe**, **CREDENTIALS**, or **CERTIFICATE**
* **CertificatePassword** (String) – the certificate password required if **AuthenticatioType** is **CERTIFICATE**, only used for data-entry.

   {{% alert color="info" %}}Once saved, this field is reset.{{% /alert %}}

* **CertificatePassword_Encrypted** (String) – a password for the certificate, automatically encrypted from **CertificatePassword**

For an example, see the [OPC UA Client example implementation](#example-implementation) section.

### 4.2 Actions

Once you have set up the Server configuration, you can perform the following actions in your microflows.

#### 4.2.1 Browsing a List of Nodes {#browse}

The **Browse** action allows you to browse the nodes within the OPC UA Server. The **Browse** function starts at the specified node, browses down and returns the children of the specified node. 

{{< figure src="/attachments/appstore/connectors/opc-ua/browse-action.png" alt="Parameters for the browse action" >}}

* **Opc UA Server cfg** – an object of the entity type **OpcUaServerCfg**, which contains the configuration of the Server to which the request is made
* **Node id** – the node ID from which you want to browse to its children
  
    {{% alert color="info" %}}Use the full node ID as referenced by the OPC UA Server. This is generally a combination of the namespace URI and identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation Client), and the **Browse** function returns this same value for each node. Example: `ns=4;id=3`.
    When **Is Root** is set to **true**, leave this value empty.{{% /alert %}}

* **Is root** – is used by the tree widget in the example implementation module

    {{% alert color="info" %}}If you do not use the tree widget, the value of **Is root** is not important.{{% /alert %}}

* **Output** – the output of the **Browser** action is the JSON string with all information about the requested nodes, which can be parsed with the Import Mapping activity

#### 4.2.2 Reading the Value of a Node {#read}

The **Read** action allows you to read the current value of a specific node within the OPC UA Server. The output of the action is a String formatted value of the Node. While the module supports most OPC UA attribute types, the action always returns the value as a String as shown in the original message received from the OPC UA Server. Example the decimal value 10.59 will be returned as '10.59'   

{{< figure src="/attachments/appstore/connectors/opc-ua/read-action.png" alt="Parameters for the read action" >}}

* **Opc ua Server cfg** – an object of entity type **OpcUaServerCfg**, which contains the configuration of the Server to which the request is made
* **Node id** – the ID of the node you want to read

    {{% alert color="info" %}}Use the full node ID as referenced by the OPC UA Server. This is generally a combination of the namespace URI and identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation Client), and the **Browse** function returns this same value for each node. Example, `ns=4;id=3`.{{% /alert %}}

{{% alert color="info" %}}
All values are read as strings, you will need to convert them if you need a numeric or date value.
{{% /alert %}}

#### 4.2.3 Subscribing to Updates of Data from a Node{#subscribe}

The **Subscribe** action allows you to subscribe to receive a notification every time the value of a node changes. OPC UA allows many different ways to subscribe to different data changes, events, and many variations.  

{{% alert color="info" %}}
At this point, this action only allows you to subscribe to value changes. The changes of events and aggregates are currently not supported.
{{% /alert %}}

With the **Subscription** function you can configure exactly how you receive the data. You need to configure the following parts:

* The frequency with which the OPC UA Server collects the data points
* The frequency with which the OPC UA Server sends updates to your Mendix OPC UA Client—this is optional—if you do not specify this, all values are requested every 2 seconds

##### 4.2.3.1 OPC UA Background

To understand the **Subscription** action, it is important to understand the distinction in OPC when monitoring a node. 

As mentioned before, there are two intervals that influence the behavior of the connection: the sampling interval and the publishing interval. The sampling interval is part of the monitored items, and determines how frequently the OPC UA Serer records a sample of the node. When the OPC UA Server takes a sample, the value is placed in a queue for transmission. The publishing interval, which is part of the subscription, determines which samples from which monitored items get transmitted and how often this transmission occurs. 

The simplest scenario is one monitored item with one subscription, both with an publishing and sampling interval of 500 ms. As a result, the OPC UA Server will take a sample every 500 ms, place that in a queue and transmit that sample every 500 ms. 

When the monitored item has a sample interval of 500 ms, but the subscription has a publishing interval of 2 seconds, the OPC UA Server will store all samples in a queue. Every 2 seconds, the OPC UA Server will connect with the Mendix Client and will send all the samples, 4 in total, in a single message. The Client will process these 4 message individually, in the order that they were sent.

OPC UA allows for bundling of monitored items in a single subscription to reduce the number of messages that are being exchanged, for example:  

* Subscription `1233` is created with a publishing interval of 2 seconds

* Node `ns=1;id=2` is monitored with a sampling interval of 500ms

* Node `ns=1;id=3` is monitored with a sampling interval of 500ms.

* Node `ns=1;id=4` is monitored with a sampling interval of 500ms.

As a result, the OPC UA Server will connect with the Mendix Client every 2 seconds, it will make a single connection and share all the messages from all monitored items. In this example, the subscription message will include: 4 samples from node `ns=1;id=2`, 4 samples from node `ns=1;id=3`, and 4 samples from node `ns=1;id=4` – in total, 12 samples.

The Mendix Client will evaluate each sample and process it according to its configuration (see below for details).

##### 4.2.3.2 Subscription Action

The action creates an object of type **MonitoredItem** and **Subscription**. This object is associated with the OPC UA service and contains details of the subscription and the item which is being monitored. You monitor a **Node**, this creates what OPC UA calls a **MonitoredItem**. The monitored item determines the frequency and type of values that you get. 

{{% alert color="info" %}}
A monitored item uses the following default settings: **samplingInterval** = `500ms`; **queueSize** = `10`; **discardOldest** = `true`. For more details on the impact of these settings, see OPC UA Documentation.
{{% /alert %}}

The **Subscription** influences the connection that is established with the Client. Every publishing interval (in millisecond) the Server will connect with the Client to send any new values. 

Each subscription requires a microflow to process the data each time a notification is received. 

The configuration of the action is as follows:

{{< figure src="/attachments/appstore/connectors/opc-ua/subscribe-action.png" alt="Parameters for the subscribe action" >}}

* **Opc ua Server cfg** – an object of entity type **OpcUaServerCfg** containing the configuration of the Server to which the request is made
* **Node id** – the ID of the node you want to subscribe to

  {{% alert color="info" %}}Use the full node ID as referenced by the OPC UA Server. This is generally a combination of the namespace URI and identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation Client), and the **Browse** function returns this same value for each node. Example, `ns=4;id=3`.{{% /alert %}}
* **On message microflow** – defines a microflow to be run every time a message is received from the subscribed service; required to have one input parameter of the **OpcUaClientMx.Message** type and no output.
* **Subscription** (optional) – passes a **Subscription** entity to have more control over the frequency in which messages are sent to the Client. Leave this parameter blank to let the module setup the subscription.
* **Use return value**

  * **Yes** – This returns an object of type **MonitoredItem** which defines the new subscription and can be used in the microflow
  * **No** – This does not return an object, and the returned object should not be changed or committed, but can be associated to for your administration and logic.

* **Object name** – the name assigned to the variable containing the return value  

{{% alert color="info" %}}
**Subscription** and **MonitoredItems** are automatically kept alive by the app and the OPC UA Server. The values will continue to be sent as long as both the Client and Server are running. The OPC UA connector automatically provides values for `requestedMaxKeepAliveCount` and `requestedLifetimeCount` and will keep the subscription alive. If these values are exceeded, then the subscription will lapse. This can happen, for example, if the app is redeployed.
{{% /alert %}}

##### 4.2.3.3 MonitoredItem

Information about nodes which are subscribed to is stored in the **MonitoredItem** entity associated with the **OpcUaServerCfg** Server configuration and the **Subscription** entity.  


{{< figure src="/attachments/appstore/connectors/opc-ua/monitoreditem.png" alt="The subscription entity" width="300" >}}


An object is created for each node you request to monitor, and contains the following information:

* **NodeId** (String) – the full node ID as referenced by the OPC UA Server.  
* **SubscriptionID** (String) – a unique identifier generated by the OPC UA Server, which will be identical to the associated **Subscription** entity
* **MonitoredItemID** (String) – a unique identifier generated by the OPC UA Server, which can be used to identify the unique Monitored Item for cancellation of the subscription  
* **Status** (Enumeration) – identifies whether the subscription is active or not; possible values are **New**, **Active**, **Failed**, **Deleted**  
* **LastSubscribedOn** (DateTime) - the last time the Subscribe function was successfully executed.  
* **LastStateChange** (DateTime) - the last time the **Status** attribute changed, which is the moment the subscription got active, failed, or was deleted.  
* **LastMessage** (DateTime) - the moment the last full message was received from the OPC UA Server on this monitored Item.  

##### 4.2.3.4 Subscription

Information about unique subscriptions that are active with the OPC UA Server. The subscription is associated to a **OpcUaServerCfg** Server configuration and at least one **Monitored Item**. 

The subscription reflects the connection configuration with the OPC UA Server. 


{{< figure src="/attachments/appstore/connectors/opc-ua/subscription.png" alt="The subscription entity" width="300" >}}


This is the only object from the OpcUaClientMx domain that you should create from a microflow, you can create, change, and commit this before passing it into the **Subscribe** action. If you choose to leave the parameter empty, then an object is created automatically for each node you request to monitor. The entity contains the following information:

* **RequestedPublishingInterval_ms** (Decimal) – the publishing interval that is requested from the OPC UA Server in milliseconds (using decimal here to honor the Eclipse Milo implementation)
* **SubscriptionID** (String) – a unique identifier generated by the OPC UA Server  
* **Status** (Enumeration) – identifies whether the subscription is active or not; possible values are **New**, **Active**, **Failed**, **Deleted**

#### 4.2.4 Unsubscribing from Updates of Data from a Node

The **Unsubscribe** action allows you to end a subscription to item change notifications when you no longer want to receive the notifications. 

{{% alert color="info" %}}Never manually or programmatically delete the **Subscription** or **MonitoredItem**, unless the **Status** is set to`Deleted`. Removing the objects prematurely can result in duplicate data or exceptions when the OPC UA Server sends messages for these removed configurations.{{% /alert %}}

You can configure if the unsubscribe is permanent (and records are removed) or if the subscription information is kept for restart through the parameters.

{{< figure src="/attachments/appstore/connectors/opc-ua/unsubscribe-action.png" alt="Parameters for the unsubscribe action" >}}

* **Opc ua Server cfg** – an object of entity type **OpcUaServerCfg** containing the configuration of the Server to which the request is made
* **Monitored item ID** – the ID of the item which is being monitored by the subscription — this is held as the **MonitoredItemID** in the **Subscription** entity
* **RestartSubscriptionOnNextReboot** – Indicates if the registration entities should be kept by this action
  * True – the **MonitoredItem** and **Subscription** will be kept in the database and their **Status** will be changed to **New**
  * False – the **Status** of the monitored item will become **Deleted** and the module will automatically remove the entities from the database


#### 4.2.5 Writing Data to a Node{#write}

The **Write** action allows you to write a new value to a node to which you have write permissions.
If nothing is returned, the action was successful; and if the OPC UA Server refuses the value, an exception will be thrown with the full JSON response included in the exception message. 

{{< figure src="/attachments/appstore/connectors/opc-ua/write-action.png" alt="Parameters for the write action" >}}

* **Opc ua Server cfg** – an object of entity type **OpcUaServerCfg** that contains the configuration of the Server to which the request is made

* **NodeId** –  the ID of the node you want to write to

  {{% alert color="info" %}}Use the full node ID as referenced by the OPC UA Server. This is generally a combination of the namespace URI and identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation Client), and the **Browse** function returns this same value for each node. Example, `ns=4;id=3`.{{% /alert %}}

* **Value to write** – the new value which you want to set for this node; can be any supported type (see the limitations for all types that are currently supported)

  {{% alert color="info" %}}Make sure the value can easily be parsed as the type, i.e. Doubles must be formatted as 0.0, Integers may not have a decimal point, etc.{{% /alert %}}

### 4.3 Pages

The OPC UA Client connector comes with a number of pages which you can use to manage and test the connection to your Server(s).

#### 4.3.1 OpcUaServer_Overview

This page shows a summary of all the Servers you have set up in your app. It allows you to edit existing Servers and set up a new one. For each Server you will see the name you have given it, the URL where the Server can be reached, and the authentication type.

To use this page, just include it in the navigation for your app, or add an **Open Page** button to an existing page of your app.

From this page, you can perform the following actions:

* Search – search for a particular Server in the list of Servers
* New Server – add a new OPC UA Server using the **OpcUaServer_NewEdit** page
* Edit Server - change the details of the selected Server using the **OpcUaServer_NewEdit** page
* View Subscription Details – open a detail page for your Server with all the active subscriptions with their status. This following page allows you to re-connect or disconnect subscriptions. 
* Delete – delete all the information about the selected Server — you will be asked for confirmation. Only delete a Server if there are no active subscriptions, the module doesn't validate this. 

#### 4.3.2 OpcUaServer_NewEdit

This page allows you to create or change the details of an OPC UA Server you want to use within your app. Your app administrator can use this page as is, or you can customize it for your own use. If you customize it, we recommend that you use a copy of it in one of your own modules so that it is not accidentally overwritten if you update the OPC UA Client connector Marketplace module.

##### 4.3.2.1 Data on OpcUaServer_NewEdit Page

* **Name** – The name to give to this Server within the app
* **URL** – The URL used for connection to the Server — this should be a TCP connection in the form `opc.tcp://…`
* **Authentication type** – the type of authentication to be used with this Server — this is one of **NONE**, **CREDENTIALS**, or **CERTIFICATE**
    * **username** (if **Authentication Type** is **CREDENTIALS**) – the username required to authenticate to the OPC UA Server if credentials are being used for authentication
    * **Password** (if **Authentication Type** is **CREDENTIALS**) – the password required to authenticate to the OPC UA Server if credentials are being used for authentication
    * **Certificate file (PFX)** (if **Authentication Type** is **CERTIFICATE**) – the file containing the certificate required to authenticate to the OPC UA Server if a certificate is being used for authentication — you will be able to upload a file held locally, and also download an existing file
    * **Certificate password** (if **Authentication Type** is **CERTIFICATE**) – the password required to authenticate to the OPC UA Server if a certificate is being used for authentication

The password for the credentials and certificate are automatically encrypted and decrypted by the module. After saving the configuration the UI does not allow you to read the existing password, the decryption is only programmed in the connector. 

{{% alert color="warning" %}}
The OPC UA Server should have only one type of authentication enabled, and the authentication type chosen here must match that type to ensure that the endpoint can be reached.
{{% /alert %}}

##### 4.3.2.2 Troubleshoot (test actions) on OpcUaServer_NewEdit Page

In addition to the **Save** and **Cancel** buttons, which allow you to save the Server settings or cancel the create or edit operation, there are also options to validate your configuration. If you click **Advanced Troubleshooting** button, a new page opens. There, you can still edit your configuration, and also test by reading, writing, and browsing the OPC UA Server. This allows you to test your configuration and run actions directly on the OPC UA Server.

Test Messaging:

* **NodeId** – the ID of the node you want to use

  {{% alert color="info" %}}Use the full node ID as referenced by the OPC UA Server. This is generally a combination of the namespace URI and identifier but can have different variations. You can find this in most OPC UA Clients (including the Unified Automation Client), and the **Browse** function returns this same value for each node. Example, `ns=4;id=3`.{{% /alert %}}
* **Value to write** – the value to write to a node when the **Write** button is clicked; should be blank if you want to execute any of the other actions.
* **Result** – the resulting JSON string from performing any of the four test actions, which shows the full response from the OPC UA Server, the connector might at relevant details in case of an error. 
* **Read** – executes the [Read action](#read)
* **Write** – executes the [Write action](#write)
* **Browse** – executes the [Browse action](#browse)
* **Subscribe Simple** – this executes the [Subscribe action](#subscribe). Process response with microflow: `SubscriptionIncomingData_Process_TEST`. Check the log or put a breakpoint on this microflow to checkout the response messages.
* **Subscribe w/ Msg** – this executes the [Subscribe action](#subscribe). Process response with microflow: SubscriptionIncomingData_Process_wMessage_TEST. Check the log or put a breakpoint on this microflow to checkout the response messages.

The result of the tests is displayed in the **Result** field. It shows the raw JSON response which the OPC UA Server provides.

##### 4.3.2.3 Server Subscriptions Overview 

**Subscription Detail** page provides insight in the monitored items and subscriptions that are currently active (or have been recently active). You cannot create new subscriptions from here, but you can interact with existing ones.

The **Monitored Item** tab – This shows a view of all the monitored items that are known to the application. Any object of any status is showing in this view, that is **New**, **Active**, **Failed**, **Deleted** instances. 

For each monitored item, you are able to perform one of the following actions:

{{% alert color="info" %}}If your Server is correctly configured, there is no need to ever execute these actions, but this can be useful to resolve connectivity problems or recover after a previous failure.{{% /alert %}}

* **Refresh Subscription** – This selects a **MonitoredItem** from the list, to re-establishes the connect with the Server. If a previous connection exists, it will simply re-negotiate the settings with the Server, if the connection was lost it will be re-established. This action can also be executed on objects that have the status of **Deleted** or **Failed**. A successful refresh will update these objects to the **Active** status. 
* **Unsubscribe** – This unsubscribes the **MonitoredItem** from the OPC UA Server updates. If the action was successful, the object will receive the status **Deleted** and will be removed from the database eventually.   
* **Delete** – This removes the selected **MonitoredItem** from the database. There are no validations on this action, make sure you know that you can delete the record from the database before executing this action. If you remove a **MonitoredItem** that still has an active subscription at the OPC UA Server, the connector could generate duplicate or untraceable messages, or throw exceptions (until the connection expires at the Server). 
* **Re-connect All New/Active Subscriptions** – refresh all the objects of **MonitoredItem** that have the status **New** or **Active**. Re-establishes the connect with the Server. If a previous connection exists, it will simply re-negotiate the settings with the Server, if the connection was lost it will be re-established.  

**Subscription (connection)** tab – shows a list of all the active Subscriptions with the Server, and all monitored items that are grouped in that same connection. 

The **Subscription** objects are managed by the connector, you cannot directly interact with this data. All subscriptions are automatically created or removed along with monitored items.

The purpose of this tab is to show the subscriptions with their current publishing interval to gain insight in the frequency messages being send by the Server. 

## 5 Troubleshooting

### 5.1 `ClosedChannelException`
When getting a `ClosedChannelException` like the partial stacktrace below, you will need to include the certificates of your OPC UA Server in the runtime configuration. This requires you to upload your Server certificate in the Mendix Runtime Settings. 

      com.mendix.core.CoreRuntimeException: com.mendix.systemwideinterfaces.MendixRuntimeException: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.nio.channels.ClosedChannelException
         at com.mendix.basis.actionmanagement.ActionManager.executeSync(ActionManager.scala:84)
         
      Caused by: com.mendix.systemwideinterfaces.MendixRuntimeException: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.nio.channels.ClosedChannelException
         at com.mendix.util.classloading.Runner.withContextClassLoader(Runner.java:23)
    
      Caused by: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.nio.channels.ClosedChannelException
         at opcuaclientmx.impl.OpcUaClientManager.buildNewClient(OpcUaClientManager.java:74)
    
      Caused by: java.util.concurrent.ExecutionException: java.nio.channels.ClosedChannelException

### 5.2 `no UserTokenPolicy with UserTokenType.UserName found`

This can be caused by one of the following reasons:

* The Server is expecting a username, but you do not have one configured in your Server configuration
* You have configured to authenticate with a username and a password, but the Server does not have that enabled. You should then use **NONE** or **CERTIFICATE** as **AuthenticationType**.

      com.mendix.core.CoreRuntimeException: com.mendix.systemwideinterfaces.MendixRuntimeException: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.lang.Exception: no UserTokenPolicy with UserTokenType.UserName found
         at com.mendix.basis.actionmanagement.ActionManager.executeSync(ActionManager.scala:84)
        
      Caused by: com.mendix.systemwideinterfaces.MendixRuntimeException: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.lang.Exception: no UserTokenPolicy with UserTokenType.UserName found
         at com.mendix.util.classloading.Runner.withContextClassLoader(Runner.java:23)
        
      Caused by: com.mendix.core.CoreException: java.util.concurrent.ExecutionException: java.lang.Exception: no UserTokenPolicy with UserTokenType.UserName found
         at opcuaclientmx.impl.OpcUaClientManager.buildNewClient(OpcUaClientManager.java:86)
        
      Caused by: java.util.concurrent.ExecutionException: java.lang.Exception: no UserTokenPolicy with UserTokenType.UserName found
         at java.base/java.util.concurrent.CompletableFuture.reportGet(CompletableFuture.java:395)

## 6 OPC UA Client Example Implementation{#example-implementation}

The OPC UA Client example implementation is a sample app based on the [Prosys OPC UA Server](https://www.prosysopc.com/) and provides basic browsing functionality, this is not intended to replace a UA Client. It implements the following functionality:

* Configure one or more OPC UA Server connections (using the Client)
* View & browse nodes on the Server
* Example Consumer implementation

You can use the **OpcUaClient_ExampleImplementation** module (link) as a template to start the consumption of your OPC UA Server information.

{{% alert color="info" %}}Bear in mind that the node data structure from all Servers will be different and it could be that the JSON to browse the nodes is different in your Server, so adjust your imports accordingly if needed.{{% /alert %}}

### 6.1 Prerequisites

* You use Studio Pro [8.17.0](/releasenotes/studio-pro/8.17/) or higher
* You have installed [Atlas UI](https://marketplace.mendix.com/link/component/104730) in Studio Pro (for example, you have used the blank starter app as a basis)
* You have installed the The [OPC UA Client](https://marketplace.mendix.com/link/component/117391/) connector
* You have an OPC UA Server

### 6.2 Initial Configuration

Add the **OpcUaServer_Overview** page to the navigation of the app, either through the **Navigation** settings, or by adding an **Open Page** button to a page which is already in the navigation (for example the home page). The page in this module contains the same functionality as the **OpcUaClientMx** module and can be used as a replacement. 

### 6.3 Pages

The **OpcUaServer_View** page adds functionality through the **View server** button on the Server overview page. By opening this page, you are able to browse and search through the OPC UA nodes. The tree view and node view are different ways to interact with the nodes and open the node structure. For a full detailed view of all node properties, either use an actual OPC UA browser or extend the module to parse the additional properties.

### 6.4 Example Consumption

The module contains a folder **'_Example Consumer**', which shows the best way to structure the integration with an OPC UA Server.

In this example, you can see how to interact with a physical gate through a PLC. The dashboard shows an example of the runtime configuration of the **Subscriptions**. For an actual implementation you can move this to an admin management page. The left side of the page shows the interaction with the OPC UA Server. 

As you can see it shows the current status of the PLC, when clicking **Open** or **Close** button, the microflow will perform the required validations before writing an instruction to the OPC UA Server.  

In this use case the OPC UA Server will receive the instruction through the **Write** action, this will trigger the physical gate to move. When the gate state changes, the OPC UA Server will update the 'State'-node accordingly.  

The application is subscribing on the 3 different nodes, **IsUp**, **IsDown**, **IsMoving**. When either of these nodes changes values, a message is sent to the Mendix Client and the values are parsed by the respective microflows: **UA_ProcessEvent_GateUp**, **UA_ProcessEvent_GateDown**, **UA_ProcessEvent_GateMoving**.

All three subscription microflows look up the **MonitoredItem** record, and through the **MonitoredItem**, find the actual PLC that's changing (you need to follow this pattern when interacting with multiple devices through OPC UA). After retrieving the PLC, it will update the state according to the Message. You can extend this microflow with as many complex evaluation and validations as you want. 

As an alternative, it is possible for the OPC UA Node to hold a complex JSON structure as value instead of a simple integer in this example. If that is the case you should implement the same microflow logic, and in addition, you should call an Import Mapping activity before processing the results. 
