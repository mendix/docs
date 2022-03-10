---
title: "Use the OData Connector for SAP Solutions"
url: /partners/sap/use-sap-odata-connector/
category: "SAP"
menu_order: 15
description: "Describes how to use the OData Connector for SAP solutions."
tags: ["SAP", "integration", "OData"]
---

## 1 Introduction

The OData Connector for SAP solutions is a specific SAP connector for integrating with SAP back-end systems like SAP Business Suite (SAP ERP 6.0), SAP S/4HANA, SAP S/4HANA Cloud, and SAP SuccessFactors.

**This how-to will teach you how to do the following:**

* Add the OData Connector for SAP solutions to your Mendix app
* Configure the OData Connector for SAP solutions
* Display product data from the SAP OData service GWSAMPLE_BASIC in your Mendix app

{{% alert color="info" %}}
Version 5.3.0 of the OData Connector for SAP solutions adds support for services using OData version 4. Currently, only **Get List** and **Get Entry** are supported for services using OData version 4.
{{% /alert %}}

## 2 Prerequisites{#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Create an app in Mendix Studio Pro
* Get authorization credentials for the [SAP NetWeaver (ES5)](https://sapes5.sapdevcenter.com/)

## 3 Getting the OData Connector for SAP Solutions Module

To be able to use the OData Connector; first create your project. Inside, navigate to the Mendix Marketplace to download the [OData Connector for SAP solutions](https://marketplace.mendix.com/link/component/74525/Mendix/SAP-OData-Connector) module. You will then find this module in your app's Marketplace modules.

For more information, see [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

## 4 Getting an SAP Data Model

In this example, you will display a list of products from the GWSAMPLE_BASIC OData service. You will need to create an SAP data model module for the GWSAMPLE_BASIC OData service. The module contains a pre-built domain model that you can add to your app.

1. Open the [OData Model Creator for SAP solutions](https://sapodatamodelcreator.mendixcloud.com/).

2. Click **SAP Catalog Service**.

3. Enter your **User name** and **Password** for the ES5 SAP Service Catalog (see [Prerequisites](#prerequisites), above).

4. Type *sapes5.sapdevcenter.com* as the **Server**. (Leave the protocol as `https://` and the **Port** as `443`).

5. Click **Continue**.

    ![](/attachments/partners/sap/use-sap-odata-connector/login-catalog.png)

6. Type *GWSAMPLE* in the search box and press <kbd>Enter</kbd>.

7. Select **GWSAMPLE_BASIC** and click **Continue**.

8. Select **GWSAMPLE_BASIC** again and click **Continue**.

9. Click **Generate .mpk**.

    ![](/attachments/partners/sap/use-sap-odata-connector/generate-mpk.png)

10. Click **Download** once the model is ready.

11. Select **Save File**.

12. Choose the **/resources** folder within the folder where your app is stored on your PC and click **Save**.

13. Open your app in Mendix Studio Pro.

14. Right-click the project in the **App Explorer** and select **Import module package…**.

    ![](/attachments/partners/sap/use-sap-odata-connector/import-module.png)

15. Find the file that you stored in the /resources folder and import it.

    The GWSAMPLE_BASIC data model will now be included as a module in your app.

    ![](/attachments/partners/sap/use-sap-odata-connector/data-model.png)

For more information, see [Use the OData Model Creator for SAP Solutions](/partners/sap/use-sap-odata-model-creator/) and [SAP Data Models](/partners/sap/sap-data-models/).

## 5 Using the OData Connector for SAP Solutions

In this section, you will learn how to implement the data connector in your Mendix app. These steps assume you are using a blank Mendix app with a module called MyFirstModule.

### 5.1 Creating a Microflow{#microflow}

To create the microflow for this retrieve, follow these steps:

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
    * (You do not have to use the return variable)
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
10. In the microflow, make the return value of the microflow **List of Customers**. This is so that you can call the microflow as a data source in a page.

The final result of your microflow should look like this:

![](/attachments/partners/sap/use-sap-odata-connector/get-list.png)

### 5.2 Creating a Page

To create a page to show the objects in a list, follow these steps:

1. Add a blank page to your **MyFirstModule** module.
2. Insert a **Data grid** widget in the page.
3. Select the microflow you created in the section [Creating a Microflow](#microflow), above, as the data source for the grid.
4. Select the **Name**, **Category**, and **Price** attributes to display in the data grid.

    Your page should look like this:

    ![](/attachments/partners/sap/use-sap-odata-connector/show-get-list-result.png)

3. Drag a **open page button** on your homepage.
4. Select the page you have just created to be displayed.

{{% alert color="success" %}}
Congratulations! You can now run your app and see a list of the products available in the **GWBASIC_SAMPLE** application.
{{% /alert %}}

## 6 Read More

* [OData Connector for SAP Solutions](/partners/sap/sap-odata-connector/)
* [SAP Data Models](/partners/sap/sap-data-models/)
