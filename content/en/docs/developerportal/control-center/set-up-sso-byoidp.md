---
title: "Set Up an SSO (BYOIDP)"
url: /developerportal/control-center/set-up-sso-byoidp/
category: "Control Center"
weight: 10
description: "Describes how you can use your company IdP to authenticate to Mendix."
tags: ["BYOIDP", "IdP", "Bring Your Own IdP", "Microsoft Azure", "SSO", "Single Sign-on"]
---

## 1 Introduction

The Mendix Platform contains an Identity Provider (IdP) that allows users to sign in to:

* Mendix Platform services
* Applications in the Mendix Cloud that have been built using [Mendix SSO](/appstore/modules/mendix-sso/)

You can use this to provide your end-users with an end-to-end SSO experience by setting up an identity federation between the Mendix Platform and your corporate IdP. 

Mendix calls this feature BYOIDP (Bring-Your-Own-IDentity-Provider), sometimes referred to as 'customer IdP' or 'customer IdP SSO'. It is available for any app using the [standard or premium packages](https://www.mendix.com/pricing/).

This document describes the steps to set up a 'Single Sign-On' configuration in Mendix.

### 1.1 Benefits

Benefits of using BYOIDP SSO are:

* **Security**. You are in control of the credentials and authentication of your platform users. You can, for example, apply password complexity rules and two-factor authentication (2FA). Users don't need to have separate credentials in the Mendix Platform to access the Developer Portal.
* **Access governance**. You are in control of denying access to the platform via SSO, for example when an employee has left the company or your corporate policy does not allow an employee to develop Mendix applications.
* **Convenience**. Platform users have the convenience of SSO and don't have to manage credentials for the Mendix Platform.

### 1.2 Features

#### 1.2.1 User Experience

When a user who has BYOIDP SSO enabled attempts to sign in to the Mendix Platform, Studio Pro, or a Mendix SSO supported app, they enter their email address as a **Username**. The sign in process will recognize that the email domain is configured for SSO and remove the password field, showing a button labeled **Sign in with SSO**. 

#### 1.2.2 General Features

BYOIDP SSO has the following features:

* Mendix Platform services, Studio Pro, and Mendix apps using Mendix SSO can delegate authentication to your IdP.
* Authentication will be delegated for any user that has an email address where the email-domain is associated with your company. This includes service accounts (for example non-personal accounts used for consuming APIs) that may have been created on the Mendix Platform. 
* When you add a domain to your company account, it is automatically added to the active IdP configuration. 
* External users (with domains that are not part of your company) are unaffected. They still have access based on the way they normally sign in to Mendix.
* When BYOIDP is used, a session at Mendix will be valid for 1 hour. After the session is expired, Mendix will request a new ID_token from your IdP. If the user still has a session at your IdP, the token will be issued without any user input and the platform user continues to have access to the Mendix Platform. The effect of this mechanism is that users have access to the Mendix Platform as long as the session at your IdP is valid.

#### 1.2.3 Technical Integration

BYOIDP SSO integrates with the Mendix Platform using the following techniques:

* BYOIDP uses the IdP's OIDC (OpenID Connect) well-known/discovery endpoint to retrieve the URLs for the authorization endpoint, the token endpoint, and the jwks endpoint.
* The user's email address is used to associate a user's existing account within Mendix with the user's account at your IdP. This means that any existing Mendix account is linked to their IdP account for authentication, rather than a new Mendix account being created for them.

    This assumes that the IdP returns an email address to Mendix during SSO which the user previously used to sign-up and login to Mendix. If the email address that is returned to Mendix is not recognized, then the user will be offered the sign-up option to enable them to create a new account.

* BYOIDP SSO makes an authentication request to your IdP which means that only the 'openid' and 'profile' scope values are requested, as defined by OIDC. The request does not explicitly ask for authorisation for specific platform roles such as 'developer', 'Mendix Administrator', 'technical contact'. You can set up your IdP, however, to apply coarse-grained access rules based on the client_id for the Mendix Platform to deny access to the Mendix Platform for certain groups of employees.
* Mendix provides support for two client authentication methods: client_secret_post (client credentials in the payload) or client_secret_basic (basic authentication credentials in http header). If the IdP supports both methods, client_secret_post is used.
* Mendix includes the `login_hint` parameter in requests to your IdP This allows the IdP to pre-populate the login screen with the user's email address, which gives a better user experience. Your IdP may choose to ignore the hint. After receiving a positive response, Mendix does not do any validation if the logged-in user matches the login_hint.
* Whether or not end-users signing in to the Mendix Platform have to use 2FA does not change the [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/) which protects sensitive activities on Mendix Cloud nodes. This remains in place and works independently of BYOIDP SSO.

### 1.3 Limitations

BYOIDP SSO has the following limitations.

* If the end-user's email address is changed in your IdP, Mendix may not recognize it as the same account and will ask the end-user to set up a new Mendix account.
* `login_hint` is not optional and is always sent as part of authentication requests to the IdP.
* BYOIDP SSO only supports OIDC and does not support other protocols such as SAML.
* Your Mendix app must be built using Mendix version 7.23 or above.
* Once BYOIDP is activated, direct access to [Team Server](/developerportal/general/team-server/) is no longer possible using a username and password. To access code repositories from a pipeline, you need to use a Personal Access Token (PAT).
* Mendix Platform APIs which require a PAT can use one which is created by a platform user. You cannot directly set up service accounts within Mendix once BYOIDP SSO is activated. You can set up a service-like account to consume Mendix Platform APIs in one of the following ways:

    * Use a personal account as if it were a service account
    * Create a service account in the company IdP
    * Create a service account on an email domain that is not federated with BYOIDP

* When the Company Admin activates the 'BYOIDP configuration', Mendix scrambles the Mendix passwords for all impacted users. De-activation of the feature doesn't roll-back those changes. If you deactivate BYOIDP SSO, users have to reset their Mendix password before being able to login with their Mendix account.
* Your conditional access policies in AzureAD may block Studio Pro logins for versions of Mendix below 9.18, as these make use of an embedded browser. If you are using Microsoft's Intune for MDM/MAM and versions of Mendix below 9.18, you may not want to activate BYOIDP for this reason.
* You cannot associate multiple Mendix accounts (e.g. an Admin account and a regular account) with a single identity in your IdP.

## 2 Prerequisites

To set up an IdP configuration for the Mendix Platform and your Mendix app, you will need the following:

* A subscription to an OIDC compliant IdP. Validate that your IdP supports OIDC.
    * If you are using Azure AD, Okta, Auth0, [Ping Identity](https://www.pingidentity.com), or ADFS you will be OK
    * a full list of compliant providers can be found in the [OpenID Certified OpenID Providers](https://openid.net/certification/)
* The URL for the so-called *well-known endpoint* of your IdP, where configuration details can be retrieved
    * The IdP's well-known endpoint must have a URL for the JWKS endpoint
* The Mendix Developer Portal needs to be registered as a client in your IdP, and you need to know the corresponding client ID and secret

## 3 Configuring Your BYOIDP Setup

As a Mendix Administrator, you will find the IdP setup on the **Single Sign-On** tab of your Control Center's [Security](/developerportal/control-center/#security) section.

In this overview, you will find your current IdP configurations, both draft versions and the active one. When you create a new configuration, a pop-up screen will inform you of known limitations.

From here you can add a configuration, edit draft versions of a configuration, activate a draft version or de-activate the current IdP configuration.

### 3.1 Adding a Configuration

When adding a configuration, you will need to provide the information described below:

* **Configuration name** – a name for the IdP setup in the Single Sign-On configuration for your own reference.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-1.png" >}}

* **Redirect URL** – the callback URL to the Developer Portal that your IdP needs to send the authenticated user to.
* **OpenID Connect well-known endpoint URL** – the endpoint at your IdP from which the Mendix Platform can retrieve the configuration metadata, including all necessary endpoints and public key location information.
    If your IdP supports multiple protocols, make sure you enter the OIDC endpoint.
* **Client ID** – the ID of the Developer Portal registration in your IdP.
* **Client secret** – the password or secret of the Developer Portal registration in your IdP. Enter this once. After saving your configuration it will no longer be shown to you. See [Changing the Client Secret](#client-secret), below, for information about changing this value once your configuration is active.
* **Scopes** – selecting a scope to configure the data Mendix is allowed to read from your IdP. Mendix uses this data to map the user's identity in your IdP environment with a corresponding identity in the Developer Portal. The scope `OpenID` is required. Typically the scopes "profile" and "email" are also needed to get the end-user's email address and name, which are required for SSO to fully map the end-user's identity. Your IdP may provide additional scopes you can use.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-2.png" >}}

### 3.2 Testing Your Configuration

Once you have configured the endpoint and the scopes, you are ready to perform the first test of your configuration. This test will perform a round trip from the Mendix Platform to your IdP and back to the platform. The test will be performed in a new tab page of your browser so your browser must allow popup windows.

{{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-3.png" >}}

### 3.3 Mapping Between IdP and Mendix

The data from your IdP may have different attribute names from the Mendix identity.

Configure which data from your IdP is mapped to the attributes of the Mendix identity. Configure at least **ID**, **user name**,and a **first name** or **last name**.

{{% alert color="info" %}}
The user name must be in the correct form for an email address.{{% /alert %}}
{{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-4.png" >}}

## 4 Testing

When you have completed your IdP setup, you can perform a test sign-in before activating the configuration.

You can test in one of two ways:

1. Click on the test endpoint of your configuration. It will redirect you to the login page of your IdP. Enter the credentials of a user known to your IdP. If the test succeeds the Developer Portal landing page will open.
2. Go to https://login.mendix.com/ and, in the username field, enter the test email domain of your configuration exactly as printed on the overview page. The password field should disappear. Click the 'Sign in with SSO' button. This will redirect you to a login page of your IdP. Enter credentials known to your IdP. If the test succeeds the Mendix Platform home page will open.

If your test fails, see the [Troubleshooting](#troubleshooting) section for advice on where to look for issues.

## 5 Activating

Before activating your BYOIDP configuration, ensure you have read the [Considerations](#considerations) section, below.

When you are ready, you can activate the IdP configuration from the overview page. This will have an immediate effect on the interactive login process. Mendix will also scramble the platform passwords which will take some time depending on the number of users in your company. Once all the passwords are scrambled, users will no longer be able to use these for direct access to the Team Server for apps using SVN for version control.

## 6 Deactivating

You can deactivate the IdP configuration at any time. Although the changes start to come into effect immediately, updating your users will take some time depending on the number of users in your company. Users will have to reset their Mendix password to be able to sign-in since it was scrambled upon activation.

## 7 Microsoft Azure AD

Microsoft Azure AD is one of the most used IdP's, and supports OIDC. To help you setup with Azure, follow the steps in this small tutorial.

1. Sign in to your Azure Active Directory portal and follow **Azure Active Directory** > **App registrations**.

2. Create a new app registration by clicking **New registration** in the top left corner.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-overview.png" >}}

3. Enter a name for your configuration, and select the preferred account type. Under **Redirect URI** paste the callback URL you were shown when setting up the IdP  in the Developer Portal.

4. Click **Register** to save the registration.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-1.png" >}}

5. In the app registration details that opens after you save your registration, hover over **Application (client) ID** and copy the ID to the clipboard with the button that appears.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-2.png" >}}

    You will need this Client ID when setting up your IdP in the Developer Portal.

6. Click on **Endpoints** in the top bar of the app registration details page. A sidebar with all available endpoints will open.

7. Copy the **OpenID Connect metadata document** URL.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-3.png" >}}

8. Close the sidebar with the X in the top right corner and you will return to the App registration details page.

9. Click **Certificates & secrets** in the left-hand menu bar.

10. Click **New client secret** in the page that opens.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-4.png" >}}

11. In the pop-up box that opens, enter a name for your certificate, select an expiration type, and click **Add**.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-5.png" >}}

    If you wish to let the certificate to expire, please write down the date the certificate will expire.

12. Copy the client secret. You will need this to set up your IdP in the Developer Portal.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-6.png" >}}

That's it! You are now ready to resume your IdP setup in the Developer Portal.

For more information on setting up federation with a Microsoft Azure IdP, see [](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) in the Microsoft documentation.

## 8 Considerations{#considerations}

### 8.1 Onboarding

Users who do not currently have a Mendix account can sign in to the Mendix Platform via your own IdP and will then be taken through onboarding onto the Mendix Developer Portal platform. They will not need to sign up explicitly.

Existing users of the Developer Portal can continue to use their accounts, but will have to use the authentication provided by BYOIDP; they can no longer use the password they created on the Mendix Platform.

### 8.2 BYOIDP and Team Server

Once BYOIDP is activated, direct access to Team Server is no longer possible. To access code repositories from a pipeline, you need to use a [PAT](/developerportal/community-tools/mendix-profile/#pat).

Before activating BYOIDP, your developers should set up PATs for direct access to repos (for example, from CI/CD pipelines and/or Tortoise) instead of using usernames and passwords.

If developers haven't created a PAT before BYOIDP SSO is activated, they can do so later, if needed.

{{% alert color="info" %}}
Access to Team Server through other mechanisms, such as via Studio Pro or using Mendix for Private Cloud, is not affected.
{{% /alert %}}

### 8.3 Changing the Client Secret {#client-secret}

Once you have set up BYOIDP SSO, you may want to change the 'client secret' that is used by the Mendix Platform to communicate securely with the SSO.

If the client secret is still active or you (an administrator) still have an active session on the Mendix Platform, you can do one of the following:

* Clone the existing active IdP configuration, update the secret in there and then activate the clone. This avoids updating all the users, etc. This is the preferred option.
* Disable the IdP configuration, update the secret and then enable it again.
    
If the client secret has expired, you can ask Mendix Support to update the client secret of your active IdP configuration.

If this is unsuccessful, you can ask Mendix Support to deactivate the active IdP configuration. This means that you (and your users) without active sessions will no longer have access and will need to reset and then use your platform password. Once you have access to the platform, you can set up your IdP configuration again.

### 8.4 Mendix Version

Single sign-on was introduced in Mendix version 7.18. Your app will need to be this version or above to use BYOIDP. It is recommended that you use [LTS versions](/releasenotes/studio-pro/lts-mts/) of Mendix where possible.

### 8.5 Multiple Email Domains for a Company

When you activate BYOIDP SSO, it will apply to all email domains which are registered to your company. If you add another email domain to your company, BYOIDP will automatically adopt it, without further actions from the Mendix administrator.

## 9 Troubleshooting{#troubleshooting}

If you have issues using BYOIDP, the following suggestions give an initial guide to resolving the issue.

### 9.1 Wrong Client Credentials

Without proper exchange of `client_id` and `client_secret` between the IdP and Mendix Platform, Mendix cannot authenticate at the /token endpoint and delegated login will fail. This can happen when the wrong client credentials are supplied.

### 9.2 Wrong Authentication Method

If the wrong authentication method is configured for the Mendix Platform as a client to your IdP login will fail.

Mendix supports two client authentication methods: `client_secret_post` (client credentials in the payload) or `client_secret_basic` (basic authentication; credentials in http authorization header). If the IdP indicates support for both methods at the well-known endpoint, Mendix will use `client_secret_post`. If the client configuration at your IdP for the Mendix Platform sets a different client authentication method, the IdP may reject Mendix to authenticate itself as a client to the /token endpoint and delegated login will fail.

### 9.3 Incorrect Conditional Access Policies

Prior to Mendix version 9.18.0, Studio Pro used an embedded browser for signing in. Conditional access policies in AzureAD could block this Studio Pro browser. For example, you could hit this limitation when using Microsoft's Intune for MDM/MAM with versions of Mendix below 9.18.

From version 9.18.0, Mendix Studio Pro uses the system browser for signing in to overcome this limitation.

### 9.4 IdP Does Not Allow Untrusted Devices

Mendix Studio Pro version 9.18.0 and above uses your system browser to login.

Versions of Studio Pro lower than 9.18.0 use an embedded browser for login. This may not work when your IdP only allows trusted devices and doesn't recognize the embedded browser as a trusted device.

### 9.5 IdP Does Not Have JWKS Endpoint

If the IdP's well-known endpoint does not have a URL for the JWKS endpoint, Mendix cannot validate the signature on the received ID-token and the delegated authentication fails.
