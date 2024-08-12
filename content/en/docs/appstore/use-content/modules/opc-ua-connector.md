---
title: "OPC-UA Connector"
url: /appstore/modules/opc-ua-connector/
description: "Describes the OPC-UA connector from the Mendix Marketplace."
tags: ["OPC-UA", "Integration", "IIOT", "low-code"]
---

# 1 Introduction

[OPC](https://opcfoundation.org/) is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. You can use the OPC-UA connector with your Mendix app to communicate with an OPC-UA server. The OPC-UA connector is based on [Eclipse Milo](https://github.com/eclipse/milo) client SDK, an open-source implementation of OPC.

## 1.1 Features

The OPC-UA connector consists of microflows that enable you to do the following:
* Connect to an OPC-UA server
* Browse nodes on an OPC-UA server
* Read and write OPC-UA node attributes
* Subscribe to OPC-UA data changes

## 1.2 License

The OPC-UA connector is licensed under the [EPL2.0 License](https://www.eclipse.org/legal/epl-2.0/).

## 1.3 Pre-requisites

* Studio Pro version 9.24.3 or above
* OPC-UA server version 1.03 or above

## 1.4 Dependencies

You must have the following Marketplace module installed:
* [Community Commons](https://marketplace.mendix.com/link/component/170)

# 2 Installation

1. Install the dependencies.
2. Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OPC-UA connector into your app.

## 2.1 Configuration

1. Add the **NAV_Configuration** microflow to your navigation.

2. Assign the **CanConfigure** module role to a user role that will configure the connections to your server.

3. Log in as a user that can configure the connection and go to the configuration page.

4. If you want to connect to a server with a message security mode **Sign** or **Sign&Encrypt**, add your client certificate in the upper-right corner.

5. Click **New configuration** and follow the steps to set up your connection. Once the configuration is saved, the APIs can be used in your application.

{{% todo %}}Where is the configuration page? Add the image to step 4? The style of a message security mode Sign or sign&encrypt?{{% /todo %}}

## 2.2 Browse the OPC-UA Server

1. Assign the **CanBrowse** module role to a user role that will browse the OPC-UA server.
2. Follow the configuration menu item.
3. Click **Browse** and see what data is available on the server.

{{% todo %}}Where is the configuration menu item? Where is the **Browser** button{{% /todo %}}

# 3 Using the OPC-UA Connector

## 3.1 Connecting to an OPC-UA Server (Session Services)

The OPC-UA connector provides a simple wizard to set up your own connection to an OPC-UA server.

However, if you wish to have your own custom business logic to connect to a server, you can also make your own configuration. 

To do so, click **New configuration**.

{{% todo %}}Where to find this page{{% /todo %}}

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/new-configuration-overview.png" max-width=100% >}}

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/new-configuration-step-one.png"  max-width=100% >}}

To make the connection, a **ServerConfiguration**, associated **IdentityToken**, and usually **ClientCertificate** need to be provided. In addition, the server certificate needs to be trusted. For each of these parts, see the sections below.

## 3.2 ServerConfiguration

The core information of the configuration to connect to an OPC-UA server must be stored as **ServerConfiguration** objects. 

The configuration contains the following attributes:

* **Configuration Name** – the name to identify the configuration
* **Endpoint URL**: the URL of the endpoint of the OPC-UA server
* **Session Timeout** – requested maximum number of milliseconds a session should remain open without activity.
* **Request Timeout** – requested maximum number of milliseconds a request should remain open without response.
* **Message security mode** – the type of security to apply to messages
  
  * If it is **None** – messages are encrypted
  * If it is **Sign** – messages are signed by the Client Certificate
  * If it is **Sign&Encrypt** – messages are signed and encrypted by the client certificate.
  
* **Security Policy URI** – to determine what algorithm to use to encrypt and sign the data

    {{% alert color="info" %}}You can be find this value in **GetEndpoints **> **UserIdentityToken** > **SecurityPolicyURI**.{{% /alert %}}

### 3.2.1 Identity Token

A connection to an OPC-UA server is made using an **IdentityToken**, similar to a user role in Mendix. The server will dictate which types of identify token it will support, based on the response in **GetEndpoints** > **UserIdentityToken** > **TokenType**.

The three options are as follows:

* **Anonymous Identity Token** – This is the identity token for anonymous users, which gives access to the server without credentials.
* **Username Identity Token** – This is the identity token based on a username and password combination.
* **Certificate Identity Token** – This is the identity token based on a certificate. The certificate must be trusted by the OPC-UA server before it can be used.

### 3.2.2 Client Certificate

A connection to an OPC-UA server may be encrypted to provide security. The server will dictate based on the response which message security modes (i.e. forms of encryption) it requires for a connection, in **GetEndpoints** > **EndpointDescription** > **SecurityMode**. 

If the message security mode is set to **Sign** or **Sign&Encrypt**, the **ServerConfiguration** object requires a **ClientCertificateHolder** with **ClientCertificate** and **ClientCertificatePrivateKey** objects.

* The client certificate must be an X509 formatted PEM file.
* The private key must be an encrypted PKCS8 or PKCS1 formatted PEM file.

### 3.2.3 Server Certificate

A connection between an OPC-UA server and OPC-UA client (the Mendix application) can only be established if both identities have been acknowledged by the respective parties. For the client side, this means the Client should trust the certificate of the server. This can be done by retrieving the certificate from the server (**GetEndpoints**> **EndpointDescription** > **ServerCertificate**), then use "Get Endpoints - Server Certificate" and then use "Trust certificate". Alternatively the server certificate can be added to the Mendix Certificate list in the settings of Studio Pro.

The association does not have to be set in the domain model but can be used to check what server certificate was used while establishing the connection.

If you ever want to reject a certificate from the server, the "untrust certificate" action will remove the certificate from the list to trusted certificates.

## 3.3 View Services

Browsing lets you navigate the content of the server. There are three implementations provided that will be sufficient for most use cases. See below:

* **Get Roots** – This retrieves the top level nodes of the server
* **Get Children** – This retrieves the sub level node for a given node.
* **Get Parent** – This retrieve the parent node for a given node.

### 3.3.1 The Browse Action

The browse action lets you traverse from one node to others.  The request object for the action is a **BrowseDescription**. 

The **BrowseDescription** contains the following fields:

* **Node ID** – This is the node ID of the node from where you want to browse.
* **Browse directions** – This specifies in which direction to traverse.
* **Node ID reference type** – This specifies the Node ID of the reference type to follow. If left empty, returns all references.
* **Include subtypes** – This indicates whether subtypes of the ReferenceType should be included.

* **Node Class Mask** – This specifies which **NodeClasses** will be returned. If no value is provided, no filter will be applied.

    This is an integer attribute, while the interpretation is a set of bits as described in the table below:

    | Bit | Node class | Value |
    | --- | ---------- | -----  |
    | 0 | Object | 1 |
    | 1 | Variable | 2 |
    | 2 | Method | 4 |
    | 3 | ObjectType | 8 |
    | 4 | VariableType | 16 |
    | 5 | ReferenceType | 32 |
    | 6 | DataType | 64 |
    | 7 | View | 128 |

    Sum up the values to create the mask. For example: browsing only **object**, **variable** and **view** is binary represented by `[1,1,0,0,0,0,0,1]` which has to be setup as 1 + 2 + 128 = 131 for the integer value.

* **Result Mask** – This specifies the fields in the reference description structure that should be returned. 

    This is an integer attribute, while the interpretation is a set of bits as described in the table below:

    | Bit | Node class | Value |
    | --- | ---------- | -----  |
    | 0 | ReferenceType | 1 |
    | 1 | IsForward | 2 |
    | 2 | NodeClass | 4 |
    | 3 | BrowseName | 8 |
    | 4 | DisplayName | 16 |
    | 5 | TypeDefinition | 32 |

    Sum up the Values to create the mask. For example: Requesting only the field DisplayName is binary represented by [0,0,0,0,1,0] which has to be setup as 16 for the integer value.

The response of the **Browse** action returns a browse response object. There is a **StatusCode** associated to the response, which represents the status of the call. The response may contain one or more **BrowseNodes**, these are the references from the response.

A browse node contains the following fields:
* **Node ID** – This is the Identifier of the referenced node.
* **Browse name** – This is the browse name of the referenced node.
* **Display name** – This is the display name of the referenced node.
* **Node class** – This is the node class of the referenced node. If the server does not allow to return as many references as requested, the response will contain a continuation point that can be used in future calls to retrieve more references. (not supported yet)

## 3.4 Attribute Services
The attribute services let a client access data on a server. In particular, the OPC-UA connector lets you read data from and write data to the server.

These exposed actions deserve some additional guidance as the data a client receives and the data the server requires can differ quite a bit between calls. This is all due to the highly flexible and customizable nature of an OPC-UA protocol. 

The data model of an OPC-UA server consists of a set of Nodes. These nodes can have one of the following nodeClasses: DataType, Method, Object, ObjectType, ReferenceType, Variable, VariableType and View. Each of these has their own set of properties. For the purpose of each and the set of properties we refer to the documentation in the domain model of the specializations of Node entities.

To make it easier to get the information on a node, there is a GetNodeDetails action provided that will read all properties of the node and put them in the correct specialization of the Node Entity. 

### 3.4.1 Example 1: Reading a Property of a Node

In this section we give an example on how to Read specific attribute values of nodes by an example. For the specifics on how to read the value of a variable see section (). 

Lets say we want to read the "AccessLevel" on variable nodes we just received from the Browse Response. Note that this is a property that is only on the VariableNode entity and is therefore specific to a Variable. Therefore we need to filter out all other types of Nodes. Then we Need to create a ReadNodeRequest. Since we are not interested when the last moment is the AccessLevel is changed, nor at what moment we read the value, we set the MaxAge attribute to 0 and the TimestampsToReturn attribute to Neither. Now we need to specify what values we want to read. Create for each BrowseNode object a ReadNodeReadValueID object, with the same NodeID as the BrowseNode, AttributeID set to AccessLevel and numeric range to empty and attach this list to the ReadNodeRequest. Supply the ServerConfiguration for the connection and use the ReadNode action to make the request. 
The response consists of a list of DataValues that match the order of the requests. The DataValue object has a Value propery that contains as a string the integer that resembles the accessLevel. 

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/read-access-rights.png"  max-width=100% >}}

### 3.4.2 Example 2. Reading the Value of a Variable Node

Each variableNode has a dataType node as can be seen in the domain model. This associated DataTypeNode is a node that defines what type of value you will read from the VariableNode. To make reading the value of a Variable easier we included a default action that takes ony the node ID as an input. For the default variable types that must be supported by any OPC-UA server the responses will look like the Read column in the table below. 

Expected Read and write formats for attribute services

| Data type | Example read response | Example write request | Conversion | 
| --------- | ------------- | -- | - |
| Boolean | {"value":true} | "true" | |
| SByte <br> Int16 <br> Int32 <br> Int64   | {"value": 1} | "1" ||
| Byte <br> UInt16 <br> UInt32 <br> UInt64 | {"value" : { "value" : 1}} |  "1" | |
| Float <br> Double | {"value" : 1.0} | "1.0" or "3.0E20" |  |
| String | {"value" : "string" } | "string" | |
| DateTime | {"value" : {"utcTime" : 11335116845776939}} | "2007-12-03T10:15:30" | CommunityCommons.LongToDateTime |
| Guid | {"value": "cd1fdbc3-1f45-4fe8-9bff-b4927d5401c4"} | "cd1fdbc3-1f45-4fe8-9bff-b4927d5401c4" | |
| ByteString | {"value" : {"bytes":[-1]}} | "0xFF" | |
| XMLElement | {"value" : { "fragment" : "\u003cprice\u003e29.99\u003c/price\u003e"}} | \<price\>30.00\</price\> | CommunityCommons.HTMLToPlainText |
| NodeID | {"value" : {"namespaceIndex": {"value": 1}, "identifier":"1"}} | "ns=1;i=1000"|
| ExpandedNodeID | {"value" : {"namespaceIndex": {"value": 1}, "identifier":"1"}, "serverIndex" : {"value" : 0}} | not supported | |
| StatusCode | {"value" : {"value" : 0}} | "0" | Use the _Value attribute on StatusCode |
| QualifiedName | {"value" : {"namespaceIndex" : {"value" : 1}, "name" : "string"}}| not supported | |
| LocalizedText | {"value" : {"locale" : "en", "text": "hello"}} | "hello"|  Currently always writes in "en" locale |

### 3.4.3 Writing a value to a Variable Node

Each variableNode has a dataType node as can be seen in the domain model. This associated DataTypeNode is a node that defines what type of value you can write to the VariableNode. To make writing the value to a Variable easier we included a default action that 
takes the NodeID, a payload and a DefaultVariantType as an input. The latter is recommended to use. If it is not used, the write action will first read the latest value to determine the type before it can write to the node. Currently not all default types are supported and no custom type is supported. For example payloads see the table above.


## 3.5 Monitoring Items

In order to get notifications upon a change of a value, one needs first to create a subscription, that is a client-defined endpoint so that your OPC-UA server can send notification to your Mendix application. Then we define to what and how to listen to any change of a value via MonitoredItems.

To create a subscription, simply call the CreateSubscription action from your toolbox.
The Requested Publishing interval is how often at most you will receive a notification. This value may be set by the developer but may be overwritten if the server deems the publishing interval not feasible. 

To receive a notification from a monitored item we need two artifacts.

1. We need to instruct our Mendix application what needs to happen when we receive a notification
2. We need to instruct the server to what information needs to be checked on the server

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/create-monitored-item-microflow.png"  max-width=100% >}}

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/create-monitored-item-microflow-configuration.png"  max-width=100% >}}

### 3.5.1 Instruct Mendix

When a notification comes in a microflow will be triggered. An Example microflow, called EXAMPLE_MonitoredItem_LogDefaultMessage, is provided in the USE_ME > 12.MonitoredItems_service_set folder. This microflow simply takes the information from the notification and logs it. The input parameters of the microflow are a MessageMonitoredItem, a MessageMonitoredItemReadValueId and a MessageDataValue. These are the only parameters that are allowed for a microflow to be called on a notification but not all are required.

* A messageMonitoredItem parameter contains the monitoredItem information, that is, how the notification was generated.
* A messageMonitoredItemReadValueID contains the information on what node and attribute was read.
* A messageDataValue contains the information on the actual read value on the 'Value' attribute.

To create your custom implementation, create a microflow that has one or more of these input parameters. Make sure to use each type only once and don't add any other type of parameters here because the microflow will be called in the background and only fill these type of parameters. ( I think these are too many words for what I'm trying to say... )
@Stephane. We could do an example here with a singleton that just contains the latest value or just a microflow that adds the read value to the database? or do you have any other simple use case you would like to add here?

### 3.5.2 Instruct Server

Now the server needs to know when to send a notification and what the notification should be about. To do so, create a MonitoredItem object. You need to provide the subscription created at this chapter {3.5}, the NodeID of which you want to read an attribute and the name of the microflow created in {3.5.1} in the format MODULENAME.MICROFLOWNAME.
By default the AttributeID is set to VALUE, which will read the VALUE of a VariableNode, if you want to read another attribute or if you node is not a VariableNode, set the AttributeIDso the Attribute you want to read. For examle, if you wish to read changes to the description of a Node, set the AttributeID to DESCRIPTION.
For additional options, check the documentation on the attributes of the MonitoredItem entity in the domain model.

### 3.5.3 Start Monitoring

When you've created the MonitoredItems you want to be notified about, use the Commit MonitoredItem(s) action from the Toolbox and the monitoring begins.

### 3.5.4 Stop Monitoring

To stop receiving notifications, call the Delete MonitoredItem(s) action from the toolbox.

# 4 Usage

{{% todo %}}To be filled with default documentation from Technical writer because all this information can be found in the documentation section of Studio Pro{{% /todo %}}
