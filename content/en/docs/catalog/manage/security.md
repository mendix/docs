---
title: "Data Accessibility and Security"
url: /catalog/manage/security/
description: "Describes security aspects around registered assets and access in Mendix Data Hub."
tags: ["data hub", "Catalog", "security", "entity security", "dataset security","odata service security"]
aliases:
    - /catalog/security/
---

## 1 Introduction

In the Catalog, the [Access Level](#access-level) indicates whether you can access a registered data source.

Security for a Mendix app can be defined at the app-level, module-level, and entity-level. You can also specify further authentication methods to control access to the data associated with published datasets.

This security level determines which end-users of the apps will have access to the data represented by the exposed dataset. For further information, see the [Security](/refguide/published-odata-services/#security) section in *Published OData Services*.

Access to data is determined by the identification protocols of the organization and applied to all access to the data via Mendix apps. This page shows an example of applying [custom HTTP header validation](#http-header-validation).

## 2 OData Security for Shared Datasets

For Mendix apps that publish or consume [external entities](/refguide/external-entities/), the following details apply:

* The security for the OData service is defined in the publishing app at the app, module, and entity level
* The security that is defined at the module level will apply to the OData services that are published from the module and enforced when the entities from the service are used in a consuming app when end-users try to access the data

    {{% alert color="info" %}}The security for an OData service can only be set if the [app security](/refguide/app-security/) is enabled.{{% /alert %}}

* Classification of the data associated with the entities is defined in the service metadata and shown in the [Service Metadata](/catalog/manage/search/#metadata) panel of the **Search Details** screen. 

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

### 4.1 Implementing Authentication with an OpenID Connect Capable IDP and OIDC

You can use a custom HTTP headers microflow and a custom HTTP validation microflow to generate, set, and validate authentication tokens. 

The following steps describe how the security proposal is set with an OpenID Connect (OIDC) compliant identity provider (IDP) and the [OIDC](https://marketplace.mendix.com/link/component/120371) Mendix Marketplace module:

{{< figure src="/attachments/data-hub/data-hub-catalog/security/federation-with-ADFS-SAML-schematic.png" >}}

1. The app end-user logs into an app that uses external entities.
2. The end-user is not yet authenticated, so the OIDC module forwards the user to IDP for authentication.
3. If the correct credentials are provided, IDP returns the UserInfo and an access token for SSO.
4. When the end-user performs a query on a external entity, the JSON web tokens (JWTs) are set on the API call, and are validated with a microflow in the consumed OData service. Create a microflow for the **Headers from microflow** option, and add the value of your OIDC token to the **Authorization** header:

    {{< figure src="/attachments/data-hub/data-hub-catalog/security/authentication-headers-from-microflow.png" alt="authentication flow" >}}

5. The publishing app receives the request and uses the custom authentication microflow specified in the settings of the published OData document to validate the tokens. This microflow should take the token from the **Authorization**, validate the information locally, or call IDP to validate.

    {{< figure src="/attachments/data-hub/data-hub-catalog/security/authentication-microflow.png" alt="authentication microflow" >}}

6. The custom authentication microflow on the OData service document returns the appropriate user, which is used for retrieving the data. The entity access rules will use this user for authorization.
