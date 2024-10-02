---
title: "Working with Lists in a Microflow"
url: /refguide/working-with-lists-in-a-microflow/
weight: 60
description: "Describes how to work with a list of objects in a microflow as well retrieve a filtered list of objects from the database."
---

## Introduction

In this document, you will learn how to enrich the data management capabilities of your microflow by using a list. A list consists of objects of the same type, which can be filtered by using an XPath constraint. For example, you can configure your microflow to retrieve a list of completed orders from the database. You can also further process this data, for example, by calculating the total value of those orders.

This document teaches you how to do the following:

* Retrieve and filter a list of objects from the database
* Update multiple objects by iterating over a list
* Calculate the total list value

## Preparing the Data Structure, GUI, and Example Data

Before you continue, you should first set up a test app, and populate it with test data. To do so, follow these steps:

1. Create a [domain model](/refguide/configuring-a-domain-model/) with the following entities:
    * **Customer**
        | Attribute name | Attribute type |
        | --- | --- |
        | *CustomerID* | String |
        | *Name*| String |
        | *Address* | String |
        | *ZipCode* | String |
        | *City* | String |
    * **Order**
       | Attribute name | Attribute type |
       | --- | --- |
       | *Number* | Integer |
       | *Date* | Date and time |
       | *TotalPrice* | Decimal |
       | *OrderStatus* | Enumeration |

    One **Customer** entity can be associated with many **Orders**, so set the association between the entities accordingly.

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/18581378.png" alt="Customer and Order entities with one-to-many association" class="no-border" >}}

