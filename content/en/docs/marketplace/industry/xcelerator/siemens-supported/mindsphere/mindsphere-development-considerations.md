---
title: "Insights Hub Development Considerations"
url: /appstore/industry/mindsphere/mindsphere-development-considerations/
weight: 10
description: "A description of some extra considerations to be taken into account when developing for deployment to Insights Hub"
aliases:
    - /partners/siemens/mindsphere-development-considerations/
---

## Introduction

{{% alert color="warning" %}}
This information is for apps which are fully integrated apps into Insights Hub. It does not apply to apps which are only calling Insights APIs.
{{% /alert %}}

When developing a Mendix app running on Insights Hub, there are a number of extra things you need to take into consideration. The following subjects are discussed below:

* [Authorizing Insights Hub REST Calls](#mstoken)
* [Licensing Your App](#licensing)
* [Local Testing](#localtesting)
* [Multi-Tenancy](#multitenancy)
* [Validation](#validation)

Finally, there is a section on some [Limitations](#limitations) which apply to Mendix apps deployed to Insights Hub.

## Authorizing Insights Hub REST Calls{#mstoken}

The **Token** string returned by the **AccessToken** action needs to be passed as the Authorization header in REST calls to Insights Hub APIs.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/delete-mindspheretoken.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

{{% alert color="info" %}}
Use optionally the **BuildCoreURL** microflow when your app should support dual token, running against **Insights Hub** and **Xcelerator**.
{{% /alert %}}

### Authorizing Insights Hub REST Calls from within Scheduled Events

The access token connector *cannot* be used for calling an Insights Hub API in a microflow which is executed *without* a user context – for example, called from a **scheduled event**. Therefore the SiemensInsightsHubSingleSignOn module offers a microflow, **DS_GetAccessTokenForScheduledEvents**, that returns a Token for a given Tenant. This microflow is also exposed in the toolbox on the right side:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/DS_GetAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

The microflow uses the [Insights Hub Application Credentials](#app-creds) functionality to fetch a token, and uses different environment variables depending on the location where the app is running:

1. Local:

    The microflow uses the application credentials you entered at startup to fetch a token. See also [Application Credentials](#app-creds).

2. Developer / Operator Tenant:

    The following environment variables must be set for the app:

    | Developer Tenant | Description |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | enable Application Credentials in the Developer Cockpit for your app and use the Client ID |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | enable Application Credentials in the Developer Cockpit for your app and use the Client Secret |
    | `MDSP_OS_VM_APP_NAME` | enter the name of your app in Developer Cockpit |
    | `MDSP_OS_VM_APP_VERSION` | enter the version of your app in Developer Cockpit |

Make sure these environment variables exists. Use the returned token as usual in your REST calls to Insights Hub. Do not delete the token after usage as it is not transferred to the client and it is cached in SiemensInsightsHubSingleSignOn module.

The following example shows how to use the microflow **DS_GetAccessTokenForScheduledEvents**. The sample retrieves a list of all Tenants from the database and fetches a token for each tenant. With the token you can proceed with your custom application logic.

{{% alert color="warning" %}}
Do not create a Tenant object yourself as this is done automatically during login.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/sample_getAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

For more information on how to perform REST calls see the [Importing and Exporting Your Data](https://academy.mendix.com/link/path/44) learning path (you must be signed in to the Mendix Platform to see this learning path).

## Licensing Your App {#licensing}

When you initially deploy a Mendix App, it is treated as a *Free App*. For an Insights Hub app the most important restriction is that the app will go into sleep mode after 1-2 hours: this could cause the Cloud Foundry environment to be restarted and pick up the latest values of environment variables.

To license your app, you need to obtain a license key from [Mendix Support](https://support.mendix.com).

Instructions for licensing apps are available in the [License Activation](https://github.com/mendix/cf-mendix-buildpack#license-activation) section of the *Mendix Cloud Foundry Buildpack Readme*. 

## Local Testing {#localtesting}

### Corporate Proxies

If you need to use a corporate web proxy, the following settings must be applied in Mendix Studio Pro to allow communication with Insights Hub during local development.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/proxy-settings.png"   width="50%"  >}}

Contact your local IT department for the `proxyHost` and `proxyPort` values you need.

{{% alert color="info" %}}
Proxy settings for version control used in Mendix Studio Pro:

For more information about the version control used by Mendix apps, see [Version Control](/refguide/version-control/). Depending on your local development environment, you may have to configure your version control client to use a proxy as well. You may need to do this to solve a merge conflict manually.
{{% /alert %}}

### Application Credentials{#app-creds}

The SSO module supports you in getting a valid Insights Hub token locally via **Application Credentials**.

When you run your app locally, you will not be able to use SSO to get your credentials. You will be logged in as MxAdmin and will be presented with a login screen on app startup if the constant *AskForCredentialsOnStartUp* is true - otherwise communication to Insights Hub is not possible.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/requestapplicationcredentials.png"   width="50%"  >}}

This will use the credentials you have set up under **App Credentials** in the *Authorization Management* tab of the Insights Hub Developer Cockpit for this application.

{{% alert color="info" %}}
**Tip:** Use the autofill feature based on a local environment variable for the *Client Secret*.

Storing the *Client Secret* inside the app is, from a security perspective, not a good idea. A better approach is to use a local environment variable. Create a user-specific environment variable with *Variable name* equal to your *Client ID* value and the *Variable value* equal to your *Client Secret* value. See step 6 below for information on how to get these values.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png"   width="50%"  >}}

On startup, the system checks if there is an environment variable present with the name equal to your *Client ID* value and uses its value as *ClientSecret*.
The *ClientID* is built from the combination of:

```*Host tenant*-*Cockpit application name*-*Cockpit application version*```

Ensure you have filled these constants correctly.

If everything is set up correctly, the form is auto filled and submitted.

Don't forget to restart Studio Pro after you change / add the environment variable.
{{% /alert %}}

To create the app credentials:

1. Register this application using the identical application name as that set in the constant **CockpitApplicationName**, and a valid version number which is the same as the one you set in *CockpitApplicationVersion*, below. See also, [Insights Hub Launchpad Setup](/developerportal/deploy/deploying-to-mindsphere/#launchpad) in *Siemens Insights Hub – deployment*.
2. Go to the **App Credentials** page in the *Authorization Management* tab of the Insights Hub Developer Cockpit.
3. Choose your app.
4. Click **Issue access** to obtain a token.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image20.png" >}}

5. Select the access level and click **Submit**

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image21.png" >}}

6. Make a note of the **Client ID** and **Client Secret**

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image22.png" >}}

For more information about creating app credentials, see the documentation on the Insights Hub website here: [Self-Hosted Application – Access Insights Hub APIs](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html).

To ensure that the correct application credentials are requested, you have to set the following constants in the **LocalDevelopment** folder of the **SiemensInsightsHubSingleSignOn** module in addition to the other configuration constants.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image23.png" >}}

### Configuration

**AskForCredentialsOnStartUp**

Set this to *True* if you want your app to ask for credentials as soon as it starts up, before the first page is displayed. If this is set to *False* then the app will not ask for credentials and no token is available for calling Insights Hub APIs.

If you trigger microflows consuming Insights Hub APIs on the home page, setting this to *True* ensures that they will work the first time the page is displayed.

{{% alert color="info" %}}
This setting has no effect on apps which are deployed to the cloud. The credentials page is only shown for local deployments.
{{% /alert %}}

**CockpitApplicationVersion**

This is the version of the Insights Hub app linked to the application credentials, as registered in the Developer Cockpit under the name *CockpitApplicationName*.

**CockpitApplicationName**

This is the name as registered in the Developer Cockpit.

**EnableLocalApiReverseProxy**

Set this to *True* to enable a reverse proxy for Insights Hub API calls which are made directly from the html pages (for example, the calls from the Insights Hub OS Bar).

This endpoint forwards all calls to \api… from within native HTML pages, and adds an Insights Hub token to them. For example, the calls from the Insights Hub OS Bar or the Siemens Insights Hub Widgets.

**PlatformType**

Set this to either to **Xcelerator** or **Insights Hub**. 

**HostTenant**

This should be the tenant where your credentials are stored. It is needed when retrieving your Application Credentials.

The definition of a tenant on Insights Hub is available in the Insights Hub document [Definition of Tenant](https://developer.mindsphere.io/apis/core-identitymanagement/api-identitymanagement-overview.html#tenants).

**UserTenant**

This should be the tenant that the user has access to in a multitenant environment. For a developer tenant, this must be the same as the HostTenant. In an operator or iot plan tenant, you can change this to allow you to test multitenant apps.

**UserEmail**

Specify the email used for the local **MxAdmin** user account. Default value "max.mustermann@email.com" is used in case no value is provided.

### User Roles

If you are testing different roles in your app, do not use the demo users. If you switch between demo users, this will not correctly populate the tenant and role information from Insights Hub. To test different roles, allocate the role to MxAdmin, redeploy, and sign in again.

The MxAdmin role is found In the **Administrator** tab of the *Security* settings of your app.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/mxadmin-roles.png" >}}

### Local User Passwords

Local users should not be created for your Insights Hub app.

When a new user is identified during SSO, the SSO process generates a random password for the user. The password policy for your app needs to accept these randomly generated passwords. The password generation algorithm generates passwords of a fixed length, so the password policy should not be set to require more characters.

{{% alert color="info" %}}
This policy is set up as the default in the Insights Hub starter and example apps and should not be changed.
{{% /alert %}}

## Multi-Tenancy {#multitenancy}

In Insights Hub, apps are usually designed to be multitenant, meaning that a single instance of the app serves multiple tenants. A tenant is a representation of a real-world organization. It groups users, data, assets, entities, and many kinds of other properties. Access to these resources for users of the same tenant is controlled via the authorization management system.

For an Insights Hub app to be multitenant, each user can only see the data from a single tenant, defined by their login credentials, and cannot access resources of other tenants.

### Control Through Insights Hub APIs

The Authorization HTTP Header (see DS_AccessToken in the [Microflows](/appstore/industry/mindsphere/mindsphere-module-details/#microflows) section of *Insights Hub Module Details*) which is passed for every Insights Hub API call ensures that the user can only obtain data which is authorized to them via their tenant.

### Control Within a Mendix App

If no security is placed on persistable Mendix entity objects, these are accessible to all users of the app (subject to access granted by their user role). This means that any app which stores data in persistable Mendix entities cannot be made multitenant without additional security.

Insights Hub SSO provides the user’s tenant as the **Name** attribute in the **Tenant** entity.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image25.png" >}}

In addition, Insights Hub SSO will identify whether the current user is a subtenant using **IsSubTenantUser** and, if so, will populate the name of the subtenant in **SubtenantId**. More information about subtenants can be found in the Insights Hub documentation [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants).

**How To Make Your App Multitenant**

By utilizing the **Tenant** when an entity is accessed, the Mendix app can be made multitenant.

{{% alert color="warning" %}}
It is not possible, currently, to generate these access restrictions automatically.

The developer will have to add a rule every time the entity is accessed. See the instructions below.
{{% /alert %}}

{{% alert color="info" %}}
It is not necessary to put an access rule on every entity within the domain model. It is only required for: **persistable** entities which have a **TenantId** attribute.
{{% /alert %}}

To make your Mendix app multitenant, do the following:

1. Make all *persistable* entities which have a **TenantId** attribute a specialization of the SiemensInsightsHubSingleSignOn.TenantObject entity.
    This ensures that every object is associated with the Tenant object of the user who creates it.

2. Every microflow action on this object must have the following XPath constraint:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='$currentUser']
    ```

    This ensures that the user can only retrieve entities which belong to their tenant, in other words, where their Tenant matches the TenantId of the entity. You can copy and paste this constraint from here (hover your mouse over the text and click the **Copy** button). You can also copy it from XPath constraint on the *TenantObject* entity in the *SiemensInsightsHubSingleSignOn* module. For more information on XPath, see [XPath](/refguide/xpath/).

    {{% alert color="info" %}}For consistency, it is recommended that all access to these entities is done through a sub-microflow which contains the XPath constraint. This enforces multitenant security.{{% /alert %}}

3. Similarly, every data widget on a page (for example a *Data view*) which retrieves data from the database or via an association must have the following XPath constraint, which works in the same way as the microflow XPath constraint, above:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='[%CurrentUser%]']
    ```

**Example**

You have some limits which are set for the user's tenant to be applied to a time series. You then want to get a list of all these so that you can display the values to the user.

1. Create the domain model with the **LimitConfig** entity being a specialization of **SiemensInsightsHubSingleSignOn.TenantObject**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image26.png" >}}

2. Write a sub-microflow which returns a list of all limits.
3. Apply the XPath constraint to the **Retrieve Objects** action.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image27.png"   width="75%"  >}}

4. When you want to retrieve the list of limits, call this microflow instead of using the retrieve objects action. This will ensure that tenant-based security is always applied.

## Validation {#validation}

Your app should, as a minimum, meet the requirements of the checklist on the Insights Hub developer site here: [Get your Application Ready for Productive Use](https://developer.mindsphere.io/howto/howto-app-publication.html).

## Limitations {#limitations}

The following limitations apply to Mendix apps which are deployed to Insights Hub.

If these limitations affect the design of your app, you can still create a Mendix app to use Insights Hub APIs from outside Insights Hub.

### App Name {#appname}

There are few limitations on what you call your app within Mendix. However, when you deploy the app to Insights Hub, the app name registered in the Developer Cockpit must have the following characteristics:

* Contains only *lowercase* alphanumeric characters and special character `-`. (The `_` and `.` characters are not allowed)
* Starts with a letter
* Length does not exceed 20 characters
* Is unique within your tenant

If you want to use the same app name in both Mendix and Insights Hub, you should bear these constraints in mind when naming your Mendix app.

### Roles and Scopes

Insights Hub supports up to five application roles. You should take this into account when designing security within your Mendix app.

To use these scopes, you must create identically-named scopes for each Insights Hub application role. These scopes will map to identically-name user roles in your Mendix app.

There is a more detailed discussion of Insights Hub and Mendix roles and scopes in the [Roles and Scopes](/appstore/industry/mindsphere/mindsphere-module-details/) section of *Insights Hub Module Details*.

### Logout from Insights Hub

If the user signs out from Insights Hub, the Mendix app will not delete the session cookie.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image18.png" >}}

{{% alert color="warning" %}}
In some circumstances, this could lead to another user *using the same app in the same browser on the same computer*, picking up the session from the previous user if the cookie has not yet expired.
{{% /alert %}}

### Progressive Web Applications

Mendix Studio Pro version 9 introduced support for developing [progressive web apps (PWAs)](/refguide/progressive-web-app/). PWAs are not supported for *Mendix on Insights Hub*.

## Read More

* [Siemens Insights Hub – deployment](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub Module Details](/appstore/industry/mindsphere/mindsphere-module-details/)
