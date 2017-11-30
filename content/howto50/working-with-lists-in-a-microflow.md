---
title: "Working With Lists in a Microflow"
category: "Logic & Business Rules"
---

In this how-to you will learn how to work with a list of objects in a Microflow. To manage this list you will first retrieve a filtered list of objects from the database. Mendix utilizes XPath constraints to apply filters. To learn more about XPath, take a look at this [documentation](/refguide5/xpath-contains). Secondly, you will iterate over the retrieved list of objects and calculate the total price of all the orders in a [Loop](/refguide5/loop). You will end this how-to with an alternative to calculating aggregated values over a list of objects.

## 1\. Preparing the Data Structure, GUI and Example Data

To see the results of this how-to it is necessary that you setup a test project with test data.

Before you continue, make sure that you know how to create:

*   **Domain models**, if you need more info, take a look at this [how-to](creating-a-basic-data-layer).
*   **Overview and detail pages**, if you need more info, take a look at this [how-to](creating-your-first-two-overview-and-detail-pages).
*   **Menu items**, if you need more info, take a look at this [how-to](setting-up-the-navigation-structure).

1.  Create the following domain model:
    ![](attachments/8785272/8946672.png)
2.  Create **overview** and **detail** pages to manage objects of type **Customer** and **Order**.
3.  Create **menu items** to access the **Order** and the **Customer** overview pages.
4.  Add the following customer data to your app:
    ![](attachments/8785272/8946678.png)
5.  Add the following order data to your app:
    ![](attachments/8785272/8946679.png)

## 2\. Retrieving a Filtered List of Objects from the Database

In the previous section you have set up a basic data structure and created some sample data. In this section you will retrieve all the 'Processing' orders. To achieve this you will add a microflow button to the 'Orders' overview. In this microflow you will add a 'Retrieve from database' 'Action activity' with an XPath constraint. The XPath constraint will filter the retrieved list to only the 'Invoiced' orders.

1.  Add a new **microflow** to your module.
    _![](attachments/8785360/8946806.png)_
2.  Name the Microflow _IVK_SetOrderToComplete_.
    ![](attachments/8785360/8946808.png)
3.  Save the new menu item by clicking **OK**.

    You should see an empty Microflow like this:
    ![](attachments/8784287/8946316.png)
4.  Add a **Microflow button** to the toolbar of the orders overview and change its caption to _Set Processing to Complete_.
    ![](attachments/8785360/8946696.png)
5.  Right click the Microflow button and click **Select Microflow** from the context menu.
    ![](attachments/8785360/8946801.png)
6.  Select the **IVK_SetOrderToComplete** Microflow and click **select**.
    ![](attachments/8785360/10682376.png)
7.  Open the **IVK_SetOrderToComplete **Microflow created in the first steps by double clicking at it in the Project Explorer.
    ![](attachments/8785360/8946809.png)
    You should see the empty Microflow again:
    ![](attachments/8784287/8946316.png)
8.  Open the **Toolbox**. It should be on the bottom right of the Mendix Modeler.
    ![](attachments/8784287/8946802.png)
9.  Drag a **Retrieve** action from the toolbox to the line between the green start and red end event. This inserts a retrieve action activity.
    ![](attachments/8785360/8946812.png)
10.  Double click the retrieve activity to open its properties.
    ![](attachments/8785360/8946814.png)
11.  Select **From database** as _source_ option.
    ![](attachments/8785360/8946816.png)
12. Set the following properties:
    * For _Entity_ select **Order**.
    * For _Name_ enter **OrderList**

    With the currents settings your retrieve action gets every order in the database, using the XPath expression in the following steps you will filter the results that come back from the database.

