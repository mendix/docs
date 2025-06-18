---
title: "Use SAP Connectivity Service with REST and SOAP"
linktitle: "Use SAP Connectivity Service with REST and SOAP"
url: /developerportal/deploy/sap-cloud-platform/sap-destination-with-rest/
weight: 25
description: "How to configure Mendix native REST and SOAP calls to use the SAP Destination Service and the SAP Connectivity Service to reach on-premises services."
aliases:
    - /partners/sap/sap-destination-with-rest/
---

## Introduction

The [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) is part of the [OData Connector for SAP solutions](/appstore/modules/sap/sap-odata-connector/) and enables OData calls to be made using SAP destinations configured on SAP Business Technology Platform ([SAP BTP](/developerportal/deploy/sap-cloud-platform/)). However, you can also use the destination information provided by the [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) to make calls to non-OData services using Mendix native actions for consuming REST and SOAP.

This document describes how to configure a REST or SOAP call to use the configuration obtained from the [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/).

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Mendix app which can be deployed to SAP BTP
* Configured a **PrincipalPropagation** destination to an on-premises REST or SOAP service in your SAP BTP account; For more information, see [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/)
* Imported an [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525) version higher than 4.0.0 into your app

## Writing Your Microflow

In your microflow which is making a REST or SOAP call, perform a **Get Destination** action before the REST or SOAP call. This needs to use the Destination Name which is configured in a Destination on SAP BTP.

{{< figure src="/attachments/deployment/sap-btp/sap-destination-with-rest/rest-microflow.png" alt="REST Microflow" class="no-border" >}}

The **Get Destination** action returns a **Destination** object. This is named as *DestinationObject* in the above example, and is used to configure the subsequent REST or SOAP call.

The Destination object has the properties shown in the image below:

{{< figure src="/attachments/deployment/sap-btp/sap-destination-with-rest/destination-entity.png" alt="Destination entity" class="no-border" >}}

### Configuring a REST Call

Configuring a REST call needs following tab entries:

#### General Tab

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

{{< figure src="/attachments/deployment/sap-btp/sap-destination-with-rest/rest-general.png" alt="REST general tab" class="no-border" >}}

#### HTTP Headers Tab

The HTTP Headers do the following:

* Authenticate the app to perform the action via the connectivity service
* Authenticate the app to the correct Shared Service Center (SSC) location
* Authenticate the user to access the endpoint defined by the destination
* Request to return the data in JSON format

|Key|Value|
|---|---|
|SAP-Connectivity-Authentication|$DestinationObject/SapConnectivityAuthentication|
|SAP-Connectivity-SCC-Location_ID|$DestinationObject/SapConnectivitySccLocationId|
|Proxy-Authorization|'Bearer ' + $DestinationObject/SapConnectivityProxyCredentials|
|Accept|'application/json'|

For more information, see [rest-service-httpHeaders](https://github.com/mendix/docs/assets/17471702/58ebc5ae-0e19-4509-9ab5-045467f57a0c).

### Configuring a SOAP Call

Configuring a SOAP call needs following tab entries:

#### Operation Tab

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

{{< figure src="/attachments/deployment/sap-btp/sap-destination-with-rest/web-service-general.png" alt="SOAP web service general tab" class="no-border" >}}

#### HTTP Headers Tab

The same HTTP Headers are required as for a REST call. They do the following:

* Authenticate the app to perform the action via the Connectivity service
* Authenticate the app to the correct SSC Location
* Authenticate the user to access the endpoint defined by the destination
* Request to return the data in JSON format

|Key|Value|
|---|---|
|SAP-Connectivity-Authentication|$DestinationObject/SapConnectivityAuthentication|
|SAP-Connectivity-SCC-Location_ID|$DestinationObject/SapConnectivitySccLocationId|
|Proxy-Authorization|'Bearer ' + $DestinationObject/SapConnectivityProxyCredentials|
|Accept|'application/json'|

For more information, see [web-service-httpHeaders](https://github.com/mendix/docs/assets/17471702/32d677eb-a968-490f-8f90-b058d41ec868).

## Read More

* [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/)
* [Consumed Web Services](/refguide/consumed-web-services/)
* [Consumed Web Service](/refguide/consumed-web-service/)
* [Call Web Service Action](/refguide/call-web-service-action/)
* [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525)
