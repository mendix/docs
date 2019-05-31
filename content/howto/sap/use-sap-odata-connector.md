---
title: "Use the SAP OData Connector"
category: "SAP"
menu_order: 10
description: "Describes how to use the SAP OData Connector."
tags: ["SAP", "integration", "OData"]
---

## 1 Introduction

The SAP OData Connector is a specific SAP connector for integrating with SAP back-end systems like SAP Business Suite (SAP ERP 6.0), SAP S/4HANA, SAP S/4HANA Cloud, and SAP SuccessFactors.

**This how-to will teach you how to do the following:**

* Add the SAP OData Connector to your Mendix app
* Configure the SAP OData Connector
* Display Data from an SAP OData service in your Mendix app

{{% alert type="warning" %}}
SAP OData Connector only supports SAP OData Gateway Services which use OData version 2 or version 3. OData version 4 is not yet supported.
{{% /alert %}}

## 2 Prerequisites{#prerequisistes}

Before starting this how-to, make sure you have completed the following prerequisites:

* Create an app in Mendix Studio Pro
* Get authorization credentials for the [SAP NetWeaver (ES5)](https://sapes5.sapdevcenter.com/)

## 3 Getting the SAP OData Connector Module

To be able to use the OData Connector; first create your project. Inside, navigate to the Mendix App Store to download the [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/Mendix/SAP-OData-Connector) module. You will then find this module in your app project's App Store modules.

For more information, see [How to Use App Store Content](/developerportal/app-store/app-store-content).

## 4 Getting an SAP Data Model

In this example, you will display a list of products from the GWSAMPLE_BASIC OData service.

You will need to create an SAP data model module for the GWSAMPLE_BASIC OData service. The module contains a pre-built domain model that you can add to your app.

1. Open the [SAP OData Model Creator](https://sapodatamodelcreator.mendixcloud.com/).

2. Click **SAP Catalog Service**.

3. Enter your **User name** and **Password** for the ES5 SAP Service Catalog (see [Prerequisites](#prerequisites), above).

4. Type *sapes5.sapdevcenter.com* as the **Server**. (Leave the protocol as `https://` and the **Port** as `443`).

5. Click **Continue**.

    ![](attachments/use-sap-odata-connector/login-catalog.png)

6. Type *GWSAMPLE* in the search box and press <kbd>Enter</kbd>.

7. Select **GWSAMPLE_BASIC** and click **Continue**.

8. Select **GWSAMPLE_BASIC** again and click **Continue**.

9. Click **Generate .mpk**.

    ![](attachments/use-sap-odata-connector/generate-mpk.png)

10. Click **Download** once the model is ready.

11. Select **Save File**.

12. Choose the **/resources** folder within the folder where your app project is stored on your PC and click **Save**.

13. Open your app in Mendix Studio Pro.

14. 

For more information, see [Use the SAP OData Model Creator](use-sap-odata-model-creator) and [SAP Data Models](/refguide/sap/sap-data-models).

## 3 Using the SAP OData Connector

In this section, you will learn how to implement the data connector in your Mendix app.

### 3.1 Creating a Microflow<a name="microflow"></a>

To create the microflow for this retrieve, follow these steps:

1. Create a microflow in .
2. From the **Toolbox**, drag the **Get List** operator into your microflow.
3. Fill in the required fields of the Get List connector. For this example, you should use these settings:
    * **Query** – `@SAPCheckPriceandAvailability.SRA016_PRICE_AVAIL_SRV_URL +'/' + toString(SAPCheckPriceandAvailability.EntitySetNames.Customers)`
    * **Response type** – the type you want to query from the OData service; in this example, `Customer` is used
    * **Request parameters** – empty
    * **Parent** – empty
    * **Result info** – empty
    * **Use Cloud Connector** – Yes

4. In the microflow, make the return value of the microflow **List of Customers**. This is so that you can call the microflow as a data source in a page.

The final result of your microflow should look like this:

![](attachments/use-sap-odata-connector/get-list.png)

### 3.2 Creating a Page

To create a page to show the objects in a list, follow these steps:

1. Create a blank page and insert a **Data grid** widget.
2. Select the microflow you created in section [3.1 Creating a Microflow](#microflow) as the data source for the grid. Your page should look like this:

    ![](attachments/use-sap-odata-connector/show-get-list-result.png)

3. Create a simple **button** on your homepage.
4. Set the action to **Open page** and select the page you have just created.

Congratulations! You can now run your app and see a list of the customers available in the public **Check Price and Availability** application of [SAP Fiori Cloud Demo](https://www.sapfioritrial.com/sites?helpset=trial&sap-client=001#PriceAndAvailability-check).

## 4 Read More

* [SAP OData Connector](/refguide/sap/sap-odata-connector)
* [SAP Data Models](/refguide/sap/sap-data-models)