13. Add the following XPath expression in the XPath constraint field: _[OrderStatus = 'Processing']_. This expression will filter the list to only orders with the status **Processing**.
14. Enter a descriptive name for the list variable. Your properties screen should look like this:
    ![](attachments/8785360/8946818.png)

    With the currents settings your retrieve action gets all the 'Processing' orders in the database. In the next section you will edit this list of orders. 

    You should see a Microflow like this:
    ![](attachments/8785360/8946819.png)

## 3\. Iterate Over a List of Objects

In the previous section you retrieved a list of orders with the status 'Processing'. In this section you will iterate over this list and change the status of each object individually to 'Complete'. To do so you will use a 'Loop' to iterate over the 'OrderProcessingList' and use the 'Change object' activity to change the status of the order object.

1.  Open the **IVK_SetOrderToComplete** microflow created in the previous section.
    ![](attachments/8785360/8946819.png)
2. Drag a **Loop** action from the toolbox to the line, behind the **OrderProcessingList** action activity.
    ![](attachments/8785360/8946820.png)

    For each object the flow inside the loop is executed. The flow starts at the element that has no incoming sequence flows. A loop can contain all elements used in microflows, with the exception of start and stop events. Additionally, a loop (and only a loop) can contain break events and continue events.

    The iterator which looks the same as an input object represents the variable that holds one element of the list for each iteration. Beneath it the name of the variable is shown in black and the type of the variable in blue. For more information take a look at this [documentation](/refguide5/loop)

3. Double click the loop activity and select the **OrderProcessingList **to iterate over.
    ![](attachments/8785360/8946821.png)
4. Drag a **Change object** activity inside the loop:
    ![](attachments/8785360/8946822.png)
5. Double click the **change activity** to open its properties.
    ![](attachments/8785360/8946823.png)
6. Select the **IteratorOrder**at the **Variable **drop down and click the **New**button.
    ![](attachments/8785360/8946825.png)

    You will see the following properties screen:
    ![](attachments/8785360/8946826.png)
7. Set the following properties
    * For **Member **select _Orderstatus_.
    * For **Value **enter _MyFirstModule.OrderStatus.Complete
    _![](attachments/8785360/8946827.png)

    Click **OK**. Your properties screen should look like this:
    ![](attachments/8785360/8946829.png)

    Set 'Commit' and 'Refresh in Client' to 'Yes' to commit your changes to the database and refresh your list in the client so your changes will be visible.

8.  Click **OK. **Your microflow should look like this:
    ![](attachments/8785360/8946831.png)
9.  **Re-deploy** your application.
10.  Click the **Set Processing to Complete** button. The orders with status 'Processing' will now be changed to 'Complete'.
    ![](attachments/8785360/8946704.png)

## 4\. Calculating a Total List Value Using a Variable and a Loop 

In the previous section you iterated over a filtered list of objects using a 'Loop'. In this section you will use a loop to calculate the total sum of all your orders. To calculate this sum you will generate a variable, which will be changed for every iteration in the loop.  

1.  Add an empty microflow to your order datagrid and name it _IVK_CalculateTotalPriceOrders._
2.  Name the microflow button _Calculate total order price_. If you don't know how to do this please look at step 1-6 of section 2.0 of this how-to.
    ![](attachments/8785360/9273346.png)
3.  Add a **Retrieve** activity for **Orders** and a loop for this list to the microflow.
    ![](attachments/8785360/8946718.png)
4.  Drag a **Create variable** before the Orderslist.
    ![](attachments/8785360/9273349.png)
5.  Double click the **variable** to open its properties.
    ![](attachments/8785360/9273350.png)
6.  Set the following properties:
    1.  For **Data type**select _Float/Currency_
    2.  For **Value **enter _0_
    3.  For **Variable** enter _CalculatedTotalPrice_
7. Add a **Change** variable inside the loop.

    It is not possible to drag an activity directly into a loop. So drag the activity first outside the loop, than drag it inside the loop.

    ![](attachments/8785360/9273354.png)

8. Double click the **change** variable activity to open its **properties.**
    ![](attachments/8785360/9273355.png)

