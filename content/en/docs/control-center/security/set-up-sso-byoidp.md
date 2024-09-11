---
title: "Set Up an SSO (BYOIDP)"
url: /control-center/security/set-up-sso-byoidp/
weight: 5
description: "Describes how you can use your company IdP to authenticate to Mendix."
aliases:
    - /developerportal/control-center/set-up-sso-byoidp/
---

## Introduction

The Mendix Platform contains an identity provider (IdP) that allows platform users to sign in to:

* Mendix Platform services such as the Mendix Portal, the Marketplace, Control Center, and the Mendix Community
* Studio Pro

Platform users can have separate Mendix credentials, or you can provide them with an end-to-end SSO experience by setting up an identity federation between the Mendix Platform and your corporate IdP. 

Mendix calls this identity federation BYOIDP (bring your own identity provider), sometimes referred to as customer IdP, customer IdP SSO, or Platform SSO.

This document describes the steps to set up a single sign-on configuration in Mendix.

### Benefits

Benefits of using BYOIDP SSO are:

* **Security** – You are in control of the credentials and authentication of your platform users. You can, for example, apply password complexity rules and two-factor authentication (2FA). Users don't need to have separate credentials in the Mendix Platform to access the Mendix Portal.
* **Access governance** – You are in control of denying access to the platform via SSO, for example when an employee has left the company or your corporate policy does not allow an employee to develop Mendix applications.
* **Convenience** – Platform users have the convenience of SSO and don't have to manage credentials for the Mendix Platform.

### Features

#### User Experience

When a user who has BYOIDP SSO enabled attempts to sign in to the Mendix Platform or Studio Pro, they enter their email address as a **Username**. The sign-in process will recognize that the email domain is configured for SSO and remove the password field, showing a button labeled **Sign in with SSO**. 

#### General Features

BYOIDP SSO has the following features:

