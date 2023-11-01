---
title: "Use an SAP Connectivity Service with REST and SOAP"
linktitle: "Use SAP Connectivity Service with REST and SOAP"
url: /developerportal/deploy/sap-cloud-platform/sap-destination-with-rest/
category: "SAP"
weight: 25
description: "How to configure Mendix native REST and SOAP calls to use the SAP Destination Service and the SAP Connectivity Service to reach on-premises services."
tags: ["SAP", "Cloud Connector", "Connectivity Service", "Destination Service", "REST", "SOAP"]
aliases:
    - /partners/sap/sap-destination-with-rest/
---

## 1 Introduction

The SAP Destination Service is part of the OData Connector for SAP solutions and enables OData calls to be made using SAP destinations configured on SAP Business Technology Platform (SAP BTP). However, you can also use the destination information provided by the SAP Destination Service to make calls to non-OData services using Mendix native actions for consuming REST and SOAP.

This how-to will teach you how to configure a REST or SOAP call to use the configuration obtained from the SAP Destination Service.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Mendix app which can be deployed to SAP BTP
* Configured a **PrincipalPropagation** destination to an *on-premise* REST or SOAP service in your SAP BTP account; see [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) for more information
* Imported an **OData Connector for SAP solutions** version higher than 4.0.0 into your app

## 3 Writing Your Microflow

In your microflow which is making a REST or SOAP call, perform a **Get Destination** action before the REST or SOAP call. This needs to use the Destination Name which is configured in a Destination on SAP BTP.

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/rest-microflow.png" alt="REST Microflow" >}}

This will return a **Destination** object. This is named *DestinationObject* in the above example, and is used to configure the subsequent REST or SOAP call.

The Destination object has the properties shown in the image below:

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/destination-entity.png" alt="Destination entity" >}}

### 3.1 Configuring a REST Call

#### 3.1.1 General Tab

The following entries are required in the **General** tab:

|Entry|Description
|-----|-----|
|Location|$DestinationObject/Url followed by any additional parameters|
|Proxy configuration|Override|
|Use proxy|true|
|Host|$DestinationObject/ProxyHost|
|Port|$DestinationObject/ProxyPort|
|Username|$DestinationObject/SapConnectivityProxyCredentials|
|Password|empty|

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/rest-general.png" alt="REST general tab" >}}

#### 3.1.2 HTTP Headers Tab

The following HTTP Headers do the following:

* authenticate the app to perform the action via the Connectivity service
* authenticate the user to access the endpoint defined by the destination
* request that data is returned in JSON format

|Key|Value|
|---|---|
|SAP-Connectivity-Authentication|$DestinationObject/SapConnectivityAuthentication|
|Proxy-Authorization|'Bearer ' + $DestinationObject/SapConnectivityProxyCredentials|
|Accept|'application/json'|

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/rest-http-headers.png" alt="REST HTTP headers tab" >}}

### 3.2 Configuring a SOAP Call

#### 3.2.1 Operation Tab

The following entries are required in the **Operation** tab:

|Entry|Description
|-----|-----|
|Override location|*Checked*|
|Location|$DestinationObject/Url|
|Proxy configuration|Override|
|Use proxy|true|
|Host|$DestinationObject/ProxyHost|
|Port|$DestinationObject/ProxyPort|
|Username|$DestinationObject/SapConnectivityProxyCredentials|
|Password|empty|

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/web-service-general.png" alt="SOAP web service general tab" >}}

#### 3.2.2 HTTP Headers Tab

The same HTTP Headers are required as for a REST call. They do the following:

* authenticate the app to perform the action via the Connectivity service
* authenticate the user to access the endpoint defined by the destination
* request that data is returned in JSON format

|Key|Value|
|---|---|
|SAP-Connectivity-Authentication|$DestinationObject/SapConnectivityAuthentication|
|Proxy-Authorization|'Bearer ' + $DestinationObject/SapConnectivityProxyCredentials|
|Accept|'application/json'|

{{< figure src="/attachments/developerportal/deploy/sap-destination-with-rest/web-service-http-headers.png" alt="SOAP web services HTTP headers tab" >}}

## 4 Read More

* [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/)
* [Consumed Web Services](/refguide/consumed-web-services/)
* [Consumed Web Service](/refguide/consumed-web-service/)
* [Call Web Service Action](/refguide/call-web-service-action/)
