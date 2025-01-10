---
title: "Expose Data to BI Tools Using OData"
url: /howto8/integration/exposing-data-to-bi-tools-using-odata/
weight: 13
description: "Presents how to create a published OData service with resources, add the OData server to Tableau and Excel, combine resources in Tableau, and create custom queries."
---

## Introduction

Mendix apps encourage the application of a services-oriented architecture, with multiple smaller services providing APIs and user interfaces for a specific set of data and logic. Enterprises build up complete solutions by assembling these services.

One important aspect of services is that all access to data and logic is handled by the service operations. Direct access to databases used for storing the service data is discouraged, because this would bypass the business rules and security handled by the service. This creates a challenge for generic reporting, data warehousing, and ETL tooling.

The OData standard is being adopted because it enables generic data access within a services-oriented architecture. [OData](https://www.odata.org) is “an open protocol to allow the creation and consumption of queryable and interoperable Restful APIs in a simple and standard way.". In other words, it enables tools to use any REST/OData service by providing metadata that describes the data being provided, and by standardizing the messages exchanged with the OData services.

A reporting tool like Excel or Tableau can discover what data and functionality is available in an OData service, and provide a generic way for users to build new queries for the data.

**This guide will outline how to do the following:**

* Create a published OData service with resources
* Add the OData server to Tableau and Excel
* Combine resources in Tableau
* Create custom queries

## Prerequisites

Before checking out this guide, make sure you do the following:

* Create an app that includes data you want to expose. You can either have published OData services already, or follow the steps in the [Creating a Published OData Service](#create-service) section below. For detailed steps to publishing an OData service, see [Share Data Between Apps](/howto/integration/share-data/). 
* Install Excel (we will use Excel for Office 365).
* Download and install the public version of [Tableau](https://public.tableau.com).

## Creating a Published OData Service {#create-service}

A published OData service can be used by third-party applications to read data from a Mendix application. The basic steps are as follows:

1. Open Studio Pro and add a folder named *OData Services* to **MyFirstModule**.
2. Right-click the new folder and select **Add other** > **Published OData service**.
3. Enter a descriptive name for the service and click **OK**.
4. Under **Entities**, click **Add**:
5. In the **Select Persistable Entity** window, select the entity you want to expose and click **Select**. 
    {{% alert color="info" %}}Security in OData is managed by the **App Security** settings and the entity-level access rules; therefore, if you have already configured access rules in your app, you do not have to configure security separately for OData.{{% /alert %}}
6. On the **Settings** tab, choose **As an associated id** for **Associations**. Excel can handle the setting **As a link**, but Tableau does not support it.
7. Start the application. 

The OData service is now ready to be consumed.

## Working with Mendix Data in Excel for Office 365

1. Open Excel.
2. Open the **DATA** tab and select **Get Data** > **From Other Sources** > **From OData Feed**.
3. Return to Studio Pro, and double-click the published OData service. Copy the link in the **Location** field to the clipboard.
4. Back in Excel, on the **OData Feed** dialog box, enter the copied link for the **URL** and Click **OK**:
5. Select the name of the published entity in the Navigator and click **Load**.

The data of the Mendix application is now available in Excel.

## Working with Mendix Data in Tableau

In this section, we will outline the steps for adding more than one published entity so you can compare data from different data sources. 

### Use Case

Imagine that you have an app that helps with asset management. You have a Published OData Service with persistable entities called **SmartTask** and **Employee** that expose information. The domain model looks like this:

{{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/asset-manager-domain-model.png" class="no-border" >}}

To visualize data from your app in Tableau, follow these steps:

1. Open **Tableau** and select **Connect** > **To a Server** > **OData**:
2. Return to Studio Pro, and double-click the published OData service. Copy the link the **Location** field to the clipboard.
3. On the **Server Connection** dialog box, enter the copied OData service **Location** link for the **Server**  address:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582020.png" class="no-border" >}}

    Include authentication credentials if you set them up.

4. Click **Sign In** to save the server connection. You should now see the data source details.
5. Click the name of the server connection and change it to a name related to your entity (in this case, **SmartTasks**) for readability.
6. Click **Data** > **New Data Source** and repeat step 1–5 to add a server connection for other published OData services.
7. Open **Sheet1**. Under **Data**, click the first entity and drag a desired entity **Attribute** from **Measures** to **Dimensions**. In this case, click **Engineers** and drag **ID** from **Measures** to **Dimensions**:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582012.png" class="no-border" >}}

8. Similarly, click and drag an attribute from the second entity from **Measures** to **Dimensions**. In this case, click **SmartTasks** and drag **SmartTask_Engineer** from **Measures** to **Dimensions**.
9. Go to **Data** > **Edit Relationships...** to define the relationship between the different data sources.
10. On the **Relationships** window, do the following:<br />
    1. Select your first entity for the **Primary data source**. In our imagined scenario, that is **SmartTasks**.<br />
    1. Select your second entity for the **Secondary data source**. In our imagined scenario, that is **Engineers**.<br />
    1. Switch to **Custom** mapping.<br />
    1. Remove any default mappings.<br />
    1. Click **Add...** to configure a field mapping.

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582013.png" class="no-border" >}}

11. In the **Add/Edit Field Mapping** window, select the attribute for the first entity for the **Primary data source field** and **Entity1_Entity2** for the **Secondary data source field**, then click **OK** to save the field mapping. In this case, select **ID** for the **Primary data source field** and **SmartTask_Engineer** for the **Secondary data source field**: 

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582011.png" class="no-border" >}}

12. In the **Relationships** window, click **OK** to save the relationships:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582007.png" class="no-border" >}}

13. Select the second entity for the data source (in this case, **Engineers**) and drag the **Name** attribute from the **Dimensions** section to **Rows**:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582006.png" class="no-border" >}}

14. Select your first published entity (in this case, **SmartTasks**) for the data source and do the following:<br />
    1. Click the **SmartTask_Engineer** attribute to use it as the linking field.<br />
    1. Drag **Number of Records** from the **Measures** section to **Columns**.

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18582005.png" class="no-border" >}}

You should now see a bar chart of the data.

## Filtering Data With Query Parameters

By default, all data is retrieved by Tableau, but Mendix allows you to add filters to the query so only the desired data is being retrieved.

To filter data with query parameters, follow these steps:

1. Right-click a data source and select **Edit Data Source...**.
2. Click the OData URL to change the connection settings.
3. Add *?$top=2* to the server URL (in order to only retrieve the first two values, engineers in this case) and click **Sign In**:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18581998.png" class="no-border" >}}

4. On the warning indicating that the data being used was refreshed, click **OK**.
5. Open **Sheet1** and drag **Name** to **Rows** again. Now you should now see a bar chart with only the data of the two engineers:

    {{< figure src="/attachments/howto8/integration/exposing-data-to-bi-tools-using-odata/18581997.png" class="no-border" >}}

6. You can combine filters by using the `&` character. Repeat steps 1–4, but now use `http://localhost:8080/odata/Expenses/Expenses?$skip=1` as the server URL. You should now see a bar chart showing the data of  2 and 3.

These are some other query examples:

* `http://localhost:8080/odata/publishedservicename/v1/Engineers(7881299347898469)`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers/$count`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers?$filter=Name+eq+'Kim'`
* `http://localhost:8080/odata/publishedservicename/v1/Engineers?$filter=Name+ne+'Kim'`
* `http://localhost:8080/odata/publishedservicename/v1/SmartTasks?$filter=DueDate+gt+datetime'1995-01-01T00:00:00'`
* `http://localhost:8080/odata/publishedservicename/v1/SmartTasks?$filter=Created+gt+datetime'2005-01-01T00:00:00'&$orderby=DueDate`

## Read More

* [Consume a Complex Web Service](/howto8/integration/consume-a-complex-web-service/)
* [Consume a Simple Web Service](/howto8/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto8/integration/export-xml-documents/)
* [Import Excel Documents](/howto8/integration/importing-excel-documents/)
* [Expose a Web Service](/howto8/integration/expose-a-web-service/)
