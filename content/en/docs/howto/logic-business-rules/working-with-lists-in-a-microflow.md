---
title: "Work with Lists in a Microflow"
url: /howto/logic-business-rules/working-with-lists-in-a-microflow/
category: "Logic & Business Rules"
weight: 60
description: "Teaches you how to work with a list of objects in a microflow as well retrieve a filtered list of objects from the database."
tags: ["microflow", "logic", "list"]
---

## 1 Introduction

Enrich your microflow by using a list. A list consists of entities of the same type, filtered by using an XPath constraint. For example, you can configure your microflow to retrieve a list of fulfilled orders from the database. You can then further process this data, for example, by calculating the total value of those orders.

This how-to will teach you how to do the following:

* Retrieve a filtered list of objects from the database
* Iterate over a list of objects
* Calculate the total list value by using a variable and a loop
* Calculate the total list value by using an aggregate function

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

1.  Create a [domain model](/howto/data-models/create-a-basic-data-layer/) with the following entities:
    * *Customer*
        | Attribute name | Attribute type |
        | --- | --- |
        | *CustomerID* | String |
        | *Name*| String |
        | *Address* | String |
        | *ZipCode* | String |
        | *City* | String |
    * *Order*
       | Attribute name | Attribute type |
       | --- | --- |
       | *Number* | Integer |
       | *Date* | Date and time |
       | *TotalPrice* | Decimal |
       | *OrderStatus* | Enumeration |

    One Customer entity can be associated with many Orders, so set the association between the entities accordingly.

    {{< figure src="/attachments/howto/logic-business-rules/define-access-rules-using-xpath/18581378.png" alt="Customer and Order entities with one-to-many association" >}}

2.  Create [overview and detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/) to manage Customer and Order objects.
3.  Create [menu items](/howto/general/setting-up-the-navigation-structure/) to access Customer and Order overview pages.
4.  Add the following customer data to your app:
    | Name | Address | Zip code | City |
    | --- | --- | --- | --- |
    | Olav | Gedempte Zalmhaven 34 | 3050 TE | Rotterdam |
    | Tim | Kornoeljestraat 14 | 2514 RT | Den Haag |
    | Peter | Meloenstraat 123 | 2565 PE | Den Haag |
    | Harry | Emmerreklaan 25 | 1458 PE | Utrecht |

5.  Add the following order data to your app:
    | Number | Customer | Date | Total price | Order status |
    | --- | --- | --- | --- | --- |
    | 1 | Harry | 1/28/2022 | 345.00 | Open |
    | 2 | Olav | 12/30/2021 | 1234.60 | Processing |
    | 3 | Peter | 1/5/2022 | 23.60 | Open |
    | 4 | Tim | 1/4/2022 | 586.90 | Complete |
    | 5 | Olav | 1/21/2022 | 25.60 | Open |
    | 6 | Peter | 1/16/2022 | 154.00 | Complete |

## 3 Retrieving a Filtered List of Objects from the Database

Use a microflow with a **Retrieve from database** activity to retrieve a list of objects, and then filter that list by applying an [XPath constraint](refguide/xpath-constraints/). For example, the microflow can retrieve all orders from the database, and then filter that list to only the orders with the Processing status.

1.  Create a new microflow by right-clicking your module and selecting **Add** > **Microflow**.
2.  In the **Add Microflow** dialog box, enter *Microflow _IVK_SetOrderToComplete_*, and then click **OK**.
4.  On the **Orders** overview page, add an **Action** button to the toolbar.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581118.png" alt="Adding the Action button" >}}

5.  Double-click the action button and change the **Caption** to *Set Processing to Complete*.
6.  In the **On click** list, select **Call a microflow**, and then select the **IVK_SetOrderToComplete** microflow.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581054.png" alt="Selecting the caption and microflow" >}}

7.  Open the **IVK_SetOrderToComplete** microflow by right-clicking the new button and selecting **Go to microflow**.
8.  Open the **Toolbox** and search for the **Retrieve** action.
9.  Drag a **Retrieve** action from the **Toolbox** to the line between the start and end events.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581091.png" alt="A view of the microflow with the Retrieve activity" >}}

10. Double-click the **Retrieve** action activity to open its properties.
11. Set the following properties:
    * **Source** – select **From database**
    * **Entity** – select **Order**
    * **List** – enter *OrderList*
12.  To filter the list to only orders with the status **Processing**, in the **XPath constraint** field, add the following XPath expression: *[OrderStatus = 'Processing']*.

 {{% alert color="info" %}}Apart from filtering the list of orders on by an attribute of the Order entity itself, you can also define a constraint by using attributes of an associated entity, such as Customer. For example, to filter the orders based on the city where the customer is located, apply the following constraint: *Sales.Order_Customer/Sales.Customer/City = 'Rotterdam'*.
{{% /alert %}}

## 4 Iterating Over a List of Objects

After retrieving a list of orders with the status Processing, use a [loop](/refguide/loop/) to iterate over this list and change the status of each object to Complete.

