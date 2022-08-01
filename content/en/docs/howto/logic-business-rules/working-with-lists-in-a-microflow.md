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

    {{< figure src="/attachments/howto/logic-business-rules/define-access-rules-using-xpath/18581378.png" >}}

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

In the previous section you have set up a basic data structure and created some sample data. In this section you will retrieve all the 'Processing' orders. To achieve this you will add a microflow button to the 'Orders' overview. In this microflow you will add a 'Retrieve from database' 'Action activity' with an XPath constraint. The XPath constraint will filter the retrieved list to only the 'Invoiced' orders.

Mendix utilizes XPath constraints to apply filters. To learn more about XPath, see [XPath Contains](/refguide/xpath-contains/) in the *Studio Pro Guide*.

1.  Create a new microflow by right-clicking the module and selecting **Add** > **Microflow**.
2.  Name the Microflow _IVK_SetOrderToComplete_.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581093.png" >}}

3.  Save the new menu item by clicking **OK**. You should see an empty Microflow like this:

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/8946316.png" >}}

4.  Add an **Action** button to the toolbar of the orders overview:

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581118.png" >}}

5.  Double-click the action button and in its properties, enter *Set Processing to Complete* for the **Caption**.
6.  For **On click**, select **Call a microflow**, and then select the **IVK_SetOrderToComplete** microflow.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581054.png" >}}

7.  Open the **IVK_SetOrderToComplete** microflow by right-clicking the new button and selecting **Go to microflow**.
8.  Open the **Toolbox** and search for the **Retrieve** action.

9.  Drag a **Retrieve** action from the toolbox to the line between the green start and red end event. This inserts a retrieve action activity.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581091.png" >}}

10. Double-click the retrieve activity to open its properties.
11. Select **From database** for the **Source** option.
12. Set the following properties:<br>
    a. For **Entity**, select **Order**_<br>
    b. For **List**, enter **OrderList**<br>

	{{% alert color="info" %}}With the currents settings your retrieve action gets every order in the database, using the XPath expression in the following steps you will filter the results that come back from the database.
	{{% /alert %}}

13.  Add the following XPath expression in the XPath constraint field: `[OrderStatus = 'Processing']`. This expression will filter the list to only orders with the status **Processing**.
    Your properties screen should look like this:

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581088.png" >}}

	{{% alert color="info" %}}With the currents settings your retrieve action gets all the 'Processing' orders in the database. In the next section you will edit this list of orders.
	{{% /alert %}}
    {{% alert color="info" %}}In the previous sections you filtered the list of orders from database on attributes of the order entity itself. In this section you will constrain on attributes over the associated customer object. For example, to filter the orders based on the city where the customer is located, apply the following constraint: *Sales.Order_Customer/Sales.Customer/City = 'Rotterdam'*.
	{{% /alert %}}

You should see a microflow like this:

