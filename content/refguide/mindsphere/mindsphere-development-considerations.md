---
title: "MindSphere Development Considerations"
category: "Siemens MindSphere"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document; each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
draft: true
---

## 1 Introduction

{Add the introduction text here. Write about what this Mendix Reference Guide page will cover and what the user will learn.}

## 2 Local Testing{#localtesting}

### 2.1 Credentials 

When you run your app locally, you will not be able to use SSO to get your credentials. You will be logged on as MxAdmin and will be presented with a login screen the first time that your app attempts to retrieve your access token.

{{% image_container width="50%" %}}![](attachments/mindsphere-development-considerations/image19.png){{% /image_container %}}

This will use the credentials you have set up under **App Credentials** in the *Authorization Management* tab of the MindSphere Developer Cockpit for this application.

To create the app credentials:

1.  Register this application using the identical application name as that set in the constant **CockpitApplicationName**. See section 3.2, [MindSphere Launchpad Setup](#launchpad).
2.  Go to the **App Credentials** page in the *Authorization Management* tab of the MindSphere Developer Cockpit.
3.  Click **Issue access** to obtain a token.

    ![](attachments/mindsphere-development-considerations/image20.png)

4.  Select the access level and click **Submit**

    ![](attachments/mindsphere-development-considerations/image21.png)

5.  Make a note of the **Client ID** and **Client Secret**

    ![](attachments/mindsphere-development-considerations/image22.png)

For more information about creating app credentials, see the documentation on the MindSphere website here: [Self-Hosted Application – Access MindSphere APIs](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html).

To ensure that the correct application credentials are requested, you have to set the following constants in the **LocalDevelopment** folder of the **MindSphereSingleSignOn** module in addition to the other configuration constants.

![](attachments/mindsphere-development-considerations/image23.png)

**CockpitApplicationVersion**

This is a valid version of the MindSphere app as registered in the Developer Cockpit under the name *CockpitApplicationName*.

**HostTenant**

This should be the tenant where your credentials are stored. It is needed when retrieving your Service Credentials. The **Tenant name** is available from the menu bar in the MindSphere launchpad.

![](attachments/mindsphere-development-considerations/image24.png)

The definition of a tenant on MindSphere is available in the MindSphere document [Definition of Tenant](https://documentation.mindsphere.io/resources/html/settings/en-US/118273564939.html).

**UserTenant**

This should be the tenant that the user has access to in a multi-tenant environment. For a developer tenant, this must be the same as the HostTenant. In an operator or iot plan tenant, you can Change this to allow you to test multi-tenant apps.

### 2.2 User Roles

If you are testing different roles in your app, do not use the demo users. If you switch between demo users, this will not correctly populate the tenant and role information from MindSphere. To test different roles, allocate the role to MxAdmin, redeploy, and log in again.

## 3 Multi-Tenant{#multitenant}

In MindSphere, apps are usually designed to be multi-tenant, meaning that a single instance of the app serves multiple tenants. A tenant is a representation of a real-world organization. It groups users, data, assets, entities, and many kinds of other properties. Access to these resources for users of the same tenant is controlled via the authorization management system.

For a MindSphere app to be multi-tenant, each user can only see the data from a single tenant, defined by their login credentials, and cannot access resources of other tenants.

### 3.1 Control through MindSphere APIs

The Authorization HTTP Header (see DS_MindSphereAccessToken in section 2.2.2, Microflows) which is passed for every MindSphere API call ensures that the user can only obtain data which is authorized to them via their tenant.

### 3.2 Control within a Mendix app

If no security is placed on persistent Mendix entity objects, these are accessible to all users of the app (subject to access granted by their user role). This means that any app which stores data in persistent Mendix entities cannot be made multi-tenant without additional security.

MindSphere SSO provides the user’s tenant as the **Name** attribute in the **Tenant** entity.

![](attachments/mindsphere-development-considerations/image25.png)

By utilizing this value when an entity is accessed, the Mendix app can be made multi-tenant.

{{% alert type="warning" %}}
It is not possible, currently, to generate these access restrictions automatically.

The developer will have to add a rule every time the entity is accessed. See the instructions below.
{{% /alert %}}

{{% alert type="info" %}}
It is not necessary to put an access rule on every entity within the domain model. It is only required for: **persistent** entities which have a **TenantId** attribute.
{{% /alert %}}

To make your Mendix app multi-tenant, do the following:

1.  Make all *permanent* entities which have a **TenantId** attribute a specialization of the MindSphereSingleSignOn.TenantObject entity.  
    This ensures that every object is associated with the Tenant object of the user who creates it.
2.  Every action on this object must have the following XPath constraint:

    ```java
    [MindSphereSingleSignOn.TenantObject_Tenant/MindSphereSingleSignOn.Tenant/MindSphereSingleSignOn.MindSphereAccount_Tenant='[%CurrentUser%]']
    ```
    
    This ensures that the user can only retrieve entities which belong to their tenant, in other words, where their Tenant matches the TenantId of the entity. You can copy and paste this constraint from here. You can also copy it from XPath constraint on the *TenantObject* entity in the *MindSphereSingleSignOn* module. For more information on XPath, see [XPath](/refguide/xpath).

{{% alert type="info" %}}
For consistency, it is recommended that all access to these entities is done through a sub-microflow which contains the XPath constraint. This enforces multi-tenant security.
{{% /alert %}}

**Example**

You have some limits which are set for the user's tenant to be applied to a time series. You then want to get a list of all these so that you can display the values to the user.

1.  Create the domain model with the **Limit** entity being a specialization of **MindSphereSingleSignOn.TenantObject**.

    ![](attachments/mindsphere-development-considerations/image26.png)

2.  Write a sub-microflow which returns a list of all limits.
3.  Apply the XPath constraint to the **Retrieve Objects** action.

    {{% image_container width="75%" %}}![](attachments/mindsphere-development-considerations/image27.png){{% /image_container %}}

4.  When you want to retrieve the list of limits, call this microflow instead of using the retrieve objects action. This will ensure that tenant-based security is applied.

## 4 Cloud Foundry Environment Variables

If you need to set or change the value of any Cloud Foundry Environment Variables, you will have to do this using the CF CLI.

1.  Use `cf set-env {app_name} {environment_variable_name} {value}`
2.  You will need to restart the app to use the new value.  
    Use `cf restart {app_name}`

{{% alert type="warning" %}}
Restarting your app will cause your app to be temporarily unavailable.
{{% /alert %}}

## 5 Validation

Your app should, as a minimum, meet the requirements of the checklist on the MindSphere developer site here: [Get your Application Ready for Productive Use](https://developer.mindsphere.io/howto/howto-app-publication.html).


## 6 Related Content

{Do not enter anything here, this will be generated by Mendix.}
