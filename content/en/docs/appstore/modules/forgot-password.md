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

This module allows the end-user to enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password in both scenarios (Sign up and Forgot password). In the sign up case, the end-user will also be asked to provide their name. For version 5.3.0 of the module and above, you can specify different templates to be sent, depending on the language in which the end-user is seeing the app.

{{% alert color="info" %}}
Versions of the Forgot Password module below 4.1.0 (Mendix version 8) and 5.1.0 (Mendix version 9 and above) have a dependency on the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module. We recommend that you upgrade to a later version using the instructions in [Migrate from Email Module with Templates to Email Connector](#migrate-email), below.

There is no alternative version for use with Mendix version 7.
{{% /alert %}}

There are three versions of the Forgot Password module, depending on whether you are using Mendix Studio Pro version 7, 8, or 9 and above — see the table, below. These all work in the same way, and require the same dependencies specified below.

| Mendix Version | Forgot Password Version |
| --- | --- |
| 9.12.7 and above | 5.x.x¹ |
| 8.18.x | 4.x.x |
| 7.23.x | 3.6.x and above |

¹ If you are using Mendix version 9.20.0 or above, you must use version 5.1.0 or above of the Forgot Password module.

If you already use the Forgot Password module in your Mendix version 8 app, you can find instructions on how to upgrade in [Upgrading from Mendix Version 8 to Mendix Version 9](#upgrade8-9), at the end of this page.

### 1.1 Dependencies {#dependencies}

The Forgot Password module has the following dependencies:

* [Email Connector](/appstore/connectors/email-connector/)²
* [Deep Link](/appstore/modules/deep-link/)
* [Encryption](/appstore/modules/encryption/)
* [Mx Model Reflection](/appstore/modules/model-reflection/)

² Versions of the Forgot Password module below 4.1.0 (Mendix version 8) and 5.1.0 (Mendix version 9 and above), and those for Mendix version 7 (3.xx) have a dependency on the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module. We recommend that if you are using Mendix versions 8 and above, you upgrade to a later version using the instructions in [Migrate from Email Module with Templates to Email Connector](#migrate-email), below.

## 2 Installing the Forgot Password Module{#installing}

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

        * Administrator
            * `Administration.Administrator`
            * `DeepLink.Admin`
            * `Email_Connector.EmailConnectorAdmin or EmailTemplate.Administrator³`
            * `Encryption.user`
            * `ForgotPassword.Administrator`
            * `MxModeIReflection.ModeAdministrator`
            * `System.Administrator`
            * `MyFirstModule.Administrator`
        * Guest
            * `DeepLink.User`
            * `ForgotPassword.Guest_ResetPassword`
            * `ForgotPassword.Guest_SignUp`
            * `System.User`
            * `MyFirstModule.Guest`
        * User
            * `Administration.User`
            * `DeepLink.User`
            * `ForgotPassword.Guest_ResetPassword`
            * `MxModelReflection.Readonly`
            * `MxModelReflection.TokenUser`
            * `System.User`
            * `MyFirstModule.User`

            ³ `Email_Connector` permissions are needed if you are using version 4.1.0 or above (Mendix version 8) or version 5.1.0 or above (Mendix version 9 and above). `EmailTemplate` permissions are only needed if using a version which uses the deprecated Email Module with Templates module.

    * In the **Anonymous users** tab, set **Allow Anonymous users** to *Yes*
1. Open [Navigation](/refguide/navigation/) and do the following:
    * Set **Role-based home pages** so the target of user role `Guest` is `ForgotPassword.Nav_GuestHomePage`
        {{< figure src="/attachments/appstore/modules/forgot-password/role-based-home.png" >}}
        The `Nav_GuestHomePage` microflow is the home page for an anonymous user. This microflow will either show the Login Page or trigger the deep link process which performs the reset password function.
    * Add the menu item `ForgotPasswordConfiguration` to the app navigation. This item should open the page `ForgotPassword.ForgotPasswordConfiguration_Edit` and be assigned to the `Administrator` user role.
        {{% alert color="warning" %}}The `ForgotPasswordConfiguration` page should be accessible to the administrator only. It allows the administrator to configure the email template and deep link, and it shows all the open password reset requests.{{% /alert %}}
1. If you are using version 5.3.0 or above of the Forgot Password module, open [Module Security](/refguide/module-security/#entity-access) for the **Email_Connector** module in the **Marketplace Modules** and, in the **Entity Access** tab, give read-only access to the `EmailTemplateLanguage_EmailTemplate` association to the module role `Email_Connector.EmailConnectorAdmin`.
1. Run the application.
1. Login as `demo_administrator` from [Demo Users](/refguide/demo-users/) and choose the **ForgotPasswordConfiguration** menu item.
1. In the **Reset Password Email** tab, do the following:
    * Click **SMTP settings** to configure or validate SMTP settings for the [Email Connector](/appstore/connectors/email-connector/) or [Email with Templates](https://marketplace.mendix.com/link/component/259/) module (depending on the version of the Forgot Password module).
    * Choose the **Reset email template** tab and provide the details for the email to be sent when an end-user has forgotten their password.

        For version 5.3.0 and above, you can **Create** and **Edit** several reset email templates, each of which is linked to a [language](/refguide/language-settings/) you have added to your app. The template linked to the language in which the end-user sees the app will be used to send the email. If there is no template explicitly associated with the end-user's language, the template which is not associated with any language will be used.

        For versions below 5.3.0, you will only be able to set up a single template.

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
    You can now reset your password.
        {{< figure src="/attachments/appstore/modules/forgot-password/reset-password-page.png" >}}

## 4 Upgrading from Mendix Version 8 to Mendix Version 9 {#upgrade8-9}

To convert from Mendix 8.18.x to Mendix 9.12.5 or above, follow the steps below from within Studio Pro:

1. Upgrade all the [dependencies](#dependencies) of the Forgot Password module to the latest version compatible with Mendix version 8.
1. Open your app in Mendix 9.12.5 or above and allow it to be upgraded.
1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.

    You will see four errors in the [Errors Pane](/refguide/errors-pane/).
    {{< figure src="/attachments/appstore/modules/forgot-password/upgrade-errors.png" alt="Four CE1613 errors in the errors pane" >}}
1. Open the page of one of the errors (for example, by double-clicking the error) and change the (primary) layout to `Atlas_TopBar(Atlas_UI_Resources)`.
    {{< figure src="/attachments/appstore/modules/forgot-password/change-layout.png" >}}
1. This will resolve two of the errors. Open the page of error and again change the (primary) layout to `Atlas_TopBar(Atlas_UI_Resources)`.

You have now successfully upgraded the Forgot Password Module to work with Mendix version 9.

## 5 Migrating from Email Module with Templates to Email Connector{#migrate-email}

Versions 4.1.0 (Mendix version 8) and 5.1.0 (Mendix version 9 and above) and above of the Forgot Password module use the [Email Connector](/appstore/connectors/email-connector/) module rather than the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module. There is a community-supported [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) to help with your upgrade to these versions.

{{% alert color="warning" %}}
Use these instructions before you upgrade the Forgot Password module. The point at which you should get the new version is included in the steps below.
{{% /alert %}}

### 5.1 Dependencies

* An app using Mendix version 8 or above.

    The Forgot Password module versions compatible with Mendix version 7 (3.xx) continue to use the Email Module with Templates module as the Email Connector module is not compatible with Mendix version 7.
* The email templates must be set up as follows:

    * The reset password template must contain *_Reset* in the template name
    * The signup template must contain *_Signup* in the template name

### 5.2 Migration Process

#### 5.2.1 Importing Additional Modules

Import the modules which are needed for the migration process.

1. Import the [Email Connector](https://marketplace.mendix.com/link/component/120739) module.
2. Import the [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) module.

Troubleshoot any Atlas UI issues that may arise related to the Email Connector and Email Connector Migration Utility modules, due to your Studio Pro version.

See the documentation for the [Email Connector](/appstore/connectors/email-connector/) and the [Email Connector Migration Utility](https://github.com/mendixlabs/EmailConnectorMigrationUtility) (on GitHub) for more information.

#### 5.2.2 Configuring App Security

You need to allow the administrator role to access these new modules.

1. Go to the **App Security** > **[User Roles](/refguide/user-roles/)** tab.
2. Edit the **Administrator** role.
3. Add the following user roles to the Administrator user role:
    * Email_Connector.EmailConnectorAdmin
    * MigrationUtility.EmailConnectorMigrationUtilAdmin

#### 5.2.3 Performing Migration

Follow the [Migration Steps](https://github.com/mendixlabs/EmailConnectorMigrationUtility#migration-steps) in the GitHub repo of the community-supported Email Connector Migration Utility tool to configure the migration utility and migrate the data from the Email Module with Templates module to the Email connector module.

#### 5.2.4 Actions After the Migration

1. Import the latest version of the Forgot Password module (v4.1.0 or above for Mendix version 8, or v5.1.0 or above for Mendix version 9 and above). This will have the Email Connector module as a dependency.
1. Delete the Email Module with Templates module.
1. Delete the Email Connector Migration Utility module.
1. Remove the Administrator user roles for EmailTemplate and MigrationUtility.
1. Remove any module roles related to EmailTemplate and MigrationUtility.
1. Check the userlib folder in your app directory and remove the Java jars related to the Email Module with Templates module as indicated by a .EmailTemplate.RequiredLib file (for example, activation-1.1.1.jar and the related activation-1.1.1.jar.EmailTemplate.RequiredLib).
1. Use the [Clean Deployment Directory](/refguide/app-menu/#clean-deployment-directory) in Studio Pro.
1. Run the application and test the functionality'.

### 5.3 Migration FAQ’s

#### 5.3.1 What Happens If the Email Templates Don't Have the Right Names?

Associations between Email-connector.EmailTemplate and ForgotPassword.Configuration will not be migrated and you will not be able to see your existing templates. You will have to create the templates again.

#### 5.3.2 What Happens If the Database Contains More than One Template with the Same Template Name?

Only the first one found during the migration will be associated with the Email Connector configuration.

#### 5.3.3 What Happens If I Click **Start Migration** on the **ETToEC Overview** Page Multiple Times?

Your data will be migrated multiple times and duplicate records will be created in the database.

#### 5.3.4 What Should I Do If My Email Templates Are Not Available after Migration?

You will have to create templates again using the ForgotPassword configuration page, as described in [Installing the Forgot Password Module](#installing), above.
