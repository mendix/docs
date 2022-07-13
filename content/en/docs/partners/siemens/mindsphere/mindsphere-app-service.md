---
title: "MindSphere IIoT for Makers"
url: /partners/siemens/mindsphere-app-service/
weight: 5
description: "A description of some extra considerations to be taken into account when developing for deployment to MindSphere"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "App Service", "IIoT"]
---

## 1 Introduction

**MindSphere IIoT for Makers** provides you with an account to connect Industrial equipment and consume the IoT data in Mendix applications.
With MindSphere IIoT for Makers you can:

* Easily connect and manage Industrial machinery
* Build or extend a Mendix application with MindSphere IIoT for Makers capabilities
* Use standard IoT applications in MindSphere
* Use a seamless single-sign-on between MindSphere and Mendix accounts
* Simply consume IoT data from MindSphere in your Mendix applications

With the use of MindSphere IIoT for Makers, you have an integrated developer experience to build and integrate personalized Industrial IoT applications with Mendix.

MindSphere IIoT for Makers packages come in various sizes. Please see the [Product Sheet](https://siemens.mindsphere.io/content/dam/mindsphere/terms/pdf/MindSphere_MindSphereIIoTforMakers_ProductSheet_SpecificTerms_v1.0.pdf) for full details.

This documentation will help you find out how to develop for Siemens MindSphere. Alternatively, have a look at the Mendix Academy Learning path [Mendix IIoT for Makers](https://academy.mendix.com/link/path/114/Mendix-IIoT-for-Makers).

### 1.1 Limitations

MindSphere IIoT for Makers is easy to add to your app but has the following limitations:

* You cannot make your app multi-tenant – see [Multi-tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy) in *MindSphere Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the MindSphere platform and cannot be added to the MindSphere Developer Cockpit
* End users cannot use MindSphere credentials to sign in to your app, so MindSphere does not know anything about individual app end users — you must design your app to handle any required security for each end user

MindSphere IIoT for Makers can be used in any Mendix app, for example an app which is based on the Mendix **Blank App**. However, it is not suitable for apps which are designed to be deployed to MindSphere, such as the **Siemens MindSphere Starter Application**, the **Siemens MindSphere Pump Asset Example**, or an app which is using the **Siemens MindSphere SSO** module.

Unless you are adding features to an existing app, it is recommended that you start with the Mendix **Blank App**.

## 2 Setting Up MindSphere IIoT for Makers

### 2.1 Requesting the MindSphere IIoT for Makers

Contact your Customer Success Manager (CSM) or the Mendix Sales organization to request MindSphere IIoT for Makers.

Once your order is processed, your entitlement to MindSphere IIoT for Makers will be confirmed.

### 2.2 Provisioning a MindSphere Tenant

On receipt of your confirmation, a [Mendix Administrator](/developerportal/control-center/#company) for your company will need to initiate the creation of a dedicated tenant account within MindSphere.

Once all the resources have been provisioned, the Mendix Administrator for your company will receive an email confirming that your MindSphere account has been created. The email will also contain the following:

* The name of your MindSphere account – this is the client URI
* A link to enable you to [create the binding keys](#binding-keys) – see below for more information

### 2.3 Linking to Asset Manager

Once you have the name of your MindSphere account, you can use this to link your account to the required assets. You will be able to sign in to this account using your Mendix account credentials (user ID and password).

#### 2.3.1 Creating New Assets

To set up new assets, follow the [Workflow for creating assets](https://documentation.mindsphere.io/resources/html/asset-manager/en-US/113658277515.html) instructions in the MindSphere Asset Manager documentation.

Full information can be found in the [MindSphere Asset Manager](https://documentation.mindsphere.io/resources/html/asset-manager/en-US/index.html) documentation on the MindSphere site.

#### 2.3.2 Availability of Assets

There are two ways to use the Mendix App Service.

* You can make REST calls to the standard MindSphere end points for your tenant. Instructions for doing this are in [Using MindSphere IIoT for Makers Through REST Calls](#using-rest).

    In this case your assets are now set up and you can continue by [Creating Binding Keys](#binding-keys).

* You can publish your assets through Mendix Data Hub and add the asset data as an [External Entity](/refguide/external-entities/) in your domain model. In this case, you first have to publish a contract of your assets to Data Hub so that they can be found in the [Data Hub Pane](/refguide/data-hub-pane/) in Studio Pro.

    The instructions for doing this are below, and instructions for using the external entities are in [Using MindSphere IIoT for Makers Through Mendix Data Hub](#using-data-hub).

#### 2.3.3 Publishing Assets to Data Hub

To access your IoT data using the OData technology provided by the Mendix Data Hub, you first have to publish your asset information to Mendix Data Hub. To do this, you create a **contract** within the MindSphere **Asset Manager**. Do the following to manage your contracts:

1. Go to the **Asset Manager** in the MindSphere Launchpad.

1. On the home page you find a card showing the numbers of already existing contracts.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_card.png" alt="asset-manager" >}}

1. Click **View contracts**.

1. You will now see the lists of your already existing contracts or an indication that no contracts are created yet.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_first.png" alt="asset-manager" >}}

    If no contracts are available, click **Create contract** to start your first one. If you have already some contracts, click **Add contracts** to add another one.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_add.png" alt="asset-manager" >}}

1. On the left-hand side, you can select the asset types you want to share within this contract. On the right side you will see a preview of all selected types.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_wizard_step1.png" alt="asset-manager" >}}

1. Confirm your selection by clicking **Next**.

1. In the **Meta Information** step of the wizard you can specify parameters like the name or the version of your contract. Note that the application name is already pre-filled with a combination of the prefix **mdsp_** and your tenant name. This will help you to find all contracts for your particular tenant within Mendix.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_wizard_step2.png" alt="asset-manager" >}}

1. Confirm your meta information by clicking **Next**.

1. In the last step you can specify the following:
    * Save your contract (always enabled).
    * Download your contract – if you want to store the contract yourself or you want to use it with an OData provider other than the Mendix Data Hub
    * Publish the contract to the Mendix Data Hub – you must do this if you want to use the asset information within your Mendix project; it is therefore preselected

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/asset_manager_contract_wizard_step3.png" alt="asset-manager" >}}

1. Click the **Submit** button to finalize the creation of your contract.

{{% alert color="info" %}}
   In Mendix, every user is a member of (exactly) one company ([User Account](/apidocs-mxsdk/apidocs/user-management-api/#user-account)). All users with the same email domain (the part after the `@`) are part of the same [Company](/apidocs-mxsdk/apidocs/user-management-api/#company-account).

   Published contracts are only visible in Mendix DataHub for users that belong to the same company.

   In MindSphere you can invite users with different email domains to your MindSphere tenant. In this case, only the users with the same email domain as the person who published the first contract to Mendix DataHub will see the contracts there.

   Ensure that only users who have an email account within your company domain create contracts on Mendix DataHub.

   {{% /alert %}}

Now your assets will appear in the Data Hub Pane of Studio Pro, and you can continue with [Creating Binding Keys](#binding-keys).

## 3 Creating Binding Keys{#binding-keys}

To authenticate your calls you will need to provide the MindSphere IIoT Authenticator Module with the binding keys: an clientID and a clientSecret. You need to create these in the Mendix Marketplace once the MindSphere tenant has been provisioned. This can be done as follows:

1. Open the **Service Management Dashboard** of the [Mendix Marketplace](https://marketplace.mendix.com/) using the link provided in your confirmation email.

2. Choose the **Product** *MindSphere IoT*.

3. Click **Create Binding Keys**.

4. In **Provide a Name for Your App Connection** enter a name so that you can retrieve this pair of keys from the Developer Portal in future.

5. Click **Create Keys**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/create-keys.png" alt="Binding" >}}

    You will see a pop-up containing three pieces of information: **clientID**, **TokenURL**, and **clientSecret**.

6. Click **Copy** for each of these pieces of information and save them somewhere safe – you will not be able to access them again.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/binding-keys.png" alt="Binding" >}}

You can find more information about managing binding keys in the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) and [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) sections of *Marketplace Overview*.

## 4 Using MindSphere IIoT for Makers Through Mendix Data Hub{#using-data-hub}

The easiest way to get your data from MindSphere is to use Mendix Data Hub. To do this you will need a [Data Hub license](/refguide/consumed-odata-service-requirements/#license-limitations).

See [Data Hub Limitations](#dh-limitations) for information on restrictions and workarounds when using Mendix Data Hub.

### 4.1 Adding External Entities to the Domain Model

To add the external entities representing your MindSphere data to the domain model, search in the [Data Hub pane](/refguide/data-hub-pane/) for your MindSphere service.

Drag the [entities](/refguide/external-entities/) you need into your domain model. This will also create a **Consumed OData Service** document which you will need to edit to authenticate your calls to the MindSphere API.

### 4.2 Authenticating Calls to External Entities

To extract data from MindSphere, your calls to the MindSphere API need to be authenticated. This is done through the [MindSphere IIot Authenticator Module](https://marketplace.mendix.com/link/component/117578).

Download the **MindSphere IIot Authenticator Module** by following the instructions [Downloading Content from the Marketplace](/appstore/general/app-store-content/#downloading) in the document *How To Use Marketplace Content in Studio Pro*.

In the **_Use me** folder of the *MindSphereIIotAuthenticator* module set the following constants:

* **TokenURL** – this is the *TokenURL* from the binding keys you generated
* **ClientID** – this is the *clientID* from the binding keys you generated
* **ClientSecret** – this is the *clientSecret* from the binding keys you generated

In the Consumed OData Service document associated with your MindSphere service, set the **Headers from microflow** to be *MindSphereIIoTAuthenticator.DH_AddAuthHeader*. This ensures that the values you have set in the **Use me** folder are used to authenticate each HTTP request to MindSphere.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/data-hub-authentication.png" alt="Binding" >}}

Set the **Error handling microflow** to be *MindsphereIIoTAuthenticator.DH_ErrorHandler*. This microflow is executed if there is an error. It logs the error and provides a human readable string of the error, which is shown to the user in an error message. See [Custom Error Handling](#ts-customerrorhandling), below, for further details.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/data-hub-error-handling.png" alt="Binding" >}}

## 5 Using MindSphere IIoT for Makers Through REST Calls{#using-rest}

### 5.1 Downloading the IIoT Authenticator Module

To extract data from MindSphere, your calls to the MindSphere API need to be authenticated. This is done through the [MindSphere IIot Authenticator Module](https://marketplace.mendix.com/link/component/117578).

Download the **MindSphere IIot Authenticator Module** by following the instructions [Downloading Content from the Marketplace](/appstore/general/app-store-content/#downloading) in the document *How To Use Marketplace Content in Studio Pro*.

### 5.3 Authenticating MindSphere REST Calls {#authenticating}

Calls to MindSphere are made through REST calls which can be made using the standard Mendix [Call REST Service](/refguide/call-rest-action/) functionality. See [How To Consume a REST Service](/howto/integration/consume-a-rest-service/) for a full walkthrough on doing this. For calls to MindSphere, these calls need to be authenticated.

To extract data from MindSphere, your calls to the MindSphere API need to be authenticated. This is done through the [MindSphere IIot Authenticator Module](https://marketplace.mendix.com/link/component/117578).

This is done by adding an **Access token** action before each **Call REST** action in your microflows. The **Access token** action returns a string which contains an access token which can be used in the **Call REST** action. In the example below, the token string is given the name *Token*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/access-token.png" alt="Authentication" >}}

In the REST call, an HTTP Header is added called *Authorization* and this is given the value of the access token.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/call-rest.png" alt="Authentication" >}}

However, authentication will only be successful if the correct credentials are provided to the **Access token** action. This requires the following to be set in the **_Use me** folder of the *MindSphereIIotAuthenticator* module:

* **TokenURL** – this is the *TokenURL* from the binding keys you generated
* **ClientID** – this is the *clientID* from the binding keys you generated
* **ClientSecret** – this is the *clientSecret* from the binding keys you generated

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/mindsphereiotauthenticator.png" alt="Authentication" >}}

## 6 Authentication Considerations

### 6.1 Authenticating During Development

When you are developing your app, you can set the **ClientID** and **ClientSecret** constants within the app. You can also override these by using different [Configurations](/refguide/configuration/) within your project settings.

For security, the values of these constants should not be included when you deploy the app.

### 6.2 Authenticating for Deployment

When you deploy your app, you should remove the values of **ClientID** and **ClientSecret** from the app model for security reasons. You should then set the correct value as a constant (Cloud Foundry environment variable) during the deployment.

For the Mendix Cloud, this can be done by setting the value of the constants on the [Model Options](/developerportal/deploy/environments-details/#model-options) tab of the **Environment Details**. See [Constants](/refguide/constants/) for information on how to set these values on other deployment platforms.

## 7 MindSphere Widgets

If you want to use the [Siemens MindSphere Web Components Widgets](https://marketplace.mendix.com/link/component/110119) in your app, these will need to use the *MindSphere API Reverse Proxy*.

To enable this, you will have to do two things:

1. Ensure that the constant **EnableMindSphereApiReverseProxy** is set to *true* to ensure this can happen.
2. Add the microflow **Register ApiReverseProxy** to the [After Startup](/refguide/app-settings/#after-startup) microflow(s) which are run when the app is started.

## 8 Data Hub Limitations{#dh-limitations}

### 8.1 Read-only Access

Data Hub only supports reading of data from MindSphere. This means that you cannot create, update, or delete data on MindSphere. If you need to do this, you should [Use MindSphere IIoT for Makers Through REST Calls](#using-rest).

### 8.2 Associations Between Contracts

You cannot create associations between external entities. To work around this, always publish related asset types in a single contract so that your app can identify the association between them.

For example, imagine that you have an Asset Type `CNGTurbine` which has a derived Asset Type `LPGTurbine`. If you publish an OData contract for `CNGTurbine` and a separate contract for `LPGTurbine`, you cannot create a association directly between `LPGTurbine` and `CNGTurbine` in the Mendix Domain Model as these are two different contracts. If you publish them in a single contract, you can also publish the association and use the fact that `LPGTurbine` is derived from `CNGTurbine`.

### 8.3 Date and Time Attributes

Mendix Data Hub treats OData time fields as strings. This means that, when you want to specify date (for example, a date range for a Time Series entity), you will have to provide the data and time in the form `YYYY-MM-DDTHH:mm:ss`.

### 8.4 Enumeration Values

Mendix Data Hub does not limit the selections on a query to valid values. When you are creating your Mendix app, you should validate your values before using them in a query.

For example, the interval unit on a Time Series can only be `days`, `minutes`, or `seconds`. If you allow the user to specify `day`, then MindSphere will return an error.

### 8.5 MindSphere Query Limitations

Mendix will allow you to query all types of Data Hub external entities using all the attributes of those entities and a wide range of operators. There are some limitations on which attributes you can query with which operators in MindSphere, but Mendix does not know about these. You should therefore stay within the guidelines listed below.

| Entity Type | Search with Attributes | Use operators |
| --- | --- | --- |
| Asset | `assetId`, `name`, `parentId`, `timezone`, and `typeId` | `eq` (equal), `contains`, `startsWith`, and `endsWith` |
| Time Series | `assetId` | `eq` |
| Time Series | `timestamp` | `after` (greater than), and `before` (less than or equal to) |
| Time Series Aggregate | `assetId`, `aggregationType`, `variableName`, `intervalUnit`, `intervalValue`, and `intervalCount` | `eq` |
| Time Series Aggregate | `timestamp` | `after` (greater than), and `before` (less than or equal to) |

These limits also apply to REST queries.

### 8.6 Number and Count of Time Series Objects Returned

MindSphere will not return more than 2000 MindSphere Time Series and Aggregates objects in a data grid using pagination. Mendix does not enforce this limitation, as this does not apply to entities in the Mendix database.

If you need to retrieve more than 2000 objects, use multiple time intervals for your query modify your query criteria using the `timestamp` attribute to return fewer than 2000 objects for each time interval.

In addition, the total number of objects returned by a Time Series or Aggregate query will not be correctly calculated.

This limitation also applies to REST queries.

### 8.7 Unsupported OData Queries

It is possible to construct a query in Mendix which is not supported by the MindSphere OData contract. If you attempt an unsupported query you will receive an error message.

For example, Time Series can only be sorted using the timestamp attribute. If you are displaying a Time Series for the current through a pump using an attribute `current`, you will get an error if you try to sort Time Series data on the value of the `current` attribute.

## 9 Troubleshooting

### 9.1 Custom Error Handling{#ts-customerrorhandling}

Custom Error Handling is possible when using OData in Microflows, for example on a retrieve action. On the error flow of the action you get a human-readable error string in the variable **$latestError/Message**. Use this variable as input to *MindsphereIIoTAuthenticator.DH_MindSphereErrorFromString* to get a *MindSphereError* entity. Now implement your custom error handling, for example based on the **StatusCode** of the error.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-app-service/data-hub-custom-error-handingScreenshot.png" alt="Binding" >}}

### 9.2 Internal Server Error and Long Names

Publishing contracts to Data Hub can fail with a *HTTP 500 INTERNAL SERVER ERROR* when the combination of Asset Type,  Aspect Type, and Aspect Name is very long. The publish operation will fail if the string `AGGR_{AspectType}_{AspectName}_{AssetType}` is more than 200 characters long.

For example, consider an **Asset Type** *CNGTurbine*, with **Aspect Type** *PowerConsumption* and **Aspect** *PrimaryMotor*. This would produce the string `AGGR_PowerConsumption_PrimaryMotor_CNGTurbine` (45 characters) which is less than 200 characters long and can be published successfully. If it were longer than 200 characters, publication would fail.
