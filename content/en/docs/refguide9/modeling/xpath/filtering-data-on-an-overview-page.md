---
title: "Filtering Data on an Overview Page Using XPath"
linktitle: "Filter Data Using XPath"
url: /refguide9/filtering-data-on-an-overview-page/
weight: 5
description: "Describes how to filter data using different XPath constraints."
aliases:
    - /howto9/logic-business-rules/filtering-data-on-an-overview-page/
---

## Introduction

To filter data on your page, you can use the search bar functionality, or you can add an XPath constraint to your data grid. The search bar contains search fields that allow end-users to quickly find the information they need. XPath is a hard-coded constraint on your data grid that filters the data.

This how-to will start with preparing a data structure and some example data. After this setup, you will filter your data with a search bar. Then you will filter your data using different XPath constraints.

This how-to compares two different ways of filtering data and emphasizes how to use XPath to filter data.

This how-to teaches you how to do the following:

* Prepare the data structure
* Prepare the GUI
* Prepare the data
* Filter data using the search bar
* Filter data using XPath

## Prerequisites

For this how-to, it is necessary that you set up a test app with test data. To do so, follow these steps:

1. Follow the guide [Creating a Basic Data Layer](/refguide9/create-a-basic-data-layer/) and create the following domain model:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581378.png" class="no-border" >}}

2. [Create overview and detail pages](/howto9/front-end/create-your-first-two-overview-and-detail-pages/) to manage the **Customer** and the **Order** entities and their objects.
3. [Create menu items](/refguide9/setting-up-the-navigation-structure/#menu-items) to access the **Customer** and the **Order** overview pages.
4. Add the following customer data to your app:

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/example-customers-data.png" width="500px" class="no-border" >}}

5. Add the following order data to your app:

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/example-orders-data.png" width="500px" class="no-border" >}}

## Filtering the Orders List Using the Search Bar

In the previous section, you set up a basic data structure and created some sample data. In this section, you add search fields to the search bar to allow end-users to filter data on overview pages. You filter order data by their order status and by a minimum order price.

1. Open your **Orders** overview page and you can see the (empty) section above the **Search** button.

    {{% alert color="warning" %}} The search bar section might already be populated if you automatically filled the contents of your data grid. {{% /alert %}}

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/empty-search-bar-section.png" width="500px" class="no-border" >}}

2. Right-click the (empty) search bar section and select **Add search field** > **Drop-down**.
3. Add the **OrderStatus** attribute to the search field and enter *Order status* for the **Caption**.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/create-search-field-order-status.png" width="500px" class="no-border" >}}

4. Run your application locally and click **Search** on your **Orders** overview page. The new search field appears.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-status-search-field.png" width="500px" class="no-border" >}}

5. Use the **Order status** search field to filter your list by order status and click **Search** on the right side.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status.png" width="500px" class="no-border" >}}

6. To filter order data by a minimum total price, add another search field by selecting **Add search field** > **Comparison**.
7. Select the **TotalPrice** attribute, set **Comparison** to **Greater or equal**, and change the **Caption** to *Minimum total price*.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/create-search-field-minimum-total-price.png" width="500px" class="no-border" >}}

8. Run your application locally and enter *50* in your newly added search field. Your list is now filtered to only show orders with a minimum value of 50.00.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-minimum-price-50.png" width="500px" class="no-border" >}}

## Filtering the Orders List by Order Status Using XPath 

In the previous section, you used the search bar to filter data on the **Orders** overview page. In this section, you add an XPath constraint on the **Orders** data grid. With an XPath constraint on a data grid you can filter (in a hard-coded way) the objects shown in the list. Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations. To learn more about XPath, see [XPath Constraints](/refguide9/xpath-constraints/). In the following example, you constrain the data grid using XPath so that the data grid only displays orders with the status **Open**. 

1. Select the **Orders** data grid to open its **Properties** pane.
2. Change **Data source** > **Type** to **XPath** and then click the **XPath Constraint** field:

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/open-XPath-constraint.png" width="400px" class="no-border" >}}

3. Enter the following expression in the **XPath Constraint** editor: `[OrderStatus = ‘Open’]`. The data grid now only shows orders with the status **Open**. 

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status.png" width="600px" class="no-border" >}}

4. Run your application to see the following result set:

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status-using-XPath.png" width="500px" class="no-border" >}}

## Filtering the Orders List by Minimum Total Price Using XPath

In the previous section, you constrained the data grid on orders with the status **Open**. In this section, you change the constraint to ensure that the data grid only shows orders with a minimum value of 50.00.

1. Select the **Orders** data grid to open its **Properties** pane.
2. Click the **XPath Constraint** field and enter the following expression: `[TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-minimun-price-50.png" width="600px" class="no-border" >}} 

3. Run your application locally to see this result set:

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-minimum-price-50-using-XPath.png" width="500px" class="no-border" >}}

## Combining Constraints Using XPath

In the previous two sections, you used single constraints to constrain the data grid on order status and minimum total price. In this section, you combine those two constraints with logical operators **AND** and **OR**.

1. To constrain the results in the orders list to either the **Open** orders or orders with a minimum price of 50.00, you have to insert an `or` statement in the XPath constraint: `[OrderStatus = 'Open'] or [TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status-or-minimum-price-50.png" width="600px" class="no-border" >}}

2. Run your application locally to see orders which are either **Open** or have a total price higher than or equal to 50.00.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/example-orders-data.png" width="500px" class="no-border" >}}

3. To constrain the results in the orders list to orders which are **Open** and have a minimum price of 50.00, you have to insert an `and` statement in the XPath constraint: `[OrderStatus = 'Open'] and [TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status-and-minimum-price-50.png" width="600px" class="no-border" >}}
    
4. Run your application locally to see orders which are **Open** and have a minimum total price of 50.00.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status-and-minimum-price-50.png" width="500px" class="no-border" >}}

## Filtering the Orders List by Attributes of Associated Customers Using XPath

In the previous section, you constrained the data grid on attributes of the same entity as the data grid entity. In this section, you constrain the data grid on attributes of an associated object. In the following example, you filter the orders by cities where associated customers are from.

1. To constrain the results in the orders list to only orders from customers in Rotterdam, enter the following XPath into the **XPath Constraint** editor: `[Sales.Order_Customer/Sales.Customer/City = 'Rotterdam']` (Note that this XPath assumes that **MyFirstModule** has been renamed to **Sales** in the app explorer).

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-Rotterdam-customers.png" width="600px" class="no-border" >}}

2. Run your application locally to only see the orders from customers in Rotterdam.

    {{< figure src="/attachments/refguide9/modeling/xpath/filtering-data-on-an-overview-page/order-list-Rotterdam-customers.png" width="500px" class="no-border" >}}

## Read More

* [Defining Access Rules Using XPath](/refguide9/define-access-rules-using-xpath/)