* BYOIDP is based on the OpenID Connect (OIDC) protocol which supports corporate IdPs such as Entra ID.
* Mendix Platform services and Studio Pro delegate authentication of platform users to your IdP.
* Authentication is delegated for any user that has an email address where the email domain is associated with your company. This includes service accounts (for example non-personal accounts used for consuming APIs) that may have been created on the Mendix Platform. 
* When you add a domain to your company account, it is automatically added to the active IdP configuration. 
* External users (with domains that are not part of your company) are unaffected. They still have access based on the way they normally sign in to Mendix.
* When BYOIDP is used, a session at Mendix is valid for one hour. After the session is expired, Mendix will request a new `ID_token` from your IdP. If the user still has a session at your IdP, the token will be issued without any user input and the platform user continues to have access to the Mendix Platform. The effect of this mechanism is that users have access to the Mendix Platform as long as the session at your IdP is valid.
* You can also use the [Mendix SSO](/appstore/modules/mendix-sso/) module in your non-production apps to provide an SSO experience. With BYOIDP, authentication of end-users of these apps will also be delegated by BYOIDP SSO. The end-users of these apps need to [sign up for a Mendix account](https://signup.mendix.com/) before they can sign in to your app.

#### Technical Integration

BYOIDP SSO integrates with the Mendix Platform using the following techniques:

* BYOIDP uses the IdP's OIDC (OpenID Connect) well-known/discovery endpoint to retrieve the URLs for the authorization endpoint, the token endpoint, and the JWKS endpoint.
* The user's email address is used to associate a user's existing account within Mendix with the user's account at your IdP. This means that any existing Mendix account is linked to their IdP account for authentication, rather than a new Mendix account being created for them.
    * This assumes that the IdP returns an email address to Mendix during SSO which the user previously used to sign-up and login to Mendix. If the email address that is returned to Mendix is not recognized, then the user will be offered the sign-up option to enable them to create a new account.
* BYOIDP SSO makes an authentication request to your IdP which means that only the 'openid' and 'profile' scope values are requested, as defined by OIDC. The request does not explicitly ask for authorization for specific platform roles such as developer, Mendix Admin, or Technical Contact. You can set up your IdP, however, to apply coarse-grained access rules based on the `client_id` for the Mendix Platform to deny access to the Mendix Platform for certain groups of employees.
* Mendix provides support for two client authentication methods: `client_secret_post` (client credentials in the payload) or `client_secret_basic` (basic authentication credentials in the HTTP header). If the IdP supports both methods, `client_secret_post` is used.
* Mendix includes the `login_hint` parameter in requests to your IdP This allows the IdP to pre-populate the login screen with the user's email address, which gives a better user experience. Your IdP may choose to ignore the hint. After receiving a positive response, Mendix does not do any validation if the logged-in user matches the login_hint.
* Whether or not users signing in to the Mendix Platform have to use 2FA does not change the [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/) which protects sensitive activities on Mendix Cloud nodes. This remains in place and works independently of BYOIDP SSO.

### Limitations

BYOIDP SSO has the following limitations.

* If the user's email address is changed in your IdP, Mendix may not recognize it as the same account and will ask the user to set up a new Mendix account.
* `login_hint` is not optional and is always sent as part of authentication requests to the IdP.
* BYOIDP SSO only supports OIDC and does not support other protocols such as SAML.
* Once BYOIDP is activated, direct access to [Team Server](/developerportal/general/team-server/) is no longer possible using a username and password. To access code repositories from a pipeline, you need to use a personal access token (PAT).
* Mendix Platform APIs which require a PAT can use one which is created by a platform user. You cannot directly set up service accounts within Mendix once BYOIDP SSO is activated. You can set up a service-like account to consume Mendix Platform APIs in one of the following ways:
    * Use a personal account as if it were a service account
    * Create a service account in the company IdP
    * Create a service account on an email domain that is not federated with BYOIDP
* When the Mendix Admin activates the BYOIDP configuration, Mendix scrambles the Mendix passwords for all impacted users. De-activation of the feature does not roll back those changes. If you deactivate BYOIDP SSO, users have to reset their Mendix password before being able to login with their Mendix account.
* Your conditional access policies in Entra ID (formerly Azure AD) may block Studio Pro logins for versions of Mendix below 9.18, as these make use of an embedded browser. If you are using Microsoft's Intune for MDM/MAM and versions of Mendix below 9.18, you may not want to activate BYOIDP for this reason.
* You cannot associate multiple Mendix accounts (for example, an Admin account and a regular account) with a single identity in your IdP.

## Prerequisites

To set up an IdP configuration for the Mendix Platform and your Mendix app, you will need the following:

* A subscription to an OIDC compliant IdP; you need to validate that your IdP supports OIDC
    * If you are using Entra ID, Okta, Auth0, [Ping Identity](https://www.pingidentity.com), or ADFS you will be OK
    * a full list of compliant providers can be found in the [OpenID Certified OpenID Providers](https://openid.net/certification/)
* The URL for the so-called "well-known endpoint" of your IdP, where configuration details can be retrieved
    * The IdP's well-known endpoint must have a URL for the JWKS endpoint
* The Mendix Portal needs to be registered as a client in your IdP, and you need to know the corresponding client ID and secret

## Configuring Your BYOIDP Setup

As a Mendix Admin, you will find the IdP setup on the **Single Sign-On** tab of your Control Center's [Security](/control-center/security/) section.

Click **Configure Single Sign-On** to see an overview of your Single Sign-on configurations.

In this overview, you will find your current IdP configurations, both draft versions and the active one. When you create a new configuration, a pop-up screen will inform you of known limitations.

From here you can do the following:

* **Add Configuration**
* **Copy to Clipboard** the **Test Link** and **Test Email Domain** information
* **Activate** or **De-activate** a configuration
* Use the three-dot menu to **Edit**, **Duplicate**, or **Delete** a configuration

### Adding a Configuration

When adding a configuration, you will need to provide the information described below:

* **Configuration Name** – A name for the IdP setup in the SSO configuration for your own reference.
* **OpenID Connect Endpoint URL** – This is the issuer URL at your IdP. For example, if you are using Entra ID, the issuer URL is: `https://login.microsoftonline.com/550e8400-e29b-41d4-a716-446655440000/v2.0`. Mendix will extend this URL with `/.well-known/openid-configuration` to retrieve the configuration metadata, including all necessary endpoints and public key location information.
    If your IdP supports multiple protocols, make sure you enter the OIDC endpoint.

    {{% alert color="info" %}}Enter the issuer endpoint URL without `/.well-known/openid-configuration` as it will be appended automatically to form the well-known URL. {{% /alert %}}

* **Client ID** – The ID of the Mendix Portal registration in your IdP.
* **Client Secret** – The password or secret of the Mendix Portal registration in your IdP. Enter this once. After saving your configuration, it will no longer be shown to you. For information about changing this value once your configuration is active, see the [Changing the Client Secret](#client-secret) section below.
* **Select Scopes** – Selecting a scope to configure the data Mendix is allowed to read from your IdP. Mendix uses this data to map the user's identity in your IdP environment with a corresponding identity in the Mendix Portal.

    * The scope **OpenID** is required.
    * Typically the scopes **Profile** and **Email** are also needed to get the user's email address and name, which are required for SSO to fully map the user's identity. Your IdP may provide additional scopes you can use.

Use the **Copy** button to copy **the redirect URL used by the Mendix Platform Client** – the callback URL to the Mendix Portal to which your IdP needs to send the authenticated user.

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-2.png" class="no-border" >}}

Click **Next** to test your configuration

### Testing Your Configuration

Once you have configured the endpoint and the scopes, you are ready to perform the first test of your configuration. This test will perform a round trip from the Mendix Platform to your IdP and back to the platform. The test will be performed in a new tab page of your browser so your browser must allow pop-up windows.

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-3.png" class="no-border" >}}

Log in within 30 seconds using valid credentials with your IdP. Once it is successful, click **Close Window** to close the new tab page. You will now see confirmation that the test was successful and you can click **Next** to continue to mapping claims.

Click **Previous** if the test indicates that you have not entered the correct configuration details.

### Mapping Between IdP and Mendix{#attribute-mapping}

The data from your IdP may have different attribute names from the Mendix identity.

Configure which data from your IdP is mapped to the attributes of the Mendix identity. Configure at least **Foreign ID**, **Username**, and a **First Name** or **Last Name**.

{{% alert color="info" %}}
The **Username** must be in the correct form for an email address.
{{% /alert %}}

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-4.png" class="no-border" >}}

**Preview** will show you how user names will be displayed.

## Testing

When you have completed your IdP setup, you can perform a test sign-in before activating the configuration.

You can test in one of two ways:

* Use the **Test Link** for your configuration. It will redirect you to the login page of your IdP. Enter the credentials of a user known to your IdP. If the test succeeds, the Mendix Portal landing page opens.
* Copy the ***Test Email Domain** of your configuration from the overview page. Go to https://login.mendix.com/ and, in the **Username** field, paste the test email domain. The password field disappears. Click **Sign in with SSO**. This will redirect you to a login page of your IdP. Enter credentials known to your IdP. If the test succeeds, the Mendix Platform home page opens.

For advice on where to look for issues if your test fails, see the [Troubleshooting](#troubleshooting) section.

## Activating

Before activating your BYOIDP configuration, ensure you have read the [Considerations](#considerations) section below.

When you are ready, you can activate the IdP configuration from the overview page. This will have an immediate effect on the interactive login process. Mendix will also scramble the platform passwords which will take some time depending on the number of users in your company. Once all the passwords are scrambled, users will no longer be able to use these for direct access to the Team Server for apps using SVN for version control.

## Deactivating

You can deactivate the IdP configuration at any time. Although the changes start to come into effect immediately, updating your users will take some time depending on the number of users in your company. Users will have to reset their Mendix password to be able to sign-in since it was scrambled upon activation.

## Entra ID

Entra ID (formerly Microsoft Azure AD) is one of the most used IdPs, and it supports OIDC. To set up with Entra ID, follow these steps:

1. Sign in to your Microsoft Entra admin center portal and follow **Applications** > **App registrations**.
2. Create a new app registration by clicking **New registration** in the top-left corner.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-overview.png" class="no-border" >}}

3. Enter a name for your configuration, and select the preferred account type. Under **Redirect URI**, paste the callback URL you were shown when setting up the IdP in the Mendix Portal.
4. Click **Register** to save the registration.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-1.png" class="no-border" >}}

5. In the app registration details that open after you save your registration, hover over **Application (client) ID** and copy the ID to the clipboard with the button that appears.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-2.png" class="no-border" >}}

    You will need this Client ID when setting up your IdP in the Mendix Portal.

6. Click **Endpoints** in the top bar of the app registration details page. A sidebar with all available endpoints opens.
7. Copy the **OpenID Connect metadata document** URL.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-3.png" class="no-border" >}}

8. Close the sidebar with the ({{% icon name="remove" %}}) in the top-right corner. This returns you to the app registration details page.
9. Click **Certificates & secrets** in the left-hand menu bar.
10. Click **New client secret** in the page that opens.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-4.png" class="no-border" >}}

11. In the dialog box that opens, enter a name for your certificate, select an expiration type, and click **Add**.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-5.png" class="no-border" >}}

    If you wish to let the certificate to expire, write down the date the certificate will expire.

12. Copy the client secret. You need this to set up your IdP in the Mendix Portal.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-6.png" class="no-border" >}}

That's it! You are now ready to resume your IdP setup in the Mendix Portal.

For more information on setting up federation with a Microsoft Entra ID IdP, see [Quickstart: Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) in the Microsoft documentation.

### Recommended Attribute Mapping for Entra ID

For Entra ID, you can create a mapping between Entra ID and Mendix as described in [Mapping Between IdP and Mendix](#attribute-mapping), above. The most common mapping used for Entra ID is as follows:

| Identity Attribute | Entra ID Claim |
| --- | --- |
| **Foreign ID** | `oid` |
| **Username** | `preferred_username` or `email` |
| **First Name** | `given_name` |
| **Last Name** | `family_name` |

## Considerations {#considerations}

### Onboarding

Users who do not currently have a Mendix account can sign in to the Mendix Platform via your own IdP. They are then taken through onboarding onto the Mendix Portal. They do not need to sign up explicitly.

Existing users of the Mendix Portal can continue to use their accounts, but they will have to use the authentication provided by BYOIDP. They can no longer use the password they created on the Mendix Platform.

### BYOIDP and Team Server {#team-server}

Once BYOIDP is activated, direct access to Team Server is no longer possible. To access code repositories from a pipeline, you need to use a [PAT](/community-tools/mendix-profile/user-settings/#pat).

Before activating BYOIDP, your developers should set up PATs for direct access to repos (for example, from CI/CD pipelines and/or Tortoise SVN) instead of using usernames and passwords.

If developers have not created a PAT before BYOIDP SSO is activated, they can do so later, if needed.

{{% alert color="info" %}}
Access to Team Server through other mechanisms, such as via Studio Pro or using Mendix for Private Cloud, is not affected.
{{% /alert %}}

### Changing the Client Secret {#client-secret}

Once you have set up BYOIDP SSO, you may want to change the client secret that is used by the Mendix Platform to communicate securely with the SSO.

If the client secret is still active or you (as an administrator) still have an active session on the Mendix Platform, you can do one of the following:

* Clone the existing active IdP configuration, update the secret there and then activate the clone. This avoids updating all the users. This is the preferred option.
* Disable the IdP configuration, update the secret, and then enable it again.
  
If the client secret has expired, ask [Mendix Support](https://support.mendix.com/hc/en-us) to update the client secret of your active IdP configuration.

If this is unsuccessful, you can ask Mendix Support to deactivate the active IdP configuration. This means that you (and your users) without active sessions will no longer have access and will need to reset and then use your platform password. Once you have access to the platform, you can set up your IdP configuration again.

### Mendix Version

Single sign-on was introduced in Studio Pro 7.18. Your app will need to be this version or above to use BYOIDP. It is recommended that you use [LTS versions](/releasenotes/studio-pro/lts-mts/) of Studio Pro where possible.

### Multiple Email Domains for a Company

When you activate BYOIDP SSO, it will apply to all email domains which are registered to your company. If you add another email domain to your company, BYOIDP will automatically adopt it, without further actions from the Mendix administrator.

## Troubleshooting {#troubleshooting}

If you have issues using BYOIDP, the following suggestions give an initial guide to resolving the issue.

### Wrong Client Credentials

Without proper exchange of `client_id` and `client_secret` between the IdP and Mendix Platform, Mendix cannot authenticate at the `/token` endpoint, and the delegated login fails. This can happen when the wrong client credentials are supplied.

### Wrong Authentication Method

If the wrong authentication method is configured for the Mendix Platform as a client to your IdP, login fails.

Mendix supports two client authentication methods: `client_secret_post` (client credentials in the payload) or `client_secret_basic` (basic authentication; credentials in the HTTP authorization header). If the IdP indicates support for both methods at the well-known endpoint, Mendix uses `client_secret_post`. If the client configuration at your IdP for the Mendix Platform sets a different client authentication method, the IdP may reject Mendix to authenticate itself as a client to the `/token` endpoint, and the delegated login fails.

### Incorrect Conditional Access Policies

In versions below Studio Pro 9.18, an embedded browser was used for signing in. Conditional access policies in Entra ID could block this Studio Pro browser. For example, you could hit this limitation when using Microsoft's Intune for MDM/MAM with versions below 9.18.

For version 9.18 and above, Mendix Studio Pro uses the system browser for signing in to overcome this limitation.

### IdP Does Not Allow Untrusted Devices

Mendix Studio Pro 9.18 and above uses your system browser to log in.

Versions of Studio Pro below 9.18 use an embedded browser for login. This may not work when your IdP only allows trusted devices and does not recognize the embedded browser as a trusted device.

### IdP Does Not Have JWKS Endpoint

If the IdP's well-known endpoint does not have a URL for the JWKS endpoint, Mendix cannot validate the signature on the received ID-token, and the delegated authentication fails.
