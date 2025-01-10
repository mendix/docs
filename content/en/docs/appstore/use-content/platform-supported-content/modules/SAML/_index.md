---
title: "SAML"
url: /appstore/modules/saml/
description: "Describes the configuration and usage of the SAML module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [SAML](https://marketplace.mendix.com/link/component/1174/) module can be used to give end-users access to your Mendix application based on their identity in your Identity Provider (IdP). A Mendix application that uses the SAML SSO module will delegate user login to your Identity Provider using SAML 2.0.

By configuring the information about all identity providers in this module, you will allow the users to sign in using the correct identity provider (IdP). There is no limit on the number of different identity providers you can configure.

{{% alert color="info" %}}
For new apps built on Mx9 or Mx10 using Atlas UI V3, you need to use version 4.0.0 of the SAML module.
{{% /alert %}}

{{% alert color="info" %}}
Mendix also offers an [OIDC SSO](/appstore/modules/oidc/) module if you want to authenticate your end-users using the OAuth/OpenID Connect protocol. Overall, the OIDC SSO module is easier to use and customize if needed, so Mendix recommends considering [OIDC SSO](https://marketplace.mendix.com/link/component/120371).
{{% /alert %}}

### Typical Use Cases

The following use case are supported by both  SAML and OIDC SSO module:

* Your app is aimed at your company’s employees and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IdP).
* Authenticating against your Microsoft Active Directory server in a secure manner utilizing the SAML capabilities of Active Directory Federation Services (ADFS) — the SAML protocol allows for the encryption of all information transferred between the two servers, so VPN connections, LDAP, or Kerberos authentication are no longer needed.

The following use cases are supported by SAML:

