---
title: "SAP Destination Service"
url: /developerportal/deploy/sap-cloud-platform/sap-destination-service/
weight: 20
description: "Reference for using SAP Destination Services within the OData Connector for SAP solutions."
aliases:
    - /partners/sap/sap-destination-service/
---

## Introduction

The SAP Destination Service enables your Mendix app, running on SAP Business Technology Platform (SAP BTP), to use external services or systems. It also enables access to remote on-premises systems using the Connectivity service. 

{{% alert color="info" %}}
The SAP Destination Service will only provide the correct information when run on SAP BTP. To test your app on your local machine you will have to use a URL to connect directly to an SAP service which is available to you.
{{% /alert %}}

## Destination Services Configuration

Your Mendix app will use destinations which are configured as part of your SAP subaccount. From your SAP BTP cockpit, you can see which destinations have been configured.

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/sap-cockpit-destinations.png" alt="SAP BTP cockpit - Destinations screen" class="no-border" >}}

It is not the aim of this document to explain how to configure destinations. For this you need to see the SAP documentation here: [SAP Business Technology Platform Connectivity: Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e4f1d97cbb571014a247d10f9f9a685d.html).

## Including SAP Destination Services in your App

Although you can use the SAP Destination Service on its own, the main use within Mendix is as part of the OData Connector for SAP solutions. Therefore, to include the SAP Destination Service in your app, download the OData Connector for SAP solutions from the Marketplace here: [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525/).

## Get Destination Action

There is one action within the OData Connector for SAP solutions module which allows you to get information about a destination. This is **Get Destination**, which is in the *SAP Destination Service* category of the microflow toolbox.

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/drag-get-destination.png" alt="Drag a Get Destination action from the toolbox" class="no-border" >}}

The **Get Destination** action properties look like this:

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/get-destination-properties.png" alt="Get Destination properties dialog" class="no-border" >}}

**Destination** is a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit.

**Variable** is the name of the object of type *SAPODataConnector.Destination* where the details of the destination will be stored.

### Authenticating SAP Destination Service

By default, your destination will be found and authenticated using XSUAA. This is controlled using a constant `XSUAAEnabled` which defaults to `true`.

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/xsuaaenabled.png" class="no-border" >}}

Set `XSUAAEnabled` to `true` if your application is using XSUAA for user authentication, and you want to use the generated access token to authenticate with destination service.

If your destination uses `NoAuthentication` or `BasicAuthentication`, set `XSUAAEnabled` to `false` if one of the following conditions applies:

* you use XSUAA for single sign-on, but do not need or want to use the user access token for your destination service authentication
* if you are not using XSUAA for user authentication in your app.

With `XSUAAEnabled` set to `false`, the destination will use the `VCAP` settings of the environment for authentication.

## Destination Entity

The details of your SAP destination are held in the **Destination** entity which is part of the *SAPODataConnector* domain model. The entity looks like this:

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/destination-entity.png" alt="Destination entity" class="no-border" >}}

This contains attributes for all the possible information about a destination, but only those attributes which are relevant to the chosen *Authentication* method will be populated with values.

### General Attributes

#### Name

This is the name of the destination. It is the name that was used as the *Destination* in the **Get Destination** action and is the name which was used when the destination was set up on SAP BTP.

#### Description

This is a free text description of this destination.

#### ProtocolType

This identifies the type of Hypertext Transfer Protocol being used. it corresponds to the **Type** field in the SAP BTP cockpit. The possible values are

* HTTP
* HTTPS

#### URL

This is the URL of the endpoint for the SAP Destination Service.

#### Proxy Type

This is the type of connection which is going to be made to the destination. It has two values:

* Internet
* OnPremise

#### Authentication

This indicates the method of authentication which is used to connect to the destination.

The **Get Destination** action currently supports the following methods of authentication:

* NoAuthentication
* BasicAuthentication
* OAuth2SAMLBearerAssertion
* PrincipalPropagation (this is only valid with a **proxy type** of *OnPremise*).

The following types of authentication are not currently supported by the Get Destination action:

