---
title: "SAP Cloud Connector"
url: /partners/sap/sap-cloud-connector/
category: "SAP"
weight: 28
description: "Presents reference information on the SAP Cloud Connector."
tags: ["SAP", "SAP Cloud Platform", "on-premises", "Cloud Connector", "Destination Services", "SAP BTP", "SAP Business Technology Platform"]
---

## 1 Introduction

{{% alert color="warning" %}}
SAP Cloud Connector is not available in OData Connector for SAP solutions version 4.0.0, and above. For these versions, use the method described in [SAP Destination Service](/partners/sap/sap-destination-service/) to use Cloud Connector functionality with OData Connector for SAP solutions.
{{% /alert %}}

A challenge when running an application in the cloud is to be able to access your on-premises systems in a secure way.

For SAP Business Technology Platform (SAP BTP) users, this is solved by using the SAP Cloud Connector. With the SAP Cloud Connector, a Mendix application deployed on SAP BTP can access any SAP system running on premises.

{{< figure src="/attachments/partners/sap/sap-cloud-connector/connectivity-service.png" >}}

For more information, see [Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html
) in the SAP Help Portal.

## 2 Setup

As is shown in the diagram above, a Mendix Application will automatically bind to a connectivity service after deployment on SAP BTP. This service contains the secure credentials of the SAP Cloud Connector. With this configuration, it becomes possible  for the OData Connector for SAP solutions to get access to an on-premises SAP system.

An important dependency for the SAP Cloud Connector is the JWT token received from the SAP XSUAA service. This means that a Mendix app can only get access to the SAP Cloud Connector if the app has a XSUAA-authenticated user.

## 3 Usage

When the XSUAA Connector for SAP Business Technology Platform and Cloud Connector are set up, the only thing a developer needs to do to use it is enable the **Use SAP cloud connector** flag on one of the OData Connector for SAP solutions operators (such as Get List, Create, or Delete).

{{< figure src="/attachments/partners/sap/sap-cloud-connector/cloud-connector.png" >}}

## 4 Read More

* [XSUAA Connector for SAP Business Technology Platform](/partners/sap/sap-xsuaa-connector/)
* [How to Use the XSUAA Connector for SAP Business Technology Platform](/partners/sap/use-sap-xsuaa-connector/)
* [How to Use the OData Connector for SAP Solutions](/partners/sap/use-sap-odata-connector/)
