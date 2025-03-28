---
title: "Security and Shared Datasets"
url: /refguide/security-shared-datasets/
weight: 75
---

## Introduction

For Mendix apps that publish or consume [external entities](/refguide/external-entities/) and/or actions (abstracted OData services), the following security is applied:

* The security for the OData service is defined in the publishing app at the app, module, and entity or microflow level
* The security that is defined at the module level will apply to the OData services that are published from the module and enforced when the entities or microflows from the service are used in a consuming app when end-users try to access them

    {{% alert color="info" %}}The security for an OData service can only be set if the [app security](/refguide/app-security/) is enabled.{{% /alert %}}

* Classification of the data associated with the entities is defined in the service metadata and shown in the [Service Metadata](/catalog/manage/search/#metadata) panel of the **Search Details** screen of the [Catalog](/catalog/). 

* Through the identification protocols used for establishing the user identity, the security rules for the user in the publishing app are applied

    * On the Mendix Platform, this is [Mendix SSO](/developerportal/deploy/mendix-sso/), but it can also be the organization's identification protocol

* Access in the app publishing the external entities and actions can be [defined in Studio Pro](/refguide/published-odata-services/#security) as follows:

    * None
    * Basic authentication on the user name and password
    * Customized where the publisher builds their own microflow, which gets the header from the request to determine the user and what the user wants to do

* When app security has been enabled, entity access rules are enforced when executing published microflows and for entities that are not published in the OData service.

For further details, see the [Entity Access](/refguide/module-security/#entity-access) section of *Module Security*.

## Using Custom HTTP Header Validation for Published Entities {#http-header-validation}

Access to the data by specific users of the final app is defined in the publishing app of the data source.

### Implementing Authentication with an OpenID Connect Capable IDP and OIDC

You can use a custom HTTP headers microflow and a custom HTTP validation microflow to generate, set, and validate authentication tokens. 

The following steps describe how the security proposal is set with an OpenID Connect (OIDC) compliant identity provider (IDP) and the [OIDC](https://marketplace.mendix.com/link/component/120371) Mendix Marketplace module:

{{< figure src="/attachments/catalog/security/federation-with-ADFS-SAML-schematic.png" class="no-border" >}}

1. The end-user logs into an app that uses external entities.
2. The end-user is not yet authenticated, so the OIDC module forwards the user to IDP for authentication.
3. If the correct credentials are provided, IDP returns the UserInfo and an access token for SSO.
4. When the end-user performs a query on an external entity, the JSON web tokens (JWTs) are set on the API call and are validated with a microflow in the consumed OData service. Create a microflow for the **Headers from microflow** option and add the value of your OIDC token to the **Authorization** header:

    {{< figure src="/attachments/catalog/security/authentication-headers-from-microflow.png" alt="authentication flow" class="no-border" >}}

5. The publishing app receives the request and uses the custom authentication microflow specified in the settings of the published OData document to validate the tokens. This microflow should take the token from the **Authorization**, validate the information locally, or call IDP to validate.

    {{< figure src="/attachments/catalog/security/authentication-microflow.png" alt="authentication microflow" class="no-border" >}}

6. The custom authentication microflow on the OData service document returns the appropriate user, which is used for retrieving the data. The entity access rules will use this user for authorization.
