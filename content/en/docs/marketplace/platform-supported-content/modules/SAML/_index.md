---
title: "SAML"
url: /appstore/modules/saml/
linktitle: "SAML"
no_list: false
description: "Describes the use cases, features, limitations and dependencies of the SAML module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [SAML](https://marketplace.mendix.com/link/component/1174/) module can be used to give end-users access to your Mendix application based on their identity in your Identity Provider (IdP). A Mendix application that uses the SAML SSO module will delegate user login to your Identity Provider using SAML 2.0.

By configuring the information about all identity providers in this module, you will allow users to sign in using the correct identity provider (IdP). There is no limit on the number of different identity providers you can configure.

{{% alert color="info" %}}
For new apps built on Mx9 or Mx10 using Atlas UI V3, you need to use version 4.0.0 of the SAML module.
{{% /alert %}}

{{% alert color="info" %}}
Mendix also offers an [OIDC SSO](/appstore/modules/oidc/) module if you want to authenticate your end-users using the OAuth/OpenID Connect protocol. Overall, the OIDC SSO module is easier to use and customize if needed, so Mendix recommends considering [OIDC SSO](https://marketplace.mendix.com/link/component/120371).
{{% /alert %}}

### Typical Use Cases

The following use cases are supported by both the SAML and OIDC SSO modules:

* Your app is designed for your company’s employees, and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IdP).
* Authenticating against your Microsoft Active Directory server in a secure manner utilizing the SAML capabilities of Active Directory Federation Services (ADFS) — the SAML protocol allows for the encryption of all information transferred between the two servers, so, VPN connections, LDAP, or Kerberos authentication are no longer needed.

The following use cases are supported by SAML:

