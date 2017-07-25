---
title: "Exposing data to BI tools using OData"
category: "Integration"
---

**Introduction**

Mendix applications, like many other applications, encourage the application of a services oriented architecture: multiple smaller services providing APIs and user interfaces for a specific set of data and logic. Enterprises build up complete solutions by assembling these services.

One important aspect of services is that all access to data and logic is handled by service operations. Direct access to databases used for storing the service data is discouraged, because this would bypass business rules and security handled by the service. This creates a challenge for generic reporting, data warehousing and ETL tooling.

**OData**

A new standard called oData is currently seeing growing adoption as this enables generic data access within a services oriented architecture. oData is “an open protocol to allow the creation and consumption of queryable and interoperable Restful APIs in a simple and standard way” ([www.odata.org](http://www.odata.org)). In other words, it enables tools to use any REST/OData service by providing metadata describing the data provided, and standardizing the messages exchanged with the oData services.

A reporting tool like Tableau or Excel can discover what data and functionality is available in an oData service and provide a generic way for users to build new queries for the data.

**After completing this how-to you will know:**

*   How to create a Published OData service with Resources
*   How to add the OData server to Tableau and Excel
*   How to combine resources in Tableau
*   How to create custom queries

## 1. Preparation

Before you can start with this how-to, make sure you have completed the following prerequisites.

*   Get the **Company Expenses Demo** app from the **Mendix AppStore**.
*   Add some expense reports to it so you have data to work with in the how-to.
*   Install Excel 2013.
*   Download and install [Tableau](http://www.tableau.com/). You can use a trial version for 14 days.

## 2\. Creating a Published OData Service

A Published OData service can be used by third-party applications to read data from a Mendix application. In this chapter you will create and configure such a service.

1.  Open the **Mendix Modeler**.
2.  Add a new folder to the **Expenses** folder called **OData Services**.
3.  Right click the OData Service folder and select **Add > Published services > Published OData service**.
    ![](attachments/12879520/13402469.png)
4.  Enter the name **Expenses** and click **OK**.
    ![](attachments/12879520/13402471.png)
5.  Go to the Resources tab.
    ![](attachments/12879520/14385293.png)
6.  Click on **Add published resource**.

    In the Edit resource window you can select an Entity as data source for the OData Service. Security in OData is managed by the project security settings and entity level access rules. Therefore, if you have already configured access rules in your app, you don't have to configure it separately for OData.
    ![](attachments/12879520/14385294.png)
7.  Click **Select** and select the **Expense** entity.
    ![](attachments/12879520/13402475.png) 
8.  Change the **Exposed entity name** to _Expenses_.
    ![](attachments/12879520/14385295.png)
9.  Click the **Select **(exposed attributes and associations) button to select what values are exposed in the OData service.
    ![](attachments/12879520/14385212.png)
10.  Click **OK** to save the resource.
11.  **Repeat** steps 6 - 9 for both **ExpenseType** and **Employee** entities.
    ![](attachments/12879520/14385296.png)
12.  Click **OK** to save the OData service.

Restart the application, the OData service is now ready to be consumed.

## 3\. Working with Mendix Data in Excel 2013

1.  Open Excel and create a new blank workbook.
    ![](attachments/12879520/14385199.png)
2.  Open the **DATA** tab page and select **OData Feed** from the **Other Sources** menu.
    ![](attachments/12879520/14385200.png)
3.  Enter `http://localhost:8080/odata/Published_OData_service/Expenses` as **Location** of the data feed.
4.  Select **Use this name and password** and enter the **MxAdmin** credentials.
    ![](attachments/12879520/14385201.png)
5.  Click **Next**.
6.  Select **Expenses** in the tables selector and click **Finish**.
    ![](attachments/12879520/14385204.png)
7.  Select **Table** as Import method and click **OK**.
    ![](attachments/12879520/14385206.png)
8.  The data of the Mendix application should now be imported in Excel.
    ![](attachments/12879520/14385207.png)

## 4\. Working with Mendix Data in Tableau

In this exercise you will visualize data from the Company Expenses app in Tableau.

1.  Open **Tableau**.
2.  Go to **More Servers > OData**.
    ![](attachments/12879520/13402484.png)
3.  Enter `http://localhost:8080/odata/Published_OData_service/Expenses` as **Server** address.
4.  Select **Use a specific username and password** and enter the **MxAdmin** credentials.
    ![](attachments/12879520/13402486.png)
5.  Click **OK** to save the Server Connection. You should see the data source details:
    ![](attachments/12879520/14385170.png)
6.  Click the name of the server connection and change it to **Expenses** for readability.
    ![](attachments/12879520/14385171.png)

7.  Repeat step 2 - 6 to add a server connection for `http://localhost:8080/odata/Published_OData_service/Expenses`
8.  Repeat step 2 - 6 to add a server connection for `http://localhost:8080/odata/Published_OData_service/Expenses`
9.  **Open** Sheet1.
10.  Drag **Expense_Employee** and **Expense_ExpenseType** from **Measures** to **Dimensions**
    ![](attachments/12879520/14385174.png)
11.  Click **Edit Relationships...** to define the relation between the different data sources.
    ![](attachments/12879520/14385172.png)
12.  Select **Expenses** as **Primary data source** and select **Employee** as **Secondary data source**.
    ![](attachments/12879520/14385173.png)
13.  Switch from **Automatic** to **Custom** mapping and **remove** any default mappings.
14.  Click **Add...** to configure a field mapping.
    ![](attachments/12879520/14385175.png)
15.  Select **Expense_Employee** as primary data source field and **ID** as secondary field.
16.  Click **OK** to save the field mapping.
17.  Keep **Expenses** as **Primary data source** and select **ExpenseTypes** as **Secondary data source**.![](attachments/12879520/14385176.png)
18.  Switch from **Automatic** to **Custom** mapping and **remove** any default mappings.
19.  Click **Add...** to configure a field mapping
    ![](attachments/12879520/14385178.png)
20.  Select **Expense_ExpenseType** as primary data source field and **ID** as secondary field.
21.  Click **OK** to save the field mapping.
    ![](attachments/12879520/14385179.png)
22.  Click **OK** to save the Relationships.
23.  Select **Expenses** as data source and drag the **Amount** attribute from the **Measures** section to **Rows**.![](attachments/12879520/14385180.png)
24.  Select **Employees** as data source and drag the **FullName** attribute from the **Dimensions** section to **Columns**.
25.  Click the icon next to the ID attribute to use ID as linking field.
    ![](attachments/12879520/14385181.png)
26.  Select **ExpenseTypes** as data source and drag the **Name** attribute from the **Dimensions** section to **Color**.
27.  Click the icon next to the ID attribute to use ID as linking field.
    ![](attachments/12879520/14385184.png)

You should now see a stacked bar chart with data combined over multiple data sources.
![](attachments/12879520/14385183.png)

## 5\. Filtering Data With Query Parameters

By default all expenses are retrieved by Tableau, but Mendix allows you to add filters to the query so only the desired data is being retrieved.

1.  Right click data source **Expenses** and click **Edit Data Source...**![](attachments/12879520/14385192.png)
2.  Click the OData url to change the connection settings.
    ![](attachments/12879520/14385193.png)
3.  Add **?$top=3** to server url to only retrieve the first 3 expenses and click **OK**.
    ![](attachments/12879520/14385195.png)
4.  Open sheet1, you should now only see a stacked bar chart with only the data of 3 expenses.
    ![](attachments/12879520/14385196.png)
5.  You can combine filters by using the **&** character. Repeat steps 1 - 4 but now use `http://localhost:8080/odata/Expenses/Expenses?$skip=3&$top=3` as Server Url. You should now see a stacked bar chart showing data of expenses 4 to 6.

Other query examples are:

`[http://](http://localhost:8080/odata/Orders/Customers()?$top=100)[localhost:8080/odata/Expenses/Expenses(1688849860265137)](http://localhost:8080/odata/Orders/Customers()?$top=100)[http](http://localhost:8080/odata/Orders/Customers()?$top=100)[://localhost:8080/odata/Expenses/Expenses?$](http://localhost:8080/odata/Orders/Customers()?$top=100)[top=100](http://localhost:8080/odata/Orders/Customers()?$top=100)[http://localhost:8080/odata/](http://localhost:8080/odata/Orders/Customers()?$skip=10&$top=10)[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)[?$skip=10&$](http://localhost:8080/odata/Orders/Customers()?$skip=10&$top=10)[top=10](http://localhost:8080/odata/Orders/Customers()?$skip=10&$top=10)[http://localhost:8080/odata/](http://localhost:8080/odata/Orders/Customers/$count)[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)[/$](http://localhost:8080/odata/Orders/Customers/$count)[count](http://localhost:8080/odata/Orders/Customers/$count)<a rel="nofollow">http://localhost:8080/odata/</a>[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)<a rel="nofollow">?$</a><a rel="nofollow">filter=Firstname+eq+'Ivan</a>'<a rel="nofollow">http://localhost:8080/odata/</a>[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)<a rel="nofollow">?$</a><a rel="nofollow">filter=Firstname+ne+'Ivan</a>'<a rel="nofollow">http://localhost:8080/odata/</a>[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)<a rel="nofollow">?$</a><a rel="nofollow">filter=DateOfBirth+gt+datetime'1995-01-01T00:00:00</a>'<a rel="nofollow">http</a><a rel="nofollow">://localhost:8080/odata/</a>[Expenses/Expenses](http://localhost:8080/odata/Orders/Customers%28%29?$top=100)<a rel="nofollow">?$</a><a rel="nofollow">filter=DateOfBirth+gt+datetime'2005-01-01T00:00:00</a><a rel="nofollow">'&$</a><a rel="nofollow">orderby=DateOfBirth</a>`

## 6\. Related content

*   [Expose a web service](exposing-a-web-service)
*   [Consume a Simple Web Service](consuming-a-simple-web-service)
*   [Consume a Complex Web Service](consuming-a-complex-web-service)
*   [Published OData Services](/refguide5/published-odata-services)
*   [OData Representation](/refguide5/odata-representation)
*   [OData Query Options](/refguide5/odata-query-options)
