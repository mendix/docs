---
title: "Advanced SAML Configuration and Troubleshooting"
url: /appstore/modules/saml/advanced-configuration
linktitle: "Advanced Configuration and Troubleshooting"
weight: 40
description: "Describes the advanced configuration and troubleshooting for the SAML module."
---

## Introduction

This document explores advanced configurations and troubleshooting strategies for the SAML module, including multitenant setup, certificate management, login page customization, and deep link integration.

## Advanced Configuration

In this section, you can learn about advanced configurations for the SAML module. For basic configuration and usage, refer to the [SAML](/appstore/modules/saml/) documentation.

### Multitenant Behavior

The resource folder contains a file called *SAMLConfig.properties*. In this file, you can optionally override advanced settings from the SAML module. Usage of this file is optional. When the file does not exist, or you do not specify a setting, the module will use its default behavior.
This file contains the documented properties, and example lines show the default values of these options.
With these settings, you can configure the behavior of this module and improve the multitenant behavior of your application. For plain SAML authentication, it is best to leave this file unchanged.

If you are using a custom URL, see [How Do I Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL?](/developerportal/deploy/custom-domains/#use-custom-url) in the *Custom Domains* documentation.

### Use a Certificate Issued by a Certificate Authority {#use-ca}

By default, the SAML SSO module will use self-signed certificates. It is, however, also possible to use certificates issued by a certificate authority (CA).

SAML SSO supports 2 file formats:

* a PKCS 12 file, which typically has an extension .pfx or .p12.
* a jks file.

To use a CA certificate, upload it as your key store file as described in [Managing the Keys and Key Store](/appstore/modules/saml/idp-attributes/#keystore).
Remember to do the following:

* Set the certificate password in the `KeystorePassword` constant of your app to be able to read the contents of the uploaded key store.
* Use an alias for the certificate — this must be the name parameter that is provided when creating the certificate you are uploading. If the values do not match, the SAML module will fall back to using a self-signed certificate instead.
* The value of the configured SP EntityID must match the alias that is included in the uploaded key store.

### Customizing the Login Page

The Mendix runtime/system module comes with a default login page. When using SAML with a single IdP, this page is not required.
You need to customize this login page when end-users have different ways of login:

1. If you want to use both the Mendix (local) login and the SSO login:

    1. Go to the **App** > **Show App Directory in Explorer** > **theme/web** folder (for Mendix versions below 9.0.0, this is the **theme** folder).
    2. Rename `login.html` to `login-without-sso.html`.
    3. Rename `login-with-mendixsso-button.html` to `login.html`.
    4. Open login.html, update the **href** to `/SSO`, and give a button name.

    Your app is now configured to use Mendix SSO login.
2. If you want to connect your app with multiple IdPs, and the end-user of your app needs to select the IdP to use for login.
    Follow the steps below:

    1. Go to the **App** > **Show App Directory in Explorer** > **\implementation\DiscoveryHandler.java**
    2. Find the template **saml2-discovery-binding.vm** and add your customization.

### Custom Settings

The resources folder contains the *SAMLConfig.properties* file, and through this file, advanced settings can be configured for the module. This file contains the settings along with documentation on the settings. Through this file, it is possible to alter the URLs used as well as how the application behaves in a multitenant environment. The file also specifies all the default values and behavior in more detail.

If you are using a custom URL, see [How Do I Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL?](/developerportal/deploy/custom-domains/#use-custom-url) in the *Custom Domains* documentation.

## Testing and Troubleshooting

When testing and debugging the configuration, an option is to view the messages in the log files. A detailed cause of the failure will be printed in case something goes wrong.

When enabling the log node SSO to show trace messages, you can find detailed information from every step in the process. This allows for an easy analysis of where potential configuration errors occur. Enabling trace messages for the SSO log node will also allow for detailed response messages to the user trying to sign in. By default, every failed login attempt always results in this message: “Unable to validate the SAML message!” After enabling trace logging, you can see the exact cause of the failure in the browser. In case of exceptions, you can even see the stack trace. You should not have this enabled in production, but it does allow for easier and faster testing of the configuration.

### Error Messages

* **"The application hasn't been properly configured to support single sign-on."** – This message indicates an incomplete IdP configuration. In more detailed error messages (via the log file), you are able to see which property in the IdP configuration has not been configured.
* **"Unable to complete the request"** – A message has been received that does not have a RelayState/RequestID that matches any of the previously generated IDs (or the message has been answered already). If you get this message, you should validate the message communication and confirm that you are not using unsolicited requests. Or, you can enable by checking the box to allow for IdP-initiated authentication.
* **"The authentication was successful, but there is no account available in this application."** – There is no account that matches the identifying assertion, by downloading the SAMLResponse message, you can see the assertion attributes in the XML file to validate which user name has been sent.
* **"Your account hasn't been configured to access this application."** – There is a user account available in the application that matches the identifying assertion, but the user does not have user roles, or the user is not active. 
* **"An unexpected error occurred while creating a session"** – An uncaught exception occurred, which could be a configuration error or a situation that has not been supported by the module. More information should be available in the stack trace.
* **"The response from the identity provider isn't valid."** – The response from the IdP does not contain any assertion attributes.
* **"No valid SSO Configuration could be found for entity Id: [IdP Alias]"** – Either the specified IdP configuration has not been activated, or an error occurred when reloading the configuration. The error message when reloading the configuration should give more information about the exact problem. The configuration is loaded on startup, when (de-)activating the configuration, or when saving an active configuration.
* **"Unsupported action: [action], only ....."** – The URL is incorrect. Validate that the URL is correctly structured as *action: login, assertion, metadata, or discovery*.
* **“MSIS7046: The SAML protocol parameter ‘RelayState’ was not found or is not valid.”** – This error can be shown on the ADFS server, most likely when you are using Mac OSX and a Safari browser. Setting the `BindingURI_Redirect` constant to true might help resolve the issue. By default, Mendix favors the `Post` binding, as the maximum size exceeds that of a `Redirect` binding due to its use of cookies and post information instead of URL parameters. The size can be a factor when using encryption.
* **"Unable to validate Response, see SAMLRequest overview for detailed response. Error: An error occurred while committing user: p:'johndoe@company.com'/u:'JoHnDoE@CoMpAnY.CoM'"** – All user names passing through the SAML module are converted to lower-case, so make sure all the existing user names and new user names are also converted to lower-case. This is because certain systems are not case-sensitive (for example, Active Directory).
* **“Could not create a session for the provided user principal.”** – This error can be shown if the IdP configuration does not contain any application attributes for the entity where the user (and user principal) is to be found (and stored).
* **"WARN org.apache.xml.security.signature.XMLSignature - Signature verification failed"** – This warning occurs when the signature validation process fails due to multiple certificates in the IdP metadata used for SSO. As the service provider attempts to verify the signature against each certificate, it logs **Signature verification failed** warnings for mismatched certificates. Separate messages are generated to specify the exact issue: **The response is not signed correctly** if the response signature fails, and **The assertion is not signed correctly** if the assertion signature fails. These messages also include the identifier of the key used during verification, providing more clarity on the cause of the failure.

### Troubleshooting an Endless Redirect Loop in Mendix 9 and 10

When using the [SAML](https://marketplace.mendix.com/link/component/1174) module for SSO in Mendix 9 and 10, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded.

To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time.

If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings/).

### Troubleshooting an Endless Redirect Loop to the Login Page (Mendix 10.9 to 10.12.2)

When using the SAML module with Mendix version 10.9 to 10.12.2, you may encounter an endless redirect loop to the login page. This issue is related to the session cookie handling in these versions. To resolve this redirect loop, Mendix recommends upgrading to Mendix version 10.12.3 or above. If a user logs in on one tab and then attempts to log in on another tab, a `401` error may initially appear. However, after the browser reloads, the error will be resolved as the session is validated and synchronized.

### Testing a New ‘Deploy-Time’ SAML Configuration

If you detect an error during start-up, the application will start, although SSO via SAML may not work. You can log in as the local MxAdmin user and make the necessary configuration adjustments to get the SSO working, and then you can make the necessary adjustments in the deploy-time configuration.

## Read More

* [OIDC SSO](/appstore/modules/oidc/)
* [SAML](/appstore/modules/saml/)
* [Reference Guide for SAML IdP Configuration](/appstore/modules/saml/idp-attributes/)
* [Just-In-Time User Provisioning via SAML](/appstore/modules/saml/user-provisioning/)
