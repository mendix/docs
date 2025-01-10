---
title: "OData Connector for SAP Solutions"
url: /appstore/modules/sap/sap-odata-connector/
weight: 10
description: "Presents reference information on the use of the OData Connector for SAP solutions."
aliases:
    - /partners/sap/use-sap-odata-connector/
    - /partners/sap/sap-odata-connector/
    - /partners/sap/sap-troubleshoot-odata-connector/
    - /appstore/connectors/sap/sap-odata-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction {#Introduction}

The [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525) is an OData connector written specifically to integrate with SAP back-end systems like SAP Business Suite (SAP ERP 6.0), SAP S/4HANA, SAP S/4HANA Cloud, and SAP SuccessFactors. The OData Connector for SAP solutions can be used for all SAP back-end systems that have OData enabled, both in the cloud and on-premises. For ECC, SAP Gateway is used to expose the traditional BAPI interface as an OData service.

### Typical Use Cases

When running the Mendix application on SAP Business Technology Platform (SAP BTP), you can choose to use the SAP Destination Service to gain access to your on-premises SAP instance. The SAP Destination Service can be configured to invoke the SAP Connectivity Service in SAP BTP to find a route to your OData service residing on-premises. This route is configured from the SAP Cloud Connector running as an agent in your on-premises SAP back-end. If no route is configured, the OData Connector for SAP solutions will route requests to the public OData service. For more information, see the [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) documentation and the [OData Connector for SAP Solutions](https://marketplace.mendix.com/link/component/74525/Mendix/SAP-OData-Connector).

{{% alert color="info" %}}
The SAP Destination Service replaces the SAP Cloud Connector flag which was used in previous version of the OData Connector for SAP solutions.
{{% /alert %}}

### Prerequisites {#prerequisites}

The OData Connector for SAP solutions connector requires an app built with the correct version of Mendix Studio Pro. The latest version of the OData Connector requires Mendix Studio Pro 9.24.0 or above. Previous versions of the connector, compatible with earlier versions of Mendix Studio Pro, are available on the **Releases** tab of the connector page in the Mendix Marketplace.

To authenticate with SAP, you must also obtain authorization credentials for the [SAP NetWeaver (ES5)](https://sapes5.sapdevcenter.com/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525) into your app.

## Configuration

Once you have downloaded the OData Connector for SAP solutions from the Marketplace, it will be imported into your app. You will find it in the App Explorer under **{App name}** > **Marketplace modules** > **SAPODataConnector**.

This how-to teaches you how to do the following:

* Configure the OData Connector for SAP solutions
* Display product data from the SAP OData service GWSAMPLE_BASIC in your Mendix app

### Getting an SAP Data Model

You can use the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/) to generate a data model from the metadata of your OData service, exposed from your SAP back-end system, or from APIs in the SAP API Business Hub or the SAP Catalog Service. For more details see [Model Creator for SAP Integrations](/appstore/services/use-sap-model-creator/).

In this example, you will display a list of products from the GWSAMPLE_BASIC OData service. You will need to create an SAP data model module for the GWSAMPLE_BASIC OData service. The module contains a pre-built domain model that you can add to your app.

1. Open the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/).
2. Click **SAP Catalog Service**.
3. Enter your **User name** and **Password** for the ES5 SAP Service Catalog (see [Prerequisites](#prerequisites), above).
4. Type *sapes5.sapdevcenter.com* as the **Server**. (Leave the protocol as `https://` and the **Port** as `443`).
5. Click **Continue**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/login-catalog.png" class="no-border" >}}

6. Type *GWSAMPLE* in the search box and press <kbd>Enter</kbd>.
7. Select **GWSAMPLE_BASIC** and click **Continue**.
8. Select **GWSAMPLE_BASIC** again and click **Continue**.
9. Click **Generate .mpk**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/generate-mpk.png" class="no-border" >}}

10. Click **Download** once the model is ready.
11. Select **Save File**.
12. Choose the **/resources** folder within the folder where your app is stored on your PC and click **Save**.
13. Open your app in Mendix Studio Pro.
14. Right-click the app in the **App Explorer** and select **Import module package…**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/import-module.png" class="no-border" >}}

15. Find the file that you stored in the /resources folder and import it.

    The GWSAMPLE_BASIC data model will now be included as a module in your app.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/data-model.png" class="no-border" >}}

For more information, see [Model Creator for SAP Integrations](/appstore/services/use-sap-model-creator/).

### Using the OData Connector for SAP Solutions

In this section, you will learn how to implement the data connector in your Mendix app. These steps assume you are using a blank Mendix app with a module called MyFirstModule.

#### Creating a Microflow {#microflow}

To create the microflow for this retrieval, follow these steps:

1. Create a constant in **MyFirstModule** called ES5_Username and make the default value your ES5 Username credential.
2. Create a second constant in **MyFirstModule** called ES5_Password and make the default value your ES5 Password credential.
3. Create a data source microflow called *DS_GetProductList* in **MyFirstModule**.
4. From the **Toolbox**, drag a **Create request params** action into your microflow.
5. Open the properties and change the return variable name to *SAPRequestParams*.
6. Drag an **Add basic authentication** action into your microflow.
7. Open the properties and set the following:

    * **Request parameters** - `$SAPRequestParams`
    * **Username** - `@MyFirstModule.ES5_Username`
    * **Password** - `@MyFirstModule.ES5_Password`
    
    You do not need to use the return variable.

8. Drag the **Get List** action into your microflow.
9. Fill in the required fields of the Get List connector. For this example, you should use these settings:
    * **Response type** – `GWSAMPLE_BASIC.Product`
    * **Destination** – `empty`
    * **Query** – `@GWSAMPLE_BASIC.GWSAMPLE_BASIC + '/' + toString(GWSAMPLE_BASIC.EntitySetNames.ProductSet)`
    * **Request parameters** – `$SAPRequestParams`
    * **Parent** – `empty`
    * **Result info** – `empty`
    * **Use return variable** – `Yes`
    * **Variable** – `ListOfProducts`
10. In the microflow, make the return value of the microflow **ListOfProducts**. This is so that you can call the microflow as a data source in a page.

The final result of your microflow should look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/get-list.png" class="no-border" >}}

#### Creating a Page

To create a page to show the objects in a list, follow these steps:

1. Add a blank page to your **MyFirstModule** module.
2. Insert a **Data grid** widget in the page.
3. Select the microflow you created in the section [Creating a Microflow](#microflow), above, as the data source for the grid.
4. Select the **Name**, **Category**, and **Price** attributes to display in the data grid.

    Your page should look like this:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/show-get-list-result.png" class="no-border" >}}

5. Drag a **open page button** on your home page.
6. Select the page you have just created to be displayed.

You can now run your app and see a list of the products available in the **GWBASIC_SAMPLE** application.

#### Running OData Actions with the Mendix Task Queue

You can run OData actions asynchronously by using the [Mendix Task Queue](/refguide/task-queue/). To use any of the OData actions through the Task Queue, follow these steps:

1. Edit the microflow which you want to run as a task using the Task Queue.
2. From the **Toolbox**, drag a **Set Task Queue Processing** action into your microflow.
3. Position the **Set Task Queue Processing** action before any OData action calls, as show in the following figure. You only need one **Set Task Queue Processing** action per task, even if the task contains multiple OData action calls.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/task-queue.png" class="no-border" >}}

## Troubleshooting

If you encounter any issues while using the OData Connector for SAP solutions, use the following troubleshooting tips to help you solve them.

### Getting Destination Failed

If you cannot fetch the destination, it could be for one of the following reasons.

#### XSUAA token failed

The JWT token for the currently signed-in user is not valid. You can resolve this by getting a valid token for the user.

Firstly, refresh the token to fetch a valid token for the user.

If refreshing the token does not work, check that the user is a valid SAP Business Technology Platform (SAP BTP) user.

#### Destination name not found

The destination name is provided in the ‘GetDestination’ Java action. Check that a valid destination is provided in a ‘GetDestination’ Java action in the microflow.

#### Unauthorized error

This might happen if the client ID and secret pair is invalid. The client ID and secret are fetched from SAP Cloud Portal using the VCAP environment details.

### HTTP 401 Error While Running OData Function 

If you receive a 401 error code from your OData call, it could be for one of the following reasons.

#### Invalid credentials while using Basic Authentication with request params

Check that the correct username and password are set on the ‘Add basic authentication’ activity when using request params in the microflow.

#### Destination service is not set up correctly

Destination services are defined in SAP BTP. Check that the destination service is running correctly and you can establish a connection with the credentials provided.

#### Invalid bearer token sent

In case of OAuth authentication, the bearer token received with the destination might be invalid or expired. Retry or check the destination service created.

#### User permissions not provided

The role given to the user on SAP BTP might not allow them to access the destination service or the database.

### HTTP 500 Error While Running OData Function 

If you receive a 500 error code from your OData call, check the issue below.

#### Database is not running 

The Database exposed using OData might not be running as expected. Check the database connection.

### HTTP 503 Error While Running OData Function 

If you receive a 503 error code from your OData call, check the issue below.

#### OData application is down

The OData application which is exposing the service is not running as expected. Check the application status.

### HTTP 404 Error While Running OData Function 

If you receive a 404 error code from your OData call, it could be for one of the following reasons.

#### Destination service is not running

Destination services are defined in SAP Cloud Portal. Check that the destination service is running correctly.

#### Invalid Query

Check the base URL (while using Request Params) and parameters inside the Query text in any OData function Java action.

### Other Issues

The following techniques can help in identifying issues which are causing your OData connector to fail.

#### Setting Application Log level

You can get more information from your app by setting the log level. For this you will need to have the Marketplace module [SAP Logging Connector](https://marketplace.mendix.com/link/component/110219/) set up in your app. For more information see the [SAP Logging Connector](/appstore/modules/sap/sap-logger/) documentation.

To set log level for an application deployed to SAP BTP, go to ‘Model Options’ in the environment and set ‘SapApplicationLogs.SapLogLevel’ to the required level. (Debug, Info, Error, Warn, or Trace).

#### Remote Debugging

To perform Java debugging, you must do the following:

1. Set the following environment properties.

    ```yaml
    DEVELOPMENT_MODE= true
    JAVA_OPTS : ["-agentlib:jdwp=transport=dt_socket,address=8000,server=y,suspend=n"]
    ```

    This can be done through directly in SAP BTP or manifest.yml.

    1. In SAP BTP, the options can be set as shown below:

        {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/sap-btp-options.png" class="no-border" >}}

    2. In the manifest file, you need to set the options as shown below:

        {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/manifest-options.png" class="no-border" >}}

2. Restart the application to apply the changes.

    The logs will indicate whether the application is started in debug mode, as shown below:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/debug-mode-indication.png" class="no-border" >}}

3. Enable SSH for the application using the Cloud Foundry command

    `cf enable-ssh \<application-name\>`

4. Restart the app using the following command to activate the enabled ssh statement. 

    `cf restart \<application-name\>`

    This needs to be done before you can go over to the actual port forwarding.

5. Open an SSH tunnel for remote connection using the following command.

    `cf ssh \<application-name\> -N -T -L 8000:localhost:8000`

6. Set up remote Debugging in the Eclipse IDE as shown in the image below:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/debug-in-ide.png" alt="Debug configuration screen in Eclipse" class="no-border" >}}

## Technical Reference

To help you work with the OData Connector for SAP solutions, the following sections of this document list the available [activities](#activities), [parameters](#parameters), and [domain models](#domain-models) that you can use in your application.

### Activities {#activities}

The OData Connector for SAP solutions module gives you access to additional actions which you can assign to your Microflow Activities. These give you access to the OData services.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/actions-sapodataconnector.png" class="no-border" >}}

This section describes all the actions of the OData Connector for SAP solutions. They are categorized as being either for [entity and attribute manipulation](#EntityManipulation) or [helper actions](#HelperActions).

{{% alert color="info" %}}
Version 5.3.0 of the OData Connector for SAP solutions adds support for services using OData v4. Currently, only **Get List** and **Get Entry** are supported for services using OData v4.
{{% /alert %}}

Some inputs are necessary for the connector to work and these are marked **(required)**. Other inputs are not required, but in some cases this must be made explicit by setting them to *empty*.

A more detailed description of the parameters is in the [Parameters](#parameters) section.

#### Entity and Attribute Manipulation{#EntityManipulation}

##### Get List

The Get List action gets a list of objects described by a type of entity in the domain model from the SAP OData service. This action uses filters (SQL queries) to control which objects are returned. The entity collection is described by an entity in the SAP service domain model which you have imported into your app.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/get-list-params.png" class="no-border" >}}

* Input
    * Response type (required) - the type of entity which represents the objects which are returned
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Query (required) - the query which will return a list of objects from the OData service. See the section [Query](#Query), below, for more information
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
    * Parent - If the Get List action returns a list of objects which all have a single parent object (an object which is linked as one parent to many objects of Response type) then you can pass the parent object here and Get List will make the associations. Set this to *empty* if it is not required
    * Result info - This is an object of type ResultInfo where the number of items in the list is returned. Note that the query should include $inlinecount=allpages in order to return the total number of items in the list. Set this to *empty* if it is not required
* Output
    * Return type - List
    * Variable - the name which you would like to give to the list of objects which was returned from the query

For example, to return a list of products in the category *Notebooks*, using the **GWSAMPLE_BASIC** service, you could enter the following **Query**:

```javascript
@GWSAMPLE_BASIC.GWSAMPLE_BASIC + '/' + toString(GWSAMPLE_BASIC.EntitySetNames.ProductSet) + '?' + '$filter=Category%20eq%20''Notebooks''' + '&' + '$inlinecount=allpages'
```

The **Response Type** would be GWSAMPLE_BASIC.Product. You will need to pass authentication using **Request Parameters** and the **Add basic authentication** action described in [Helper Actions](#HelperActions), below.

##### Get Entry

The Get Entry operation gets a single existing entity instance from the OData service.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/get-entry-params.png" class="no-border" >}}

* Input
    * Response type (required) - the type of entity which represents the object which is returned
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*  
    * Url (required) - The URL of the object to be retrieved
    * Request Parameters - This is used to override the default behavior of the action in responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Object: an object which has the same type as the entity type which was passed as Response type
    * Variable - the name which you would like to give to the object which is returned by the OData service

For example, this connector can get details of a product using the **GWSAMPLE_BASIC** service. This can often be done by passing the meta_objectURI attribute of an object, in this case a Product, which you have already retrieved.

For a product with the reference **HT-1000**, the URL would be set to:

```javascript
@GWSAMPLE_BASIC.GWSAMPLE_BASIC + '/' + toString(GWSAMPLE_BASIC.EntitySetNames.ProductSet) + '(''HT-1000'')'
```

This produces the GET request `https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ProductSet('HT-1000')` and, if the product exists, returns it.  You will need to pass authentication using **Request Parameters** and the **Add basic authentication** action described in [Helper Actions](#HelperActions), below.

##### Create

The Create operation creates a new object in the SAP back-end system using the OData service. The object is described by an entity in the SAP service domain model.

{{% alert color="info" %}}
This Create is not the same as the Mendix **Create object** action. The OData Connector for SAP solutions Create will commit the object to the SAP back-end system and it cannot be rolled back. If you decide later that you do not want this object you must delete it using its key.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/create-params.png" class="no-border" >}}

* Input

    * Odata object (required) - an object which is a specialization of the OdataObject entity and corresponds to the OData Entity which is being created
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Query (required) - A URL which points to the Collection to which the object belongs. The Collection also identifies as an Entity Set in the OData service.
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable holding the value indicating the success or failure of the create action

**Deep Create**

The Create operation can also perform a *Deep Create*. This means that if you create a new object which has 'child' objects associated with it, then these will be created in the SAP back-end system at the same time. 'Child' objects are those that are associated with the object via a one-to-many or one-to-one association.

In the image below, creating a **Parent** object via the OData Connector for SAP solutions will also create any **Child**, **Grandchild**, or **ParentData** objects which have been associated with it. (Creating a Child object will only create Grandchild objects and will NOT create the Parent, even if one is associated).

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/deep-create-parent-child.png" class="no-border" >}}

For example, this connector can be used to create a product using the **GWSAMPLE_BASIC** service. In this case the **Query** is

```javascript
@GWSAMPLE_BASIC.GWSAMPLE_BASIC + '/' + toString(GWSAMPLE_BASIC.EntitySetNames.ProductSet)
```

`@GWSAMPLE_BASIC.GWSAMPLE_BASIC` is the constant in the SAP Service Data Model which identifies the Service Root for this OData service.

`GWSAMPLE_BASIC.EntitySetNames.ProductSet` is the name of the Product collection listed in the EntitySetNames enumeration of the SAP Service Data Model.

The **Odata object** is an object of entity type **Product**. This can be created, by using, for example, the **Create object** action.

You will need to pass authentication using **Request Parameters** and the **Add basic authentication** action described in [Helper Actions](#HelperActions), below.

##### Delete

The Delete operation deletes an existing entity instance in the SAP back-end system using the OData service.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/delete-params.png" class="no-border" >}}

* Input
    * Odata object (required) - The Mendix representation of the object which you wish to delete
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable holding the value indicating the success or failure of the delete action

For example, this connector can delete a product using the **GWSAMPLE_BASIC** service.

##### Execute entry

The Open Data Protocol (OData) includes standard CRUD (Create, Retrieve, Update, and Delete) operations that map to the HTTP methods POST, GET, PUT/MERGE, and DELETE. These are supported in the OData Connector for SAP solutions as individual activity actions. In addition, SAP allows you to use additional custom operations (service operations) which cannot be mapped to the standard CRUD operations. These service operations are exposed through the OData service and are invoked by the HTTP methods GET or POST.

The service operations which are supported by the OData service are listed in the enumeration **FunctionNames** which is imported as part of the SAP service domain model.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/functionnames-sapodataconnector.png" class="no-border" >}}

The Execute entry action allows you to invoke these service operations on the SAP back-end system. It returns an object from the OData service.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/execute-entry-params.png" class="no-border" >}}

* Input
    * Response type (required) - the type of entity which represents the object which is returned
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Url (required) - the URL of the service operation. This is generally */[function name]* and is preceded by the SERVICEROOT if an SAP Destination Service is not being used
    * Http method (required) - GET or POST: the method used to invoke the service operation. GET is usually used to retrieve data and POST is usually used to create data
    * Function parameters (required): Additional parameters which the service operation needs in order to retrieve, update, or create the correct data. The name of the relevant Function Parameters entity, imported into your app as part of the SAP service data model, will be [function name]Parameters. The attributes of this entity will indicate the parameters which are required by the service operation
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Object: an object which has the same type as the entity type which was passed as Response type
    * Variable - the name which you would like to give to the object which is returned by the OData service operation

##### Execute list

This performs the same action as the Execute entry action, but this is used where the expected result from the service operation is a list, rather than a single item.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/execute-list-params.png" class="no-border" >}}

* Input
    * Response type (required) - the type of entity which represents the objects in the list which is returned
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Url (required) - the URL of the service operation. This is generally */[function name]* and is preceded by the SERVICEROOT if an SAP Destination Service is not being used
    * Http method (required) - GET or POST: the method used to invoke the service operation. GET is usually used to retrieve data and POST is usually used to create data
    * Function parameters (required): Additional parameters which the service operation needs in order to retrieve or create the correct data. The name of the relevant function parameters entity, imported into your app as part of the SAP service domain model, will be [function name]Parameters. The attributes of this entity will indicate the parameters which are required by the service operation
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - List
    * Variable - the name which you would like to give to the list of objects which is returned by the OData service operation

##### Refresh

This action refreshes local data which is cached in objects within the Mendix domain model and may have become 'dirty' or in some other way is not the same as the data held in the SAP back-end system.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/refresh-params.png" class="no-border" >}}

* Input
    * Odata object (required) - The Mendix representation of the object containing the 'dirty' data which you wish to refresh by retrieving it from SAP using the OData service
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Request Parameters - This is used to override the default behavior of the action when responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable which indicates the success or failure of the refresh action.

##### Update {#update-put}

The Update operation uses the HTTP PUT method to change the attributes of an existing entity instance in the SAP back-end system using the OData service. If your use case requires that you use the HTTP PATCH method instead, see [Update_PATCH](#update-patch).

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/update-params.png" class="no-border" >}}

* Input
    * Odata object (required) - The Mendix representation of the object containing the updated data which you wish to update.
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Request Parameters - This is used to override the default behavior of the action in responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable indicating the success or failure of the update action

For example, this connector can update details of a product using the **GWSAMPLE_BASIC** service.

##### Update_PATCH {#update-patch}

The Update_PATCH operation uses the HTTP PATCH method to change the attributes of an existing entity instance in the SAP back-end system using the OData service. If your use case requires that you use the HTTP PUT method instead, see [Update](#update-put).

* Input
    * Odata object (required) - The Mendix representation of the object containing the updated data which you wish to update.
    * Destination – a string containing the name of the destination. This matches the name of the destination as set up in the SAP BTP cockpit. If you are not using an SAP Destination Service, set it to *empty*
    * Request Parameters - This is used to override the default behavior of the action in responding to conditions such as timeouts and HTTP responses. To keep the standard behavior, set it to *empty*
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable indicating the success or failure of the update action

#### Helper Actions {#HelperActions}

##### Create request params

This creates a RequestParams object which can be used to control the behavior of other SAP actions such as Get entry. It is also needed before you can create HTTP headers using **Add header** or **Add basic authentication**.

* Input - There are no inputs required for this connector
* Output
    * Return type - SAPODataConnector.RequestParams
    * Variable - the name which you would like to give to the RequestParams object which is returned by this action

##### Add header

One or more headers can be provided to the OData Connector for SAP solutions actions by adding them to RequestParameters. HTTP headers may be required to control the behavior of service operations that you invoke with Execute entry or Execute list.

When you need to pass additional HTTP headers in an OData Connector for SAP solutions action, **you do not pass the headers directly as a single parameter**. The headers are associated with a RequestParams object and it is this object which is used as a parameter to the action. This enables a variable number of headers to be passed easily to an action.

* Input
    * Request Parameters (required) - The request parameters are passed as an object of entity type RequestParams. This can be created by using the **Create request params** action
    * Name (required) - the name of the HTTP header field
    * Value (required) - the value of the HTTP header field
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable indicating the success or failure of the add header action

For example, a service operation may require your email address (`me@here.com`) to be passed in the "From" HTTP header. In this case you would create a RequestParams object and use Add header to add a header with Name='From' and Value='me@here.com'.

This header is automatically associated with the RequestParams object.

##### Add basic authentication

This action is a specialized version of the Add header action. It allows an authentication request to be made without having to manually encode the parameters as Base64. This header will have a name of 'Authorization' and a value which is the encoding of the Username and Password passed to the action.

* Input
    * Request Parameters (required) - The request parameters are passed as an object of entity type RequestParams. This can be created by using the **Create request params** action
    * Username (required) - The user to be authenticated
    * Password (required) - The password for the user to be authenticated
* Output
    * Return type - Boolean
    * Variable - the name which you would like to give to the Boolean variable indicating the success or failure of the authentication action

##### Get Latest Http Response

This action returns the HTTP Response to the last OData action that was performed. It is mainly used within exception handling to manage any errors which are returned to the microflow.

* Input - This action does not take any input parameters
* Output
    * Return type - System.HttpResponse
    * Variable - the name which you would like to give to the HttpResponse object which is returned by this action

For example, you could catch an exception on **Get List** and display an error message to the user.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/errorhandling-sapodataconnector.png" class="no-border" >}}

##### Get cloud connector info

{{% alert color="info" %}}
This action is included for backward compatibility. The information about your cloud connector connection is available in the **Destination** entity after you have performed a **Get Destination** action. See [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) for more information.
{{% /alert %}}

This creates a **CloudConnectorInfo** object and fills the values for **ProxyHost**, **ProxyPort**, and **ProxyBearerToken** from the SAP environment, when the app is running on SAP BTP.

* Input - This action does not take any input parameters
* Output
    * Return type - SAPODataConnector.CloudConnectorInfo
    * Variable - the name which you would like to give to the CloudConnectorInfo object which is created and returned by this action

{{% alert color="warning" %}}
If your app is not running on SAP BTP, this action will throw an error.
{{% /alert %}}

### Parameters {#parameters}

Each [activity](#activities) requires a number of parameters which will be categorized as either **Input** or **Output**. Here is an example of the parameters which are required for the **Get List** action.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/actionparameters-sapodataconnector.png" class="no-border" >}}

This section describes in more detail each of the parameters which is used by one or more of the actions described in the [Activities](#activities) section, above.

Every action of the OData Connector for SAP solutions will ask for a set of parameters. For example, **Get List**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/actionparameters-sapodataconnector.png" class="no-border" >}}

The parameters can be entered using the drop-down, clicking the **Edit** or **Select…** buttons, or typing directly into a text field.

Within the edit box, you can type your parameter. As is standard in Mendix, certain characters (for example [@ $ .]) will trigger a pop-up window to help you select the right values. This can also be triggered using <kbd>Ctrl</kbd> + <kbd>Space</kbd>. Typing while this pop-up window is open will filter the list of possibilities. For example, you can type (the beginning of) *entitysetnames* and the pop-up window will allow you to select the collection of entity set names which you want.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/editbox-sapodataconnector.png" class="no-border" >}}

Press <kbd>Enter</kbd> to select the highlighted item.

#### Input Parameters

##### Odata object

This is an object which is based on an entity type which is a specialization of the OdataObject entity in the OData Connector for SAP solutions domain model. These entities are the ones created in the domain models which you can download from the Marketplace or import via the Model Creator for SAP Integrations. Objects which are not based on a specialization of the OdataObject entity cannot be used here.

##### Response type

When an object is returned from an OData service, your app needs to know to which entity type it should map the returned data. The Response type is passed so that the response from the SAP back-end system can be validated. The Select… button will present you with a list of possible entities. This should match the Collection that you used in the query or URL.

##### Destination

Destination is the name of the object of type SAPODataConnector.Destination where the details of a destination have been stored by a *Get Destination* action. An SAP Destination Service enables your Mendix app to use services defined in the SAP BTP cockpit without needing to know all the technical details of the endpoint. You can find more information about the SAP Destination Service in [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/).

{{% alert color="info" %}}
The SAP Destination Service will only provide the correct information when run on SAP BTP. To test your app on your local machine you will have to use a URL to connect directly to an OData service which is available to you.
{{% /alert %}}

##### Query{#Query}

This is the OData query which identifies what data should be returned. This query formats an SQL query such as `SELECT * FROM EntitySet WHERE (foo) ORDER BY (bar) …` into an OData GET request like `GET ~/EntitySet?$filter=foo&$orderby=bar…`. It is the responsibility of the developer to ensure that the query is constructed correctly.

The format of the Query is:

```javascript
@SERVICEROOT + '/' + toString(COLLECTIONNAME) + '?' + 'QUERYPARAMETERS'
```

The Query edit box will help you by offering suggestions as described above.

`@SERVICEROOT` is a constant which is created in the SAP Service Data Model and has a value which is the root URL of the OData service, for example: https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC.

{{% alert color="warning" %}}
If you are using a Destination configured by the SAP Destination Service, then the `@SERVICEROOT` should be empty. In other words, the query should begin with the `'/'` before the `COLLECTIONNAME`. 
{{% /alert %}}

`COLLECTIONNAME` can be found in the enumeration EntitySetNames which lists all the collections in the SAP Service Data Model, for example: the collection SalesOrderSet will be shown as `@SERVICEROOT.EntitySetNames.SalesOrderSet`

`QUERYPARAMETERS` are the parameters of the OData query which identify which objects should be returned. Please note:

* The OData service will define how entities and attributes can be used.  For example, the metadata for the service will include a Boolean indicating whether an attribute is **filterable** and/or **sortable**
* The `$expand=[association]` parameter will return associated (child) entity objects as part of a single query instead of having to retrieve them via a second query – `[association]` is the first part of the full association name; for example, `$expand=ToLineItems` added to a query on the **SalesOrderSet** collection will return a list of `SalesOrder` objects and all the `SalesOrderLineItem` objects associated with them via the association `ToLineItems_SalesOrder_SalesOrderLineItem`

For example, to return a list of products in the category *Notebooks*, using the **GWSAMPLE_BASIC** service, you could enter the following **Query**:

```javascript
@GWSAMPLE_BASIC.GWSAMPLE_BASIC + '/' + toString(GWSAMPLE_BASIC.EntitySetNames.ProductSet) + '?' + '$filter=Category%20eq%20''Notebooks''' + '&' + '$inlinecount=allpages'
```

{{% alert color="info" %}}
Note that the request has to be URL encoded so that, for example, spaces have to be encoded as %20. Mendix has the function urlEncode() which can do this for you.
{{% /alert %}}

This is the equivalent of the SQL SELECT statement:

```sql
SELECT * FROM SalesOrderSet WHERE Category='Notepads'
```

The `$inlinecount=allpages` clause asks OData to return a count of the number of objects returned in the list. This will be stored in SAPODataConnector.ResultInfo.totalCount.

You can find more information about OData queries in [OData Query Options](/refguide/supported-odata-operations/).

##### Url

This is the parameter used within an action when:

* A specific object on the OData service is referenced

* A service operation is used to return an object

When you are referencing an object, the format of the URL is:

```javascript
@SERVICEROOT + '/' + toString(COLLECTIONNAME) + '/' + OBJECTINSTANCE
```

`@SERVICEROOT` is a constant which is created in the SAP Service Data Model and has a value which is the root URL of the OData service, for example: https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC.

{{% alert color="warning" %}}
If you are using a *Destination* configured by the SAP Destination Service, then the `@SERVICEROOT` should be empty. In other words, the query should begin with the `'/'` before the `COLLECTIONNAME`. 
{{% /alert %}}

`COLLECTIONNAME` can be found in the enumeration EntitySetNames which lists all the collections in the SAP Service Data Model, for example: the collection SalesOrderSet will be shown as `@SERVICEROOT.EntitySetNames.SalesOrderSet`

`OBJECTINSTANCE` is generally available as an attribute of an entity object.

Alternatively, you can obtain the entire URL from attributes of an object. For example, the **meta_objectURI** attribute of an object is the full URL to the instance of the object which is held by the OData service.

##### Http method

This is the method used to obtain data from the OData service using a service operation, when standard CRUD methods cannot be used. This is either **GET** or **POST**.

##### Function parameters

These are the parameters which are required when a service operation (function) is invoked by Execute list or Execute entry to obtain data from the OData service when standard CRUD methods cannot be used. These parameters are defined by the OData service operation.

The SAP data model will contain entities, specializations of the FunctionParameters entity, which contain the attributes required for each of the functions exposed by the OData service. These entities will be called [function name]Parameters, where [function name] is the name of the exposed SAP OData service listed in the FunctionNames enumeration which is part of the SAP data model.

Before you pass the function parameters you will need to set the value of the **postParameterInline** attribute. Set it to:

* **true** - (default) the parameters will be sent as part of the HTTP GET or POST instruction
* **false** - the parameters will be sent in the HTTP body after the HTTP headers

For example: in the **GWSAMPLE_BASIC** service domain model there is a function called **SalesOrder_InvoiceCreated**. This has an associated entity, **SalesOrder_InvoiceCreatedParameters**, which is a specialization of the OData Connector for SAP solutions entity **FunctionParameters**. This function parameter entity indicates that you need to supply a **SalesOrderID**.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/functionsandfunctionparameters-sapodataconnector.png" class="no-border" >}}

To use this function you will need to create an object of entity type **SalesOrder_InvoiceCreatedParameters** with the correct values for **SalesOrderID** and **postParameterInline**, using the Create object action. You can then use these parameters when you invoke the function using Execute list.

##### Request parameters

These are parameters which are used within the OData Connector for SAP solutions action to override the default behavior of the action. This should be passed as an object of entity type RequestParams.

The parameters which can be changed are:

* Expected HTTP result - this is used to set the expected success code where this diverges from the specification. For example, the expected result from Create is 201 "created" but a service may have been configured to return 200 "OK"
* Connection Timeout - how long the action should wait before assuming that the connection has timed out (default 60 seconds)
* Read Timeout - how long the action should wait for a response to a request (default 120 seconds)
* Proxy - override the default proxy settings for this action

This is also the parameter which is passed when an OData Connector for SAP solutions action requires additional HTTP headers. For example, you may need to pass a username and password to the service. The Header objects are attached to the RequestParams object via the Header_RequestParams association.

For example, you may be initiating a service operation using the Execute entry action. This service operation requires an additional HTTP header. You also want to set the timeout for receiving the data to 10 seconds, and treat a 204 No Content as a success. You can do this by:

* Creating a RequestParams object using the **Create request params** action. This will return an object of type RequestParams
* Use **Change Object** on your new object to set the attribute readTimeout to 10 and attribute expectedHttpResult to 204
* Use **Add header** to add the required HTTP header. This can be done repeatedly to add as many HTTP headers as are needed by the service operation being invoked by Execute entry.
* Invoke the service operation with **Execute entry** using the required URL, HTTP method, Function parameters, and the Request parameters and associated HTTP headers which you created above.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/requestparams-sapodataconnector.png" class="no-border" >}}

Request parameters can also be set to `empty` if no headers are needed and the default action behavior is used.

##### Parent

This is an object which should be associated as the parent of a list of objects returned from the Get List action.

Within the Mendix domain model representing an OData service, there are associations set up between the entities. However, these associations are not set when you get data from an OData service. The associations which exist within the OData service are held as …Deferred attributes within the entity object. When a list of objects is returned, you can set up an association to a parent object within the Mendix domain model. A parent object is an object of an entity type which is at the one end of a one-to-many association to another entity type.

Set this to `empty` if it is not required.

For example, **SalesOrder** is the parent entity of **SalesOrderLineItem** via the **ToHeader_SalesOrderLineItem_SalesOrder** association in the **GWSAMPLE_BASIC** domain model.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/tolineitems-sapodataconnector.png" class="no-border" >}}

{{% alert color="info" %}}
If you are using the Destination Service to identify the endpoint of your SAP OData Service, you will need to edit the values of the **…Deferred** attributes as they will already contain an endpoint in addition to the object references.
{{% /alert %}}

{{% alert color="warning" %}}
There is no data content validation on the Parent parameter. This means you will not get an error if you:

* Link all the objects in a returned list to the wrong parent (if, for example, your query does not select on the correct parent object)
* Pass a parent object which has no association with the entity type of the returned list of objects
{{% /alert %}}

For example, you want to retrieve all the **SalesOrderLineItems** which are associated with a **SalesOrder** via the **ToLineItems_SalesOrder_SalesOrderLineItem** association. By passing the **ToLineItemsDeferred** URL to the Get List action as the URL and passing the **SalesOrder** entity as Parent, the Get List action will set the **ToLineItems_SalesOrder_SalesOrderLineItem** association between all the **SalesOrderLineItem** objects retrieved and the **SalesOrder**.

##### Result info

This is an object of type ResultInfo where the number of items in the list is returned. It is used for the Get List action. Note that for a Get List the query should include `$inlinecount=allpages` in order to return the total number of items in the list.

Set this to *empty* if it is not required.

##### Username

This is a username used for creating an authorization HTTP header field.

##### Password

This is the password associated with a username and is used for creating an authorization HTTP header field.

##### Name

This is the name of an HTTP header field which is a component of the HTTP header which is part of an HTTP message. It is used to provide an operating parameter for an HTTP transaction.

##### Value

This is the value of an HTTP header field which is a component of the HTTP header which is part of an HTTP message. It is used to provide an operating parameter for an HTTP transaction.

#### Output Parameters

##### Return type

This is the type of data which will be returned from the action. There are three types of data:

* Boolean - indicating the success or failure of the action
* object - an object of an entity type which is either in the SAP service domain model, or in the OData Connector for SAP solutions domain model
* list - a list of objects of the same type, defined by an entity type in the SAP service domain model

##### Variable

This is the name that you give the result of your Activity. This can be used later in the Microflow to drive logic or to return data. Mendix will suggest a name for you, but you can change it if you want to.

### Domain Models {#domain-models}

This documentation describes two different domain models.

1. The SAP Service Domain Model – this is a Mendix domain model which represents the data model of the SAP OData service. This is the one which holds the data you are working with and is described first.

2. The OData Connector for SAP solutions Domain Model – this contains entities which are used by the OData Connector for SAP solutions itself: for example, to construct the request which needs to be sent to the OData service. A description of this domain model is included for completeness in the section [OData Connector for SAP Solutions Domain Model](#ConnectorDM)

For more information on domain models, see [Domain Model](/refguide/domain-model/).

#### SAP Service Domain Model

Most of the actions of the OData Connector for SAP solutions make use of a domain model representing the SAP service data model. These models contain non-persistable Mendix entities which represent entities in the OData service which is exposed by an SAP back-end system. The entities contain attributes which correspond to the entity properties plus additional attributes which support the OData Connector for SAP solutions.

You can create a data model by inspecting the service metadata. The response from the service can be used in the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/) to generate a domain model which can be imported into your app. Instructions for doing this are in [Model Creator for SAP Integrations](/appstore/services/use-sap-model-creator/).

{{% alert color="info" %}}
In addition to the domain model, the Model Creator will also create three other items:

* A constant with the name of the service which has the value of the Service Root URL for the SAP OData service you are using
* An enumeration (**EntitySetNames**) containing a list of all the entities in the entity model and the OData entity sets that correspond to them
* An enumeration (**FunctionNames**) containing a list of all the functions which are exposed by the OData service
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/serviceroot.png" class="no-border" >}}

The examples used in this guide are based on the **GWSAMPLE_BASIC** OData service exposed by the back-end system of sapes5.sapdevcenter.com.

{{% alert color="info" %}}
You will need to have an SAP account with access to the [SAP NetWeaver (ES5)](https://sapes5.sapdevcenter.com/) system to be able to use this service.
{{% /alert %}}

This data model for the GWSAMPLE_BASIC service can be obtained from the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/). To create the data model, you do one of the following:

* You can create it manually using the OData metadata XML for GWSAMPLE_BASIC, which can be found at [https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC/$metadata](https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC/$metadata)
* You can find it in the **SAP Catalog Service** of the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/)
    * Sign in to the server *sapes5.sapdevcenter.com* using your SAP ES5 credentials
    * Search for the GWSAMPLE_BASIC API
    * Use the GWSAMPLE_BASIC Schema

In both cases, save the file you download from the **Model Creator for SAP Integrations** and then, using the instructions in [How to Use Model Creator for SAP Integrations](/appstore/services/use-sap-model-creator/), import it into your app. Make sure that you review the value of the constant containing the URL of the SAP service you are using after you have imported the data model into your app.

Part of the data model for this sample data is:

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/domainmodelgwsample_basic-sapodataconnector.png" class="no-border" >}}

This domain model generally works in the same way as a Mendix domain model, with entities, attributes, and associations. However, there are two additions to support the OData Connector for SAP solutions:

* Every object is based on an entity which is a specialization of the ComplexType, FunctionParameters, or OdataObject entity. The OdataObject entity adds a **meta_objectURI** string, which is the URI of the object and can be used in entity manipulation actions, and a **meta_etag** string that identifies a state of the object. This is used by the OData service when you try to change data to check if it has been changed since it was retrieved by your app.
* Many objects have attributes which end in …Deferred. These contain URIs which will return a list of objects of an entity type which is associated with the current object. For example: in the domain model above, the **Product** entity contains an attribute **ToSupplierDeferred**. This will contain a URI which can be used to return the **BusinessPartner** associated with the current **Product** object via the **ToSupplier_Product_BusinessPartner** association.

#### OData Connector for SAP Solutions Domain Model {#ConnectorDM}

In addition to the SAP Service Domain Model, there is a domain model which is used internally by the OData Connector for SAP solutions to control the connection between your Mendix app and the SAP back-end. The domain model consists of entities and their relationships represented by associations.

Here is the domain model of the OData Connector for SAP solutions:

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-odata-connector/domainmodel-sapodataconnector.png" class="no-border" >}}

This domain model is part of the OData Connector for SAP solutions module and can be found in **App** > **Marketplace modules** > **SAPODataConnector**. Each [entity](/refguide/entities/) contains one or more [attributes](/refguide/attributes/):

* **ODataObject** – represents the generic OData object; all entities which can be manipulated directly in the SAP OData service domain model are specializations of this
    * **meta objectURI** – the address given by the OData service to the OData object
    * **meta_etag** – the entity tag (ETag) for the object; this is used for optimistic concurrency control to check that an object has not been changed in the SAP back-end system by another user
* **ResultInfo** – holds information about the result of a query
    * **totalCount** – when a query is executed with `$inlinecount=allpages` the result returns the total record count for the given criteria; if a ResultInfo entity object is specified, this value will be stored in the totalCount attribute and can be used for paging
* **ComplexType** – represents the generic OData service domain model entities which are of type Complex
* **FunctionParameters** – represents a wrapper for the parameter entities that need to be passed to OData functions
    * **postParameterInline** – a Boolean which indicates whether the parameters should be posted inline or passed as the body of the POST request; the default value is **true**
* **RequestParams** – passes conditions to the OData Connector for SAP solutions actions which change the behavior of the action; pass *empty* if you want to use the default behavior
    * **expectedHttpResult** – the expected HTTP result code; normally, an HTTP result code which is not expected will cause an exception; if a different code (between 200 and 400) is passed in this attribute, the action will treat this code as success; setting the expected HTTP response is useful in cases where OData services return codes that differ from the expected ones (for example, 204 "No Content" when no data is available instead of 200 "OK" with an empty result)
    * **connectTimeout** – limit, in seconds, before creating a connection times out (default 60 seconds)
    * **readTimeOut** – limit, in seconds, before reading from the connection times out (default 120 seconds)
    * **Proxy** – used internally
    * **manualProxy** – used internally
* **Header** – add a custom HTTP header that provides more information in an HTTP request
    * **Name** – the name of the header
    * **Value** – the value of the header
* **CloudConnector Info** – information which can be read from SAP BTP to obtain proxy details used to access the SAP Cloud Connector
    * **ProxyHost** – the address of the proxy which gives access through the SAP Cloud Connector
    * **ProxyPort** – the port which is to gain access through the SAP Cloud Connector
    * **ProxyBearerToken** – an authorization token which is needed when using the SAP Cloud Connector
* **Cookie** – the cookie is maintained internally and is valid for a Mendix session or in the microflow context of a startup microflow or scheduled event
* **CSRFToken** – the Cross-Site Request Forgery (CSRF) token is maintained internally and is used to prevent CSRF attacks; a CSRF token is obtained when a **Get** or **Get list** OData action is performed and is maintained for a Mendix session (or transaction context) which means that:
    * where an asynchronous or background microflow is executed (for example, using *executeMicroflowInBackground* from Community Commons) a new CSRF token must be obtained before any other actions are performed
    * where a startup microflow or scheduled event is run, the context also supports CSRF but, again, the token must be obtained before performing any other actions
* **Destination** – Information which defines the destination when using the *SAP Destination Service*. See [SAP Destination Service](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) for more information.<br />
    There are also some entities which are used to construct the *Destination* entity. Attribute values should always be taken from the Destination entity, rather than these entities:
    * DestinationConfiguration
    * ConnectivityInfo
    * JsonObject
    * AuthTokens
    * Root

## Read More

* [Attributes](/refguide/attributes/)
* [Data Types](/refguide/data-types/)
* [Domain Model](/refguide/domain-model/)
* [Entities](/refguide/entities/)
* [SAP Cloud Connector](/developerportal/deploy/sap-cloud-platform/sap-cloud-connector/)
* [SAP Help Portal](https://help.sap.com)
* [SAP Data Models](/appstore/services/use-sap-model-creator/)
* [OData Query Options](/refguide/supported-odata-operations/)
