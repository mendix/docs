---
title: "BAPI Connector for SAP Solutions"
url: /appstore/modules/sap/sap-bapi-connector/
weight: 18
description: "Presents reference information on the use of the BAPI Connector for SAP solutions."
aliases:
    - /partners/sap/sap-bapi-connector/
    - /appstore/connectors/sap/sap-bapi-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [BAPI Connector for SAP Solutions](https://marketplace.mendix.com/link/component/119810) is a connector allowing Mendix apps to integrate using the SAP Business API (SAP BAPI) available with SAP Business Suite, SAP S/4HANA, and SAP S/4HANA Cloud. The BAPI Connector module allows you to discover, select, and call an SAP BAPI from your Mendix application.

The BAPI Connector uses the [SAP Java Connector](https://support.sap.com/en/product/connectors/jco.html) (JCo) to make Remote Function Calls (RFCs) to SAP systems. Once you have made a connection to your JCo destination, you will have access to all the BAPIs which are authorized for that destination.

This connector allows you to do the following:

* Search BAPIs within your SAP back end system
* View BAPI details
* Generate a Mendix domain model of the BAPI
* Call BAPIs or BAPI sequences
* Use the BAPI response in your application

### Installation Paths

The BAPI Connector can connect to the SAP backend system with or without the SAP Cloud Connector. The prerequisites and some aspects of configuring the BAPI Connector are different depending on whether you use the SAP Cloud Connector. The following sections make a note of those differences where relevant.

{{% alert color="info" %}}
Using the SAP Cloud Connector minimizes the network complexity and helps make your application compliant with the recommended SAP security standards.
{{% /alert %}}

The following diagram shows the architecture of the SAP BAPI connector with the SAP Cloud Connector.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/diagram.png" alt="A diagram showing the architecture of the SAP BAPI connector" class="no-border" >}}

## Prerequisites

To use the BAPI Connector for SAP Solutions, you need the following:

* An SAP back-end system (for example, SAP Business Suite, SAP S/4HANA, or SAP S/4HANA Cloud) which has Remote Function Modules/BAPI enabled
* Mendix Studio Pro 8.18.10 or above
* At least 1 GB memory per instance if running on SAP BTP

Depending on whether you plan to use the SAP Cloud Connector, you also need the following prerequisites:

### Required Only When Using the SAP Cloud Connector

If you are using the SAP Cloud Connector to facilitate connection to the SAP backend system, you must install the *bapi-service* microservice component. The component minimizes the network complexity and helps make your application is compliant with the recommended SAP security standards.

You can download the *bapi-service* component from the [Mendix Content Delivery Network](https://cdn.mendix.com/mcdep/bapi-service/bapi-service-1.0.2.zip), and then use the extracted manifest file to deploy the *bapi-service.war* file to SAP BTP. To use the component, you must also define an RFC-type destination in SAP BTP.

### Required Only When Not Using the SAP Cloud Connector

If you are connecting to the SAP backend without using the SAP Cloud Connector, you must ensure access to the SAP System over the network from where the Mendix application is deployed.

## Developing Using the BAPI Connector for SAP Solutions

To use BAPI Connector for SAP Solutions in your Mendix application to call the BAPI of your choice, you need to perform the following steps:

1. Set up the developer environment as described in [Setting Up the Developer Environment](#setup-environment).
2. Test the connection to the SAP Backend [using the microflow `TestConnection`](#test-connection).
3. Add the microflow `Create_BAPIExplorer` to the navigation of your app to allow you to search for the BAPIs you need.

    {{% alert color="info" %}}Searching for BAPIs is provided as a microflow rather than a separate app so that you can set up the JCo destination securely. You should not give access to this microflow to any end-users of an app you build using the Mendix BAPI Connector.{{% /alert %}}

4. Search for the BAPIs you need, download the schemas, and [generate Mendix BAPI modules](#create-bapi-module) using the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/link/bapi).
5. Import the generated Mendix BAPI module *.mpk* to your Mendix application using the instructions in [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/). A module with the same name as the BAPI is added to the app.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-material-getall.png" alt="The BAPI_MATERIAL_GETALL module in the App Explorer" class="no-border" >}}

6. Create a microflow to call the BAPI, as shown in the example below.

    1. Add the action `GetJCoDestination`. This will retrieve the JCoDestination to communicate 
    with SAP system.

        {{% alert color="info" %}}Mendix recommends always using the `GetJcoDestination` action before using the BAPI. If the destination has already been registered it will not be registered again.{{% /alert %}}

    2. Add the action `CallBAPI` with the following parameters:
        
        * **Destination** - Enter `$JCoDestination`
        * **BAPI request object** - Enter `$Material`
        * **Response type** - Enter `BAPI_MATERIAL_GETALL.BAPI_MATERIALGETALL_Response`
        * **Commit transaction** - Select **false**
        * **Return type** - Enter `BAPI_MATERIAL_GETALL.BAPI_MATERIALGETALL_Response`
        * **Use return value** - Select **Yes**
        * **Object name** - Enter `materialResponse`
    
        This will call the BAPI and map the response to the entity given in the **Response type** parameter.

    3. Use the response in further actions. In the example below, the response is used to display details on a Mendix page called `MaterialDetails`.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/call-bapi-material-getall.png" alt="Microflow calling BAPI_MATERIAL_GETALL using CallBAPI action" class="no-border" >}}

    For more information about the microflow actions included in this connector, see the [Microflow Actions](#microflow-actions) section.

## Setting Up the Developer Environment {#setup-environment}

To use the BAPI Connector, you have to first set up your environment and configure the connection details by doing the following.

1. Get the [BAPI Connector for SAP solutions module](https://marketplace.mendix.com/link/component/119810).
2. Import the BAPI Connector for SAP Solutions module into a new or existing application in Mendix Studio Pro 8.18.0 or above. On successful import, the module is visible in your application as **SAPBAPIConnector**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/sap-bapi-connector-module.png" alt="The SAPBAPIConnector module in the App Explorer" class="no-border" >}}

3. Download the following files from [SAP Support](https://support.sap.com/en/product/connectors/jco.html):

    | Deployment environment type | Required files |
    | --- | --- |
    | **Microsoft Windows** | sapjco3.dll, sapjco3.jar |
    | **Linux/Unix** | libsapjco3.so, sapjco3.jar |

    You need the latest stable versions for your operating system. For more details on SAP JCo releases, please refer to official [SAP JCo release and support strategy](https://launchpad.support.sap.com/#/notes/2786882).

4. Put the downloaded files in the `/userlib` folder where your Mendix application is stored on your local machine (that is, `<app location>/userlib`). You can open this folder from within Studio Pro by clicking **App** > **Show App Directory in Explorer**.
5. Configure the connection details. The specific configuration steps are different depending on whether you are using the SAP Cloud Connector. For more information, see the following sections:
    * [Configuring the Connection Details for the SAP Cloud Connector](#sap-cloud-connector-details)
    * [Configuring the Connection Details for Direct Connections to the SAP Backend System](#sap-connection-details)

### Configuring the Connection Details for the SAP Cloud Connector {#sap-cloud-connector-details}

If you are using the SAP Cloud Connector to connect to your SAP backend system, configure the connection details by doing the following steps:

1. In the **App Explorer**, click **SAPBAPIConnector** > **USE_ME** > **Config**.
2. Edit the following values:

    * **BAPIServiceTimeout** - Specify a timeout value for the HTTP client to receive a response from the *bapi-service* deployed on SAP BTP. By default, this value is set to *20 seconds*.
    * **BAPIServiceURL** - Specify the URL of the *bapi-service* deployed on SAP BTP.
    * **UseRFCDestination** - Set to **true**.

### Configuring the Connection Details for Direct Connections to the SAP Backend System {#sap-connection-details}

If you are connecting to SAP without using the SAP Cloud Connector, you must set the connection details to tell the BAPI Connector how it can connect to your chosen BAPI destination. You can do this in two ways: by setting the *JCo* properties in the app, or by using an SNC connection.

#### Connecting Using App Constants

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/jcodestination-properties.png" alt="Properties to Set for JCoDestination" class="no-border" >}}

**DestinationName** – the user-defined name for the JCoDestination.

Please refer to [JCo Property Settings](https://help.sap.com/viewer/a33d7bdbf6b84a708a1ad4e65eb65ad2/7.04%20SP10/en-US/3eb536d067f145378fbc34bb24f2e594.html) the SAP Help Portal for information on how to fill these in.

The following JCo Properties map directly to these constants in the module:

| Constant Name | JCO Property  |
| ------------- | ------------- |
| Language   | jco.client.lang   |
| Client | jco.client.client |
| Username   | jco.client.user   |
| Password   | jco.client.passwd |
| Host   | jco.client.ashost |
| SystemNumber  | jco.client.sysnr  |
| RouterAddress | jco.client.saprouter |

##### Additional JCoProperties{#jco-properties}

If you need to set additional JCoProperties for which a constant is not available, you can create a list of objects of the `Property` entity (see the domain model section, below) and use the [GetJCoDestination](#get-jco-destination) action. You need to set the following attributes in the `Property` object:

* Name – the JCoProperty key — for example to set maximum pool size, Name would be `jco.pool.maxpoolsize`
* Value – the value to be assigned to this property

#### Connecting Using an SNC Connection

Alternatively, you can configure **GetJCoDestination** to use an SNC connection by setting up the properties listed below (using the method described in [Additional JCoProperties](#jco-properties), above), and then passing the list of properties using the [GetJCoDestination](#get-jco-destination) action.

The values for the properties can be found in the **Connection Properties** of the SAP server you want to connect to. You can see these in the SAP GUI. The options from the **Expert Settings** can be found in the **Advanced** tab as a string which will resemble a list of HTTP parameters: `conn=/R/DA1/G/PUBLIC&sncname=p:CN=xxxx.xxxxxxx.com,C=US,0=xxxxxxx,OU=xxxxxxx&sncon=true&sncqop=9&cpg=9999&dcpg=9999&clnt=999&lang=EN&systemName=DA1`.

| Property | Value | Source |
| --- | --- | --- |
| jco.client.snc_mode | `1` – enable SNC<br />`2` – disable SNC |  |
| jco.client.snc_partnername | sncname | Expert Settings |
| jco.client.snc_qop | sncqop | Expert Settings |
| jco.client.snc_myname | Server Name | Distinguished Name(DN) of client PSE |
| jco.client.snc_lib | The path and file name for the SAP Cryptography library | Usually `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\` |
| jco.client.mshost | Message Server | System Tab |
| jco.client.r3name | System | System Tab  |

## Configuring XSUAA Security When Using the SAP Cloud Connector

If you are using the SAP Cloud Connector to connect to your SAP backend system, you can secure access to the *bapi-service* microservice component by using the SAP XSUAA service. The service supports both user-based authentication with a user access token obtained from the SAP XSUAA service, and application-based authentication with an access token obtained from the SAP XSUAA service bindings.

{{% alert color="info" %}}
To help you implement the XSUAA service for your app, Mendix provides the platform-supported XSUAA Connector for SAP BTP. After installing the connector, you can use the [XSUAA Configurator](/appstore/modules/sap/sap-xsuaa-connector/#configurator) to create the required XSUAA service configuration.
{{% /alert %}}

### Trust Configuration

For the XSUAA authentication to work between the *bapi-service* component and your Mendix app, you must configure separate XSUAA service instances for both applications. The *bapi-service* component and your Mendix app must both be deployed in the same sub-account in SAP BTP.

The following sections show how you can configure the required settings in the *xs-security.json* file of the XSUAA service.

#### Application-to-Application Authentication

To configure application-to-application authentication, include the following line in the *xs-security.json* file of the XSUAA service instance bound with *bapi-service*:

```text
grant-as-authority-to-apps" : [ "$XSAPPNAME(application,{your-Mendix-app-deployed-on-SAP-BTP})"]
``` 

Also, include the following line in the *xs-security.json* file of the XSUAA service instance bound with your Mendix app deployed on SAP BTP:

```text
"authorities":["$XSAPPNAME(application,{bapi-service-component-deployed-on-SAP-BTP}).bapiAuth"]
``` 

{{% alert color="info" %}}
In this example, *bapiAuth* is the scope for the provider app defined on in the *xs-security.json* file for *bapi-service*. You can replace it with the name of your choice.
{{% /alert %}}

#### User Authentication 

To configure user authentication, include the following line in the *xs-security.json* file of the XSUAA service instance bound with *bapi-service*:

```text
granted-apps" : [ "$XSAPPNAME(application,your-Mendix-app-deployed-on-SAP-BTP)"]
``` 

The following sample shows a configuration of the *xs-security.json* file for *bapi-service*.

{{% alert color="info" %}}
In this example, *BAPI-Consumer-dev* is the name of your Mendix application. It must be same as the *xsappname* value in the *xs-security.json* file of your Mendix application.
{{% /alert %}}

```text
{
  "xsappname" : "bapi-service",
  "tenant-mode" : "shared",
  "scopes": [{
      "name": "$XSAPPNAME.bapiAuth",
      "granted-apps" : [ "$XSAPPNAME(application,BAPI-Consumer-dev)"],
      "grant-as-authority-to-apps" : [ "$XSAPPNAME(application, BAPI-Consumer-dev)"]
  }],
  "role-templates": [ {
      "name"                : "<role template name>",//this is role template name defined in SAP BTP
      "default-role-name"   : "<role name>", //this is role name defined in SAP BTP
      "scope-references"    : ["$XSAPPNAME.bapiAuth"]
  }]
}
```  

Also, include the following line in the *xs-security.json* file of the XSUAA service instance bound with your Mendix app deployed on SAP BTP:

```text
"foreign-scope-references": ["$XSAPPNAME(application,bapi-service).bapiAuth"]
```   

The following sample shows a configuration of the *xs-security.json* file for your Mendix app deployed on SAP BTP:

```text
{
   "xsappname":"BAPI-Consumer-dev",
    "tenant-mode" : "shared",
    "authorities":["$XSAPPNAME(application,bapi-service).bapiAuth"],
    "foreign-scope-references": ["$XSAPPNAME(application,bapi-service).bapiAuth"],
    "scopes":[
       //scopes list
    ],
    "role-templates":[
       //role template list
    ],
    "xsenableasyncservice":"true",
    "oauth2-configuration":{
       "autoapprove":"true"
    }
}
```  

{{% alert color="info" %}}
In this example, *bapiAuth* is the scope for the provider app defined on in the *xs-security.json* file for *bapi-service*. You can replace it with the name of your choice.
{{% /alert %}}

## Domain Models

This section describes two different domain models. The domain model in the `SAPBAPIConnector` module is used to control how your app communicates with an SAP BAPI. The domain model in a Mendix BAPI module describes a specific SAP BAPI which you want to use in your app.

### SAP BAPI Connector Domain Model{#bapi-connector-domain-model}

This is part of the `SAPBAPIConnector` module and contains the entities which are used by the BAPI Connector to create objects required for calling a BAPI

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-connector-domain-model.png" alt="Domain Model of BAPI Connector" class="no-border" >}}

* **BAPIRequest** – This is a generic entity which represents a BAPI request. Any entity that represents a specific BAPI request is a specialization of the `BAPIRequest` entity. Objects of this entity contain the request attributes required for a BAPI Call. Request attributes represent Import and Table parameters.
* **BAPIResponse** – This is a generic entity which represents a BAPI response. Any entity that represents a specific BAPI response is a specialization of the `BAPIResponse` entity. Objects of this entity contain the response from a BAPI Call. Response attributes contain Export and Table parameters.
* **BAPIComplexType** – Any entity in a Mendix BAPI module which is associated with the `BAPIRequest` and `BAPIResponse` entity and part of BAPI Import or Export parameters is a specialization of this entity.
* **BAPITable** – Any entity in a Mendix BAPI module which is associated with the `BAPIRequest` and `BAPIResponse` entity and is a BAPI Table parameter is a specialization of this entity.
* **BAPIMetadata** – This holds all the attributes which represent the metadata of an SAP BAPI. It is used to generate a metadata.json file which is used in the Model Creator for SAP Integrations to create a domain model for a Mendix BAPI module.
* **Destination** – This entity holds the JCo Destination name and properties.

### Mendix BAPI Module Domain Model

This is the domain model which represents a specific BAPI. You can have one or more of these modules in your Mendix application, each defining a single BAPI.
The microflow actions of the BAPI Connector for SAP solutions make use of the domain model representing an SAP BAPI. The entities in the domain model have attributes which define import, export, and table parameters of an SAP BAPI.

You can create Mendix BAPI modules for the SAP BAPIs you want to use with the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/link/bapi) (see [Create a Mendix BAPI Module Using the Model Creator](#create-bapi-module), below).

A Mendix BAPI module domain model contains entities which are specializations of the entities defined in section [SAP BAPI Connector Domain Model](#bapi-connector-domain-model), above to model the SAP BAPI you are using.

For example, consider the domain model for **BAPI_QUOTATION_CREATEFROMDATA2**, shown below:

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-quotation-createfromdata2-dm.png" alt="Domain model for BAPI_QUOTATION_CREATEFROMDATA2" class="no-border" >}}

The entities in this domain model are as follows:

* **BAPI_QUOTATION_CREATEFROMDATA2_Request** – A specialization of BAPIConnector.BAPIRequest. Objects of this entity will be used as the BAPIRequest for the CallBAPI action
* **BAPI_QUOTATION_CREATEFROMDATA2_Response** – A specialization of BAPIConnector.BAPIResponse. Objects of this entity will be returned from a CallBAPI action.
* **QUOTATION_HEADER_IN** – A specialization of BAPIComplexType. Objects of this entity contain attributes used as import parameters of BAPI.
* **QUOTATION_PARTNERS** and QUOTATION_ITEMS_IN – Specializations of BAPITable. Objects of this entity contain attributes corresponding to table parameters of BAPI_QUOTATION_CREATEFROMDATA2. As the Table parameters can be part of a BAPI request or response, entities of BAPITable have associations with both request and response entities. Here they are associated with BAPI_QUOTATION_CREATEFROMDATA2_Request and BAPI_QUOTATION_CREATEFROMDATA2_Response.

BAPI parameters which are reserved words in Mendix will be prefixed with `mxbapi_`. For example, mxbapi_RETURN in the above domain model.

## Microflow Actions {#microflow-actions}

The BAPI Connector provides the following microflow actions. These can be used as activities in your microflows to consume the BAPIs available in the SAP system for which you have imported Mendix BAPI modules.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/use-me-microflows.png" alt="Microflow actions in the App Explorer" class="no-border" >}}

The microflow actions are described in the following sections.

### GetJCoDestination {#get-jco-destination}

The action `GetJCoDestination`, is used to get the JCoDestination. Assign the values from the *JCO_Constants* described in [SAP System Connection Details](#sap-connection-details), above. The action returns a `Destination` object which is used when making calls to a BAPI.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/getjcodestination-properties.png" alt="The GetJCoDestination action" class="no-border" >}}

You can set additional properties which are not available as JCO Constants as a list of objects of the `Property` entity associated with this GetJCoDestination.

This example shows setting of below properties to GetJCoDestination action:

* jco.pool.maxconn
* jco.pool.maxpoolsize

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/configure-jcodestination-properties-mf.png" alt="Configuring Additional Properties – JCoDestination" class="no-border" >}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/getjcodestination-additional.properties.png" alt="Additional properties for the GetJCoDestination action" class="no-border" >}}

### Create_BAPIExplorer

This microflow opens the BAPI explorer page to allow you to find all the BAPIs available at your JCo destination.

For more information on how to use this microflow, see [BAPI Schema for Model Creator](#bapi-schema), below.

### CallBAPI

This microflow action is used to call a BAPI function.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/call-bapi-properties-2.png" alt="The CallBAPI action" class="no-border" >}}

| Parameters  | Description   |
| --- | --- |
| Destination  | `JCoDestination` object. |
| BAPI request object | Input object to call the BAPI with the desired import parameters. This object will be of an entity type defined in your BAPI module domain model. |
| Response type | Type of the `BAPIResponseObject` having export parameters set.<br>The entity type is defined in your BAPI module domain model. |
| Commit transaction  | Setting this `true` will call `BAPI_COMMIT_TRANSACTION` to commit changes. Not required for Get calls. |

### CallBAPISequence

Use this microflow action when you want to call more than one BAPI in a given order. This microflow action is only required when you want to call more than one BAPI in a single [JCoContext](https://javadoc.io/doc/com.sap.cloud/neo-java-web-api/2.35.9/com/sap/conn/jco/JCoContext.html). After the calls have been made, this executes an additional call to `BAPI_COMMIT_TRANSACTION` to commit all the changes made in this JCOContext.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/execute-bapi-sequence.png" alt="The CallBAPISequence action" class="no-border" >}}

| Parameters | Description |
| --- | --- |
| Destination | `JCoDestination` object.  |
| List of BAPI requests | A list of `BAPIRequest` objects.   |
| Output | A Boolean indicating the success or failure of the BAPI call sequence. If you use the return value, the result will be returned as `Variable name`. |

### GetBAPIResponse

This microflow action is used together with `CallBAPISequence`. It returns the response for one of the BAPIRequest objects which was in the list supplied to a `CallBAPISequence` action. You need to add this action to your microflow for every `BAPIRequest` object for which you need the response.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/get-bapi-response.png" alt="The GetBAPIResponse action" class="no-border" >}}

| Parameters | Description
| --- | --- |
| BAPI request | One `BAPIRequest` object specialization which was supplied to the `CallBAPISequence` action.   |
| Return entity type | The `BAPIResponse` specialization entity associated with the `BAPIRequest` entity given in request. <br>This entity will be defined in your BAPI module domain model. |
| Output | An object of the entity type mentioned in **Return entity type** |

### TestDestinationConnection {#test-connection}

This action can be found in the **Internal > microflows** folder of the `SAPBAPIConnector` module.

This action is used to verify whether your application is able to reach your SAP system using the configured `JCoDestination`. It is not intended for use in a production app, but can be used to ensure that you have correctly specified the JCo Destination when developing or troubleshooting.

This can be done by calling the internal microflow `TestConnection`, provided. On successful connection, a success dialog is displayed.

## BAPI Schema for Model Creator {#bapi-schema}

The BAPI Connector for SAP Solutions contains the microflow **Create_BAPIExplorer**.

You can use this to find all BAPIs from SAP systems that are available to you. You can then select the BAPI you need for your app and download the schema, which you can convert into a Mendix BAPI module for use in your app using the [Model Creator](#create-bapi-module). You can create several Mendix BAPI modules if you need to use multiple BAPIs in your app.

The **Create_BAPIExplorer** microflow displays BAPIs grouped by SAP Object Name in alphabetical order.

You can see all the BAPIs for an SAP object by clicking **Expand** ({{% icon name="add" %}}) next to the SAP object. You can also search for the BAPI you need in the search box.

{{% alert color="info" %}}
A BAPI has to have the status `Released` to be shown in the list. You will not see unreleased BAPIs.
{{% /alert %}}

When you find a BAPI, you can click **Information** ({{% icon name="info-circle" %}}) to see details including documentation, import, export, and table parameters.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-explorer-bapis.png" alt="BAPI Explorer" class="no-border" >}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-explorer-bapi-info.png" alt="BAPI Explorer – BAPI Info" class="no-border" >}}

Once you find the BAPI you need, select it and click **Next** to generate the BAPI schema file. Download the schema JSON, which you will use in the [Model Creator for SAP Integrations](#create-bapi-module) to create the Mendix BAPI module containing the domain model which supports this BAPI.

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-explorer-select-bapi.png" alt="BAPI Explorer – Select BAPI" class="no-border" >}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-bapi-connector/bapi-explorer-download-schema.png" alt="BAPI Explorer – Download schema" class="no-border" >}}

## Create a Mendix BAPI Module Using the Model Creator {#create-bapi-module}

See [Model Creator for SAP Integrations](/appstore/services/use-sap-model-creator/) for information on how to use the [Model Creator for SAP Integrations](https://sap-model-creator.home.mendix.com/) to generate a Mendix BAPI module containing the domain model for a BAPI using the schema file downloaded from BAPI explorer.

## Limitations

1. The BAPI Connector for SAP Solutions provides a short description of the SAP BAPI contained in your SAP Business Suite or S/4HANA system. For detailed documentation of an SAP BAPI, please refer to standard SAP BAPI documentation.
2. The entity description provided by the BAPI is not visible in the Model Creator for SAP Integrations.
3. The BAPI Connector for SAP Solutions is limited to discovering and using an SAP BAPI. It cannot be used for invoking Remote-enabled Function Modules (RFMs).

{{% alert color="info" %}}
Minimum 1 GB memory per instance is required to run application on SAP BTP.
{{% /alert %}}