1.  Open the **IVK_SetOrderToComplete** microflow that you created in the previous section.
2.  Drag a **Loop** action from the **Toolbox** and place it between the **OrderProcessingList** action activity, and the end event of the microflow.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581086.png" alt="Microflow with a Retrieve activity followed by a Loop activity" >}}

3. Double-click the **Loop** activity.
4. In the **Iterate over** list, select **OrderList**, and then click **OK**.
5. Drag a **Change object** activity into the **Loop** activity.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581084.png" alt="A Change object activity placed inside a Loop activity" >}}

6.  Double-click the **Change object** activity.
7.  In the **Object** list, select **IteratorOrder**, and then click **New**.
8. In the **Edit Change Item** dialog box, configure the following settings:
    * **Member** – select **OrderStatus**
    * **Value** – enter *MyFirstModule.OrderStatus.Complete*
9. Click **OK**, and then click **OK** again.
10. Drag a **Commit** action from the **Toolbox** and place it after the **Loop** activity.
11. Double-click the **Commit** activity.
12. In the **Commit Object(s)** dialog box, configure the following settings:
    * **Object or List** – select **OrderList**
    * **Refresh in Client** – set to **Yes**. This settings refreshes your list in the client so that your changes are visible.
13. Click **OK**, and then save the microflow.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/working-with-lists-optimization.jpg" alt="A microflow configured to iterate over a list" >}}

11. Redeploy your application.
12. On the **Orders** overview page, click **Set Processing to Complete**.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581113.png" alt="Setting the order status to Complete" >}}

## 5 Calculating the Total List Value by Using a Variable and a Loop

To calculate the total sum of all your orders via a loop, create a variable which will be modified by every iteration of the loop.  

1.  On the **Orders** overview page, add a new **Call microflow** button with the following settings:
    * **Caption** – enter *Calculate Total Order Price*
    * **Name** – enter *IVK_CalculateTotalPriceOrders*
2.  In the *IVK_CalculateTotalPriceOrders* microflow, add a **Retrieve** action from the **Toolbox** to the line between the start and end events.

3. Double-click the **Retrieve** action activity to open its properties.
4. Set the following properties:
    * **Source** – select **From database**
    * **Entity** – select **Order**
    * **List** – enter *OrderList*
5. Drag a **Loop** action from the **Toolbox** and place it between the **Retrieve** action activity, and the end event of the microflow.
6. Double-click the **Loop** activity.
7. In the **Iterate over** list, select **OrderList**, and then click **OK**.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581106.png" alt="Configuring the Loop activity to iterate over a list" >}}

8.  Drag a **Create variable** action from the **Toolbox** and place it before the **Retrieve** action activity.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581073.png" alt="A microflow with a Create variable activity" >}}

9.  Double-click the **Create variable** activity and configure the following settings:
    * **Data type** – select **Decimal**
    * **Value** – enter *0*
    * **Variable** – enter *CalculatedTotalPrice*

        {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/variable.png" alt="Configuring the Create variable activity" >}}
    
10.  Drag a **Change variable** activity into the **Loop** activity.
14. Click **OK**, and then save the microflow.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581063.png" alt="A microflow configured to calculate total list value with a loop" >}}

15.  Redeploy your application.
16. On the **Orders** overview page, click **Calculate total order price**.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581103.png" alt="Calculating the total price" >}}

## 6 Calculating the Total List Value by Using an Aggregate Function

Instead of a loop, you can also calculate the total price by using the [aggregate list](/refguide/aggregate-list/) function. Use the aggregate list to calculate values such as the maximum, minimum, sum, average, and total number of objects over a list of objects.

1.  In the **IVK_CalculateTotalPriceOrders** microflow, remove the loop and the **CalculatedTotalPrice** variable.
2.  Add an **Aggregate list** activity after the **OrderList**.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581061.png" alt="Adding an Aggregate list activity" >}}

3.  Double-click the **Aggregate list** activity, and then set the following properties:
    * **List** – select **OrderList**
    * **Function** – select **Sum**
    * **Attribute** – select **TotalPrice**
    * **Variable** – enter a descriptive name, for example, *SumTotalPrice*
4.  Click **OK**.
5.  Double-click the **Show message** activity.
6. In the **Parameters** section, delete the *$CalculatedTotalPrice* variable, and then add the *$SumTotalPrice* variable.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581055.png" alt="Configuring the Show message activity" >}}

6.  Click **OK**, and then save the microflow.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581058.png" alt="A microflow configured to calculate the total list value with aggregates" >}}

7.  Redeploy your application.
8.  On the **Orders** overview page, click **Calculate total order price**.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581103.png" alt="Calculating the total price" >}}

## 7 Read More

*   [Defining access rules using XPath](/howto/logic-business-rules/define-access-rules-using-xpath/)
*   [Optimizing Retrieve Activities](/howto/logic-business-rules/optimizing-retrieve-activities/)