9. Set the following properties:

    * For **Variable **select _CalculatedTotalPrice_
    * For **Value **enter _$CalculatedTotalPrice + $IteratorOrder/TotalPrice

    By iterating over the list, the price of every order will be added one by one to the 'CalculatedTotalPrice' variable

    Your properties screen should look like this:
    ![](attachments/8785360/9273356.png)

10. Drag a **Show Message** action from the toolbox to the end of the microflow.
    ![](attachments/8785360/9273357.png)
11. Double click the **message** activity to open its properties.
    ![](attachments/8785360/9273359.png)
12. Set the following properties:
    * For **Template** enter _Total calculated price: {1}._
    * For **Parameters **add _toString($CalculatedTotalPrice).
    ![](attachments/8785360/9273360.png)
13. Click **OK**. You should see a Microflow like this:
    ![](attachments/8785360/9273361.png)
14. **Re-deploy** your application.
15. Click the **Calculate total order price** button and you will see the price of all the orders added up.
    ![](attachments/8785360/8946721.png)

## 5\. Calculate a Total List Value Using an Aggregate Function

In the previous section you iterated over a list to add the value of single object to a total price variable. In this section you will use the 'aggregate list' function to calculate the total price instead of using a loop. The aggregate list can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

1.  Open the **IVK_CalculateTotalPriceOrders** microflow and remove the loop and the **CalculatedTotalPrice** variable.
    ![](attachments/8785360/9273364.png)
2.  Add an **Aggregate list** activity after the **Orderlist**.
    ![](attachments/8785360/9273365.png)
3.  Double click the aggregate list activity to open its properties.
    ![](attachments/8785360/9273366.png)
4. Set the following properties
    * For **Variable **select _OrderList_.
    * For **Function **select _Sum - see the [documentation](/refguide5/aggregate-list) for the description of the other functions.
    * For **Attribute** select _TotalPrice_
    * For **Variable** enter a descriptive name like _SumTotalPrice_.
    ![](attachments/8785360/9273368.png)

5. Click **OK**.
6.  Double click on the message activity.
    ![](attachments/8785360/9273372.png)

7.  Replace the **$CalculatedTotalPrice** variable in the **Parameters Expression**by the **$SumTotalPrice **variable
    ![](attachments/8785360/9273375.png)

8.  Click **OK**. Your microflow should look like this:
    ![](attachments/8785360/9273369.png)

9.  Re-deploy your application.

10.  Click the **Calculate total order price** button and you will see the same price of all the orders added up.
    ![](attachments/8785360/8946721.png)

## 6\. Filter List of Orders on the City of the Associated Customers

In the previous sections you filtered the list of orders from database on attributes of the order entity itself. In this section you will constrain on attributes over the associated customer object. In the example of this section you will set the order status of all customers in Rotterdam to the status 'Complete'. 

1.  Open the microflow **IVK_SetOrderToComplete**.
    ![](attachments/8785360/8946705.png)
2.  Open the **OrderProcessingList** activity.
3.  Add an **XPath constraint** over the association to customer, constraining on the city (Rotterdam) of this customer.
    ![](attachments/8785360/8946707.png)
4.  Click **OK** and **re-deploy** your application.
5.  Open the application in the browser.
6.  Click the **Set Processing to Complete** button. All the orders from customers in Rotterdam are set to **Complete**.
    ![](attachments/8785360/8946708.png)

## 7\. Related content

*   [Defining access rules using XPath](defining-access-rules-using-xpath)
*   [Triggering Logic using Microflows](triggering-logic-using-microflows)
*   [Creating a Custom Save Button](creating-a-custom-save-button)
*   [Extending Your Application with Custom Java](extending-your-application-with-custom-java)
*   [XPath](/refguide5/xpath)
*   [XPath Constraints](/refguide5/xpath-constraints)
*   [Aggregate List](/refguide5/aggregate-list)