{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581087.png" >}}

## 4 Iterating Over a List of Objects

In the previous section you retrieved a list of orders with the status 'Processing'. In this section you will iterate over this list and change the status of each object individually to 'Complete'. To do so you will use a 'Loop' to iterate over the 'OrderProcessingList' and use the change object activity to change the status of the order object.

1.  Open the **IVK_SetOrderToComplete** microflow created in the previous section.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581087.png" >}}

2.  Drag a **Loop** action from the **Toolbox** to the line behind the **OrderProcessingList** action activity.

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581086.png" >}}

	{{% alert color="info" %}}A loop is used to iterate over a list of objects. For each object the flow inside the loop is executed. For each object the flow inside the loop is executed. The flow starts at the element that has no incoming sequence flows. A loop can contain all elements used in microflows, with the exception of start and stop events. Additionally, a loop (and only a loop) can contain break events and continue events. The iterator, which looks the same as a parameter, represents the current object in the list for each iteration. Beneath it the name of the object is shown in black and the entity type of the object in blue. For more information, see [Loop](/refguide/loop/).
	{{% /alert %}}

3.  Double click the loop activity and select the **OrderList** to iterate over.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581085.png" >}}

4.  Drag a **Change object** activity inside the loop:

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581084.png" >}}

5.  Double click the **change activity** to open its properties.
6.  Select the **IteratorOrder** at the **Object** drop-down menu and click the **New** button. This will open the **Edit Change Item** editor.
7. Set the following properties:<br>
    a. For **Member** select **OrderStatus**.<br>
    b. For **Value** enter `MyFirstModule.OrderStatus.Complete`.<br>

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581080.png" >}}

8. Click **OK**. Your properties screen should look like this:

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581078.png" >}}

9. Set **Commit** and **Refresh in Client** to **Yes** to commit your changes to the database and refresh your list in the client so your changes will be visible, then click **OK**. Your microflow should look like this:

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581076.png" >}}
    
	Or, to optimize the number of commits, you can perform the commit outside of the loop. This way, there will be a single commit to the database instead of one per order:

	{{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/working-with-lists-optimization.jpg" >}}

11. **Re-deploy** your application.
12. Click the **Set Processing to Complete** button. The orders with status 'Processing' will now be changed to 'Complete'.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581113.png" >}}

## 5 Calculating the Total List Value by Using a Variable and a Loop

In the previous section you iterated over a filtered list of objects using a 'Loop'. In this section you will use a loop to calculate the total sum of all your orders. To calculate this sum you will create a variable, which will be changed for every iteration in the loop.  

1.  Add a new microflow button to your order data grid with the following details:</br>
    a. **Caption** of the button:  Calculate Total Order Price
    b. **Name** of the microflow: IVK_CalculateTotalPriceOrders
2.  In the new microflow, add a **Retrieve** activity for **Orders** and a loop for this list to the microflow.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581106.png" >}}

3.  Drag a **Create variable** before Retrieve0 OrdersList.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581073.png" >}}

4.  Double click the **Create … variable** to open its properties and configure it as follows:</br>
    a.  For **Data type** select **Decimal**.</br>
    b.  In the value editor, enter `0`.</br>
    c.  For **Variable** enter *CalculatedTotalPrice*.</br>

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/variable.png" >}}
    
5.  Add a **Change variable** activity inside the loop.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581069.png" >}}

6.  Double click the **Change variable** activity to open its **Properties** and set the following properties:<br>
    a. For **Variable** select **CalculatedTotalPrice**.<br>
    b. For **Value** enter `$CalculatedTotalPrice + $IteratorOrder/TotalPrice`.<br>

	{{% alert color="info" %}}By iterating over the list, the price of every order will be added one by one to the 'CalculatedTotalPrice' variable
	{{% /alert %}}

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581067.png" >}}

7.  Drag a **Show Message** action from the toolbox to the end of the microflow.
8.  Double-click the **message** activity to open its properties and set the following properties:<br>
    a.  For **Template** enter *Total calculated price: {1}*.<br>
    b.  For **Parameters** add `toString($CalculatedTotalPrice)`.<br>

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581064.png" >}}

9. Click **OK**. You should see a Microflow like this:

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581063.png" >}}

10.  **Re-deploy** your application.
11. Click the **Calculate total order price** button and you will see the price of all the orders added up.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581103.png" >}}

## 6 Calculating the Total List Value by Using an Aggregate Function

In the previous section you iterated over a list to add the value of single object to a total price variable. In this section you will use the 'aggregate list' function to calculate the total price instead of using a loop. The aggregate list can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

1.  Open the **IVK_CalculateTotalPriceOrders** microflow and remove the loop and the **CalculatedTotalPrice** variable.
2.  Add an **Aggregate list** activity after the **OrderList**.

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581061.png" >}}

3.  Double click the aggregate list activity to open its properties and set the following properties:</br>
    a. For **List** select **OrderList**.</br>
    b. For **Function** select **Sum** (see the [documentation](/refguide/aggregate-list/) for the description of the other functions).</br>
    c. For **Attribute** select **TotalPrice**.</br>
    d. For **Variable** enter a descriptive name like _SumTotalPrice_.<br>

    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581059.png" >}}

4.  Click **OK**.
5.  Double click the message activity and replace the `$CalculatedTotalPrice` variable in the **Parameters** expression with the `$SumTotalPrice` variable.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581055.png" >}}

6.  Click **OK**. Your microflow should look like this:
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581058.png" >}}

7.  Re-deploy your application.

8.  Click the **Calculate total order price** button and you will see the same price of all the orders added up.
  
    {{< figure src="/attachments/howto/logic-business-rules/working-with-lists-in-a-microflow/18581103.png" >}}

## 7 Read More

*   [Defining access rules using XPath](/howto/logic-business-rules/define-access-rules-using-xpath/)
*   [Optimizing Retrieve Activities](/howto/logic-business-rules/optimizing-retrieve-activities/)