2. Create [overview and detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/) to manage the **Customer** and **Order** objects.
3. Create [menu items](/refguide/setting-up-the-navigation-structure/#menu-items) to access the **Customer** and **Order** overview pages.
4. Add the following **Customer** data to your app:
    | Name | Address | Zip code | City |
    | --- | --- | --- | --- |
    | Olav | Gedempte Zalmhaven 34 | 3050 TE | Rotterdam |
    | Tim | Kornoeljestraat 14 | 2514 RT | Den Haag |
    | Peter | Meloenstraat 123 | 2565 PE | Den Haag |
    | Harry | Emmerreklaan 25 | 1458 PE | Utrecht |

5. Add the following **Order** data to your app:
    | Number | Customer | Date | Total price | Order status |
    | --- | --- | --- | --- | --- |
    | 1 | Harry | 1/28/2022 | 345.00 | Open |
    | 2 | Olav | 12/30/2021 | 1234.60 | Processing |
    | 3 | Peter | 1/5/2022 | 23.60 | Open |
    | 4 | Tim | 1/4/2022 | 586.90 | Complete |
    | 5 | Olav | 1/21/2022 | 25.60 | Open |
    | 6 | Peter | 1/16/2022 | 154.00 | Complete |

## Retrieving and Filtering a List of Objects from the Database

Use a microflow with a [Retrieve](/refguide/retrieve/) activity to retrieve a list of objects, and then filter that list by applying an [XPath constraint](/refguide/xpath-constraints/). For example, the microflow can retrieve all orders from the database, and then filter that list to only the orders with the **Processing** status.

1. Create a new microflow by right-clicking your module and selecting **Add** > **Microflow**.
2. In the **Add Microflow** dialog box, in the **Name** field, enter *IVK_SetOrderToComplete*, and then click **OK**.
3. On the **Orders** overview page, add an **Action** button to the toolbar.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581118.png" alt="Adding the Action button" class="no-border" >}}

4. Double-click the **Action** button and change the **Caption** to *Set Processing to Complete*.
5. In the **On click** list, select **Call a microflow**, and then select the **IVK_SetOrderToComplete** microflow.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581054.png" alt="Selecting the caption and microflow" class="no-border" >}}

6. Open the **IVK_SetOrderToComplete** microflow by right-clicking the new button and selecting **Go to microflow**.
7. Open the **Toolbox** and search for the **Retrieve** activity.
8. Drag a **Retrieve** activity from the **Toolbox** to the line between the start and end events.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581091.png" alt="A view of the microflow with the Retrieve activity" class="no-border" >}}

9. Double-click the **Retrieve** activity, and then set the following properties:
    * **Source** – select **From database**
    * **Entity** – select **Order**
    * **List** – enter *OrderList*
10. To filter the list to only orders with the status **Processing**, in the **XPath constraint** field, add the following XPath expression: `[OrderStatus = 'Processing']`.

{{% alert color="info" %}}
Apart from filtering the list of orders by an attribute of the Order entity itself, you can also define a constraint by using attributes of an associated entity, such as **Customer**. For example, to filter the orders based on the city where the customer is located, apply the following constraint: `Sales.Order_Customer/Sales.Customer/City = 'Rotterdam'`.
{{% /alert %}}

## Updating Multiple Objects by Iterating over a List

After retrieving a list of orders with the status **Processing**, use a [loop](/refguide/loop/) to iterate over this list and change the status of each object to **Complete**.

1. Open the **IVK_SetOrderToComplete** microflow that you created in the previous section.
2. Drag a **Loop** activity from the **Toolbox**, and place it between the **OrderProcessingList** activity and the end event of the microflow.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581086.png" alt="Microflow with a Retrieve activity followed by a Loop activity" class="no-border" >}}

3. Double-click the **Loop** activity.
4. In the **Iterate over** list, select **OrderList**, and then click **OK**.
5. Drag a **Change object** activity into the **Loop** activity.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581084.png" alt="A Change object activity placed inside a Loop activity" class="no-border" >}}

6. Double-click the **Change object** activity.
7. In the **Object** list, select **IteratorOrder**, and then click **New**.
8. In the **Edit Change Item** dialog box, configure the following settings:
    * **Member** – select **OrderStatus**
    * **Value** – enter *MyFirstModule.OrderStatus.Complete*
9. Click **OK**, and then click **OK** again.
10. Drag a **Commit** activity from the **Toolbox** and place it after the **Loop** activity.
11. Double-click the **Commit** activity.
12. In the **Commit Object(s)** dialog box, configure the following settings:
    * **Object or List** – select **OrderList**
    * **Refresh in Client** – set to **Yes**; this settings refreshes your list in the client so that your changes are visible
13. Click **OK**, and then save the microflow.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/working-with-lists-optimization.jpg" alt="A microflow configured to iterate over a list" class="no-border" >}}

14. Run your application locally.
15. On the **Orders** overview page, click **Set Processing to Complete**.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581113.png" alt="Setting the order status to Complete" class="no-border" >}}

## Calculating the Total List Value by Using a Variable and a Loop

To calculate the total sum of all your orders via a loop, create a variable which will be modified by every iteration of the loop.  

1. On the **Orders** overview page, add a new **Call microflow** button with the following settings:
    * **Caption** – enter *Calculate Total Order Price*
    * **Name** – enter *IVK_CalculateTotalPriceOrders*
2. In the **IVK_CalculateTotalPriceOrders** microflow, add a **Retrieve** activity from the **Toolbox** to the line between the start and end events.
3. Double-click the **Retrieve** activity, and then set the following properties:
    * **Source** – select **From database**
    * **Entity** – select **Order**
    * **List** – enter *OrderList*
4. Drag a **Loop** activity from the **Toolbox**, and place it between the **Retrieve** activity and the end event of the microflow.
5. Double-click the **Loop** activity.
6. In the **Iterate over** list, select **OrderList**, and then click **OK**.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581106.png" alt="Configuring the Loop activity to iterate over a list" class="no-border" >}}

7. Drag a **Create variable** activity from the **Toolbox** and place it before the **Retrieve** activity.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581073.png" alt="A microflow with a Create variable activity" class="no-border" >}}

8. Double-click the **Create variable** activity and configure the following settings:
    * **Data type** – select **Decimal**
    * **Value** – enter *0*
    * **Variable** – enter *CalculatedTotalPrice*

        {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/variable.png" alt="Configuring the Create variable activity" class="no-border" >}}

9. Drag a **Change variable** activity into the **Loop** activity.
10. Double-click the **Change variable** activity and configure the following settings:
    * **Variable** – select **CalculatedTotalPrice**
    * **Value** – enter `$CalculatedTotalPrice + $IteratorOrder/TotalPrice`

        With the above settings, as the loop iterates over the list, it adds the price of every order to the **CalculatedTotalPrice** variable.

11. Drag a **Show Message** activity from the **Toolbox** and place it after the **Loop** activity.
12. Double-click the **Show message** activity and configure the following settings:
    * **Template** – enter *Total calculated price: {1}*
    * **Parameters** – enter *toString($CalculatedTotalPrice)*
13. Click **OK**, and then save the microflow.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581063.png" alt="A microflow configured to calculate total list value with a loop" class="no-border" >}}

14. Rerun your application locally.
15. On the **Orders** overview page, click **Calculate total order price**.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581103.png" alt="Calculating the total price" class="no-border" >}}

## Calculating the Total List Value by Using an Aggregate Function

Instead of a loop, you can also calculate the total price by using the [aggregate list](/refguide/aggregate-list/) function. Use the aggregate list to calculate values such as the maximum, minimum, sum, average, and total number of objects over a list of objects.

1. In the **IVK_CalculateTotalPriceOrders** microflow, remove the loop and the **CalculatedTotalPrice** variable.
2. Add an **Aggregate list** activity after the **OrderList**.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581061.png" alt="Adding an Aggregate list activity" class="no-border" >}}

3. Double-click the **Aggregate list** activity, and then set the following properties:
    * **List** – select **OrderList**
    * **Function** – select **Sum**
    * **Attribute** – select **TotalPrice**
    * **Variable** – enter a descriptive name, for example, *SumTotalPrice*
4. Click **OK**.
5. Double-click the **Show message** activity.
6. In the **Parameters** section, delete the **$CalculatedTotalPrice** variable and add the **$SumTotalPrice** variable.
  
    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581055.png" alt="Configuring the Show message activity" class="no-border" >}}

7. Click **OK**, and then save the microflow.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581058.png" alt="A microflow configured to calculate the total list value with aggregates" class="no-border" >}}

8. Rerun your application locally.
9. On the **Orders** overview page, click **Calculate total order price**.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581103.png" alt="Calculating the total price" class="no-border" >}}

## Read More

* [Microflows](/refguide/microflows/)
* [Object Activities](/refguide/object-activities/)
* [List Activities](/refguide/list-activities/)
