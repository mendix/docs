---
title: "OPC-UA connector"
url: /appstore/modules/opc-ua-connector/
category: "Modules"
description: "Describes the OPC-UA connector from the Mendix Marketplace."
tags: ["OPC-UA", "Integration", "IIOT", "low-code"]
---

## 1 Introduction

[OPC](opcfoundation.org) is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries.
You can use the OPC-UA connector with your Mendix app to communicate with OPC-UA server.

The OPC-UA connector is based on [Eclipse Milo](https://github.com/eclipse/milo) client SDK, an open-source implementation of OPC.

## 1.1 Features

The OPC-UA connector consists of microflow that enable you to do the following:
* Connect to OPC-UA server
* Browse OPC-UA server nodes
* Read and write OPC-UA node attributes
* Subscribe to OPC-UA data change

## 1.2 License

The OPC-UA connector is licensed under the EPL2.0 License.

## 1.3 Pre-requisites

* Mendix Studio Pro version 9.24.3+
* OPC-UA server 1.03+

## 1.4 Dependencies {#dependencies}

You must have these Marketplace modules installed:
* [Community Commons](https://marketplace.mendix.com/link/component/170)

## 2 Installation
* Install all dependencies.
* Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OPC-UA connector into your app.

## 2.1 Configuration
* Add NAV Configuration to your navigation
* Assign the CanConfigure module role to a user role that will configure the connections to your server.
* Login as a user that can configure the connection and go to the configuration page
* If you want to connect to a server with a Message security mode Sign or Sign&Encrypt, add your client certificate on the top right
* Click on "New configuration" and follow the steps to set up your connection.
* Once the configuration is saved, the APIs can be used in your application

## 2.2 (optional) Browse the OPC-UA server
* Assign the CanBrowse module role to a user role that will browse the OPC-UA server.
* Follow the configuration menu item
* Click on "Browse" and see what data is available on the server.


### ~2 How to Guide
#### Connecting to an OPC-UA server (Session Services)
The connector provides a simple wizard to set up your own connection to an OPC-UA server. However, if you wish to have your own custom business logic to connect to a server you are free to do so. To make the connection a ServerConfiguration, associated IdentityToken and (usually) ClientCertificate needs to be provided. In addition, the server certificate needs to be trusted.
For each of these parts see the sections below.

#### ~2.0.0 Server Configuration
The core information of the configuration to connect to an OPC-UA server must be stored on Server Configuration objects. The configuration contains the following attributes
* Configuration Name.  Name to identify the configuration.
* Endpoint URL. URL of the endpoint of the OPC-UA server.
* Session Timeout. Requested maximum number of milliseconds a session should remain open without activity.
* Request Timeout. Requested maximum number of milliseconds a request should remain open without response.
* Message security mode. The type of security to apply to messages.
* * If None, messages are encrypted
  * If Sign, messages are signed by the Client Certificate
  * If Sign&Encrypt, messages are signed and encrypted by the client certificate.
* Security Policy URI to determine what algorithm to use to encrypt and sign the data. Can be found from GetEndpoints (> UserIdentityToken > SecurityPolicyURI)


#### ~2.0.1 Identity Token
A connection to an OPC-UA server is made user an IdentityToken, similar to a user role in Mendix. The server will dictate based on the response in GetEndpoints > UserIdentityToken > TokenType, which types of IdentityTokens it will support. The three options are
* Anonymous Identity Token. Identity token for anonymous users and gives access to the server without credentials.
* Username Identity Token. Identity token based on a username and password combination.
* Certificate Identity Token. Identity Token based on a certificate, the certificate must be trusted by the OPC-UA server before it can be used.

##### ~2.0.2 Client Certificate
A connection to an OPC-UA server may be encrypted to provide security. The server will dictate based on the response in GetEndpoints (> EndpointDescription > SecurityMode) which Message Security Modes i.e. forms of encryption it requires for a connection. If the Message Security Mode is set to Sign or Sign&Encrypt, the ServerConfiguration object requires a ClientCertificateHolder with ClientCertificate and ClientCertificatePrivateKey objects.
- The client certificate must be an X509 formatted PEM file.
- The private key must be an Encrypted PKCS8 or PKCS1 formatted PEM file.

#### ~2.0.3 Server Certificate
A connection between an OPC-UA server and OPC-UA client (The Mendix Application) can only be established if both identities have been acknowledged by the respective parties. For the client side, this means the Client should trust the certificate of the server. This can be done by retrieving the certificate from the server (GetEndpoints > EndpointDescription > ServerCertificate), then use "Get Endpoints - Server Certificate" and then use "Trust certificate".
The association does not have to be set in the domain model but can be used to check what server certificate was used while establishing the connection.
If you ever want to reject a certificate from the server, the "untrust certificate" action will remove the certificate from the list to trusted certificates.

### ~2.1 - View Services
Browsing lets you navigate the content of the server. There are three implementations provided that will be sufficient for most use cases. These are 
* Get Roots. Retrieves the top level nodes of the server
* Get Children. Retrieves the sub level node for a given node.
* Get Parent. Retrieve the parent node for a given node.

#### ~2.1.1 The Browse action
The browse action lets you traverse from one node to others. 
The request object for the action is a BrowseDescription. The BrowseDescription contains the following fields.
* Node ID. The node ID of the node from where you want to browse.
* Browse directions. In which direction to traverse.
* Node ID reference type. Specifies the Node ID of the reference type to follow. If left empty, returns all references.
* Include subtypes. Indicates whether subtypes of the ReferenceType should be included.
* Node Class Mask. Specifies which NodeClasses will be returned. If no value is provided, no filter will be applied.
* * Note that this is an integer attribute, while the interpretation is in binary format.
  * The bits represent in order: Object, Variable, Method, ObjectType, VariableType, ReferenceType, DataType, View.
  * Example: Browsing only Objects, Variables and View is binary represented by [1,1,0,0,0,0,0,1] <br> which is 2<sup>0</sup> + 2<sup>1</sup> + 2<sup>7</sup> = 131.
* Result Mask. Specifies the fields in the reference description structure that should be returned. 
* * Note that this fields must be supplied in decimal format, while the interpretation is in binary format.
  * The bits represent in order: ReferenceType, IsForward, NodeClass, BrowseName, DisplayName, TypeDefinition.
  * Example: Requesting only the field DisplayName is binary represented by [0,0,0,1,0,0] <br> which is in decimal representation 2<sup>3</sup> = 8.

The response of the Browse action returns a browse response object. 
There is a StatusCode associated to the response,which represents the status of the call.
The response may contain one or more BrowseNodes, these are the references from the response.
A browse node contains the following fields.
* Node ID. The Identifier of the referenced node.
* Browse name. Browse name of the referenced node.
* Display name. Display name of the referenced node.
* Node class. Node class of the referenced node.
If the server does not allow to return as many references as requested, the response will contain a continuation point that can be used in future calls to retrieve more references.

### ~2.2 Attribute services
The attribute services let a client access data on a server. In particular, the OPC-UA connector lets you read data from and write data to the server.
These exposed actions deserve some additional guidance as the data a client receives and the data the server requires can differ quite a bit between calls. This is all due to the highly flexible and customizable nature of an OPC-UA server. 
The data model of an OPC-UA server consists of a set of Nodes. These nodes can have one of the following nodeClasses: DataType, Method, Object, ObjectType, ReferenceType, Variable, VariableType and View. Each of these has their own set of properties. For the purpose of each and the set of properties we refer to the documentation in the domain model of the specializations of Node entities.
To make it easier to get the information on a node, there is a GetNodeDetails action provided that will read all properties of the node and put them in the correct specialization of the Node Entity. 

#### ~2.2.1 Example 1: Reading a property of a Node
In this section we give an example on how to Read specific attribute values of nodes by an example. For the specifics on how to read the value of a variable see section (). 
Lets say we want to read the "AccessLevel" on variable nodes we just received from the Browse Response. Note that this is a property that is only on the VariableNode entity and is therefore specific to a Variable. Therefore we need to filter out all other types of Nodes. Then we Need to create a ReadNodeRequest. Since we are not interested when the last moment is the AccessLevel is changed, nor at what moment we read the value, we set the MaxAge attribute to 0 and the TimestampsToReturn attribute to Neither. Now we need to specify what values we want to read. Create for each BrowseNode object a ReadNodeReadValueID object, with the same NodeID as the BrowseNode, AttributeID set to AccessLevel and numeric range to empty and attach this list to the ReadNodeRequest. Supply the ServerConfiguration for the connection and use the ReadNode action to make the request. 
The response consists of a list of DataValues that match the order of the requests. The DataValue object has a Value propery that contains as a string the integer that resembles the accessLevel. 

#Note: Do we want to make it easier by providing a js action for the conversion?
#Note: Needs images of the constructed microflow 

#### ~2.2.2 Example 2. Reading the value of a Variable Node.
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

#### ~2.2.3. Writing a value to a Variable Node.
Each variableNode has a dataType node as can be seen in the domain model. This associated DataTypeNode is a node that defines what type of value you can write to the VariableNode. To make writing the value to a Variable easier we included a default action that 
takes the NodeID, a payload and a DefaultVariantType as an input. The latter is recommended to use. If it is not used, the write action will first read the latest value to determine the type before it can write to the node. Currently not all default types are supported and no custom type is supported. For example payloads see the table above.


## 3 Usage

### 3.1 Discovery Services
#### 3.1.1 Find Servers
Finds the servers for a given endpoint URL. Examples for Endpoint URLs are:
opc.tcp://SERVERNAME:PORT or opc.http://SERVERNAME:PORT
The microflow may throw an error when the input is invalid or the server could not be found.

#### 3.1.2 Get Endpoints
Get endpoints for a given URL. Examples for Endpoint URLs are:
opc.tcp://SERVERNAME:PORT or opc.http://SERVERNAME:PORT
The microflow may throw an error when the input is invalid or an endpoint cannot be found.

#### 3.1.3 Get Endpoints create certificate
Creates a ServerCertificate FileDocument from an endpoint response.
This action can be used to check whether the endpoint is the correct one by letting the user validate the certificate.

### 3.2 Session Services
#### 3.2.1 Test Connection
This microflow can be used to test the connection to an OPC-UA server. 
It will return a TestConnectionResponse object that contains information whether the connection can be established and if not, why it failed.

#### 3.2.2 Trust Server Certificate
This microflow must be used to trust a server certificate.
Server certificates that are not trusted by the client, will be rejected.

#### 3.2.3 Untrust Server Certificate
This microflow must be used to not trust a server certificate anymore
When this microflow is called for the server certificate that is used by a server, the connection to this server will fail.

### 3.3 View Services
#### 3.3.1 Browse
This microflow lets you browse through a server by traversing connected nodes (Browse).
The instructions to which server needs to be connected are given by the Server configuration.
The instructions on how to browse are in the Browse Description. 
For example implementations check out GetRoots, GetChildren and GetParent actions.

-> Add a comment on Masks, binary to fields

#### 3.3.2 Get Roots
This microflow is an example implementation of the Browse action.
For a given ServerConfiguration, the microflow will return the list of children of 'the' Root Node of the server on the associated BrowseNodes. This is usually the start of any browse action.

#### 3.3.3 Get Children
This microflow is an example implementation of the Browse action.
For a given ServerConfiguration and node id, the microflow will return the list of children on the associated BrowseNodes.

#### 3.3.4 Get Parent
This microflow is an example implementation of the Browse action.
For a given ServerConfiguration and node id, the microflow will return the parent node (if present) on the associated BrowseNodes.

### 3.4 Attribute Services
#### 3.4.1 Get Node Details
This microflow is an implementation of the ReadNode action.
For a given ServerConfiguration and NodeId, this microflow let's you read all relevant values for the Node by returning a specialization of the Node Object.

#### 3.4.2 Read Node
For a given ServerConfiguration, this microflow lets you read values from the server.

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


#### 3.4.3 Read Single Node Value
This microflow is an example implementation of the ReadNode action.
For a given ServerConfiguration and node id, the microflow will return the VALUE of this node in a single DavaValue object.

#### 3.4.4 Write Node
For a given ServerConfiguration, this microflow lets you write a value to the server.
The write node request defines what needs to be written and in what format to which node. For full explanation on the fields, see documentation on the WriteNodeRequest Entity.

#### 3.4.5 Write Single Node Value
This microflow is an example implementation of the WriteNode action.
For a given ServerConfiguration, this microflow lets you write a value to the server.

The NodeId and Payload are required.
To write a numerical value, use as a payload  e.g. "1.0".
To write a string value, use as a payload e.g. "my value to write".
Not all default types are currently supported.

The Default Variant type is the type of value you want to write (e.g. Boolean, INT16). This input parameter is recommended to use. If this parameter is left empty, the Write action will read the latest value and try to map the payload onto the data type of this read value.

### 3.5 Subscriptions
#### 3.5.1 Initialize Commit Subscription
For a given ServerConfiguration, this microflow lets you create a new subsription.

#### 3.5.2 De-Initialize Delete Subscription\
For a given ServerConfiguration, this microflow lets you remove a subscription.

### 3.6 Monitored Items
#### 3.6.1 Monitored Item Commit
This microflow lets you monitor data changes on the server.\r\nThe microflow may throw an exception when the connection is unsuccesful or the input is invalid.
The microflow returns a status codes, that is associated to the monitored item in the input. The monitored item is committed if and only if the status code associated has status Good. If the status Code has no Good status, the description explains what went wrong.

#### 3.6.2 Monitored Item List Commit
This microflow lets you monitor data changes on the server.
The microflow may throw an exception when the connection is unsuccesful or the input is invalid.
The microflow returns a list of status codes, where each is associated to one of the monitored items in the input. A monitored item is committed if and only if there is a status code associated with it, that has status Good. If the status Code has no Good status, the description explains what went wrong.

#### 3.6.3 Monitored Item Delete
This microflow lets you stop listening to a monitoring item. 
The microflow may throw an exception when the connection is unsuccesful or the input is invalid.
The microflow returns a status code, where the _IsCommitted field will be set to true if and only if the initialization is successfull.
If the initialization is not succesfull the status code will have an error message to explain why the initialization is not succesfull.

#### 3.6.4 Monitored Item List Delete
This microflow lets you stop listening to monitoring items.
The microflow may throw an exception when the connection is unsuccesful or the input is invalid.\r\nThe microflow returns a list of status codes, where the _IsCommitted field will be set to true if and only if the initialization is successfull.
If the initialization is not succesfull the status code will have an error message to explain why the initialization is not succesfull.

### 3.7 Mendix Specific
#### 3.7.1 Update Client Certificate
Update the client certificate with the supplied one. The client will try to reconnect to each of the servers afterwards.

#### 3.7.2 Force Refresh Connection
Deletes the server configuration from the client and then tried to reconnect with a new instance to the server. This can be particularly usefull when updating the certificate of the client.

#### 3.7.3 ASU Subscription
After start up microflow to reconnect to servers and initialize active subscriptions.

#### 3.7.4 BSD Subscription
Before shut down microflow to disconnec from servers and deactivate subscriptions.


