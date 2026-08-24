---
title: "FDS Gateway Login Connector"
url: /appstore/modules/fds/
description: "Describes how to install and configure the FDS Gateway Login Connector to enable Single Sign-On for Mendix applications integrated with Siemens Foundational Services."
##If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the marketplace.
---

## Introduction

The [FDS Gateway Login Connector](https://marketplace.mendix.com/link/component/303885) enables Single Sign-On (SSO) for Siemens products by integrating Mendix applications with Siemens Foundational Services (FDS).

Instead of authenticating users directly, the connector delegates authentication to the FDS Gateway, a shared access layer for Siemens Xcelerator applications and services that integrates with FDS IAM. Depending on the customer's FDS configuration, users can sign in using either their Siemens ID or their organization's workforce identity provider, such as Microsoft Entra ID. This provides a consistent, secure authentication experience and allows organizations to continue using their existing identity and access management (IAM) infrastructure.

The connector abstracts the underlying OpenID Connect (OIDC) integration with Siemens Foundational Services, reducing the need for application-specific identity provider configuration.

This connector is intended for Siemens Xcelerator products and other applications that are required to authenticate users through Siemens Foundational Services (FDS).

The following diagram gives an overview of architecture of the connector:

{{< figure src="/attachments/appstore/platform-supported-content/modules/fds/fds-connector.png" alt="Architecture diagram showing a client connecting to Your App via FDS Gateway, which authenticates with FDS IAM and forwards requests with a JWT." >}}

{{% alert color="info" %}}
Siemens Access Management (SAM) and SAMv2 are legacy names for what is now called FDS IAM and FDS Gateway in current Siemens Foundational Services terminology.
{{% /alert %}}

## Typical Usage Scenarios

* Build a Siemens Xcelerator product with Mendix that must authenticate users through Siemens Foundational Services (FDS). End-users sign in through Siemens FDS IAM, with the FDS Gateway handling authentication and providing tokens to your application.
* Build single-tenant deployments for contracted customers, or multi-tenant evaluation environments for prospective customers, while using Siemens Foundational Services for user authentication.

## Features and Limitations

### Features

* **Login session initiation** – After the FDS Gateway authenticates the end-user through FDS IAM, the connector initiates a local session in the Mendix application. The application does not display its own login page, providing a seamless SSO experience.

* **Just-in-time user provisioning** – The connector does not require pre-provisioning of users into your app. When a user signs in for the first time, the connector automatically creates a corresponding user account in the Mendix application based on the JWT claims received. You can use the default provisioning logic or implement custom provisioning. On subsequent sign-ins, the connector can also update user information using the same provisioning logic.

* **Role-based access control** – User roles are assigned dynamically based on claims in the JWT tokens received from FDS, enabling centralized authorization management.

* **Tenancy support** – The connector exposes tenant information supplied by FDS. Your application is responsible for implementing tenant isolation, data partitioning, and authorization logic.

### Limitations

* **Independent session management** – Authentication is delegated to the FDS Gateway, but session management is handled independently by the Mendix application. Changes to a user's login state in FDS Gateway are not propagated to active Mendix sessions, and FDS-initiated logout is not supported.

## Dependencies

* [Community Commons module](https://marketplace.mendix.com/link/component/170)

## Prerequisites

Before configuring the FDS Gateway Login Connector, your application must be onboarded to Siemens Foundational Services (FDS). To onboard an application and publish services within the Siemens FDS ecosystem, follow [Launch a XaaS offering: end-to-end journey](https://developer.internal.siemens.com/fds/fds_getting_started/recipes/Web-Application/index.html).

For onboarding support or questions about FDS services, contact the [FDSOne Help Portal](https://fdsone.atlassian.net/servicedesk/customer/user/login?destination=portals).

## Installation

1. Import the [FDS Gateway Login Connector](https://marketplace.mendix.com/link/component/303885) module into your app from the Mendix Marketplace.
2. In the **Runtime** tab of **App Settings**, set `FDSGatewayLoginConnector.ASU_InitializeAuth` as the **After startup** microflow.
3. Configure the login page. For more information, see the [Configuring the SSO Redirect](#sso) section below.
4. Configure the required constants. For more information, see the [Configuring the Constants](#constants) section below.

## Configuration

### Configuring the Constants {#constants}

The following constants are mandatory:

* **FDSGatewayLoginConnector.JWTIssuer** – Expected JWT issuer (`iss`) value.

    Example: `https://{devtenant}.{region}.sws.siemens.com/oauth/token`

    {{% alert color="info" %}}**devtenant** refers to the developer environment tenant, not the customer environment tenant (ECAiD).{{% /alert %}}

* **FDSGatewayLoginConnector.JWTJKU** – URI pointing to the JSON Web Key Set (JWKS) published by FDS IAM, used to verify token signatures. Defined as a JOSE header parameter in [RFC 7515](https://www.rfc-editor.org/rfc/rfc7515).

    Example: `https://{devtenant}.{region}.sws.siemens.com/token_keys`

    {{% alert color="info" %}}**devtenant** refers to the developer environment tenant, not the customer environment tenant (ECAiD).{{% /alert %}}

* **FDSGatewayLoginConnector.EnableLocalAuth** (*default: False*) – Enables or disables local login.

* **FDSGatewayLoginConnector.JWTValidationLeeway** (*default: 0*) – Allowed time leeway (in seconds) when validating JWT timestamps.

* **FDSGatewayLoginConnector.UserProvisioning** (*default: FDSGatewayLoginConnector.CUSTOM_UserProvisioning*) – User provisioning microflow.

For more information, see [Constants](/refguide/constants/).

### Configuring the SSO Redirect {#sso}

To enable SSO, create a `sso-login.html` file in `/theme/web/public` with the following content:

```html
<!doctype html>
<html>

<head>
    <title>FDS Gateway Login Connector</title>
    <script>
        const href = window.location.href;
        const i = href.indexOf('sso-login.html');
        const returnPath = '/' + href.substring(i + 'sso-login.html'.length);
        window.location.assign(
            href.substring(0, i).replace(/\/$/, '') +
            '/xctokenlogin?returnPath=' +
            encodeURIComponent(btoa(returnPath))
        );
    </script>
</head>

<body></body>

</html>
```

Update the `originURI` cookie value in `index.html` and use `/sso-login.html` instead of `/login.html` as shown in the code below:

```html
<script>
        if (!document.cookie || !document.cookie.match(/(^|;) *originURI=/gi)) {
            const url = new URL(window.location.href);
            const subPath = url.pathname.substring(0, url.pathname.lastIndexOf("/"));
            document.cookie = `originURI=${subPath}/sso-login.html${window.location.protocol === "https:" ? ";SameSite=None;Secure" : ""}`;
        }
    </script>
```

### Custom User Provisioning

The connector provides `FDSGatewayLoginConnector.CUSTOM_UserProvisioning` as the default user provisioning microflow. By default, it processes the JWT payload, creates or updates users in `System.User`, and assigns user roles.

You may need a custom provisioning microflow in the following cases:

* Your application uses a custom user entity (specialized from `System.User`) and you need to store additional user attributes.
* You want to implement tenancy logic, such as capturing the tenant identifier on a custom user entity attribute.

To use custom user provisioning, do the following:

1. Create a custom user entity inheriting from `System.User`.
2. Create a custom provisioning microflow in your app.
3. Set the `FDSGatewayLoginConnector.UserProvisioning` constant to point to your custom microflow.
4. Ensure the custom microflow:
    * has a parameter of type String named *RequestJson*
    * returns a `System.User` object

### Mendix Cloud Portal Runtime Setting

Set the **ApplicationRootUrl** in the **Runtime** tab of Mendix Cloud Portal when deploying your app. Use the following format:
`http://<tenant>.<region>.sws.siemens.com/<appname>-<provider>/`.
Once configured, you can access the web application using the same URL.
