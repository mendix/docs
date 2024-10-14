---
title: "Forgot Password"
url: /appstore/modules/forgot-password/
description: "Describes the configuration and usage of the Forgot Password module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module enables the users to sign up and also to reset their password. It works with the local accounts which are managed within your Mendix App. These accounts are the best choice when you do not want to use a single sign-on (SSO) solution to integrate with your existing identity and access management (IAM) infrastructure.

This module allows the end-user to enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password in both scenarios (sign up and forgot password). In the sign up case, the end-user is also asked to provide their name. For version 5.3.0 and above of the module, you can specify different templates to be sent, depending on the language in which the end-user is seeing the app.

{{% alert color="info" %}}
Versions of the Forgot Password module below 4.1.0 (for Mendix 8) and 5.1.0 (for Mendix 9 and above) have a dependency on the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module. Mendix recommends upgrading to the later version using the instructions in [Migrate from Email Module with Templates to Email Connector](#migrate-email) section below.
{{% /alert %}}

There are below versions of the Forgot Password module, depending on whether you are using Mendix Studio Pro 8, or 9 and above. These all work in the same way, and require the dependencies specified below.

| Mendix Version | Forgot Password Version |
| --- | --- |
| 10.6.0 and above | 6.0.0 |
| 9.20.0 and above | 5.1.0 |
| 9.12.7 and above | 5.x.x |
| 8.18.x | 4.x.x |

If you already use the Forgot Password module in your Mendix 8 app, you can find instructions on how to upgrade in [Upgrading from Mendix 8 to Mendix 9](#upgrade8-9) section below.

### Dependencies {#dependencies}

The Forgot Password module has the following dependencies:

* [Email Connector](/appstore/modules/email-connector/) – Versions of the Forgot Password module below 4.1.0 (for Mendix 8), and 5.1.0 (for Mendix 9 and above) have a dependency on the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module. If you are using Mendix 8 and above, Mendix recommends upgrading to the latest version using the instructions in the [Migrate from Email Module with Templates to Email Connector](#migrate-email) section below.
* [Deep Link](/appstore/modules/deep-link/) – Version of the Forgot Password module 6.0.0 (for Mendix 10.6.0 and above) does not require Deep Link module as a dependency.
* [Encryption](/appstore/modules/encryption/)
* [Mx Model Reflection](/appstore/modules/model-reflection/)

### Features

* Allows end-users to reset the password stored locally in your app
* Allows end-users to sign up for your app by validating that the end-user has access to the email address they enter by sending a password reset email
* Supports email aliases, in other words, the from address in email templates can be different from the SMTP account used to send the email
* Supports multi-language email templates for sending password reset emails

### Limitation

The Forgot Password module does not support multiple instances if any are present in the node.

## Installing the Forgot Password Module{#installing}

{{% alert color="info" %}}
In these instructions, it is assumed that your main module is **MyFirstModule**. If you are using a different module name, use that instead of **MyFirstModule**.
{{% /alert %}}

1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.
1. Add the [Dependencies](#dependencies) listed above from the Marketplace.

    {{% alert color="info" %}}You can accept any warnings about files being overwritten.{{% /alert %}}

1. Open the [App Settings](/refguide/app-settings/) and make the following changes:
    * In the [Configurations](/refguide/configuration/) tab, edit the current configuration to add a 32-character string value for the constant **Encryption.EncryptionKey**.
        {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/encryption-key.png" class="no-border" >}}
    * In the **Runtime** tab, add the microflow **Deeplink.StartDeeplink** as the **After startup** microflow or as a sub-microflow to an existing after startup microflow.
    {{% alert color="warning" %}}For the Forgot Password module version 6.0.0 (Mendix 10.6.0 and above), do not add the **Deeplink.StartDeeplink** microflow as the **After startup** microflow.{{% /alert %}}
    * If you are changing the **URL prefix** value in the **Runtime** tab, ensure that you use the same value in the URLPrefix constant of the Forgot Password module. Otherwise, the signup and reset URLs will not work.
1. Open [App Security](/refguide/app-security/) and do the following:
    * In the **User roles** tab, add a new role called *Guest* in **MyFirstModule**
    {{% alert color="warning" %}}Do not set any Deep Link userroles in the **App security** for the version 6.0.0 (Mendix 10.6.0 and above).{{% /alert %}}
    * Set the following permissions for the user roles:

        * Administrator
            * **Administration.Administrator**
            * **DeepLink.Admin**
            * **Email_Connector.EmailConnectorAdmin** or **EmailTemplate.Administrator** - **Email_Connector** permissions are needed if you are using version 4.1.0 or above (for Mendix 8) or version 5.1.0 or above (for Mendix 9 and above). **EmailTemplate** permissions are only needed if using a version which uses the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module
            * **Encryption.user**
            * **ForgotPassword.Administrator**
            * **MxModelReflection.ModeAdministrator**
            * **System.Administrator**
            * **MyFirstModule.Administrator**
        * Guest
            * **DeepLink.User**
            * **ForgotPassword.Guest_ResetPassword**
            * **ForgotPassword.Guest_SignUp**
            * **System.User**
            * **MyFirstModule.Guest**
        * User
            * **Administration.User**
            * **DeepLink.User**
            * **ForgotPassword.Guest_ResetPassword**
            * **MxModelReflection.Readonly**
            * **MxModelReflection.TokenUser**
            * **System.User**
            * **MyFirstModule.User**

    * In the **Anonymous users** tab, set **Allow Anonymous users** to *Yes*
1. Open [Navigation](/refguide/navigation/) and do the following:
    * Set **Role-based home pages** so the target of user role **Guest** is **ForgotPassword.Nav_GuestHomePage**
        {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/role-based-home.png" class="no-border" >}}
        The **Nav_GuestHomePage** microflow is the home page for an anonymous user. This microflow either shows the login page or triggers the deep link process which performs the reset password function.
    * Add the menu item **ForgotPasswordConfiguration** to the app navigation. Link this item to the **ForgotPassword.ForgotPasswordConfiguration_Edit** page and assign it to the **Administrator** user role.
        {{% alert color="warning" %}}The **ForgotPasswordConfiguration** page should be accessible to the administrator only. It allows the administrator to configure the email template and deep link, and it shows all the open password reset requests.{{% /alert %}}
1. If you are using version 5.3.0 or above of the Forgot Password module, open [Module Security](/refguide/module-security/#entity-access) for the **Email_Connector** module in the Marketplace. On the **Entity Access** tab, assign read-only access to the **Email_Connector.EmailConnectorAdmin** module role on the **EmailTemplateLanguage_EmailTemplate** template.
1. Run the application.
1. Sign in as **demo_administrator** from [Demo Users](/refguide/demo-users/) and choose the **ForgotPasswordConfiguration** menu item.
1. In the **Reset Password Email** tab, do the following:
    * Click **SMTP settings** to configure or validate SMTP settings for the [Email Connector](/appstore/connectors/email-connector/) or [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module (depending on the version of the Forgot Password module). In version 5.4.0 and above this will create a SMTP configuration which you will need to select.
    * In version 5.4.0 and above, select the SMTP configuration you want to use for sending reset password email.
    * From the drop-down menu, choose the **Reset email template** tab and provide the details for the email to be sent when an end-user has forgotten their password.

        For version 5.3.0 and above, you can **Create** and **Edit** several reset email templates. Each template is linked to a [language](/refguide/language-settings/) you have added to your app. Based on the language in which end-user sees the app, the associated template will be used to send the reset email. If no template is explicitly associated with the end-user's language, the template which is not associated with any language will be used. For versions below 5.3.0, you can only set up a single template.

        For version 5.4.0 and above, the **fromAddress** in the email template does not have to be the same as the address in your SMTP configuration. For more information, see [Using Email Aliases](#email-aliases) section below.

1. In the **Signup Email** tab, provide the details for the email to be sent when an end-user wants to sign up. These options are same as described above, for the **Reset Password Email** tab.

    {{% alert color="info" %}}
To disable the sign up functionality and use the Forgot Password module only for resetting passwords, do the following:

* Remove the **Sign-up** button from the **LoginSnippet** snippet in the **_Use Me** folder of the Forgot Password Marketplace module.
* Remove all the actions from the **CreateNewUserFromSignUp** microflow.
    {{% /alert %}}

1. In the **Deeplink** tab, configure the deeplink to use the **ForgotPassword.Step3_DL_SetNewPassword** microflow.
        {{% alert color="info" %}}The **Deeplink** tab is not available in version 6.0.0 (for Mendix 10.6.0 and above) as the Deep Link module has been deprecated.{{% /alert %}}
        {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/configure-deeplink.png" class="no-border" >}}

### Using Email Aliases{#email-aliases}

From version 5.4.0 of the Forgot Password module, the **fromAddress** used in the email template does not have to be the same as the email address in the SMTP configuration. This provides flexibility, allowing you to send emails from different addresses while utilizing the same SMTP configuration for authentication.

Consider a scenario, where your SMTP username is *user@example.com* and you have configured this account in your SMTP configuration. You could set the **fromAddress** in your email template to be any email address or alias you have control over, such as **sales@example.com**, **support@example.com**, or **ceo@example.com**, and this is what the recipient will see in the email they receive.

{{% alert color="info" %}}
You may have to configure an email alias on your SMTP server if you are using a different **fromAddress** in your email template than the email address of your selected SMTP account. Some SMTP servers will not send emails if the **fromAddress** is not associated with the SMTP account.
{{% /alert %}}

## Testing the Forgot Password Module

1. Sign out of the app.
1. On the sign in page, click **Signup**.
1. Enter your name and email ID and click **Send**. You will get confirmation that a password recovery email has been sent.
  
    {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/test-signup.png" class="no-border" >}}

    You will receive an email containing a link to reset your password.
  
    {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/email-example.png" class="no-border" >}}

1. Open the link in the browser. You can now reset your password.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/reset-password-page.png" class="no-border" >}}

## Upgrading to a Later Version

Follow the sections below to upgrade your Mendix app to later version.

### Upgrading from Mendix 8 to Mendix 9 {#upgrade8-9}

To convert the Mendix 8.18.x to Mendix 9.12.5 or above, follow the steps below:

1. Upgrade all the [dependencies](#dependencies) of the Forgot Password module to the latest version compatible with Mendix 9.
1. Open your app in Mendix 9.12.5 or above and allow it to be upgraded.
1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.

    You will see four errors in the [Errors Pane](/refguide/errors-pane/).

    {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/upgrade-errors.png" alt="Four CE1613 errors in the errors pane" class="no-border" >}}

1. Double-click one of the errors to open the error page and change the (primary) layout to **Atlas_TopBar(Atlas_UI_Resources)**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/forgot-password/change-layout.png" class="no-border" >}}

    This will resolve two of the errors.
1. Open the error page and again change the (primary) layout to **Atlas_TopBar(Atlas_UI_Resources)**.

You have now successfully upgraded the Forgot Password Module to work with Mendix 9.

### Upgrading from Mendix 9 to Mendix 10 {#upgrade9-10}

To convert the Mendix 9.24.2 to Mendix 10.6.0 or above, follow the steps below:

1. Upgrade all the [dependencies](#dependencies) of the Forgot Password module to the latest version compatible with Mendix 10.
1. Open your app in Mendix 10.6.0 or above and allow it to be upgraded.
1. Import the [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module into your app.

    You will see four errors in the [Errors Pane](/refguide/errors-pane/).

1. Click one of the errors and select the **Remove Property Spacing** option. This will resolve all of the errors.

You have now successfully upgraded the Forgot Password Module to work with Mendix 10.

## Migrating from Email Module with Templates to Email Connector{#migrate-email}

Below versions of the Forgot Password module use the [Email Connector](/appstore/connectors/email-connector/) module rather than the deprecated [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module.

* Version 4.1.0 (for Mendix 8)
* Version 5.1.0 (for Mendix 9 and above)
* Version above 5.1.0

There is a community-supported [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) to assist with the upgrade to these versions.

{{% alert color="warning" %}}
Use these instructions before you upgrade the Forgot Password module. The point at which you should get the new version is included in the steps below.
{{% /alert %}}

### Dependencies

Migrating to Email Connector Module has the following dependencies:

* An app that uses Mendix 8 or above.
* The email templates must be set up as follows:

    * The reset password template must contain *_Reset* in the template name.
    * The signup template must contain *_Signup* in the template name.

### Migration Process

#### Importing Additional Modules

Import the modules which are needed for the migration process.

1. Import the [Email Connector](/appstore/connectors/email-connector/) module.
2. Import the [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) module.

Troubleshoot any Atlas UI issues related to the [Email Connector](/appstore/connectors/email-connector/) and [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) modules that may arise due to your Studio Pro version.

See the documentation for the [Email Connector](/appstore/modules/email-connector/) and the [Email Connector Migration Utility](https://github.com/mendixlabs/EmailConnectorMigrationUtility) (on GitHub) for more information.

#### Configuring App Security

You need to allow the administrator role to access these new modules.

1. Go to the **App Security** > **[User Roles](/refguide/user-roles/)** tab.
2. Edit the **Administrator** role.
3. Add the following user roles to the Administrator user role:
    * **Email_Connector.EmailConnectorAdmin**
    * **MigrationUtility.EmailConnectorMigrationUtilAdmin**

#### Performing Migration

Follow the [Migration Steps](https://github.com/mendixlabs/EmailConnectorMigrationUtility#migration-steps) in the GitHub repo of the community-supported Email Connector Migration Utility tool to configure the migration utility and migrate the data from the Email Module with Templates module to the Email connector module.

#### Actions After the Migration

1. Import the latest version of the Forgot Password module (v4.1.0 or above for Mendix 8, or v5.1.0 or above for Mendix 9 and above). This will have the [Email Connector](/appstore/modules/email-connector/) module as a dependency.
1. Delete the [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) module.
1. Delete the [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) module.
1. Remove the Administrator user roles for `EmailTemplate` and `MigrationUtility`.
1. Remove any module roles related to `EmailTemplate` and `MigrationUtility`.
1. Check the **userlib** folder in your app directory and remove the Java*.jars* related to the Email Module with Templates module as indicated by a *.EmailTemplate.RequiredLib* file (for example, *activation-1.1.1.jar* and the related *activation-1.1.1.jar.EmailTemplate.RequiredLib*).
1. Use the [Clean Deployment Directory](/refguide/app-menu/#clean-deployment-directory) in Studio Pro.
1. Run the application and test the functionality.

### Migration FAQs

#### What Happens If the Email Templates Don't Have the Right Names?

Associations between Email-connector.EmailTemplate and ForgotPassword.Configuration will not be migrated and you will not be able to see your existing templates. You will have to create the templates again.

#### What Happens If the Database Contains More than One Template with the Same Template Name?

Only the first one found during the migration will be associated with the Email Connector configuration.

#### What Happens If I Click **Start Migration** on the **ETToEC Overview** Page Multiple Times?

Your data will be migrated multiple times and duplicate records will be created in the database.

#### What Should I Do If My Email Templates Are Not Available after Migration?

You will have to create templates again using the Forgot Password configuration page, as described in [Installing the Forgot Password Module](#installing) section above.
