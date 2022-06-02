---
title: "Data Accessibility and Security"
url: /data-hub/data-hub-catalog/security/
category: "Data Hub Catalog"
weight: 50
description: "Security aspects around registered assets and access in Mendix Data Hub."
tags: ["data hub", "data hub catalog", "security", "entity security", "dataset security","odata service security"]
---

## 1 Introduction

In Data Hub, the [Access Level](#access-level) indicates whether you can access a registered data source.

Security for a Mendix app can be defined at the app-level, module-level, and entity-level. Further authentication methods can also be specified to control access to the data associated with published datasets.

This security level determines which end-users of the apps will have access to the data represented by the exposed dataset. For further information, see the [Security](/refguide/published-odata-services/#security) section in *Published OData Services*.

Access to data is determined by the identification protocols of the organization and applied to all access to the data via Mendix apps. This page shows an example of applying [custom HTTP header validation](#http-header-validation).

## 2 OData Security for Shared Datasets

For Mendix apps that publish or consume [external entities](/refguide/external-entities/), the following details apply:

* The security for the OData-based service is defined in the publishing app at the app, module, and entity level
* The security that is defined at the module level will apply to the OData services that are published from the module and enforced when the entities from the service are used in a consuming app when end-users try to access the data
	{{% alert color="info" %}}The security for an OData service can only be set if the [app security](/refguide/app-security/) is enabled.{{% /alert %}}

* Classification of the data associated with the entities is defined in the service metadata and shown in the [Service Metadata](/data-hub/data-hub-catalog/search/#metadata) panel of the **Search Details** screen. 

* Through the identification protocols used for establishing the user identity, the security rules for the user in the publishing app are applied

	* On the Mendix Platform, this is [Mendix SSO](/developerportal/deploy/mendix-sso/),  but it can also be the organization's identification protocol
* In the publishing app in Studio Pro, access can be defined at the entity level as follows:

	* None
	* Basic authentication on the user name and password
	* Customized where the publisher builds their own microflow which gets the header from the request to determine the user and what the user wants to do

For further details, see the [Entity Access](/refguide/module-security/#entity-access) section of *Module Security*.

## 3 Access Level of Registered Data Sources {#access-level}

Registered data sources have the following classifications that apply to the visibility and accessibility of the data source in the Catalog:

* **Public**  – the data source is visible to all internal and external users of Mendix Data Hub
* **Internal**  – the data source is restricted to the members of the organization

The **Access Level** of the asset indicates the runtime security on the data source and what users can see and use when consuming datasets in their app development.

The access level for a registered OData service is shown in the **Service Metadata** panel in the Catalog.

## 4 Using Custom HTTP Header Validation for Published Entities {#http-header-validation}

Access to the data by specific users of the final app is defined in the *publishing app* of the data source.

