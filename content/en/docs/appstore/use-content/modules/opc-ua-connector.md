---
title: "OPC-UA Connector"
url: /appstore/modules/opc-ua-connector/
description: "Describes the configuration and usage of the OPC-UA connector, which is available in the Mendix Marketplace."

---

## 1 Introduction

[OPC](https://opcfoundation.org/) is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. You can use the OPC-UA connector with your Mendix app to communicate with an OPC-UA server. The OPC-UA connector is based on [Eclipse Milo](https://github.com/eclipse/milo) client SDK, an open-source implementation of OPC.

### 1.1 Features

The OPC-UA connector consists of microflows that enable you to do the following:

* Connect to an OPC-UA server
* Browse nodes on an OPC-UA server
* Read and write OPC-UA node attributes
* Subscribe to OPC-UA data changes

### 1.2 License

The OPC-UA connector is licensed under the [EPL2.0 License](https://www.eclipse.org/legal/epl-2.0/).

### 1.3 Pre-requisites

* Studio Pro version 9.24.3 or above
* OPC-UA server version 1.03 or above

### 1.4 Dependencies

You must have the following Marketplace module installed:

* [Community Commons](https://marketplace.mendix.com/link/component/170)

## 2 Installation

1. Install the dependencies.
2. Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OPC-UA connector into your app.

## 3 Basic configuration

This chapter explains how to quickly configure connection to an OPC UA server, browse for nodes, read, and write data using the template pages included in the connector.

{{% todo %}}After start up and before shutdown{{% /todo %}}

### 3.1 Configuring the Connection to the OPA-UA Server

1. In Studio Pro, add the `NAV_Configuration` microflow to your navigation. It will allow to acces the configuration page.

2. Assign the `CanConfigure` module role to a user role that will configure the connections to your server.

3. Run the app locally and open the app.

4. Log in as a user that can configure the connection.

5. Go to the added configuration page.

6. If you want to connect to a server with a message security mode `Sign` or `Sign&Encrypt`, add your client certificate by clicking **Update application certificate** in the upper-right corner of the page.

7. Click **New configuration** in the upper-right corner of the page.

    {{< figure src="/attachments/appstore/use-content/modules/opcua-connector/new-configuration-overview.png" >}}

8. Follow the instructions in the wizard to set up your connection to an OPC-UA server.

    {{< figure src="/attachments/appstore/use-content/modules/opcua-connector/new-configuration-step-one.png"  >}}

    {{% alert color="info" %}}If you wish to have your own custom business logic to connect to a server, you can also make your own configuration. It is recommended to use the wizard whenever possible. However, it can be the case that the server is not discoverable. When this happens, create your own microflow that manually sets all the fields on a server configuration object. For more information, see [Connecting to an OPC-UA Server (Session Services)](#connect-to-a-server) section.{{% /alert %}}

Once the configuration is saved, the APIs can be used in your application.

### 3.2 Browsing the OPC-UA Server

1. In Studio Pro, assign the `CanBrowse` module role to a user role that will browse the OPC-UA server.
2. Run the app locally and open the app.
3. Log in as a user that can browser the OPC-UA server.
4. Go to the configuration page.
5. Click **Browse** and see what data is available on the server.

{{% todo %}}Where is the Browse button? Is there a screenshot?{{% /todo %}}

## 4 Advance configuration

This chapter explains how to configure connection to an OPC UA server without discovery service.

### 4.1 Create a microflow to set up a manual connection
ADD FIGURE
* Create the microflow.
* The microflow should create the following objects in order. The details for each can be found in the following paragraphs

    * Create a `ServerConfiguration`
    * Create and associate associated `IdentityToken`
    * Provide an associated `ClientCertificate` 
  
* Call the ServerConfiguration_Connect microflow to connect to the server.
    * If this microflow returns a TestConnectionResponse with isSuccess to true, the connection succeeded.
    * If not, the error will be shown in the ErrorMessage attribute.

 * Trust the server certificate
 * Call your microflow from within the application.

#### 4.1.1 ServerConfiguration

The core information of the configuration to connect to an OPC-UA server must be stored as `ServerConfiguration` objects.

The configuration contains the following attributes:

* `ConfigurationName` – the name to identify the configuration
* `EndpointURL`: the URL of the endpoint of the OPC-UA server
* `IsManualConfiguration` – set it to true to force the end point configuration 
* `SessionTimeout` – requested maximum number of milliseconds a session should remain open without activity.
* `RequestTimeout` – requested maximum number of milliseconds a request should remain open without response.
* `MessageSecurityMode` – the type of security to apply to messages

  * If it is *None* – messages are encrypted
  * If it is *Sign* – messages are signed by the client certificate
  * If it is *Sign&Encrypt* – messages are signed and encrypted by the client certificate.

* `SecurityPolicyURI` – to determine what algorithm to use to encrypt and sign the data
* `_IsConnected`: will be set to true when connection is open

#### 4.1.2 Identity Token

A connection to an OPC-UA server is made using an `IdentityToken`, similar to a user role in Mendix. The server will dictate the type of the identify token it will support.

The three options are as follows:

* `Anonymous Identity Token` – This is the identity token for anonymous users, which gives access to the server without credentials.
* `Username Identity Token` – This is the identity token based on a username and password combination.
* `Certificate Identity Token` – This is the identity token based on a certificate. The certificate must be trusted by the OPC-UA server before it can be used.

#### 4.1.3 Client Certificate

A connection to an OPC-UA server may be encrypted to provide security. The server will dictate based on the response which message security modes (i.e. forms of encryption) it requires for a connection.

If the message security mode is set to *Sign* or Sign&Encrypt, the `ServerConfiguration` object requires a `ClientCertificateHolder` with the `ClientCertificate` and `ClientCertificatePrivateKey` objects that must meet the following requirements:

* The `ClientCertificate` must be an X509 formatted PEM file.
* The `ClientCertificatePrivateKey` must be an encrypted PKCS8 or PKCS1 formatted PEM file.

#### 4.1.4 Server Certificate

A connection between an OPC-UA server and OPC-UA client (the Mendix application) can only be established if both identities have been acknowledged by the respective parties. 
For the client side, this means the client should trust the certificate of the server. 
The server certificate must be added to the Mendix Certificate list in app settings / certificates of Studio Pro.

The association between the client and the server certificates does not need to be set in the domain model.

If you ever want to reject a certificate from the server, remove it from the list of trusted certificates and restart the application.


### 5 Using Services

#### 5.1. View Service

The view services enable you to navigate the content of the server. There are three implementations provided that will be sufficient for most use cases. See below:

* `GetRoots` – This retrieves the top level nodes of the server
* `GetChildren` – This retrieves the sub level node for a given node.
* `GetParent` – This retrieve the parent node for a given node.

For more advanced cases use the provided Browse action.

#### 5.1.1 The Browse Action

The browse action lets you traverse from one node to others.  The request object for the action is a `BrowseDescription`, which contains the following fields:

* `Nodeid` – This is the ID of the node from where you want to browse.
* `BrowseDirections` – This specifies in which direction to traverse.
* `NodeiRreferenceTypeID` – This specifies the Node ID of the reference type to follow. If left empty, all references are returned.
* `IncludeSubTypes` – This indicates whether subtypes of the `ReferenceType` should be included.
* `NodeClassMask` – This specifies which `NodeClasses` will be returned. If no value is provided, no filter will be applied. This is an integer attribute. The interpretation is a set of bits as described in the table below. You need to sum up the values to create the mask. For example: browsing only `object`, `variable`, and `view` is binary represented by `[1,1,0,0,0,0,0,1]`, which has to be set up as 1 + 2 + 128 = 131 for the integer value. 
    
  | Bit  | Node class    | Value |
  | ---- | ------------- | ----- |
  | 0    | Object        | 1     |
  | 1    | Variable      | 2     |
  | 2    | Method        | 4     |
  | 3    | ObjectType    | 8     |
  | 4    | VariableType  | 16    |
  | 5    | ReferenceType | 32    |
  | 6    | DataType      | 64    |
  | 7    | View          | 128   |

* `ResultMask` – This specifies the fields in the reference description structure that should be returned.   This is an integer attribute. The interpretation is a set of bits as described in the table below.  You need to sum up the values to create the mask. For example: requesting only the field `DisplayName` is binary represented by `[0,0,0,0,1,0]`, which has to be set up as 16 for the integer value.

  | Bit  | Node class     | Value |
  | ---- | -------------- | ----- |
  | 0    | ReferenceType  | 1     |
  | 1    | IsForward      | 2     |
  | 2    | NodeClass      | 4     |
  | 3    | BrowseName     | 8     |
  | 4    | DisplayName    | 16    |
  | 5    | TypeDefinition | 32    |

The response of the `Browse` action returns a browse response object. There is a `StatusCode` associated to the response, which represents the status of the call. The response may contain one or more `BrowseNode` objects. These are the references from the response.

`BrowseNode` contains the following fields:

* `Nodeid` – This is the ID of the referenced node.

* `BrowseName` – This is the browse name of the referenced node.

* `DisplayName` – This is the display name of the referenced node.

* `NodeClass` – This is the node class of the referenced node. If the server does not allow to return as many references as requested, the response will contain a continuation point that might be used in future calls to retrieve more references. 

### 4.3 Attribute Services

The attribute services enable you a client access data on a server. In particular, the OPC-UA connector lets you read data from and write data to the server.

These exposed actions deserve some additional guidance, as the data a client receives and the data the server requires can differ quite a bit between calls. This is all due to the highly flexible and customizable nature of an OPC-UA protocol. 

{{% todo %}}Where can users find the additional guidance for these exposed actions?{{% /todo %}}

The data model of an OPC-UA server consists of a set of `Node` objects. These nodes can have one of the following values for their `NodeClasses` attribute: `DataType`, `Method`, `Object`, `ObjectType`, `ReferenceType`, `Variable`, `VariableType`, and `View`. Each of these has their own set of properties. For the purpose of each and the set of properties, see the documentation in the domain model of the specializations of the `Node` entities.

To make it easier to get the information on a node, there is a `GetNodeDetails` action provided, which will read all properties of the node and put them in the correct specialization of the `Node` entity. 

#### 4.3.1 Reading a Property of a Node

This section shows how to read the `AccessLevel` on variable nodes that you just received from the `BrowseResponse`, as an example of how to read specific attribute values from nodes. For the specifics on how to read the value of a variable, see section (). 

{{% todo %}}See wich section?{{% /todo %}}

1. Filter out all other types of the `Node` objects, as `AccessLevel` is an attribute that is only on the `VariableNode` entity and is therefore specific to a `Variable`. 
2. Create a `ReadNodeRequest`. Since it is not important when the last moment is the `AccessLevel` is changed, nor at what moment you read the value, set the `MaxAge` attribute to *0* and the `TimestampsToReturn` attribute to *Neither*. 
3. Specify what values you want to read. Create a `ReadNodeReadValueID` object for each `BrowseNode` object. Use same `NodeID` as the `BrowseNode`. Set `AttributeID` to `AccessLevel` and numeric range to *empty*. Attach this list to the `ReadNodeRequest`. 
4. Supply the `ServerConfiguration` for the connection.
5. Use the `ReadNode` action to make the request. 

The response consists of a list of `DataValues` that match the order of the requests. The `DataValue` object has a `Value` attribute that stores an integer that resembles the `AccessLevel`, represented as a string.

{{< figure src="/attachments/appstore/use-content/modules/opcua-connector/read-access-rights.png"  >}}

#### 4.3.2 Reading the Value of a Variable Node {#read-variable-node-value}

As you can see in the domain model, each `VariableNode` has a data type node. This associated `DataTypeNode` is a node that defines what type of value you will read from the `VariableNode`. To make reading the `Value` of a `Variable` easier, a default action is included that takes only the node ID as input. For the default variable types that must be supported by any OPC-UA server, see the table below with the expected read and write formats for attribute services.

| Data type                                | Example read response                                        | Example write request                  | Conversion                             |
| ---------------------------------------- | ------------------------------------------------------------ | -------------------------------------- | -------------------------------------- |
| Boolean                                  | {"value":true}                                               | "true"                                 |                                        |
| SByte <br> Int16 <br> Int32 <br> Int64   | {"value": 1}                                                 | "1"                                    |                                        |
| Byte <br> UInt16 <br> UInt32 <br> UInt64 | {"value" : { "value" : 1}}                                   | "1"                                    |                                        |
| Float <br> Double                        | {"value" : 1.0}                                              | "1.0" or "3.0E20"                      |                                        |
| String                                   | {"value" : "string" }                                        | "string"                               |                                        |
| DateTime                                 | {"value" : {"utcTime" : 11335116845776939}}                  | "2007-12-03T10:15:30"                  | CommunityCommons.LongToDateTime        |
| Guid                                     | {"value": "cd1fdbc3-1f45-4fe8-9bff-b4927d5401c4"}            | "cd1fdbc3-1f45-4fe8-9bff-b4927d5401c4" |                                        |
| ByteString                               | {"value" : {"bytes":[-1]}}                                   | "0xFF"                                 |                                        |
| XMLElement                               | {"value" : { "fragment" : "\u003cprice\u003e29.99\u003c/price\u003e"}} | \<price\>30.00\</price\>               | CommunityCommons.HTMLToPlainText       |
| NodeID                                   | {"value" : {"namespaceIndex": {"value": 1}, "identifier":"1"}} | "ns=1;i=1000"                          |                                        |
| ExpandedNodeID                           | {"value" : {"namespaceIndex": {"value": 1}, "identifier":"1"}, "serverIndex" : {"value" : 0}} | not supported                          |                                        |
| StatusCode                               | {"value" : {"value" : 0}}                                    | "0"                                    | Use the _Value attribute on StatusCode |
| QualifiedName                            | {"value" : {"namespaceIndex" : {"value" : 1}, "name" : "string"}} | not supported                          |                                        |
| LocalizedText                            | {"value" : {"locale" : "en", "text": "hello"}}               | "hello"                                | Currently always writes in "en" locale |

#### 4.3.3 Writing a Value to a Variable Node

As you can see in the domain model, each `VariableNode` has a data type node. This associated `DataTypeNode` is a node that defines what type of value you can write to the `VariableNode`. To make writing the `Value` to a `Variable` easier, a default action is included that takes the `NodeID`, a payload, and a `DefaultVariantType` as input. It is recommended to use `DefaultVariantType`. If it is not used, the write action will first read the latest value to determine the type before it can write to the node. Currently, not all default types are supported and no custom type is supported, for example, payloads. For more information, see the table in the [Reading the Value of a Variable Node](#read-variable-node-value) section.


### 4.4 Monitoring Items {#monitor-items}

In order to get notifications upon a change of a value, do as follows:

1. Create a subscription. A subscription is a client-defined endpoint so that your OPC-UA server can send notification to your Mendix application. To create a subscription, simply call the `CreateSubscription` action from the Toolbox in Studio Pro. The requested publishing interval is how often at most you will receive a notification. You can set this value, but it can be overwritten if the server deems the publishing interval not feasible. 

   {{< figure src="/attachments/appstore/use-content/modules/opcua-connector/create-monitored-item-microflow.png"  >}}

2. Define what and how to listen to any change of a value via `MonitoredItems`. To receive a notification from a monitored item you need two artifacts:

   1. You must instruct your Mendix application what needs to happen when you receive a notification
   2. You must instruct the OPC-UA server to what information needs to be checked on the server

   {{< figure src="/attachments/appstore/use-content/modules/opcua-connector/create-monitored-item-microflow-configuration.png"  >}}
   
   For details on how to instruct your Mendix application and the OPC-UA server, see the sections below. 


#### 4.4.1 Instructing Your Mendix Application {#instruct-mendix}

When a notification comes in, a microflow will be triggered. You can check out the example microflow `EXAMPLE_MonitoredItem_LogDefaultMessage` in the `USE_ME` > `12.MonitoredItems_service_set` folder. This microflow simply takes the information from the notification and logs it. The input parameters of the microflow are a `MessageMonitoredItem`, a `MessageMonitoredItemReadValueId`, and a `MessageDataValue`. These are the only parameters that are allowed for a microflow to be called on a notification, but not all are required.

* `MessageMonitoredItem` – This parameter contains the `MonitoredItem` information, that is, how the notification was generated.
* `MessageMonitoredItemReadValueID` – This parameter contains the information on what node and attribute was read.
* `MessageDataValue` – This parameter contains the information on the actual read value on the `Value` attribute.

To create your custom implementation, create a microflow that has one or more of these input parameters. Make sure to use each type only once and do not add other type of parameters other than the three parameters listed above, because the microflow will be called in the background and only accept these type of parameters.

{{% todo %}}
Would you like to resolve your comment? 

( I think these are too many words for what I'm trying to say... )@Stephane. We could do an example here with a singleton that just contains the latest value or just a microflow that adds the read value to the database? or do you have any other simple use case you would like to add here?
{{% /todo %}}

#### 4.4.2 Instructing Server

To get notifications upon a change of a value, the OPC-UA server needs to know when to send a notification and what the notification should be about. To do so, create a `MonitoredItem` object. You need to provide the subscription that you created in the [Monitoring Items](#monitor-items) section. 

The `NodeID` of which you want to read is an attribute. The value of `NodeID` is the name of the microflow created in the [Instructing Mendix](#instruct-mendix) section in the format `MODULENAME.MICROFLOWNAME`.

{{% todo %}}Is the description above correct?{{% /todo %}}

By default the `AttributeID` is set to `Value`, which will read the `Value` of a `VariableNode`. If you want to read another attribute or if your node is not a `VariableNode`, set the `AttributeID` to the attribute you want to read. For example, if you wish to read changes to the description of a node, set the `AttributeID` to `DESCRIPTION`.

For additional options, see the documentation on the attributes of the `MonitoredItem` entity in the domain model in Studio Pro.

#### 4.4.3 Starting Monitoring

After you have created the `MonitoredItems` you want to be notified about, use the `Commit MonitoredItem(s)` action from the Toolbox to start receiving notifications.

#### 4.4.4 Stoping Monitoring

To stop receiving notifications, call the `Delete MonitoredItem(s)` action from the Toolbox.

## 5 Usage

{{% todo %}}To be filled with default documentation from Technical writer because all this information can be found in the documentation section of Studio Pro{{% /todo %}}
