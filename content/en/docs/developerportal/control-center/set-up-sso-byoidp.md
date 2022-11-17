---
title: "Set Up an SSO (BYOIDP)"
url: /developerportal/control-center/set-up-sso-byoidp/
category: "Control Center"
weight: 10
description: "Describes how you can use your company IdP to authenticate to Mendix."
tags: ["BYOIDP", "IdP", "Bring Your Own IdP", "Microsoft Azure", "SSO", "Single Sign-on"]
---

{{% alert color="info" %}}
This feature is currently in [Public Beta](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

The Mendix Cloud solution offers an Identity Provider (IdP) that allows users to sign in to:

* Mendix Platform services
* Mendix applications that have been built with [Mendix SSO](/developerportal/deploy/mendix-sso/)

Rather than using Mendix credentials to login, it is also possible to set up an identity federation between the Mendix Platform and your corporate IdP. In other words, you can Bring-Your-Own-IDentity-Provider (which Mendix calls BYOIDP), sometimes referred to as ‘customer IdP’.

Benefits of using the BYOIDP SSO are:

* Convenience for platform users
* Governance: access to the Mendix Platform is only possible for users that have an active account with your identity provider
* Security: your identity provider can enforce your preferred authentication policy, which may include 2-factor authentication (2FA)

The purpose of this document is to describe the steps to set up a ‘Single Sign-On’ configuration in Mendix.

## 2 Prerequisites

To set up an IdP configuration for the Mendix Platform and your Mendix app, you will need the following:

* A subscription to an OpenID Connect compliant identity provider. Validate that your Identity Provider supports OpenID Connect
    * If you are using Azure AD, Okta, Auth0, or ADFS you will be okay
    * a full list of compliant providers can be found in the [OpenID Certified OpenID Providers](https://openid.net/certification/)
* The URL for the so-called *well-known endpoint* of your identity provider, where configuration details can be retrieved
    * The IdP’s well-known endpoint must have a URL for the JWKS endpoint
* The Mendix Developer Portal needs to be registered as a client in your IdP, and you need to know the corresponding client ID and secret

## 3 Configuring Your BYOIDP Setup

As a Mendix Administrator, you will find the IdP setup on the **Single Sign-On** tab of your Control Center's [Security](/developerportal/control-center/#security) section.

In this overview, you will find your current IdP configurations, both draft versions and the active one. When you create a new configuration, the Control Center displays a pop-up screen to inform you of known limitations.

From here you can add a configuration, edit draft versions of a configuration, activate a draft version or de-activate the current IdP configuration.

### 3.1 Adding a Configuration

When adding a configuration, you will need to provide the information described below:

* **Configuration name** – a name for the IdP setup in the Single Sign-On configuration for your own reference.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-1.png" alt="Customer IdP setup - step 1" >}}

* **Redirect URL** – the callback URL to the Developer Portal that your IdP needs to send the authenticated user to.
* **OpenID Connect well-known endpoint URL** – the endpoint at your IdP from which the Mendix Platform can retrieve the configuration metadata, including all necessary endpoints and public key location information.
    If your IdP supports multiple protocols, make sure you enter the OpenID Connect endpoint.
* **Client ID** – the ID of the Developer Portal registration in your IDP.
* **Client secret** – the password or secret of the Developer Portal registration in your IDP. Enter this once. After saving your configuration it will no longer be shown to you.
* **Scopes** – selecting a scope to configure the data Mendix is allowed to read from your IDP. Mendix uses this data to map the user’s identity in your IdP environment with a corresponding identity in the Developer Portal. The scope `OpenID` is required. In some cases, depending on your IDP, other scopes are necessary to fully map the user’s identity.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-2.png" alt="Customer IdP setup - step 2" >}}

### 3.2 Testing Your Configuration

Once you have configured the endpoint and the scope, you are ready to perform a first test of your configuration. This test will perform a round trip from the Mendix Platform to your IdP and back to the platform. The test will be performed in a new tab page of your browser. In order to perform the test, your browser must allow popup windows.

{{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-3.png" alt="Customer IdP setup - step 3" >}}

### 3.3 Mapping Between IDP and Mendix

The data from your IdP may have different attribute names from the Mendix identity.

Configure which data from your IdP is mapped to the attributes of the Mendix identity. Configure at least **ID**, **user name**,and a **first name** or **last name**.

{{% alert color="info" %}}
The user name must be in the correct form for an email address.{{% /alert %}}
{{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/customer-idp-wizard-page-4.png" alt="Customer IdP setup - step 4" >}}

## 4 Testing

When you have completed your IdP setup, you can perform a test sign-in before activating the configuration.

You can test in one of two ways:

1. Click on the test endpoint of your configuration. It will redirect you to the login page of your IDP. Enter the credentials of a user known to your IDP. If the test succeeds the Developer Portal Buzz will open.
2. Go to https://login.mendix.com/ and, in the username field, enter the test email domain of your configuration exactly as printed on the overview page. The password field should disappear. Click the ‘Sign in with SSO' button. This will redirect you to a login page of your IDP. Enter credentials known to your IDP. If the test succeeds the Mendix Platform home page will open.

If your test fails, see the [Troubleshooting](#troubleshooting) section for advice on where to look for issues.

## 5 Activating

When you are ready, you can activate the IdP configuration from the overview page. Your users will immediately benefit from logging into the Mendix Developer Portal with the same credentials as they use in the IDP. Any user passwords currently held in the Mendix Platform will be scrambled to prevent the users from bypassing your IdP authentication.

As an option, you can inform your users of the change in the sign-in process via a standard email message. This email is a fixed template which cannot be configured. 

Please be aware that there can be only one active IdP configuration at a time. When you activate an IdP configuration while another one is already active, the current active configuration will be de-activated automatically.

## 6 Deactivating

You can deactivate the IdP configuration at any time. The changes become into effect immediately. Users will be forced to reset their Mendix passwords on first sign-in.

Optionally you can inform your users of the change in the sign-in process via a a standard email message. This email is a fixed template which cannot be configured.

## 7 Microsoft Azure AD

Microsoft Azure AD is one of the most used IDP’s, which supports OpenID Connect. To help you setup with Azure, follow the steps in this small tutorial.

1. Sign in to your Azure Active Directory portal and follow **Azure Active Directory** > **App registrations**.

2. Create a new app registration by clicking **New registration** in the top left corner.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-overview.png" alt="Azure Active Directory - App registrations overview" >}}

3. Enter a name for your configuration, and select the preferred account type. Under Redirect URI paste the callback URL you were shown when setting up the IdP  in the Developer Portal.

4. Click **Register** to save the registration.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-1.png" >}}

5. In the app registration details that opens after you save your registration, hover over **Application (client) ID** and copy the ID to the clipboard with the button that appears.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-2.png" >}}

    You will need this Client ID when setting up the Customer IdP in the Developer Portal.

6. Click on **Endpoints** in the top bar of the app registration details page. A sidebar with all available endpoints will open.

7. Copy the **OpenID Connect metadata document** URL.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-3.png" >}}

8. Close the sidebar with the X in the top right corner and you will return to the App registration details page.

9. Click **Certificates & secrets** in the left-hand menu bar.

10. Click **New client secret** in the page that opens.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-4.png" >}}

11. In the pop-up box that opens, enter a name for your certificate, select a expiration type, and click **Add**.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-5.png" >}}

    If you wish to let the certificate to expire, please write down the date the certificate will expire.

12. Copy the client secret. You will need this to set up the Customer IdP setup in the Developer Portal.

    {{< figure src="/attachments/developerportal/control-center/set-up-sso-byoidp/azure-app-registration-step-6.png" >}}

That’s it! You are now ready to resume the Customer IdP setup in the Developer Portal.

For more information on setting up federation with a Microsoft Azure IdP, see [](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) in the Microsoft documentation.

## 8 Considerations

### 8.1 Onboarding

Users who do not currently have a Mendix account can login to the Mendix Platform via your own IdP and will then be taken through onboarding onto the Mendix Developer Portal platform. They will not need to sign up explicitly.

Existing users of the Developer Portal can continue to use their accounts, but will have to use the authentication provided by BYOIDP; they can no longer use the password they created on the Mendix Platform.

### 8.2 Mendix Version

Single sign-on was introduced in Mendix version 7.18. Your app will need to be this version or above to use BYOIDP. It is recommended that you use an [LTS versions](/releasenotes/studio-pro/lts-mts/) of Mendix where possible.

### 8.3 Automation

Automation, such as CI/CD pipelines, and other functions which require access to the [Team Server](/developerportal/collaborate/team-server/) (where versioned copies of your app are held online) cannot be performed if BYOIDP is enabled.

### 8.4 Adding and Removing Email Domains from Company

When you [add or remove an email domain from your company](/developerportal/control-center/#company) in Mendix, you will need to deactivate BYOIDP and reactivate it again to apply the changes for users logging on using the changed domains.

You cannot select which of your email domains are used for single sign-on. When you activate BYOIDP SSO, it will apply to all email domains which are registered to your company.

## 9 Troubleshooting{#troubleshooting}

If you have issues using BYOIDP, the following suggestions give an initial guide to resolving the issue.

### 9.1 Wrong Client Credentials

Without proper exchange of `client_id` and `client_secret` between the IdP and Mendix platform, Mendix cannot authenticate at the /token endpoint and delegated login will fail. This can happen when the wrong client credentials are supplied.

### 9.2 Wrong Authentication Method

If the wrong authentication method is configured for Mendix platform as a client to the customer’s IdP login will fail.

Mendix supports two client authentication methods: `client_secret_post` (client credentials in the payload) or `client_secret_basic` (basic authentication; credentials in http authorization header). If the IdP indicates support for both methods at the well-known endpoint, Mendix will use `client_secret_post`. If the client configuration at the customer’s IdP for the Mendix platform sets a different client authentication method, the IdP may reject Mendix to authenticate itself as a client to the /token endpoint and delegated login will fail.

### 9.3 Incorrect Conditional Access Policies

Prior to Mendix version 9.18.0, Studio Pro used an embedded browser for signing in. Conditional access policies in AzureAD could block this Studio Pro browser. For example, customers using Microsoft’s Intune for MDM/MAM would hit this limitation.

From version 9.18.0, Mendix Studio Pro uses the system browser for signing in to overcome this limitation.

### 9.4 IdP Does Not Allow Untrusted Devices

Studio Pro uses an embedded browser for login. Login via embedded browser may not work when customer’s IdP is allowing only for trusted devices and doesn’t recognize the embedded browser.

Mendix has created an enhancement of Studio Pro that uses system browser to overcome this limitation. This feature is in Private Beta and can be provided on request.

### 9.5 IdP Does Not Have JWKS Endpoint

If the IDP’s well-known endpoint does not have a URL for the JWKS endpoint, Mendix cannot validate the signature on the received ID-token and the delegated authentication fails.
