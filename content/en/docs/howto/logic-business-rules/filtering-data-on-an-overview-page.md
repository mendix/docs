---
title: "Filter Data on an Overview Page Using XPath"
linktitle: "Filter Data Using XPath"
url: /howto/logic-business-rules/filtering-data-on-an-overview-page/
category: "Logic & Business Rules"
weight: 150
tags: ["filter", "xpath"]
---

## 1 Introduction

To filter data on your page, you can use the search bar functionality, or you can add an XPath constraint to your data grid. The search bar contains search fields that allow end-users to quickly find the information they need. XPath is a hard-coded constraint on your data grid that filters the data.

This how-to will start with preparing a data structure and some example data. After this setup, you will filter your data with a search bar. Then you will filter your data using different XPath constraints.

This how-to compares two different ways of filtering data and emphasizes how to use XPath to filter data.

This how-to will teach you how to do the following:

* Prepare the data structure
* Prepare the GUI
* Prepare the data
* Filter data using the search bar
* Filter data using XPath

## 2 Prerequisites - Preparing the Data Structure, GUI, and Example Data

To see the results of this how-to, it is necessary that you set up a test app with test data.

Before you continue, make sure that you know how to create the following:

* Domain models (for more information, see [How to Create a Basic Data Layer](/howto/data-models/create-a-basic-data-layer/))
* Overview and detail pages (for more information, see [How to Create Your First Two Overview & Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/))
* Menu items (for more information, see [How to Set Up the Navigation Structure](/howto/general/setting-up-the-navigation-structure/))

1. Create the following domain model:

    {{< figure src="/attachments/howto/logic-business-rules/define-access-rules-using-xpath/18581378.png" >}}

2. Create overview and detail pages to manage the **Customer** and the **Order** entities and their objects.
3. Create menu items to access the **Customer** and the **Order** overview pages.
4. Add the following customer data to your app:

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581376.png" width="800px" >}}

5. Add the following order data to your app:

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581375.png" width="800px">}}

## 3 Filtering the Orders List Using the Search Bar

In the previous section, you have set up a basic data structure and created some sample data. In this section, you will add search fields to the search bar to allow users to filter data on overview pages. You will filter order data by their order status and by a minimum order price.

1. Open your **Orders** overview page and right-click the (empty) section above the **Search** button.

    {{% alert color="warning" %}} The search bar section might already be populated if you automatically filled the contents of your data grid. {{% /alert %}}

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581359.png" width="800px">}}

2. Right-click the search bar section and select **Add search field** > **Drop-down**.
3. Add the **OrderStatus** attribute to the search field and enter *Order status* for the **Caption**.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581355.png" width="800px">}}

4. Run your application and click the **Search** button on your **Orders** overview page. The new search field appears.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581354.png" width="800px">}}

5. Use the **Order status** search field to filter your list by order status and click the **Search** button on the right side.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581353.png" width="800px">}}

6. To filter order data by a mimimum total price, add another search field by selecting **Add search field** > **Comparison**.
7. Select the **TotalPrice** attribute, set **Comparison** to **Greater or equal**, and change the **Caption** to *Minimum total price*.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581351.png" width="800px">}}

8. Run your application and enter *50* in your newly added search field. Your list will be filtered to only show orders with a minimum value of 50.00.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581350.png" width="800px">}}

## 4 Filtering the Orders List by Order Status Using XPath 

In the previous section, you used the search bar to filter data on the **Orders** overview page. Now you will add an XPath constraint on the **Orders** data grid. With an XPath constraint on a data grid you can (hard codedly) filter the objects shown in the list. Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations. To learn more about XPath, see [XPath Constraints](/refguide/xpath-constraints/). In this section, you will constrain the data grid so that it will only display orders with the status 'Open'.

1. Select the **Orders** data grid to open its **Properties** pane.
2. Change **Data source** > **Type** to **XPath** and then click the **XPath Constraint** field:

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581372.png" width="800px">}}

3. Enter the following expression in the **XPath Constraint** editor: `[OrderStatus = ‘Open’]`. The data grid will now only show orders with the status ‘Open’. 

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581371.png" width="800px">}}

4. Run your application to see the following result set:

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581370.png" width="800px">}}

## 5 Filtering the Orders List by Minimum Total Price Using XPath

In the previous section, you have constrained the data grid on orders with the status 'Open'. In this section, you will change the constraint to ensure that the data grid will only show orders with a minimum value of 50.00.

1. Select the **Orders** data grid to open its **Properties** pane.
2. Click the **XPath Constraint** field and enter the following expression: `[TotalPrice >= 50]`.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581367.png" width="800px">}} 

3. Run your application to see the following result set:

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581368.png" width="800px">}}

## 6 Combining Constraints Using XPath

In the previous two sections, you used single constraints to constrain the data grid on order status and minimum total price. In this section, you will combine those two constraints. Combination can be made with logical operators **AND** and **OR**.  

1. To constrain the results in the orders list to either the 'Open' orders or orders with a minimum price of 50.00, you have to insert an `or` statement in the XPath constraint: `[OrderStatus = 'Open'] or [TotalPrice >= 50]`.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581366.png" width="800px">}}

2. Run your application to see orders which are either 'Open' or have a total price higher than or equal to 50.00.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581375.png" width="800px">}}

3. To constrain the results in the orders list to orders which are 'Open' and have a minimum price of 50.00, you have to insert an `and` statement in the XPath constraint: `[OrderStatus = 'Open'] and [TotalPrice >= 50]`.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581365.png" width="800px">}}
    
4. Run your application to see orders which are 'Open' and have a minimum total price of 50.00.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581364.png" width="800px">}}

## 7 Filtering the Orders List by Attributes of Associated Customers Using XPath

In the previous section, you have constrained the data grid on attributes of the same entity as the data grid entity. In this section, you will constrain the data grid on attributes of an associated object. In the following example you will filter the orders by cities where associated customers are from.

1. To constrain the results in the orders list to only orders from customers in Rotterdam, enter the following XPath into the **XPath Contraint** editor: `[Sales.Order_Customer/Sales.Customer/City = 'Rotterdam']` (Note that in this XPath, **MyFirstModule** has been renamed to *Sales*).

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581363.png" width="800px">}}

2. Run your application to only see the orders from customers in Rotterdam.

    {{< figure src="/attachments/howto/logic-business-rules/filtering-data-on-an-overview-page/18581362.png" width="800px">}}

## 8 Read More

* [XPath Constraints](/refguide/xpath-constraints/)
