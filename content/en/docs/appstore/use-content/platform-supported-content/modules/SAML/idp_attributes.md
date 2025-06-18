---
title: "Reference Guide for SAML IdP Configuration"
url: /appstore/modules/saml/idp-attributes
linktitle: "SAML IdP Configuration"
weight: 10
description: "Describes the list of IdP Attributes for the SAML module"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document provides you a detail description of each IdP attribute and its default value for deploy-time configuration. You need to use these attributes when configuring the SAML module to create the IdP configuration. For more details, see [Non-default Configuration](/appstore/modules/saml/#non-default).

## Identity Configuration

The **Identity Configuration** tab allows seamless integration between your application and an Identity Provider (IdP) using SAML protocols. It provides details on key settings, including **Response Protocol Binding**, **AssertionConsumerService Concept**, and **Assertion consumer service index** enabling you to optimize SAML response handling and service provider metadata configurations.

### Response Protocol Binding{#saml-binding}

You may need to choose a different SAML binding to match your IdP. You can configure the SAML binding in the **Identity Configuration** tab of the `OpenConfiguration` microflow.

By default, the SAML SSO module uses `POST_BINDING` for the SAML response. In most cases (for example, when using AzureAD) you will want to stick to this default.
Some IdPs, however, require your app to use the more secure `ARTIFACT_BINDING`.
To use artifact binding, select the ARTIFACT_BINDING option for **Response protocol binding**. This configuration helps enable the Post/Artifact binding, used as the following:

* `ProtocolBinding` attribute in Auth-request.
* `AssertionConsumerService` binding in SP-MetaData.

Using artifact binding for SAML responses at the SAML IdP is only available in the following versions of the module (depending on which Mendix version you are using)

* v3.3.0/v3.3.1 and above for Mendix 9 and 10
* v2.3.0 and above for Mendix 8

`POST_BINDING` is the default value when using an [Easy Default Flow](/appstore/modules/saml/#easy-flow).

### Use AssertionConsumerService Concept

In most cases (for example, with Entra ID), you do not want to use the AssertionConsumerService concept in requests. Some IdPs, however, require requests to include an AssertionConsumerServiceIndex. This refers to the definition of the Assertion Consumer Service in the SP metadata.

* If the **Use AssertionConsumerService Concept** is set to `No…` then Auth-Request contains the `AssertionConsumerServiceURL` and `ProtocolBinding` attributes.
* If the **Use AssertionConsumerService Concept** is set to `Yes…` then Auth-Request contains only the ‘`AssertionConsumerServiceIndex`’ attribute.
    By default, it is `No` when using a [Easy Default Flow](/appstore/modules/saml/#easy-flow).

### Assertion Consumer Service Index

Set **Assertion consumer service index** to the value you want to use for `AssertionConsumerServiceIndex` in both the Auth-Request and also in the SP-Metadata.
    The configured binding will be included in the SP metadata, as indicated in the [URLs](/appstore/modules/saml/#urls) section. The default value is `0` for the deploy time configuration.

## Attribute Consuming Service

In the **Attribute Consuming Service** tab, you can configure your app using the SAML protocol to request specific attributes, such as Date of Birth or Gender, from the SAML IdP. Your SAML IdP documentation will tell you what attributes can be requested. In the request, you can also indicate whether you consider the attribute as mandatory or optional for your app’s logic.

You can set up two sets of attributes, by adding new attributes, editing existing attributes, or removing selected attributes. These will be provided at different times. Those listed under **I want to request attribute(s) at my IDP during initial login** will be returned when the end-user initially signs in. Those listed under **I want to request attribute(s) at my IDP during in-session login** will be returned during [In-session Authentication](#in-session).
Although the typical use case for requesting attributes is to obtain information about the user, you can request an attribute with a specific value. In this case, you can configure the optional Attribute value that must be returned.

When using an [Easy Default Flow](/appstore/modules/saml/#easy-flow), disable both initial and in-session login options.

Requesting user attributes at the SAML IdP is only available in the following versions of the module (depending on which Mendix version you are using)

* v3.3.0/v3.3.1 and above for Mendix 9 and 10
* v2.3.0 and above for Mendix 8

## Encryption Settings{#encryption-settings}

* **Enable better security for app** (or *Use encryption*) – This setting controls the encryption and signing of messages being exchanged between your app (as an SP) and the IdP. This is in addition to the encryption provided by using a secure HTTPS connection. For security and privacy reasons it is enabled by default. When using the POST binding ensure the security/encryption settings remain enabled. When using the artifact binding on the responses, or if there are limitations in your IdP, it is possible to disable the security/encryption setting but we do not recommend this.

    When you use encryption, you will need to set the following values:

    * **What algorithm do you want to use to sign messages** (or *Encryption method*) – `SHA1 - RSA` or `SHA256 - RSA`
    * **Encryption key length** – 1024 or 2048 bits

        When using an [Easy Default Flow](/appstore/modules/saml/#easy-flow), default values are `SHA256 - RSA` and 2048 bits

    Enabling encryption has the following effects on messages being exchanged:

    * All the messages between your app and the IdP will be encrypted, this requires the IdP’s metadata to contain a KeyDescriptor having ‘use’ value ‘encryption’ or empty.
    * All the messages between your app and the IdP will be signed. The SP metadata exported from your app will have `AuthnRequestSigned` with value `true`. This corresponds to IdPs whose metadata have `WantAuthnRequestSigned` with value `true`
    * In the SAML SSO module versions 1.17.3 and above, 2.3.0 and above, and 3.3.0 and above, your IdP is expected to sign all SAML assertions sent to your app. The SP metadata will have `WantAssertionsSigned` with the value `true`. Any assertions that are not properly signed will be rejected. SAML’s signature inheritance is supported as well; if the SAML response message is signed by the IdP, the assertion does not need to be signed as well.

See [Managing the Keys and Key Store](#keystore), below, for additional information and options related to encryption and signing keys.

### Managing the Keys and Key Store{#keystore}

SAML implements encryption and signing using asymmetric keys. If encryption is enabled, all the certificates required for encryption are stored in the key store. When you choose **Enable better security for app** (or **Use encryption**) a key store is automatically created using the URL of the application, or the custom EntityID. Below version 3.5.0 it is shown as the **Key store alias**.

The key-pair (or pairs) for your app (as an SP) can be self-generated by the SAML module or you can upload a keypair certificate (or certificates) provided by your IdP.

{{% alert color="warning" %}}
For version 3.5.0 and above, there are separate key pairs generated for each IdP, for versions below that, the self-generated key pairs are used for all IdPs, if your app is configured to use multiple IdPs.
{{% /alert %}}

You can usually leave the key store settings as the default. The SAML module will generate distinct key pairs for signing and encryption. The module will generate new key pairs in the following situations:

* when the IdP encryption is enabled and no keypair is available, or the keypair is invalid
* when the IdP encryption key length is changed
* when you attempt to upload a keypair and the upload fails for any reason

However, there may be a requirement to use a specific key store. If you want to upload a key pair certificate, click **Upload** to upload a key store file. Use the **Entity Id** as the alias of the key store.

{{% alert color="info" %}}
For versions below 3.5.0 only:

* Resetting the key store or uploading another key store will require you to export the SP metadata and import it to all applicable IdPs.
* Click **Reset** to return the key store settings to their defaults.
* Click **Download** to download the key store file and use it when configuring other SAML SPs.
{{% /alert %}}

{{% alert color="warning" %}}
Remember to set the new key store password in the `KeystorePassword` constant of your app.
{{% /alert %}}

## Identity Provider Metadata

### Read IDP Metadata from URL

You can set up the module to re-import all IdP metadata files on a daily basis. Alternatively, you can import the metadata from a file, manually.

If you want to manually import the IdP metadata files from a URL, do the following:

* Set **Read IDP metadata from URL** to *Yes.*
* Set the **URL:** to the location where the IdP metadata is available.
* Click **Refresh Metadata**
    **The following metadata has been fetched** and will show an overview of all the information that has been found in the IdP metadata information. It is usually not necessary to do anything here, but it can be useful to review the possible IdP and SP configuration options.

If you want to automatically synchronize the IdP metadata, make sure the **SE_SynchronizeIdPMetadata** [scheduled event](/refguide/scheduled-events/) is enabled. This is in the **_USE ME** > **Scheduled Events** folder of the SAML module.
If you need to change your identity provider metadata you can find more information in the [Response Protocol Binding](#saml-binding) section.

## Request Authentication Context

On the **Request Authn Context** tab, the following settings can be used to specify the authentication context:

### Allow IdP Initiated Authentication

By default, the module does not allow for unsolicited requests. That means that every login has to be initiated from the Mendix application, and all the messages have to be exchanged using the same RequestID and RelayState. Some IdPs do not allow for the RelayState to be passed, or the authentication could be initiated by the IdP instead of at the SP. For all situations where the RelayState is not being generated or passed from the original login action at Mendix, this option should be enabled. By default, The SAML module does not allow for unsolicited requests, because that would be considered less secure.

### Enable Force Authentication

Checking this box will force the SAML IdP to (re)authenticate end-users, even if they are already signed in at the SAML IdP. Only check this box if stronger security for your app is more important than the convenience of having single sign-on for your end-users.

### Enable Mobile Authentication Token

If you are using a [hybrid mobile](/refguide9/mobile/introduction-to-mobile-technologies/hybrid-mobile/) app and you enable this, you can sign in to your Mendix hybrid mobile app after the app is closed, using an authentication token cookie. Only check this if you are using SAML on a hybrid mobile app. Note that this functionality also requires changes to the hybrid app package as described in [How To Implement SSO on a Hybrid App with Mendix and SAML](/howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/).

### ⚠ Enable Delegated Authentication {#delegated-auth}

{{% alert color="warning" %}}
This feature is deprecated.
{{% /alert %}}

When you use the SAML SSO module in your app, your app will typically be a front-end app that redirects the user to their IdP via the browser for login.
Using SAML protocols to secure the APIs of your back-end app is more challenging. We advise you to use OAuth access tokens by installing the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module instead of the SAML module. This is a common, and a best, practice.
The SAML module currently allows you to use multi-tier delegation (which makes use of the SAML ECP profile) if you need it. Your front-end app can request a token during login that has the right characteristics so it can be shared with a back-end app. This is an advanced scenario that requires in-depth knowledge of the SAML protocol and the configuration of all integrating systems to get it working.
In the SAML module, you can enable this by checking “Enable delegated authentication” on the provisioning tab. By checking this box you can access the authorized SAML token, the module will automatically keep the token alive. Only enable this functionality if you are using multi-tier delegated authentication.

If you enable this, you will need to enter the **Delegated Auth URL**.

### In-session Authentication {#in-session}

In-session authentication is a process that takes place within a session that was initiated by a (primary) end-user who signed in to your app or from within an anonymous session. This can be useful in the following situations:

* To require the primary end-user to re-authenticate shortly before they are allowed to do a critical transaction in your app
* To have a second end-user add their authentication (for example, for electronic signing) but leave the primary end-user associated with the overall session
* To let the user interact anonymously with your app at first, but ask them to identify and authenticate themselves during that session

In-session authentication at the SAML IdP is only available in the following versions of the module (depending on which Mendix version you are using)

* v3.3.0/v3.3.1 and above for Mendix 9 and 10
* v2.3.0 and above for Mendix 8

Usage of the in-session authentication changes the user roles that apply to the current session. If your app is configured with multiple IDP configurations, the in-session authentication will use the same SAML IDP as the initial (non-anonymous) session. If there is no current session, the end-user can select their IDP. In-session authentication uses the setting `ForceAuthn=true`, which means that the IdP will always authenticate an end-user even if the IdP already has a session for that end-user.

This flow can be initiated by using the URL `https://{app-url}/sso/login?action=verify`

To enable in-session authentication, you need to use the `OpenConfiguration` microflow to configure two microflows in the SAML SSO module:

### Custom Prepare In-session Authentication Microflow

Set **Custom Prepare In-Session Authentication microflow** to `CustomPrepareInSessionAuthentication`.

The `CustomPrepareInSessionAuthentication` microflow sets up specific data in the current user session so that it can be recovered after the SAML in-session authentication flow returns to the app. The microflow can use the context information that is passed via the `on` query parameter.

### Custom Evaluate In-Session Authentication Microflow

Set **Custom Evaluate In-Session Authentication microflow** to `CustomEvaluateInSessionAuthentication`.

The `CustomEvaluateInSessionAuthentication` microflow implements the logic that handles the authentication details of the in-session authentication. The SAML SSO module comes with an empty default `EvaluateInSessionAuthentication` flow, which can be enhanced to combine information from the original session with information received in the assertion from the in-session authentication.

### Disable NameID Policy

**Disable Name ID Policy** – Check this box to disable the use of a name ID policy. This means you will use another attribute or claim to identify users.

If you check this box, you will not be able to set the **Preferred name id**.

### Authentication Context Comparison

You can configure the comparison method used to evaluate the requested context classes or statements, one of "exact", "minimum", "maximum", or "better". See section 3.3.2.2.1 of the [Core SAML specifications](https://www.oasis-open.org/committees/download.php/56776/sstc-saml-core-errata-2.0-wd-07.pdf).

### Authentication Context Classes

This passes the allowed authentication methods. This has to be whatever the IdP requests, as there are no requirements within this module and all options are available. You should only pass the options which are needed as passing all options leads to significantly bigger (and slower) message exchange.

## User Provisioning

For information, see the [User Provisioning](/appstore/modules/saml/#user-provisioning) section of the *SAML* document.

## Read More

* [SAML](/appstore/modules/saml/)
* [Advanced configuration for SAML](/appstore/modules/saml/advanced-configuration/)