* AppToAppSSO
* ClientCertificateAuthentication
* SAPAssertionSSO

### Attributes Dependent on Authentication Method

For more information about the content and use of these attributes, please see the documentation on the different types of HTTP authentication here: [SAP Business Technology Platform Connectivity: HTTP Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/b068356dd7c34cf7ad6b6023deeb317d.html).

#### NoAuthentication

There are no additional attributes needed for a destination with no authentication.

#### BasicAuthentication

The following attributes are provided for destinations with basic authentication.

* User
* Password

{{% alert color="info" %}}
These are the credentials used to establish the connection to the destination. They are not the credentials of the user within the Mendix app.
{{% /alert %}}

#### OAuth2SAMLBearerAssertion

The following attributes are provided for destinations with SAML Bearer Assertion authentication.

* Authentication
* Audience
* ClientKey
* TokenServiceUrl
* TokenServiceUser
* TokenServicePassword
* SystemUser

#### PrincipalPropagation

All the configuration for this type of authentication is performed in the connectivity service.

{{% alert color="info" %}}
This is the type of authentication which you need to implement if you previously used the SAP Cloud Connector.
{{% /alert %}}

By providing the OData Connector for SAP solutions actions (*Get list* for example) with a destination of this type, you can gain access to your on-premises systems which are configured through the SAP Connectivity Service.

The attributes in the **Destination** entity which are used for *Principal Propagation* are:

* Url – the *Location* of the service
* ProxyHost – the *Host* of the service
* ProxyPort - the *Port* of the service
* SapConnectivityProxyCredentials – the *Username* of the user accessing the service (Password is *empty*)
* SapConnectivityAuthentication – the value of the *SAP-Connectivity-Authentication* header which authenticates access to the service via the connectivity service

## Good Practice

### Destination Name

The destination name should be recorded in a constant so that it is the same everywhere that it is used. This also means that it can be changed in all places at once.

### Get Destination

You need to get the destination at least once before you perform any actions which use it.

You should catch any exceptions when using the **Get Destination** to access the service in your microflows.

{{< figure src="/attachments/deployment/sap-btp/sap-destination-service/get-destination-error-flow.png" class="no-border" >}}

If your access token has expired, you will get a return code of **401**. The access token cannot be refreshed automatically and the end-user will be signed out and will need to sign in again to get a new token.

If the **Get Destination** action returns a different error, or signing in again does not solve the issue, then continue testing for other possible causes.

### Deploying Locally

The SAP Destination Service does not support running on a local machine. Your app must be deployed to SAP BTP to get the destination.

If you want to deploy locally, during development or testing for example, you will need to have an endpoint which is accessible from your network and provide any credentials from within your app.

### Formatting URLs with a ServiceRoot in OData Connector for SAP Solutions

When you use OData Connector for SAP solutions actions, you often have to provide a string containing a URL or query. Without Destination Services this needs to contain the SERVICEROOT, that is: the endpoint of the service being consumed.

With the SAP Destination Service, you should not provide the SERVICEROOT. You should start the query with a slash and the COLLECTIONNAME. Note that you will also need to start the query with the COLLECTIONNAME in the case where the URL is obtained from the object metadata or *Deferred* attribute. See [OData Connector for SAP Solutions](/appstore/modules/sap/sap-odata-connector/) for more details.

## Troubleshooting

### Failure to Get Destination

If *Get Destination* fails, check the following:

* The destination name is exactly as shown in the destinations page of your subaccount on SAP BTP
* The user accessing the Mendix App is also authenticated on the service you are trying to use. The usernames (email addresses) must be the same.
* That the destination has been set up correctly in the SAP BTP cockpit.

Remember that the SAP Destination Service will only work when deployed to SAP BTP, with users who are authenticated using an Identity Provider configured through SAP and XSUAA.

### Unexpected Results in App

Ensure that the user accessing the Mendix App has the required level of access on the service you are trying to use. They must be able to access all the data which your app is expecting.

## Read More

* [OData Connector for SAP Solutions](/appstore/modules/sap/sap-odata-connector/)
* [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/)