* Implementing SSO in your Mendix App through a Shibboleth identity Provider.
* Identifying the end-users of your Mendix app through SAML-enabled national identity schemes such as eHerkenning, a Dutch eID scheme for B2B or B2G scenarios, or DigiD, which gives Dutch citizens access to (semi) governmental services.

    {{% alert color="info" %}}Some of these identity schemes use optional features of SAML which are not yet supported in the SAML SSO module — see [Limitations](#limitations) for more information.{{% /alert %}}

* Authenticating within a Mendix session — for example requiring end-users to re-authenticate shortly before they are allowed to do critical transaction in your app or having a second user authenticate within the context of the first user’s session in your Mendix app
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

2. For encryption of SAML messages the following options are supported:

    * No Encryption
    * 1024 or 2048 bit encryption
    * SHA1 or SHA256 algorithms

#### Usage of SAML metadata

The Mendix SAML SSO supports usage of SAML metadata in the following way:

* Daily synchronization of the IdP metadata, so your Mendix app will always have the latest IdP metadata.
    * For daily synchronization of IdP metadata, configure the `SE_SynchronizeIdPMetadata` scheduled event. For local development this can be done from Studio Pro. In Mendix Cloud, you can do this on the [Environments Details](/developerportal/deploy/environments-details/#model-options) page for your app.
* Downloading of the metadata for your Mendix application that acts as an SP in the SAML protocol.

#### SAML Module Configuration Feature

For easy configurability, the SAML module offers the following:

* From the version 4.0.0 of the SAML module, if you want to connect your Mendix application with single IdP, you can do the necessary configurations at design time (using a microflow) and/or deploy-time using Application Constants. This is described in section [Non-default Configuration](#non-default)
* You can create a custom SAML configuration microflow and share it across all SAML applications in your portfolio, such as by using a custom module in your private marketplace. This approach makes SAML configurations both automatable and repeatable.
* Runtime configuration by a local Admin is still available in below cases:

    * If you want to connect multiple IdPs with your SAML app.
    * If you want to upload a keypair for your app.
    * If errors occur during deploy-time SSO configuration via the Cloud Portal, it may be easier to refine the setup through Admin screens and then adjust deployment constants.
* A SAML administration screen that allows you to configure one or multiple SAML IdP’s. IdP discovery is supported by an endpoint that returns a page listing all configured IdPs so the end-user can select the IdP where they have an account.

#### Other Features

* The SAML module keeps a log/audit trail of login attempts. These can be downloaded.
* The SAML module allows you to have an SSO connection with multiple SAML IdPs. Each IdP can have its own keypair.
* SAML module versions 3.5.0 and above (compatible with Mendix version 9.22.0 and above) support multiple keypairs.

### Limitations{#limitations}

The Mendix SAML SSO module does not support the following:

* SAML1.0
* Enhanced Client/Proxy SSO profile
* HTTP artifact binding for SAML requests

When using SSO connections with multiple IdPs, the SAML EntityID for your app will be shared with all connected IdPs. The SAML module does not allow you to configure different EntityID's for each of your connected IdPs.

Some SAML services, such as eHerkenning and DigID in the Netherlands, use optional features of SAML which are not yet supported by the Mendix SAML SSO module. These include:

* Signature included as a query string parameter in URL (for HTTP-REDIRECT)
* Restriction of RelayState to 80 characters (i.e. SAML SSO may generate RelayState values that exceed 80 characters)
* ProviderName
* Scoping
* RequestedAuthnContext in the SAML requests
* HTTP-SOAP Logout Request

If you need any of these features, contact your Mendix CSM to discuss inclusion of these features on the Mendix roadmap or customization of the SAML SSO module.

Versions of the SAML module below 3.5.0 are limited to single keypair. If you are using one of those older versions and you want to connect your app to multiple SAML IdPs, you cannot use different key pairs and certificates for each of the SSO federations. Instead, you must use a single key pair and certificate for all SAML IdPs. The certificate can be either a self-signed certificate or a certificate issued by a certificate authority (CA). For more details, see the [Use a Certificate Issued by a Certificate Authority](/appstore/modules/saml/advanced-configuration/#use-ca) section of *Advanced configuration for SAML*.

If you use both the [OIDC SSO](/appstore/modules/oidc/) module and the SAML module in the same app, each end-user can only authenticate using one IdP.

The URL for downloading the SP metadata of your app is independent of the value of the EntityID that you configure for your app which is included in the SP metadata. Instead, the metadata URL is based on the alias for the connected IDP where the SP metadata will be used.

Controlling the configuration using constants requires an app restart and it is only possible when your app is connected to a single IdP.

Custom user provisioning flows created for a SAML V3.x are still supported in V4.x but cannot be configured during design/deploy-time.

### Prerequisites {#dependencies}

* Install and configure the [Mx Model Reflection](/appstore/modules/model-reflection/) module.
* Install and configure the [Encryption](/appstore/modules/encryption/) module – this is needed to encrypt the key store passwords in version 3.5.0 and above of the SAML module.
* Install and configure the [User Commons](https://marketplace.mendix.com/link/component/223053) module (for version 4.0.0 and above)
* For apps running outside of Mendix Cloud, make sure you have [external file storage](/refguide/system-requirements/#file-storage) configured.

    {{% alert color="warning" %}}The SAML module writes configuration data to a file document on the file storage to read it later. Without external file storage, this configuration will be lost when you restart your app. The SAML module will not work correctly without reading the configuration data from the file storage.
    {{% /alert %}}

* For apps running on a Microsoft Windows environment, add the following rules to the [Microsoft Internet Information Services Server Configuration](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#configure-msiis):

    ```xml
    <rule name="sso"> <match  url="^(sso/)(.*)" />
        <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" /></rule>
    <rule name="submitloginform">
    <match  url="^(SubmitLoginForm)" />
        <action type="Rewrite" url="http://localhost:8080/SubmitLoginForm>
    </rule>
    ```

## Installation

There are different versions of the SAML module, depending on which version of Mendix you are using. To find and install the correct release, follow these steps:

1. In Mendix Marketplace, search for the [SAML module](https://marketplace.mendix.com/link/component/1174/).
2. In the **Documentation** tab, the *compatibility guidance* section indicates the latest recommended version for your LTS/MTS Mendix release. These guidelines are updated with each release of the SAML module, and you should refer to them to choose the version of the module that is compatible with your app. For additional information, some general considerations are listed below:

    * For Mendix 8, you should use the latest published versions in the **2.x** range, unless otherwise indicated in the **Documentation** tab.
    * For Mendix 9, there are odd- and even-numbered patch releases that contain the same changes and require the same Mendix version, but differ based on the version of Atlas UI that your app uses:

        * The even-numbered releases (for example, 3.6.2) are intended for apps that use the 2.0 version of Atlas UI, that is, apps which were originally built on a version of Mendix below 9.0.0, and then upgraded to Mendix 9.
        * The odd-numbered releases (for example, 3.6.3) are for new apps that are built using Mendix 9 and are using version 3.0 of Atlas UI.

    * For Mendix 10, you should use the latest versions of the module that is compatible with the 3.0 version of Atlas UI (that is, the version for apps newly built on Mendix 9 or newer). These are currently the same as the odd-numbered releases mentioned above for Mendix 9; in future releases of the SAML module, there will be separate versions of the module dedicated for Mendix 10.

        Mendix 10 does not support the 2.0 version of the Atlas UI, so you should never use the even-numbered (Atlas 2.0-compatible) SAML patch releases with your Mendix 10 app.

3. To download the required release, in **Releases** tab, find the release that is compatible with your app per the guidelines in the **Documentation** tab, and then click the **Download** button by the number of the release.
4. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the SAML module into your app.

### Post-Installation Configuration Steps

By default, the SAML module will be installed as the **SAML20** module in your app’s Marketplace modules. You can find all microflows and other configuration elements in this module.

1. Configure the **Startup** microflow in the SAML module (**SAML20.Startup**) to run as (part of) the [After startup](/refguide/app-settings/#after-startup) microflow. This microflow will initialize the custom request handler `/SSO/` (please note the importance of using the final `/` for all instances of `/SSO/`), validate all IdP configurations, and prepare the configuration entities required during the configuration.
2. If you have set up path-based access restrictions in your cloud (for example [Path-Based Access Restrictions](/developerportal/deploy/environments-details/#path-based-restrictions) in Mendix Cloud), ensure that access to `/SSO/` is allowed.
3. Add the **OpenConfiguration** microflow to the navigation, and then allow the administrator to access this microflow.
4. Review and configure all the constants:
    * **DefaultLoginPage** – You can specify a different login page here for when the login process fails. When the end-user cannot be authenticated in the external IdP, a button will appear, and by clicking this button, they will be redirected to the specified login page. If this is left blank, an unauthenticated user will be redirected to `/login.html`.
    * **DefaultLogoutPage** – Removing the sign-out button is recommended, but if you choose to keep it, the end-user will be redirected to a page. You can choose where the end-user is redirected to (for example, back to `/SSO/` or your `login.html` page). Every user signed in via SAML is redirected to this location when they are logged out.
    * **SSOLandingPage** – Set this if you redirect the `index.html` to log into your app automatically. See [Using SSOLandingPage](#ssolandingpage) for further information about this.
    * **HybridAppLoginTimeOutInMinutes** –
        * If you use the default login handler in your [hybrid mobile](/refguide9/mobile/introduction-to-mobile-technologies/hybrid-mobile/) app, you must change the `com.mendix.webui.HybridAppLoginTimeOut` custom runtime setting to change the validity of the authentication token used by the hybrid mobile app.
        * If you use the SAML module in your hybrid app, you must change the `SAML20.HybridAppLoginTimeOutInMinutes` constant to change the validity of the authentication token used by the hybrid mobile app.
        * If you use both the default login handler and the SAML module in your hybrid app, you must change both so that they match. This is because, when you use the SAML module for SSO in your Mendix app, the authentication token is not created by the Mendix runtime, which uses the custom runtime setting. Instead, the authentication token is created by the Java code in the SAML module. This Java code does not have access to the custom runtime setting value, and thus requires the constant value to be set.

            Only use this setting if you are using SAML on a hybrid mobile app. Note that this functionality also requires mobile authentication tokens to be enabled in your IdP Configuration as well as changes to the hybrid app package as described in [How To Implement SSO on a Hybrid App with Mendix and SAML](/howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/).

        {{% alert color="warning" %}}Hybrid mobile apps are not available in Mendix 10.{{% /alert %}}

5. Sign in to the application and configure the SAML module as described in the [Configuration SAML Module](#config) section.

### Using SSOLandingPage{#ssolandingpage}

You can use single sign-on (SSO) to automatically sign users in to your app by redirecting every user accessing `index.html` to the Mendix `/SSO/` endpoint. To do this, you need to add `<meta http-equiv="refresh" content="0;URL=/SSO/" />` to the `index.html` file.

{{% alert color="info" %}}
For Mendix 9 and 10, there is no `index.html` file, so you need to create this file first. You can find instructions on how to do this in the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section of *Customize Styling*.
{{% /alert %}}

If you use this method, do not forget to set the **SSOLandingPage** constant to a value different than `index.html`. Otherwise, the app will come back to `index.html` which will be redirected again to single sign-on, resulting in an endless loop. **SSOLandingPage** specifies a different landing page so the end-user does not end up on `index.html` again after a login attempt. Mendix recommends changing this constant to `/index3.html` and create an `index3.html` page in your `/theme` folder and copy contents of the original `index.html` (without the added redirect) into it. The authenticated end-user will then land on `index3.html` which will display the content of the app. If the user authentication fails, the user will be directed to the **DefaultLoginPage** instead.

{{% alert color="info" %}}If you want to redirect users who have not yet signed in automatically to `/SSO/` when opening `index.html`, while still allowing users to open `login.html` directly and sign in using a local account, bypassing single sign-on, then you should not add `<meta http-equiv="refresh" content="0;URL=/SSO/" />` to the `index.html` file as described above; instead, you should edit the `index.html` file by changing the URL within the `originURI` to `/SSO/`, for example: `document.cookie = "originURI=/SSO/" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");`. This cookie determines to which location the Mendix Client will redirect users when they need to sign in. If you have already signed in, you are not redirected again.{{% /alert %}}

### Upgrading from SAML 3.X to 4.X

{{% alert color="info" %}}If you are using Mendix 10.12.10 and above, ensure you are using version 4.0.0 or above of the SAML module.{{% /alert %}}

The table below introduces you several key updates when you upgrade SAML module from V3.x to V4.x.

| Feature | Changes in Version 4.0.0 |
| --- | --- |
| SSO Configuration | You can now perform SSO configuration during design-time and deploy-time. <br>Introduced deploy-time configuration and `Custom_Create_IdPConfiguration` microflow for customized SSO configuration. |
| Admin Screen Restructuring | The **Mapping** tab has been removed. Equivalent configurations can now be completed on the **User Provisioning configuration** tab. <br> `evaluateMultipleUserMatches` microflow is now moved to the **User Provisioning** tab.
| User Commons Module Integration | 1. The SAML module now integrates with the User Commons module, offering a more uniform experience with the OIDC SSO module. <br>2. A new method for creating custom user provisioning microflows using User Commons simplifies development and allows you to automatically set the user-type for users <br> 3. Deprecated: SAML 3.x provisioning flows will be unsupported in future versions. It’s recommended to create new provisioning flows using User Commons after upgrading.<br> 5. From UserCommons 2.0.0, new users without IdP-specified time zone or language will use default App settings; existing users retain their previously set values.|
| InCommon Federation Support | Pre-configured support for InCommon Federation has been removed. You now need to create custom user provisioning microflows in version 4.0.0 |

## Configuring SAML Module{#config}

Configuring SAML module is crucial for setting up secure authentication within your application. It involves reviewing and updating the Service Provider (SP) settings and creating or updating the Identity Provider (IdP) configuration.

In versions below 3.6.9 of the SAML module, configuration can be done using the app pages – see the [Using SSO Landing pages](#ssolandingpage) section above. However, in version 4.0.0 and above, you have the option to use constants or custom microflows to configure your app at deploy time.

This section explains three different ways to complete the deploy-time configuration of the SAML module. The [Easy Flow configuration](#easy-flow) offers a default and straightforward setup, while the [Non-default configuration](#non-default) enables customization of the IdP configuration by implementing custom microflows. Alternatively, in the [Runtime Configuration Flow](#runtime-config), you can deploy your app first and then complete the configuration within the app interface.

{{% alert color="info" %}}
For IdP configuration, during deploy-time ([Easy default](#easy-flow) and [Non-default flow](#non-default)), users are not allowed to edit the fields except for the **Encryption Settings**. This can lead to a mismatch in the fields when they run the application.
{{% /alert %}}

### Easy Default Flow{#easy-flow}

This configuration offers simple and default settings. It is the ideal configuration for quickly implementing the SAML module, particularly for users aiming to kickstart their SSO application. With this approach, users can create an SSO app in the IdP without complete dependency on SP metadata. The following sub-sections guide you through the detailed configuration steps:

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/Easy-default.png" >}}

#### Creating SP Manually at Your IdP{#create-sp-manually}

To enable the single sign-on (SSO) method as SAML 2.0, you need to manually create an application on the IdP server.

In the new application, configure the following fields and get the IdP metadata URL:

* Single Sign-On URL: This should be your application URL.
* Audience URI (SP Entity ID): By default, this is set to the application URL.
* Other Requestable SSO URLs (Callback URLs): This should be set to `<Application URL>/SSO/assertion`.
* Index: The default value is zero. Ensure it matches the value you set for the **Assertion Consumer Service Index**.

After creating an application, you will receive an IdP metadata URL. This URL is used in the IdP configuration to **Read IdP metadata from URL**.

To kickstart the SAML module with Okta, refer to the images below. Ensure to log in with [Okta Developer](https://developer.okta.com/) credentials.

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/saml-okta.png" >}}

To connect [Azure](https://portal.azure.com/#home) with SAML, refer the below image. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/saml-azure.png" >}}

For IdP configuration, the default value for **Assertion consumer service index** is *0*. Set the corresponding value *0* for the **Index**.

The setup described above, offers default configurations to start the SAML module. Any changes made to the configuration will require adjustments to other configuration details accordingly.

#### Setting up Eight Mandatory Constants{#setup-eight-constants}

To configure the Service Provider (SP) and Identity Provider (IdP) metadata, you need to set up eight mandatory constants. In the **App Explorer** of your Mendix app, you can find the following six constants within the **SPConfiguration** > **USE_ME** folder. These constants are used to configure the SP Metadata.

* `Org_Name`: This constant represents Name. 
* `Org_DisplayName`: This constant represents Display Name. 
* `Org_OrganizationURL`: This constant represents Organization URL. 
* `Org_GivenName`: This constant represents Given Name. 
* `Org_Surname`: This constant represents Surname. 
* `Org_Emailaddress`: This constant represents Email address. 

The following constants in the **IdP Configuration** > **USE_ME** folder help configure IdP metadata.

1. IdPAlias
2. IdPMetaDataURL

If you provide values for the above constants, the SAML module will automatically generate the required/default additional configurations with the help of `Default_CreateIDPConfiguration` microflow.

#### Deploy the Application and Login with SSO{#deploy-application}

After configuring the eight constants, you need to deploy the application. For details, see the [Deploying the App](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/) section in the *Deploying an App to Mendix Cloud*. Once deployed, you can now log in to your application using SSO.

{{% alert color="info" %}}It is recommended to modify the values using constants. Any changes made from the runtime screen will be overwritten by the constant values upon restarting the app.{{% /alert %}}

### Non-default Configuration{#non-default}

The [Easy Default Flow](#easy-flow) section above, gives you an overview of the default settings. If you have requirements to deviate from these defaults, for example, to enable Force Authentication, change encryption settings from the default, or support multiple Identity Providers (IdPs), Non-default configuration setup offers advanced options for your SAML integration needs. With these features, you can customize the SAML configuration to meet your specific requirements.

In this configuration, you have several options to customize the Identity Provider (IdP) settings. Firstly, you can configure the IdP using constants. Additionally, the SAML module supports further customization of the IdP configuration through the implementation of a custom microflow called `Custom_Create_IdPConfiguration`. To do this, create a new object in the `Custom_Create_IdPConfiguration` microflow and add your own custom values in it. `Dep_IdPConfiguration.return` microflow returns a list of configured IdPs, which the SAML module then uses to generate the necessary SSO configurations for multiple IdPs.

In this configuration, users have the flexibility to introduce your own constants by creating custom IdP configurations. To enable this configuration, you need the IdP metadata obtained by creating an SSO app in the IdP without complete dependency on SP metadata.

Follow the steps mentioned in the [Easy Default Flow](#easy-flow) with an additional custom configuration in Studio Pro. After [setting the eight mandatory constants](#setup-eight-constants), proceed with the [custom configuration](#custom-config).

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/non-default.png" >}}

#### Creating custom configuration{#custom-config}

This module uses non-persistence entity names starting with `Dep_`

Following entities are used to create IdP configurations:

* `Dep_IdPConfiguration`: IdP details
* `Dep_SPAttribute`: List of Attribute Consuming Service requested attribute
* `Dep_SAMLAuthnContext`: List of SAMLAuthnContext
* `Dep_IdpAttributeEntityAttributeMapping`: List of Attribute Mapping

Below table shows you the different attributes and their values for the quick reference. You can see the details of these attributes of above entities in the [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/) document.

| IDPConfiguration(Non-Persistable entity) | Description | Default Value |
| --- | --- | --- |
| **Alias** (mandatory) | This represents IdPconfiguration Alias | |
| **ResponseProtocolBinding**  | Response protocol binding, contains caption value of SAML20.Enum_ProtocolBinding | POST_BINDING |
| **EnableAssertionConsumerServiceIndex** | EnableAssertionConsumerService Concept, contains caption value of SAML20.Enum_AssertionConsumerServiceIndex | NO |
| **AssertionConsumerServiceIndex** | This should hold the same value for the SAML configuration and the IdPs. | 0 |
| **EnableInitialLoginAttributeConsumingService** | This will be returned when the end-user initially signs in | FALSE | 
| **InitialLoginServiceName** |  It represents the Initial login Attribute Consuming Service name | Service1 | 
| **InitialLoginAttributeConsumingServiceIndex** | It represents the Initial login Attribute Consuming Service Index | 1 | 
| **InitialLoginDep_SPAttribute_Dep_IdPConfiguration** | It will display the details of Value, Name, IsRequired details | | 
| **EnableInSessionAttributeConsumingService** | To enable this feature, configure at least one request attribute for the in-session attribute consuming service. | FALSE | 
| **InSessionServiceName** | It represents the In-Session Attribute Consuming Service name | Service2 |  
| **InSessionAttributeConsumingServiceIndex** |  It represents the In-Session Attribute Consuming Service Index | 2 | 
| **InSessionDep_SPAttribute_Dep_IdPConfiguration**| It will display the details of Value, Name, IsRequired details | | 
| **IdPMetadataURL** (mandatory) | This represents the URL of the IdPMetadataURL | | 
| **PreferredEntityDescriptor** | It represents the entityID of the EntityDescriptor | | 
| **AllowIdpInitiatedAuthentication** | Authentication should start at this application, which generates an ID. The authenticated response should match this generated Id. If no request can be found that matches the response Id the information is rejected. If your IdP can initiate a new transaction (with a new or no Id) and you want to allow this you can check this box. | FALSE |
| **EnableForceAuthentication** | will force the SAML IdP to (re)authenticate end-users, even if they are already signed in at the SAML IdP. | FALSE |
| **EnableMobileAuthToken** | If enabled, an auth token cookie will be set on login that can be used by Mendix hybrid mobile apps to log in after the app is closed. | FALSE |
| DelegatedAuthenticationURL | This will allow you to use a SAML token and delegate the authentication through SAML. | |
| **CustomPrepareInSessionAuthenticationMicroflow**  | This represents the Custom Prepare In-Session Authentication microflow. It sets up specific data in the current user session so that it can be recovered after the SAML in-session authentication flow returns to the app. | |
| **CustomEvaluateInSessionAuthenticationMicroflow**  | It implements the logic that handles the authentication details of the in-session authentication. | |
| **NameIDFormat** | This attribute represents the Description of SAML20.NameIDFormat. Disable NameID policy is true when this attribute (NameIDFormat) is invalid. | |
| **AuthenticationContext** | It represents Authentication context comparison, contains caption value of SAML20.TypeOfAuthnContext | Exact (Default) |
| **UserEntity** | The Mendix entity in which you will store and look up the user account. | Administration.Account |
| **UserPrincipalAttribute** | Determines the attribute on which you want to do the lookup in Entity attributes. | Name |
| **UserIdPPrincipalAttribute** | We need to provide the attribute which contains the user name which uniquely identifies the user. It should be Assertion Name | UseNameID |
| **CreateUsers** | The module will always search for the user, based on the Identifying Assertion. You can allow the module to create users with a predefined user role. If you allow the module to create users, it will automatically create a new user account if the user cannot be found. If the module is not allowed to create users, it will present a message to the user stating that the login action was successful but no user has been configured. | true |
| **UserRoleName**  | This role will be assigned to newly created users. | User |
| **UserType** | Assign usertype to the created users | Internal |
| **CustomUserProvisioning**  | This is an optional configuration to run a microflow to persist user information in your app model using some of your own specific logic. First, you need to develop a custom microflow in your app and select it for the CustomUserProvisioning | |
| **CustomAfterSigninLogic**  | Checking the box will execute the `CustomAfterSigninLogic microflow`. You can replace the default with your custom microflow below. This microflow runs after a new session is created, allowing you to copy or review data from the original (anonymous) session to the new session or user. This functionality is similar to the after sign-in microflow in Mendix project security. Only custom microflows starting with 'Custom' will appear in the list | |
| **UseEncryption**  | Enable better security for app | TRUE |
| **EncryptionMethod**  | This represents the Encryption Algorithm | SHA256 - RSA |
| **EncryptionKeyLength**  | This constant represents the Encryption length | 2048 bits |
| Active | After completion of Idp config it will make the Toggle Active | true |

Deploy the application and login with the SSO. For more information, see the [Deploy the Application and Login with SSO](#deploy-application) section above.

### Runtime Configuration Flow{#runtime-config}

This process involves configuring both the Identity Provider (IdP) and the Service Provider (SP) metadata to establish secure authentication for the user. In some IdPs, SSO app creation is not allowed without having SP metadata. This configuration method is ideal for such scenarios. The following subsections provide you detailed instructions on integrating your application with SSO:

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/runtime-config.png" >}}

#### Deploy Your Application and Login with Application Admin

Deploy your application and log in with the application Admin account. Click **SAML**; currently, no configurations are available.

#### Configuring Steps

1. Navigate to the **Model Reflection**, select the required module from the left navigation pane, and select **Click to refresh** to synchronize entities and microflows.
2. In the **SP Configuration** tab, provide the necessary values and click **Save**. You need to complete this step before proceeding for IdP Configuration.
3. In the IdP Configuration tab, click **New** and provide the necessary details. For more information on IdP configuration tabs, see the [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/) document.
4. From version 4.0.0 of the SAML module, you have the option to download the SP Metadata from **Encryption Settings** tab, **Identity Provider Metadata** tab, and at the end of the configuration process.

#### Downloading and Uploading SP Metadata Manually

After completing the IdP configuration, download the SP metadata. Upload the SP metadata details to the IdP provider, either via URL or by downloading the SP metadata XML file provided. This typically involves transferring the file to the IdP provider responsible for configuring authentication on the IdP server.

{{% alert color="info" %}}
The XML for the SP metadata is signed. If you make any changes to the metadata (even just opening it in an editor) this can mean that the signature no longer matches the content, and the metadata will be rejected.
{{% /alert %}}

#### Downloading and Uploading IdP Metadata Manually

Once you configure and upload the SP metadata, On the **Identity Provider Metadata** tab of the application, you can upload the IdP metadata. This can be done by either using IdP metadata URL or uploading an XML file.

With the completion of these steps, your application is now configured for SSO.

{{% alert color="info" %}}
After each restart, the configuration will be automatically updated to reflect any changes made in custom microflows or constants.
{{% /alert %}}

## Configuring IdP Specific Settings{#idp-specific-settings}

Before configuring any IdP, you need to configure the Service Provider (SP), which is your current application. The SP configuration allows you to configure some basic information for the SP metadata file. This information will be available to the IdP administrator for reference.

Each IdP should have its own configuration set. Every IdP can be configured and enabled separately. All changes made in the configuration are immediately applied when you save the configuration.

 If you have multiple IdPs, please make sure each IdP has a unique **Entity descriptor**. If you add multiple IdPs with the same entity descriptor, you might experience unexpected behavior where a different SSO configuration is selected than the alias provided.

When creating a new IdP configuration, you are guided through a workflow to help you configure everything required for the IdP configuration. Each option in the workflow is explained below and can be changed by editing an existing IdP Configuration.

Use **Previous** to go back to the previous dialog or **Cancel** to abandon your changes. Click **Save** on the last step to save the configuration.

### Downloading SP Metadata

Upon completing IdP configurations steps above, you only need to send the SP metadata file to the IdP and have them configure the authentication on their end. The SAML module generates separate SP metadata for every connected SAML IdP (see [Configuring the IdP-Specific Settings](#idp-specific-settings)). The SP metadata for your app can be obtained by clicking **Download SP Metadata** on the final configuration step (or in the **Identity Configuration**, **Encryption Settings**, or **Identity Provider Metadata** tab) to download the XML file or by opening `http://<Application Root URL>/SSO/metadata/<IDP-Alias>` for your app’s URL.

{{% alert color="info" %}}
The XML for the SP metadata is signed. If you make any changes to the metadata (even just opening it in an editor) this can mean that the signature no longer matches the content, and the metadata will be rejected.
{{% /alert %}}

### Additional Settings

The following settings apply to the IdP configuration:

* **Alias** – The alias for your IdP can be used in the URL of the application to indicate the IdP configuration that should be used during login. The alias must be unique, but you should also make sure that this alias is compatible with usage in an URL (meaning, no `/`, `&`, `?`, or special character that could get lost in the communication).

* **Log SAML Requests** – Determines whether all requests and login attempts should be logged and stored in an entity.

 When you add a new configuration or change an existing one, you should restart your app. This ensures that the correct configuration is used.

## User Provisioning{#user-provisioning}

Initially your app will not have any end-users. The SAML module provides so-called Just-In-Time (JIT) user provisioning. This means that an end-user will be created in your app when they log in for the first time. If you do not want JIT user provisioning, it is possible to disable it as described in the section [Custom User Provisioning at Runtime](#custom-provisioning-rt) below.

By default, end-users are provisioned using the Account object in the Administration module. If you need to use a custom user entity, you can do this via [Custom User Provisioning Using a Microflow](#custom-provisioning-mf) or (in version 2.4.0 and above) [Custom User Provisioning at Deploy Time](#custom-provisioning-dep) or [Custom User Provisioning at Runtime](#custom-provisioning-rt).

### Default User Provisioning

This applies the following mapping:

| ID-token Provided by your IdP | Attribute of `Administration.Account` Object |
| --- | --- |
| nameID | Name |

### Custom User Provisioning{#custom-provisioning}

If you create custom user entities as specializations of the `System.User` entity, you can store user information that is more extensive than is possible with the `System.User` or `Administration.Account` entities. You can use these specializations as target entities for end-user provisioning using one of the methods described below.

If you connect multiple IdPs to your Mendix app, you can use separate custom user entities for each IdP, each with its own attribute mapping.

### Custom User Provisioning Using a Microflow{#custom-provisioning-mf}

Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > 1. **Configuration** folder of the SAML module. This is where you can change the way that end-users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `Administration.Account` object for the end-user. This is set as the return value of the microflow. You can find examples included in the **USE_ME** > 1. **Configuration** > **User Provisioning Examples** folder.

Make a single call from `CUSTOM_UserProvisioning` to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of the SAML module over time without overwriting your custom provisioning.

The SAML module supports multiple IdPs. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. See the microflow `UserProvisioning_Sample` for an example and details on how to do this.

### Custom User Provisioning at Deploy Time{#custom-provisioning-dep}

{{% alert color="info" %}} This feature is available in version 2.4.0 and above {{% /alert %}}

You can set up custom user provisioning by setting constants when you deploy your app. This has the following limitations compared to setting up provisioning using a microflow or changing the settings at runtime:

* You will need to restart your app to apply changes to the constants
* You cannot set custom mapping of IdP claims to attributes of your custom user entity

You can set up custom user provisioning by setting the following constants. You can set default values when you build your app, but can override these in the app's environment.

| Constant | Use | Notes | Example |
| --- | --- | --- | --- |
| CustomUserEntity | a custom user entity | in the form `modulename.entityname` – a specialization of `System.User` | `Administration.Account` |
| PrincipalAttribute | the attribute holding the unique identifier of an authenticated user | | `Name` |
| IdPAttribute | the IdP claim which is the unique identifier of an authenticated user | *Default* | `NameId` |
| AllowcreateUsers | allow to create users in the application | *Optional* | `True` |
| Userrole | the role which will be assigned to newly created users | *Optional* | `User` |
| UserType | assign user type to the created users | *0ptional* | `Internal` |
| CustomUserProvisioning | a custom microflow to use for user provisioning | *0ptional* – in the form `modulename.microflowname` – the microflow name must begin with the string `CustomUserProvisioning` | `Mymodule.CustomUserProvisioningEntra` |

### Custom User Provisioning at Runtime{#custom-provisioning-rt}

{{% alert color="info" %}} This feature is available in version 4.0.0 and above {{% /alert %}}

You can set up custom user provisioning by selecting the **IdP Configuration** tab of SAML module. Select configuration and you can see the **User Provisioning** tab.

1. Set up the following information in the **User Provisioning** tab:

    * **Custom user Entity (extension of System.User)** – the Mendix entity in which you will store and look up the user account. If you are using the [Administration module](https://marketplace.mendix.com/link/component/23513) this would be `Administration.Account`.
    * **The attribute where the user principal is stored** – unique identifier associated with an authenticated user. 
        * By default, the value is set to *Name*.
    * **Allow the module to create users** – This enables the module to create users based on user provisioning and attribute mapping configurations. When disabled, it will still update existing users. However, for new users, it will display an exception message stating that the login action was successful but no user has been configured.
        * By default, the value is set to *Yes*.
    * **User role** – the role which will be assigned to newly created users.
    * **User Type** – this allows you to configure end-users of your application as internal or external.
        * By default, the value is set to *Internal*.
2. Under **Attribute Mapping**, for each piece of information you want to add to your custom user entity, select an **IdP Attribute** (claim) and specify the **Configured Entity Attribute** where you want to store the information.

    Note the following:

    * You cannot use the IdP claim which is the primary attribute identifying the user and you cannot use the attribute you set in **The attribute where the user principal is stored**.
    * You can map multiple **IdP Attribute** (claims) to a **Configured Entity Attribute** but you cannot map a new **IdP Attribute** to a **Configured Entity Attribute** if it is already mapped.
    * The IdP Attribute is one of the fixed claims supported by the [OIDC SSO](/appstore/modules/oidc/) module.
    * **IdP Attributes**(Claims) cannot be of type enum, autonumber, or an association.

3. In the **Custom UserProvisioning**, select a microflow you want to run for [Custom User Provisioning Using a Microflow](#custom-provisioning-mf). The custom microflow name must begin with the string `UC_CustomProvisioning`. If you have added a new microflow, you will need to refresh the module containing your microflow as described in [Installing Mx Model Reflection](/appstore/modules/model-reflection/). This selection can be blank if you do not want to add custom logic.
4. Click **Save** to save the configuration.

### Custom Behavior

This section describes the microflows that you may want to customize if needed.

#### evaluateMultipleUserMatches

The module tries to look up the user that matches the provided user name. When multiple `System.User` records are found, this microflow is always executed.

It is possible to customize this microflow to determine the correct user. Whichever user instance is returned will be signed in to the application (and passed on to any other microflow).

#### CustomUserProvisioning {#customuserprovisioning}

When selecting in the SSO configuration to run the `customUserProvisioning` action (previously known as `CustomLoginLogic`), you can update the new or retrieved user with additional information from the assertion. All the assertions are passed into the microflow in the parameter `AssertionAttributeList`, and these can be transformed and stored in the user record. Also, additional roles can be granted to the users based on the assertion attributes.

#### CustomAfterSigninLogic

After a new session is created for the user, this microflow can be called to copy any data from the previous session to the new session. This microflow behaves similarly to the platform after the sign-in microflow. By using this microflow, it is possible to copy records from the anonymous user to the newly signed-in user.

## Using Deep Links

{{% alert color="info" %}}
The Deep Link module has been deprecated from Studio Pro 10.6.0 and replaced by [page URLs](/refguide/page-properties/#url) and [microflow URLs](/refguide/microflow/#url). For instructions on migrating to page and microflow URLs, see the [Using Page and Microflow URLs with SAML](#page-microflow-url-saml) section below.
{{% /alert %}}

If end-users who use the deeplink do not yet have a session in your app, the deeplink can trigger the SSO process. If successful, the end-user will be automatically redirected back to the deeplink.

For more information on using Deep Link module (with Mendix 8 and 9), see the [Using Deep Link Module](#using-deeplink) section below.

### Using Page and Microflow URLs with SAML{#page-microflow-url-saml}

Page URLs and Microflow URLs are supported with SAML for Mendix version 10.6 and above. To do this, follow the steps below:

1. In the **Runtime** tab of the **App Settings**, configure the page **URL prefix** to **link** instead of the default **P** to maintain compatibility with existing URLs.
2. Ensure to remove the Deep Link module from your app to start the app successfully.
3. To implement the SSO redirection, add the following lines of code to your login page (for example, `login.html`):
    * Extract the return URL: `var returnURL = window.location.hash.substring(1) + window.location.search;`
    * For automatic redirection: use `window.onload` to automatically redirect users to the SSO login page.
    `window.location.href = 'sso/login' + (returnURL ? '?cont=link' + encodeURIComponent(returnURL) : '');` or, 
    * For manual redirection: add an onclick event to the button that manually triggers the SSO login.
    `this.href = 'sso/login' + (returnURL ? '?cont=link' + encodeURIComponent(returnURL) : '');`
4. To allow the end users to navigate to the desired page, URL can be formed as follows:
    * If single IdP configured, URL will be the base URL of your application followed by `SSO/login?cont={page/Microflowurl}`.
    For example, `http://localhost:8080/SSO/login?cont=link/pagepath`.
    * If Multiple IdPs configured, you can specify which IdP should be used by adding the alias (MyIdPAlias) `SSO/login?_idp_id={MyIdPAlias}&cont={page/Microflowurl}`.
    For example, `http://localhost:8080/SSO/login?_idp_id=Okta&cont=link/pagepath`.

Once the above changes are applied, end users can directly navigate to the desired page. If not logged in, they will be redirected to the IdP login page for authentication. After successful log in, they will be directed to the desired page using page and microflow URLs.

For more information, see the [Migrating to Page and Microflow URLs](/appstore/modules/deep-link/#migrate-page-micro) section of the *Deep Link*.

### Using Deep Link Module{#using-deeplink}

When using the SAML module with the Deeplink Module (for Mendix 8 and 9), you need to set the `LoginLocation` constant of the Deeplink module to `/SSO/login?f=true&cont=` in order to redirect the user to the original deep link location after a successful login.

The DeepLink module does not have full support for multiple IdPs, so it can only trigger logins at one IdP. You can specify which IdP should be used by adding the alias (`MyIdPAlias`) to the `LoginLocation`: `/SSO/login?_idp_id={MyIdPAlias}&cont=`.

If you are using version 6.1.0 or above of the Deep Link module, you should also set the `EnableLeadingSlash` constant to *False*. This prevents users from being redirected to an invalid deep link location.

## Debugging the Configuration

When testing and debugging the configuration, an option is to view the messages in the log files. A detailed cause of the failure will be printed in case something goes wrong.

When enabling the log node SSO to show trace messages, you can find detailed information from every step in the process. This allows for an easy analysis of where potential configuration errors recite. Enabling trace messages for the SSO log node will also allow for detailed response messages to the user trying to sign in. By default, every failed login attempt always results in this message: “Unable to validate the SAML message!” After enabling trace logging, you can see the exact cause of the failure in the browser. In case of exceptions, you can even see the stack trace. Obviously, you should not have this enabled in production, but it does allow for easier and faster testing of the configuration.

### Error Messages

* **"The application hasn't been properly configured to support single sign-on."** – This message indicates an incomplete IdP configuration. In more detailed error messages (via the log file), you are able to see which property in the IdP configuration has not been configured.
* **"Unable to complete the request"** – A message has been received that does not have a RelayState/RequestID that matches any of the previously generated IDs (or the message has been answered already). If you get this message, you should validate the message communication and confirm that you are not using unsolicited requests. Or, you can enable that check the box to allow for IdP initiated authentication.
* **"The authentication was successful, but there is no account available in this application."** – There is no account that matches the identifying assertion, by downloading the SAMLResponse message, you can see the assertion attributes in the XML file to validate which user name has been sent.
* **"Your account hasn't been configured to access this application."** – There is a user account available in the application that matches the identifying assertion, but the user does not have user roles or the user is not active. 
* **"An unexpected error occurred while creating a session"** – An uncaught exception occurred, which could be a configuration error or situation that has not been supported by the module. More information should be available in the stack trace.
* **"The response from the identity provider isn't valid."** – The response from the IdP does not contain any assertion attributes.
* **"No valid SSO Configuration could be found for entity Id: [IdP Alias]"** – Either the specified IdP configuration has not been activated, or an error occurred when reloading the configuration. The error message when reloading the configuration should give more information about the exact problem. The configuration is loaded on startup, when (de-)activating the configuration or when saving an active configuration.
* **"Unsupported action: [action], only ....."** – The URL is incorrect. Validate that the URL is correctly structured as *action: login, assertion, metadata, discovery*.
* **“MSIS7046: The SAML protocol parameter ‘RelayState’ was not found or not valid.”** – This error can be shown on the ADFS server, most likely when you are using Mac OSX and a Safari browser. Setting the `BindingURI_Redirect` constant to true might help resolve the issue. By default, Mendix favors the `Post` binding, as the maximum size exceeds that of a `Redirect` binding due to its use of cookies and post information instead of URL parameters. The size can be a factor when using encryption.
* **"Unable to validate Response, see SAMLRequest overview for detailed response. Error: An error occurred while committing user: p:'johndoe@company.com'/u:'JoHnDoE@CoMpAnY.CoM'"** – All user names passing through the SAML module are converted to lower-case, so make sure all the existing user names and new user names are also converted to lower-case. This is because certain systems are not case-sensitive (for example, Active Directory).
* **“Could not create a session for the provided user principal.”** – This error can be shown if the IdP configuration does not contain any application attributes for the entity where the user (and user principal) is to be found (and stored).

### Troubleshooting an Endless Redirect Loop in Mendix 9 and 10

When using the [SAML](https://marketplace.mendix.com/link/component/1174) module for SSO in Mendix 9 and 10, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded.

To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time.

If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings/).

### Troubleshooting an Endless Redirect Loop to the Login Page (Mendix 10.9 to 10.12.2)

When using the SAML module with Mendix version 10.9 to 10.12.2, you may encounter an endless redirect loop to the login page. This issue is related to the session cookie handling in these versions. To resolve this redirect loop, Mendix recommends upgrading to Mendix version 10.12.3 or above. If a user logs in on one tab and then attempts to log in on another tab, a `401` error may initially appear. However, after the browser reloads, the error will be resolved as the session is validated and synchronized.

### Testing a new ‘deploy-time’ SAML configuration

If you detect an error during start -up, the application will start, although SSO via SAML may not work. You can log in as the local MxAdmin user and make the necessary configuration adjustments to get the SSO working and then you can make the necessary adjustments in the deploy-time configuration.

## URLs{#urls}

The following diagram gives an overview of all endpoints that the SAML SSO module exposes and consumes:

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/endpoints.png" class="no-border" >}}

End-users can access your app through the following endpoints when using the SAML SSO module:

* **/SSO/discovery** – If there are multiple active IdP configurations and discovery is enabled, this page can give a list of all the IdP configuration. It also allows the user to click the correct URL to sign in.
* **/SSO/login/[IdP Alias]** or **/SSO/login?_idp_id=[IdP_Alias]&action=verify&on={contextname}** – For logging using a specific IdP, you have to open either of these two URLs and pass the IdP alias as a parameter in the URL.
    The (optional) parameters for this end point are as follows:
    * **idp_id** – this indicates which idp will be used to sign the end-user in if you connect your app using multiple SAML IdPs
    * **action=verify** – indicates that in-session authentication is being requested (see [In-session Authentication](/appstore/modules/saml/idp-attributes/#in-session) for more information)
    * **on={contextname}** – this gives context to the initiation of in-session authentication, (see [In-session Authentication](/appstore/modules/saml/idp-attributes/#in-session) for more information)
* **/SSO/login** or **/SSO/login?action=verify&on={contextname}** – If you have only one active IdP, opening these URLs will automatically try to log you in using the active IdP. In the case of multiple active IdPs and discovery enabled, the user will be redirected to the discovery page.  If discovery is not allowed, the user will receive an error message. The optional parameters work as described above.

Your SAML IdP can consume the following endpoints at your app. Typically the SP-metadata is used to communicate the URLs to your SAML IdP. As a Low-Code Developer you don’t have to consider these endpoints. This information is included here for completeness and as a reference when questions arise around integration with your SAML IdP.

* **/SSO/metadata/[IDP-Alias]** – This provides a point for the IdP to automatically download the metadata from this SP
* **/SSO/assertion** – This is the endpoint where the IdP submits the SAML assertion to the so-called ‘Assertion Consumer Service’
* **/SSO/logout** – This URL will trigger a single logout

## Read More

* Academy lecture [SSO Using SAML](https://academy.mendix.com/link/modules/115/lectures/938/2.3.1-SSO-using-SAML)

    {{% alert color="info" %}}You must log into the Mendix Platform to see the lecture above.{{% /alert %}}
* [Advanced configuration for SAML](/appstore/modules/saml/advanced-configuration/)
* [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/)
* [OIDC SSO](/appstore/modules/oidc/)