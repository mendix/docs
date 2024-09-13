---
title: "SAP Cloud Connector"
url: /developerportal/deploy/sap-cloud-platform/sap-cloud-connector/
weight: 28
description: "Presents reference information on the SAP Cloud Connector."
aliases:
    - /partners/sap/sap-cloud-connector/
    - /appstore/connectors/sap/sap-cloud-connector/
---

## Introduction

{{% alert color="warning" %}}
SAP Cloud Connector is not available in OData Connector for SAP solutions version 4.0.0, and above. For these versions, use the method described in [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) to use Cloud Connector functionality with OData Connector for SAP solutions.
{{% /alert %}}

A challenge when running an application in the cloud is to be able to access your on-premises systems in a secure way.

For SAP Business Technology Platform (SAP BTP) users, this is solved by using the [Cloud Connector](https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/cloud-connector) tool provided by SAP. With the SAP Cloud Connector, a Mendix application deployed on SAP BTP can access any SAP system running on premises.

{{< figure src="/attachments/appstore/use-content/modules/sap-cloud-connector/connectivity-service.png" class="no-border" >}}

For more information, see [Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html
) in the SAP Help Portal.

## Setup

As is shown in the diagram above, a Mendix Application will automatically bind to a connectivity service after deployment on SAP BTP. This service contains the secure credentials of the SAP Cloud Connector. With this configuration, it becomes possible for the OData Connector for SAP solutions to get access to an on-premises SAP system.

An important dependency for the SAP Cloud Connector is the JWT token received from the SAP XSUAA service. This means that a Mendix app can only get access to the SAP Cloud Connector if the app has a XSUAA-authenticated user.

## Usage

When the XSUAA Connector for SAP Business Technology Platform and Cloud Connector are set up, the only thing a developer needs to do to use it is enable the **Use SAP cloud connector** flag on one of the OData Connector for SAP solutions operators (such as Get List, Create, or Delete).

{{< figure src="/attachments/appstore/use-content/modules/sap-cloud-connector/cloud-connector.png" class="no-border" >}}

## Read More

* [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/)
* [OData Connector for SAP Solutions](/appstore/modules/sap/sap-odata-connector/)
