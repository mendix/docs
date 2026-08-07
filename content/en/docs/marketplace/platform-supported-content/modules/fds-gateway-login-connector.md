---
title: "FDS Gateway Login Connector"
url: /appstore/modules/fds/
description: ""
##If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the marketplace.
---

## Introduction

The [FDS Gateway Login Connector](placeholder) enables Single Sign-On (SSO) for Siemens products by integrating Mendix applications with Siemens Foundational Services (FDS).

Instead of authenticating users directly, the connector delegates authentication to the FDS Gateway, the shared identity platform for Siemens Xcelerator products. Depending on the customer's FDS configuration, users can sign in using either their Siemens ID or their organization's workforce identity provider, such as Microsoft Entra ID. This provides a consistent and secure authentication experience while allowing organizations to continue using their existing identity and access management (IAM) infrastructure.

The connector supports federated authentication by relying on the identity relationships configured in FDS. This enables Mendix applications to integrate seamlessly with the Siemens Xcelerator ecosystem while centralizing authentication and identity federation in the FDS platform.

### Typical Usage Scenarios

* Build an Xcelerator product part of the product with Mendix. End-users of the product can sign in at Siemens FDS IAM. Recommended approach is to let the FDS Gateway interact with FDS IAM and provide tokens to your product application for authentication.
* You can build single-tenant products for contracted customers or multi-tenant products for prospective customers to evaluate your products before purchase. 

### Features and Limitations

#### Features

* Login session initiation: After the FDS gateway authenticates the end user through FDS IAM, the FDS Gateway Login Connector initiates a local session in the Mendix application. The application does not display its own login page as FDS handles authentication providing seamless Single Sign-On experience for end users.

* Just-in-time user provisioning: When a user sign infor the first time, the connector atomatically creates a corresponding user account in the Mendix application based on the JWT claims received. You can use the default provisioning logic or implement custom provisioning. For recurring uses, the connector can also update user information using provisioning logic during sign-in. 

* Role-based access control in FDS applications: Assign user roles dynamically based on claims in the JWT-tokens received from FDS. This allows centralized authorization managementwith role based access control. 

* Tenancy support: The connector supports multi-tenant by making a tenant indicator (identifier) available when a user logs in. Your application can use this identifier to ensure users can access only the data for their own tenant. the connector provides the tenant information, while you must develop tenancy structure. 

#### Limitations

* No synchronized session management: Authentication is delegated to the FDS Gateway, but session management is handled independently by the Mendix application. Changes to a user's login state in FDS gateway are not propagated to active Mendix session.
* FDS initiated logout is not supported. 

## Dependencies

* [Encryption module](https://marketplace.mendix.com/link/component/1011)
* [Community Commons module](https://marketplace.mendix.com/link/component/170)

## Prerequisites

Before configuring the FDS Gateway Login Connector, the application must be onboarded to Siemens Foundational Services (FDS). To onboard an application and publish services within the Siemens FDS ecosystem, follow [Launch a XaaS offering: end-to-end journey](https://developer.internal.siemens.com/fds/fds_getting_started/recipes/Web-Application/index.html).

For onboarding support or questions regarding FDS services, contact [FDSOne Help Portal](https://fdsone.atlassian.net/servicedesk/customer/user/login?destination=portals).

## Installation

1. Import the [FDS Gateway Login Connector](placeholder) module into your app from the Mendix Marketplace.
2. Configure After Startup microflow in the **Runtime** tab of **App Settings** and add the `FDSGatewayLoginConnector.ASU_InitializeFDSGatewayLoginConnectorAuth` microflow as the **After startup** microflow.
3. Configure login page. For more information, refer to xxxxxxxxxxxx section below.
4. Configure the required constants mentioned in the xxxxxxx section below. 

## Configuration

### Configuring the Constants {#constants}

The following constants are mandatory:

* **FDSGatewayLoginConnector.JWTIssuer** – Expected JWT issuer (`iss`) value.

    Example: `https://{devtenant}.{region}.sws.siemens.com/oauth/token`

{{% alert color=”info” %}}
**devtenant** refers to the developer environment tenant, not the customer environment tenant (ECAiD).
{{% /alert %}}

* **FDSGatewayLoginConnector.JWTJKU** – URI pointing to the JSON Web Key Set (JWKS) published by FDS IAM, used to verify token signatures. Defined as a JOSE header parameter in [RFC 7515](https://www.rfc-editor.org/rfc/rfc7515).

    Example: `https://{devtenant}.{region}.sws.siemens.com/token_keys`

{{% alert color=”info” %}}
**devtenant** refers to the developer environment tenant, not the customer environment tenant (ECAiD).
{{% /alert %}}

* **FDSGatewayLoginConnector.EnableLocalAuth** (*default: False*) – Enable or disable local login.

* **FDSGatewayLoginConnector.JWTValidationLeeway** (*default: 0*) – Allowed JWT time validation leeway.

* **FDSGatewayLoginConnector.UserProvisioning** (*default: FDSGatewayLoginConnector.CUSTOM_UserProvisioning*) – User provisioning microflow.

For more information, refer to [Constants](/refguide/constants/).

## SSO

To allow SSO, the usual `login.html` needs to be replaced with a different file (sso-login.html).

Delete the following lines:

```javascript
if (\!document.cookie || \!document.cookie.match(/(^|;)originURI=/gi))
document.cookie = "originURI=/login.html";
```

and directly after the script of the X-XRSR put the following script

```javascript
<script>
    // Use the sso-login.html to prevent the Gateway taking over login.html and perform SSO
        // Always set originURI Cookie.
        document.cookie = 'originURI=/sso-login.html';
        // Insights Hub specific part-2: ends
</script>
```

{{% alert color="info" %}}
Create the `sso-login.html` yourself in the folder /theme/web/public. See the [sso-login.html]() section below.
{{% /alert %}}

## sso-login.html{#sso-ligin}

A new login file `sso-login.html` is needed to support SSO. Create a `sso-login.html` file in the folder /theme/web/public with the following content if you are configuring your existing Mendix app manually.

```html
<!doctype html>
<html>

<head>
	<title>Insights Hub</title>
	<script>
		window.location.assign("/sso" + window.location.search)
	</script>
</head>

</html>
```

## Custom User Provisioning

The FDS Gateway Login Connector module provides `FDSGatewayLoginConnector.CUSTOM_UserProvisioning` as the default user provisioning microflow. By default, it processes the JWT payload, creates or updates users in `System.User`, and assigns user roles.

Why you may need a custom User provisioning microflow:

* If your application uses a custom user entity (specialized from `System.User`), you can implement your own provisioning logic to store additional user information.

* Using a custom User entity may be usefull when you want to implement tenancy-logic in your application. In this case your custom user entity may have an attribute for the user that captures the tenant.

To use custom user provisioning, do the following:

1. Create a custom user entity inheriting from `System.User`.
2. Create a custom provisioning microflow in your own app.
3. Set the `FDSGatewayLoginConnector.UserProvisioning` constant to your custom microflow.
4. Ensure the custom microflow:
    * has a parameter of type String named *RequestJson*
    * returns a `System.User` object
