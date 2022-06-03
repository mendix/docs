---
title: "BAPI Connector for SAP Solutions"
url: /partners/sap/sap-bapi-connector/
category: "SAP"
weight: 18
description: "Presents reference information on the use of the BAPI Connector for SAP solutions."
tags: ["SAP", "integration", "OData", "BAPI"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [BAPI Connector for SAP Solutions](https://marketplace.mendix.com/link/component/119810) is a connector allowing Mendix apps to integrate using the SAP Business API (SAP BAPI) available with SAP Business Suite, SAP S/4HANA, and SAP S/4HANA Cloud. The BAPI Connector module allows you to discover, select, and call an SAP BAPI from your Mendix application.

The BAPI connector uses the [SAP Java Connector](https://support.sap.com/en/product/connectors/jco.html) (JCo) to make Remote Function Calls (RFCs) to SAP systems. Once you have made a connection to your JCo destination, you will have access to all the BAPIs which are authorized for that destination.

This connector allows you to do the following:

* Search BAPIs within your SAP back end(s)
* View BAPI details
* Generate a Mendix domain model of the BAPI
* Call BAPIs or BAPI sequences
* Use the BAPI response in your application

## 2 Prerequisites

To use the **BAPI Connector for SAP Solutions** you need the following:

1. An SAP back-end system (for example SAP Business Suite, SAP S/4HANA, or SAP S/4HANA Cloud) which has Remote Function Modules/BAPI enabled.
2. Access to the SAP System over the network from where the Mendix application is deployed.
3. Mendix Studio Pro version 8.18.10 or above.
4. At least 1GB memory per instance if running on SAP BTP.

## 3 Developing using the BAPI Connector for SAP Solutions

To use BAPI Connector for SAP Solutions in your Mendix application to call the BAPI of your choice, you need to perform the following steps:

1. Set up the developer environment as described in [Setting Up the Developer Environment](#setup-environment).
2. Test the connection to the SAP Backend [using the microflow `TestConnection`](#test-connection).
3. Add the microflow `Create_BAPIExplorer` to the navigation of your app to allow you to search for the BAPI(s) you need.

    {{% alert color="info" %}}Searching for BAPIs is provided as a microflow rather than a separate app so that you can set up the JCo destination securely. You should not give access to this microflow to any end-users of an app you build using the Mendix BAPI Connector.{{% /alert %}}

4. Search for the BAPI(s) you need, download the schema(s), and [generate Mendix BAPI module(s)](#create-bapi-module) using the [Model Creator for SAP Solutions](https://sapmodelcreator.mendixcloud.com/link/bapi).
5. Import the generated Mendix BAPI module .mpk to your Mendix application using the instructions in [Import & Export Objects](/howto/integration/importing-and-exporting-objects/). A module with the same name as the BAPI is added to the project.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-material-getall.png" >}}

6. Create a microflow to call the BAPI, as shown in the example below.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/call-bapi-material-getall.png" alt="Microflow calling BAPI_MATERIAL_GETALL using CallBAPI action" >}}

    In this microflow, you do the following:

    * Add the action `GetJCoDestination`. This will retrieve the JCoDestination to communicate with SAP system.
    * Add the action `CallBAPI` with the parameters shown below. This will call the BAPI and map the response to the entity given in the **Response type** parameter.

        {{< figure src="/attachments/partners/sap/sap-bapi-connector/call-bapi-properties.png" >}}

    * Use the response in further actions. In this microflow, display details on a Mendix page called ‘MaterialDetails’.

    {{% alert color="info" %}}We recommend that you always use the `GetJcoDestination` action before using the BAPI. If the destination has already been registered it will not be registered again.{{% /alert %}}

    More information on microflow actions can be found in the section [Microflow Actions](#microflow-actions).

## 4 Setting Up the Developer Environment {#setup-environment}

To use the BAPI Connector, you have to first set up your environment and configure the connection details by doing the following.

1. Get the [BAPI Connector for SAP solutions module](https://marketplace.mendix.com/link/component/119810).
2. Import the BAPI Connector for SAP solutions module into a new or existing application in Mendix Studio Pro version 8.18.0 or above. On successful import, this module will be visible in your application as **SAPBAPIConnector**

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/sap-bapi-connector-module.png" >}}

3. Download following files from [SAP Support](https://support.sap.com/en/product/connectors/jco.html):
    1. sapjco3.dll
    2. sapjco3.jar

    You need the latest stable versions for *Microsoft Windows and Windows Server*. For more details on SAP JCo releases, please refer to official [SAP JCo release and support strategy](https://launchpad.support.sap.com/#/notes/2786882).

    Put both of these files in the `/userlib` folder where your Mendix application is stored on your local machine (that is `<app location>/userlib`). You can open this from within Studio Pro using the menu item **App > Show App Directory in Explorer**.

4. Configure the connection details by going to JCO_Constants folder and set the SAP system connection details as described in the section below.

### 4.1 SAP System Connection Details

You need to set the following connection details to tell the BAPI Connector how it can connect to your chosen BAPI destination.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/jcodestination-properties.png" alt="Properties to Set for JCoDestination" >}}

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

If you need to set additional JCoProperties for which a constant is not available, you can create a list of objects of the `Property` entity (see the domain model section, below) and use the `GetJCoDestination` action. You need to set the following attributes in the `Property` object:

* Name – the JCoProperty key — for example to set maximum pool size, Name would be `jco.pool.maxpoolsize`
* Value – the value to be assigned to this property

## 5 Domain Models

This section describes two different domain models. The domain model in the `SAPBAPIConnector` module is used to control how your app communicates with an SAP BAPI. The domain model in a Mendix BAPI module describes a specific SAP BAPI which you want to use in your app.

### 5.1 SAP BAPI Connector Domain Model{#bapi-connector-domain-model}

This is part of the `SAPBAPIConnector` module and contains the entities which are used by the BAPI Connector to create objects required for calling a BAPI

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-connector-domain-model.png" alt="Domain Model of BAPI Connector" >}}

* **BAPIRequest** – This is a generic entity which represents a BAPI request. Any entity that represents a specific BAPI request is a specialization of the `BAPIRequest` entity. Objects of this entity contain the request attributes required for a BAPI Call. Request attributes represent Import and Table parameters.
* **BAPIResponse** – This is a generic entity which represents a BAPI response. Any entity that represents a specific BAPI response is a specialization of the `BAPIResponse` entity. Objects of this entity contain the response from a BAPI Call. Response attributes contain Export and Table parameters.
*  **BAPIComplexType** – Any entity in a Mendix BAPI module which is associated with the `BAPIRequest` and `BAPIResponse` entity and part of BAPI Import or Export parameters is a specialization of this entity.
* **BAPITable** – Any entity in a Mendix BAPI module which is associated with the `BAPIRequest` and `BAPIResponse` entity and is a BAPI Table parameter is a specialization of this entity.
* **BAPIMetadata** – This holds all the attributes which represent the metadata of an SAP BAPI. It is used to generate a metadata.json file which is used in the Model Creator for SAP Solutions to create a domain model for a Mendix BAPI module.
* **Destination** – This entity holds the JCo Destination name and properties.

### 5.2 Mendix BAPI Module Domain Model

This is the domain model which represents a specific BAPI. You can have one or more of these modules in your Mendix application, each defining a single BAPI.
The microflow actions of the BAPI Connector for SAP solutions make use of the domain model representing an SAP BAPI. The entities in the domain model have attributes which define import, export, and table parameters of an SAP BAPI.

You can create Mendix BAPI modules for the SAP BAPIs you want to use with the [Model Creator for SAP Solutions](https://sapmodelcreator.mendixcloud.com/link/bapi) (see [Create a Mendix BAPI Module Using the Model Creator](#create-bapi-module), below).

A Mendix BAPI module domain model contains entities which are specializations of the entities defined in section [SAP BAPI Connector Domain Model](#bapi-connector-domain-model), above to model the SAP BAPI you are using.

For example, consider the domain model for **BAPI_QUOTATION_CREATEFROMDATA2**, shown below:

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-quotation-createfromdata2-dm.png" >}}

The entities in this domain model are as follows:

* **BAPI_QUOTATION_CREATEFROMDATA2_Request** – A specialization of  BAPIConnector.BAPIRequest. Objects of this entity will be used as the BAPIRequest for the CallBAPI action
* **BAPI_QUOTATION_CREATEFROMDATA2_Response** – A specialization of  BAPIConnector.BAPIResponse. Objects of this entity will be returned from a CallBAPI action.
* **QUOTATION_HEADER_IN** – A specialization of BAPIComplexType. Objects of this entity contain attributes used as import parameters of BAPI.
* **QUOTATION_PARTNERS** and QUOTATION_ITEMS_IN – Specializations of BAPITable. Objects of this entity contain attributes corresponding to table parameters of BAPI_QUOTATION_CREATEFROMDATA2. As the Table parameters can be part of a BAPI request or response, entities of BAPITable have associations with both request and response entities. Here they are associated with BAPI_QUOTATION_CREATEFROMDATA2_Request and BAPI_QUOTATION_CREATEFROMDATA2_Response.

BAPI parameters which are reserved words in Mendix will be prefixed with `mxbapi_`. For example, mxbapi_RETURN in the above domain model.

## 6 Microflow Actions {#microflow-actions}

The BAPI Connector provides the following microflow actions. These can be used as activities in your microflows to consume the BAPIs available in the SAP system for which you have imported Mendix BAPI modules.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/use-me-microflows.png" >}}

**GetJCoDestination** – The action `GetJCoDestination`, is used to get the JCoDestination. Assign the values from the *JCO_Constants* described in *the* *Configure Connection Details* section above. The action returns a `Destination` object which is used when making calls to a BAPI.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/getjcodestination-properties.png" >}}

You can set additional properties which are not available as JCO Constants as a list of objects of the `Property` entity associated with this GetJCoDestination.

This example shows setting of below properties to GetJCoDestination action:

* jco.pool.maxconn
* jco.pool.maxpoolsize

{{< figure src="/attachments/partners/sap/sap-bapi-connector/configure-jcodestination-properties-mf.png" alt="Configuring  Additional  Properties – JCoDestination" >}}

{{< figure src="/attachments/partners/sap/sap-bapi-connector/getjcodestination-additional.properties.png" >}}

The microflow actions are described in the following sections.

### 6.1 Create_BAPIExplorer

This microflow opens the BAPI explorer page to allow you to find all the BAPIs available at your JCo destination.

For more information on how to use this microflow, see [BAPI Schema for Model Creator](#bapi-schema), below.

### 6.2 CallBAPI

This microflow action is used to call a BAPI function.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/call-bapi-properties-2.png" >}}

| Parameters  | Description   |
| --- | --- |
| Destination  | `JCoDestination` object. |
| BAPI request object | Input object to call the BAPI with the desired import parameters. This object will be of an entity type defined in your BAPI module domain model. |
| Response type | Type of the `BAPIResponseObject` having export parameters set.<br>The entity type is defined in your BAPI module domain model. |
| Commit transaction  | Setting this `true` will call `BAPI_COMMIT_TRANSACTION` to commit changes. Not required for Get calls. |

### 6.3 CallBAPISequence

Use this microflow action when you want to call more than one BAPI in a given order. This microflow action is only required when you want to call more than one BAPI in a single [JCoContext](https://javadoc.io/doc/com.sap.cloud/neo-java-web-api/2.35.9/com/sap/conn/jco/JCoContext.html). After the calls have been made, this executes an additional call to `BAPI_COMMIT_TRANSACTION` to commit all the changes made in this JCOContext.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/execute-bapi-sequence.png" >}}

| Parameters | Description |
| --- | --- |
| Destination | `JCoDestination` object.  |
| List of BAPI requests | A list of `BAPIRequest` objects.   |
| Output | A Boolean indicating the success or failure of the BAPI call sequence. If you use the return value, the result will be returned as `Variable name`. |

### 6.4 GetBAPIResponse

This microflow action is used together with `CallBAPISequence`. It returns the response for one of the BAPIRequest objects which was in the list supplied to a `CallBAPISequence` action. You need to add this action to your microflow for every `BAPIRequest` object for which you need the response.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/get-bapi-response.png" >}}

| Parameters | Description
| --- | --- |
| BAPI request | One `BAPIRequest` object specialization which was supplied to the `CallBAPISequence` action.   |
| Return entity type | The `BAPIResponse` specialization entity associated with the `BAPIRequest` entity given in request. <br>This entity will be defined in your BAPI module domain model. |
| Output | An object of the entity type mentioned in **Return entity type** |

### 6.5 TestDestinationConnection {#test-connection}

This action can be found in the **Internal > microflows** folder of the `SAPBAPIConnector` module.

This action is used to verify whether your application is able to reach your SAP system using the configured `JCoDestination`. It is not intended for use in a production app, but can be used to ensure that you have correctly specified the JCo Destination when developing or troubleshooting.

This can be done by calling the internal microflow `TestConnection`, provided. On successful connection, a success dialog will be displayed.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/connection-success.png" >}}

## 7 BAPI Schema for Model Creator {#bapi-schema}

The BAPI Connector for SAP Solutions contains the microflow **Create_BAPIExplorer**.

This can be used to find all BAPIs from SAP systems which are available to you. You can then select the BAPI which you need for your app and download the schema which you can convert into a Mendix BAPI module for use in your app using the [Model Creator](#create-bapi-module). You can create several Mendix BAPI modules if you need to use multiple BAPIs in your app.

The **Create_BAPIExplorer** microflow displays BAPIs grouped by SAP Object Name in alphabetical order.
You can see all the BAPIs for an SAP object by clicking the `+` symbol next to the object. You can also search for the BAPI you need in the search box.

When you find a BAPI, you can click the info icon (🛈) to see details including documentation, import, export, and table parameters.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-explorer-bapis.png" alt="BAPI Explorer" >}}

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-explorer-bapi-info.png" alt="BAPI Explorer – BAPI Info" >}}

Once you find the BAPI you need, select it and click **Next** to generate the BAPI schema file. Download the schema json, which you will use in the [Model Creator for SAP Solutions](#create-bapi-module) to create the Mendix BAPI module containing the domain model which supports this BAPI.

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-explorer-select-bapi.png" alt="BAPI Explorer – Select BAPI" >}}

{{< figure src="/attachments/partners/sap/sap-bapi-connector/bapi-explorer-download-schema.png" alt="BAPI Explorer – Download schema" >}}

## 8 Create a Mendix BAPI Module Using the Model Creator {#create-bapi-module}

Use [Model Creator for SAP Solutions](https://sapmodelcreator.mendixcloud.com/) to generate a Mendix BAPI module containing the domain model for a BAPI using the schema file downloaded from BAPI explorer.

1. Go to [Model Creator for SAP Solutions](https://sapmodelcreator.mendixcloud.com/) and click **SAP BAPI**.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-type.png" >}}

2. Upload a BAPI schema file and click **Next**.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-upload-bapi-schema.png" >}}

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-schema-uploaded.png" >}}

3. Select the entities you need, then click on the related number of **Included Attributes** to go to attribute selection page for each of the entities.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-select-entities.png" >}}

4. For each entity, select the attributes you need to include and click **Save**. The number of selected attributes number will be reflected in the **Included Attributes** column.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-select-attributes.png" >}}

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-select-more-entities.png" >}}

    This step must be repeated for every entity you want to include in the domain model.

5. Once you have selected all the entities and attributes you need, click **Next** to review the selection.
6. Review the selection and click **Generate Domain Model**.
    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-generate-dm.png" >}}

7. Click **Generate .mpk** to create the module containing the BAPI domain model.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-generate-mpk.png" >}}

8. Click **Download** to save the Mendix BAPI module for this BAPI schema.

    {{< figure src="/attachments/partners/sap/sap-bapi-connector/model-creator-download.png" >}}

## 9 Limitations

1. The BAPI Connector for SAP Solutions provides a short description of the SAP BAPI contained in your SAP Business Suite or S/4HANA system. For detailed documentation of an SAP BAPI, please refer to standard SAP BAPI documentation.
2. The entity description provided by the BAPI is not visible in the Model Creator for SAP Solutions.
3. The BAPI Connector for SAP Solutions is limited to discovering and using a SAP BAPI. It cannot be used for invoking Remote-enabled Function Modules (RFMs).

{{% alert color="info" %}}
Minimum 1GB memory per instance is required to run application on SAP BTP.
{{% /alert %}}
