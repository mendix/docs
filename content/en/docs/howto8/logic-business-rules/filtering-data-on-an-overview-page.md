---
title: "Filter Data on an Overview Page Using XPath"
linktitle: "Filter Data Using XPath"
url: /howto8/logic-business-rules/filtering-data-on-an-overview-page/
---

## Introduction

To filter data on your page, you can use the search bar functionality, or you can add an XPath constraint to your data grid. The search bar contains search fields that allow the end-user to quickly find the information they need. XPath is a hard-coded constraint on your data grid that filters the data.

This how-to will start with preparing a data structure and some example data. After this setup, you will filter your data with a search bar. Then you will filter your data using different XPath constraints.

This how-to serves as a comparison for filtering data and emphasizes how to use XPath for the filtering.

This how-to teaches you how to do the following:

* Prepare the data structure
* Prepare the GUI
* Prepare the data
* Filter a list using the search bar
* Filter a list using XPath

## Prerequisites - Preparing the Data Structure, GUI, and Example Data

To see the results of this how-to, it is necessary that you set up a test project with test data.

Before you continue, make sure that you know how to create the following:

* Domain models (for more information, see [How to Create a Basic Data Layer](/howto8/data-models/create-a-basic-data-layer/))
* Overview and detail pages (for more information, see [How to Create Your First Two Overview and Detail Pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/))
* Menu items (for more information, see [How to Set Up the Navigation Structure](/howto8/general/setting-up-the-navigation-structure/))

1. Create the following domain model:

    {{< figure src="/attachments/howto8/logic-business-rules/define-access-rules-using-xpath/18581378.png" class="no-border" >}}

2. Create **overview** and **detail** pages to manage objects of type **Customer** and **Order**.
3. Create **menu items** to access the **Order** and the **Customer** overview pages.
4. Add the following customer data to your app:

    {{< figure src="/attachments/howto8/logic-business-rules/define-access-rules-using-xpath/18581374.png" class="no-border" >}}

5. Add the following order data to your app:

    {{< figure src="/attachments/howto8/logic-business-rules/define-access-rules-using-xpath/18581373.png" class="no-border" >}}

## Filtering a List of Orders Using the Search Bar

In the previous section you set up a basic data structure and created some sample data. In this section you will add search fields to the search bar to allow the user to filter data on your overview page. In the examples you will filter on the order status and on a minimum price.

1. Open your **orders overview** and right click the (empty) section above the **Search** button.

    {{% alert color="warning" %}} The search bar section might be already populated if you automatically filled the contents of your data grid. {{% /alert %}}

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581359.png" class="no-border" >}}

2. Right click the search bar section and select **Add search field** > **Drop-down**.
3. Add the **OrderStatus** attribute to the search field and define the name.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581355.png" class="no-border" >}}

4. Redeploy your application and click the **Search** button on your orders overview. The new search field appears.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581354.png" class="no-border" >}}

5. Use the **Order status** search field to filter your list on a specific order status and click the 'Search' button on the right side.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581353.png" class="no-border" >}}

6. To filter on a minimum price, add another search field by selecting **Add search field** > **Comparison**.
7. Select the **TotalPrice** attribute, name the search field **Minimum total price** and change the **Comparison** from **Contains** to **Greater or equal.**

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581351.png" class="no-border" >}}

8. Redeploy your application and enter 50 in your newly added search field. Your list will be filtered to only show orders with a minimum value of 50.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581350.png" class="no-border" >}}

## Filtering a List of Orders with the "Open" Status Using XPath 

In the previous section you used the search bar to filter data on your overview page. Now you will add an XPath constraint on the Orders data grid. With an XPath constraint on a data grid you can (hard coded) filter the objects shown in the list. Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations. To learn more about XPath, see [XPath Constraints](/refguide8/xpath-constraints/). In this section you will constrain the data grid so it will only display orders with status 'Open'.

1. Select the **Order** data grid and in the **Properties** pane on the right, change **Data source** > **Type** to **XPath**, and then click the **XPath Constraint** field:

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581372.png" class="no-border" >}}

2. Enter the following expression in the **XPath Constraint** editor: `[OrderStatus = ‘Open’]`. The data grid will now only show orders with status ‘Open’. 

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581371.png" class="no-border" >}}

3. Run your application to see the following result set:

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581370.png" class="no-border" >}}

## Filtering a List of Orders on the Minimum Total Price Using XPath

In the previous section you have constraint the data grid on status 'Open'. In this section we will change the constraint to ensure that the data grid will only show orders with a minimum value of 50.00.

1. Select the **Order** data grid and in the **Properties** pane on the right, click the **XPath Constraint** field and enter the following expression: `[TotalPrice >= 50]`.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581367.png" class="no-border" >}} 

2. If you run your application you will see the following result set.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581368.png" class="no-border" >}}

## Combining Constraints Using XPath

In the previous two sections you used single constraints to filter the data grid on status and minimum total price. In this section you will combine those two constraints. Combination can be made with logical operator **AND** and **OR**.

1. To constrain the results in the order overview to only the **Open** orders *or* orders with a minimum price of 50.00, you have to insert an `or` statement in the XPath constraint: `[OrderStatus = 'Open'] or [TotalPrice >= 50]`.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581366.png" class="no-border" >}}

2. Run your application to see all the orders with the order status 'Open' or with a total price higher or equal to 50.

    {{< figure src="/attachments/howto8/logic-business-rules/define-access-rules-using-xpath/18581373.png" class="no-border" >}}

3. To constrain the results in the order overview to only the **Open** orders *and* orders with a minimum price of 50.00, you have to insert an `and` statement in the XPath constraint: `[OrderStatus = 'Open'] and [TotalPrice >= 50]`.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581365.png" class="no-border" >}}

4. Run your application to see orders which are 'Open' and have a minimum total price of 50.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581364.png" class="no-border" >}}

## Filtering the Order List with Attributes of Associated Customers Using XPath

In the previous section you have constrained the data grid on attributes of the same entity as the data grid entity. In this section you will constrain on attributes over an associated object. In the example of this section you will filter the orders by their associated customers based on the city letter of the customer. 

1. To constrain the results in the order overview to only orders from customers in Rotterdam, enter the following XPath into the **XPath Constraint** editor: `[Sales.Order_Customer/Sales.Customer/City = 'Rotterdam']`.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581363.png" class="no-border" >}}

2. Run your application to only see the orders of customers in Rotterdam.

    {{< figure src="/attachments/howto8/logic-business-rules/filtering-data-on-an-overview-page/18581362.png" class="no-border" >}}

## Read More

* [XPath Constraints](/refguide8/xpath-constraints/)
