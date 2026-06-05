---
title: "SAML Installation and Configuration"
url: /appstore/modules/saml/installation-configuration
linktitle: "SAML Installation and Configuration"
weight: 10
description: "Describes the installation, configuration and usage of the SAML module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Installation

There are different versions of the SAML module, depending on which version of Mendix you are using. To find and install the correct release, follow these steps:

1. In Mendix Marketplace, search for the [SAML module](https://marketplace.mendix.com/link/component/1174/).
2. In the **Documentation** tab, the *compatibility guidance* section indicates the latest recommended version for your LTS/MTS Mendix release. These guidelines are updated with each release of the SAML module, and you should refer to them to choose the version of the module that is compatible with your app. For additional information, some general considerations are listed below:

    * For Mendix 8, you should use the latest published versions in the **2.x** range, unless otherwise indicated in the **Documentation** tab.
    * For Mendix 9, there are odd- and even-numbered patch releases that contain the same changes and require the same Mendix version, but differ based on the version of Atlas UI that your app uses:

        * The even-numbered releases (for example, 3.6.2) are intended for apps that use the 2.0 version of Atlas UI, that is, apps that were originally built on a version of Mendix below 9.0.0, and then upgraded to Mendix 9.
        * The odd-numbered releases (for example, 3.6.3) are for new apps that are built using Mendix 9 and are using version 3.0 of Atlas UI.

    * For Mendix 10, you should use the latest versions of the module that are compatible with the 3.0 version of Atlas UI (that is, the version for apps newly built on Mendix 9 or newer). These are currently the same as the odd-numbered releases mentioned above for Mendix 9; in future releases of the SAML module, there will be separate versions of the module dedicated to Mendix 10.

        Mendix 10 does not support the 2.0 version of the Atlas UI, so you should never use the even-numbered (Atlas 2.0-compatible) SAML patch releases with your Mendix 10 app.

3. To download the required release, in the **Releases** tab, find the release that is compatible with your app per the guidelines in the **Documentation** tab, and then click the **Download** button by the number of the release.
4. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the SAML module into your app.

### Post-installation Configuration Steps

By default, the SAML module will be installed as the **SAML20** module in your app’s Marketplace modules. You can find all microflows and other configuration elements in this module.

1. Configure the **Startup** microflow in the SAML module (**SAML20.Startup**) to run as (part of) the [After startup](/refguide/runtime-tab/#after-startup) microflow. This microflow will initialize the custom request handler `/SSO/` (please note the importance of using the final `/` for all instances of `/SSO/`), validate all IdP configurations, and prepare the configuration entities required during the configuration.
2. If you have set up path-based access restrictions in your cloud (for example, [Path-Based Access Restrictions](/developerportal/deploy/environments-details/#path-based-restrictions) in Mendix Cloud), ensure that access to `/SSO/` is allowed.
3. Add the **OpenConfiguration** microflow to the navigation, and then allow the administrator to access this microflow.
4. Review and configure all the constants:
    * **DefaultLoginPage** – You can specify a different login page when the login process fails. When the end-user cannot be authenticated in the external IdP, a button will appear, and by clicking this button, they will be redirected to the specified login page. If this is left blank, an unauthenticated user will be redirected to `/login.html`.
    * **DefaultLogoutPage** – Removing the sign-out button is recommended, but if you keep it, the end user will be redirected to a page. You can choose where the end-user is redirected to (for example, back to `/SSO/` or your `login.html` page). Every user signed in via SAML is redirected to this location when logged out.
    * **SSOLandingPage** – Set this if you redirect the `index.html` to log into your app automatically. See [Using SSOLandingPage](#ssolandingpage) for further information about this.
    * **HybridAppLoginTimeOutInMinutes** –
        * If you use the default login handler in your [hybrid mobile](/refguide9/mobile/introduction-to-mobile-technologies/hybrid-mobile/) app, you must change the `com.mendix.webui.HybridAppLoginTimeOut` custom runtime setting to change the validity of the authentication token used by the hybrid mobile app.
        * If you use the SAML module in your hybrid app, you must change the `SAML20.HybridAppLoginTimeOutInMinutes` constant to change the validity of the authentication token used by the hybrid mobile app.
        * If you use both the default login handler and the SAML module in your hybrid app, you must change both so that they match. This is because, when you use the SAML module for SSO in your Mendix app, the authentication token is not created by the Mendix runtime, which uses the custom runtime setting. Instead, the authentication token is created by the Java code in the SAML module. This Java code does not have access to the custom runtime setting value and thus requires the constant value to be set.

            Only use this setting if you are using SAML on a hybrid mobile app. Note that this functionality also requires mobile authentication tokens to be enabled in your IdP Configuration as well as changes to the hybrid app package as described in [How to Implement SSO on a Hybrid App with Mendix and SAML](/howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/).

        {{% alert color="warning" %}}Hybrid mobile apps are not available in Mendix 10.{{% /alert %}}

5. Sign in to the application and configure the SAML module as described in the [Configuration SAML Module](#config) section.

### Using SSOLandingPage{#ssolandingpage}

You can use single sign-on (SSO) to automatically sign users into your app by redirecting every user accessing `index.html` to the Mendix `/SSO/` endpoint. To do this, you need to add `<meta http-equiv="refresh" content="0;URL=/SSO/" />` to the `index.html` file.

{{% alert color="info" %}}
For Mendix 9 and 10, there is no `index.html` file, so you need to create this file first. You can find instructions on how to do this in the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section of *Customize Styling*.
{{% /alert %}}

If you use this method, do not forget to set the **SSOLandingPage** constant to a value different than `index.html`. Otherwise, the app will come back to `index.html`, which will be redirected again to single sign-on, resulting in an endless loop. **SSOLandingPage** specifies a different landing page so the end-user does not end up on `index.html` again after a login attempt. Mendix recommends changing this constant to `/index3.html` and creating an `index3.html` page in your `/theme` folder and copying the contents of the original `index.html` (without the added redirect) into it. The authenticated end-user will then land on `index3.html`, which will display the content of the app. If the user authentication fails, the user will be directed to the **DefaultLoginPage** instead.

{{% alert color="info" %}}If you want to redirect users who have not yet signed in automatically to `/SSO/` when opening `index.html`, while still allowing users to open `login.html` directly and sign in using a local account, bypassing single sign-on, then you should not add `<meta http-equiv="refresh" content="0;URL=/SSO/" />` to the `index.html` file as described above; instead, you should edit the `index.html` file by changing the URL within the `originURI` to `/SSO/`, for example, `document.cookie = "originURI=/SSO/" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");`. This cookie determines to which location the Mendix Client will redirect users when they need to sign in. If you have already signed in, you will not be redirected again.{{% /alert %}}

### Upgrading from SAML 3.X to 4.X

{{% alert color="info" %}}If you are using Mendix 10.12.10 or above, ensure you are using version 4.0.0 or above of the SAML module.{{% /alert %}}

The table below introduces you to several key updates when you upgrade the SAML module from V3.x to V4.x.

| Feature | Changes in Version 4.X |
| --- | --- |
| SSO Configuration | You can perform SSO configuration during design time and deploy time. <br>For versions below 4.2.0, the module introduced deploy-time configuration and `Custom_Create_IdPConfiguration` microflow for customized SSO configuration. <br> From version 4.2.0 onwards, you can instead use the `IdPConfiguration_MicroflowName` constant and configure your custom microflow name in it. |
| Admin Screen Restructuring | The **Mapping** tab has been removed. Equivalent configurations can now be completed on the **User Provisioning configuration** tab. <br> `evaluateMultipleUserMatches` microflow is now moved to the **User Commons**. |
| User Commons Module Integration | 1. From versions 4.0.0 and above, SAML2.0 is compatible with the UserCommons v2.0.0. <br> 2. The SAML module now integrates with the User Commons module, offering a more uniform experience with the OIDC SSO module. <br> 3. A new method for creating custom user provisioning microflows using User Commons simplifies development and allows you to automatically set the user-type for users <br> 4. Deprecated: SAML 3.x provisioning flows will be unsupported in future versions. It’s recommended to create new provisioning flows using User Commons after upgrading.<br> 5. From UserCommons 2.0.0, new users without IdP-specified time zone or language will use default App settings; existing users retain their previously set values. |
| InCommon Federation Support | Pre-configured support for InCommon Federation has been removed. You now need to create custom user provisioning microflows in version 4.0.0 |
| MxModeleReflection | In the **MxObjects_Overview** page, the MxModeleReflection module refresh is no longer required. It is handled automatically in the **SAML20.Startup**. |

## Configuring SAML Module{#config}

Configuring the SAML module is crucial for setting up secure authentication within your application. It involves reviewing and updating the Service Provider (SP) settings and creating or updating the Identity Provider (IdP) configuration.

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

##### Creating SP Manually at Okta

To kickstart the SAML module with Okta, refer to the images below. Ensure to log in with [Okta Developer](https://developer.okta.com/) credentials.
In the new application, configure the following fields and get the IdP metadata URL:

* Single Sign-On URL: This should be your application URL.
* Audience URI (SP Entity ID): By default, this is set to the application URL.
* Other Requestable SSO URLs (Callback URLs): This should be set to `<Application URL>/SSO/assertion`.
* Index: The default value is zero. Ensure it matches the value you set for the **Assertion Consumer Service Index**.

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/saml-okta.png" >}}

After creating an application, you will receive an IdP metadata URL. This URL is used in the IdP configuration to **Read IdP metadata from URL**.

The setup described above offers default configurations to start the SAML module. Any changes made to the configuration will require adjustments to other configuration details accordingly.

##### Creating SP Manually at Entra ID

To connect [Azure](https://portal.azure.com/#home) with SAML, refer to the image below. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/saml-azure.png" >}}

For the IdP configuration, the default value for the **Assertion consumer service index** is *0*. Set the corresponding value to *0* for the **Index**.

#### Setting up Eight Mandatory Constants{#setup-eight-constants}

To configure the Service Provider (SP) and Identity Provider (IdP) metadata, you need to set up eight mandatory constants. In the **App Explorer** of your Mendix app, you can find the following six constants within the **SPConfiguration** > **USE_ME** folder. These constants are used to configure the SP Metadata.

* `Org_Name`: This constant represents Name. 
* `Org_DisplayName`: This constant represents Display Name. 
* `Org_OrganizationURL`: This constant represents the Organization URL. 
* `Org_GivenName`: This constant represents the Given Name. 
* `Org_Surname`: This constant represents Surname. 
* `Org_Emailaddress`: This constant represents the Email address. 

The following constants in the **IdP Configuration** > **USE_ME** folder help configure IdP metadata.

1. IdPAlias
2. IdPMetaDataURL

If you provide values for the above constants, the SAML module will automatically generate the required/default additional configurations with the help of the `Default_CreateIDPConfiguration` microflow.

`SP_Entity` is an optional constant in the SP Metadata that represents the SP Entity.

#### Deploy the Application and Login with SSO{#deploy-application}

After configuring the eight constants, you need to deploy the application. For details, see the [Deploying the App](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/) section in the *Deploying an App to Mendix Cloud*. Once deployed, you can now log in to your application using SSO.

{{% alert color="info" %}}It is recommended to modify the values using constants. Any changes made from the runtime screen will be overwritten by the constant values upon restarting the app.{{% /alert %}}

### Non-default Configuration{#non-default}

The [Easy Default Flow](#easy-flow) section above gives you an overview of the default settings. If you have requirements to deviate from these defaults, for example, to enable Force Authentication, change encryption settings from the default, or support multiple Identity Providers (IdPs), Non-default configuration setup offers advanced options for your SAML integration needs. With these features, you can customize the SAML configuration to meet your specific requirements.

In this configuration, you have several options to customize the Identity Provider (IdP) settings. Firstly, you can configure the IdP using constants. Additionally, the SAML module supports further customization of the IdP configuration. From version 4.2.0 onward, you can define your custom microflow name in the `IdPConfiguration_MicroflowName` constant. The custom microflow must return a list of configured IdPs (`Dep_IdPConfiguration.return`), which the SAML module then uses to generate the necessary SSO configurations for multiple IdPs. The default value of the `IdPConfiguration_MicroflowName` constant is `SAML.Default_CreateIDPConfiguration`.

In versions earlier than 4.2.0, IdP customization was supported through the implementation of a custom microflow called `Custom_Create_IdPConfiguration`. However, this microflow has been deprecated as of version 4.2.0.

In this configuration, users have the flexibility to introduce their own constants by creating custom IdP configurations. To enable this configuration, you need the IdP metadata obtained by creating an SSO app in the IdP without complete dependency on SP metadata.

Follow the steps mentioned in the [Easy Default Flow](#easy-flow) with an additional custom configuration in Studio Pro. After [setting the eight mandatory constants](#setup-eight-constants), proceed with the [custom configuration](#custom-config).

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/non-default.png" >}}

#### Creating Custom Configuration{#custom-config}

This module uses non-persistence entity names starting with `Dep_`.

The following entities are used to create IdP configurations:

* `Dep_IdPConfiguration`: IdP details
* `Dep_SPAttribute`: List of Attribute Consuming Service requested attribute
* `Dep_SAMLAuthnContext`: List of SAMLAuthnContext
* `Dep_IdpAttributeEntityAttributeMapping`: List of Attribute Mapping

The table below shows you the different attributes and their values for quick reference. You can see the details of these attributes of the above entities in the [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/) document.

| IDPConfiguration(Non-Persistable entity) | Description | Default Value |
| --- | --- | --- |
| **Alias** (mandatory) | This represents IdPconfiguration Alias | |
| **IdPMetadataURL** (mandatory) | This represents the URL of the IdPMetadataURL | |
| **IdPConfiguration_MicroflowName**  | This constant specifies a custom microflow that returns a list of IdP configurations and is used to create SAML IdP configurations at deploy time. | `SAML.Default_CreateIDPConfiguration` |
| **ResponseProtocolBinding**  | Response protocol binding contains a caption value of SAML20.Enum_ProtocolBinding | POST_BINDING |
| **EnableAssertionConsumerServiceIndex** | EnableAssertionConsumerService Concept contains caption value of SAML20.Enum_AssertionConsumerServiceIndex | NO |
| **AssertionConsumerServiceIndex** | This should hold the same value for the SAML configuration and the IdPs. | 0 |
| **EnableInitialLoginAttributeConsumingService** | This will be returned when the end-user initially signs in | FALSE | 
| **InitialLoginServiceName** |  It represents the Initial login Attribute Consuming Service name | Service1 | 
| **InitialLoginAttributeConsumingServiceIndex** | It represents the Initial login Attribute Consuming Service Index | 1 | 
| **InitialLoginDep_SPAttribute_Dep_IdPConfiguration** | It will display the details of Value, Name, IsRequired details | | 
| **EnableInSessionAttributeConsumingService** | To enable this feature, configure at least one request attribute for the in-session attribute consuming service. | FALSE | 
| **InSessionServiceName** | It represents the In-Session Attribute Consuming Service name | Service2 |  
| **InSessionAttributeConsumingServiceIndex** |  It represents the In-Session Attribute Consuming Service Index | 2 | 
| **InSessionDep_SPAttribute_Dep_IdPConfiguration**| It will display the details of Value, Name, IsRequired details | | 
| **PreferredEntityDescriptor** | It represents the entityID of the EntityDescriptor | | 
| **AllowIdpInitiatedAuthentication** | Authentication should start at this application, which generates an ID. The authenticated response should match this generated Id. If no request can be found that matches the response Id the information is rejected. If your IdP can initiate a new transaction (with a new or no Id) and you want to allow this you can check this box. | FALSE |
| **EnableForceAuthentication** | will force the SAML IdP to (re)authenticate end-users, even if they are already signed in at the SAML IdP. | FALSE |
| **EnableMobileAuthToken** | If enabled, an auth token cookie will be set on login that can be used by Mendix hybrid mobile apps to log in after the app is closed. | FALSE |
| DelegatedAuthenticationURL | This will allow you to use a SAML token and delegate the authentication through SAML. | |
| **CustomPrepareInSessionAuthenticationMicroflow**  | This represents the Custom Prepare In-Session Authentication microflow. It sets up specific data in the current user session so that it can be recovered after the SAML in-session authentication flow returns to the app. | |
| **CustomEvaluateInSessionAuthenticationMicroflow**  | It implements the logic that handles the authentication details of the in-session authentication. | |
| **NameIDFormat** | This attribute represents the Description of SAML20.NameIDFormat. Disable NameID policy is true when this attribute (NameIDFormat) is invalid. | |
| **AuthenticationContext** | It represents Authentication context comparison contains the caption value of SAML20.TypeOfAuthnContext | Exact (Default) |
| **UserEntity** | The Mendix entity in which you will store and look up the user account. | Administration.Account |
| **UserPrincipalAttribute** | Determines the attribute on which you want to do the lookup in Entity attributes. | Name |
| **UserIdPPrincipalAttribute** | We need to provide the attribute that contains the user name that uniquely identifies the user. It should be Assertion Name | UseNameID |
| **CreateUsers** | The module will always search for the user, based on the Identifying Assertion. You can allow the module to create users with a predefined user role. If you allow the module to create users, it will automatically create a new user account if the user cannot be found. If the module is not allowed to create users, it will present a message to the user stating that the login action was successful but no user has been configured. | true |
| **UserRoleName**  | This role will be assigned to newly created users. | User |
| **UserType** | Assign user type to the created users | Internal |
| **CustomUserProvisioning**  | This is an optional configuration to run a microflow to persist user information in your app model using some of your own specific logic. First, you need to develop a custom microflow in your app and select it for the CustomUserProvisioning. | |
| **CustomAfterSigninLogic**  | Checking the box will execute the `CustomAfterSigninLogic microflow`. You can replace the default with your custom microflow below. This microflow runs after a new session is created, allowing you to copy or review data from the original (anonymous) session to the new session or user. This functionality is similar to the after-sign-in microflow in Mendix project security. Only custom microflows starting with 'Custom' will appear in the list. | |
| **UseEncryption**  | Enable better security for app | TRUE |
| **EncryptionMethod**  | This represents the Encryption Algorithm | SHA256 - RSA |
| **EncryptionKeyLength**  | This constant represents the Encryption length | 2048 bits |
| Active | After completion of IdP config it will make the Toggle Active | true |

Deploy the application and log in with the SSO. For more information, see the [Deploy the Application and Login with SSO](#deploy-application) section above.

### Runtime Configuration Flow{#runtime-config}

This process involves configuring both the Identity Provider (IdP) and the Service Provider (SP) metadata to establish secure authentication for the user. In some IdPs, SSO app creation is not allowed without having SP metadata. This configuration method is ideal for such scenarios. The following subsections provide you with detailed instructions on integrating your application with SSO:

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/runtime-config.png" >}}

#### Deploy Your Application and Login with Application Admin

Deploy your application and log in with the application Admin account. Click **SAML**; currently, no configurations are available.

#### Configuring Steps

1. Navigate to the **Model Reflection**, select the required module from the left navigation pane, and select **Click to refresh** to synchronize entities and microflows. In version 4.x, refreshing the module is no longer required.
2. In the **SP Configuration** tab, provide the necessary values and click **Save**. Complete this step before proceeding with IdP Configuration.
3. In the IdP Configuration tab, click **New** and provide the necessary details. For more information on IdP configuration tabs, see the [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/) document.

    {{% alert color="info" %}}
The `SAML20.DefaultEntity` constant is used at runtime to prefill the default user provisioning entity when creating a new SAML IdP configuration, with `Administration.Account` set as the default value.
{{% /alert %}}

4. From version 4.0.0 of the SAML module, you have the option to download the SP Metadata from the **Encryption Settings** tab, **Identity Provider Metadata** tab, and at the end of the configuration process.

#### Downloading and Uploading SP Metadata Manually

After completing the IdP configuration, download the SP metadata. Upload the SP metadata details to the IdP provider, either via URL or by downloading the SP metadata XML file provided. This typically involves transferring the file to the IdP provider responsible for configuring authentication on the IdP server.

{{% alert color="info" %}}
The XML for the SP metadata is signed. If you make any changes to the metadata (even just opening it in an editor) this can mean that the signature no longer matches the content, and the metadata will be rejected.
{{% /alert %}}

#### Downloading and Uploading IdP Metadata Manually

Once you configure and upload the SP metadata, on the **Identity Provider Metadata** tab of the application, you can upload the IdP metadata. This can be done by either using the IdP metadata URL or uploading an XML file.

With the completion of these steps, your application is now configured for SSO.

{{% alert color="info" %}}
After each restart, the configuration will be automatically updated to reflect any changes made in custom microflows or constants.
{{% /alert %}}

## Configuring IdP-Specific Settings{#idp-specific-settings}

Before configuring any IdP, you need to configure the Service Provider (SP), which is your current application. The SP configuration allows you to configure some basic information for the SP metadata file. This information will be available to the IdP administrator for reference.

Each IdP should have its own configuration set. Every IdP can be configured and enabled separately. All changes made in the configuration are immediately applied when you save the configuration.

If you have multiple IdPs, please make sure each IdP has a unique **Entity descriptor**. If you add multiple IdPs with the same entity descriptor, you might experience unexpected behavior where a different SSO configuration is selected than the alias provided.

### Downloading SP Metadata

Upon completing the IdP configuration steps above, you only need to send the SP metadata file to the IdP and have them configure the authentication on their end. The SAML module generates separate SP metadata for every connected SAML IdP (see [Configuring the IdP-Specific Settings](#idp-specific-settings)). The SP metadata for your app can be obtained by clicking **Download SP Metadata** on the final configuration step (or in the **Identity Configuration**, **Encryption Settings**, or **Identity Provider Metadata** tab) to download the XML file or by opening `http://<Application Root URL>/SSO/metadata/<IDP-Alias>` for your app’s URL.

{{% alert color="info" %}}
The XML for the SP metadata is signed. If you make any changes to the metadata (even just opening it in an editor) this can mean that the signature no longer matches the content, and the metadata will be rejected.
{{% /alert %}}

### Additional Settings

The following settings apply to the IdP configuration:

* **Alias** – The alias for your IdP can be used in the URL of the application to indicate the IdP configuration that should be used during login. The alias must be unique, but you should also make sure that this alias is compatible with usage in a URL (meaning, no `/`, `&`, `?`, or any special character that could get lost in the communication).

* **Log SAML Requests** – Determines whether all requests and login attempts should be logged and stored in an entity.

When you add a new configuration or change an existing one, you should restart your app. This ensures that the correct configuration is used.

## IdP Configuration

When creating a new IdP configuration, you are guided through a workflow to help you configure everything required for the IdP configuration. Each option in the workflow is explained in the [SAML IdP Configuration](/appstore/modules/saml/idp-attributes/) document and can be changed by editing an existing IdP Configuration.

Use **Previous** to go back to the previous dialog or **Cancel** to abandon your changes. Click **Save** on the last step to save the configuration.

## User Provisioning

The SAML module provides you with so-called Just-In-Time (JIT) user provisioning. To read more, refer to [Just-In-Time User Provisioning via SAML](/appstore/modules/saml/user-provisioning/).

## URLs{#urls}

The following diagram gives an overview of all endpoints that the SAML SSO module exposes and consumes:

{{< figure src="/attachments/appstore/platform-supported-content/modules/saml/endpoints.png" class="no-border" >}}

End-users can access your app through the following endpoints when using the SAML SSO module:

* **/SSO/discovery** – If there are multiple active IdP configurations and discovery is enabled, this page can give a list of all the IdP configurations. It also allows the user to click the correct URL to sign in.
* **/SSO/login/[IdP Alias]** or **/SSO/login?_idp_id=[IdP_Alias]&action=verify&on={contextname}** – For logging using a specific IdP, you have to open either of these two URLs and pass the IdP alias as a parameter in the URL.
    The (optional) parameters for this endpoint are as follows:
    * **idp_id** – this indicates which idp will be used to sign the end-user in if you connect your app using multiple SAML IdPs
    * **action=verify** – indicates that in-session authentication is being requested (see [In-session Authentication](/appstore/modules/saml/idp-attributes/#in-session) for more information)
    * **on={contextname}** – this gives context to the initiation of in-session authentication, (see [In-session Authentication](/appstore/modules/saml/idp-attributes/#in-session) for more information)
* **/SSO/login** or **/SSO/login?action=verify&on={contextname}** – If you have only one active IdP, opening these URLs will automatically try to log you in using the active IdP. In the case of multiple active IdPs and discovery enabled the user will be redirected to the discovery page.  If discovery is not allowed, the user will receive an error message. The optional parameters work as described above.

Your SAML IdP can consume the following endpoints at your app. Typically the SP-metadata is used to communicate the URLs to your SAML IdP. As a Low-Code Developer, you don’t have to consider these endpoints. This information is included here for completeness and as a reference when questions arise around integration with your SAML IdP.

* **/SSO/metadata/[IDP-Alias]** – This provides a point for the IdP to automatically download the metadata from this SP
* **/SSO/assertion** – This is the endpoint where the IdP submits the SAML assertion to the so-called ‘Assertion Consumer Service’
* **/SSO/logout** – This URL will trigger a single logout

## Using Deep Links

{{% alert color="info" %}}
The Deep Link module has been deprecated from Studio Pro 10.6.0 and replaced by [page URLs](/refguide/page-properties/#url) and [microflow URLs](/refguide/microflow/#url). For instructions on migrating to page and microflow URLs, see the [Using Page and Microflow URLs with SAML](#page-microflow-url-saml) section below.
{{% /alert %}}

If end-users who use the deep link do not yet have a session in your app, the deep link can trigger the SSO process. If successful, the end-user will be automatically redirected back to the deep link.

For more information on using the Deep Link module (with Mendix 8 and 9), see the [Using Deep Link Module](#using-deeplink) section below.

### Using Page and Microflow URLs with SAML{#page-microflow-url-saml}

Page URLs and Microflow URLs are supported with SAML for Mendix version 10.6 and above. To do this, follow the steps below:

1. In the **Runtime** tab of the **App Settings**, configure the page **URL prefix** to **link** instead of the default **P** to maintain compatibility with existing URLs.
2. Ensure to remove the Deep Link module from your app to start the app successfully. For more information, see the [Migrating to Page and Microflow URLs](/appstore/modules/deep-link/#migrate-page-micro) section of the *Deep Link*.

#### Steps for SAML Versions Above v3.6.17 and v4.0.1

1. To use the Page URL functionality, replace the content of *login.html* with the content of *login-with-mendixsso-automatically.html* (located in the **resources** > **mendixsso** > **templates** folder) without changing the file name. 
2. To implement the SSO redirection, replace the code in the `<script>` tag on your login page (for example, *login.html*) with the following code:

    * For automatic redirection: use `window.onload` to automatically redirect users to the SSO login page.

    ```javascript
    window.onload = function () {
    const returnURL = encodeURIComponent(window.location.search + window.location.hash);
    location.replace('/SSO/login?cont=' + returnURL);
    };
    ```

    * For manual redirection: add an onclick event to the button that manually triggers the SSO login.

    ```javascript
    function SSOlogin() {
    const returnURL = encodeURIComponent(window.location.search + window.location.hash);
    location.replace('/SSO/login?cont=' + returnURL);
    }
    ```

Once the above changes are applied, end users can directly navigate to the desired page. If not logged in, they will be redirected to the IdP login page for authentication. After successful login, they will be directed to the desired page using page and microflow URLs.

### Using the Deep Link Module{#using-deeplink}

When using the SAML module with the Deep link Module (for Mendix 8 and 9), you need to set the `LoginLocation` constant of the Deeplink module to `/SSO/login?f=true&cont=` to redirect the user to the original deep link location after a successful login.

The DeepLink module does not have full support for multiple IdPs, so it can only trigger logins at one IdP. You can specify which IdP should be used by adding the alias (`MyIdPAlias`) to the `LoginLocation`: `/SSO/login?_idp_id={MyIdPAlias}&cont=`.

If you are using version 6.1.0 or above of the Deep Link module, you should also set the `EnableLeadingSlash` constant to *False*. This prevents users from being redirected to an invalid deep link location.

## Read More

* Academy lecture [SSO Using SAML](https://academy.mendix.com/link/modules/115/lectures/938/2.3.1-SSO-using-SAML)

    {{% alert color="info" %}}You must log into the Mendix Platform to see the lecture above.{{% /alert %}}
* [Just-In-Time User Provisioning via SAML](/appstore/modules/saml/user-provisioning/)
* [Advanced configuration for SAML](/appstore/modules/saml/advanced-configuration/)
* [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/)
* [OIDC SSO](/appstore/modules/oidc/)
