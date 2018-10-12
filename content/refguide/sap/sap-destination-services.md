---
title: "SAP Destination Services"
category: "SAP"
menu_order: 15
description: "Reference for using SAP Destination Services within the SAP OData Connector."
tags: ["SAP", "OData Connector", "Destination Services", "Cloud Connector"]
---

## 1 Introduction

SAP Destination Services enables your Mendix app to use services defined in the SAP Cloud Platform cockpit without needing to know all the technical details of the endpoint.

In particular, it enables you to access services which use a different Identity Provider (IDP) from the one you are using for your Mendix App.

{{% alert type="info" %}}
Destination Services will only provide the correct information when run on SAP Cloud Platform. To test your app on your local machine you will have to use a URL to connect directly to an SAP service which is available to you.
{{% /alert %}}

## 2 Destination Services Configuration

Your Mendix app will use destinations which are configured as part of your SAP subaccount. From your SAP Cloud Platform cockpit, you can see which destinations have been configured.

![SAP Cloud Platform cockpit - Destinations screen](attachments/sap-destination-services/sap-cockpit-destinations.png)

It is not the aim of this document to explain how to configure destinations. For this you need to see the SAP documentation here: [SAP Cloud Platform Connectivity: Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e4f1d97cbb571014a247d10f9f9a685d.html).

## 3 Including SAP Destination Services in your App

Although you can use SAP Destination Services on their own, the main use within Mendix is as part of the SAP OData Connector. Therefore, to include SAP Destination Services in your app, download the SAP OData Connector from the the App Store here: [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/Mendix/SAP-OData-Connector).

## 4 Get Destination Action

There is one action within the SAP OData Connector module which allows you to get information about a destination. This is **Get Destination**, which is in the *SAP Destination Service* category of the microflow toolbox.

![Drag a Get Destination action from the toolbox](attachments/sap-destination-services/drag-get-destination.png)

The **Get Destination** action properties look like this:

![Get Destination properties dialog](attachments/sap-destination-services/get-destination-properties.png)

**Destination** is a string containing the name of the destination. This matches the name of the destination as set up in the SAP Cloud Platform cockpit.

**Variable** is the name of the object of type *SAPODataConnector.Destination* where the details of the destination will be stored.

## 5 Destination Entity

The details of your SAP destination are held in the **Destination** entity which is part of the *SAPODataConnector* domain model. The entity looks like this:

![Destination entity](attachments/sap-destination-services/destination-entity.png)

This contains attributes for all the possible information about a destination, but only those attributes which are relevant to the chosen *Authentication* method will be populated with values.

### 5.1 General Attributes

#### 5.1.1 Name

This is the name of the destination. It is the name that was used as the *Destination* in the **Get Destination** action and is the name which was used when the destination was set up on SAP Cloud Platform.

#### 5.1.2 Description

This is a free text description of this destination.

#### 5.1.3 ProtocolType

This identifies the type of Hypertext Transfer Protocol being used. it corresponds to the **Type** field in the SAP Cloud Platform cockpit. The possible values are

* HTTP
* HTTPS

#### 5.1.4 URL

This is the URL of the endpoint for the destination service.

#### 5.1.5 Proxy Type

This is the type of connection which is going to be made to the destination. It has two values:

* Internet
* OnPremise

#### 5.1.5 Authentication

This indicates the method of authentication which is used to connect to the destination.

The **SAP Destination Services** module currently supports the following methods of authentication:

* NoAuthentication
* BasicAuthentication
* OAuth2SAMLBearerAssertion
* PrincipalPropagation (this is only valid with a **proxy type** of *OnPremise*).

The following types of authenticatoin are not currently supported by the SAP Destination Services module:

* AppToAppSSO
* ClientCertificateAuthentication
* SAPAssertionSSO

### 5.2 Attributes Dependent on Authentication Method

For more information about the content and use of these attributes, please see the documentation on the different types of HTTP authentication here: [SAP Cloud Platform Connectivity: HTTP Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/b068356dd7c34cf7ad6b6023deeb317d.html).

#### 5.2.1 NoAuthentication

There are no additional attributes needed for a destination with no authentication.

#### 5.2.2 BasicAuthentication

The following attributes are provided for destinations with basic authentication.

* User
* Password

{{% alert type="info" %}}
These are the credentials used to establish the connection to the destination. They are not the credentials of the user within the Mendix app.
{{% /alert %}}

#### 5.2.3 OAuth2SAMLBearerAssertion

The following attributes are provided for destinations with SAML Bearer Assertion authentication.

* Authentication
* Audience
* ClientKey
* TokenServiceUrl
* TokenServiceUser
* TokenServicePassword
* SystemUser

#### 5.2.4 PrincipalPropagation

All the configuration for this type of authentication is performed in the connectivity service.

{{% alert type="info" %}}
This is the type of authentication which you need to implement if you previously used the SAP Cloud Connector.
{{% /alert %}}

By providing the SAP OData Connector actions (*Get list* for example) with a destination of this type, you can gain access to your on-premises systems which are configured through SAP Cloud Platform Connectivity.

The attributes in the **Destination** entity which are used for *Principal Propogation* are:

* Url –  the *Location* of the service
* ProxyHost – the *Host* of the service
* ProxyPort - the *Port* of the service
* SapConnectivityProxyCredentials – the *Username* of the user accessing the service (Password is *empty*)
* SapConnectivityAuthentication – the value of the *SAP-Connectivity-Authentication* header which authenticates access to the service via the connectivity service

## 6	Good Practice

### 6.1	Destination Name

The destination name should be recorded in a constant so that it is the same everywhere that it is used. This also means that it can be changed in all places at once.

### 6.2	Get Destination

You should only need to get the destination once, before you perform any actions which use it.

You should catch any exceptions accessing the service in your microflows and, firstly, try to get the destination again in case your access token has expired. If the token has expired, the return code will be **401**.

If retrying the **Get Destination** action still causes an exception, then continue testing for other possible causes.

### 6.3	Deploying Locally

SAP Destination Services does not support running on a local machine. Your app must be deployed to SAP Cloud Platform to get the destination.

If you want to deploy locally, during development or testing for example, you will need to have an endpoint which is accessible from your network and provide any credentials from within your app.

### 6.4 Formatting URLs with a ServiceRoot in SAP OData Connector

When you use SAP OData Connector actions, you often have to provide a string containing a URL or query. Without Destination Services this needs to contain the SERVICEROOT, that is the endpoint of the service being consumed.

With Destination Services, you should not provide the SERVICEROOT. You should start the query with a slash and the COLLECTIONNAME. Note that this is also the case where the URL is obtained from the object metadata or *Deferred* attribute. See [SAP OData Connector](sap-odata-connector) for more details.

## 7	Troubleshooting

### 7.1	Failure to Get Destination

If Get Destination fails, check the following:

*	The destination name is exactly as shown in the destinations page of your subaccount on SAP Cloud Platform
*	The user accessing the Mendix App is also authenticated on the service you are trying to use. The usernames (email addresses) must be the same.
*	That the destination has been set up correctly in the SAP Cloud Platform cockpit.

Remember that Destination Services will only work when deployed to SAP Cloud Platform, with users who are authenticated using an Identity Provider configured through SAP and XSUAA.

### 7.2	Unexpected Results in App

Ensure that the user accessing the Mendix App has the required level of access on the service you are trying to use. They must be able to access all the data which your app is expecting.

## 8	Related Content

* [SAP OData Connector](sap-odata-connector)
* [SAP XSUAA Connector](sap-xsuaa-connector)
