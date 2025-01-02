---
title: "Mendix SSO"
url: /appstore/modules/mendix-sso/
description: "Describes the configuration and usage of the Mendix SSO module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Please do not rename the anchor #supplements in this document as it is used in links from the module release notes.
---

## Introduction

With the [Mendix SSO](https://marketplace.mendix.com/link/component/111349/) module, you can utilize single sign-on functionality by directly integrating with the Mendix identity provider and leveraging the [OpenID Connect](https://openid.net/connect/) framework.

This module allows end-users to sign in with their Mendix account with the click of a button, instead of requiring their local user credentials. This module avoids having to deal with local user management or password reset flows for the test and acceptance phases of your app development.

{{% alert color="warning" %}}
The end-users of the app need to [sign up for a Mendix account](https://signup.mendix.com/) before they can sign in to your app.
{{% /alert %}}

{{% alert color="info" %}}
For Mendix 9.20 and above, you need to use v4.0.1 or above of the Mendix SSO module.
{{% /alert %}}

### Typical Usage Scenarios{#typical-usage}

The Mendix SSO module is typically used when you are collaborating in a small team to prepare the functionality of your app for production. During such an interactive development process, this brings two benefits:

* The end-users get a single sign-on experience using their Mendix account and are not burdened with yet another set of credentials
* You do not have to connect your app immediately to the identity provider (IdP) for your target group of end-users

Once your app is ready to be released into production with a wider group of end-users, you may want to switch from using Mendix SSO to another authentication method, such as [OIDC SSO](/appstore/modules/oidc/) or [SAML](/appstore/modules/saml/).

Mendix SSO is also a good choice when you develop a Mendix app that is targeted at Mendix developers, since those end-users already have a Mendix account.

### Features

The Mendix SSO module has the following features:

* Simple steps for adding the module to your app, no more configuration required
* Single sign-on with your Mendix account for any application that implements this module
* App end-user access management that is handled in the [Mendix Portal](/developerportal/)

{{% alert color="info" %}}
[Mendix Admins](/control-center/company-settings/) can manage [groups](/control-center/groups/) that grant app permissions to groups of users.
{{% /alert %}}

### Limitations

The Mendix SSO module has the following limitations:

* Using Mendix SSO will present end-users with screens that are Mendix-branded. This means that the module is not suitable for use beyond the [typical usage scenarios](#typical-usage) described above.
* This module does not work for [native mobile](/refguide/native-mobile/) apps.
* The default app **Logout** action resolves to the origin location found in a session cookie, which (re)triggers the `/openid/login/` endpoint, which logs the end-user in again.

### Dependencies

Your app has to be deployed on Mendix Cloud in order to use this module. Mendix SSO is only activated when your app is deployed to Mendix Cloud.

When you run your app locally, you will need to use local credentials. If it is deployed to a different cloud platform (for example, [Mendix for Private Cloud](/developerportal/deploy/private-cloud/) or [SAP BTP](/developerportal/deploy/sap-cloud-platform/)), you can use the Mendix [Administration](/appstore/modules/administration/) module, or connect to a central IdP using [OIDC SSO](/appstore/modules/oidc/) or [SAML](/appstore/modules/saml/).

## Installation and Configuration

Where the Mendix SSO module has been added to a Mendix app templates, all you have to do is set your security level to **Production** and your end-users will be able to sign in. You can see if your app has the Mendix SSO module, and which version it has, by looking in the **Marketplace modules** section in the **App Explorer** for your app. The version number is recorded in the **Version** constant within the module.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/mxsso-app-store-module.png" class="no-border" >}}

If your app does not have the Mendix SSO module, it is available from the Mendix Marketplace [here](https://marketplace.mendix.com/link/component/111349/). Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import it into your app and then follow the instructions in [Setting Up Mendix Single Sign-On](#setting-up), below.

If you need a newer version of the Mendix SSO module (for example, to use a new feature), then it is also available from the Marketplace via the same link.

{{% alert color="info" %}}
For Mendix 9.20 and above, you need to use v4.0.1 or above of the Mendix SSO module.
{{% /alert %}}

In addition, the Mendix SSO module has a default implementation for user administration. This can be used in any Mendix app, but if you want to implement customized user administration, this is also possible. For more information, see [Customizing Mendix SSO](#customizing)section below.

## Setting Up Mendix Single Sign-On{#setting-up}

These instructions are for apps which did not originally have the Mendix SSO module. For example, if you have an existing app which did not have the Mendix SSO Marketplace module.

{{% alert color="info" %}}
You do not have to follow these steps for apps (for example, app templates) which already have Mendix SSO, or if you are upgrading an existing Mendix SSO module to a newer version.
{{% /alert %}}

To enable Mendix SSO in your app, follow these steps:

1. Import the [Mendix SSO module](https://marketplace.mendix.com/link/component/111349/) from the Mendix Marketplace.

2. Add the microflow **MendixSSO_AfterStartup** to the **After startup** microflow by performing the following steps:
    1. Open app **Settings** from the **App Explorer**.
    2. Click the **Runtime** tab.
    3. Click **Select…** for the **After startup** microflow.
    4. Choose the microflow **Marketplace modules** > **MendixSSO** > **MOVE_THIS** > **CustomizableMendixSSOMicroflows** > **MendixSSO_AfterStartup** (you can use the filter to find it quickly) and click **Select**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/after-startup.png" class="no-border" >}}

    5. Click **OK** to close the app **Settings**.

    {{% alert color="info" %}}If there is already an **After startup** microflow, you should not replace it, but rather add the MendixSSO_AfterStartup microflow as an action in the existing microflow.{{% /alert %}}

3. Add your own administration pages to monitor usage, if required.

    {{% alert color="info" %}}If you are using Mendix SSO v2, you can use the *default* user administration pages. For more information, see the [Customizing Mendix SSO](#customizing) section below.{{% /alert %}}

4. Turn on **Production** security level and configure **User roles** *User* and *Administrator* to have access to the appropriate **MendixSSO** module roles by performing the following steps:
    1. Open app **Security** from the **App Explorer**.
    2. Set **Security level** to **Production**.
    3. Switch to the **User roles** tab.
    4. Select the **Administrator** user role and click **Edit**.
    5. Click **Edit** next to **Module roles**.
    6. Select the **Administrator** module role for **Marketplace modules** > **MendixSSO**.
        {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/User_roles.png" alt="Set Administrator module role" class="no-border" >}}
    7. Click **OK** twice to return to app **Security**.
    8. Repeat the steps above to add the **MendixSSO.User** module role to the **User** User roles.

        The app **Security** settings now contains these two additional module roles:

        {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/module-user-roles.png" alt="Confirmation of user roles" class="no-border" >}}

    9. Optionally, you can configure the following **User Roles**: 

       | User Role | Mendix SSO Module Role |
       | --- | --- |
       | AnonymousUser | MendixSSO.AnonymousUser |
       | UserManager | MendixSSO.UserManager |
   
       If you do not link any of the module roles to your **User Roles**, they will not affect the security of the module.

5. Change the page that Mendix uses to sign you in (`login.html`) to allow for signing in using SSO. To do this, perform the following steps:

    1. Go to **App** > **Show App Directory in Explorer** in Studio Pro to open the app directory in your file explorer.
    2. Go to the **theme/web** folder (for Mendix versions below 9.0.0, this is the **theme** folder).
    3. Rename *login.html* to *login-without-sso.html*.
    4. Rename *login-with-mendixsso-button.html* or *login-with-mendixsso-automatically.html* to *login.html*. The differences between the two versions of the files which you can use to replace *login.html* are as follows:
        * *login-with-mendixsso-button.html* – adds a button to the standard sign-in page which the end-user can click to initiate the single sign-on process; this gives the end-user the possibility to sign in using a user name and password if desired
        * *login-with-mendixsso-automatically.html* – automatically initiates the single sign-on process without needing to click a button

Your app is now configured to use Mendix single sign-on when it is deployed to Mendix Cloud.

## Removing Mendix Single Sign-On

{{% alert color="info" %}}By default, the Mendix SSO is not enabled for new apps or apps which do not have Mendix SSO module. In such scenarios, follow the instructions in the [Setting Up Mendix Single Sign-On](#setting-up) section below.{{% /alert %}}
If you have an app which already has Mendix SSO activated, you can remove it using one of the methods below.

### Deactivating Mendix Single Sign-On{#deactivating}

You can deactivate Mendix SSO in two simple steps. This will remove the end-user's ability to sign in with their Mendix account, but will leave the local user administration functions of the Mendix SSO module intact.

To deactivate Mendix SSO, follow these two steps:

1. Follow the instructions below to rename the original login file (by default *login-without-sso.html*) in the **theme/web** or **theme** folder of your app to *login.html* — this removes the single sign-on button from your sign in screen:
    1. Open your app directory in File Explorer by selecting the menu item **App** > **Show App Directory in Explorer**.

    2. Go to the **theme/web** folder (for Mendix versions below 9.0.0, this is the **theme** folder).
    3. Rename *login.html* to *login-with-sso.html*.
    4. Rename *login-without-sso.html* to *login.html*.
    
    {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/theme-folder-remove.png" alt="File explorer showing two login files" class="no-border" >}}

2. Follow the instructions below to remove the microflow **AfterStartup_MendixSSO** as the **After startup** microflow.
    1. Open app **Settings** from the **App Explorer**.
    2. Click the **Runtime** tab.
    3. Click **Select…** for the **After startup** microflow.
    4. Click **None**.
        {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/after-startup-remove-updated.png" alt="Setting after startup microflow to none" class="no-border" >}}
    5. Click **OK** to close the app **Settings**.

    {{% alert color="info" %}}If there is a different **After startup** microflow, you should not remove it. Instead remove the AfterStartup_MendixSSO microflow which is an action in the existing microflow.{{% /alert %}}

Mendix SSO will be deactivated the next time you deploy your app. You can still use Mendix SSO for local end-user administration.

### Removing Mendix SSO Module

You can completely remove Mendix SSO from your app if you want to use a different method for end-user administration. However, in most cases you can just leave the module in your app and deactivate it as described above.

To completely remove Mendix SSO, do the following:

1. Perform the two steps described in the [Deactivating Mendix Single Sign-On](#deactivating) section above.
2. Remove any references to the Mendix SSO module in the navigation profiles, accessed through the **Navigation** page of the **App Explorer**.
3. Delete the **MendixSSO** module from **Marketplace modules**.
4. Review the **Errors** pane for any other references to **MendixSSO**—there will only be additional errors if the Mendix SSO module been modified.

### Removing Mendix SSO Java Libraries

The steps above will not remove any of the Java libraries associated with Mendix SSO.

All files installed by Mendix SSO are marked with *.MendixSSO.RequiredLib*. Once you have removed Mendix SSO from your app, files marked with *.MendixSSO.RequiredLib* can be removed safely, provided you have not created new dependencies on them by using them in your custom code.

## Customizing Mendix SSO {#customizing}

{{% alert color="info" %}}
In v2 of the [Mendix SSO module](/appstore/modules/mendix-sso/), there was a default implementation of end-user administration. This had dependencies on specific versions of [Atlas UI](/howto8/front-end/atlas-ui/) and was removed so that Mendix SSO v3.0 and above retains compatibility with all Mendix apps, whichever UI they are using.
{{% /alert %}}

This section explains how to customize Mendix SSO in your apps and how to base your own user administration module on this section if you want to do things in a different way.

There are three ways you can modify the Mendix SSO module. You can use snippets from the Mendix SSO Marketplace module in your pages; you can modify the Mendix SSO module in any way you like to support your end-user administration requirements, or you can use the microflows available in the [Administration](/appstore/modules/administration/) module.

These three ways are described below.

### Using Snippets

{{% alert color="warning" %}}
This section only applies to v2 of Mendix SSO. The administration functionality is removed and the domain model has changed in Mendix SSO v3.0 and above.
{{% /alert %}}

The default Mendix SSO implementation is based on snippets. You can use these snippets in your own pages to customize the administration of the end-users. If you look at how they are used in the default implementation, you can see how to use them in your own pages. The snippets are:

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/snippets.png" alt="List of snippets in Mendix SSO" class="no-border" >}}

* In the **Admin** folder
    * **TokensOverviewSnippet** – an overview of all the tokens issued to end-users of the app
    * **UserOverviewSnippet** – an overview of all the end-users who have used the app; This will not include end-users who have been given access through the Mendix Portal but have not yet signed in
    * **UserViewEditSnippet** – a page where details of an end-user can be seen
* In the **Common** folder
    * **AccountDetailsNotEditableSnippet** – text explaining that details of SSO end-users come from Mendix and are not editable in the app
    * **EnvironmentCredentialsSecurityWarningSnippet** – text warning that sharing credentials is a security risk
    * **TokensAreExpiredPeriodicallySnippet** – text explaining that expired tokens are deleted automatically after a period of time
    * **TokenSecurityWarningSnippet** – text explaining that tokens give access to the app for SSO end-users, and that local end-users will not have tokens
    * **TokenViewSnippet** – displays details of a token
* In the **User** folder
    * **MyAccountDetailsSnippet** – a page where details of an end-user can be seen—similar to **UserViewEditSnippet** but without the additional administration capabilities
    * **MyTokensOverviewSnippet** – an overview of all the tokens issued to the current end-user of the app

### Modifying Mendix SSO

{{% alert color="warning" %}}
Mendix recommends that you do not modify the version of Mendix SSO which is in the Marketplace modules section of your app. In future, you may wish to import a newer version of the module and this will overwrite any changes you make.
{{% /alert %}}

The Mendix SSO module is written so that you can create a user entity in another module and use this entity to store the user information. You can also use this entity as the basis of a new [Administration](/appstore/modules/administration/) module.

#### Copying the Mendix SSO Module{#copying}

To make a copy of the module, do the following:

1. Add a new module to your app. In these examples it is called **CustomMendixSSO**.

2. Create the **Module roles** *User* and *Administrator* for the new module.

3. Copy the **MendixSSOUser** entity from the **MendixSSO** module domain model, to the domain model of your new module. In these examples, this is called *CustomMendixSSOUser*.

    {{% alert color="info" %}}You can also create an entity from scratch, provided it uses **System.User** as its generalization.{{% /alert %}}

4. Set the entity **Access rules** for the **User** and **Administrator** module roles.

5. Move the **MOVE_THIS** folder from **MendixSSO** to existing module containing your customized user administration entity.

    This will move the following microflows:

    * MendixSSO_AfterStartup
    * MendixSSO_CreateUser
    * MendixSSO_UpdateUser

#### Configuring the Copied Mendix SSO Module

You need to tell the Mendix SSO Module to use your new entity, instead of the default one. To do this, make the following changes to the microflows in your new Mendix SSO Module:

1. Update the **MendixSSO_AfterStartup** microflow in the customized user administration module to use the **MendixSSO_CreateUser** and **MendixSSO_UpdateUser** microflows in the same module. If you moved the folder from the **MendixSSO** module the names should have been updated automatically.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/custom-afterstartup-microflow.png" alt="Modify custom afterstartup microflow to use custom create and update microflows" class="no-border" >}}

2. Update the **Create** action in the **MendixSSO_CreateUser** microflow in your user administration module to use your custom user entity, not the one in the Mendix SSO module. You will also need to update all the members which are set during the **Create** action.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/create-new-entity.png" alt="Edit custom create microflow to use the new entity" class="no-border" >}}

3. Change the **End event** of the microflow to return an object of the correct type.

4. Change the **Parameter** of the **MendixSSO_UpdateUser** microflow in the module to be your custom user entity instead of MendixSSOUser.

5. Change the **Change Object** action to set the correct members of the object.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/edit-members.png" alt="Edit all the members of the entity to match the attributes and associations" class="no-border" >}}

6. Change the **End event** of the microflow to return an object of the correct type.

7. Set the **After startup** microflow in the **Runtime** tab of **Project > Settings** to be the **MendixSSO_AfterStartup** microflow in your user administration module.

#### Using the Copied Mendix SSO Module

Mendix SSO will now use your new entity to administer the users. You can edit the domain model and write your own user administration pages and microflows to customize your user administration completely. If you need inspiration or help in designing user administration, you can refer to the default implementation in the Mendix SSO module.

{{% alert color="info" %}}
Remember that data which comes from the end-user's Mendix ID via SSO (for example, **EmailAddress**) overwrites any changes you make within your app.
{{% /alert %}}

### Using the Administration module

The [Administration](https://marketplace.mendix.com/link/component/23513) module v1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2) contain a set of microflows to configure Mendix SSO to use **Administration.Account** as the user entity. Follow the instructions in [Using the Administration Module with Mendix SSO](/appstore/modules/administration/#use-with-mendix-sso) to use the Administration module with Mendix SSO.

### Using the Continuation URL Parameter

You can use a continuation URL parameter with the `/openid/login` and `/openid/logoff` endpoints. This parameter specifies the URL to which the end-user is redirected after successfully completing the login or logoff process. This feature can be particularly useful when you want to show a specific page after the end-user logs off, trigger a process after the end-user logs in, or redirect to another Mendix application in your portfolio that the end-user also needs to be logged into.

The URL, `{myURL}` is added as the `continuation={myURL}` parameter to the endpoint.

For example, if your app "myapp" contains a profile page (`myprofile`) which has a deeplink to it, you could redirect the end-user to their profile page after login like this: `https://myapp.mendixcloud.com/openid/login?continuation=https://myapp.mendixcloud.com/link/myprofile`

#### Continuation URL Validation

{{% alert color="info" %}}
Validation of continuation URLs was introduced in version 4.2.0 of the Mendix SSO module.
{{% /alert %}}

To protect against bad actors, the Mendix SSO module validates the continuation url and ensures the end-user will only be redirected to an approved location. By default the approved locations include only the default app Url, which can be found on the [Environment Details](/developerportal/deploy/environments-details/) page of your app environment.

If your Mendix application has registered any custom domains, or if you want to redirect the end-user to a different application, the host names need to be specifically supplemented for your deployed application. This can be configured in the **Runtime** settings tab of the Mendix Portal as described below.

##### Supplementing Allowed Continuation URLs{#supplements}

On the **Runtime** tab of your app environment's [Environment Details](/developerportal/deploy/environments-details/#runtime-tab) you can set Custom Environment Variables. Here you can specify a comma-separated list of URLs that can be used as continuation URLs in your Mendix application.

To add a list of allowed continuation URLs, do the following:

1. Click **Add** for **Custom Environment Variables**.
1. Select **MendixSSO_AllowedContinuationURLs**.
1. Set **Value** to the list of URLs separated by a comma (",").
1. Click **Save** to save the variable.
1. Restart your application to apply the changes.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/continuation.png" class="no-border" >}}

{{% alert color="info" %}}
Only exact host names are accepted in the validation, any sub-domains need to be added to the list separately.

For example, if your application is running on `https://myapp.mendixcloud.com`, the sub-domain `sub.myapp.mendixcloud.com` will not be approved, unless the environment variable `MendixSSO_AllowedContinuationURLs` contains `https://sub.myapp.mendixcloud.com`.
{{% /alert %}}

## Tokens

Mendix SSO works by providing end-users with tokens when they are authenticated. If end-users have issues with Mendix SSO it can be useful to see the tokens, either for your own debugging or to provide information to [Mendix Support](/support/).

{{% alert color="info" %}}
Tokens contain personal information as well as authentication information. They should not be exposed routinely, and should only be shared on a need-to-know basis (for example, if you need help resolving an issue with SSO).

Expired tokens are periodically and automatically deleted. Bear in mind that some tokens might have been revoked by the users.

Local users do not have tokens as they do not sign in via SSO.
{{% /alert %}}

### Tokens in Mendix SSO v3 and Above

Tokens are held in encrypted form in the `Token` entity, and are associated with the end-user via the `Token_User` association.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/domain-model-token.png" class="no-border" >}}

You can allow an administrator to see all the tokens by displaying them on an administration page of your app.

For example, you can create a data grid sourced from the database entity `MendixSSO.Token` and display the attributes you require from the `Token` entity, and the associated `User` and `Session` entities. Remember that, in this case, the tokens will still be encrypted.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/token-datagrid.png" class="no-border" >}}

If you implement a page like this, ensure that security is set up to prevent unauthorized users accessing the page.

The **Session ID** which is associated with a **Token type** of `ID_TOKEN` is held in the *JWT* format, so you can decrypt it and then paste it into a [JWT decoder](https://jwt.io) to confirm what information it holds. To decrypt the token, you can use the **Decrypt** microflow in the **Internal/Encryption/Implementation** folder of the MendixSSO module.

### Tokens in Mendix SSO v2

{{% alert color="warning" %}}
The rest of this section only applies to v2 of Mendix SSO. The administration functionality is removed and the domain model has changed in Mendix SSO v3.0 and above.
{{% /alert %}}

Versions of Mendix SSO below v3.0 contained a default Mendix SSO administration module with a number of pages set up to enable you to see tokens. They also contained snippets to allow you to create your own token display and administration pages. The rest of this section explains how these could be used.

#### Displaying Tokens on Pages

Individual end-users can see their tokens on the MendixSSO.MyTokensOverview page of the default implementation. Administrators may want to see all active tokens – these can be seen on the MendixSSO.TokensOverview page.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/token-pages.png" alt="List of pages which show tokens in Mendix SSO" class="no-border" >}}

If you want administrators or end-users to be able to see tokens, it is recommended that you add these to the navigation of the app. This avoids them being included in the main process flows of the app.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/token-navigation.png" alt="How to add navigation to the tokens overview pages in Mendix SSO" class="no-border" >}}

##### TokensOverview Page

The TokensOverview page allows administrators to see all tokens which have been issued to end-users of the app.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/token-administration.png" alt="List of all Mendix SSO tokens issued to the app" class="no-border" >}}

The page can be used for troubleshooting — you can see the creation and expiry dates of the tokens, and by clicking **View**, you can view the values held in the tokens.

The **ID Token** is held in *JWT* format, so you can paste it into a [JWT decoder](https://jwt.io) to confirm what information it holds.

The page can also be used for administration. You can delete tokens which are expired and you can also delete current tokens if they are causing unwanted issues.

Deleting tokens from the **TokensOverview** page will cause end-users to lose access to the app. However, they will be able to sign in again if they are still end-users of the app.

##### MyTokensOverview Page 

The **MyTokensOverview** page allows end-users to see their own access tokens.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/my-tokens.png" alt="List of all my Mendix SSO tokens" class="no-border" >}}

The page can be used for troubleshooting — the end-user can see the creation and expiry dates of the tokens, and by clicking **View**, they can view the values held in the tokens. This can be useful for troubleshooting if the end-user is having difficulty getting proper access to the app.

#### Displaying Tokens using Snippets

The default tokens pages in the MendixSSO module are created using snippets.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mendix-sso/token-snippets.png" alt="List of snippets which manipulate tokens in Mendix SSO" class="no-border" >}}

You can use these snippets to create your own token administration pages. Look at the pages in the **Pages** subfolder of the **Default Implementation** folder in the Mendix SSO module for ideas on how they can be used.
