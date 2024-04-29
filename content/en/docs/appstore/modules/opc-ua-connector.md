---
title: "OPC-UA connector"
#url: Set the relative URL of the document; after the name of the main directory/product the document is in, use the document title; example for document titled my-new-page.md, in refguide directory: /refguide/my-new-page/
#linktitle: Enter a short title to be used in the left side menu; increases readability and navigation through the menu
#weight: Enter the position of the document compared to other 'child' documents at the same level; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
#draft: Set to true if page should not appear in production
---

## 1 Introduction

The OPC-UA connector is a Mendix Module to connect to your OPC-UA server.

## 1.1 Typical Use Case

The OPC-UA connector should be used ...

## 1.2 License

The OPC-UA connector is licensed under the GPL2.0 License.

## Pre-requisites
Mendix Studio Pro version 9.24.3+

## 1.4 Dependencies {#dependencies}

You must have these Marketplace modules installed:
* [Community Commons](https://marketplace.mendix.com/link/component/170)

## 2 Installation
* Install all dependencies.
* Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OPC-UA connector into your app.
* Add NAV_StartConfiguration to your navigation
* Add the CanConfigure module role to a user role that will configure the connections to your server.

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
#### 3.5.2 De-Initialize Delete Subscription

### 3.6 Monitored Items
#### 3.6.1 Monitored Item Commit
#### 3.6.2 Monitored Item List Commit
#### 3.6.3 Monitored Item Delete
#### 3.6.4 Monitored Item List Delete

### 3.7 Mendix Specific
#### 3.7.1 Update App Certificate
#### 3.7.2 Force Refresh Connection
#### 3.7.3 ASU Subscription
#### 3.7.4 BSD Subscription
