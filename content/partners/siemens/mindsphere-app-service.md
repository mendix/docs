---
title: "MindSphere App Service"
parent: "mindsphere"
menu_order: 5
description: "A description of some extra considerations to be taken into account when developing for deployment to MindSphere"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation"]
---

## 1 Introduction

The MindSphere App Service is the ideal solution if you want to add MindSphere information to an existing app which runs in the Mendix Cloud or another platform. It makes it easy to combine MindSphere data with information from other sources, such as SAP.

### 1.1 Limitations

The MindSphere App Service is easy to add to your app but has the following limitations:

* You can only communicate with [MindSphere Services](https://developer.mindsphere.io/apis/index.html) using *REST APIs*
* You cannot make your app multi-tenant – see [Multi-tenancy](mindsphere-development-considerations#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot be added to the MindSphere Developer Cockpit
* You cannot use MindSphere credentials to sign in to your app, you must handle app security yourself within your app

App Service packages come in various sizes. Depending on the App Service package you purchase, you will be able to have up to:

* 100 users
* 50 asset types
* 2000 assets
* 100 event types
* 2,500,000 events
* 100 connected agents
* 10,000 notifications per month
* 1500 calls to the analytics services API
* 100KB/s ingestion of time series data
* 3TB of time series data
* 500GB of files storage
* 600GB outbound traffic per month
* 1,500,000 calls to the token manager API

## 2 Setting Up MindSphere App Service

### 2.1 Requesting the MindSphere App Service

Contact your Customer Success Manager (CSM) or the Mendix Sales organization to request the MindSphere App Service.

Once your order is processed, your entitlement to the MindSphere App Service will be confirmed.

### 2.2 Provisioning a MindSphere Tenant

On receipt of your confirmation, a [Mendix Administrator](/developerportal/control-center/index#company) for your company will need to initiate a tenant needs to be created within MindSphere.

{{% todo %}}[How is this triggered]{{% /todo %}}

Once all the resources have been provisioned, the the Mendix Administrator will receive an email with credentials to the MindSphere Tenant consisting of the following:

* Client ID
* Client Secret
* Client URI

### 2.3 Linking to Asset Manager

{{% todo %}}[This section to be completed by MindSphere Documentation Team?]{{% /todo %}}

## 3 Using the MindSphere App Service

The MindSphere App Service can be used in any Mendix app, for example an app which is based on the Mendix **Blank App**. However, it is not suitable for apps which are designed to be deployed to MindSphere, such as the **Siemens MindSphere Starter Application**, the **Siemens MindSphere Pump Asset Example**, or an app which is using the **Siemens MindSphere SSO** module.

Unless you are adding features to an existing app, it is recommended that you start with the Mendix **Blank App**.

### 3.1 Downloading the IoT Authenticator Module

{{% todo %}}[Need a link to the authenticator module]{{% /todo %}}

To extract data from MindSphere, your calls to the MindSphere API need to be authenticated. This is done through the [Mindsphere Iot Authenticator Module](https://example.com).

Download the **Mindsphere Iot Authenticator Module** by following the instructions [Downloading Content from the Marketplace](/appstore/general/app-store-content#downloading2) in the document *How To Use Marketplace Content in Studio Pro*.

### 3.2 Obtaining Binding Keys

{{% todo %}}[What is the link to do this, cannot do it through the marketplace - are they the same as the credentials provided by email when the tenant has been provisioned]{{% /todo %}}

To authenticate your calls you will need to provide the MindSphere IoT Authenticator Module with an access key and a secret key. You need to retrieve these from the Developer Portal once the MindSphere tenant has been provisioned. This can be done as follows:

1. Go to **INSTRUCTIONS ON WHERE TO GO**

2. Choose the **Product Name** *MindSphere IoT*.

3. The **Service Environment** should be left as *Existing Instance*.

4. Enter a **Name for Your App Connection** so that you can retrieve this pair of keys from the Developer Portal in future.

5. Click **Create Keys**.

    ![](attachments/mindsphere-app-service/create-keys.png)

    You will see a pop-up containing your two keys: **One-time Access Key** and **One-time Secret Key**.

6. Click **Copy Key** for each of the two keys and save them somewhere safe – you will not be able to access them again.

    ![](attachments/mindsphere-app-service/binding-keys.png)

### 3.3 Authenticating MindSphere REST Calls

Calls to MindSphere are made through REST calls which can be made using the standard Mendix [Call REST Service](/refguide/call-rest-action) functionality. See [How To Consume a REST Service](/howto/integration/consume-a-rest-service) for a full walkthrough on doing this. For calls to MindSphere, these calls need to be authenticated.

This is done by adding an **Access Token** action before each **Call REST** action in your microflows. The **Access token** action returns a string which contains an access token which can be used in the **Call REST** action. In the example below, the token string is given the name *Token*.

![](attachments/mindsphere-app-service/access-token.png)

In the REST call, an HTTP Header is added called *Authorization* and this is given the value of the access token.

![](attachments/mindsphere-app-service/call-rest.png)

However, authentication will only be successful if the correct credentials are provided to the **Access token** action. This requires the following to be set in the **_Use me** folder of the *MindSphereIotAuthenticator* module:

* **URI** – this is the *Client URI* which is provided in the email you receive after the MindSphere tenant is provisioned 
* **ClientId** – this is the *Client ID* which is provided in the email you receive after the MindSphere tenant is provisioned and is also the *One-time Access Key* in the binding keys you can obtain in the Developer Portal
* **ClientSecret** – this is the *Client Secret* which is provided in the email you receive after the MindSphere tenant is provisioned and is also the *One-time Secret Key* in the binding keys you can obtain in the Developer Portal

![](attachments/mindsphere-app-service/mindsphereiotauthenticator.png)

#### 3.3.1 Authenticating During Development

When you are developing your app, you can set the **ClientId** and **ClientSecret** constants within the app. You can also override these by using different [Configurations](/refguide/configuration) within your project settings.

For security, the values of these constants should not be included when you deploy the app.

#### 3.3.2 Authenticating for Deployment

When you deploy your app, you should remove the values of **ClientId** and **ClientSecret** from the app model for security reasons. You should then set the correct value as a constant (Cloud Foundry environment variable) during the deployment.

For the Mendix Cloud, this can be done by setting the value of the constants on the [Model Options](/developerportal/deploy/environments-details#model-options) tab of the **Environment Details**. See [Constants](/refguide/constants) for information on how to set these values on other deployment platforms.

## 4 MindSphere Widgets

If you want to use the [Siemens MindSphere Web Components Widgets](https://marketplace.mendix.com/link/component/110119) in your app, these will need to use the *MindSphere API Revers Proxy*. Ensure that the constant **EnableMindSphereApiReverseProxy** is set to *true* to ensure this can happen.


