---
title: "MindSphere Development Considerations"
url: /partners/siemens/mindsphere-development-considerations/
weight: 10
description: "A description of some extra considerations to be taken into account when developing for deployment to MindSphere"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation"]
---

## 1 Introduction

{{% alert color="warning" %}}
This information is for apps which are deployed to MindSphere. It does not apply to MindSphere IIoT for Makers.
{{% /alert %}}

When developing a Mendix app which will be deployed to MindSphere, there are a number of extra things you need to take into consideration. The following subjects are discussed below:

* [Authorizing MindSphere REST Calls](#mstoken)
* [Cloud Foundry Environment Variables](#cfenvvars)
* [Licensing Your App](#licensing)
* [Local Testing](#localtesting)
* [MindSphere Icons](#atlasui)
* [Multi-Tenancy](#multitenancy)
* [Validation](#validation)

Finally, there is a section on some [Limitations](#limitations) which apply to Mendix apps deployed to MindSphere.

## 2 Authorizing MindSphere REST Calls{#mstoken}

The **MindSphereToken** entity contains the *Access_token* attribute which needs to be passed as the Authorization header in REST calls to MindSphere APIs.

To improve security of your app, it is recommended that you delete the MindSphereToken object returned by the *Access token* action, provided by the MindSphere SSO module, before showing a page or reaching the end of the microflow.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/delete-mindspheretoken.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}


### 2.1 Authorizing MindSphere REST Calls from within Scheduled Events

The access token connector *cannot* be used for calling a MindSphere API in a microflow which is executed *without* a user context – for example, called from a **scheduled event**. Therefore the MindSphereSingleSignOn module offers a microflow, **DS_GetAccessTokenForScheduledEvents**, that returns a Token for a given Tenant. You can find this microflow here:

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/DS_GetAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

The microflow uses the [MindSphere Application Credentials](#app-creds) functionality to fetch a token, and uses different environment variables depending on the location where the app is running:

1. Local:

    The microflow uses the application credentials you entered at startup to fetch a token. See also [Application Credentials](#app-creds).

2. Developer Tenant:

    The following cloud foundry environment variables must be set for the app:

    | Developer Tenant | Description |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | enable Application Credentials in the Developer Cockpit for your app and use the Client ID |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | enable Application Credentials in the Developer Cockpit for your app and use the Client Secret |
    | `MDSP_OS_VM_APP_NAME` | enter the name of your app in Developer Cockpit |
    | `MDSP_OS_VM_APP_VERSION` | enter the version of your app in Developer Cockpit |

3. Operator Tenant:

    Some of the following environment variables are set automatically:

    | Operator Tenant | Description |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | created automatically on an Operator Tenant, when application credentials are enabled for the app |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | created automatically on an Operator Tenant when application credentials are enabled for the app |
    | `MDSP_OS_VM_APP_NAME` | name of your app |
    | `MDSP_OS_VM_APP_VERSION` | version of your app |

Make sure these environment variables exists. Use the returned token as usual in your REST calls to MindSphere. Do not delete the token after usage as it is not transferred to the client and it is cached in MindSphereSingleSignOn module.

The following example shows how to use the microflow **DS_GetAccessTokenForScheduledEvents**. The sample retrieves a list of all Tenants from the database and fetches a token for each tenant. With the token you can proceed with your custom application logic.

{{% alert color="warning" %}}
Do not create a Tenant object yourself as this is done automatically during login.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/sample_getAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

For more information on how to perform REST calls see the [Importing and Exporting Your Data](https://academy.mendix.com/link/path/44) learning path (you must be signed in to the Mendix Platform to see this learning path).

## 3 Cloud Foundry Environment Variables {#cfenvvars}

If you need to set or change the value of any Cloud Foundry Environment Variables, you will have to do this using the Cloud Foundry Command Line Interface (CF CLI).

1.  Use `cf set-env {app_name} {environment_variable_name} {value}`
2.  You will need to restage the app to use the new value.
    Use `cf restage {app_name}`

{{% alert color="warning" %}}
Restaging your app will cause your app to be temporarily unavailable.

If you do **not** restage your app, it will continue to run using the old values. If your app is an unlicensed (free) app, it will stop running after a time and this could cause the environment to be restarted and pick up the new environment variable values without an explicit restage.
{{% /alert %}}

**Mendix Constants**

Your project will define the default values for [constants](/refguide/constants/). You can override these default values with Cloud Foundry environment variables. To do this, you need to replace the dot with an underscore and prefix the name with `MX_`. For example, a constant `MyConstant` in module `MyModule` (that is, `MyModule.MyConstant`), in app `MyApp` could be set to `ABC123` like this:

```bash
    cf set-env MyApp MX_MyModule_MyConstant "ABC123"
```

## 4 Licensing Your App {#licensing}

When you initially deploy a Mendix App, it is treated as a *Free App*. For a MindSphere app the most important restriction is that the app will go into sleep mode after 1-2 hours: this could cause the Cloud Foundry environment to be restarted and pick up the latest values of environment variables.

To license your app, you need to obtain a license key from [Mendix Support](https://support.mendix.com).

Instructions for licensing apps are available in the [License Activation](https://github.com/mendix/cf-mendix-buildpack#license-activation) section of the *Mendix Cloud Foundry Buildpack Readme*. Refer to [Cloud Foundry Environment Variables](#cfenvvars), above, for instructions on changing Cloud Foundry environment variables.

## 5 Local Testing {#localtesting}

### 5.1 Corporate Proxies

If you need to use a corporate web proxy, the following settings must be applied in Mendix Studio Pro to allow communication with MindSphere during local development.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/proxy-settings.png"   width="50%"  >}}

Contact your local IT department for the `proxyHost` and `proxyPort` values you need.

{{% alert color="info" %}}
Proxy settings for version control used in Mendix Studio Pro:

For more information about the version control used by Mendix apps, see [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/#working-outside-studio-pro). Depending on your local development environment, you may have to configure your version control client to use a proxy as well. You may need to do this to solve a merge conflict manually.
{{% /alert %}}

### 5.2 Application Credentials{#app-creds}

The SSO module supports you in getting a valid MindSphere token locally via **Application Credentials**.

When you run your app locally, you will not be able to use SSO to get your credentials. You will be logged in as MxAdmin and will be presented with a login screen on app startup if the constant *AskForCredentialsOnStartUp* is true - otherwise communication to MindSphere is not possible.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image19.png"   width="50%"  >}}

This will use the credentials you have set up under **App Credentials** in the *Authorization Management* tab of the MindSphere Developer Cockpit for this application.

{{% alert color="info" %}}
**Tip:** Use the autofill feature based on a local environment variable for the *Client Secret*.

Storing the *Client Secret* inside the project is, from a security perspective, not a good idea. A better approach is to use a local environment variable. Create a user-specific environment variable with *Variable name* equal to your *Client ID* value and the *Variable value* equal to your *Client Secret* value. See step 6 below for information on how to get these values.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/envvariables.png"   width="50%"  >}}

On startup, the system checks if there is an environment variable present with the name equal to your *Client ID* value and uses its value as *ClientSecret*.
The *ClientID* is built from the combination of:

```*Host tenant*-*Cockpit application name*-*Cockpit application version*```

Ensure you have filled these constants correctly.
If everything is setup correctly the form is auto filled and submitted.

Don't forget to restart Studio Pro after you change / add the environment variable.
{{% /alert %}}


To create the app credentials:

1.  Register this application using the identical application name as that set in the constant **CockpitApplicationName**, and a valid version number which is the same as the one you set in *CockpitApplicationVersion*, below . See also, [MindSphere Launchpad Setup](/developerportal/deploy/deploying-to-mindsphere/#launchpad) in *Siemens Mindsphere – deployment*.

2.  Go to the **App Credentials** page in the *Authorization Management* tab of the MindSphere Developer Cockpit.

3.  Choose your app.

4.  Click **Issue access** to obtain a token.

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image20.png" >}}

5.  Select the access level and click **Submit**

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image21.png" >}}

6.  Make a note of the **Client ID** and **Client Secret**

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image22.png" >}}

For more information about creating app credentials, see the documentation on the MindSphere website here: [Self-Hosted Application – Access MindSphere APIs](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html).

To ensure that the correct application credentials are requested, you have to set the following constants in the **LocalDevelopment** folder of the **MindSphereSingleSignOn** module in addition to the other configuration constants.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image23.png" >}}

### 5.3 Configuration

**AskForCredentialsOnStartUp**

Set this to *True* if you want your app to ask for credentials as soon as it starts up, before the first page is displayed. If this is set to *False* then the app will ask for credentials the first time that it attempts to retrieve your access token.

If you trigger microflows consuming MindSphere APIs on the home page, setting this to *True* ensures that they will work the first time the page is displayed.

{{% alert color="info" %}}
This setting has no effect on apps which are deployed to the cloud. The credentials page is only shown for local deployments.
{{% /alert %}}

**CockpitApplicationVersion**

This is the version of the MindSphere app linked to the application credentials, as registered in the Developer Cockpit under the name *CockpitApplicationName*.

**EnableLocalMindSphereApiReverseProxy**

Set this to *True* to enable a reverse proxy for MindSphere API calls which are made directly from the html pages (for example, the calls from the MindSphere OS Bar).

This endpoint forwards all calls to \api… from within native HTML pages, and adds a MindSphere token to them. For example, the calls from the MindSphere OS Bar.

**HostTenant**

This should be the tenant where your credentials are stored. It is needed when retrieving your Service Credentials.

The definition of a tenant on MindSphere is available in the MindSphere document [Definition of Tenant](https://developer.mindsphere.io/apis/core-identitymanagement/api-identitymanagement-overview.html#tenants).

**UserTenant**

This should be the tenant that the user has access to in a multi-tenant environment. For a developer tenant, this must be the same as the HostTenant. In an operator or iot plan tenant, you can change this to allow you to test multi-tenant apps.

### 5.4 User Roles

If you are testing different roles in your app, do not use the demo users. If you switch between demo users, this will not correctly populate the tenant and role information from MindSphere. To test different roles, allocate the role to MxAdmin, redeploy, and sign in again.

The MxAdmin role is found In the **Administrator** tab of the *Security* settings of your app.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/mxadmin-roles.png" >}}

### 5.5 Local User Passwords

Local users should not be created for your MindSphere app.

When a new user is identified during SSO, the SSO process generates a random password for the user. The password policy for your app needs to accept these randomly generated passwords. The password generation algorithm generates passwords of a fixed length, so the password policy should not be set to require more characters.

{{% alert color="info" %}}
This policy is set up as the default in the MindSphere starter and example apps and should not be changed.
{{% /alert %}}

## 6 MindSphere Icons {#atlasui}

The **Siemens MindSphere Web Content** module includes two ways of including MindSphere icons in your app.

### 6.1 MindSphere Icons as SVGs

You can select MindSphere icons from Siemens MindSphere Web Content to be displayed as SVGs in your application.

1. Open the properties of a widget which can display an icon (for example a button).
2. Click **Select...** next to *Icon*.
3. Select **Image** as the icon type.
4. Find the image that you want and click **Select**. The MindSphere icons are in the module *Siemens_MindSphere_Web_Content*.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/svg-icon.png" alt="Add icon as an image" >}}

{{% alert color="info" %}}
You cannot change the color of these icons from within Mendix.
{{% /alert %}}

### 6.2 MindSphere Icons as an Icon Font

**Siemens MindSphere Web Content** provides a font which contains icons. This means that you can use a MindSphere icon in any page element where you can assign a class.

To do this:

1. Find the icon you wish to use. These have the same names as the icons in Siemens MindSphere Web Content and are listed in the *App Explorer* dock under **App** > **Marketplace modules** > **Siemens_MindSphere_Web_Content** > **Icons**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/mindsphere-icons.png" alt="List of MindSphere icons" >}}

2. Open the properties of the element to which you wish to add an icon.
3. Set **Icon** to *(none)*.
3. Add the class `iconMdsp {icon-name}`.

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/css-icon.png" alt="Add an icon as CSS" >}}

{{% alert color="info" %}}
You will not see the icon in Studio Pro when it is in *Structure mode*. Switch to *Design mode* to confirm that you have selected the correct icon.

You can only add one icon per element.
{{% /alert %}}

## 7 Multi-Tenancy {#multitenancy}

In MindSphere, apps are usually designed to be multi-tenant, meaning that a single instance of the app serves multiple tenants. A tenant is a representation of a real-world organization. It groups users, data, assets, entities, and many kinds of other properties. Access to these resources for users of the same tenant is controlled via the authorization management system.

For a MindSphere app to be multi-tenant, each user can only see the data from a single tenant, defined by their login credentials, and cannot access resources of other tenants.

### 7.1 Control Through MindSphere APIs

The Authorization HTTP Header (see DS_MindSphereAccessToken in the [Microflows](/partners/siemens/mindsphere-module-details/#microflows) section of *MindSphere Module Details*) which is passed for every MindSphere API call ensures that the user can only obtain data which is authorized to them via their tenant.

### 7.2 Control Within a Mendix App

If no security is placed on persistable Mendix entity objects, these are accessible to all users of the app (subject to access granted by their user role). This means that any app which stores data in persistable Mendix entities cannot be made multi-tenant without additional security.

MindSphere SSO provides the user’s tenant as the **Name** attribute in the **Tenant** entity.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image25.png" >}}

In addition, MindSphere SSO will identify whether the current user is a subtenant using **IsSubTenantUser** and, if so, will populate the name of the subtenant in **SubtenantId**. More information about subtenants can be found in the MindSphere documentation [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants).

**How To Make Your App Multi-Tenant**

By utilizing the **Tenant** when an entity is accessed, the Mendix app can be made multi-tenant.

{{% alert color="warning" %}}
It is not possible, currently, to generate these access restrictions automatically.

The developer will have to add a rule every time the entity is accessed. See the instructions below.
{{% /alert %}}

{{% alert color="info" %}}
It is not necessary to put an access rule on every entity within the domain model. It is only required for: **persistable** entities which have a **TenantId** attribute.
{{% /alert %}}

To make your Mendix app multi-tenant, do the following:

1.  Make all *persistable* entities which have a **TenantId** attribute a specialization of the MindSphereSingleSignOn.TenantObject entity.
    This ensures that every object is associated with the Tenant object of the user who creates it.

2.  Every microflow action on this object must have the following XPath constraint:

    ```java
    [MindSphereSingleSignOn.TenantObject_Tenant/MindSphereSingleSignOn.Tenant/MindSphereSingleSignOn.MindSphereAccount_Tenant='$currentUser']
    ```

    This ensures that the user can only retrieve entities which belong to their tenant, in other words, where their Tenant matches the TenantId of the entity. You can copy and paste this constraint from here (hover your mouse over the text and click the **Copy** button). You can also copy it from XPath constraint on the *TenantObject* entity in the *MindSphereSingleSignOn* module. For more information on XPath, see [XPath](/refguide/xpath/).

    {{% alert color="info" %}}For consistency, it is recommended that all access to these entities is done through a sub-microflow which contains the XPath constraint. This enforces multi-tenant security.{{% /alert %}}

3.  Similarly, every data widget on a page (for example a *Data view*) which retrieves data from the database or via an association must have the following XPath constraint, which works in the same way as the microflow XPath constraint, above:

    ```java
    [MindSphereSingleSignOn.TenantObject_Tenant/MindSphereSingleSignOn.Tenant/MindSphereSingleSignOn.MindSphereAccount_Tenant='[%CurrentUser%]']
    ```

**Example**

You have some limits which are set for the user's tenant to be applied to a time series. You then want to get a list of all these so that you can display the values to the user.

1.  Create the domain model with the **LimitConfig** entity being a specialization of **MindSphereSingleSignOn.TenantObject**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image26.png" >}}

2.  Write a sub-microflow which returns a list of all limits.
3.  Apply the XPath constraint to the **Retrieve Objects** action.

    {{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image27.png"   width="75%"  >}}

4.  When you want to retrieve the list of limits, call this microflow instead of using the retrieve objects action. This will ensure that tenant-based security is always applied.

## 8 Validation {#validation}

Your app should, as a minimum, meet the requirements of the checklist on the MindSphere developer site here: [Get your Application Ready for Productive Use](https://developer.mindsphere.io/howto/howto-app-publication.html).

## 9 Limitations {#limitations}

The following limitations apply to Mendix apps which are deployed to MindSphere.

If these limitations affect the design of your app, you can still create a Mendix app to use MindSphere APIs from outside MindSphere.

### 9.1 Binary File Storage

MindSphere does not currently have a compatible file service available in its Cloud Foundry stack. Therefore, you cannot use any Mendix features which rely on having a file service.

In particular, this means that you cannot use entities which are specializations of the *System.FileDocument* entity. This also includes all entities which are specializations of the *System.Image* entity, as this is also a specialized type of FileDocument.

You can store small amounts of binary information in persistable entities. However, the database management system (DBMS) will have strict limits on the size of binary attributes and using them as a replacement for FileDocument entities can lead to performance issues.

Alternatively, you can use a separate AWS S3 bucket. See [Connect an External Filestore](https://github.com/mendix/cf-mendix-buildpack#connect-an-external-filestore) in the *Mendix Cloud Foundry Buildpack GitHub Repository*. Refer to [Cloud Foundry Environment Variables](#cfenvvars), above, for instructions on changing Cloud Foundry environment variables.

### 9.2 App Name {#appname}

There are few limitations on what you call your app within Mendix. However, when you deploy the app to MindSphere, the app name registered in the Developer Cockpit must have the following characteristics:

* Contains only *lowercase* alphanumeric characters and special character `-`. (The `_` and `.` characters are not allowed)
* Starts with a letter
* Length does not exceed 20 characters
* Is unique within your tenant

If you want to use the same app name in both Mendix and MindSphere, you should bear these constraints in mind when naming your Mendix app.

### 9.3 Roles & Scopes

MindSphere supports up to five application roles. You should take this into account when designing security within your Mendix app.

To use these scopes, you must create identically-named scopes for each MindSphere application role. These scopes will map to identically-name user roles in your Mendix app.

There is a more detailed discussion of MindSphere and Mendix roles and scopes in the [Roles & Scopes](/partners/siemens/mindsphere-module-details/) section of *MindSphere Module Details*.

### 9.4 Logout from MindSphere

If the user signs out from MindSphere, the Mendix app will not delete the session cookie.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-development-considerations/image18.png" >}}

{{% alert color="warning" %}}
In some circumstances, this could lead to another user *using the same app in the same browser on the same computer*, picking up the session from the previous user if the cookie has not yet expired.
{{% /alert %}}

### 9.5 Native Mobile

With Mendix Studio Pro V8.0.0, Mendix has released support for developing native mobile apps. This is not currently supported for apps using MindSphere.

### 9.6 Progressive Web Applications

Mendix Studio Pro version 9 introduced support for developing [progressive web apps (PWAs)](/refguide/progressive-web-app/). PWAs are not supported for *Mendix on MindSphere*.

## 10 Read More

* [Siemens MindSphere – deployment](/developerportal/deploy/deploying-to-mindsphere/)
* [MindSphere Module Details](/partners/siemens/mindsphere-module-details/)
