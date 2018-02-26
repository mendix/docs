---
title: "Filter Data on an Overview Page"
category: "UX"
tags: []
---

## 1 Introduction

To filter data on your page, you can use the search bar functionality, or you can add an XPath constraint to your data grid. The search bar contains search fields that allow the end-user to quickly find the information he or she needs. XPath is a hard-coded constraint on your data grid that filters the data.

This how-to will start with preparing a data structure and some example data. After this setup, you will filter your data with a search bar. Then you will filter your data using different XPath constraints. 

**This how-to will teach you how to do the following:**

* Prepare the data structure
* Prepare the GUI
* Prepare the data
* Filter a list using the search bar
* Filter a list using XPath

## 2 Prerequisites - Preparing the Data Structure, GUI, and Example Data

To see the results of this how-to, it is necessary that you set up a test project with test data.

Before you continue, make sure that you know how to create the following:

* **Domain models**, if you need more info, take a look at this [how-to](../data-models/create-a-basic-data-layer).
* **Overview and detail pages**, if you need more info, take a look at this [how-to](create-your-first-two-overview-and-detail-pages).
* **Menu items**, if you need more info, take a look at this [how-to](setting-up-the-navigation-structure).

1.  Create the following domain model:
    ![](attachments/18448705/18581378.png)
2.  Create **overview** and **detail** pages to manage objects of type **Customer** and **Order**.
3.  Create **menu items** to access the **Order** and the **Customer** overview pages.
4.  Add the following customer data to your app:
    ![](attachments/18448705/18581374.png)
5.  Add the following order data to your app:
    ![](attachments/18448705/18581373.png)

## 4 Filtering a List of Orders Using the Search Bar

In the previous section you set up a basic data structure and created some sample data. In this section you will add search fields to the search bar to allow the user to filter data on your overview page. In the examples you will filter on the order status and on a minimum price.

1.  Open your **orders overview** and right click on the (empty) section above the **Search **button.

    {{% alert type="warning" %}}

    The search bar section might be already populated if you automatically filled the contents of your data grid.

    {{% /alert %}}

    ![](attachments/18448705/18581359.png)

2.  Right click on the search bar section and select **Drop-down**.
    ![](attachments/18448705/18581358.png)

3.  Add the **OrderStatus** attribute to the search field and define the name.
    ![](attachments/18448705/18581355.png)

4.  Redeploy your application and click on the **Search** button on your orders overview. The new search field appears.
    ![](attachments/18448705/18581354.png)

5.  Use the **Order status** search field to filter your list on a specific order status and click the 'Search' button on the right side.
    ![](attachments/18448705/18581353.png)

6.  To filter on a minimum price, add another search field to your orders overview of type **Comparison**.
    ![](attachments/18448705/18581352.png)

7.  Select the **TotalPrice** attribute, name the search field **Minimum total price** and change the **Comparison** from **Contains** to **Greater or equal.**
    ![](attachments/18448705/18581351.png)

8.  Redeploy your application and enter 50 in your newly added search field. Your list will be filtered to only show orders with a minimum value of 50.
    ![](attachments/18448705/18581350.png)

## 5 Filtering a List of Orders with the "Open" Status Using XPath 

In the previous section you used the search bar to filter data on your overview page. Now you will add an XPath constraint on the Orders data grid. With an XPath constraint on a data grid you can (hard coded) filter the objects shown in the list. Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations. To learn more about XPath, see [XPath Constraints](/refguide7/xpath-constraints). In this section you will constrain the data grid so it will only display orders with status 'Open'.

1.  **Select** the **Order data grid** and click the **XPath constraint** field at the **Properties** section on the right.
    ![](attachments/18448705/18581372.png)
2.  Enter the following expression in the XPath Constraint window: _[OrderStatus = 'Open']_. The data grid will now only show orders with status 'Open'.
    ![](attachments/18448705/18581371.png)
3.  Run your application to see the following result set:
    ![](attachments/18448705/18581370.png)

## 6 Filtering a List of Orders on the Minimum Total Price Using XPath

In the previous section you have constraint the data grid on status 'Open'. In this section we will change the constraint to ensure that the data grid will only show orders with a minimum value of 50.00.

1.  **Select** the **Order** **data grid** and Open the **XPath constraint** field at the **Properties** section again and enter the following expression: _[TotalPrice >= 50]_.
    ![](attachments/18448705/18581367.png) 
2.  If you run your application you will see the following result set.
    ![](attachments/18448705/18581368.png)

## 7 Combining Constraints Using XPath

In the previous two sections you used single constraints to filter the data grid on status and minimum total price. In this section you will combine those two constraints. Combination can be made with logical operator **AND** and **OR**.  

1.  To constrain the results in the order overview to only the 'Open' orders _**or**_ of a minimum price of a 50.00, you have to insert an _OR_ statement to the XPath in the 'XPath Contraint' box:
    _[OrderStatus = 'Open']_
    _or_
    _[TotalPrice >= 50]_
    ![](attachments/18448705/18581366.png)
2.  Run your application to see all the orders with the order status 'Open' or with a total price higher or equal to 50.
    ![](attachments/18448705/18581373.png)
3.  To constrain the results in the order overview to only orders which are 'Open' _**and**_ have a minimum total price of 50, add an 'and' statement to the XPath in the 'XPath Contraint' box.
    _[OrderStatus = 'Open']_
    _and_
    _[TotalPrice >= 50]_
    ![](attachments/18448705/18581365.png)
4.  Run your application to see orders which are 'Open' and have a minimum total price of 50.
    ![](attachments/18448705/18581364.png)

## 8 Filtering the Order List with Attributes of Associated Customers Using XPath

In the previous section you have constrained the data grid on attributes of the same entity as the data grid entity. In this section you will constrain on attributes over an associated object. In the example of this section you will filter the orders by their associated customers based on the city letter of the customer. 

1.  To constrain the results in the order overview to only the orders from customers in Rotterdam enter the following XPath into the 'XPath Contraint' box:
    _[Sales.Order_Customer/Sales.Customer/City = 'Rotterdam']_
    ![](attachments/18448705/18581363.png)
2.  Run your application to only see the orders of customers in Rotterdam.
    ![](attachments/18448705/18581362.png)

## 9 Related Content

*   [Scout and Windows 10 Workaround](scout-and-windows-10-workaround)
*   [Layouts and Snippets](layouts-and-snippets)
*   [Setup Mendix UI Framework with just CSS](setup-mendix-ui-framework-with-just-css)
*   [Setting Up the Navigation Structure](setting-up-the-navigation-structure)
*   [Setup Mendix UI Framework](setup-mendix-ui-framework)
*   [Setup Mendix UI Framework with Koala](setup-mendix-ui-framework-with-koala)
*   [Creating your first two Overview and Detail pages](create-your-first-two-overview-and-detail-pages)
*   [Finding the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
*   [XPath Constraints](/refguide7/xpath-constraints)
