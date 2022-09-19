---
title: "Forgot Password"
url: /appstore/modules/forgot-password/
category: "Modules"
description: "Describes the configuration and usage of the Forgot Password module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "forgot password", "password", "login", "credentials", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module enables the users to sign up and also to reset their password. It works with the local accounts which are managed within your Mendix app. These are the best choice when you do not want to use a Single Sign On (SSO) solution to integrate with your existing Identity and Access Management (IAM) infrastructure.

This module allows the end-user to enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password in both scenarios (Sign up and Forgot password). In the sign up case, the end-user will also be asked to provide their name.

There are three versions of the Forgot Password module, depending on whether you are using Mendix Studio Pro version 7, 8, or 9 — see the table, below. These all work in the same way, and require the same dependencies specified below.

| Mendix Version | Forgot Password Version |
| --- | --- |
| 9.12.5 and above | 5.x.x |
| 8.18.x | 4.x.x |
| 7.23.x | 3.6.x and above |

If you already use the Forgot Password module in your Mendix version 8 app, you can find instructions on how to upgrade in [Upgrading from Mendix Version 8 to Mendix Version 9](#upgrade8-9), at the end of this page.

### 1.1 Dependencies {#dependencies}

The Forgot Password module has the following dependencies:

* [E-mail Module with Templates](/appstore/modules/email-with-templates/)
* [Deep Link](/appstore/modules/deep-link/)
* [Encryption](/appstore/modules/encryption/)
* [Mx Model Reflection](/appstore/modules/model-reflection/)

## 2 Installing the Forgot Password Module

{{% alert color="info" %}}
In these instructions, it is assumed that your main module is `MyFirstModule`. If you are using a different module name, use that instead of `MyFirstModule`.
{{% /alert %}}

1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.
1. Add the [Dependencies](#dependencies) listed above from the Marketplace.
    {{% alert color="info" %}}You can accept any warnings about files being overwritten.{{% /alert %}}
1. Open the [App Settings](/refguide/app-settings/) and make the following changes:
    * In the [Configurations](/refguide/configuration/) tab, edit the current configuration to add a 32-character string value for the constant `Encryption.EncryptionKey`
        {{< figure src="/attachments/appstore/modules/forgot-password/encryption-key.png" >}}
    * In the **Runtime** tab, add the microflow `Deeplink.StartDeeplink` as the **After startup** microflow or as a sub-microflow to an existing after startup microflow
1. Open [App security](/refguide/app-security/) and do the following:
    * In the **User roles** tab, add a new role, `Guest` in `MyFirstModule`
    * Set the following permissions for the user roles:
        * Administrator – `Administration.Administrator, DeepLink.Admin, EmailTemplateAdministrator, Encryption.user, ForgotPassword.Administrator, MxModeIReflection.ModeAdministrator. System.Administrator, MyFirstModule.Administrator`
        * Guest – `DeepLink.User, ForgotPassword.Guest_ResetPassword, ForgotPassword.Guest_SignUp, System.User, MyFirstModule.Guest`
        * User – `Administration.User. DeepLink.User, EmailTemplate.Administrator, ForgotPassword.Guest_ResetPassword, MxModelReflection.Readonly, MxModelReflection.TokenUser. System.User. MyFirstModule.User`
    * In the **Anonymous users** tab, set **Allow Anonymous users** to *Yes*
1. Open [Navigation](/refguide/navigation/) and do the following:
    * Set **Role-based home pages** so the target of user role `Guest` is `ForgotPassword.Nav_GuestHomePage`
        {{< figure src="/attachments/appstore/modules/forgot-password/role-based-home.png" >}}
        The `Nav_GuestHomePage` microflow is the home page for an anonymous user. This microflow will either show the Login Page or trigger the deep link process which performs the reset password function.
    * Add the menu item `ForgotPasswordConfiguration` to the app navigation. This item should open the page `ForgotPassword.ForgotPasswordConfiguration_Edit` and be assigned to the `Administrator` user role.
        {{% alert color="warning" %}}The `ForgotPasswordConfiguration` page should be accessible to the administrator only. It allows the administrator to configure the email template and deep link, and it shows all the open password reset requests.{{% /alert %}}
1. Run the application.
1. Login as `demo_administrator` from [Demo Users](/refguide/demo-users/) and choose the **ForgotPasswordConfiguration** menu item.
1. In the **Reset Password Email** tab, do the following:
    * Click **SMTP settings** to configure or validate SMTP settings for the [Email with Templates](/appstore/modules/email-with-templates/) module
    * Click **Reset email template** and provide the details for the email sent when an end-user has forgotten their password
        {{< figure src="/attachments/appstore/modules/forgot-password/email-template.png" >}}
1. In the **Signup Email** tab, provide the details for the email sent when an end-user wants to sign up to use the app.
    {{% alert color="info" %}}
To disable the signup functionality and use the Forgot Password module only for resetting passwords, do the following:

* remove the **Sign-up** button from the `LoginSnippet` snippet in the `_Use Me` folder of the `ForgotPassword` Marketplace module
* remove all the actions from the `CreateNewUserFromSignUp` microflow.
    {{% /alert %}}
1. In the **Deeplink** tab, configure the deeplink to use the `ForgotPassword.Step3_DL_SetNewPassword` microflow.
        {{< figure src="/attachments/appstore/modules/forgot-password/configure-deeplink.png" >}}

## 3 Testing the Forgot Password Module

1. Logout of the app.
1. On the sign in page, click `Signup`.
1. Enter your name and mail ID and click `Send`.
    You will get confirmation that a password recovery email has been sent         {{< figure src="/attachments/appstore/modules/forgot-password/test-signup.png" >}}
    You will receive an email containing a link to reset your password.
        {{< figure src="/attachments/appstore/modules/forgot-password/email-example.png" >}}
1. Open the link in the browser.
    You can now reset your password.        {{< figure src="/attachments/appstore/modules/forgot-password/reset-password-page.png" >}}

## 4 Upgrading from Mendix Version 8 to Mendix Version 9 {#upgrade8-9}

To convert from Mendix 8.18.x to Mendix 9.12.5 or above, follow the steps below from within Studio Pro:

1. Upgrade all the [dependencies](#dependencies) of the Forgot Password module to the latest version compatible with Mendix version 8.
1. Open your app in Mendix 9.12.5 or above and allow it to be upgraded.
1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.

    You will see four errors in the [Errors Pane](/refguide/errors-pane/).
    {{< figure src="/attachments/appstore/modules/forgot-password/upgrade-errors.png" alt="Four CE1613 errors in the errors pane" >}}
1. Open the page of one of the errors (for example, by double-clicking the error) and change the (master) layout to `Atlas_TopBar(Atlas_UI_Resources)`.
    {{< figure src="/attachments/appstore/modules/forgot-password/change-layout.png" >}}
1. This will resolve two of the errors. Open the page of error and again change the (master) layout to `Atlas_TopBar(Atlas_UI_Resources)`.

You have now successfully upgraded the Forgot Password Module to work with Mendix version 9.
 