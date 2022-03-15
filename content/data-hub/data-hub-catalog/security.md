---
title: "Data Accessibility and Security"
url: /data-hub/data-hub-catalog/security/
category: "Data Hub Catalog"
menu_order: 50
description: "Security aspects around registered assets and access in Mendix Data Hub."
tags: ["data hub", "data hub catalog", "security", "entity security", "dataset security","odata service security"]
---

## 1 Introduction

In Data Hub, the [Access Level]{#access-level) indicates the accessibility of a registered data source.

When sharing data in an organization, access to and security of the data that is consumed is a primary concern.

Security for an app can be defined at the app-level, module-level, and entity-level. Further authentication methods can also be specified to control access to the data associated with published datasets.

This security level determines which end-users of the apps will have access to the data represented by the exposed dataset. For example, an app developer in Mendix Studio Pro working in an HR department can use the **Employees** dataset in the Data Hub Catalog in their application. The developer must have access to representative test datasets that are made available in a test or acceptance environment to properly develop the app. However, at runtime, they may not be able to see all the actual employee data if they do not have the correct access permissions. Similarly, end-users of the consuming app will only be able to see the data for which they have clearance.  HR managers using this app will be able to see more data from the same employee entity database according to their access clearance.

For further information, see the [Security](/refguide/published-odata-services#security) section in *Published OData Services*.

Access to data is determined by the identification protocols of the organization and applied to all access to the data via Mendix apps. This page shows an example of applying [custom HTTP header validation](#http-header-validation).

## 2 OData Security for Shared Datasets

For Mendix apps that publish entities and those that consume the shared entities in their apps as [external entities](/refguide/external-entities), the following details apply:

* The security for the OData-based service is defined in the publishing app – at the app, module, and entity level
* The security that is defined at the module level will apply to the OData services that are published from the module and enforced when the entities from the service are used in a consuming app when end-users try to access the data
	{{% alert type="info" %}}The security for an OData service can only be set if the [project security](/refguide/project-security) is enabled.{{% /alert %}}

* Classification of the data associated with the entities is defined in the service metadata and shown in the [Service Metadata](search#metadata) panel of the **Search Details** screen. This is further discussed below.
* Through the identification protocols used for establishing the user identity, the security rules for the user in the publishing app are applied

	* On the Mendix Platform, this is [Mendix SSO](/developerportal/deploy/mendix-sso),  but it can also be the organization's identification protocol
* In the publishing app in Studio Pro, access can be defined at the entity level as follows:

	* None
	* Basic authentication on the user name and password
	* Customized where the publisher builds their own microflow which gets the header from the request to determine the user and what the user wants to do

For further details, see the [Entity Access](/refguide/module-security#entity-access) section of *Module Security*.

## 3 Access Level of Registered Data Sources {#access-level}

Registered data sources have the following classifications that apply to the visibility and accessibility of the data source in the Catalog:

* **Public**  – the data source is visible to all internal and external users of Mendix Data Hub
* **Internal**  – the data source is restricted to the members of the organization

The **Access Level** of the asset indicates the runtime security on the data source and what users can see and use when consuming datasets in their app development.

The access level for a registered OData service is shown in the **Service Metadata** panel in the Catalog.

## 4 Using Custom HTTP Header Validation for Published Entities {#http-header-validation}

Access to the data by specific users of the final app is defined in the publishing app of the data source.

For an example of how to implement authentication using security assertion markup language (SAML) and Active Directory Federation Services (ADFS),  the following procedure illustrates how to use a custom HTTP headers microflow and a custom HTTP validation microflow to generate, set, and validate authentication tokens.

The following steps describe how the security proposal is set with [ADFS](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services) and the [SAML](/appstore/modules/saml) Mendix Marketplace module:

![](attachments/security/federation-with-ADFS-SAML-schematic.png)

1. The app end-user logs into an app that uses external entities.
2. The end-user is not yet authenticated, so the SAML module forwards the user to ADFS for authentication.
3. If the correct credentials are provided, ADFS returns a cookie for SSO.

4. When the end-user performs a query on a external entity, the JSON web tokens (JWTs) are set on the API call (and are validated with a microflow in the consumed OData service):

    ![authentication flow](attachments/security/authentication-headers-from-microflow.png)

5. The publishing app receives the request and uses the custom microflow specified in the settings of the published OData document to validate the tokens. If the tokens are not known, it calls ADFS to validate the user.

    ![authentication microflow](attachments/security/authentication-microflow.png)

6. ADFS returns the user validation.
7. The customer authentication microflow on the OData service document returns the appropriate user which is used for retrieving the data. The entity access rules will use this user for authorization.
