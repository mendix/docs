---
title: "Expose Data to BI Tools Using OData"
category: "Integration"
description: "Presents how to create a published OData service with resources, add the OData server to Tableau and Excel, combine resources in Tableau, and create qustom queries."
---

## 1 Introduction

Mendix apps encourage the application of a services-oriented architecture, with multiple smaller services providing APIs and user interfaces for a specific set of data and logic. Enterprises build up complete solutions by assembling these services.

One important aspect of services is that all access to data and logic is handled by the service operations. Direct access to databases used for storing the service data is discouraged, because this would bypass the business rules and security handled by the service. This creates a challenge for generic reporting, data warehousing, and ETL tooling.

A new standard called OData being adopted more and more, as this enables generic data access within a services-oriented architecture. OData is “an open protocol to allow the creation and consumption of queryable and interoperable Restful APIs in a simple and standard way” ([www.odata.org](http://www.odata.org)). In other words, it enables tools to use any REST/OData service by providing metadata that describes the data being provided and by standardizing the messages exchanged with the OData services.

A reporting tool like Tableau or Excel can discover what data and functionality is available in an OData service and provide a generic way for users to build new queries for the data.

**This how-to will teach you how to do the following:**

* Create a published OData service with resources
* Add the OData server to Tableau and Excel
* Combine resources in Tableau
* Create custom queries

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Open the [Company Expenses sample app](https://appstore.home.mendix.com/link/app/240/Mendix/Company-Expenses) from the Mendix App Store in the Modeler
    * Add some expense reports to the app so that you have data to work with in this how-to
* Install Excel 2013
* Download and install [Tableau](http://www.tableau.com/) (you can use the trial version for 14 days)

## 3 Creating a Published OData Service

A published OData service can be used by third-party applications to read data from a Mendix application. In this chapter, you will create and configure such a service.

1. Open the Modeler and add a new folder to the **Expenses** folder called **OData Services**.
2. Right-click the OData Service folder and select **Add** > **Published services** > **Published OData service**:

    ![](attachments/18448736/18582029.png)

3. Enter the name **Expenses** and click **OK**.
    ![](attachments/18448736/18582027.png)
4. Go to the Resources tab and click **Add published resource**:

    ![](attachments/18448736/18581979.png)

5. In the **Edit published resource** window, you can select an **Entity** as the data source for the OData service. Security in OData is managed by the project security settings and the entity level access rules; therefore, if you have already configured access rules in your app, you don't have to configure it separately for OData.

    Click **Select**:

    ![](attachments/18448736/18581978.png)

6. In the **Select Entity** window, select the **Expense** entity and click **Select**:

    ![](attachments/18448736/18582024.png)

7. In the **Edit published resource** window, do the following:
    * Change the **Exposed entity name** to *Expenses*:
    * Click **Select** for **Exposed attributes and associations**

    ![](attachments/18448736/18581977.png)

8. In the **Select members for entity** window, select what values are exposed in the OData service, then click **OK** to save the resource:

    ![](attachments/18448736/18581982.png)

9. Repeat steps 4–8 for the **ExpenseType** and **Employee** entities:

    ![](attachments/18448736/18581976.png)

10. Click **OK** to save the OData service.

Restart the application. The OData service is now ready to be consumed.

## 4 Working with Mendix Data in Excel 2013

1. Open Excel and create a new blank workbook:

    ![](attachments/18448736/18581995.png)

2. Open the **DATA** tab and select **From Other Sources** > **From OData Data Feed**:

    ![](attachments/18448736/18581994.png)

3. On the **Data Connection Wizard** dialog box, do the following:
    * Enter `http://localhost:8080/odata/Published_OData_service/Expenses` for the **Location of the data feed**
    * Select **Use this name and password** and enter the *MxAdmin* credentials
    * Click **Next**

    ![](attachments/18448736/18581993.png)

4. Select **Expenses** in the tables selector and click **Finish**:

    ![](attachments/18448736/18581990.png)

5. On the **Import Data** dialog box, select **Table** as the import method and then click **OK**:

    ![](attachments/18448736/18581988.png)

6. The data of the Mendix application should now be imported in Excel:

    ![](attachments/18448736/18581987.png)

## 5 Working with Mendix Data in Tableau

To visualize data from the Company Expenses app in Tableau, follow these steps:

1. Open **Tableau** and select **More Servers...** > **OData**:

    ![](attachments/18448736/18582022.png)

2. On the **Server Connection** dialog box, do the following:
    * Enter `http://localhost:8080/odata/Published_OData_service/Expenses` for the **Server** address
    * Select **Use a specific username and password** and enter the *MxAdmin* credentials
    * Click **OK** to save the server connection

    ![](attachments/18448736/18582020.png)

3. Click **OK** to save the server connection. You should now see the data source details:

    ![](attachments/18448736/18582016.png)

4. Click the name of the server connection and change it to *Expenses* for readability:

    ![](attachments/18448736/18582015.png)

5. Repeat step 1–4 to add a server connection for `http://localhost:8080/odata/Published_OData_service/Expenses`.
6. Open Sheet1 and drag **Expense_Employee** and **Expense_ExpenseType** from **Measures** to **Dimensions**:

    ![](attachments/18448736/18582012.png)

7. Select **Data** > **Edit Relationships...** in order to define the relation between the different data sources:

    ![](attachments/18448736/18582014.png)

8. On the **Relationships** window, do the following:
    * Select **Expenses** for the **Primary data source** (1)
    * Select **Employees** for the **Secondary data source** (2)
    * Switch to **Custom** mapping (3)
    * Remove any default mappings (4)
    * Click **Add...** to configure a field mapping (5)

    ![](attachments/18448736/18582013.png)

9. In the **Add/Edit Field Mapping** window, select **Expense_Employee** for the **Primary data source field** and **ID** for the **Secondary data source field**, then click **OK** to save the field mapping:

    ![](attachments/18448736/18582011.png)

10. In the **Relationships** window, do the following:
    * Select **ExpenseTypes** for the **Secondary data source**
    * Switch to **Custom** mapping
    * Remove the default mappings
    * Click **Add...** to configure a field mapping

    ![](attachments/18448736/18582010.png)

11. In the **Add/Edit Field Mapping** window, select **Expense_ExpenseType** for the **Primary data source field** and **ID** for the **Secondary data source field**, then click **OK** to save the field mapping:

    ![](attachments/18448736/18582008.png)

12. In the **Relationships** window, click **OK** to save the relationships:

    ![](attachments/18448736/18582007.png)

13. Select **Expenses** for the data source and drag the **Amount** attribute from the **Measures** section to **Rows**:

    ![](attachments/18448736/18582006.png)

14. Select **Employees** for the data source, drag the **FullName** attribute from the **Dimensions** section to **Columns**, and click the icon next to the **ID** attribute to use ID as the linking field:

    ![](attachments/18448736/18582005.png)

15. Select **ExpenseTypes** for the data source, drag the **Name** attribute from the **Dimensions** section to **Color**, and click the icon next to the **ID** attribute to use ID as the linking field:

    ![](attachments/18448736/18582002.png)

You should now see a stacked bar chart with data combined over multiple data sources:

![](attachments/18448736/18582003.png)

## 6 Filtering Data With Query Parameters

By default all the expenses are retrieved by Tableau, but Mendix allows you to add filters to the query so only the desired data is being retrieved.

To filter data with query parameters, follow these steps:

1. Right-click the **Expenses** data source and select **Edit Data Source...**:

    ![](attachments/18448736/18582001.png)

2. Click the OData URL to change the connection settings:

    ![](attachments/18448736/18582000.png)

3. Add `?$top=3` to the server URL (in order to only retrieve the first three expenses) and click **OK**:

    ![](attachments/18448736/18581998.png)

4. Open sheet1, where you should now see a stacked bar chart with only the data of the three expenses:

    ![](attachments/18448736/18581997.png)

5. You can combine filters by using the `&` character. Repeat steps 1–4, but now use `http://localhost:8080/odata/Expenses/Expenses?$skip=3&$top=3` as the server URL. You should now see a stacked bar chart showing the data of expenses four to six.

These are some other query examples:

* `http://localhost:8080/odata/Expenses/Expenses(1688849860265137)`
* `http://localhost:8080/odata/Expenses/Expenses?$top=100`
* `http://localhost:8080/odata/Expenses/Expenses?$skip=10&$ top=10`
* `http://localhost:8080/odata/Expenses/Expenses/$count`
* `http://localhost:8080/odata/Expenses/Expenses?$filter=Firstname+eq+'Ivan'`
* `http://localhost:8080/odata/Expenses/Expenses?$filter=Firstname+ne+'Ivan'`
* `http://localhost:8080/odata/Expenses/Expenses?$filter=DateOfBirth+gt+datetime'1995-01-01T00:00:00'`
* `http://localhost:8080/odata/Expenses/Expenses?$filter=DateOfBirth+gt+datetime'2005-01-01T00:00:00'&$orderby=DateOfBirth`

## 7 Related Content

* [How to Consume a Complex Web Service](consume-a-complex-web-service)
* [How to Consume a Simple Web Service](consume-a-simple-web-service)
* [How to Export XML Documents](export-xml-documents)
* [How to Import Excel Documents](importing-excel-documents)
* [How to Expose a Web Service](expose-a-web-service)
* [How to Enable Selenium Support](selenium-support)
* [How to Synchronize User Accounts Using the LDAP Module](synchronizing-user-accounts-using-the-ldap-module)
* [How to Import XML Documents](importing-xml-documents)
* [How to Consume a REST Service](consume-a-rest-service)
* [How to Expose Data to BI Tools Using OData](exposing-data-to-bi-tools-using-odata)
* [Publishing OData Services](/refguide7/published-odata-services)
* [OData Representation](/refguide7/odata-representation)
* [OData Query Options](/refguide7/odata-query-options)