* Implementing SSO in your Mendix App through a Shibboleth Identity Provider.
* Identifying the end-users of your Mendix app through SAML-enabled national identity schemes such as eHerkenning, a Dutch eID scheme for B2B or B2G scenarios, or DigiD, which gives Dutch citizens access to (semi) governmental services.

    {{% alert color="info" %}}Some of these identity schemes use optional features of SAML, which are not yet supported in the SAML SSO module — see [Limitations](#limitations) for more information.{{% /alert %}}

* Authenticating within a Mendix session — for example, requiring end-users to re-authenticate shortly before they are allowed to do critical transactions in your app, or having a second user authenticate within the context of the first user’s session in your Mendix app.
* Single Logout is supported.

### Features

#### SAML Protocol Adherence

This section is aimed at readers with more knowledge of the SAML protocol. You may skip this section.

1. The SAML SSO module supports the following [SAML 2.0](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf) profiles for your Mendix app acting as a Service Provider (SP):

    * Web browser SSO profile using one of the following bindings
        * HTTP redirect
        * HTTP POST bindings
        * Artifact binding for SAML responses (Mendix 8 and above)
    * Single Logout profile

2. For encryption of SAML messages, the following options are supported:

    * No Encryption
    * 1024 or 2048-bit encryption
    * SHA1 or SHA256 algorithms

#### Usage of SAML Metadata

The Mendix SAML SSO supports the usage of SAML metadata in the following way:

* Daily synchronization of the IdP metadata, so your Mendix app will always have the latest IdP metadata.
    * For daily synchronization of IdP metadata, configure the `SE_SynchronizeIdPMetadata` scheduled event. For local development, this can be done from Studio Pro. In Mendix Cloud, you can do this on the [Environments Details](/developerportal/deploy/environments-details/#model-options) page for your app.
* Downloading the metadata for your Mendix application that acts as an SP in the SAML protocol.

#### SAML Module Configuration Feature

For easy configuration, the SAML module offers the following:

* From version 4.0.0 of the SAML module, if you want to connect your Mendix application with a single IdP, you can do the necessary configurations at design time (using a microflow) and/or deploy time using Application Constants. This is described in the section [Non-default Configuration](/appstore/modules/saml/installation-configuration/#non-default).
* You can create a custom SAML configuration microflow and share it across all SAML applications in your portfolio, such as using a custom module in your private marketplace. This approach makes SAML configurations both automatable and repeatable.
* Runtime configuration by a local Admin is still available in the following cases:

    * If you want to connect multiple IdPs with your SAML app.
    * If you want to upload a keypair for your app.
    * If errors occur during deploy-time SSO configuration via the Cloud Portal, it may be easier to refine the setup through Admin screens and then adjust deployment constants.
* A SAML administration screen that allows you to configure one or multiple SAML IdPs. IdP discovery is supported by an endpoint that returns a page listing all configured IdPs so the end-user can select the IdP where they have an account.

#### Other Features

* The SAML module keeps a log/audit trail of login attempts. These can be downloaded.
* The SAML module allows you to have an SSO connection with multiple SAML IdPs. Each IdP can have its own keypair.
* SAML module versions 3.5.0 and above (compatible with Mendix version 9.22.0 and above) support multiple keypairs.
* Starting from version 4.2.0, the SAML module supports multi-instance apps (horizontal scaling).

### Limitations{#limitations}

The Mendix SAML SSO module does not support the following:

* SAML1.0
* Enhanced Client/Proxy SSO profile
* HTTP artifact binding for SAML requests

When using SSO connections with multiple IdPs, the SAML EntityID for your app will be shared with all connected IdPs. The SAML module does not allow you to configure different EntityIDs for each of your connected IdPs.

Some SAML services, such as eHerkenning and DigID in the Netherlands, use optional features of SAML which are not yet supported by the Mendix SAML SSO module. These include:

* Signature included as a query string parameter in URL (for HTTP-REDIRECT)
* Restriction of RelayState to 80 characters (SAML SSO may generate RelayState values that exceed 80 characters)
* ProviderName
* Scoping
* RequestedAuthnContext in the SAML requests
* HTTP-SOAP Logout Request

If you need any of these features, contact your Mendix CSM to discuss the inclusion of these features on the Mendix roadmap or the customization of the SAML SSO module.

Versions of the SAML module below 3.5.0 are limited to a single key pair. If you are using one of those older versions and you want to connect your app to multiple SAML IdPs, you cannot use different key pairs and certificates for each of the SSO federations. Instead, you must use a single key pair and certificate for all SAML IdPs. The certificate can be either a self-signed certificate or a certificate issued by a certificate authority (CA). For more details, see the [Use a Certificate Issued by a Certificate Authority](/appstore/modules/saml/advanced-configuration/#use-ca) section of *Advanced Configuration for SAML*.

If you use both the [OIDC SSO](/appstore/modules/oidc/) module and the SAML module in the same app, each end-user can only authenticate using one IdP.

The URL for downloading the SP metadata of your app is independent of the value of the EntityID that you configure for your app, which is included in the SP metadata. Instead, the metadata URL is based on the alias for the connected IdP where the SP metadata will be used.

Controlling the configuration using constants requires an app restart, and it is only possible when your app is connected to a single IdP.

Custom user provisioning flows created for a SAML V3.x are still supported in V4.x but cannot be configured during design/deploy-time.

### Prerequisites {#dependencies}

* For apps running outside of Mendix Cloud, make sure you have [external file storage](/refguide/system-requirements/#file-storage) configured.

    {{% alert color="warning" %}}The SAML module writes configuration data to a file document on the file storage to read it later. Without external file storage, this configuration will be lost when you restart your app. The SAML module will not work correctly without reading the configuration data from the file storage.
    {{% /alert %}}

* For apps running on a Microsoft Windows environment, add the following rules to the [Microsoft Internet Information Services Server Configuration](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#configure-msiis):

    ```xml
    <rule name="sso"> <match  url="^(sso/)(.*)" />
        <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" /></rule>
    <rule name="submitloginform">
    <match  url="^(SubmitLoginForm)" />
        <action type="Rewrite" url="http://localhost:8080/SubmitLoginForm">
    </rule>
    ```

### Dependencies

* [Mx Model Reflection](/appstore/modules/model-reflection/) module.
* [Encryption](/appstore/modules/encryption/) module – this is needed to encrypt the key store passwords in version 3.5.0 and above of the SAML module.
* [User Commons](https://marketplace.mendix.com/link/component/223053) module (for version 4.0.0 and above)

    {{% alert color="warning" %}}
If you are using Mendix version 10.21.1, use the User Commons module version 2.1.0 or upgrade to version 2.1.2. Version 2.1.1 of the module is a special release intended solely for Mendix version 10.21.0.
    {{% /alert %}}

## Documents in This Category
