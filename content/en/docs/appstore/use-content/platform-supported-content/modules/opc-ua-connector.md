---
title: "OPC-UA Connector"
url: /appstore/modules/opc-ua-connector/
description: "Describes the configuration and usage of the OPC-UA connector, which is available in the Mendix Marketplace."

---

## Introduction

[OPC](https://opcfoundation.org/) is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. You can use the [OPC-UA connector](https://marketplace.mendix.com/link/component/230843) with your Mendix app to communicate with an OPC-UA server. The OPC-UA connector is based on [Eclipse Milo](https://github.com/eclipse/milo) client SDK, an open-source implementation of OPC.

### Features

The OPC-UA connector consists of microflows that enable you to do the following:

* Connect to an OPC-UA server
* Browse nodes on an OPC-UA server
* Read and write OPC-UA node attributes
* Subscribe to OPC-UA data changes

### License

The OPC-UA connector is licensed under the [EPL2.0 License](https://www.eclipse.org/legal/epl-2.0/).

### Pre-requisites

* Studio Pro version 9.24.3 or above
* OPC-UA server version 1.03 or above

### Dependencies

You must have the following Marketplace module installed:

* [Community Commons](https://marketplace.mendix.com/link/component/170)

## Installation

1. Install the dependencies.
2. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the OPC-UA connector into your app.

## Basic Configuration

This section shows you how to quickly configure a connection to an OPC-UA server, browse for nodes, read, and write data using the template pages included in the connector.

### App Startup and Shutdown

Make sure that you call the OPC-UA after-startup and before-shutdown actions (`OPCUAConnector.ASU_OPCUA` and `OPCUAConnector.BSD_OPCUA`) from your app's after-startup and before-shutdown microflows that are configured in your **App Settings**.

The descriptions of the actions are as follows:

* `OPCUAConnector.ASU_OPCUA` tries to reconnect to configured servers, re-monitor items, and pre-loads your app trusted certificates. 
* `OPCUAConnector.BSD_OPCUA` closes all open connections.

{{% alert color="info" %}}If you maintain many connections to OPC-UA servers, the startup can take much longer.{{% /alert %}}

### Configuring the Connection to the OPC-UA Server

1. In Studio Pro, add the `NAV_Configuration` microflow to your navigation. It allows to acces the **Configurations** page.
2. Assign the `CanConfigure` module role to a user role that will configure the connections to your server.
3. Run the app locally and open the app.
4. Log in as a user with the `CanConfigure` user role.
5. Go to the added **Configurations** page.
6. If you want to connect to a server with a message security mode `Sign` or `Sign&Encrypt`, add your client certificate by clicking **Update application certificate** in the upper-right corner of the page.

7. Click **New configuration** in the upper-right corner of the page.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/opcua-connector/new-configuration-overview.png" >}}

8. Follow the instructions in the wizard to set up your connection to an OPC-UA server.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/opcua-connector/new-configuration-step-one.png"  >}}

    {{% alert color="info" %}}If you want to have your own custom business logic to connect to a server, you can also make your own configuration. It is recommended to use the wizard whenever possible. However, it can be the case that the server is not discoverable. If so, you need to create your own microflow that manually sets all the fields on a server configuration object. For more information, see [Advanced Connections](#advanced-connection) section.{{% /alert %}}

Once the configuration is saved, the APIs can be used in your application.

### Browsing the OPC-UA Server

1. In Studio Pro, assign the `CanBrowse` module role to a user role that will browse the OPC-UA server.
2. Run the app locally and open the app.
3. Log in as a user with the `CanBrowse` user role.
4. Go to the **Configurations** page.
5. Click **Browse** and see what data is available on the server.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/opcua-connector/browse.png"  >}}

## Advanced Connection {#advanced-connection}

This section shows you how to configure a connection to an OPC-UA server without the discovery service.
If you have succesfully set up your configuration in the Basic Configuration section, this section can be omited and please continue to section {[Using Services](#using-services)

1. Create a microflow to set up a manual connection. Make sure that the microflow do the following in order:

    1. Create a [`ServerConfiguration`](#server-configuration).
    2. Create and associate an [`IdentityToken`](#identity-token).
    3. Provide an associated [`ClientCertificate`](#client-certificate).

2. Call the `ServerConfiguration_Connect` microflow to connect to the server.

   * If this microflow returns a `TestConnectionResponse`, with `isSuccess` to `true`, the connection succeeded.

   * If not, the error is shown in the `ErrorMessage` attribute. Read the error message and resolve the error.

3. [Trust the server certificate](#server-certificate).

4. Call the microflow that you created from within the application.

### Server Configuration {#server-configuration}

The core information of the configuration to connect to an OPC-UA server must be stored as `ServerConfiguration` objects, which contain the following attributes:

* `ConfigurationName` – This is the name to identify the configuration.
* `EndpointURL` – This is the URL of the endpoint of the OPC-UA server.
* `IsManualConfiguration` – Tis is set to *true* to force the end point configuration.
* `SessionTimeout` – This is the requested maximum number of milliseconds a session should remain open without activity.
* `RequestTimeout` – This is the requested maximum number of milliseconds a request should remain open without response.
* `MessageSecurityMode` – This is the type of security to apply to messages.
    * If it is *None* – messages are encrypted.
    * If it is *Sign* – messages are signed by the client certificate.
    * If it is *Sign&Encrypt* – messages are signed and encrypted by the client certificate.
  
* `SecurityPolicyURI` – This determines what algorithm to use to encrypt and sign the data.
* `_IsConnected`: This is set to *true* when connection is open.

### Identity Token {#identity-token}

A connection to an OPC-UA server is made using an `IdentityToken`, similar to a user role in Mendix. The server will dictate the type of the identify token it will support.

The three options are as follows:

* `Anonymous Identity Token` – This is the identity token for anonymous users, which gives access to the server without credentials.
* `Username Identity Token` – This is the identity token based on a username and password combination.
* `Certificate Identity Token` – This is the identity token based on a certificate. The certificate must be trusted by the OPC-UA server before it can be used.

### Client Certificate {#client-certificate}

A connection to an OPC-UA server can be encrypted to provide security. Based on the response, the server will dictate which message security modes (i.e. forms of encryption) it requires for a connection.

If the `MessageSecurityMode` attribute of the `ServerConfiguration` object is set to *Sign* or *Sign&Encrypt*, the `ServerConfiguration` object requires a `ClientCertificateHolder`, with the `ClientCertificate` and `ClientCertificatePrivateKey` objects that must meet the following requirements:

* The `ClientCertificate` must be an X509 formatted PEM file.
* The `ClientCertificatePrivateKey` must be an encrypted PKCS8 or PKCS1 formatted PEM file.

### Trusting the Server Certificate {#server-certificate}

A connection between an OPC-UA server and OPC-UA client (the Mendix application) can only be established if both identities have been acknowledged by the respective parties. For the client side, this means the client should trust the certificate of the server.

To do so, add the server certificate to the Mendix certificate list on the **Certificates** tab in **App Settings** of Studio Pro.

The association between the client and the server certificates does not need to be set in the domain model.

If you ever want to reject a certificate from the server, remove it from the list of trusted certificates and restart the application.

## Using Services {#using-services}

### View Service

The view services enable you to navigate the content of the server. The following three implementations are provided, which are sufficient for most use cases:

* `GetRoots` – This retrieves the top level nodes of the server
* `GetChildren` – This retrieves the sub level node for a given node.
* `GetParent` – This retrieves the parent node for a given node.

For more advanced cases, use the provided Browse action.

#### Browse Action

The browse action allows you to traverse from one node to others.  The request object for the action is `BrowseDescription`, which contains the following attributes:

* `Nodeid` – This is the ID of the node from where you want to browse.
* `BrowseDirections` – This specifies the direction to traverse.
* `NodeIdReferenceTypeID` – This specifies the node ID of the reference type to follow. If it is left empty, all references are returned.
* `IncludeSubTypes` – This indicates whether subtypes of the `ReferenceType` are included.
* `NodeClassMask` – This specifies which `NodeClasses` will be returned. If no value is provided, no filter will be applied. This is an integer attribute. The interpretation is a set of bits as described in the table below. You need to sum up the values to create the mask. For example: browsing only `object`, `variable`, and `view` is represented in binary by `[1,1,0,0,0,0,0,1]`, which has to be set up as 1 + 2 + 128 = 131 for the integer value. 
  
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

* `ResultMask` – This specifies the fields in the reference description structure that will be returned. This is an integer attribute. The interpretation is a set of bits as described in the table below. You need to sum up the values to create the mask. For example: requesting only the field `DisplayName` is represented in binary by `[0,0,0,0,1,0]`, which has to be set up as 16 for the integer value.

  | Bit  | Node class     | Value |
  | ---- | -------------- | ----- |
  | 0    | ReferenceType  | 1     |
  | 1    | IsForward      | 2     |
  | 2    | NodeClass      | 4     |
  | 3    | BrowseName     | 8     |
  | 4    | DisplayName    | 16    |
  | 5    | TypeDefinition | 32    |

    The response of the `Browse` action returns a browse response object. There is a `StatusCode` associated to the response, which represents the status of the call. The response can contain one or more `BrowseNode` objects. These are the references from the response. `BrowseNode` contains the following fields:

    * `Nodeid` – This is the ID of the referenced node.
    * `BrowseName` – This is the browse name of the referenced node.
    * `DisplayName` – This is the display name of the referenced node.
    * `NodeClass` – This is the node class of the referenced node. If the server does not allow returning as many references as requested, the response will contain a continuation point that can be used in future calls to retrieve more references. 

### Attribute Services

The attribute services enable you a client access data on a server. In particular, the OPC-UA connector lets you read data from and write data to the server.

These exposed actions deserve some additional guidance, as the data a client receives and the data the server requires can differ greatly between calls. This is all due to the highly flexible and customizable nature of an OPC-UA protocol. See the [Read Action](#read-action) section and the [Write Action](#write-action) section below as well as the documentation in the microflows and domain model in Studio Pro.

The data model of an OPC-UA server consists of a set of `Node` objects. These nodes can have one of the following values for their `NodeClasses` attribute: `DataType`, `Method`, `Object`, `ObjectType`, `ReferenceType`, `Variable`, `VariableType`, or `View`. Each of these has their own set of properties. For the purpose of each and the set of properties, see the documentation in the domain model of the specializations of the `Node` entities in Studio Pro.

To make it easier to get the information on a node, a `GetNodeDetails` action is provided, which reads all properties of the node and puts them in the correct specialization of the `Node` entity. 

For more advanced cases, use the [read action](#read-action) as described below.

#### Read Action {#read-action}

The read action allows you to read specific attributes of a node. The request object for the action is `ReadNodeRequest`, which contains a list of `ReadNodeReadValueIDs`.

Each `ReadNodeReadValueID` object specifies the attributes of the nodes you want to read. Upon executing the read action, a `ReadNodeResponse` object is returned. This object contains a list of `ReadNodeResponseResults`, each corresponding to the attributes requested, in the same order they were specified.

Each `ReadNodeResponseResult` object contains a `DataValue` attribute. This is the raw payload returned from the OPC-UA Server. 

To read the `VALUE` attribute on a `VariableNode`, set the `NodeId` on your `ReadNodeReadValueId` to the right node ID and the `AttributeId` to *ENUM_AttributeId.VALUE*.

The corresponding `DataValue` attributes depends on the type of the datatype, as shown in the table below:

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

#### Write Action {#write-action}

The Write action allows you to write to specific attributes on a node. The request object for the action is a `WriteNodeRequest`, which contains a list of `WriteNodes`.

The `WriteNode` objects describe how and what to write to a node. 

The `Write node` action returns a `WriteNodeResponse` object. The object contains a list of `WriteNodeStatusCode` that contains the statuses of the written attributes in the same order as the request. Check the statuses to know whether the action succeeded.

To write the `VALUE` attribute on a `VariableNode`, set the `NodeId` on your `WriteNode` to the right node ID, the `AttributeId` to *ENUM_AttributeId.VALUE*, and the `Payload` to one based on the table above in the [Read Action](#read-action) section and the `VariantType` to the correct type.

{{% alert color="info" %}} It is highly recommended to set the `VariantType` to avoid the action to read the `Variant type` before it can write. {{% /alert %}}

### Subscription and Monitored Item Services

The subscription and monitored item services enable you to receive notification upon a change of a monitored value. A subscription is a client-defined endpoint so that your OPC-UA server can send notification to your Mendix application. A monitored item corresponds to a specific attribute on a node that is monitored.

In order to monitor items, create a microflow that does the following:

1. Call `CreateSubscription` action. 
2. Create `MonitorItem` objects for each attribute to be monitored, with the following fields specified: `NodeID`, `AttributeID`, `MicroflowName`, associated to the created `Subscription`. 
3. Do not use the Mendix commit, use instead the provided `CommitMonitoredItem` or `CommitMonitoredItems` action.

When a notification comes in, the microflow specified by `MicroflowName` on the monitored item will be triggered. 

Use the full name of the microflow, which has this format: `MODULENAME.MICROFLOWNAME`.

Below are the parameters that can be used when calling a microflow on a notification (not all the parameters are required):

* `MessageMonitoredItem` – This parameter contains the `MonitoredItem` information, that is, how the notification was generated.
* `MessageMonitoredItemReadValueID` – This parameter contains the information on what node and attribute was read.
* `MessageDataValue` – This parameter contains the information on the actual read value on the `Value` attribute.

Check out the example microflow `EXAMPLE_MonitoredItem_LogDefaultMessage` in the **USE_ME** > **12.MonitoredItems_service_set** folder. This microflow simply takes the information from the notification and logs it. 

To stop receiving notifications, call the `Delete MonitoredItem(s)` action from the Toolbox.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}
