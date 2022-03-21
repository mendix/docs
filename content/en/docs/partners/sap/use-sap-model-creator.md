---
title: "Use the Model Creator for SAP Integrations"
linktitle: "Model Creator for SAP Integrations"
url: /partners/sap/use-sap-model-creator/
category: "SAP"
weight: 35
description: "Describes how to use the Model Creator for SAP Integrations to generate a Mendix domain model for an SAP OData or BAPI service."
tags: ["SAP", "OData", "integration", "SAP services", "BAPI"]
aliases:
    - /howto/sap/use-sap-model-creator.html
    - /partners/sap/use-sap-model-creator/index.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

SAP data models reflect an OData service or BAPI from SAP back-end systems like SAP Business Suite (SAP ERP 6.0), SAP S/4HANA, and SAP S/4HANA Cloud.

Handcrafting a Mendix domain model for these services would be a lot of work. The Model Creator for SAP Integrations automates this process by creating a Mendix module for the selected service containing the Mendix domain model which can be imported in your project. The data model also contains additional information such as the URL of the exposed endpoint, a list of collections in the service, and a list of functions provided by the service.

For a BAPI service you will need to download a BAPI Schema. See [Create a Mendix BAPI Module Using the Model Creator](#create-bapi-module) for information on how to use the BAPI Schema.

For an OData service, there are four ways to create the data model:

* [Using the API Business Hub](#APIBusHub)
* [Selecting an API from the SAP Catalog Service](#catalog)
* [Uploading an OData Metadata XML File](#Uploading)
* [Providing the URL to the Metadata](#URL)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Identify the SAP back-end system and OData service or BAPI you wish to use
* Create an app in Mendix Studio Pro (version 8.18.10 or above)
* For a BAPI you will need to download a BAPI Schema – see [BAPI Schema for Model Creator](/partners/sap/sap-bapi-connector/#bapi-schema) in *BAPI Connector for SAP Solutions* for more information
* Obtain authentication credentials, if needed, for the SAP Catalog Service or SAP back-end system you wish to use

{{% alert color="warning" %}}
The Model Creator for SAP Integrations will produce a module which is in Mendix version 8.18.10. To use the module you will have to create your app in, or upgrade your app to, Mendix version 8.18.10 or above.
{{% /alert %}}

## 3 Generating an OData Data Model

The Model Creator for SAP Integrations is an app in the Marketplace. Search for it in the Mendix Marketplace, or find it here: [Model Creator for SAP Integrations - OData](https://sapmodelcreator.mendixcloud.com/link/odata). If the app gives you a choice between **SAP OData** and **SAP BAPI**, choose **SAP OData**.

{{< figure src="/attachments/partners/sap/use-sap-model-creator/odata-bapi.png" >}}

{{% alert color="info" %}}
The Model Creator for SAP Integrations is not currently available in the Marketplace within Studio Pro. It can only be run in a browser.
{{% /alert %}}

Open the [Model Creator for SAP Integrations - OData](https://sapmodelcreator.mendixcloud.com/link/odata), where you will be asked how you want to generate your model:

{{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-1.png" >}}

There are four ways to generate your data model.

* If your SAP back-end system stores the OData API package on the SAP API Business Hub, you can create the data model from there; select **API Business Hub** as the source and continue with [Using the API Business Hub](#APIBusHub)
* If your SAP API is in the SAP Catalog Service, you can create the data model from there; select **SAP Catalog Service** and continue with [Selecting an API from the SAP Catalog Service](#catalog)
* If you have access to the metadata file, select **Manual** and continue with [Uploading an OData Metadata XML File](#Uploading)
* If you have the metadata URL for the OData service, select **URL** and continue with [Providing the URL to the Metadata](#URL)

### 3.1 Using the API Business Hub{#APIBusHub}

Your SAP back end OData API is held in the API Business Hub.

{{% alert color="info" %}}
There may be several schemas in the packages of an API. Each of these will generate a module. Depending on the functionality of your app, you may have to generate several modules and import all of them into your app.
{{% /alert %}}

1. Click **API Business Hub**.

    You will be presented with a list of packages containing OData API definitions. You can search this list (this includes text in the package description as well as the package name) , and page through it using the paging buttons.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-2-api.png" >}}

    {{% alert color="info" %}}You can return to any stage in this process by clicking on the relevant step number.
    {{% /alert %}}

2. Click the package you want. It will be highlighted.

3. Click **Next** to see the APIs within the package.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-3-api.png" >}}

    {{% alert color="info" %}}This will be shown even if only one API exists.
    {{% /alert %}}

4. Click the API you want. It will be highlighted.

5. Click **Next** to see the schemas within the API.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-4-api.png" >}}

    {{% alert color="info" %}}This will be shown even if only one schema exists.
    {{% /alert %}}

6. Click the schema you want. It will be highlighted.

7. Click **Next** to proceed to the confirmation screen.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-5-api.png" >}}

8. Click **Generate .mpk** to generate the data model module.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-generated-api.png" >}}

9. Click **Download**.

    Your browser will offer options on what to do with the file.

10. Save the file locally. It is recommended that you save it in the **resources** folder of your Mendix app so that you can find it easily.

You have now created the module. The [Using the Data Model Module in a Mendix App](#Using) section, below, explains how to import it into your app.

### 3.2 Selecting an API from the SAP Catalog Service{#catalog}

Your SAP back end OData API is held in the SAP Catalog Service.

{{% alert color="info" %}}
There may be several schemas in the packages of an API. Each of these will generate a module. Depending on the functionality of your app, you may have to generate several modules and import all of them into your app.
{{% /alert %}}

1. Click **SAP Catalog Service**.

    You will be asked to sign in to you SAP Service Catalog. Enter your **User name**, **Password**, and **Server**. Select the correct protocol and **Port** if these are not the default.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-2-1-catalog.png" >}}

2. Click **Next**.

    You will be presented with a list of OData API definitions. You can search this list (this includes text in the API description as well as the API name), and page through it using the paging buttons.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-2-catalog.png" >}}

    {{% alert color="info" %}}You can return to any stage in this process by clicking on the relevant step number.
    {{% /alert %}}

3. Click the API you want. It will be highlighted.

4. Click **Next** to see the schemas within the API.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-3-catalog.png" >}}

    {{% alert color="info" %}}This will be shown even if only one schema exists.
    {{% /alert %}}

5. Click the schema you want. It will be highlighted.

6. Click **Next** to proceed to the confirmation screen.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-4-catalog.png" >}}

7. Click **Generate .mpk** to generate the data model module.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-generated-catalog.png" >}}

8. Click **Download**.

    Your browser will offer options on what to do with the file.

9. Save the file locally. It is recommended that you save it in the **resources** folder of your Mendix app so that you can find it easily.

You have now created the module. The [Using the Data Model Module in a Mendix App](#Using) section, below, explains how to import it into your app.

### 3.3 Uploading an OData Metadata XML File{#Uploading}

You may want to generate the data model by hand using the `$metadata` file directly. This may, for example, not be in the API Business Hub.

One way to do this is by getting the OData metadata XML file. This file can be download from the OData service URL directly using the `$metadata` suffix. The browser will display the XML and you can use the right mouse button in most browsers to choose to download the XML file. Save the file locally. It is recommended that you save it in the **resources** folder of your Mendix app so that you can find it easily.

1.  Download the XML metadata file to your local drive.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/download-xml.png" >}}

2. Open the Model Creator for SAP Integrations to generate a Domain Model for an SAP OData Service.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-wizard-1.png" >}}

3. Click **Upload File**.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/upload_metadata.png" >}}

4. Drag the file you want into the Model Creator, or click **Upload** and upload the XML file you want to use.

5. Click **Next** to see the schemas within the metadata.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/upload-metadata-schemas.png" >}}

    {{% alert color="info" %}}This will be shown even if only one schema exists.
    {{% /alert %}}

6. Click the schema you want. It will be highlighted.

7. Click **Next** to proceed to the confirmation screen.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/upload-metadata-confirmation.png" >}}

8. Click **Generate .mpk**. A progress bar will be shown during the parsing and generation of the module.

9. Once the generation is complete, the **Download File** button appears. Notice that the file name of your data model module is extracted from the metadata file itself.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/download_metadata.png" >}}

10. Click **Download**.

    Your browser will offer options on what to do with the file.

11. Save the file locally. It is recommended that you save it in the **resources** folder of your Mendix app so that you can find it easily.

You have now created the module. The [Using the Data Model Module in a Mendix App](#Using) section, below, explains how to import it into your app.

### 3.4 Providing the URL to the Metadata{#URL}

You can also generate the data model from the metadata by providing the URL to the Model Creator for SAP Integrations.

{{% alert color="warning" %}}
This method does not work where the destination needs authentication. You cannot use it, for example, to generate a data model for a service on the ES5 Gateway Demo.
{{% /alert %}}

1. Click **URL** on the OData page of the Model Creator for SAP Integrations.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/metadata-url.png" >}}

2. Enter the URL of the service metadata which you want in **Enter a URL**.

3. Click **Continue** to see the schemas within the metadata.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/upload-metadata-schemas.png" >}}

    {{% alert color="info" %}}This will be shown even if only one schema exists.
    {{% /alert %}}

4. Click the schema you want. It will be highlighted.

5. Click **Continue** to proceed to the confirmation screen.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/metadata-url-confirmation.png" >}}

6. Click **Generate .mpk**. A progress bar will be shown during the parsing and generation of the module.

7.  Once the generation is complete, the **Download File** button appears. Notice that the file name of your data model module is extracted from the metadata file itself.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/download-metadata-url.png" >}}

8. Click **Download File**.

    Your browser will offer options on what to do with the file.

9. Save the file locally. It is recommended that you save it in the **resources** folder of your Mendix app so that you can find it easily.

You have now created the module. The [Using the Data Model Module in a Mendix App](#Using) section, below, explains how to import it into your app.

## 4 Create a Mendix BAPI Module Using the Model Creator {#create-bapi-module}

Use [Model Creator for SAP Integrations](https://sapmodelcreator.mendixcloud.com/) to generate a Mendix BAPI module containing the domain model for a BAPI using the schema file downloaded from BAPI explorer.

1. Go to [Model Creator for SAP Integrations](https://sapmodelcreator.mendixcloud.com/) and click **SAP BAPI**.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-type.png" >}}

2. Upload a [BAPI schema file](/partners/sap/sap-bapi-connector/#bapi-schema) and click **Next**.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-upload-bapi-schema.png" >}}

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-schema-uploaded.png" >}}

3. Select the entities you need, then click on the related number of **Included Attributes** to go to attribute selection page for each of the entities.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-select-entities.png" >}}

4. For each entity, select the attributes you need to include and click **Save**. The number of selected attributes number will be reflected in the **Included Attributes** column.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-select-attributes.png" >}}

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-select-more-entities.png" >}}

    This step must be repeated for every entity you want to include in the domain model.

5. Once you have selected all the entities and attributes you need, click **Next** to review the selection.
6. Review the selection and click **Generate Domain Model**.
    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-generate-dm.png" >}}

7. Click **Generate .mpk** to create the module containing the BAPI domain model.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-generate-mpk.png" >}}

8. Click **Download** to save the Mendix BAPI module for this BAPI schema.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/model-creator-bapi-download.png" >}}

## 5 Using the Data Model Module in a Mendix App{#Using}

Now you have a Mendix module ready to import into your project.

1. Open the project which you created as a prerequisite.

2. Right-click your project in the **App Explorer** and select **Import module package...**.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/import_module_package.png" >}}

3. Use the navigation dialog to find your module, which will have the suffix **.mpk**.

    You now have your service module, for example **GWSAMPLE_BASIC**, available in your project ready to use in combination with the OData Connector for SAP solutions.

    {{< figure src="/attachments/partners/sap/use-sap-model-creator/project_explorer.png" >}}

{{% alert color="warning" %}}
Do not change the names of entities, attributes, or associations in the Domain Model of the module; they need to match the names used by the SAP OData service for the OData Connector for SAP solutions to work correctly.
{{% /alert %}}

For more information on how to use the imported data model together with the OData Connector for SAP solutions, see [How to Use the OData Connector for SAP Solutions](/partners/sap/use-sap-odata-connector/).

## 6 Read More

* [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)
* [How to Use the OData Connector for SAP Solutions](/partners/sap/use-sap-odata-connector/)
* [Model Creator for SAP Integrations](https://sapmodelcreator.mendixcloud.com/link/odata)
