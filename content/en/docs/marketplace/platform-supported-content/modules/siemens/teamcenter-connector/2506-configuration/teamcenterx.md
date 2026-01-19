---
title: "Configuring the Connection to Teamcenter X"
url: /appstore/modules/siemens-plm/teamcenterx/
weight: 4
description: "Describes the steps to connect to Teamcenter X."
---

## Prerequisites

Before setting up the connection to Teamcenter X, you must get some information from your Teamcenter representative:

* **OIDC configuration information**
    * Mendix app client ID
    * Mendix app secret

* **SAM Auth information**
    * Token Exchange Client ID
    * Token Exchange Client Secret
    * Token end point
    * Teamcenter X Client ID

* **Teamcenter X environment information**
    * Teamcenter Host URL
    * Teamcenter FMS URL

## Configuring the Mendix OIDC Module

To allow users of your Mendix app to log on via Single Sign-On (SSO), you must set up the OIDC module.
Ensure that the [Mendix OIDC module](/appstore/modules/oidc/) and its dependent modules are added to your Mendix app.

1. Install the following dependent modules from the Mendix Marketplace:

    * Community Commons
    * Nanoflow Commons
    * Mx Model Reflection
    * User Commons
    * OIDC Module

2. In Mendix, navigate to **App Users** and assign admin and user roles to their respective equivalents.
3. Set the constant **Encryption.EncryptionKey** with a random 32-character string.
4. Setup Mx Model Reflection and synchronize all module entities and microflows.    
    For more information, see the [Mx Model Reflection documentation](/appstore/modules/oidc/#mxmodelreflection).
Setup SAMAuth registration in the configuration folder of the OIDC module by [setting the following constants](/appstore/modules/oidc/#deploy-time-idps-for-sso-and-api-security-configuration).

| **Field** | **Description** |
| --------- | ----------------|
| **Client Alias** | A custom name for the client. |
| **Client Id** | The ID for the Mendix app registered with SamAuth. |
| **Client Secret** | The secret key for the Mendix app registered with SamAuth. |
| **AutomaticConfigurationURL** | The well-known config URL that provides metadata for the SamAuth configuration.<br>For example, `https://samauth.us-east-1.sws.siemens.com/.well-known/openid-configuration`. |
| **SelectedScope** | The scope for **openid** and **sam_account**.<br>Multiple values can be separated by a space. |

## Configuring the Mendix OIDC Module with your Mendix App

To allow users of your Mendix app to log on via Single Sign-On (SSO), you must set up the OIDC module.    

1. Assign admin and user roles to their respective equivalents.
2. Give the admin and user roles access to the following elements in the OIDC module:

    | **Element** | **Element name** |
    | ------- | ------------ |
    | Microflow | **DS_GetClientConfigurationList** <br> **GetAuthorizationURL** |
    | Nanoflow | **ACT_StartWebSignIn** <br> **DS_GetReturnURL** <br> **DS_StartWebLogin** |
    | Entities | **ClientConfig** <br> **ClientConfig_Ext** |
    | Pages | **Login_Web_Button** |

## Connecting the Teamcenter Connector to Teamcenter X

To connect Teamcenter Connector for Mendix with Teamcenter X, you must specify the connection details in the Teamcenter Environment Configuration page.

1. Run your project. The browser displays the AdminHomePage.
2. Click **TEAMCENTER CONFIGURATIONS**.
3. Click **New** in the Teamcenter Environment Configuration page.
4. Within Add Teamcenter Configuration, set the **Is TcX Environment** option to **Yes** and complete the fields with the information you received from your Siemens representative.
    {{< figure src="/attachments/partners/siemens/teamcenter/tc_connector_configuration_initial.png" alt="" class="no-border" >}}
5. Click **Save**.
