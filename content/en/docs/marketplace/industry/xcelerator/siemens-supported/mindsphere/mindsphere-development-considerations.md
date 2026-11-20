---
title: "Insights Hub Development Considerations"
url: /appstore/industry/mindsphere/mindsphere-development-considerations/
weight: 10
description: "Describes extra considerations for developing Mendix apps for deployment to Insights Hub."
aliases:
    - /partners/siemens/mindsphere-development-considerations/
---

## Introduction

{{% alert color="warning" %}}
This information is for apps that are fully integrated into Insights Hub. It does not apply to apps that only call Insights Hub APIs.
{{% /alert %}}

When you develop a Mendix app that runs on Insights Hub, you need to consider several extra things. This page discusses the following subjects:

* [Authorizing Insights Hub REST Calls](#mstoken)
* [Licensing Your App](#licensing)
* [Local Testing](#localtesting)
* [Multi-Tenancy](#multitenancy)
* [Validation](#validation)

The [Limitations](#limitations) section describes limitations that apply to Mendix apps deployed to Insights Hub.

## Authorizing Insights Hub REST Calls {#mstoken}

You must pass the **Token** string returned by the **AccessToken** action as the Authorization header in REST calls to Insights Hub APIs.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/delete-mindspheretoken.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

{{% alert color="info" %}}
Optionally, use the **BuildCoreURL** microflow when your app must support dual tokens and run against both Insights Hub and Xcelerator.
{{% /alert %}}

### Authorizing Insights Hub REST Calls from within Scheduled Events

You cannot use the access token connector to call an Insights Hub API in a microflow that runs without a user context, for example, when a scheduled event calls the microflow. Therefore, the SiemensInsightsHubSingleSignOn module offers a microflow, **DS_GetAccessTokenForScheduledEvents**, that returns a token for a given tenant. This microflow is also available in the toolbox on the right side:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/DS_GetAccessTokenForScheduledEvents.png" alt="Insights Hub section of the toolbox with the Access Token and Scheduled event access token microflows" >}}

The microflow uses the [Insights Hub Application Credentials](#app-creds) functionality to fetch a token. It uses different environment variables depending on where the app is running:

1. Local – The microflow uses the app credentials you entered at startup to fetch a token. For more information, see [Application Credentials](#app-creds).

2. Developer/Operator Tenant – The following environment variables must be set for the app:

    | Developer/Operator Tenant | Description |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | Enable Application Credentials in the Developer Cockpit for your app and use the Client ID |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | Enable Application Credentials in the Developer Cockpit for your app and use the Client Secret |
    | `MDSP_OS_VM_APP_NAME` | Enter the name of your app in Developer Cockpit |
    | `MDSP_OS_VM_APP_VERSION` | Enter the version of your app in Developer Cockpit |

Make sure these environment variables exist. Use the returned token as usual in your REST calls to Insights Hub. Do not delete the token after use, because it is not transferred to the client and the SiemensInsightsHubSingleSignOn module caches it.

The following example shows how to use the microflow **DS_GetAccessTokenForScheduledEvents**. The sample retrieves a list of all tenants from the database and fetches a token for each tenant. With the token, you can proceed with your custom app logic.

{{% alert color="warning" %}}
Do not create a tenant object yourself, because this happens automatically when a user signs in.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/sample_getAccessTokenForScheduledEvents.png" alt="Microflow that retrieves a list of tenants, then loops over them to get a scheduled event token for each tenant and run app logic" >}}

For more information on performing REST calls, see the [Importing and Exporting Your Data](https://academy.mendix.com/link/path/44) learning path. You must be signed in to the Mendix Platform to view this learning path.

## Licensing Your App {#licensing}

When you initially deploy a Mendix app, it is treated as a free app. For an Insights Hub app, the most important restriction is that the app goes into sleep mode after 1–2 hours.

To license your app, obtain a license key from [Mendix Support](https://support.mendix.com).

## Local Testing {#localtesting}

### Corporate Proxies

If you need to use a corporate web proxy, apply the following settings in Mendix Studio Pro to allow communication with Insights Hub during local development.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/proxy-settings.png" alt="Custom tab of the Edit Configuration dialog with http.proxyHost and http.proxyPort settings" width="50%" >}}

Contact your local IT department for the `proxyHost` and `proxyPort` values you need.

{{% alert color="info" %}}
For more information about the version control that Mendix apps use, see [Version Control](/refguide/version-control/). Depending on your local development environment, you may need to configure your version control client to use a proxy as well, for example, to resolve a merge conflict manually.
{{% /alert %}}

### Application Credentials{#app-creds}

The SSO module helps you get a valid Insights Hub token locally through **Application Credentials**.

When you run your app locally, you cannot use SSO to get your credentials. Instead, you are signed in as MxAdmin, and a sign-in screen appears on app startup if the constant **AskForCredentialsOnStartUp** is true. Otherwise, communication with Insights Hub is not possible.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/requestapplicationcredentials.png" alt="" width="50%" >}}

The app uses the credentials you set up for this application under **App Credentials** in the **Authorization Management** tab of the Insights Hub Developer Cockpit.

{{% alert color="info" %}}
**Tip:** Use the autofill feature based on a local environment variable for the **Client Secret**.

Storing the **Client Secret** inside the app is not secure. Use a local environment variable instead. Create a user-specific environment variable with **Variable name** equal to your **Client ID** value and **Variable value** equal to your **Client Secret** value. See step 6 below for information on how to get these values.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png" alt="New User Variable dialog with the client ID as variable name and the client secret as variable value" width="50%" >}}

On startup, the system checks for an environment variable whose name equals your **Client ID** value and uses its value as *ClientSecret*. The *ClientID* is built from the following combination:

```<Host tenant>-<Cockpit application name>-<Cockpit application version>```

Ensure that you have set these constants correctly.

If everything is set up correctly, the form is autofilled and submitted.

Restart Studio Pro after you add or change the environment variable.
{{% /alert %}}

To create the app credentials:

1. Register this application using the same application name as in the constant **CockpitApplicationName** and a valid version number that matches the constant **CockpitApplicationVersion** (described below). For more information, see [Insights Hub Launchpad Setup](/developerportal/deploy/deploying-to-mindsphere/#launchpad) in *Siemens Insights Hub – deployment*.
2. Go to the **App Credentials** page in the **Authorization Management** tab of the Insights Hub Developer Cockpit.
3. Choose your app.
4. Click **Issue access** to obtain a token.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image20.png" alt="Issue access button on the Application Credentials page of the Developer Cockpit" >}}

5. Select the access level and click **Submit**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image21.png" alt="Data Access dialog with Read and Write and Custom access levels and a Submit button" >}}

6. Note the **Client ID** and **Client Secret**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image22.png" alt="App Credentials dialog showing the Client ID and Client Secret" >}}

For more information about creating app credentials, see [Self-Hosted Application – Access Insights Hub APIs](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html) on the Insights Hub website.

To ensure that the correct application credentials are requested, you must set the following constants in the **LocalDevelopment** folder of the **SiemensInsightsHubSingleSignOn** module in addition to the other configuration constants.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image23.png" alt="LocalDevelopment folder in the SiemensInsightsHubSingleSignOn module containing the local configuration constants" >}}

### Configuration

**AskForCredentialsOnStartUp**

Set this to *True* to make your app ask for credentials as soon as it starts, before it displays the first page. If you set this to *False*, the app does not ask for credentials, and no token is available for calling Insights Hub APIs.

If you trigger microflows that consume Insights Hub APIs on the home page, setting this to *True* ensures that they work the first time the page is displayed.

{{% alert color="info" %}}
This setting has no effect on apps that are deployed to the cloud. The credentials page appears only for local deployments.
{{% /alert %}}

**CockpitApplicationVersion**

This is the version of the Insights Hub app linked to the application credentials, as registered in the Developer Cockpit under the name **CockpitApplicationName**.

**CockpitApplicationName**

This is the name as registered in the Developer Cockpit.

**EnableLocalApiReverseProxy**

Set this to *True* to enable a reverse proxy for Insights Hub API calls that are made directly from the HTML pages (for example, the calls from the Insights Hub OS Bar).

This endpoint forwards all calls to \api… from native HTML pages and adds an Insights Hub token to them, for example, calls from the Insights Hub OS Bar or the Siemens Insights Hub Widgets.

**PlatformType**

Set this to either **Xcelerator** or **Insights Hub**.

**HostTenant**

Set this to the tenant where your credentials are stored. The app needs it to retrieve your app credentials.

For a definition of a tenant on Insights Hub, see [Definition of Tenant](https://developer.mindsphere.io/apis/core-identitymanagement/api-identitymanagement-overview.html#tenants) in the Insights Hub documentation.

**UserTenant**

Set this to the tenant that the user has access to in a multitenant environment. For a developer tenant, this must be the same as **HostTenant**. In an operator or IoT plan tenant, you can change this to test multitenant apps.

**UserEmail**

Specify the email used for the local **MxAdmin** user account. If you provide no value, the default value "max.mustermann@email.com" is used.

### User Roles

If you test different roles in your app, do not use the demo users. Switching between demo users does not correctly populate the tenant and role information from Insights Hub. To test different roles, assign the role to MxAdmin, redeploy, and sign in again.

You can find the MxAdmin role in the **Administrator** tab of the **Security** settings of your app.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/mxadmin-roles.png" alt="Administrator tab of Project Security with the MxAdmin user role set to Admin" >}}

### Local User Passwords

Do not create local users for your Insights Hub app.

When SSO identifies a new user, the SSO process generates a random password for that user. The password policy for your app must accept these randomly generated passwords. The algorithm generates passwords of a fixed length, so do not set the password policy to require more characters.

{{% alert color="info" %}}
This policy is the default in the Insights Hub starter and example apps. Do not change it.
{{% /alert %}}

## Multi-Tenancy {#multitenancy}

In Insights Hub, apps are usually designed to be multitenant, meaning that a single instance of the app serves multiple tenants. A tenant is a representation of a real-world organization. It groups users, data, assets, entities, and many kinds of other properties. The authorization management system controls access to these resources for users of the same tenant.

For an Insights Hub app to be multitenant, each user can see only the data from a single tenant, defined by their sign-in credentials, and cannot access resources of other tenants.

### Control Through Insights Hub APIs

The Authorization HTTP header, which is passed for every Insights Hub API call (see DS_AccessToken in the [Microflows](/appstore/industry/mindsphere/mindsphere-module-details/#microflows) section of *Insights Hub Module Details*), ensures that the user can obtain only data that is authorized for them through their tenant.

### Control Within a Mendix App

If you place no security on persistable Mendix entity objects, all users of the app can access them (subject to the access granted by their user role). This means that an app that stores data in persistable Mendix entities cannot be made multitenant without additional security.

Insights Hub SSO provides the user’s tenant as the **Name** attribute in the **Tenant** entity.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image25.png" alt="Domain model with Tenant entity associated with TenantObject and Account entities" >}}

In addition, Insights Hub SSO identifies whether the current user is a subtenant using **IsSubTenantUser** and, if so, populates the name of the subtenant in **SubtenantId**. For more information about subtenants, see [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants) in the Insights Hub documentation.

**How To Make Your App Multitenant**

You can make the Mendix app multitenant by using the **Tenant** whenever an entity is accessed.

{{% alert color="warning" %}}
Currently, you cannot generate these access restrictions automatically.

You must add a rule every time the entity is accessed. See the instructions below.
{{% /alert %}}

{{% alert color="info" %}}
You do not need to put an access rule on every entity in the domain model. An access rule is required only for persistable entities that have a **TenantId** attribute.
{{% /alert %}}

To make your Mendix app multitenant, follow these steps:

1. Make all persistable entities that have a **TenantId** attribute a specialization of the **SiemensInsightsHubSingleSignOn.TenantObject** entity. This ensures that every object is associated with the **Tenant** object of the user who creates it.

2. Add the following XPath constraint to every microflow action on this object:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='$currentUser']
    ```

    This ensures that the user can retrieve only entities that belong to their tenant, meaning that their **Tenant** matches the **TenantId** of the entity. You can copy this constraint from here (hover over the text and click the **Copy** button). You can also copy it from the XPath constraint on the **TenantObject** entity in the **SiemensInsightsHubSingleSignOn** module. For more information, see [XPath](/refguide/xpath/).

    {{% alert color="info" %}}For consistency, Mendix recommends accessing these entities only through a sub-microflow that contains the XPath constraint. This enforces multitenant security.{{% /alert %}}

3. Similarly, add the following XPath constraint to every data widget on a page (for example, a **Data view**) that retrieves data from the database or through an association. It works the same way as the microflow XPath constraint above:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='[%CurrentUser%]']
    ```

**Example**

In this example, limits are set for the user's tenant and applied to a time series. You want to retrieve a list of all these limits so that you can display the values to the user.

1. Create the domain model with the **LimitConfig** entity as a specialization of **SiemensInsightsHubSingleSignOn.TenantObject**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image26.png" alt="Limit entity as a specialization of SiemensInsightsHubSingleSignOn.TenantObject" >}}

2. Write a sub-microflow that returns a list of all limits.
3. Apply the XPath constraint to the **Retrieve Objects** action.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image27.png" alt="Retrieve Objects action for Tutorial.Limit with an XPath constraint on the tenant" width="75%" >}}

4. To retrieve the list of limits, call this microflow instead of using the **Retrieve Objects** action. This ensures that tenant-based security is always applied.

## Validation {#validation}

At a minimum, your app needs to meet the requirements of the checklist [Get your Application Ready for Productive Use](https://developer.mindsphere.io/howto/howto-app-publication.html) on the Insights Hub developer site.

## Limitations {#limitations}

The following limitations apply to Mendix apps which are deployed to Insights Hub.

If these limitations affect the design of your app, you can still create a Mendix app that uses Insights Hub APIs from outside Insights Hub.

### App Name {#appname}

Mendix places few limitations on what you call your app. However, when you deploy the app to Insights Hub, the app name registered in the Developer Cockpit must meet the following requirements:

* Contains only lowercase alphanumeric characters and the special character `-` (the `_` and `.` characters are not allowed)
* Starts with a letter
* Is no longer than 20 characters
* Is unique within your tenant

If you want to use the same app name in both Mendix and Insights Hub, keep these constraints in mind when you name your Mendix app.

### Roles and Scopes

Insights Hub supports up to five application roles. Take this into account when you design security within your Mendix app.

To use these scopes, you must create identically named scopes for each Insights Hub application role. These scopes will map to identically named user roles in your Mendix app.

For a more detailed discussion of Insights Hub and Mendix roles and scopes, see the [Roles and Scopes](/appstore/industry/mindsphere/mindsphere-module-details/#rolesscopes) section of *Insights Hub Module Details*.

### Logout from Insights Hub

If a user signs out from Insights Hub, the Mendix app does not delete the session cookie.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image18.png" alt="Insights Hub header bar with the sign out icon" >}}

{{% alert color="warning" %}}
In some circumstances, another user who uses the same app in the same browser on the same computer can pick up the session from the previous user if the cookie has not yet expired.
{{% /alert %}}

### Progressive Web Applications

Studio Pro 9 introduced support for developing [progressive web apps (PWAs)](/refguide/progressive-web-app/). PWAs are not supported for Mendix on Insights Hub.

## Read More

* [Siemens Insights Hub – deployment](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub Module Details](/appstore/industry/mindsphere/mindsphere-module-details/)
